import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const ProductDiscoveryService = () => {
  const serviceItems = [
    {
      id: "01",
      title: "Value Proposition Definition",
      description: "Defining a strong value proposition is essential to creating products that truly connect with users. We work closely with stakeholders to identify what makes a product unique, analyzing market needs, user expectations, and competitive positioning. By distilling complex ideas into clear, compelling messaging, we ensure that every product we design has a strong foundation that resonates with its audience and stands out in the marketplace"
    },
    {
      id: "02",
      title: "Industry Research",
      description: "Creating impactful digital products starts with a deep understanding of the industry landscape. We analyze market trends, emerging technologies, and competitive benchmarks to ensure our solutions are not only innovative but also strategically positioned. By studying user behaviors within specific industries, we identify opportunities to enhance engagement, streamline functionality, and differentiate products in meaningful ways.\n\nThis research-driven approach allows us to design experiences that align with industry standards while pushing boundaries for innovation. We leverage data insights to refine features, improve usability, and anticipate future trends, ensuring that every product we build remains relevant and competitive. By staying ahead of shifts in the market, we help businesses create solutions that not only meet current demands but also evolve with industry advancements."
    },
    {
      id: "03",
      title: "Client Conversation",
      description: "Aligning business goals with user needs starts with meaningful conversations. These discussions help bridge the gap between vision and execution, allowing us to refine product strategies with clarity and precision. By listening to diverse perspectives, we identify pain points, streamline workflows, and create solutions that drive both business success and user satisfaction. This collaborative approach ensures that our designs are not just visually compelling but also deeply aligned with organizational goals."
    },
    {
      id: "04",
      title: "Competitor Analysis",
      description: "Understanding the competitive landscape is essential to building products that stand out. We analyze competitors to identify strengths, weaknesses, and market gaps, ensuring our designs offer something unique and valuable. By evaluating user experiences, feature sets, and design trends across the industry, we gain insights that help refine strategy and enhance usability.\n\nThis research allows us to make informed decisions about what works, what doesn’t, and where there’s room for innovation. By benchmarking against competitors while focusing on differentiation, we craft experiences that not only meet industry standards but push them forward. This ensures that every product we design is positioned for success in an increasingly crowded digital marketplace."
    }
  ];

  const [activeId, setActiveId] = useState("01");

  return (
    <section id="product-discovery" className="p-10">
      {/* Main Section */}
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-light text-[#292929] mb-8">
            Product Discovery
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl">
            Through research, prototyping, and testing, we refine product ideas to ensure they are user-centric, strategically aligned, and built for meaningful engagement.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        <ScrollReveal delay="0.2s" className="flex flex-col">
            {serviceItems.map((item) => (
                <DiscoveryServiceItem 
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

function DiscoveryServiceItem({ item, isActive, onHover }) {
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

export default ProductDiscoveryService;
