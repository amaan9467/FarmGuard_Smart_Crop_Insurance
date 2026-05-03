import api from "./axios";

export const dashboardApi = {
  getDashboardStats: async () => {
    const res = await api.get("/dashboard/stats");
    return res.data;
  },
  getRecentActivity: async () => {
    const res = await api.get("/dashboard/recent-activity");
    return res.data;
  },
};
