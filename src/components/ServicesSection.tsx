import React from 'react';
import { FadeIn } from './FadeIn';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: '01',
    number: '01',
    name: 'Tools & Deployment',
    description:
      'Git, GitHub, and Vercel-based workflows for version control, collaboration, and shipping projects that are actually live, not just local.',
  },
  {
    id: '02',
    number: '02',
    name: 'Artificial Intelligence',
    description:
      'Practical AI-assisted tools and systems, from automated screening logic to intelligent application features built around real use cases.',
  },
  {
    id: '03',
    number: '03',
    name: 'Computer Vision',
    description:
      'Real-time, gesture and image-based interactive systems built with Python and OpenCV, turning camera input into live gameplay or interaction.',
  },
  {
    id: '04',
    number: '04',
    name: 'Databases & Backend',
    description:
      'Reliable backend architecture — SQL, DBMS design, and API-driven systems that keep applications fast and data consistent.',
  },
  {
    id: '05',
    number: '05',
    name: 'Full-Stack Development',
    description:
      'Building complete applications end to end — from database design to a polished user interface — using Java, Python, FastAPI, and REST APIs.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-0 select-none"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading: Services */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service items with 1px border separator */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              y={30}
              className="border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 group hover:bg-black/[0.02] transition-colors"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-10 md:gap-16">
                {/* Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none tracking-tight shrink-0 select-none"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </div>

                {/* Name & Description */}
                <div className="flex flex-col flex-1 max-w-2xl">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide leading-tight mb-2 sm:mb-3"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
