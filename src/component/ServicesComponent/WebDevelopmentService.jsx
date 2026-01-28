import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const WebDevelopmentService = () => {
  const serviceItems = [
    {
      id: "01",
      title: "Website Design & Development",
      description: "We approach website design with a user-centric and strategic mindset, ensuring that every digital experience we create is both visually compelling and functionally effective. Our process begins with an in-depth discovery phase, where we research user behavior, brand identity, and business objectives to craft designs that truly resonate. Using wireframing, prototyping, and iterative design techniques, we ensure that our UI/UX is intuitive, engaging, and optimized for conversion. We believe that great design is more than just aesthetics—it’s about creating seamless user experiences that drive action."
    },
    {
      id: "02",
      title: "E-Commerce Platforms",
      description: "Delivering seamless and high-performing e-commerce platforms is a focus for us. We build customized, scalable, and conversion-driven online stores that provide users with an effortless shopping experience while meeting the evolving needs of businesses. We focus on intuitive UI/UX design, fast page loads, and frictionless checkout flows, ensuring that customers can browse, shop, and complete transactions without frustration."
    },
    {
      id: "03",
      title: "Content Management Systems",
      description: "Managing and delivering content efficiently is crucial for any digital experience, which is why we specialize in building powerful, scalable Content Management Systems (CMS) tailored to our clients' needs. Whether it's a custom-built solution or a platform like WordPress, Drupal, or Headless CMS architectures, we develop systems that empower businesses to manage their content with ease. By focusing on flexibility and user-friendly interfaces, we ensure that clients can update, organize, and publish content without needing extensive technical knowledge."
    }
  ];

  const [activeId, setActiveId] = useState("01");

  return (
    <section id="web-development" className="p-10">
      {/* Main Section */}
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-light text-[#292929] mb-8">
            Web Development
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl">
            Our experience of building from-scratch web software and platform experiences stretches across all industries and purposes, both B2B and DTC. From complex web apps and custom e-commerce platforms, to web redesigns and high-conversion landing pages, we specialize in cross-environment consistency and scale through a commitment to meticulous responsive design.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        <ScrollReveal delay="0.2s" className="flex flex-col">
            {serviceItems.map((item) => (
                <WebServiceItem 
                    key={item.id} 
                    item={item} 
                    isActive={activeId === item.id}
                    onHover={() => setActiveId(item.id)}
                />
            ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

function WebServiceItem({ item, isActive, onHover }) {
    return (
        <div 
            className="group cursor-pointer"
            onMouseEnter={onHover}
        >
            <div className={`flex flex-col items-start border-l-2 transition-colors duration-300 pl-8 py-10 ${
                isActive ? "border-[#292929]" : "border-gray-200 group-hover:border-[#292929]"
            }`}>
                <div className="flex items-baseline gap-6 w-full">
                    <span className="text-[#292929] opacity-40 font-manrope text-lg">
                        {item.id}
                    </span>
                    <h3 className="text-[#292929] font-manrope text-3xl md:text-4xl lg:text-5xl font-light group-hover:pl-4 transition-all duration-500">
                        {item.title}
                    </h3>
                </div>

                <div className={`overflow-hidden transition-all duration-700 ease-in-out pl-12 pr-4 ${
                    isActive ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:mt-6"
                }`}>
                    <p className="text-[#292929] font-manrope text-lg leading-relaxed max-w-5xl">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WebDevelopmentService;
