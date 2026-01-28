import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const MobileAppService = () => {
  const serviceItems = [
    {
      id: "01",
      title: "iOS App Development",
      description: "We build high-performance, scalable applications designed specifically for Apple’s ecosystem. Our team has deep expertise in Swift and Objective-C, allowing us to develop comprehensive, feature-rich experiences that take full advantage of iOS capabilities. From optimizing performance for the latest iPhone and iPad devices to ensuring seamless integration with Apple’s software and hardware ecosystem, we craft apps that feel native and responsive. We follow Apple’s best practices, leveraging technologies like SwiftUI for modern UI designs, CoreML for AI-driven automation, and ARKit to create immersive augmented reality experiences."
    },
    {
      id: "02",
      title: "Android App Development",
      description: "We have great experience in native Android app development, creating high-quality, high-performance applications tailored to the diverse Android ecosystem. With deep expertise in Kotlin and Java, our team builds apps that take full advantage of Android’s capabilities, ensuring seamless functionality, intuitive user experiences, and robust performance across a wide range of devices. We leverage Google’s latest frameworks, including Jetpack and Compose, to develop scalable, secure, and efficient applications that deliver smooth interactions and a cohesive user experience. Our approach prioritizes not only technical excellence but also adaptability, allowing our apps to function flawlessly across different screen sizes, resolutions, and hardware configurations."
    }
  ];

  const [activeId, setActiveId] = useState("01");

  return (
    <section id="mobile-app-development" className="p-10">
      {/* Main Section */}
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-light text-[#292929] mb-8">
          Mobile App Development
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl">
          Mobile App Development is our core expertise, with built across iOS, Android, React Native We craft elegant, future-proof mobile experiences.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        <ScrollReveal delay="0.2s" className="flex flex-col">
            {serviceItems.map((item) => (
                <MobileServiceItem 
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

function MobileServiceItem({ item, isActive, onHover }) {
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

export default MobileAppService;
