import { useState, useEffect, useRef } from 'react';

export function ScrollReveal({ children, className = "", delay = "0s" }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (ref.current) {
                    observer.unobserve(ref.current); // Stop observing immediately
                }
            }
        }, { threshold: 0.15, rootMargin: "0px" }); // Slightly increased threshold for stability

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div 
            ref={ref} 
            className = {`${className} ${isVisible ? 'animate-[slide-up_1s_cubic-bezier(0.22,1,0.36,1)_forwards]' : 'opacity-0 will-change-transform'}`}
            style={{ animationDelay: isVisible ? delay : '0s' }}
        >
            {children}
        </div>
    );
}

export default ScrollReveal;
