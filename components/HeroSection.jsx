'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
  const headlineRef = useRef(null);
  const statsRefs = useRef([]);
  const carRef = useRef(null);
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const buttonsRef = useRef(null);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Load Animations: Premium staggered reveal
      gsap.from(headlineRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(statsRefs.current, {
        opacity: 0,
        scale: 0.8,
        stagger: 0.3,
        delay: 0.6,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      gsap.from(buttonsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1.2,
        ease: 'power2.out',
      });

      // Parallax Background: Enhanced for depth
      gsap.to(bgRef.current, {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: true,
        },
      });

      // Headline Parallax: Slight upward fade
      gsap.to(headlineRef.current, {
        y: '-30%',
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: true,
        },
      });

      // === PROFESSIONAL CAR ANIMATION ===
      const carTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1.5,
          pin: true,
          markers: false,
        },
      });

      carTl
        .to(carRef.current, {
          x: '80vw',
          duration: 2,
          ease: 'power1.inOut',
        })
        .to(carRef.current, {
          x: '150vw',
          opacity: 0,
          duration: 1,
          ease: 'power1.out',
        });

      // Subtle road movement for smoothness
      gsap.to(carRef.current, {
        id: 'bounce',
        y: '+=5',
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        paused: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          onEnter: () => gsap.getById('bounce')?.play(),
          onLeaveBack: () => gsap.getById('bounce')?.pause(),
        },
      });
    }, sectionRef);

    // Cleanup function
    return () => {
      ctx.revert();
    };

  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex flex-col justify-center items-center"
      aria-label="Hero Section with Advanced Scroll Animation"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-b from-blue-200 to-blue-50 z-[-1]"
      // style={{ backgroundImage: 'url(https://example.com/road-bg.jpg)', backgroundSize: 'cover' }} // Pro road BG
      />

      {/* Headline */}
      <h1
        ref={headlineRef}
        className="text-4xl md:text-7xl font-bold tracking-[0.5em] uppercase flex flex-wrap justify-center space-x-1 md:space-x-2 mb-8 px-4 text-center z-10"
      >
        <span className="sr-only">WELCOME ITZ FIZZ</span>
        {['W', 'E', 'L', 'C', 'O', 'M', 'E', ' ', 'I', 'T', 'T', 'Z', ' ', 'F', 'I', 'Z', 'Z'].map((letter, i) => (
          <span key={i} aria-hidden="true" className={letter === ' ' ? 'mx-2 md:mx-4' : ''}>{letter}</span>
        ))}
      </h1>

      {/* Statistics with Bootstrap Grid */}
      <div className="container z-10">
        <div className="row justify-content-center gy-4 mb-12">
          {[
            { value: '95%', desc: 'Customer Satisfaction' },
            { value: '10K+', desc: 'Users Served' },
            { value: '4.8/5', desc: 'Average Rating' },
          ].map((stat, i) => (
            <div key={i} ref={(el) => (statsRefs.current[i] = el)} className="col-4 col-md-3 text-center">
              <p className="text-3xl md:text-5xl font-bold text-blue-900">{stat.value}</p>
              <p className="text-sm md:text-base font-medium text-gray-700">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div ref={buttonsRef} className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <button 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="px-10 py-4 bg-blue-900 text-white font-bold rounded-full transition-all shadow-xl uppercase tracking-widest text-sm"
          >
            Book a Test Drive
          </button>
          <button 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="px-10 py-4 bg-white/20 backdrop-blur-md border border-white/50 text-blue-900 font-bold rounded-full transition-all shadow-lg uppercase tracking-widest text-sm"
          >
            View Inventory
          </button>
        </div>
      </div>

      {/* Car Container */}
      <div 
        className="absolute bottom-10 md:bottom-20 left-[-30%] w-1/3 md:w-1/4 lg:w-1/5 z-20" 
        ref={carRef}
      >
        <img
          src="https://pngimg.com/uploads/lamborghini/lamborghini_PNG102919.png"
          alt="Lamborghini Sports Car Animation"
          className="w-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
        />
      </div>
    </section>
  );
};

export default HeroSection;