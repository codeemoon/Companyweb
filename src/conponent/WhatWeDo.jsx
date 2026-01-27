import React, { useState } from 'react'
import ScrollReveal from './ScrollReveal';
import { useNavigate } from 'react-router-dom';

function WhatWeDo() {

    const navigate = useNavigate()
    const services = [
        {
            id: "01",
            title: "Technology",
            description: "We are a leader in building cutting-edge mobile and web applications that are AI-driven, and intuitive digital solutions. We push boundaries, solve complex challenges through products that drive real impact.",
            image: "/picture/technologyImage.png"
        },
        {
            id: "02",
            title: "Experience",
            description: "Our best in class Product Designers and Strategists collaborate to create smart, clear product experiences that keeps people engaged through carefully crafted UX, UI and interaction design.",
            image: "/picture/experienceImage.png"
        },
        {
            id: "03",
            title: "Strategy",
            description: "We surround our clients with leaders from product, design, data, and engineering departments, with a relentless focus on product-market fit, growth potential, monetization strategies, and technical opportunities.",
            image: "/picture/strategy.png"
        },
        {
            id: "04",
            title: "Growth",
            description: "Our Product Managers, Data Scientists and Growth Marketers partner with clients to focus on the evolution and adoption of the product, prioritizing business goals through rapid releases, user feedback cycles, and data-driven growth marketing experimentation.",
            image: "/picture/growth.png"
        }
    ]

    const [activeServiceId, setActiveServiceId] = useState("01");

    return (
        <section className="w-full  bg-[#fcfdff] pt-20 md:pt-40 pb-12 md:pb-24 px-6 md:px-12">
            <div className="max-w-7xl flex flex-col 2xl:flex-row gap-12 relative">
                {/* Left Side - Header & Content */}
                <div className="w-full 2xl:w-1/2 flex flex-col gap-16 2xl:gap-28">
                    {/* Section Header */}
                    <div className="flex flex-col gap-10 md:gap-20">
                        <ScrollReveal delay="0s" className="font-manrope text-sm md:text-[17.6px] text-[#7f7f7f] uppercase tracking-wider">
                            What is our work?
                        </ScrollReveal>
                        <ScrollReveal delay="0.1s" className="font-manrope text-3xl md:text-[48px] text-[#292929] leading-tight">
                            We built products on <br />
                            <span className="text-gray-400">trusted</span> and <br />
                            proven methodologies
                        </ScrollReveal>
                    </div>

                    
                    <ScrollReveal delay="0.2s" className="flex flex-col">
                        {services.map((service) => (
                            <ServiceItem 
                                key={service.id} 
                                service={service} 
                                isActive={activeServiceId === service.id}
                                onHover={() => setActiveServiceId(service.id)}
                            />
                        ))}
                    </ScrollReveal>



                {/* Services Button - Absolute Positioned to decouple from list animation */}
                <ScrollReveal delay="0.3s" className="relative 2xl:absolute bottom-0 2xl:bottom-22 2xl:left-[46%] w-full 2xl:w-1/2 flex justify-start pl-0 2xl:pl-8 z-10 pointer-events-none mt-8 2xl:mt-0">
                     <button onClick={(()=>navigate('/services'))} className="pointer-events-auto bg-[#e0e1e3] 2xl:translate-x-32 2xl:translate-y-12 pt-[16px] px-[24px] pb-[17px] rounded-full flex items-center gap-2 group relative text-[16px] text-[#292929] transition-colors duration-300 hover:bg-[#333] hover:text-[#fcfdff] cursor-pointer">
                        <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                            Services
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

                {/* Right Side - Image Display */}
                <div className="hidden 2xl:flex w-1/2 relative justify-end mt-12 2xl:mt-28 2xl:pl-12">
                    <div className="w-full h-[600px] 2xl:h-[1083.4px] sticky top-32 rounded-3xl 2xl:rounded-bl-[500px] overflow-hidden">
                        {services.map((service) => (
                            <img
                                key={service.id}
                                src={service.image}
                                alt={service.title}
                                className={`absolute top-0 right-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                                    activeServiceId === service.id ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function ServiceItem({ service, isActive, onHover }) {
    return (
        <div 
            className="group cursor-pointer"
            onMouseEnter={onHover}
        >
            {/* 
                Vertical Bar Implementation:
                - border-l-2: Creates the line
                - border-gray-200: Default track color
                - hover:border-[#292929]: Active thumb color
                - pl-8: Spacing content away from the bar
                - py-8: Vertical spacing (replaced parent gap)
            */}
            <div className={`flex flex-col items-start gap-4 border-l-2 transition-colors duration-300 pl-8 py-8 ${
                isActive ? "border-[#292929]" : "border-gray-200 group-hover:border-[#292929]"
            }`}>
                {/* ID & Title */}
                <div className="flex items-baseline gap-6 w-full">
                    <span className="text-[#292929] opacity-40 font-manrope text-lg">
                    {service.id}
                </span>
                    <h2 className="text-[#292929] font-manrope text-4xl md:text-5xl lg:text-6xl font-light group-hover:pl-4 transition-all duration-500">
                        {service.title}
                    </h2>
                </div>

                    {/* Description - Revealed on Hover */}
                    {/* 
                    Using max-h-0 to max-h-screen transition for the slide-down effect.
                        Added overflow-hidden to hide content when collapsed.
                        Opacity transition for smoothness.
                    PL-12 to align with title text (approx id width + gap)
                    */}
                <div className={`overflow-hidden transition-all duration-700 ease-in-out pl-12 pr-4 ${
                    isActive ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100"
                }`}>
                        <p className="text-[#7f7f7f] font-manrope text-lg leading-relaxed pt-2">
                            {service.description}
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default WhatWeDo
