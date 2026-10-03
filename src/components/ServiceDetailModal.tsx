import React, { useEffect } from 'react';
import { X, CheckCircle, Clock, Users, MessageSquare, Phone, FileCheck } from 'lucide-react';
import { ServiceItem, CONTACT_INFO } from '../data/servicesData';
import { ServiceIcon } from './ServiceIcon';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Digital Mitra, I need assistance with "${service.name}". Please guide me with the procedure and required documents.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 pr-8">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0 border border-white/20">
              <ServiceIcon name={service.iconName} className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">
                {service.categoryLabel}
              </span>
              <h3 className="text-2xl font-bold text-white mt-0.5 leading-snug">
                {service.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Service Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {service.description}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <div>
                <p className="text-[11px] text-slate-500 font-medium">Turnaround Time</p>
                <p className="text-xs font-bold text-slate-800">{service.processingTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <p className="text-[11px] text-slate-500 font-medium">Target Applicant</p>
                <p className="text-xs font-bold text-slate-800 truncate" title={service.suitableFor}>
                  {service.suitableFor}
                </p>
              </div>
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <FileCheck className="w-4 h-4 text-blue-600" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Documents You Need to Bring
              </h4>
            </div>
            <ul className="space-y-2">
              {service.requiredDocuments.map((doc, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-xs text-slate-700 p-2.5 rounded-lg bg-slate-50 border border-slate-100"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-slate-500 mt-2 italic">
              * Original documents or clear mobile photos/scans are accepted for verification.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Inquiry</span>
          </a>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Digital Mitra</span>
          </a>
        </div>
      </div>
    </div>
  );
};
