import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const ABOUT_TEXT =
    "With hands-on experience in LLMs, AI models, and development, I focus on AI engineering, real-world problem solving, and project building. I truly enjoy working with AI models and LLMs, and I stand out with amazing projects. Let's build something interesting together!";

  return (
    <section
      id="about"
      className="min-h-screen w-full relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* 4 Decorative 3D Corner Elements */}
      {/* Top-Left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon Art Element"
          referrerPolicy="no-referrer"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </FadeIn>

      {/* Bottom-Left: 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Sculpture Element"
          referrerPolicy="no-referrer"
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </FadeIn>

      {/* Top-Right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Block Geometry Element"
          referrerPolicy="no-referrer"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </FadeIn>

      {/* Bottom-Right: 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Composition Element"
          referrerPolicy="no-referrer"
          className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </FadeIn>

      {/* Central Content */}
      <div className="flex flex-col items-center justify-center text-center z-20 max-w-4xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading/text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated paragraph: character-by-character scroll opacity */}
        <div className="max-w-[560px] px-4">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed"
          />
        </div>

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};
