/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { Footer } from './components/Footer';
import { ProjectItem } from './types';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] min-h-screen w-full relative"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HeroSection */}
      <HeroSection
        onOpenContact={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. MarqueeSection */}
      <MarqueeSection />

      {/* 3. AboutSection */}
      <AboutSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 4. ServicesSection */}
      <ServicesSection />

      {/* 5. ProjectsSection */}
      <ProjectsSection
        onOpenProject={(project) => setSelectedProject(project)}
      />

      {/* Footer */}
      <Footer />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Live Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => {
          setSelectedProject(null);
          setIsContactOpen(true);
        }}
      />
    </div>
  );
}
