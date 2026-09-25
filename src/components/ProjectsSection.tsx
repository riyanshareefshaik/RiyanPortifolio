import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'marine-navigation-portal',
    number: '01',
    title: 'Marine Navigation Portal',
    category: '(Personal Project)',
    description:
      'An AI-assisted maritime safety platform designed around navigation support, structured information, and API-powered services for small-scale fishermen.',
    tags: ['FastAPI', 'APIs', 'Artificial Intelligence'],
    images: {
      col1Top: 'linear-gradient(135deg, #1c3a4a, #3f7c93)',
      col1Bottom: 'linear-gradient(135deg, #274a3f, #5ea88a)',
      col2: 'linear-gradient(135deg, #12222c, #2c5e73)',
    },
    liveUrl: 'https://github.com/riyanshareefshaik/Marine-Navigation-portal-for-small-scale-fishermen',
  },
  {
    id: 'ai-resume-screener',
    number: '02',
    title: 'AI Resume Screener',
    category: '(Personal Project)',
    description:
      'An automated résumé evaluation tool built to support faster, more consistent candidate screening.',
    tags: ['Artificial Intelligence', 'Python'],
    images: {
      col1Top: 'linear-gradient(135deg, #3a2a5c, #8b5cf6)',
      col1Bottom: 'linear-gradient(135deg, #4a2a4a, #c765a8)',
      col2: 'linear-gradient(135deg, #241a38, #5c3d94)',
    },
    liveUrl: 'https://github.com/riyanshareefshaik/ai-resume-screener10',
  },
  {
    id: 'gesture-rps',
    number: '03',
    title: 'Gesture Rock Paper Scissors',
    category: '(Personal Project)',
    description:
      'A real-time computer-vision game that detects hand gestures and converts them into gameplay.',
    tags: ['Python', 'OpenCV', 'Computer Vision'],
    images: {
      col1Top: 'linear-gradient(135deg, #4a3a1c, #f2994a)',
      col1Bottom: 'linear-gradient(135deg, #4a4a1c, #b7e04a)',
      col2: 'linear-gradient(135deg, #33290f, #a3701f)',
    },
  },
  {
    id: 'translator-flashcards',
    number: '04',
    title: 'Translator & Flashcard Quiz',
    category: '(Personal Project)',
    description:
      'Interactive learning tools focused on multilingual translation, recall, and accessible study experiences.',
    tags: ['Web Applications', 'Full-Stack'],
    images: {
      col1Top: 'linear-gradient(135deg, #1c2a4a, #4fc3e8)',
      col1Bottom: 'linear-gradient(135deg, #4a1c2a, #ff5fa2)',
      col2: 'linear-gradient(135deg, #12192c, #2c6c8c)',
    },
  },
];

interface CardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onOpenProject: (project: ProjectItem) => void;
}

const Card: React.FC<CardProps> = ({ project, index, totalCards, onOpenProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const topOffset = index * 28;

  return (
    <div
      ref={containerRef}
      className="h-[85vh] sm:h-[90vh] md:h-[95vh] flex items-start justify-center sticky top-24 md:top-32"
      style={{
        top: `calc(5rem + ${topOffset}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_30px_80px_rgba(0,0,0,0.85)] relative overflow-hidden"
      >
        {/* Top Row: Number, category label, project name, Live Project button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <h3
                className="font-medium uppercase text-[#D7E2EA] tracking-wide"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.8rem)' }}
              >
                {project.title}
              </h3>
              <span className="text-xs sm:text-sm font-light text-[#D7E2EA]/60 uppercase tracking-widest">
                {project.category}
              </span>
            </div>
          </div>

          <div className="shrink-0 self-end sm:self-center">
            <LiveProjectButton onClick={() => onOpenProject(project)} label="View Project" />
          </div>
        </div>

        {/* Bottom Row: Two-Column Gradient Tile Grid (40% left, 60% right) */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 w-full items-stretch">
          {/* Left Column (40% width) - 2 stacked tiles */}
          <div className="w-full md:w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-5">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/20 relative"
              style={{ height: 'clamp(130px, 16vw, 230px)', background: project.images.col1Top }}
            />
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/20 relative"
              style={{ height: 'clamp(160px, 22vw, 340px)', background: project.images.col1Bottom }}
            />
          </div>

          {/* Right Column (60% width) - 1 tall tile */}
          <div className="w-full md:w-[60%] flex">
            <div
              className="w-full h-[280px] sm:h-[350px] md:h-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/20 relative flex-1 flex items-end p-6"
              style={{ background: project.images.col2 }}
            >
              <span className="text-xs uppercase tracking-widest text-white/70 font-mono">
                {project.tags?.join(' · ')}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProject }) => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 sm:pt-24 md:pt-28 pb-32 px-5 sm:px-8 md:px-10 select-none"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading: "Projects" */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Stacking Cards */}
        <div className="relative flex flex-col gap-10 sm:gap-14 md:gap-16">
          {PROJECTS.map((project, index) => (
            <Card
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
