import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const PlanningRoadmappingService = () => {
  const serviceItems = [
    {
      id: "01",
      title: "Prioritization Workshops",
      description: "Prioritization is not just about choosing what to build next; it’s about making strategic decisions that support long-term success. We use data-driven frameworks to evaluate potential initiatives, weighing factors like feasibility, market demand, and expected ROI. This approach helps teams make informed choices, avoiding wasted effort on low-value features while maximizing resources for high-impact development. By turning complex ideas into actionable plans, we help businesses move forward with confidence and clarity."
    },
    {
      id: "02",
      title: "Feature List Definition",
      description: "Creating a clear and strategic feature list is essential for guiding product development in the right direction. We collaborate with businesses to define the functionalities that will have the greatest impact, ensuring that every feature aligns with user needs and business goals. By analyzing market trends, competitor offerings, and customer insights, we help teams make informed decisions about what to include in their initial launch and what can be phased into future iterations. This structured planning prevents scope creep and keeps development efforts focused on delivering meaningful value"
    },
    {
      id: "03",
      title: "Technical Estimations",
      description: "Accurate technical estimations are essential for setting realistic timelines and budgets in any development process. We work closely with engineering teams to break down project requirements, assess complexity, and determine the effort needed for each feature. By leveraging our experience across various industries, we provide detailed estimations that help businesses plan effectively while minimizing risks. This approach ensures that teams have a clear understanding of development efforts before committing resources, preventing costly surprises down the road."
    },
    {
      id: "04",
      title: "Milestone Planning",
      description: "Successful milestone planning requires a balance between ambition and practicality. We collaborate with teams to set realistic goals based on technical feasibility, resource availability, and market demands. Each milestone is designed to validate progress, whether through prototype development, user testing, or feature completion. By ensuring that every phase delivers tangible results, we help businesses move forward with confidence, making strategic decisions that support both short-term execution and long-term scalability."
    },
    {
      id: "05",
      title: "Sprint & Release Plans",
      description: "Executing a successful development cycle requires careful coordination of sprints and release plans. We help businesses structure their workflows by defining sprint objectives, setting realistic timelines, and ensuring each phase delivers meaningful progress. By aligning development efforts with business goals, we create a framework that keeps teams focused while allowing flexibility to adapt to new insights. This method ensures that each sprint builds toward a functional and scalable product without unnecessary delays."
    }
  ];

  const [activeId, setActiveId] = useState("01");

  return (
    <section id="planning-roadmapping" className="p-10">
      {/* Main Section */}
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-light text-[#292929] mb-8">
            Planning & Roadmapping
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl">
            We guide planning and roadmapping through prioritization workshops, technical estimations, and milestone-driven sprint strategies to deliver scalable and efficient products.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        <ScrollReveal delay="0.2s" className="flex flex-col">
            {serviceItems.map((item) => (
                <PlanningServiceItem 
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

function PlanningServiceItem({ item, isActive, onHover }) {
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

export default PlanningRoadmappingService;
