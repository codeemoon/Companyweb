import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const UXDesignService = () => {
  const serviceItems = [
    {
      id: "01",
      title: "Feature Prioritization",
      description: "Building a successful product requires balancing user needs with business goals, and feature prioritization is key to that process. We assess potential features based on impact, feasibility, and user demand, ensuring that the most valuable functionalities take center stage. By leveraging data, stakeholder input, and user feedback, we create a clear roadmap that drives meaningful engagement while keeping development efficient and focused."
    },
    {
      id: "02",
      title: "User Flows & Journeys",
      description: "A well-structured user journey doesn’t happen by accident—it’s the result of careful planning, iteration, and real-world testing. We use wireframes, prototypes, and analytics insights to refine flows, eliminating unnecessary steps and streamlining key interactions. This approach not only improves usability but also enhances conversion rates, customer satisfaction, and overall product success. By prioritizing clear and intuitive navigation, we create digital experiences that feel effortless and natural."
    },
    {
      id: "03",
      title: "Wireframe Designs",
      description: "Wireframing is more than just sketching—it’s a strategic tool for problem-solving and user experience refinement. We create low-fidelity and high-fidelity wireframes that evolve through collaboration and user feedback, helping to identify pain points before they become costly revisions. By keeping the focus on usability and efficiency, we streamline the design process and create intuitive experiences that work seamlessly across all devices and platforms."
    },
    {
      id: "04",
      title: "Clickable Prototypes",
      description: "Prototyping also bridges the gap between design and development, providing a clear blueprint for engineers while minimizing costly revisions. We leverage industry-leading tools to build responsive prototypes that demonstrate everything from button interactions to full user flows. This process allows us to refine navigation, optimize workflows, and create products that feel intuitive and seamless before a single line of code is written."
    }
  ];

  const [activeId, setActiveId] = useState("01");

  return (
    <section id="ux-design" className="p-10">
      {/* Main Section */}
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-light text-[#292929] mb-8">
            User Experience Design (UX)
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl">
            We prioritize features, map user flows, and design wireframes and prototypes to create intuitive, structured, and engaging digital experiences.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        <ScrollReveal delay="0.2s" className="flex flex-col">
            {serviceItems.map((item) => (
                <UXServiceItem 
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

function UXServiceItem({ item, isActive, onHover }) {
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
                    isActive ? "max-h-[800px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0 group-hover:max-h-[800px] group-hover:opacity-100 group-hover:mt-6"
                }`}>
                    <p className="text-[#292929] font-manrope text-lg leading-relaxed max-w-5xl whitespace-pre-line">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UXDesignService;
