import api from "./axios";

export const claimApi = {
  fileClaim: async (data) => {
    const res = await api.post("/claims", data);
    return res.data;
  },
  getMyClaims: async () => {
    const res = await api.get("/claims/my-claims");
    return res.data;
  },
  getClaimById: async (id) => {
    const res = await api.get(`/claims/${id}`);
    return res.data;
  },
  updateClaim: async (id, data) => {
    const res = await api.put(`/claims/${id}`, data);
    return res.data;
  },
};
