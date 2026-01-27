import React from 'react';
import ScrollReveal from './ScrollReveal';
import { useNavigate } from 'react-router-dom';

function LetsTalk() {
    const navigate = useNavigate()
    return (
        <section id="lets-talk" className="w-full bg-[#e0e1e3] py-40 px-12 flex flex-col items-center justify-center gap-10 text-center">
            <div className="flex flex-col gap-0 items-center w-full">
                <ScrollReveal delay="0s" className="font-manrope text-4xl md:text-5xl lg:text-[60px] text-[#7f7f7f] leading-tight font-medium">
                    Let's talk --
                </ScrollReveal>
                <ScrollReveal delay="0.1s" className="font-manrope text-4xl md:text-5xl lg:text-[60px] text-[#000000] leading-tight font-medium max-w-full lg:max-w-4xl px-4 lg:px-0">
                    We'd love to hear about your project
                </ScrollReveal>
            </div>

            <ScrollReveal delay="0.2s">
                <button onClick={(()=>navigate('/project'))} className="bg-[#292929] pt-[16px] px-[24px] pb-[17px] rounded-full flex items-center gap-2 group relative text-[16px] text-[#fcfdff] transition-colors duration-300 hover:bg-[#aaaaaa] hover:text-[#292929] cursor-pointer">
                    <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                        Start a project
                    </span>
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
        </section>
    );
}

export default LetsTalk;
