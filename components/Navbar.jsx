'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for Navbar
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.from(logoRef.current, {
        x: -20,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out',
      });

      gsap.from(linksRef.current, {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.7,
        ease: 'power2.out',
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/20"
    >
      <div 
        ref={logoRef}
        className="text-2xl font-black tracking-tighter text-blue-900 cursor-pointer"
      >
        ITZ FIZZ
      </div>

      <div className="hidden md:flex items-center space-x-8">
        {['Home', 'Features', 'Gallery', 'Contact'].map((item, i) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            ref={(el) => (linksRef.current[i] = el)}
            className="text-sm font-bold uppercase tracking-widest text-gray-800 hover:text-blue-600 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <button className="px-6 py-2 bg-blue-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-blue-800 transition-all hover:scale-105 active:scale-95 shadow-lg">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
