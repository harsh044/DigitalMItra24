import React from 'react';
import { ShieldCheck, HeartHandshake, CheckCircle2, UserCheck } from 'lucide-react';
import type { SiteTranslations } from '../App';

interface AboutSectionProps {
  text: SiteTranslations;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ text }) => {
  return (
    <section id="about" className="py-14 sm:py-18 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
          {text.aboutLabel}
        </span>

        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {text.aboutHeading}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
          {text.aboutDescription}
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">{text.personalAssistance}</h3>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              {text.personalText}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">{text.accurate}</h3>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              {text.accurateText}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">{text.trusted}</h3>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              {text.trustedText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
