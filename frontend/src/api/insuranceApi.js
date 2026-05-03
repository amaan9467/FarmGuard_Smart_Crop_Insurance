import api from "./axios";

export const insuranceApi = {
  getPolicies: async () => {
    const res = await api.get("/insurance/policies");
    return res.data;
  },
  getPolicyById: async (id) => {
    const res = await api.get(`/insurance/policies/${id}`);
    return res.data;
  },
  enrollInPolicy: async (data) => {
    const res = await api.post("/insurance/enroll", data);
    return res.data;
  },
  getMyEnrollments: async () => {
    const res = await api.get("/insurance/my-enrollments");
    return res.data;
  },
  cancelEnrollment: async (id) => {
    const res = await api.put(`/insurance/enrollments/${id}/cancel`);
    return res.data;
  },
};
