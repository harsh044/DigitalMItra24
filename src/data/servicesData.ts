export type ServiceCategory = 'all' | 'government' | 'documentation' | 'farmer' | 'online' | 'private';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'government' | 'documentation' | 'farmer' | 'online' | 'private';
  categoryLabel: string;
  description: string;
  iconName: string;
  requiredDocuments: string[];
  processingTime: string;
  suitableFor: string;
}

export const CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Services' },
  { id: 'government', label: 'Government' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'farmer', label: 'Farmer' },
  { id: 'online', label: 'Online' },
  { id: 'private', label: 'Private' },
];

export const SERVICES_DATA: ServiceItem[] = [
  // --- Government Services ---
  {
    id: 'e-shram-card',
    name: 'E-Shram Card',
    category: 'government',
    categoryLabel: 'Government Service',
    description: 'Assistance with E-Shram registration, UAN generation, and profile updates for unorganized workers.',
    iconName: 'ShieldCheck',
    requiredDocuments: ['Aadhaar Card', 'Aadhaar-linked Mobile Number', 'Bank Passbook / Account Details', 'Age Proof (16-59 years)'],
    processingTime: 'Instant / Same Day',
    suitableFor: 'Unorganized workers, daily wage laborers'
  },
  {
    id: 'farmer-id',
    name: 'Farmer ID',
    category: 'government',
    categoryLabel: 'Government Service',
    description: 'Assistance with Farmer ID registration, verification, and digital agriculture profile setup.',
    iconName: 'Sprout',
    requiredDocuments: ['Aadhaar Card', 'Land 7/12 (Satbara) & 8A Extract', 'Bank Passbook', 'Active Mobile Number'],
    processingTime: '1 - 3 Working Days',
    suitableFor: 'Agricultural landowners and farming families'
  },
  {
    id: 'e-pik-pahani',
    name: 'E-Pik Pahani',
    category: 'government',
    categoryLabel: 'Government Service',
    description: 'Assistance with online E-Pik Pahani crop reporting and land record digital entry.',
    iconName: 'Wheat',
    requiredDocuments: ['7/12 Land Record', 'Aadhaar Card', 'Crop Sowing Details & Live Field Photos', 'Mobile App Login Support'],
    processingTime: 'Same Day Guidance',
    suitableFor: 'Farmers registering seasonal Kharif and Rabi crop records'
  },
  {
    id: 'govt-online-applications',
    name: 'Government Online Applications',
    category: 'government',
    categoryLabel: 'Government Service',
    description: 'End-to-end guidance and filing for state and central government portal services.',
    iconName: 'Building2',
    requiredDocuments: ['Applicant ID Proof', 'Address Proof', 'Relevant Scheme Application Papers', 'Recent Passport Photo'],
    processingTime: '2 - 5 Working Days',
    suitableFor: 'Citizens applying for official government schemes & portals'
  },
  {
    id: 'govt-certificates',
    name: 'Government Certificates',
    category: 'government',
    categoryLabel: 'Government Service',
    description: 'Application filing and document preparation for certified government issuances and verifications.',
    iconName: 'Award',
    requiredDocuments: ['Identity Proof (Aadhaar/Voter ID)', 'Proof of Residence', 'School Leaving / Relevant Records', 'Self-Declaration Form'],
    processingTime: '7 - 15 Working Days',
    suitableFor: 'Students, job applicants, and citizens requiring official verification'
  },
  {
    id: 'govt-scheme-applications',
    name: 'Government Scheme Applications',
    category: 'government',
    categoryLabel: 'Government Service',
    description: 'Submissions for PM-Kisan, pension schemes, housing assistance, and social welfare programs.',
    iconName: 'Landmark',
    requiredDocuments: ['Aadhaar Card', 'Ration Card', 'Income Certificate', 'Bank Account Linked with NPCI/Aadhaar'],
    processingTime: '3 - 7 Working Days',
    suitableFor: 'Eligible citizens seeking government subsidies and financial grants'
  },

  // --- Documentation Services ---
  {
    id: 'pan-card',
    name: 'PAN Card',
    category: 'documentation',
    categoryLabel: 'Documentation Service',
    description: 'Assistance with new PAN card application, name/DOB corrections, and instant e-PAN generation.',
    iconName: 'CreditCard',
    requiredDocuments: ['Aadhaar Card', '2 Passport-size Color Photos', 'Date of Birth Proof', 'Existing PAN (if correction)'],
    processingTime: 'e-PAN in 24-48 hrs, Physical in 10-15 Days',
    suitableFor: 'Individuals, students, businesses, and taxpayers'
  },
  {
    id: 'income-certificate',
    name: 'Income Certificate',
    category: 'documentation',
    categoryLabel: 'Documentation Service',
    description: 'Application assistance for official Tahsildar / Revenue Department income certification.',
    iconName: 'FileSpreadsheet',
    requiredDocuments: ['Ration Card', 'Salary Slip / Talathi Income Report / Form 16', 'Aadhaar Card', 'Electricity Bill'],
    processingTime: '7 - 14 Working Days',
    suitableFor: 'Students applying for scholarships, fee concessions, and scheme beneficiaries'
  },
  {
    id: 'domicile-certificate',
    name: 'Domicile Certificate',
    category: 'documentation',
    categoryLabel: 'Documentation Service',
    description: 'Residence proof and official domicile certificate application filing for local residency validation.',
    iconName: 'FileCheck',
    requiredDocuments: ['Proof of 15+ Years Residence (Electricity bill/Ration card)', 'School Leaving Certificate', 'Aadhaar Card', 'Affidavit'],
    processingTime: '10 - 21 Working Days',
    suitableFor: 'Students for college admissions, government competitive exams'
  },
  {
    id: 'caste-certificate',
    name: 'Caste Certificate',
    category: 'documentation',
    categoryLabel: 'Documentation Service',
    description: 'Assistance with social category certification, legacy proof compilation, and online filing.',
    iconName: 'FileText',
    requiredDocuments: ['Father/Grandfather School Leaving or Land Record showing caste', 'Applicant LC/Birth Certificate', 'Aadhaar Card', 'Affidavit'],
    processingTime: '15 - 30 Working Days',
    suitableFor: 'Reserved category citizens seeking academic and employment benefits'
  },
  {
    id: 'birth-certificate-assistance',
    name: 'Birth Certificate Assistance',
    category: 'documentation',
    categoryLabel: 'Documentation Service',
    description: 'Guidance and application filing assistance for municipal and gram panchayat birth records.',
    iconName: 'FileBadge',
    requiredDocuments: ['Hospital Discharge Card / Proof of Birth', 'Parents\' Aadhaar & Marriage Certificate', 'Address Proof'],
    processingTime: '5 - 10 Working Days',
    suitableFor: 'Newborn registrations, school admissions, passport requirements'
  },
  {
    id: 'other-document-services',
    name: 'Other Document Services',
    category: 'documentation',
    categoryLabel: 'Documentation Service',
    description: 'Assistance with affidavits, gazette notifications, voter card updates, and identity corrections.',
    iconName: 'Layers',
    requiredDocuments: ['Aadhaar Card', 'Existing Document copy to be corrected', 'Supporting Proofs'],
    processingTime: '1 - 7 Working Days',
    suitableFor: 'Any citizen needing document verification or legal name/address corrections'
  },
  {
    id: 'land-record-services',
    name: 'Land Record Services',
    category: 'farmer',
    categoryLabel: 'Farmer Service',
    description: 'Digital retrieval and printing of certified 7/12 (Satbara), 8A extracts, and Ferfar records.',
    iconName: 'MapPin',
    requiredDocuments: ['District, Taluka, Village Name', 'Survey / Gat Number', 'Account Number (Khata No.)'],
    processingTime: 'Instant / Same Day',
    suitableFor: 'Farmers, land buyers, bank loan applicants, and legal documentation'
  },
  {
    id: 'agriculture-scheme-applications',
    name: 'Agriculture Scheme Applications',
    category: 'farmer',
    categoryLabel: 'Farmer Service',
    description: 'Application support for drip irrigation subsidies, farm ponds, tractor tools, and solar pumps.',
    iconName: 'SunMedium',
    requiredDocuments: ['7/12 & 8A Record with Water Source Entry', 'Aadhaar & Bank Passbook', 'Quotation / Vendor Estimate', 'Caste Certificate (if applicable)'],
    processingTime: '3 - 7 Working Days',
    suitableFor: 'Farmers upgrading irrigation, purchasing farm machinery with subsidy'
  },
  {
    id: 'farmer-certificate-services',
    name: 'Farmer Certificate Services',
    category: 'farmer',
    categoryLabel: 'Farmer Service',
    description: 'Assistance with agriculturist certificates, landholding validation, and allied farm documents.',
    iconName: 'FileCheck2',
    requiredDocuments: ['Ancestral 7/12 Records', 'Applicant Identity Proof', 'Gram Panchayat / Talathi Verification'],
    processingTime: '7 - 14 Working Days',
    suitableFor: 'Farmers purchasing agricultural land or establishing agricultural status'
  },

  // --- Online Services ---
  {
    id: 'online-form-filling',
    name: 'Online Form Filling',
    category: 'online',
    categoryLabel: 'Online Service',
    description: 'Accurate, error-free form filling for competitive exams, university admissions, and government vacancies.',
    iconName: 'FormInput',
    requiredDocuments: ['Educational Marksheets', 'Passport Photograph & Signature', 'Photo ID Proof', 'Caste / Domicile Certificate (if applicable)'],
    processingTime: 'Same Day / While You Wait',
    suitableFor: 'Students, job aspirants, and general applicants'
  },
  {
    id: 'application-submission',
    name: 'Application Submission',
    category: 'online',
    categoryLabel: 'Online Service',
    description: 'Timely and verified online submission of government, academic, and institutional portal applications.',
    iconName: 'Send',
    requiredDocuments: ['Completed Draft / Registration Details', 'Required Attachment Files', 'Applicant Authorization'],
    processingTime: 'Instant Submission with Receipt',
    suitableFor: 'Anyone needing verified submission before strict deadlines'
  },
  {
    id: 'document-upload',
    name: 'Document Upload & Formatting',
    category: 'online',
    categoryLabel: 'Online Service',
    description: 'High-resolution document scanning, file compression, format conversion (PDF/JPEG), and portal upload.',
    iconName: 'UploadCloud',
    requiredDocuments: ['Original Documents or Clear Physical Copies'],
    processingTime: 'Instant / Same Day',
    suitableFor: 'Applicants encountering file size or resolution upload errors'
  },
  {
    id: 'online-status-checking',
    name: 'Online Status Checking',
    category: 'online',
    categoryLabel: 'Online Service',
    description: 'Real-time tracking of submitted government applications, tokens, and grievance status.',
    iconName: 'SearchCheck',
    requiredDocuments: ['Application Number / Token Number / Acknowledgment Slip', 'Registered Mobile Number for OTP'],
    processingTime: 'Instant Status Report',
    suitableFor: 'Applicants waiting for certificate approvals or dispatch status'
  },
  {
    id: 'printing-services',
    name: 'Printing (B&W & Color)',
    category: 'online',
    categoryLabel: 'Online Service',
    description: 'High-speed, crisp laser printing for official applications, documents, study materials, and forms.',
    iconName: 'Printer',
    requiredDocuments: ['Digital File via WhatsApp, Email, or Pen Drive'],
    processingTime: 'Instant',
    suitableFor: 'Students, professionals, and walk-in visitors'
  },
  {
    id: 'scanning-services',
    name: 'Scanning & Archiving',
    category: 'online',
    categoryLabel: 'Online Service',
    description: 'Crystal-clear optical document scanning with searchable PDF creation and secure cloud/email delivery.',
    iconName: 'ScanLine',
    requiredDocuments: ['Physical Documents, Photos, or Certificates'],
    processingTime: 'Instant',
    suitableFor: 'Safeguarding records and sending clean digital files'
  },
  {
    id: 'photocopy-services',
    name: 'Photocopy (Xerox)',
    category: 'online',
    categoryLabel: 'Online Service',
    description: 'Clean single and double-sided photocopies with high contrast and neat sorting.',
    iconName: 'Copy',
    requiredDocuments: ['Original or Reference Documents'],
    processingTime: 'Instant',
    suitableFor: 'Court papers, exam sets, IDs, and multi-page dossiers'
  },

  // --- Private Services ---
  {
    id: 'insurance-assistance',
    name: 'Insurance Assistance',
    category: 'private',
    categoryLabel: 'Private Service',
    description: 'Assistance with online two-wheeler, four-wheeler, crop, and health insurance policy renewals.',
    iconName: 'Shield',
    requiredDocuments: ['Vehicle RC Book', 'Previous Insurance Policy Copy', 'Owner Aadhaar Card'],
    processingTime: 'Instant Online Policy Generation',
    suitableFor: 'Vehicle owners, farmers, and family insurance coverage'
  },
  {
    id: 'banking-online-services',
    name: 'Banking-related Online Services',
    category: 'private',
    categoryLabel: 'Private Service',
    description: 'Assistance with digital banking navigation, Aadhaar-linked account status, and mini-statement checks.',
    iconName: 'Wallet',
    requiredDocuments: ['Bank Passbook', 'Aadhaar Card', 'Mobile Linked with Bank'],
    processingTime: 'Instant Guidance',
    suitableFor: 'Citizens requiring help with online banking operations'
  },
  {
    id: 'job-applications',
    name: 'Job Applications Support',
    category: 'private',
    categoryLabel: 'Private Service',
    description: 'Filing for private corporate openings, banking examinations, police, defense, and railways.',
    iconName: 'Briefcase',
    requiredDocuments: ['Updated Resume', 'Educational Certificates', 'Passport Photo & Signature', 'Experience Letters (if any)'],
    processingTime: 'Same Day with Final Confirmation Printout',
    suitableFor: 'Fresh graduates, job seekers, and career changers'
  },
  {
    id: 'resume-cv-services',
    name: 'Resume / CV Services',
    category: 'private',
    categoryLabel: 'Private Service',
    description: 'Clean, modern resume formatting, professional Bio-Data creation, and PDF export.',
    iconName: 'FileText',
    requiredDocuments: ['Personal Details', 'Education & Qualifications', 'Work History & Skills'],
    processingTime: 'Same Day / 2-4 Hours',
    suitableFor: 'Job applicants, marriage bio-data, and internship candidates'
  },
  {
    id: 'ticket-booking-assistance',
    name: 'Ticket Booking Assistance',
    category: 'private',
    categoryLabel: 'Private Service',
    description: 'Assistance with IRCTC railway reservations, state transport bus tickets, and flight tickets.',
    iconName: 'Ticket',
    requiredDocuments: ['Passenger Names & Ages', 'ID Proof Numbers', 'Travel Date & Destination', 'Mobile Number for SMS Ticket'],
    processingTime: 'Instant Booking with Printout',
    suitableFor: 'Travelers, pilgrims, and families planning travel'
  },
  {
    id: 'other-private-services',
    name: 'Other Private Online Services',
    category: 'private',
    categoryLabel: 'Private Service',
    description: 'Assistance with electricity bill payments, water bills, FASTag recharge, and mobile recharges.',
    iconName: 'Zap',
    requiredDocuments: ['Consumer Number / Bill Copy / Vehicle Number'],
    processingTime: 'Instant with Payment Receipt',
    suitableFor: 'Local residents seeking convenient one-stop utility bill clearing'
  }
];

export const CONTACT_INFO = {
  name: 'Digital Mitra',
  tagline: 'Government & Private Digital Services',
  shortIntro: 'Your local digital service partner for government applications, documentation, online services and private digital services.',
  phone: '+91 9309937220',
  phoneDisplay: '+91 93099 37220',
  whatsapp: '919309937220',
  whatsappDisplay: '+91 93099 37220',
  location: '257,Bhiwandi-Wada Road, Palkhane, Dugad, Bhiwandi, Maharashtra 421302',
  mapsUrl: 'https://maps.google.com/?q=Digital+Mitra+Service+Center',
  instagram: 'digitalmitra24',
  instagramUrl: 'https://www.instagram.com/digitalmitra24/',
  timings: 'Monday – Saturday: 9:00 AM – 8:00 PM | Sunday: 10:00 AM – 2:00 PM',
};
