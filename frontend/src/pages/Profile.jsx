import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import api from "../api/axios";

const Profile = () => {
  const { user, checkAuth } = useAuth();
  const toast = useToast();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!name.trim()) return toast.error("Name cannot be empty");
    setSaving(true);
    try {
      await api.put("/auth/profile", { name });
      toast.success("Profile updated successfully!");
      setEditing(false);
      if (typeof checkAuth === "function") checkAuth();
    } catch (err) {
      toast.error(err.response?.data?.msg || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Profile</h1>

      <div className="bg-white border rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-3xl font-bold uppercase">
            {user?.name?.charAt(0) || "U"}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
            <p className="text-gray-500">{user?.role?.toUpperCase()}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
            {editing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border-2 border-green-400 rounded-lg outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
              />
            ) : (
              <div className="p-3 bg-gray-50 border rounded-lg text-gray-800">{user?.name}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
            <div className="p-3 bg-gray-50 border rounded-lg text-gray-800">{user?.email}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Account Created</label>
            <div className="p-3 bg-gray-50 border rounded-lg text-gray-800">
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : "—"}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex gap-3">
          {editing ? (
            <>
              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition disabled:opacity-70"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
              <button
                onClick={() => { setEditing(false); setName(user?.name || ""); }}
                className="border border-gray-300 text-gray-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
