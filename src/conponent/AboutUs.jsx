import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate()

    return (
        <section className="w-full bg-black py-32 px-12">
            <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center gap-20">
                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2">
                    <div 
                        className={`rounded-3xl overflow-hidden transition-all duration-700 ease-in-out ${
                            isHovered ? "rounded-3xl" : "rounded-tr-[500px]"
                        }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img 
                            src="/picture/AboutUs.webp" 
                            alt="About Us" 
                            loading="lazy"
                            width="800"
                            height="600"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
                    <div className="flex flex-col gap-12">
                        <ScrollReveal delay="0s" className="font-manrope text-[19.2px] text-[#7f7f7f] uppercase tracking-wider font-medium">
                            About us
                        </ScrollReveal>
                        <ScrollReveal delay="0.1s" className="font-manrope text-[56px] text-[#fcfdff] leading-tight font-medium ">
                            We Build for you and <br />
                            <span className="text-[#7f7f7f]">grow</span> togather
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay="0.2s">
                        <button onClick={(()=>navigate('/ourcompany'))}
                            className="bg-[#e0e1e3] pt-[16px] px-[24px] pb-[17px] rounded-full flex items-center gap-2 group relative text-[16px] text-[#292929] transition-colors duration-300 hover:bg-[#292929] hover:text-[#fcfdff] cursor-pointer mt-4"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                                About us
                            </span>
                            <svg 
                                width="12" 
                                height="12" 
                                viewBox="0 0 12 12" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            >
                                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
