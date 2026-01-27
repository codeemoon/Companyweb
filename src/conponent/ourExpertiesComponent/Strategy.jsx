import { ScrollReveal } from "../ScrollReveal";

function Strategy() {

  const handleClick = () => {
  window.open('https://www.ey.com/en_in/services/strategy/software-strategy-consulting', "_blank", "noopener,noreferrer");
};
  
  return (
    <div id="strategy" className="w-full flex flex-col 2xl:flex-row items-center justify-between py-12 md:py-24 px-6 md:px-12 2xl:px-24 bg-white border-t border-gray-100">
      {/* Left Content */}
      <div className="flex flex-col gap-6 w-full 2xl:w-1/2">
        <ScrollReveal>
             <div className="text-9xl md:text-[150px] 2xl:text-[180px] leading-none text-gray-100 font-light -ml-2 md:-ml-4">
                3
             </div>
             <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-normal text-[#292929]">
                Strategy & <br /> Consulting
             </h2>
             <p className="text-lg md:text-xl leading-relaxed text-[#595959] mt-8 max-w-lg">
              We bring together expert minds to work with clients to define business strategies through possible digital product solutions. We surround our clients with leaders from product, design, data, and engineering departments, with a relentless focus on product-market fit, growth potential, monetization strategies, and technical opportunities.
            </p>
            
            <button onClick={handleClick} className="mt-10 flex items-center gap-2 bg-[#292929] text-white px-8 py-4 rounded-full w-fit hover:bg-black transition-colors group cursor-pointer">
              <span className="text-lg font-medium">Learn More</span>
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

      {/* Right Content - Image */}
      <div className="hidden 2xl:flex relative justify-end w-1/2 mt-30">
         <div className="relative w-full max-w-[500px]">
            <div className="w-full h-[600px] rounded-3xl rounded-bl-[200px] overflow-hidden">
                <img 
                    src="/picture/stategyInExpertires.png" 
                    alt="Strategy & Consulting" 
                    className="w-full h-full object-cover"
                />
            </div>
         </div>
      </div>
    </div>
  )
}

export default Strategy
