import React, { useEffect, useState } from "react";
import { dashboardApi } from "../api/dashboardApi";
import { ShieldCheck, FileWarning, DollarSign, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [statsData, activityData] = await Promise.all([
        dashboardApi.getDashboardStats(),
        dashboardApi.getRecentActivity(),
      ]);
      setStats(statsData);
      setActivity(activityData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-600"></div>
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-green-50 p-6 rounded-xl border border-green-100 flex items-center gap-4">
          <div className="bg-green-100 p-4 rounded-full text-green-600 flex-shrink-0">
            <ShieldCheck size={28} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium whitespace-nowrap">Active Policies</p>
            <h3 className="text-2xl font-bold text-gray-800">{stats?.activePolicies || 0}</h3>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 flex items-center gap-4">
          <div className="bg-yellow-100 p-4 rounded-full text-yellow-600 flex-shrink-0">
            <DollarSign size={28} />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500 font-medium whitespace-nowrap">Total Coverage</p>
            <h3 className="text-2xl font-bold text-gray-800">₹{stats?.totalCoverage?.toLocaleString() || 0}</h3>
          </div>
        </div>

        <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex items-center gap-4">
          <div className="bg-red-100 p-4 rounded-full text-red-600 flex-shrink-0">
            <FileWarning size={28} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium whitespace-nowrap">Pending Claims</p>
            <h3 className="text-2xl font-bold text-gray-800">{stats?.pendingClaims || 0}</h3>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4 mb-10">
        <Link to="/dashboard/policies" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition">
          Browse Policies
        </Link>
        <Link to="/dashboard/claims/new" className="bg-white border-2 border-green-600 text-green-700 hover:bg-green-50 px-6 py-2 rounded-lg font-semibold transition">
          File a Claim
        </Link>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Activity size={20} className="text-green-600" /> Recent Activity
        </h2>
        {activity.length === 0 ? (
          <p className="text-gray-500">No recent activity found.</p>
        ) : (
          <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
            {activity.map((act, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 border-b last:border-0 hover:bg-gray-100 transition">
                <div>
                  <h4 className="font-semibold text-gray-800">{act.title}</h4>
                  <p className="text-sm text-gray-500">{new Date(act.date).toLocaleDateString()}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  act.status === "active" || act.status === "approved" ? "bg-green-100 text-green-800" :
                  act.status === "pending" || act.status === "under_review" ? "bg-yellow-100 text-yellow-800" :
                  "bg-gray-200 text-gray-800"
                }`}>
                  {act.status.replace("_", " ").toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
