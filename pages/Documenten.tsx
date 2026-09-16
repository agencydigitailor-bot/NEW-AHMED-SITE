import React from 'react';
import Section from '../components/Section';
import FlatButton from '../components/FlatButton';
import { FileText, Download, ShieldCheck, ExternalLink } from 'lucide-react';

const Documenten: React.FC = () => {
  const documents = [
    { 
      name: 'EC Declaration of Conformity', 
      cat: 'Certificaat', 
      desc: 'Officiële verklaring van overeenstemming voor het MESI mTABLET ECG-systeem.', 
      link: '/pdf%20document%20page/mTablet-EC-Declaration-of-Conformity.pdf' 
    },
    { 
      name: 'MESI mTABLET Productblad', 
      cat: 'Brochure', 
      desc: 'Technische specificaties, werkprocessen en overzicht van alle beschikbare modules.', 
      link: '/pdf%20document%20page/MESI-mTABLET_flyer-1.pdf' 
    },
    { 
      name: 'ECG Module Specificaties', 
      cat: 'Technisch', 
      desc: 'Gedetailleerde hardware specificaties en conformiteit van de 12-kanaals ECG module.', 
      link: '/pdf%20document%20page/mTablet-EC-Declaration-of-Conformity%20(1).pdf' 
    },
    { 
      name: 'Privacy Verklaring AHMD', 
      cat: 'Juridisch & AVG', 
      desc: 'Officiële privacyverklaring van AH Medische Dienstverlening (NL) conform de AVG wetgeving.', 
      link: '/pdf%20document%20page/Privacy-verklaring-AH-Medische-Dienstverlening.pdf' 
    },
    { 
      name: 'Personal Data Protection Policy', 
      cat: 'Privacy', 
      desc: 'Het wereldwijde beleid van MESI Ltd. voor de verwerking en bescherming van persoonsgegevens.', 
      link: '/pdf%20document%20page/Personal-Data-Protection-Policy.pdf' 
    },
    { 
      name: 'Terms of Use (MESI)', 
      cat: 'Voorwaarden', 
      desc: 'Algemene gebruiksvoorwaarden voor de MESI-websites en gerelateerde applicaties.', 
      link: '/pdf%20document%20page/Terms-Conditions-MESI.pdf' 
    },
    { 
      name: 'MESI mRECORDS Register Terms', 
      cat: 'mRECORDS Voorwaarden', 
      desc: 'Officiële registratie- en medische gebruiksvoorwaarden van het online MESI mRECORDS platform.', 
      link: 'http://mrecords.mesimedical.com/register/terms/web',
      isExternal: true 
    },
  ];

  return (
    <div className="animate-fade-up">
      {/* Hero Section */}
      <Section bg="blue" className="pt-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-white font-black text-sm uppercase tracking-widest mb-4">
            <FileText size={18} />
            DOWNLOADS & RICHTLIJNEN
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter uppercase leading-none">
            Documenten <br /> <span className="text-blue-100 opacity-80">& Downloads</span>
          </h1>
          <p className="text-2xl text-blue-50 leading-relaxed max-w-2xl mx-auto font-medium">
            Alle benodigde certificaten, handleidingen en juridische documentatie van AH Medische Dienstverlening en MESI op één plek.
          </p>
        </div>
      </Section>

      {/* Documents Grid */}
      <Section bg="white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc, i) => (
              <div key={i} className="group p-8 bg-gray-50 rounded-2xl transition-all duration-200 hover:scale-[1.02] flex flex-col justify-between border-2 border-transparent hover:border-blue-500 h-full shadow-sm hover:shadow-xl">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">{doc.cat}</span>
                    {doc.isExternal ? (
                      <ExternalLink size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                    ) : (
                      <FileText size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                    )}
                  </div>
                  <h3 className="text-2xl font-black mb-4 leading-none text-gray-900 uppercase tracking-tighter">{doc.name}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed font-medium text-sm sm:text-base">{doc.desc}</p>
                </div>
                <a
                  className="inline-flex items-center justify-center h-14 px-6 text-sm w-full font-black uppercase tracking-widest rounded-xl border-2 border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-sm"
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {doc.isExternal ? (
                    <>
                      <ExternalLink size={18} className="mr-3" /> Bekijk Voorwaarden
                    </>
                  ) : (
                    <>
                      <Download size={18} className="mr-3" /> Download PDF
                    </>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Compliance Section */}
      <Section bg="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-gray-900 leading-tight">Gecertificeerde <br /> <span className="text-emerald-500">Kwaliteit</span></h2>
            <p className="text-xl text-gray-600 font-medium">
              Al onze hardware en software voldoet aan de strengste Europese medische richtlijnen (MDR) en privacywetgeving (GDPR/AVG).
            </p>
            <div className="flex flex-wrap gap-8 opacity-40 grayscale contrast-125">
              <div className="flex flex-col items-center">
                <div className="font-black text-2xl">CE 1304</div>
                <div className="text-[10px] font-bold uppercase tracking-widest">Certified</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-black text-2xl">ISO 13485</div>
                <div className="text-[10px] font-bold uppercase tracking-widest">Medical Devices</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-black text-2xl">GDPR</div>
                <div className="text-[10px] font-bold uppercase tracking-widest">Compliant</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-12 rounded-2xl border-4 border-gray-200 text-center space-y-6">
            <ShieldCheck size={64} className="mx-auto text-blue-500" />
            <h3 className="text-2xl font-black uppercase text-gray-900">Nodig voor uw audit?</h3>
            <p className="text-gray-500">Heeft u specifieke certificaten of documentatie nodig voor een kwaliteitsaudit of EPD-certificering?</p>
            <FlatButton to="/contact" variant="primary" className="w-full">
              Neem contact op met support
            </FlatButton>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="white" className="text-center py-32">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-[0.9] text-gray-900">Vragen over <br /><span className="text-blue-500">onze richtlijnen?</span></h2>
          <p className="text-xl text-gray-600 font-medium max-w-xl mx-auto">
            Ons team staat klaar om u te helpen met technische vragen of juridische informatie over onze systemen.
          </p>
          <div className="pt-8">
            <FlatButton to="/contact" variant="accent" className="h-20 px-16 text-xl">
              Stel uw vraag
            </FlatButton>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Documenten;
