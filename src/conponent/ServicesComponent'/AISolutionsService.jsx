import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const AISolutionsService = () => {
  const serviceItems = [
    {
      id: "01",
      title: "AI Strategy",
      description: "We develop custom AI strategies that help businesses automate processes, enhance decision-making, and create personalized user experiences. Our team works closely with clients to identify the most impactful AI opportunities, whether it’s predictive analytics, natural language processing (NLP), machine learning models, or AI-driven automation. By integrating AI seamlessly into web and mobile applications, we enable businesses to unlock new insights, optimize operations, and deliver smarter digital experiences.  We leverage a diverse range of AI models, including GPT-4, GPT-3.5, and specialized fine-tuned GPTs, alongside other cutting-edge frameworks like Claude, Mistral, and LLaMA to develop tailored solutions for different industries. By selecting the right AI models and optimizing them for specific use cases, we create strategies that maximize impact while maintaining efficiency and scalability."
    },
    {
      id: "02",
      title: "AI Integrations",
      description: "We specialize in embedding AI-driven capabilities into web applications, mobile platforms, CRMs, e-commerce systems, and enterprise workflows to enhance automation, efficiency, and user engagement. Our approach begins with understanding a client’s infrastructure and identifying areas where AI can deliver the most impact, whether through predictive analytics, natural language processing (NLP), computer vision, or intelligent automation. By utilizing cloud APIs, we ensure that AI functionalities can be smoothly integrated into platforms without disrupting existing workflows."
    }
  ];

  const [activeId, setActiveId] = useState("01");

  return (
    <section id="ai-solutions" className="p-10">
      {/* Main Section */}
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-light text-[#292929] mb-8">
            AI Solutions
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl">
            We create scalable AI solutions that drive automation, intelligence, and innovation, ensuring seamless integration and personalized experiences across digital platforms.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        <ScrollReveal delay="0.2s" className="flex flex-col">
            {serviceItems.map((item) => (
                <AIServiceItem 
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

function AIServiceItem({ item, isActive, onHover }) {
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

export default AISolutionsService;
