'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeServices = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        }
      });

      gsap.from(itemsRef.current, {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    { title: 'Custom Tuning', desc: 'Precision performance enhancements for your exotic car.' },
    { title: 'Global Delivery', desc: 'Safe and secure transport of your luxury vehicle worldwide.' },
    { title: 'Track Days', desc: 'Exclusive access to the worlds most prestigious racing circuits.' }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-white text-blue-900">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-black text-center mb-20 uppercase tracking-tighter">
          Our Premium Services
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <div 
              key={i} 
              ref={el => itemsRef.current[i] = el}
              className="p-8 border-l-4 border-blue-900 hover:bg-blue-50 transition-colors group"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
