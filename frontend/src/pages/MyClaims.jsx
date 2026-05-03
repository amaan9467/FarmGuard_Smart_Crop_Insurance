import React, { useEffect, useState } from "react";
import { claimApi } from "../api/claimApi";
import { Link } from "react-router-dom";

const MyClaims = () => {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClaims();
  }, []);

  const fetchClaims = async () => {
    try {
      const data = await claimApi.getMyClaims();
      setClaims(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
      case "settled":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-600"></div>
    </div>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Claims</h1>
        <Link to="/dashboard/claims/new" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition">
          File New Claim
        </Link>
      </div>

      {claims.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500 mb-4">You have not filed any claims yet.</p>
          <Link to="/dashboard/claims/new" className="text-green-600 font-semibold hover:underline">
            File a Claim Now
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {claims.map((claim) => (
            <div key={claim._id} className="bg-white border rounded-xl p-6 shadow-sm flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{claim.policyId?.name || "Unknown Policy"}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getStatusColor(claim.status)}`}>
                    {claim.status.replace("_", " ")}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-1"><strong>Damage:</strong> {claim.damageType} ({new Date(claim.damageDate).toLocaleDateString()})</p>
                <p className="text-gray-600 text-sm"><strong>Location:</strong> {claim.farmLocation.village}, {claim.farmLocation.district}</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Estimated Loss</p>
                <p className="font-bold text-xl text-gray-800">₹{claim.estimatedLoss.toLocaleString()}</p>
                {claim.approvedAmount > 0 && (
                  <p className="text-sm text-green-600 font-bold mt-1">Approved: ₹{claim.approvedAmount.toLocaleString()}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyClaims;
