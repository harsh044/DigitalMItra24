/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export type Language = 'en' | 'mr';

export type SiteTranslations = {
  home: string;
  services: string;
  about: string;
  contact: string;
  whatsappUs: string;
  callNow: string;
  viewServices: string;
  contactMitra: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroDescription: string;
  trustGovt: string;
  trustFast: string;
  trustLocal: string;
  aboutLabel: string;
  aboutHeading: string;
  aboutDescription: string;
  personalAssistance: string;
  personalText: string;
  accurate: string;
  accurateText: string;
  trusted: string;
  trustedText: string;
  getInTouch: string;
  needService: string;
  contactDigitalMitra: string;
  contactSubtitle: string;
  callUsDirectly: string;
  copyPhone: string;
  copied: string;
  whatsappChat: string;
  whatsappHint: string;
  locationAddress: string;
  viewMaps: string;
  followInstagram: string;
  instagramHint: string;
  centerHours: string;
  walkinsWelcome: string;
  directoryLabel: string;
  directoryHeading: string;
  directoryDescription: string;
  searchPlaceholder: string;
  showing: string;
  servicesCountLabel: string;
  noServicesFound: string;
  noServicesHint: string;
  resetFilters: string;
  allServices: string;
  homeLabel: string;
  digitalServicesCenter: string;
  governmentPrivate: string;
  officialAssistance: string;
};

const translations: Record<Language, SiteTranslations> = {
  en: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    whatsappUs: 'WhatsApp Us',
    callNow: 'Call Now',
    viewServices: 'View Our Services',
    contactMitra: 'Contact Digital Mitra',
    heroTitleLine1: 'All Your Digital Services,',
    heroTitleLine2: 'Under One Roof',
    heroDescription: 'Digital Mitra provides assistance with various government and private online services, documentation and digital applications.',
    trustGovt: 'Govt & Private Portals',
    trustFast: 'Fast & Accurate Filing',
    trustLocal: 'Local Walk-In Help',
    aboutLabel: 'About Us',
    aboutHeading: 'Digital Mitra',
    aboutDescription: 'Digital Mitra is a local digital service center providing assistance with government, documentation, online and private digital services.',
    personalAssistance: 'Personal Assistance',
    personalText: 'Step-by-step guidance so you never have to worry about complicated portal procedures or form errors.',
    accurate: 'Accurate & Verified',
    accurateText: 'All documents are scanned, formatted, and submitted with exact requirements to avoid application rejection.',
    trusted: 'Your Trusted Partner',
    trustedText: 'Serving our local community with friendly walk-in service and prompt WhatsApp updates for peace of mind.',
    getInTouch: 'Get In Touch',
    needService: 'Need a Service?',
    contactDigitalMitra: 'Contact Digital Mitra',
    contactSubtitle: 'Visit our center or message us directly on WhatsApp for quick help with your applications.',
    callUsDirectly: 'Call Us Directly',
    copyPhone: 'Copy phone number',
    copied: 'Copied to clipboard!',
    whatsappChat: 'WhatsApp Chat',
    whatsappHint: 'Send documents, ask for requirements, or check status.',
    locationAddress: 'Location / Address',
    viewMaps: 'View on Google Maps →',
    followInstagram: 'Follow on Instagram',
    instagramHint: 'Updates on new government schemes, deadlines & notices.',
    centerHours: 'Center Working Hours',
    walkinsWelcome: 'Walk-ins Welcome',
    directoryLabel: 'Digital Services Directory',
    directoryHeading: 'Our Services',
    directoryDescription: 'Browse our complete catalog of government schemes, certificate applications, agricultural portals, and online private services.',
    searchPlaceholder: 'Search services (e.g., PAN Card, E-Shram, Farmer ID, 7/12)...',
    showing: 'Showing',
    servicesCountLabel: 'services',
    noServicesFound: 'No matching services found',
    noServicesHint: 'We couldn’t find any service matching "{query}". Try another keyword or browse all categories.',
    resetFilters: 'Reset Filters & Show All',
    allServices: 'All Services',
    homeLabel: 'Home',
    digitalServicesCenter: 'Digital Services Center',
    governmentPrivate: 'Government & Private Digital Services',
    officialAssistance: 'Official Digital Service Assistance Center',
  },
  mr: {
    home: 'मुख्यपृष्ठ',
    services: 'सेवा',
    about: 'आमच्याविषयी',
    contact: 'संपर्क',
    whatsappUs: 'व्हॉट्सअॅप करा',
    callNow: 'आता कॉल करा',
    viewServices: 'आमच्या सेवा पाहा',
    contactMitra: 'डिजिटल मित्रा यांच्याशी संपर्क करा',
    heroTitleLine1: 'तुमच्या सर्व डिजिटल सेवांचा,',
    heroTitleLine2: 'एका छताखाली',
    heroDescription: 'डिजिटल मित्रा सरकारी, दस्तऐवजीकरण, ऑनलाइन आणि खाजगी डिजिटल सेवांमध्ये सहकार्य करते.',
    trustGovt: 'सरकारी & खाजगी पोर्टल',
    trustFast: 'जलद आणि अचूक फाइलिंग',
    trustLocal: 'स्थानिक WALK-IN मदत',
    aboutLabel: 'आमच्याबद्दल',
    aboutHeading: 'डिजिटल मित्रा',
    aboutDescription: 'डिजिटल मित्रा हा स्थानिक डिजिटल सेवा केंद्र आहे, जे सरकारी, दस्तऐवजीकरण, ऑनलाइन आणि खाजगी डिजिटल सेवांमध्ये मदत करते.',
    personalAssistance: 'व्यक्तिगत मदत',
    personalText: 'प्रत्येक पायरीत मार्गदर्शन, ज so आपल्याला जटिल पोर्टल प्रक्रिया किंवा फॉर्म त्रुटीची चिंता नसते.',
    accurate: 'अचूक आणि पडताळलेले',
    accurateText: 'सर्व दस्तऐवज तपासले जातात, स्वरूप दिले जाते आणि अर्ज नाकारला जाणार नाही याची खात्री करून सादर केले जातात.',
    trusted: 'तुमचा विश्वासू साथीदार',
    trustedText: 'आमची स्थानिक समुदायाला मैत्रीपूर्ण WALK-IN सेवा आणि त्वरित व्हॉट्सअॅप अपडेट्स देऊन सेवा देत आहोत.',
    getInTouch: 'संपर्क साधा',
    needService: 'सेवा हवी आहे?',
    contactDigitalMitra: 'डिजिटल मित्रा शी संपर्क करा',
    contactSubtitle: 'आमच्या केंद्राला भेट द्या किंवा WhatsApp वर थेट संदेश पाठवा.',
    callUsDirectly: 'थेट कॉल करा',
    copyPhone: 'फोन क्रमांक कॉपी करा',
    copied: 'कॉपी केले!',
    whatsappChat: 'व्हॉट्सअॅप चॅट',
    whatsappHint: 'दस्तऐवज पाठवा, गरज विचारण्यासाठी किंवा स्थिती तपासा.',
    locationAddress: 'ठिकाण / पत्ता',
    viewMaps: 'Google Maps वर पहा →',
    followInstagram: 'Instagram फॉलो करा',
    instagramHint: 'नवीन सरकारी योजना, मुदत आणि सूचना यांची अपडेट्स.',
    centerHours: 'केंद्राचे कामाचे वेळा',
    walkinsWelcome: 'वॉक-इन स्वागत आहे',
    directoryLabel: 'डिजिटल सेवा निर्देशिका',
    directoryHeading: 'आमच्या सेवा',
    directoryDescription: 'सरकारी योजना, प्रमाणपत्र अर्ज, कृषी पोर्टल आणि ऑनलाइन खाजगी सेवांची संपूर्ण सूची पाहा.',
    searchPlaceholder: 'सेवा शोधा (उदा. PAN Card, E-Shram, Farmer ID, 7/12)...',
    showing: 'दिखावले',
    servicesCountLabel: 'सेवा',
    noServicesFound: 'कोणतीही सेवा सापडली नाही',
    noServicesHint: '"{query}" या शब्दाशी जुळणारी कोणतीही सेवा सापडली नाही. दुसरा keyword वापरा किंवा सर्व श्रेणी पाहा.',
    resetFilters: 'फिल्टर साफ करून सर्व पहा',
    allServices: 'सर्व सेवा',
    homeLabel: 'मुख्यपृष्ठ',
    digitalServicesCenter: 'डिजिटल सेवा केंद्र',
    governmentPrivate: 'सरकारी व खाजगी डिजिटल सेवा',
    officialAssistance: 'अधिकृत डिजिटल सेवा सहाय्य केंद्र',
  },
};

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const text = useMemo(() => translations[language], [language]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar language={language} setLanguage={setLanguage} text={text} />

      <main className="flex-1">
        <Hero language={language} text={text} />
        <ServicesSection language={language} text={text} />
        <AboutSection language={language} text={text} />
        <ContactSection language={language} text={text} />
      </main>

      <Footer language={language} text={text} />
      <FloatingWhatsApp />
    </div>
  );
}
