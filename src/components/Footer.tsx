import React from 'react';
import { Phone, MessageSquare, Instagram, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';
import type { SiteTranslations } from '../App';

interface FooterProps {
  text: SiteTranslations;
}

export const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                DM
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Digital Mitra
              </span>
            </div>
            <p className="mt-1.5 text-sm text-slate-400 font-medium">
              {text.governmentPrivate}
            </p>
            <p className="mt-2 text-xs text-slate-500 max-w-sm">
              {text.aboutDescription}
            </p>
          </div>

          <nav className="flex items-center gap-6 text-sm font-semibold text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">
              {text.home}
            </a>
            <span className="text-slate-700">·</span>
            <a href="#services" className="hover:text-white transition-colors">
              {text.services}
            </a>
            <span className="text-slate-700">·</span>
            <a href="#about" className="hover:text-white transition-colors">
              {text.about}
            </a>
            <span className="text-slate-700">·</span>
            <a href="#contact" className="hover:text-white transition-colors">
              {text.contact}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hello Digital Mitra, I would like to inquire about digital services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="WhatsApp Digital Mitra"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Call Digital Mitra"
              title="Call Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Instagram Digital Mitra"
              title="Follow on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Digital Mitra. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            <span>{text.officialAssistance}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
