import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

function VideoSection() {
    const navigate = useNavigate()
    return (
        <div className="w-full bg-black overflow-hidden relative h-screen">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video 
                    src="/video/5c76ce4998ac6bcff7b7f60d_67e1e08d1c69ff97c254a4c9_Preview-U-Crop-Updated-optmized-transcode.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Mask Layer - PILLOW Text */}
            {/* mix-blend-multiply with black background makes the text "cut out" the video */}
            <div className="absolute inset-0 bg-black mix-blend-multiply flex items-center justify-center pointer-events-none">
                <ScrollReveal delay="0s" className="flex justify-center w-full">
                    <span className="text-white font-lexend font-bold text-[18vw] leading-none select-none tracking-widest text-center -translate-y-20">
                        PILLOW
                    </span>
                </ScrollReveal>
            </div>
            
            {/* Content Overlay - Placed absolutely to control position independent of the mask */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 z-10 pointer-events-none">
                <div className="flex flex-col items-center gap-6 text-center max-w-[800px] px-4 pointer-events-auto">
                    <ScrollReveal delay="0.1s">
                        <p className="text-white text-[16px] leading-relaxed font-manrope [word-spacing:4px]">
                            <span className="text-gray-500 font-['Great_Vibes'] text-3xl mr-1">"</span>
                            We at <span className="text-gray-500 font-medium">Pillow</span> believe on making a dream come true for any business owner by making their business online which is the first step taken by Business Owner in the Digital World. <span className="text-gray-500 font-medium">Pillow</span> always helps and guides their clients by giving suggestions to grow their Business & this is what makes us one of the best product designing company.
                            <span className="text-gray-500 font-['Great_Vibes'] text-3xl ml-1">"</span>
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay="0.2s">
                        <button onClick={(()=>navigate('/project'))} className="bg-[#292929] pt-[16px] px-[24px] pb-[17px] rounded-full flex items-center gap-2 group relative text-[16px] text-[#fcfdff] transition-colors duration-300 hover:bg-[#aaa] hover:text-[#292929] cursor-pointer">
                            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                                Let's work
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
                </div>
            </div>
        </div>
    )
}

export default VideoSection
