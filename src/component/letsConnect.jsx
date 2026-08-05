import { useState, useRef } from "react";
import axios from "axios";
import Navbar from "./navbar";
import toast from "react-hot-toast";
import SEO from "./SEO";

function Project() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    whatsappNumber: "",
    collegeName: "",
    course: "",
    projectType: "",
    projectTitle: "",
    technology: "",
    projectDescription: "",
  });
  const [requirementPdf, setRequirementPdf] = useState(null);
  const fileInputRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  const stepCount = 5;
  const stepTitle = [
    "Basic Info",
    "Academic Details",
    "Project Details",
    "Review",
    "Upload",
  ];

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, stepCount));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const isNextDisabled = () => {
    if (currentStep === 1) {
      return !formData.fullname.trim() || !formData.email.trim() || !formData.phonenumber.trim();
    }

    if (currentStep === 2) {
      return !formData.collegeName.trim() || !formData.course.trim() || !formData.projectType.trim();
    }

    if (currentStep === 3) {
      return !formData.technology.trim() || !formData.projectDescription.trim();
    }

    return false;
  };

  async function submitInquiry(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value ?? "");
      });

      if (requirementPdf) {
        formPayload.append("requirementPdf", requirementPdf);
      }

      await axios.post(`${apiBaseUrl}/api/v1/submit-query`, formPayload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Inquiry sent successfully. We'll contact you soon.");
      setFormData({
        fullname: "",
        email: "",
        phonenumber: "",
        whatsappNumber: "",
        collegeName: "",
        course: "",
        projectType: "",
        projectTitle: "",
        technology: "",
        projectDescription: "",
      });
      setRequirementPdf(null);
      setCurrentStep(1);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error ||
        "Unable to send inquiry. Please try again later.";
      toast.error(errorMessage);
      console.error("Inquiry submission failed:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SEO
        title="Start a Project | Pillow - Software Development Agency"
        description="Ready to build your dream app or website? Contact Pillow for affordable and premium software development services in Bhilai, Durg & Prayagraj."
        keywords="Contact Pillow, Hire Developers, App Development Quote, Website Cost Bhilai"
      />
      <Navbar />
      <section className="w-full bg-[#fcfdff] min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col items-start">
        <div className="max-w-7xl w-full flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-left w-full">
            <div>
              <h1 className="font-normal text-[40px] md:text-[60px] lg:text-[96px] text-[#292929] tracking-tight leading-none">
                Let's connect...
              </h1>
            </div>
            <div>
              <p className="font-manrope text-[24px] md:text-[32px] lg:text-[40px] text-[#aaaaaa] w-full max-w-4xl leading-tight">
                Fill the form below or Email us
              </p>
            </div>
            <div className="w-full max-w-7xl h-px bg-black mt-8"></div>
          </div>

          <form onSubmit={submitInquiry} className="flex flex-col gap-12">
            <div className="flex items-center gap-4 text-sm font-medium uppercase text-[#292929] tracking-wider">
              <span>Step {currentStep} of {stepCount}:</span>
              <span>{stepTitle[currentStep - 1]}</span>
            </div>

            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                <div className="flex flex-col gap-2 group">
                  <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="John Doe"
                    value={formData.fullname}
                    className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                    onChange={handleChange("fullname")}
                  />
                </div>

                <div className="flex flex-col gap-2 group">
                  <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                    onChange={handleChange("email")}
                  />
                </div>

                <div className="flex flex-col gap-2 group">
                  <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phonenumber"
                    placeholder="+91 xxxxxxxxxx"
                    value={formData.phonenumber}
                    className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                    onChange={handleChange("phonenumber")}
                  />
                </div>

                <div className="flex flex-col gap-2 group">
                  <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    placeholder="+91 xxxxxxxxxx"
                    value={formData.whatsappNumber}
                    className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                    onChange={handleChange("whatsappNumber")}
                  />
                  <p className="text-sm text-[#777]">If your WhatsApp number is the same as your phone number, you can leave this field blank.</p>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                <div className="flex flex-col gap-2 group">
                  <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                    College Name
                  </label>
                  <input
                    type="text"
                    name="collegeName"
                    placeholder="Your College Name"
                    value={formData.collegeName}
                    className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                    onChange={handleChange("collegeName")}
                  />
                </div>

                <div className="flex flex-col gap-2 group">
                  <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                    Course
                  </label>
                  <input
                    type="text"
                    name="course"
                    placeholder="BCA, MCA, B.Tech, etc."
                    value={formData.course}
                    className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                    onChange={handleChange("course")}
                  />
                </div>

                <div className="flex flex-col gap-2 group">
                  <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                    Project Type
                  </label>
                  <input
                    type="text"
                    name="projectType"
                    placeholder="Example: Web App, ML Project"
                    value={formData.projectType}
                    className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                    onChange={handleChange("projectType")}
                  />
                </div>

              </div>
            )}

            {currentStep === 3 && (
              <div className="grid grid-cols-1 gap-y-12">
                <div delay="0.3s" className="flex flex-col gap-2 group">
                  <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                    Project Title (Optional)
                  </label>
                  <input
                    type="text"
                    name="projectTitle"
                    placeholder="Project Title"
                    value={formData.projectTitle}
                    className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                    onChange={handleChange("projectTitle")}
                  />
                </div>

                <div delay="0.4s" className="flex flex-col gap-2 group">
                  <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                    Technology
                  </label>
                  <input
                    type="text"
                    name="technology"
                    placeholder="React, Python, Java, etc."
                    value={formData.technology}
                    className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                    onChange={handleChange("technology")}
                  />
                </div>

                <div delay="0.5s" className="flex flex-col gap-2 group">
                  <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                    Project Description
                  </label>
                  <textarea
                    name="projectDescription"
                    rows="5"
                    placeholder="Explain your project requirements and goals..."
                    value={formData.projectDescription}
                    className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors resize-none"
                    onChange={handleChange("projectDescription")}
                  />
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="grid grid-cols-1 gap-y-6">
                <div delay="0.3s" className="flex flex-col gap-4 group">
                  <h2 className="font-manrope text-xl text-[#292929] font-semibold">
                    Review Your Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#555]">
                    <div>
                      <p><strong>Full Name:</strong> {formData.fullname || "�"}</p>
                      <p><strong>Email:</strong> {formData.email || "�"}</p>
                      <p><strong>Phone:</strong> {formData.phonenumber || "�"}</p>
                      <p><strong>WhatsApp:</strong> {formData.whatsappNumber || "Same as phone number"}</p>
                      <p><strong>College:</strong> {formData.collegeName || "�"}</p>
                      <p><strong>Course:</strong> {formData.course || "�"}</p>
                    </div>
                    <div>
                      <p><strong>Project Type:</strong> {formData.projectType || "�"}</p>
                      <p><strong>Technology:</strong> {formData.technology || "�"}</p>
                      <p><strong>Project Title:</strong> {formData.projectTitle || "�"}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#777]">Use Back to edit any step before submitting.</p>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="grid grid-cols-1 gap-y-6">
                <div delay="0.3s" className="flex flex-col gap-2 group">
                  <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                    Upload Requirement PDF (Optional)
                  </label>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="application/pdf"
                    onChange={(event) => setRequirementPdf(event.target.files?.[0] || null)}
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-2 bg-[#292929] text-white px-4 py-2 rounded-md hover:bg-[#444] transition-colors"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M12 16V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 11l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 20H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Upload PDF
                    </button>

                    <div className="flex items-center gap-3">
                      {requirementPdf ? (
                        <>
                          <p className="text-sm text-[#555]">{requirementPdf.name}</p>
                          <button
                            type="button"
                            onClick={() => setRequirementPdf(null)}
                            className="text-sm text-[#ff4d4f] hover:underline"
                          >
                            Remove
                          </button>
                        </>
                      ) : (
                        <p className="text-sm text-[#777]">No file selected</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="rounded-full px-6 py-3 bg-[#e0e1e3] text-[#292929] hover:bg-[#c4c5c7] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Back
                </button>
                {currentStep < stepCount && (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={isNextDisabled()}
                    className={`rounded-full px-6 py-3 ${isNextDisabled() ? "bg-[#c4c5c7] text-[#8a8a8a] cursor-not-allowed" : "bg-[#292929] text-[#fcfdff] hover:bg-[#444]"}`}
                  >
                    Next
                  </button>
                )}
              </div>

              {currentStep === stepCount && (
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#292929] text-[#fcfdff] rounded-full px-12 py-5 font-manrope text-lg font-medium transition-colors hover:bg-[#444] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center gap-2"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Project;
