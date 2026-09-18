import React from 'react';
import Section from '../components/Section';
import FlatButton from '../components/FlatButton';
import { 
  HeartPulse, 
  CheckCircle2, 
  FileText, 
  Phone, 
  Mail, 
  ExternalLink, 
  Sparkles,
  Zap,
  Activity,
  Heart,
  Wind
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Holter3DViewer from '../components/Holter3DViewer';

const YouTubeEmbed = ({ videoId, title }: { videoId: string; title: string }) => (
  <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black border-4 border-white/60 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
);

const Holter: React.FC = () => {
  return (
    <div className="animate-fade-up">
      {/* Hero Section with Video Background */}
      <Section className="pt-28 pb-20 relative overflow-hidden bg-slate-950">
        {/* Looping Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-85"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085844_21a8f4b3-dea5-4ede-be16-d53f6973bb14.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-900/20 to-slate-950/60 pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-cyan-200 border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-widest backdrop-blur-md">
              <HeartPulse className="w-4 h-4 text-cyan-300" />
              <span>Innovatieve Diagnostiek</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter uppercase leading-[1.05] text-white">
              Een compacte, draagbare <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-100">
                Holter-recorder!
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-blue-50 leading-relaxed font-light">
              Met onze dienstverlening kan de huisartsenpraktijk zonder enige investering Holteronderzoek toevoegen aan het diagnostische aanbod voor patiënten. Onze innovatieve Holter-recorder maakt het mogelijk om de hartslag van patiënten gedurende 24 uur of langer te monitoren, met een hoge draagcomfort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <FlatButton to="/contact" variant="accent" className="h-16 px-10 shadow-xl shadow-blue-950/40 text-base sm:text-lg font-black tracking-wide">
                Contact & Aanvragen
              </FlatButton>
            </div>
          </div>

          <div className="relative flex justify-center w-full">
            <div className="relative group w-full max-w-lg lg:max-w-xl">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <img
                src="/holter-card-bg.png"
                alt="Compacte draagbare Holter recorder kECG-3"
                className="relative rounded-3xl w-full object-cover shadow-2xl border-4 border-white/20 transition-all duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Voordelen Holteronderzoek via ons */}
      <Section bg="white" className="py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Voordelen voor de praktijk</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-gray-900 tracking-tight">
              Voordelen Holteronderzoek <span className="text-blue-600">via ons</span>
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left bullet points in one container */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-lg">
              <ul className="space-y-3.5">
                {[
                  "Geen investeringen nodig voor de huisartspraktijk.",
                  "De Holter wordt eenvoudig in de huisartspraktijk bij de patiënt aangebracht.",
                  "Geen kabels meer: slechts 3 huidelektroden (plakkers) die direct op de Holter worden geklikt.",
                  "Uitstekende opnamekwaliteit van de Holter-recorder.",
                  "Hoge draagcomfort voor de patiënt.",
                  "Douchen mogelijk tijdens het onderzoek.",
                  "Volledig onderzoeksrapport en cardiologisch verslag voor de huisarts.",
                  "Mogelijkheid tot overleg met een cardioloog.",
                  "Trainingen, protocollen, patiënteninformatiefolder, dagboek en instructies worden volledig verzorgd.",
                  "Praktijk kan de M&I code 13011 voor hartritmestoornissen declareren."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base font-normal leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side Image */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src="/Holter-recorder/holter-practice-benefits.png"
                alt="Holteronderzoek consultatie in de huisartspraktijk"
                className="rounded-3xl w-full h-auto object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Bespaar tijd en moeite voor u en uw patiënten */}
      <Section bg="muted" className="py-24 bg-slate-100/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-gray-900 tracking-tight">
              Bespaar tijd en moeite voor <span className="text-blue-600">u en uw patiënten!</span>
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side Image & 3D Model (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center gap-6 order-2 lg:order-1">
              <div className="relative group w-full max-w-md">
                <div className="absolute -inset-3 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-35 transition duration-500"></div>
                <img
                  src="/Holter-recorder/hourglass.jpg"
                  alt="Efficiëntie en tijdsbesparing bij Holteronderzoek"
                  className="relative rounded-3xl w-full h-[260px] object-cover shadow-2xl border-4 border-white"
                />
              </div>

              {/* 3D Holter Model beneath the hourglass image */}
              <div className="w-full max-w-md">
                <Holter3DViewer className="h-[320px]" />
              </div>
            </div>

            {/* Right side Bullet points (7 cols) */}
            <div className="lg:col-span-7 space-y-3.5 order-1 lg:order-2">
              {[
                "Efficiënt werkproces",
                "Directe hulp voor patiënten, zonder wachttijden",
                "Eenvoudig en snel aanbrengen van de Holter-recorder",
                "Cardiologisch verslag direct geïntegreerd in het EPD",
                "Facturatie verloopt rechtstreeks via de patiënt en verzekeraar"
              ].map((title, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/80 shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-200"
                >
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-snug">
                    {title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Video Demonstration (Single YouTube Container) */}
      <Section bg="white" className="py-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-black uppercase tracking-wider">
              <Activity className="w-4 h-4 text-blue-600" />
              <span>Video Demonstratie</span>
            </div>
          </div>

          <div className="w-full">
            <YouTubeEmbed videoId="PpPLwwSVmxo" title="Holter-recorder demonstratie en werkwijze" />
          </div>
        </div>
      </Section>

      {/* Kosten Holter-onderzoek & Contact */}
      <Section bg="muted" className="py-24 bg-gradient-to-b from-gray-50 to-blue-50/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-wider">
              <FileText className="w-4 h-4 text-blue-700" />
              <span>Tarieven & Vergoedingen</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-gray-900 tracking-tight">
              Kosten Holter-onderzoek
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Main cost description cards */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-md">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Conform landelijke wetgeving is het holter-onderzoek eigenrisico-plichtig. Hoewel dit onderzoek door de huisarts kan worden ingezet, worden de gegevens geanalyseerd door een analist en beoordeeld door een cardioloog. Dit kwalificeert het onderzoek als tweedelijnszorg, waarbij de kosten conform de NZA-tarieven zijn.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-md space-y-6">
              <div className="flex items-center gap-3 text-blue-600 font-black text-lg uppercase tracking-wide">
                <Activity className="w-6 h-6" />
                <span>Samenwerking met Stichting Alert diagnostisch Hartcentrum (Hartdokters)</span>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Onze Holter-dienstverlening wordt verzorgd in samenwerking met Stichting Alert diagnostisch Hartcentrum (Hartdokters). Voor informatie over de tarieven en overige vragen met betrekking tot declaraties kunnen patiënten rechtstreeks contact opnemen met Stichting Alert diagnostisch Hartcentrum/Hartdokters:
              </p>

              {/* Direct contact badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a 
                  href="tel:0850046132" 
                  className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50 text-blue-900 border border-blue-100 hover:bg-blue-100/80 transition-colors font-bold"
                >
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>085-0046132</span>
                </a>
                <a 
                  href="mailto:info@hartdokters.nl" 
                  className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50 text-blue-900 border border-blue-100 hover:bg-blue-100/80 transition-colors font-bold"
                >
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>info@hartdokters.nl</span>
                </a>
              </div>

              {/* Link to Kosten en vergoedingen */}
              <div className="pt-2 border-t border-gray-100">
                <p className="text-base text-gray-700">
                  Daarnaast kunnen patiënten worden verwezen naar de websitepagina:{' '}
                  <a 
                    href="https://hartdokters.nl/kosten-en-vergoedingen/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold underline decoration-blue-400 underline-offset-4"
                  >
                    <span>Kosten en vergoedingen</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Button CTA */}
          <div className="text-center pt-6">
            <FlatButton to="/contact" variant="primary" className="h-16 px-12 text-lg font-black shadow-xl shadow-blue-500/25">
              Contact ons
            </FlatButton>
          </div>
        </div>
      </Section>

      {/* Cross Navigation / Other Modules */}
      <Section bg="white" className="py-20 text-center bg-white">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12 uppercase tracking-wide">
          Ontdek ook onze andere diagnostische onderzoeken
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link to="/ecg" className="bg-slate-50 hover:bg-blue-50/60 p-6 rounded-2xl text-gray-900 transition-all group border border-gray-200/80 hover:border-blue-300 shadow-sm hover:shadow-md">
            <Activity className="w-10 h-10 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="font-bold block text-base">ECG Module</span>
          </Link>
          <Link to="/bloeddruk" className="bg-slate-50 hover:bg-blue-50/60 p-6 rounded-2xl text-gray-900 transition-all group border border-gray-200/80 hover:border-blue-300 shadow-sm hover:shadow-md">
            <Heart className="w-10 h-10 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="font-bold block text-base">Bloeddrukmeting</span>
          </Link>
          <Link to="/spirometrie" className="bg-slate-50 hover:bg-blue-50/60 p-6 rounded-2xl text-gray-900 transition-all group border border-gray-200/80 hover:border-blue-300 shadow-sm hover:shadow-md">
            <Wind className="w-10 h-10 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="font-bold block text-base">Spirometrie</span>
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Holter;
