import { ScrollReveal } from "../ScrollReveal";

function Growth() {
 
      const handleClick = () => {
  window.open(' https://www.mygreatlearning.com/blog/product-growth-strategies/', "_blank", "noopener,noreferrer");
};
  return (
    <div id="growth" className="w-full flex flex-col 2xl:flex-row items-center justify-between py-12 md:py-24 px-6 md:px-12 2xl:px-24 bg-white border-t border-gray-100">
      {/* Left Content - Image */}
      <div className="hidden 2xl:flex relative justify-start w-1/2 2xl:pr-12">
         <div className="relative w-full max-w-[500px]">
            <div className="w-full h-[600px] rounded-3xl rounded-bl-[200px] overflow-hidden mt-25">
                <img 
                    src="/picture/growthproduct.png" 
                    alt="Product Growth" 
                    className="w-full h-full object-cover"
                />
            </div>
         </div>
      </div>

      {/* Right Content - Title & Description */}
      <div className="flex flex-col gap-6 w-full 2xl:w-1/2 2xl:items-end">
        <ScrollReveal className="w-full 2xl:max-w-[500px]">
             <div className="text-9xl md:text-[150px] 2xl:text-[180px] leading-none text-gray-100 font-light -ml-2 md:-ml-4">
                4
             </div>
             <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-normal text-[#292929]">
                Product <br /> Growth
             </h2>
             <p className="text-lg md:text-xl leading-relaxed text-[#595959] mt-8 max-w-lg">
              Launching a digital product is not the finish line; it's only the beginning of the Growth journey. Our Product Managers, Data Scientists and Growth Marketers partner with clients to focus on the evolution and adoption of the product, prioritizing business goals through rapid releases, user feedback cycles, and data-driven growth marketing experimentation.
            </p>
            
            <button onClick={handleClick} className="cursor-pointer mt-10 flex items-center gap-2 bg-[#292929] text-white px-8 py-4 rounded-full w-fit hover:bg-black transition-colors group">
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
    </div>
  )
}

export default Growth
