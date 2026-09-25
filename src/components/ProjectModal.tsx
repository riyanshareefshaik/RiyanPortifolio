import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Layers, Box, CheckCircle } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  const [activeImageKey, setActiveImageKey] = useState<'col2' | 'col1Top' | 'col1Bottom'>('col2');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl rounded-[32px] sm:rounded-[44px] border border-[#D7E2EA]/20 bg-[#101217] p-5 sm:p-8 md:p-10 shadow-2xl text-[#D7E2EA] z-10 max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#D7E2EA] transition-colors cursor-pointer z-20"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-6 pr-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-black">
              {project.number}
            </span>
            <h2 className="hero-heading text-2xl sm:text-4xl font-black uppercase tracking-tight">
              {project.title}
            </h2>
            <span className="text-xs sm:text-sm font-light text-[#D7E2EA]/60 uppercase tracking-widest">
              {project.category}
            </span>
          </div>

          {/* Main Visual Showcase */}
          <div
            className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#181A22] border border-white/10 mb-4 relative group transition-all duration-500"
            style={{ background: project.images[activeImageKey] }}
          />

          {/* Tile Selector */}
          <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2">
            {(['col2', 'col1Top', 'col1Bottom'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActiveImageKey(key)}
                style={{ background: project.images[key] }}
                className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                  activeImageKey === key
                    ? 'border-[#D7E2EA] scale-105'
                    : 'border-white/10 opacity-60 hover:opacity-100'
                }`}
              />
            ))}
          </div>

          {/* Description & Specs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div className="md:col-span-2">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#D7E2EA]/50 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Case Study Overview
              </h4>
              <p className="text-sm sm:text-base font-light text-[#D7E2EA]/90 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#D7E2EA]/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4 bg-white/5 rounded-2xl p-5 border border-white/10">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#D7E2EA]/50 block mb-2">
                  Highlights
                </span>
                <ul className="text-xs text-[#D7E2EA]/80 space-y-1.5 font-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                    Built end-to-end, from data/API layer to UI
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                    Focused on a real-world problem
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                    Independent project, self-directed
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10 text-xs uppercase tracking-widest font-medium transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View on GitHub
                  </a>
                )}
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="px-4 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-opacity cursor-pointer text-center"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
