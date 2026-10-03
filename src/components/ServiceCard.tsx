import React from 'react';
import { ArrowRight, ChevronRight, MessageSquare } from 'lucide-react';
import { ServiceItem, CONTACT_INFO } from '../data/servicesData';
import { ServiceIcon } from './ServiceIcon';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(service);
        }
      }}
      className="group relative flex flex-col justify-between p-5 bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400/90 shadow-xs hover:shadow-md transition-all duration-200 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
    >
      <div>
        {/* Top bar inside card: Icon and Category Label */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 shrink-0">
            <ServiceIcon name={service.iconName} className="w-5 h-5" />
          </div>

          {/* Category label - clean typography */}
          <span className="text-[11px] font-semibold tracking-wide uppercase text-slate-500">
            {service.categoryLabel}
          </span>
        </div>

        {/* Service Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
          {service.name}
        </h3>

        {/* 1-2 Line Description */}
        <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">
          {service.description}
        </p>
      </div>

      {/* Card Footer: Action affordances */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="font-semibold text-blue-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform duration-200">
          <span>View Details & Docs</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </span>

        {/* Direct WhatsApp link without triggering modal */}
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(`Hello Digital Mitra, I need assistance with "${service.name}".`)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
          title={`WhatsApp about ${service.name}`}
          aria-label={`Inquire about ${service.name} on WhatsApp`}
        >
          <MessageSquare className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
