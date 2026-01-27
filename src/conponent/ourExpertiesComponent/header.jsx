import { useState, useEffect } from "react";
import { ScrollReveal } from "../ScrollReveal";

function HeaderOfExperties() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const stats = [
    { number: "01", label: "Technology" },
    { number: "02", label: "Design" },
    { number: "03", label: "Strategy" },
    { number: "04", label: "Growth" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Offset to trigger active state a bit earlier (e.g. when section enters viewport)
      const scrollPosition = window.scrollY + 300; 

      const sections = ['technology', 'design', 'strategy', 'growth'];

      // Default to nothing or check strict bounds
      // We iterate and see which one contains the scrollPosition
      // Or easier: find the last one that is "passed" the trigger point
      
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          if (scrollPosition >= element.offsetTop) {
            current = section;
          }
        }
      }
      
      // If none matched (we are at top), current is empty.
      // Or we can default to Technology if passed Hero. 
      // User requested "popup" when go to technology section.
      setActiveSection(current);

      // Hide sidebar when reaching Lets Talk section
      const letsTalkElement = document.getElementById('lets-talk');
      if (letsTalkElement) {
        // If we are getting close to LetsTalk (e.g. within viewport height or based on top)
        // using window.scrollY + window.innerHeight might match when it enters bottom
        // using window.scrollY + offset checks top
        if (window.scrollY + 100 >= letsTalkElement.offsetTop) {
           setIsVisible(false);
        } else {
           setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[calc(100vh-6rem)] font-sans">
        {/* Background Image */}
        <img
          src="/picture/Navbar_image.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay - Optional, adjusting based on image brightness from reference */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Main Content */}
        {/* Main Content */}
        <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-24 text-white z-10 w-full max-w-4xl px-4 md:px-0">
           <ScrollReveal>
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal leading-tight tracking-tight">
                  Experience You Can  <br /> Trust
               </h1>
            </ScrollReveal>
           
            <ScrollReveal delay="0.2s">
               <div className="mt-8 text-2xl animate-bounce">
                  ↓
               </div>
            </ScrollReveal>
        </div>
      </div>

       {/* Bottom Stats Bar - Sticky */}
      <div className={`sticky top-0 w-full bg-white z-40 border-b border-gray-200 font-sans transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
         <div className="flex flex-col md:flex-row w-full">
            {stats.map((stat, index) => {
                const isActive = activeSection === stat.label.toLowerCase();
                return (
                <div 
                  key={index} 
                  className={`flex items-center gap-4 p-8 md:p-5 lg:p-10 flex-1 ${index !== stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''}`}
                >
                    <span className={`font-medium text-lg transition-all duration-300 ${isActive ? "text-gray-900 font-bold -translate-y-4" : "text-gray-300"}`}>{stat.number}</span>
                    <span className={`text-2xl md:text-3xl font-normal transition-all duration-300 ${isActive ? "text-[#292929] font-medium -translate-y-4" : "text-gray-300"}`}>{stat.label}</span>
                </div>
            )})}
         </div>
      </div>
    </>
  );
}

export default HeaderOfExperties;