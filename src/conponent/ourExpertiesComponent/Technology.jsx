import { useNavigate } from "react-router-dom";
import { ScrollReveal } from "../ScrollReveal";

function Technology() {
    const handleClick = () => {
  window.open('https://www.silcon.tech/en/technological-innovation-and-web-development/', "_blank", "noopener,noreferrer");
};
  return (
    <div id="technology" className="w-full flex flex-col 2xl:flex-row items-center justify-between py-12 md:py-24 px-6 md:px-12 2xl:px-24 bg-white">
      {/* Left Content */}
      <div className="flex flex-col gap-6 w-full 2xl:w-1/2">
        <ScrollReveal>
             <div className="text-9xl md:text-[150px] 2xl:text-[180px] leading-none text-gray-100 font-light -ml-2 md:-ml-4">
                1
             </div>
             <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-normal text-[#292929] ">
                Tech & <br /> Innovation
             </h2>
             <p className="text-lg md:text-xl leading-relaxed text-[#595959] mt-8 max-w-lg">
              We are a leader in building cutting-edge, AI-driven, and intuitive digital solutions. We push boundaries, solve complex challenges, and create future-proof, scalable mobile and web products that drive real impact.
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
         <div className="relative w-full max-w-125">
            <div className="w-full h-150 rounded-3xl rounded-bl-[200px] overflow-hidden">
                <img 
                    src="/picture/headerFor Exp.png" 
                    alt="Technology Expertise" 
                    className="w-full h-full object-cover"
                />
            </div>
         </div>
      </div>


    </div>
  )
}

export default Technology
