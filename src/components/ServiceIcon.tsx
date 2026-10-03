import React from 'react';
import {
  ShieldCheck,
  Sprout,
  Wheat,
  Building2,
  Award,
  Landmark,
  CreditCard,
  FileSpreadsheet,
  FileCheck,
  FileText,
  FileBadge,
  Layers,
  Tractor,
  MapPin,
  SunMedium,
  FileCheck2,
  FormInput,
  Send,
  UploadCloud,
  Search,
  Printer,
  ScanLine,
  Copy,
  Shield,
  Wallet,
  Briefcase,
  Ticket,
  Zap,
  HelpCircle,
  LucideProps
} from 'lucide-react';

interface ServiceIconProps extends LucideProps {
  name: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-6 h-6', ...props }) => {
  switch (name) {
    case 'ShieldCheck':
      return <ShieldCheck className={className} {...props} />;
    case 'Sprout':
      return <Sprout className={className} {...props} />;
    case 'Wheat':
      return <Wheat className={className} {...props} />;
    case 'Building2':
      return <Building2 className={className} {...props} />;
    case 'Award':
      return <Award className={className} {...props} />;
    case 'Landmark':
      return <Landmark className={className} {...props} />;
    case 'CreditCard':
      return <CreditCard className={className} {...props} />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet className={className} {...props} />;
    case 'FileCheck':
      return <FileCheck className={className} {...props} />;
    case 'FileText':
      return <FileText className={className} {...props} />;
    case 'FileBadge':
      return <FileBadge className={className} {...props} />;
    case 'Layers':
      return <Layers className={className} {...props} />;
    case 'Tractor':
      return <Tractor className={className} {...props} />;
    case 'MapPin':
      return <MapPin className={className} {...props} />;
    case 'SunMedium':
      return <SunMedium className={className} {...props} />;
    case 'FileCheck2':
      return <FileCheck2 className={className} {...props} />;
    case 'FormInput':
      return <FormInput className={className} {...props} />;
    case 'Send':
      return <Send className={className} {...props} />;
    case 'UploadCloud':
      return <UploadCloud className={className} {...props} />;
    case 'SearchCheck':
      return <Search className={className} {...props} />;
    case 'Printer':
      return <Printer className={className} {...props} />;
    case 'ScanLine':
      return <ScanLine className={className} {...props} />;
    case 'Copy':
      return <Copy className={className} {...props} />;
    case 'Shield':
      return <Shield className={className} {...props} />;
    case 'Wallet':
      return <Wallet className={className} {...props} />;
    case 'Briefcase':
      return <Briefcase className={className} {...props} />;
    case 'Ticket':
      return <Ticket className={className} {...props} />;
    case 'Zap':
      return <Zap className={className} {...props} />;
    default:
      return <HelpCircle className={className} {...props} />;
  }
};
