import React, { useEffect, useState } from "react";
import { insuranceApi } from "../api/insuranceApi";
import Modal from "../components/Modal";
import { useToast } from "../context/ToastContext";

const Policies = () => {
  const toast = useToast();
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Enrollment Modal State
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [cropType, setCropType] = useState("");
  const [farmArea, setFarmArea] = useState("");
  const [season, setSeason] = useState("");
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      const data = await insuranceApi.getPolicies();
      setPolicies(data);
    } catch (err) {
      toast.error("Failed to load policies");
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = async (e) => {
    e.preventDefault();
    if (!cropType || !farmArea || !season) return toast.error("Please fill all fields");
    
    setEnrolling(true);
    try {
      await insuranceApi.enrollInPolicy({
        policyId: selectedPolicy._id,
        cropType,
        farmArea: Number(farmArea),
        season
      });
      toast.success("Successfully enrolled in policy!");
      setSelectedPolicy(null);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Enrollment failed");
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-600"></div>
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Available Insurance Policies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {policies.map((policy) => (
          <div key={policy._id} className="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-6">
            <h3 className="text-xl font-bold text-green-800 mb-2">{policy.name}</h3>
            <p className="text-gray-600 mb-4">{policy.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Premium</p>
                <p className="font-bold text-gray-800">₹{policy.premiumAmount}/acre</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Coverage</p>
                <p className="font-bold text-gray-800">₹{policy.coverageAmount}/acre</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Duration</p>
                <p className="font-bold text-gray-800">{policy.durationMonths} Months</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Type</p>
                <p className="font-bold text-gray-800 capitalize">{policy.coverageType.replace("_", " ")}</p>
              </div>
            </div>

            <button 
              onClick={() => setSelectedPolicy(policy)}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>

      {/* Enrollment Modal */}
      {selectedPolicy && (
        <Modal isOpen={!!selectedPolicy} onClose={() => setSelectedPolicy(null)}>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Enroll in {selectedPolicy.name}</h2>
          <p className="text-gray-600 mb-6 text-sm">Please provide your crop details to calculate the premium.</p>

          <form onSubmit={handleEnroll} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Crop Type</label>
              <input 
                type="text" 
                value={cropType} 
                onChange={e => setCropType(e.target.value)} 
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" 
                placeholder="e.g. Wheat"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Farm Area (Acres)</label>
              <input 
                type="number" 
                value={farmArea} 
                onChange={e => setFarmArea(e.target.value)} 
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" 
                placeholder="e.g. 5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Season</label>
              <select 
                value={season} 
                onChange={e => setSeason(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-500 bg-white"
              >
                <option value="">Select Season</option>
                <option value="Kharif">Kharif (Monsoon)</option>
                <option value="Rabi">Rabi (Winter)</option>
                <option value="Zaid">Zaid (Summer)</option>
              </select>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mt-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Premium / Acre:</span>
                <span className="font-semibold">₹{selectedPolicy.premiumAmount}</span>
              </div>
              <div className="flex justify-between items-center border-t pt-2">
                <span className="text-gray-800 font-bold">Total Estimated Premium:</span>
                <span className="text-green-700 font-bold text-lg">
                  ₹{farmArea ? (Number(farmArea) * selectedPolicy.premiumAmount).toLocaleString() : "0"}
                </span>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={enrolling}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-70"
            >
              {enrolling ? "Processing..." : "Confirm Enrollment & Pay"}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Policies;
