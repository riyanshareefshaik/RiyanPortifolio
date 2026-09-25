import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0C0C0C] border-t border-[#D7E2EA]/10 py-12 px-6 md:px-10 text-[#D7E2EA] select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-bold uppercase tracking-wider text-base">
            Shaik Riyan Shareef
          </span>
          <p className="text-xs text-[#D7E2EA]/50 font-light">
            Computer Science undergraduate building full-stack & AI-powered applications.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-[#D7E2EA]/70">
          <a
            href="mailto:riyan46shareef@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/riyanshareef10"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D7E2EA]/60 hover:text-white transition-colors cursor-pointer group"
          aria-label="Scroll back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#D7E2EA]/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#D7E2EA]/40">
        <span>© {new Date().getFullYear()} Shaik Riyan Shareef. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="/terms.html" className="hover:text-[#D7E2EA]/70 transition-colors">Terms</a>
          <a href="/privacy.html" className="hover:text-[#D7E2EA]/70 transition-colors">Privacy</a>
          <a href="/cookies.html" className="hover:text-[#D7E2EA]/70 transition-colors">Cookies</a>
        </div>
        <span>Nuzvid, Andhra Pradesh, India</span>
      </div>
    </footer>
  );
};
