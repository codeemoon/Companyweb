import { useNavigate } from "react-router-dom";
import { ScrollReveal } from "../ScrollReveal";


function SharedVision (){

    const navigate = useNavigate()

    return (
        <div className="w-full bg-white px-6 md:px-10 pt-20 md:pt-30 pb-10 flex flex-col gap-10 overflow-hidden">
            <ScrollReveal>
                <h2 className="text-4xl md:text-[59.2px] text-[#292929] font-normal leading-tight">
                    Shared vision. <br />
                    Strong values.
                </h2>
            </ScrollReveal>
            <ScrollReveal>
                <p className="text-xl md:text-[27.2px] text-[#7f7f7f] max-w-full md:max-w-[1200px]">
                    We&rsquo;re a passionate, interdisciplinary team of experienced <br className="hidden md:block"/>specialists working toward the common goal of shipping <br className="hidden md:block"/> digital product design & software.
                </p>
            </ScrollReveal>
            <div className="w-full flex flex-col 2xl:flex-row items-start justify-between mt-10 md:mt-20 gap-10 2xl:gap-0">
                <div className="flex flex-col gap-10 md:gap-16 max-w-full 2xl:max-w-[800px]">
                    <ScrollReveal>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl md:text-[32px] text-[#0a0a0a] leading-tight">Trust & Transparency</h3>
                            <p className="text-base md:text-[19.2px] text-[#7f7f7f]">
                                To build the strongest products, you need a solid<br className="hidden md:block"/> foundation of trust We communicate at every stage <br className="hidden md:block"/>and sharing our perspectives with our teammates <br className="hidden md:block"/>and partners.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl md:text-[32px] text-[#0a0a0a] leading-tight">Partnership</h3>
                            <p className="text-base md:text-[19.2px] text-[#7f7f7f]">
                                By welcoming every stakeholder to the table,<br className="hidden md:block"/> we create stronger products and processes <br className="hidden md:block"/> that solve real brand and user problems                            
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl md:text-[32px] text-[#0a0a0a] leading-tight">Quality</h3>
                            <p className="text-base md:text-[19.2px] text-[#7f7f7f]">
                                We&rsquo;re proud of our work. We take a efficient approach,<br className="hidden md:block"/> but operate with the highest quality, highest value products<br className="hidden md:block"/>never sacrificing our stringent attention to detail for cheap <br className="hidden md:block"/>shortcuts.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl md:text-[32px] text-[#0a0a0a] leading-tight">No Drama</h3>
                            <p className="text-base md:text-[19.2px] text-[#7f7f7f]">
                                We&rsquo;re doing away with unreliable outsourcers, outsized<br className="hidden md:block"/> invoices, and underbaked apps. We&rsquo;ve woken up on your <br className="hidden md:block"/>side of the bed before and have suffered through the<br className="hidden md:block"/> same agency-client headaches.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="flex justify-end w-full 2xl:w-auto">
                    <div className="relative">
                        <ScrollReveal className="relative 2xl:absolute 2xl:-bottom-8 2xl:-left-45 z-10 mb-8 2xl:mb-0">
                            <button onClick={(()=>navigate('/project'))} className="flex items-center px-8 py-4 rounded-full bg-[#e0e1e3] text-[#292929] font-medium group transition-colors duration-300 hover:bg-[#292929] hover:text-[#fcfdff] whitespace-nowrap cursor-pointer">
                                Discuss a project
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
                        <img 
                            src="/picture/vision.webp" 
                            alt="Shared Vision" 
                            loading="lazy"
                            width="600"
                            height="800"
                            className="w-full 2xl:w-[600px] h-[400px] md:h-[800px] object-cover rounded-bl-[100px] md:rounded-bl-[200px]" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SharedVision