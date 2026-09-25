import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import portraitImg from '../assets/images/riyan_3d_character_1790342966742.jpg';

interface HeroSectionProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onNavigate,
}) => {
  return (
    <section className="h-screen w-full flex flex-col justify-between relative overflow-x-clip select-none bg-[#0C0C0C]">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav
          aria-label="Primary Navigation"
          className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]"
        >
          <button
            onClick={() => onNavigate('about')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer text-left bg-transparent border-none p-0 text-inherit font-inherit uppercase"
          >
            About
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer text-center bg-transparent border-none p-0 text-inherit font-inherit uppercase"
          >
            Skills
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer text-center bg-transparent border-none p-0 text-inherit font-inherit uppercase"
          >
            Projects
          </button>
          <button
            onClick={onOpenContact}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer text-center bg-transparent border-none p-0 text-inherit font-inherit uppercase"
          >
            Contact
          </button>
          <a
            href="/resume.pdf"
            download
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer text-right bg-transparent border-none p-0 text-inherit font-inherit uppercase"
          >
            Resume ↓
          </a>
        </nav>
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="overflow-hidden w-full text-center mt-6 sm:mt-4 md:-mt-5 z-0">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m riyan
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait with Magnet Hover */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[460px] flex items-end justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
        >
          <div className="relative rounded-[36px] sm:rounded-[48px] overflow-hidden border-2 border-[#D7E2EA]/30 shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-[#12141A] w-full">
            <img
              src={portraitImg}
              alt="Shaik Riyan Shareef"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover select-none pointer-events-none transition-transform duration-300"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0C0C0C]/80 to-transparent pointer-events-none" />
          </div>
        </Magnet>
      </FadeIn>

      {/* 4. Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative w-full">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            building intelligent, scalable applications with java, python, fastapi & modern ai tools
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};
