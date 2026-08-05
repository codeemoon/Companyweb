import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
const api = axios.create({
  baseURL: apiBaseUrl,
});

export const submitInquiry = (formData) =>
  api.post("/api/v1/submit-query", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const adminLogin = (password) =>
  api.post("/api/v1/admin/login", { password });

export const fetchInquiries = () => api.get("/api/v1/admin/inquiries");

export const updateInquiryStatus = (id, status) =>
  api.patch(`/api/v1/admin/inquiries/${id}/status`, { status });

export default api;
