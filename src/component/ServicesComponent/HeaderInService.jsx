import React, { useState, useEffect, useRef } from 'react';
import SEO from '../SEO';

const HeaderInService = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const services = [
    { name: "Mobile App Development", id: "mobile-app-development" },
    { name: "Web Development", id: "web-development" },
    { name: "AI Solutions", id: "ai-solutions" },
    { name: "Backend and Infrastructure", id: "backend-infrastructure" },
    { name: "Product Discovery", id: "product-discovery" },
    { name: "User Experience Design", id: "ux-design" },
    { name: "Visual Product Design", id: "visual-product-design" },
    { name: "Planning and Roadmapping", id: "planning-roadmapping" }
  ];

  const handleServiceClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="p-6 md:p-10 flex flex-col justify-start items-start w-full relative">
        <SEO 
            title="Our Services - Mobile App & Web Development | Pillow" 
            description="Explore our IT services: Android/iOS App Development, Website Design, AI Solutions, and Backend Infrastructure. Affordable pricing starting ₹1000."
            keywords="Services, App Development, Web Design, AI, UX Design, Pillow Services"
        />
        <div className="max-w-full relative group">
            <h1 className="text-4xl md:text-7xl lg:text-[88px] text-[#292929] m-0 leading-[1.1] font-normal font-sans mt-8 whitespace-normal lg:whitespace-nowrap break-words">
                The core of success <br className="hidden lg:block"/> is service
            </h1>
            
            <div ref={dropdownRef} className="mt-10 w-full relative z-50">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between text-2xl font-medium text-[#292929] border-b border-[#292929] py-4 group-hover:border-gray-500 transition-colors duration-300 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                >
                    <span>Our Services</span>
                    <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </button>

                <div 
                    className={`
                        absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border border-gray-100 shadow-2xl rounded-b-3xl overflow-hidden transition-all duration-500 ease-in-out origin-top
                        ${isOpen ? 'max-h-[800px] opacity-100 translate-y-0 visible' : 'max-h-0 opacity-0 -translate-y-4 invisible'}
                    `}
                >
                    <div className="p-8 grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                onClick={() => handleServiceClick(service.id)}
                                className="group/item flex items-center gap-3 p-4 rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                            >
                                <span className="text-lg text-gray-600 group-hover:text-[#292929] font-medium">{service.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HeaderInService;
