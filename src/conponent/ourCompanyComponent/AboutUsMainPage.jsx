
import { ScrollReveal } from "../ScrollReveal";

function AboutUsMain (){

    return (
        <div className="flex flex-col bg-black w-full">
            <div className="w-full h-[361px] flex items-center justify-center ">
                <div className="w-full max-w-[1920px] flex justify-center items-center overflow-hidden">
                    <ScrollReveal>
                        <h1 className="text-[17vw] leading-none font-sans text-[#262626] font-normal tracking-tight select-none">
                            About us
                        </h1>
                    </ScrollReveal>
                </div>
            </div>

            <div className="flex flex-col items-start justify-between w-full pl-6 pr-6 md:pl-10 md:pr-10 2xl:pr-32 pb-20">
                <div className="flex flex-col 2xl:flex-row items-start justify-between w-full">
                    <div className="flex flex-col items-start gap-10 mt-10 w-full 2xl:w-[800px]">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-[59.2px] text-[#fcfdff] font-[400] leading-tight">
                                We deeply <br />
                                care about <br />
                                success
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal>
                            <p className="text-xl md:text-[27.2px] text-[#7f7f7f] font-[400]">
                                We analyze, <br />
                                gather, plan, <br />
                                then craft products with <br />
                                the help of our excellent team
                            </p>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="mt-2 text-3xl md:text-6xl font-bold font-serif tracking-wider text-[#292929]">
                                &ldquo;We work together&rdquo;
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="flex w-full 2xl:w-auto 2xl:justify-end mt-10 2xl:mt-0">
                         <img 
                            src="/picture/aboutUsMainImage.webp" 
                            alt="About Us" 
                            loading="lazy"
                            width="600"
                            height="600"
                            className="object-cover w-full 2xl:w-[600px] h-[300px] md:h-[600px] rounded-bl-[100px] md:rounded-bl-[200px]" 
                         />
                    </div>
                </div>

                <div className="mt-20 md:mt-40 2xl:mt-70 w-full flex flex-col 2xl:flex-row items-start justify-between gap-10">
                    <img 
                        src="/picture/clientTrustImage.webp" 
                        alt="Client Trust" 
                        loading="lazy"
                        width="600"
                        height="500"
                        className="object-cover h-auto md:h-[500px] w-full 2xl:w-auto max-w-full 2xl:max-w-[600px] rounded-br-[100px] md:rounded-br-[200px]" 
                    />
                    <div className="flex flex-col items-start gap-8 mt-10 w-full 2xl:w-[600px] translate-x-0 2xl:translate-x-60">
                         <ScrollReveal>
                             <h3 className="text-3xl md:text-[59.2px] text-[#fcfdff] font-[400] whitespace-normal md:whitespace-nowrap leading-tight">
                                Trust of client
                             </h3>
                         </ScrollReveal>
                         <ScrollReveal>
                             <p className="text-lg md:text-[27.2px] text-[#7f7f7f] font-[400]">
                                We share knowledge we listen and being <br /> transparent to our client <br/> we done work as if it is our own
                             </p>
                         </ScrollReveal>
                         <ScrollReveal>
                             <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#fcfdff] text-[#292929] font-medium group transition-colors duration-300 hover:bg-[#e0e1e3] cursor-pointer mt-8 md:mt-15">
                                Service
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
            </div>
        </div>
    )
}

export default AboutUsMain;