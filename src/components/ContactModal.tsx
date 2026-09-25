import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Copy, Send, Mail, Globe, Sparkles } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Development',
    reason: 'Internship',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('riyan46shareef@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name} (${formData.reason})`);
    const body = encodeURIComponent(
      `${formData.message}\n\nArea of interest: ${formData.service}\nReason: ${formData.reason}\n\n— ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:riyan46shareef@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/20 bg-[#12141A] p-6 sm:p-8 md:p-10 shadow-2xl text-[#D7E2EA] z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#D7E2EA] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-2">
                  Message Dispatched
                </h3>
                <p className="text-sm font-light text-[#D7E2EA]/70 max-w-md mb-8">
                  Thank you for reaching out! Your email client should have opened with your message ready to send — Riyan typically responds within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full border border-[#D7E2EA]/30 text-xs uppercase tracking-widest hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Return to Portfolio
                </button>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#D7E2EA]/60 flex items-center gap-1.5 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    Get In Touch
                  </span>
                  <h3 className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
                    Let&apos;s Build Together
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/70 mt-1">
                    Have an internship, role, or project in mind? Fill out the form below or copy my direct email.
                  </p>
                </div>

                {/* Direct email quick pill */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 mb-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-mono truncate text-[#D7E2EA]">
                      riyan46shareef@gmail.com
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-medium text-white transition-colors cursor-pointer shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Social channel: LinkedIn */}
                <div className="flex items-center gap-3 mb-6">
                  <a
                    href="https://www.linkedin.com/in/riyanshareef10"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-[#D7E2EA] transition-colors"
                  >
                    <span>LinkedIn</span>
                  </a>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-[#D7E2EA]/20 focus:border-[#D7E2EA] outline-none text-sm text-white placeholder-[#D7E2EA]/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-[#D7E2EA]/20 focus:border-[#D7E2EA] outline-none text-sm text-white placeholder-[#D7E2EA]/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                        Area of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-[#D7E2EA]/20 focus:border-[#D7E2EA] outline-none text-sm text-white transition-colors cursor-pointer"
                      >
                        <option value="Full-Stack Development" className="bg-[#12141A]">01 · Full-Stack Development</option>
                        <option value="Artificial Intelligence" className="bg-[#12141A]">02 · Artificial Intelligence</option>
                        <option value="Computer Vision" className="bg-[#12141A]">03 · Computer Vision</option>
                        <option value="Databases & Backend" className="bg-[#12141A]">04 · Databases & Backend</option>
                        <option value="Tools & Deployment" className="bg-[#12141A]">05 · Tools & Deployment</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                        Reason for Reaching Out
                      </label>
                      <select
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-[#D7E2EA]/20 focus:border-[#D7E2EA] outline-none text-sm text-white transition-colors cursor-pointer"
                      >
                        <option value="Internship" className="bg-[#12141A]">Internship</option>
                        <option value="Full-Time Role" className="bg-[#12141A]">Full-Time Role</option>
                        <option value="Collaboration" className="bg-[#12141A]">Collaboration</option>
                        <option value="Just Saying Hi" className="bg-[#12141A]">Just Saying Hi</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the role, project, or opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-[#D7E2EA]/20 focus:border-[#D7E2EA] outline-none text-sm text-white placeholder-[#D7E2EA]/30 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-[#D7E2EA]/50 font-light">
                      Typically replies within 24h
                    </span>
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium uppercase tracking-widest text-xs cursor-pointer select-none"
                      style={{
                        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                        outline: '2px solid white',
                        outlineOffset: '-3px',
                      }}
                    >
                      <Send className="w-3.5 h-3.5" />
                      Send Inquiry
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
