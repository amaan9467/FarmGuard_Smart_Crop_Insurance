import api from "./axios";

export const contactApi = {
  submitContactForm: async (data) => {
    const res = await api.post("/contact", data);
    return res.data;
  },
};
