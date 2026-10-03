import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Instagram, Clock, Copy, Check } from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';
import type { SiteTranslations } from '../App';

interface ContactSectionProps {
  text: SiteTranslations;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-blue-50/50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-3 py-1 rounded-md">
            {text.getInTouch}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {text.needService}
          </h2>
          <p className="mt-2 text-xl font-bold text-blue-600">
            {text.contactDigitalMitra}
          </p>
          <p className="mt-2 text-sm text-slate-600">
            {text.contactSubtitle}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-blue-900/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8 border-b border-slate-100">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hello Digital Mitra, I need assistance with a digital service.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all duration-200 text-base"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{text.whatsappUs}</span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 text-base"
            >
              <Phone className="w-5 h-5" />
              <span>{text.callNow}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {text.callUsDirectly}
                </h3>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors block mt-0.5"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">{text.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{text.copyPhone}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {text.whatsappChat}
                </h3>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hello Digital Mitra, I need assistance with a digital service.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-slate-900 hover:text-emerald-600 transition-colors block mt-0.5"
                >
                  {CONTACT_INFO.whatsappDisplay}
                </a>
                <p className="text-[11px] text-slate-500 mt-1">
                  {text.whatsappHint}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {text.locationAddress}
                </h3>
                <p className="text-sm font-semibold text-slate-900 mt-0.5 leading-snug">
                  {CONTACT_INFO.location}
                </p>
                <a
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center text-xs font-semibold text-blue-600 hover:underline"
                >
                  {text.viewMaps}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {text.followInstagram}
                </h3>
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-slate-900 hover:text-pink-600 transition-colors block mt-0.5"
                >
                  @{CONTACT_INFO.instagram}
                </a>
                <p className="text-[11px] text-slate-500 mt-1">
                  {text.instagramHint}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900">{text.centerHours}</p>
                <p className="text-xs text-slate-600 mt-0.5">{CONTACT_INFO.timings}</p>
              </div>
            </div>
            <span className="text-xs font-bold text-blue-700 bg-white px-3 py-1.5 rounded-lg border border-blue-200">
              {text.walkinsWelcome}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
