import { useEffect, useState } from "react";
import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

function Admin() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(
    sessionStorage.getItem("adminAuth") === "true"
  );
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const updateInquiryStatus = async (id, status) => {
    try {
      const response = await axios.patch(
        `${apiBaseUrl}/api/v1/admin/inquiries/${id}/status`,
        { status }
      );

      setInquiries((current) =>
        current.map((inquiry) =>
          inquiry._id === id ? { ...inquiry, status: response.data.status || "" } : inquiry
        )
      );
    } catch (err) {
      console.error("Failed to update status:", err);
      setError("Unable to save status. Please try again.");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoginError("");
    setError("");

    try {
      await axios.post(`${apiBaseUrl}/api/v1/admin/login`, { password });
      sessionStorage.setItem("adminAuth", "true");
      setAuthenticated(true);
      setPassword("");
    } catch (err) {
      console.error("Login failed:", err);
      setLoginError("Incorrect password. Please try again.");
    }
  };

  useEffect(() => {
    async function fetchInquiries() {
      try {
        const response = await axios.get(`${apiBaseUrl}/api/v1/admin/inquiries`);
        const data = (response.data || []).map((item) => ({
          ...item,
          status: item.status || "",
        }));
        setInquiries(data);
      } catch (err) {
        console.error("Failed to load inquiries:", err);
        setError("Unable to fetch inquiries. Please check your backend.");
      } finally {
        setLoading(false);
      }
    }

    if (authenticated) {
      fetchInquiries();
    } else {
      setLoading(false);
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <section className="min-h-screen bg-[#fcfdff] pt-24 pb-24 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl border border-[#e5e7eb] bg-white p-10 shadow-sm">
            <h1 className="text-4xl md:text-5xl font-bold text-[#292929] mb-4">
              Admin Login
            </h1>
            <p className="text-sm text-[#555] mb-6">
              Enter the admin password to view inquiries.
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#555] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-[#d1d5db] bg-[#f8fafc] px-4 py-3 text-base text-[#111] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
                  placeholder="Enter admin password"
                />
              </div>
              {loginError && <p className="text-sm text-red-600">{loginError}</p>}
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#292929] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#111]"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#fcfdff] pt-24 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#292929] mb-4">
          Admin Panel
        </h1>
        <p className="text-sm text-[#555] mb-8">
          Inquiries fetched from MongoDB.
        </p>

        {loading && <p className="text-[#555]">Loading inquiries...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && (
          <div className="space-y-6">
            {inquiries.length === 0 ? (
              <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 text-sm text-[#555]">
                No inquiries found.
              </div>
            ) : (
              inquiries.map((inquiry) => (
                <div
                  key={inquiry._id}
                  className={`rounded-3xl bg-white p-6 shadow-sm ${inquiry.status === "accepted" ? "border-2 border-green-500" : inquiry.status === "rejected" ? "border-2 border-red-500" : "border border-[#e5e7eb]"}`}
                >
                  <div className="flex flex-col gap-4 sm:gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h2 className="text-sm text-[#555] uppercase tracking-[0.2em] mb-2">Name</h2>
                        <p className="text-base text-[#111] font-semibold">{inquiry.fullname || "-"}</p>
                      </div>
                      <div>
                        <h2 className="text-sm text-[#555] uppercase tracking-[0.2em] mb-2">Phone</h2>
                        <p className="text-base text-[#111]">{inquiry.phonenumber || "-"}</p>
                      </div>
                      <div>
                        <h2 className="text-sm text-[#555] uppercase tracking-[0.2em] mb-2">WhatsApp</h2>
                        <p className="text-base text-[#111]">{inquiry.whatsappNumber || "-"}</p>
                      </div>
                      <div>
                        <h2 className="text-sm text-[#555] uppercase tracking-[0.2em] mb-2">Email</h2>
                        <p className="text-base text-[#111] break-words">{inquiry.email || "-"}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h2 className="text-sm text-[#555] uppercase tracking-[0.2em] mb-2">College</h2>
                        <p className="text-base text-[#111] break-words">{inquiry.collegeName || "-"}</p>
                      </div>
                      <div>
                        <h2 className="text-sm text-[#555] uppercase tracking-[0.2em] mb-2">Project Type</h2>
                        <p className="text-base text-[#111]">{inquiry.projectType || "-"}</p>
                      </div>
                      <div>
                        <h2 className="text-sm text-[#555] uppercase tracking-[0.2em] mb-2">Technology</h2>
                        <p className="text-base text-[#111]">{inquiry.technology || "-"}</p>
                      </div>
                      <div>
                        <h2 className="text-sm text-[#555] uppercase tracking-[0.2em] mb-2">PDF</h2>
                        {inquiry.requirementPdf ? (
                          <a
                            href={inquiry.requirementPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2563eb] hover:underline"
                          >
                            View PDF
                          </a>
                        ) : (
                          <span className="text-[#777]">None</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-sm text-[#555] uppercase tracking-[0.2em] mb-2">Project Description</h2>
                      <p className="text-base text-[#111] whitespace-pre-wrap break-words">
                        {inquiry.projectDescription || "-"}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => updateInquiryStatus(inquiry._id, "accepted")}
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${inquiry.status === "accepted" ? "border-green-500 text-green-600" : "border-[#c4c5c7] text-[#333] hover:border-green-500 hover:text-green-600"}`}
                      >
                        Accepted
                      </button>
                      <button
                        type="button"
                        onClick={() => updateInquiryStatus(inquiry._id, "rejected")}
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${inquiry.status === "rejected" ? "border-red-500 text-red-600" : "border-[#c4c5c7] text-[#333] hover:border-red-500 hover:text-red-600"}`}
                      >
                        Rejected
                      </button>
                      <button
                        type="button"
                        onClick={() => updateInquiryStatus(inquiry._id, "neutral")}
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${inquiry.status === "" ? "border-[#1f2937] text-[#1f2937]" : "border-[#c4c5c7] text-[#333] hover:border-[#1f2937] hover:text-[#1f2937]"}`}
                      >
                        Neutral
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Admin;
