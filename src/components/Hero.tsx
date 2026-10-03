import React, { useState } from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';
import heroImage from '../assets/images/hero_digital_mitra_1790860782683.jpg';
import type { SiteTranslations } from '../App';

interface HeroProps {
  language: 'en' | 'mr';
  text: SiteTranslations;
}

export const Hero: React.FC<HeroProps> = ({ text }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 overflow-hidden">
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -z-10 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase text-blue-700 bg-blue-100/80 px-3.5 py-1.5 rounded-full w-fit">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{CONTACT_INFO.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance">
              {text.heroTitleLine1} <br className="hidden sm:inline" />
              <span className="text-blue-600">{text.heroTitleLine2}</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              {text.heroDescription}
            </p>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3 max-w-xl">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 leading-normal">
                {CONTACT_INFO.shortIntro}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>{text.viewServices}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-xs transition-colors"
              >
                <span>{text.contactMitra}</span>
              </a>
            </div>

            <div className="pt-4 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{text.trustGovt}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{text.trustFast}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{text.trustLocal}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-blue-900/5">
                {!imgError ? (
                  <img
                    src={heroImage}
                    alt="Digital Mitra Service Center Hub"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-auto aspect-16/10 object-cover object-center transform hover:scale-[1.02] transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full aspect-16/10 bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col items-center justify-center p-8 text-white text-center">
                    <ShieldCheck className="w-16 h-16 mb-3 text-blue-200" />
                    <h3 className="text-xl font-bold">Digital Mitra Hub</h3>
                    <p className="text-xs text-blue-100 mt-1 max-w-xs">
                      Official assistance for government schemes, farmer portals, certificates & online applications.
                    </p>
                  </div>
                )}

                <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-medium text-slate-200">
                      Center Open Today
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    Mon - Sat · 9 AM - 8 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
