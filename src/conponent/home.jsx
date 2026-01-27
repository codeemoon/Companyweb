import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

function Home() {
    const terms = ["Software", "Apps", "Websites", "Seo Optimization", "Digital Products"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % terms.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full bg-black">
            <img 
                src="/picture/landingPageImage.png" 
                alt="Landing Page" 
                className="w-full h-[calc(100vh-80px)] object-cover block opacity-60"
            />
            
            <div className="absolute top-[40%] left-6 2xl:left-12 -translate-y-1/2 font-sans font-light leading-none tracking-tight w-[calc(100%-3rem)] 2xl:w-auto">
                <ScrollReveal delay="0s" className="text-[#ffffff] text-4xl sm:text-5xl md:text-7xl 2xl:text-[88px]">
                    Develop
                </ScrollReveal>
                
                <ScrollReveal delay="0.1s" className="flex flex-col 2xl:flex-row items-start 2xl:items-center gap-2 2xl:gap-4 text-[#4f4f4f] text-4xl sm:text-5xl md:text-7xl 2xl:text-[88px] whitespace-normal 2xl:whitespace-nowrap">
                    <span>World Class</span>
                    <div className="h-[1.2em] overflow-hidden relative w-full 2xl:min-w-[300px]">
                        <div key={index} className="animate-slide-up">
                            {terms[index]}
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay="0.2s" className="mt-8 2xl:mt-16 flex flex-col gap-1 text-base md:text-lg 2xl:text-[19.2px] text-[#7f7f7f] font-normal leading-normal [word-spacing:4px]">
                    <p>Pillow doesn't just design products but crafts them</p>
                    <p>With proper strategy, team and technology</p>
                </ScrollReveal>
            </div>
        </div>
    )
}

export default Home
