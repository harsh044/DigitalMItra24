import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';
import type { Language, SiteTranslations } from '../App';

interface NavbarProps {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  text: SiteTranslations;
}

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, text }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-sm transition-transform duration-200 group-hover:scale-105">
              DM
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Digital Mitra
              </span>
              <span className="text-[11px] font-medium text-slate-500 hidden sm:block -mt-1">
                {text.digitalServicesCenter}
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#home" className="hover:text-blue-600 transition-colors">
              {text.home}
            </a>
            <a href="#services" className="hover:text-blue-600 transition-colors">
              {text.services}
            </a>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              {text.about}
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              {text.contact}
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLanguage((prev) => (prev === 'en' ? 'mr' : 'en'))}
              className="inline-flex items-center justify-center px-3 py-2 text-xs font-bold rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'मराठी' : 'EN'}
            </button>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hello Digital Mitra, I need assistance with digital services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>{text.whatsappUs}</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{text.callNow}</span>
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setLanguage((prev) => (prev === 'en' ? 'mr' : 'en'))}
              className="px-2.5 py-1.5 text-[10px] font-bold rounded-lg border border-slate-200 bg-slate-50 text-slate-700"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'मराठी' : 'EN'}
            </button>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hello Digital Mitra, I need assistance with digital services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-600 bg-emerald-50 rounded-lg"
              aria-label="WhatsApp Us"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              {text.home}
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              {text.services}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              {text.about}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              {text.contact}
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hello Digital Mitra, I need assistance with digital services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-emerald-700 bg-emerald-50 rounded-lg border border-emerald-200"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>{text.whatsappUs} ({CONTACT_INFO.phoneDisplay})</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{text.callNow} ({CONTACT_INFO.phoneDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
