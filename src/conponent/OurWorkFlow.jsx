import React, { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

function OurWorkFlow() {
    const scrollContainerRef = useRef(null);

    const workflowSteps = [
        {
            id: 1,
            title: "Requirement Gathering & Analysis",
            description: "We listen to our customers before we talk!. We gather information from clients.",
            image: "/picture/requirement&gathering.png"
        },
        {
            id: 2,
            title: "Strategic Layout & Custom Design",
            description: "Stand out from the crowd with a stunning, hand crafted site.",
            image: "/picture/statisclayoutAndDesign.png"
        },
        {
            id: 3,
            title: "Content Writing That Converts",
            description: "Engage the reader with professional copywriting.",
            image: "/picture/contentwriting.png"
        },
        {
            id: 4,
            title: "Conversion Rate Optimization (CRO)",
            description: "Maximize bottom-line results with continuous A/B testing.",
            image: "/picture/ConversionRateOptimization.png"
        },
        {
            id: 5,
            title: "Search Engine Optimization (SEO)",
            description: "Rank #1 on Google and drive more traffic to your site.",
            image: "/picture/SEO.png"
        },
        {
            id: 6,
            title: "Reliable Hosting & Maintenance",
            description: "Fast and secure servers, maintenance & reporting.",
            image: "/picture/hosting.png"
        }
    ];

    const scrollNext = () => {
        if (scrollContainerRef.current) {
            const cardWidth = 650 + 48; // Image width (650) + gap-12 (48)
            scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    };

    return (
        <section className="w-full bg-[#fcfdff] py-32 px-12 overflow-hidden">
            <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-20 items-start">
                {/* Header Section (Left Side) */}
                <div className="flex flex-col gap-8 lg:w-[450px] flex-shrink-0 sticky top-3">
                    <ScrollReveal delay="0s">
                        <h2 className="font-manrope text-[48px] text-[#292929] leading-tight font-medium">
                            Our work flow
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay="0.1s">
                        <p className="font-manrope text-[20.8px] text-[#7f7f7f] leading-relaxed">
                            Pillow follows most authentic way to build products.<br />
                            Process of building products is powerful with<br />
                            advance technology
                        </p>
                    </ScrollReveal>
                    
                </div>

                {/* Cards Container (Right Side) */}
                <div className="relative flex-1 w-full min-w-0">
                    <div className="w-full">
                        <div 
                            ref={scrollContainerRef}
                            className="flex gap-12 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory pr-20 bg-transparent"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                        {workflowSteps.map((step) => (
                            <div key={step.id} className="flex-shrink-0 flex flex-col gap-8 snap-start transition-opacity duration-300">
                                {/* Image Container */}
                                <div className="w-[650px] h-[707px] rounded-3xl overflow-hidden relative group shadow-sm">
                                    <img 
                                        src={step.image} 
                                        alt={step.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                
                                {/* Content */}
                                <div className="flex flex-col gap-4 max-w-[650px]">
                                    <h3 className="font-manrope text-[32px] text-[#292929] font-medium">
                                        {step.title}
                                    </h3>
                                    <p className="font-manrope text-[20px] text-[#7f7f7f] leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                        
                        {/* Spacer to allow scrolling the last item fully into view */}
                        <div className="w-[350px] flex-shrink-0"></div>
                        </div>
                    </div>

                    {/* Floating Next Button - Soft Rounded Rectangle / Squircle */}
                    <ScrollReveal delay="0.3s" className="absolute right-0 top-[350px] z-10 w-28 h-16">
                        <button 
                            onClick={scrollNext}
                            className="w-full h-full bg-white rounded-[50px] shadow-xl flex items-center justify-center cursor-pointer hover:bg-[#f5f5f5] transition-all duration-300 border border-gray-100 hover:scale-105 active:scale-95"
                            aria-label="Next Step"
                        >
                         <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#292929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

export default OurWorkFlow;
