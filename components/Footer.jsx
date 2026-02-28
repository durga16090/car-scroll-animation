'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer = () => {
    const footerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(contentRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }, footerRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <footer ref={footerRef} className="bg-black py-12 border-t border-zinc-900">
            <div ref={contentRef} className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <div className="w-8 h-8 bg-emerald-400 rounded-lg flex items-center justify-center font-bold text-black font-serif">
                        F
                    </div>
                    <span className="font-semibold text-lg tracking-wider">ITZ FIZZ</span>
                </div>

                <div className="text-zinc-500 text-sm">
                    &copy; {new Date().getFullYear()} Itz Fizz. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
