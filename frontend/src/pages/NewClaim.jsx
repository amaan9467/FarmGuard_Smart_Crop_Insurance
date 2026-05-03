import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { insuranceApi } from "../api/insuranceApi";
import { claimApi } from "../api/claimApi";
import { useToast } from "../context/ToastContext";

const NewClaim = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    enrollmentId: "",
    state: "",
    district: "",
    village: "",
    damageType: "",
    damageDate: "",
    damageDescription: "",
    estimatedLoss: "",
  });

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const data = await insuranceApi.getMyEnrollments();
      const active = data.filter(e => e.status === "active");
      setEnrollments(active);
    } catch (err) {
      toast.error("Failed to load active policies");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.enrollmentId || !formData.damageType || !formData.estimatedLoss) {
      return toast.error("Please fill all required fields");
    }

    setSubmitting(true);
    try {
      const payload = {
        enrollmentId: formData.enrollmentId,
        farmLocation: {
          state: formData.state,
          district: formData.district,
          village: formData.village,
        },
        damageType: formData.damageType,
        damageDate: formData.damageDate,
        damageDescription: formData.damageDescription,
        estimatedLoss: Number(formData.estimatedLoss),
        documents: [], // Mocking documents upload
      };

      await claimApi.fileClaim(payload);
      toast.success("Claim filed successfully");
      navigate("/dashboard/claims");
    } catch (err) {
      toast.error(err.response?.data?.msg || "Failed to file claim");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-600"></div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">File a New Claim</h1>
      <p className="text-gray-600 mb-8">Submit details of crop damage to process your insurance claim.</p>

      {enrollments.length === 0 ? (
        <div className="bg-yellow-50 text-yellow-800 p-6 rounded-lg text-center">
          <p className="mb-3">You don't have any active insurance policies to file a claim against.</p>
          <Link to="/dashboard/policies" className="font-bold underline hover:text-yellow-900">
            Browse & Enroll in a Policy
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white border rounded-xl shadow-sm p-6 space-y-6">
          
          {/* Policy Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Active Policy *</label>
            <select
              name="enrollmentId"
              value={formData.enrollmentId}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">-- Choose Policy --</option>
              {enrollments.map(e => (
                <option key={e._id} value={e._id}>
                  {e.policyId.name} ({e.cropDetails.cropType} - {e.cropDetails.farmArea} acres)
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
              <input type="text" name="district" value={formData.district} onChange={handleChange} className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Village</label>
              <input type="text" name="village" value={formData.village} onChange={handleChange} className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" />
            </div>
          </div>

          {/* Damage Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Damage Type *</label>
              <select name="damageType" value={formData.damageType} onChange={handleChange} className="w-full p-3 border rounded-lg bg-white outline-none focus:ring-2 focus:ring-green-500">
                <option value="">-- Select Type --</option>
                <option value="Flood">Flood / Heavy Rain</option>
                <option value="Drought">Drought</option>
                <option value="Pest">Pest Attack</option>
                <option value="Fire">Fire</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date of Damage *</label>
              <input type="date" name="damageDate" value={formData.damageDate} onChange={handleChange} className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Loss (₹) *</label>
            <input type="number" name="estimatedLoss" value={formData.estimatedLoss} onChange={handleChange} className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" placeholder="e.g. 50000" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Description</label>
            <textarea name="damageDescription" value={formData.damageDescription} onChange={handleChange} rows="4" className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" placeholder="Describe the extent of damage..."></textarea>
          </div>

          <button type="submit" disabled={submitting} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-70">
            {submitting ? "Submitting..." : "Submit Claim"}
          </button>
        </form>
      )}
    </div>
  );
};

export default NewClaim;
