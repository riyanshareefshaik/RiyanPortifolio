import React, { useRef, useState, useEffect } from 'react';

const ROW_1_ITEMS = [
  { label: 'Java', gradient: 'from-[#3a2a5c] to-[#8b5cf6]' },
  { label: 'Python', gradient: 'from-[#1c3a4a] to-[#3f7c93]' },
  { label: 'FastAPI', gradient: 'from-[#274a3f] to-[#5ea88a]' },
  { label: 'REST APIs', gradient: 'from-[#4a3a1c] to-[#f2994a]' },
  { label: 'Artificial Intelligence', gradient: 'from-[#4a1c2a] to-[#ff5fa2]' },
  { label: 'Computer Vision', gradient: 'from-[#1c2a4a] to-[#4fc3e8]' },
];

const ROW_2_ITEMS = [
  { label: 'SQL & DBMS', gradient: 'from-[#4a2a4a] to-[#c765a8]' },
  { label: 'Git & GitHub', gradient: 'from-[#2a2a2a] to-[#8a8a8a]' },
  { label: 'Vercel', gradient: 'from-[#0c0c0c] to-[#3a3a3a]' },
  { label: 'OpenCV', gradient: 'from-[#4a4a1c] to-[#b7e04a]' },
  { label: 'Data Structures & Algorithms', gradient: 'from-[#1c4a3a] to-[#4fe8a3]' },
  { label: 'C / C++', gradient: 'from-[#2a1c4a] to-[#6b4fe8]' },
];

// Tripled for seamless scrolling
const TRIPLED_ROW_1 = [...ROW_1_ITEMS, ...ROW_1_ITEMS, ...ROW_1_ITEMS];
const TRIPLED_ROW_2 = [...ROW_2_ITEMS, ...ROW_2_ITEMS, ...ROW_2_ITEMS];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(currentOffset);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {TRIPLED_ROW_1.map((item, index) => (
            <div
              key={`row1-${index}`}
              className={`w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden relative border border-[#D7E2EA]/10 bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between items-start text-left`}
            >
              <span className="text-xs uppercase tracking-widest text-white/60 font-mono">
                Skill
              </span>
              <span className="text-2xl font-bold text-white tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {TRIPLED_ROW_2.map((item, index) => (
            <div
              key={`row2-${index}`}
              className={`w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden relative border border-[#D7E2EA]/10 bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between items-start text-left`}
            >
              <span className="text-xs uppercase tracking-widest text-white/60 font-mono">
                Tool
              </span>
              <span className="text-2xl font-bold text-white tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
