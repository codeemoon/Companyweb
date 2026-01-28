import { useEffect, useState } from "react";
import Navbar from "./navbar";
import ScrollReveal from "./ScrollReveal";
import toast from "react-hot-toast";
import SEO from "./SEO";

function Project() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    businessname: "",
    phonenumber: "",
    budget: "",
    messageforus: "",
  });

  useEffect(() => {
    toast(
      "Form is currently not working \n\n Use our Email and Whatsapp to contact us",
      {
        duration: 3000,
      },
    );
  }, []);

  console.log(formData);
  async function submitInquiry(e) {
    e.preventDefault();

    toast(
      "Form is currently not working \n\n Use our Email and Whatsapp to contact us",
      {
        duration: 3000,
      },
    );

    // try {
    //   let response = await axios.post(`http://localhost:5000/api/v1/submit-query` , formData)
    // let response = await fetch(`http://localhost:5000/api/v1/submit-query`, {
    //     method : "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body : JSON.stringify(formData)
    // })
    // let result = await response.json()
    //   console.log(response.data);
    // } catch (error) {
    //   console.log(`ERROR ${error}`);
    // }
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
          {/* Heading */}
          <div className="flex flex-col gap-4 text-left w-full">
            <ScrollReveal delay="0s">
              <h1 className=" font-normal text-[40px] md:text-[60px] lg:text-[96px] text-[#292929] tracking-tight leading-none">
                Let's connect...
              </h1>
            </ScrollReveal>
            <ScrollReveal delay="0.1s">
              <p className="font-manrope text-[24px] md:text-[32px] lg:text-[40px] text-[#aaaaaa] w-full max-w-4xl leading-tight">
                Fill the form below or Email us
              </p>
            </ScrollReveal>
            <ScrollReveal
              delay="0.2s"
              className="w-full max-w-7xl h-px bg-black mt-8"
            ></ScrollReveal>
          </div>

          {/* Form */}
          <form onSubmit={submitInquiry} className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {/* First Name */}
              <ScrollReveal delay="0.3s" className="flex flex-col gap-2 group">
                <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                  onChange={(e) =>
                    setFormData((preVal) => ({
                      ...preVal,
                      firstname: e.target.value,
                    }))
                  }
                />
              </ScrollReveal>

              {/* Last Name */}
              {/* Last Name */}
              <ScrollReveal delay="0.3s" className="flex flex-col gap-2 group">
                <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                  onChange={(e) =>
                    setFormData((preVal) => ({
                      ...preVal,
                      lastname: e.target.value,
                    }))
                  }
                />
              </ScrollReveal>

              {/* Email */}
              {/* Email */}
              <ScrollReveal delay="0.4s" className="flex flex-col gap-2 group">
                <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                  onChange={(e) =>
                    setFormData((preVal) => ({
                      ...preVal,
                      email: e.target.value,
                    }))
                  }
                />
              </ScrollReveal>

              {/* Business Name */}
              {/* Business Name */}
              <ScrollReveal delay="0.4s" className="flex flex-col gap-2 group">
                <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Your Bussiness name."
                  className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                  onChange={(e) =>
                    setFormData((preVal) => ({
                      ...preVal,
                      bussinesname: e.target.value,
                    }))
                  }
                />
              </ScrollReveal>

              {/* Contact */}
              <ScrollReveal delay="0.5s" className="flex flex-col gap-2 group">
                <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                  Contact
                </label>
                <input
                  type="tel"
                  name="contact"
                  placeholder="+91 xxxxxxxxxx"
                  className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                  onChange={(e) =>
                    setFormData((preVal) => ({
                      ...preVal,
                      phonenumber: e.target.value,
                    }))
                  }
                />
              </ScrollReveal>

              {/* Budget */}
              <ScrollReveal delay="0.5s" className="flex flex-col gap-2 group">
                <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                  Budget
                </label>
                <input
                  type="text"
                  name="budget"
                  placeholder="Whats Your Range ?"
                  className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors"
                  onChange={(e) =>
                    setFormData((preVal) => ({
                      ...preVal,
                      budget: e.target.value,
                    }))
                  }
                />
              </ScrollReveal>
            </div>

            {/* Description - Full Width */}
            <ScrollReveal
              delay="0.6s"
              className="flex flex-col gap-2 w-full group mt-4"
            >
              <label className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
                Explain your project briefly
              </label>
              <textarea
                name="description"
                rows="4"
                placeholder="Tell us about your goals, timeline, and requirements..."
                className="w-full border-b border-[#e0e1e3] py-4 text-xl text-[#292929] font-manrope placeholder:text-gray-300 focus:outline-none focus:border-[#292929] transition-colors resize-none"
                onChange={(e) =>
                  setFormData((preVal) => ({
                    ...preVal,
                    messageforus: e.target.value,
                  }))
                }
              />
            </ScrollReveal>

            {/* Submit Button */}
            <ScrollReveal delay="0.7s" className="flex justify-start mt-8">
              <button
                type="submit"
                className="bg-[#292929] text-[#fcfdff] rounded-full px-12 py-5 font-manrope text-lg font-medium transition-colors hover:bg-[#444] cursor-pointer flex items-center gap-2 group"
              >
                Submit Inquiry
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <path
                    d="M1 11L11 1M11 1H3M11 1V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </ScrollReveal>
          </form>
        </div>
      </section>

      {/* Contact & WhatsApp Section */}
      <section className="w-full bg-[#fcfdff] pb-24 px-6 md:px-12 flex flex-col items-start z-10 relative">
        <div className="max-w-7xl w-full flex flex-col gap-12">
          {/* Contact Header */}
          <div>
            <h2 className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
              Contact
            </h2>
          </div>

          {/* Email */}
          <div className="w-full">
            <a
              href="mailto:upadhyayakhand909@gmail.com"
              className="block w-full"
            >
              <h1 className="font-manrope font-bold text-[32px] md:text-[60px] lg:text-[80px] text-[#292929] break-words hover:text-[#555] transition-colors leading-none tracking-tight">
                upadhyayakhand909
                <br className="md:hidden" />
                @gmail.com
              </h1>
            </a>
            <div className="w-full h-[1px] bg-[#e0e1e3] mt-12"></div>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col gap-8 w-full">
            <h2 className="font-manrope text-sm text-[#292929] uppercase tracking-wider font-medium">
              WhatsApp
            </h2>
            <a
              href="https://wa.me/916392934409"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                src="/picture/whatsapp.webp"
                alt="WhatsApp"
                loading="lazy"
                width="80"
                height="80"
                className="w-16 md:w-20 h-auto object-contain"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
