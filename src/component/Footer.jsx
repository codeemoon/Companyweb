import React from 'react';
import { useNavigate } from 'react-router-dom';


function Footer() {
    const navigate = useNavigate()
    
    return (
        <footer className="w-full bg-[#0a0a0a] pt-20 pb-8 px-6 md:px-12 text-[#fcfdff] flex flex-col gap-20">
            {/* Top Branding */}
            <div className="w-full pb-8 md:pb-20">
                <div className="flex justify-between w-full font-lexend font-bold text-[13vw] md:text-[18vw] leading-none select-none text-[#fcfdff]">
                    {"PILLOW".split("").map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                </div>
            </div>

            {/* Links Grid */}
            <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 pl-0 md:pl-12 lg:pl-32">
                {/* Column 1: Contact */}
                <div className="flex flex-col gap-6 lg:border-r border-[#292929] lg:pr-16">
                    <h3 className="font-manrope text-[18px] font-medium text-[#fcfdff]">
                        Contact
                    </h3>
                    <div className="flex flex-col gap-4">
                        <a href="mailto:upadhyayakhand909@gmail.com" className="font-manrope text-[16px] text-[#7f7f7f] hover:text-[#fcfdff] transition-colors">
                            upadhyayakhand909@gmail.com
                        </a>
                        <p className="font-manrope text-[16px] text-[#7f7f7f]">
                            Pyaragraj, jhunsi , Uttarpradesh ,India,<br />
                            Bhiali, sec-6 , Durg , Chattisgarh , India
                        </p>
                    </div>
                </div>

                {/* Column 2: Services */}
                <div  className="flex flex-col gap-6 lg:border-r border-[#292929] lg:px-16 ">
                    <h3 onClick={(()=>navigate('/services'))} className="font-manrope text-[18px] font-medium text-[#fcfdff] cursor-pointer">
                        Services
                    </h3>
                    <div className="flex flex-col gap-4">
                        <p className="font-manrope text-[16px] text-[#7f7f7f] hover:text-[#fcfdff] transition-colors">
                            Tech & Innovation
                        </p>
                        <p className="font-manrope text-[16px] text-[#7f7f7f] hover:text-[#fcfdff] transition-colors">
                            Experience & Design
                        </p>
                        <p className="font-manrope text-[16px] text-[#7f7f7f] hover:text-[#fcfdff] transition-colors">
                            Strategy & Consulting
                        </p>
                        <p className="font-manrope text-[16px] text-[#7f7f7f] hover:text-[#fcfdff] transition-colors">
                            Product Growth
                        </p>
                    </div>
                </div>

                {/* Column 3: Company */}
                <div className="flex flex-col gap-6 lg:border-r border-[#292929] lg:px-16">
                    <h3 className="font-manrope text-[18px] font-medium text-[#fcfdff]">
                        Quick links
                    </h3>
                    <div className="flex flex-col gap-4">
                        <a href="/services" className="font-manrope text-[16px] text-[#7f7f7f] hover:text-[#fcfdff] transition-colors cursor-pointer">
                            Our services
                        </a>
                        <a href="/ourexperties" className="font-manrope text-[16px] text-[#7f7f7f] hover:text-[#fcfdff] transition-colors cursor-pointer">
                            Our experties
                        </a>
                        <a href="/ourcompany" className="font-manrope text-[16px] text-[#7f7f7f] hover:text-[#fcfdff] transition-colors cursor-pointer">
                            About us
                        </a>
                    </div>
                </div>

                {/* Column 4: Socials */}
                <div className="flex flex-col gap-6 lg:pl-16">
                    <h3 className="font-manrope text-[18px] font-medium text-[#fcfdff]">
                        Socials
                    </h3>
                    <div className="flex flex-col gap-4">
                        <a href='https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BaH0OkZ3UQaOwG5iM5NezHQ%3D%3D ' target="_blank" className="font-manrope text-[16px] text-[#7f7f7f] hover:text-[#fcfdff] transition-colors flex items-center gap-1 group">
                            LinkedIn
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
                        </a>
                        <p  className="font-manrope text-[16px] text-[#7f7f7f] hover:text-[#fcfdff] transition-colors flex items-center gap-1 group">
                            Twitter
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
                        </p>
                        <p  className="font-manrope text-[16px] text-[#7f7f7f] hover:text-[#fcfdff] transition-colors flex items-center gap-1 group">
                            Instagram
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full flex justify-between items-center pt-8 border-t border-[#292929] mt-10">
                <p className="font-manrope text-[14px] text-[#555]">
                    © 2026 Pillow
                </p>
                <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="font-manrope text-[14px] text-[#555] hover:text-[#fcfdff] transition-colors"
                >
                    ↑ Back to top
                </button>
            </div>
        </footer>
    );
}

export default Footer;
