import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LayoutDashboard, FileText, ClipboardList, PlusCircle, User, ShieldCheck } from "lucide-react";

const DashboardLayout = () => {
  const { user } = useAuth();
  const location = useLocation();

  const links = [
    { name: "Overview", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Browse Policies", path: "/dashboard/policies", icon: <ShieldCheck size={20} /> },
    { name: "My Claims", path: "/dashboard/claims", icon: <ClipboardList size={20} /> },
    { name: "File Claim", path: "/dashboard/claims/new", icon: <PlusCircle size={20} /> },
    { name: "Profile", path: "/dashboard/profile", icon: <User size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 mt-20 pt-4 pb-10 max-w-7xl mx-auto px-4 gap-6">
      {/* Sidebar */}
      <aside className="w-64 bg-white rounded-xl shadow-md p-6 flex-shrink-0 flex-col hidden md:flex">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-green-800">My Dashboard</h2>
          <p className="text-sm text-gray-500">Welcome, {user?.name}</p>
        </div>

        <nav className="flex-1 space-y-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                location.pathname === link.path
                  ? "bg-green-100 text-green-800 font-semibold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-green-700"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white rounded-xl shadow-md p-6 md:p-8 overflow-y-auto mb-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
