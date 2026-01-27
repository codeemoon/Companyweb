import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const VisualProductDesignService = () => {
  const serviceItems = [
    {
      id: "01",
      title: "Mobile App Design",
      description: "Designing mobile apps requires a balance of aesthetics, usability, and performance. We create visually compelling and highly functional interfaces that enhance user engagement while maintaining intuitive navigation. Every detail, from typography to interactive elements, is carefully crafted to ensure a seamless experience across different devices and screen sizes. By following platform-specific guidelines for iOS and Android, we design apps that feel native while maintaining a strong, cohesive brand identity."
    },
    {
      id: "02",
      title: "Web Application Design",
      description: "Crafting engaging and functional web applications requires a deep understanding of both user experience and visual design. We create modern, responsive interfaces that not only look great but also enhance usability across different devices and screen sizes. By focusing on clean layouts, intuitive navigation, and scalable design systems, we ensure that every web application we build is visually cohesive and easy to use."
    },
    {
      id: "03",
      title: "Modern Design Systems",
      description: "To keep design systems effective, we integrate them with tools like Figma and Storybook, allowing for real-time collaboration between designers and developers. Regular updates and iterations ensure that the system evolves alongside the product, adapting to new features and user needs. This structured approach not only enhances efficiency but also creates a seamless, visually consistent experience for users across different touchpoints."
    },
    {
      id: "04",
      title: "Brand Design",
      description: "A strong brand identity is more than just a logo—it’s the foundation of a memorable and cohesive user experience. We create brand designs that seamlessly integrate into digital products, ensuring consistency across every touchpoint. From color palettes and typography to iconography and motion design, every detail is carefully crafted to reflect the brand’s personality while enhancing usability and engagement.\n\nBy developing comprehensive brand guidelines, we establish a design language that scales with the product and maintains visual harmony across platforms. Whether refining an existing brand or building one from scratch, we focus on creating a distinct, recognizable identity that resonates with users. This ensures that every interaction reinforces the brand’s message, making a lasting impression while maintaining clarity and consistency."
    }
  ];

  const [activeId, setActiveId] = useState("01");

  return (
    <section id="visual-product-design" className="p-10">
      {/* Main Section */}
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-light text-[#292929] mb-8">
            Visual Product Design (UI)
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl">
            We design visually compelling, user-friendly digital experiences through modern design systems, visual prototypes, and cohesive brand integration across mobile and web applications.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        <ScrollReveal delay="0.2s" className="flex flex-col">
            {serviceItems.map((item) => (
                <VisualServiceItem 
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

function VisualServiceItem({ item, isActive, onHover }) {
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

export default VisualProductDesignService;
