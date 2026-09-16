
import React from 'react';
import Section from '../components/Section';
import FlatButton from '../components/FlatButton';
import { Heart, Clock, Zap, FileText, CheckCircle2, Share2, GraduationCap, ShieldCheck, MonitorSmartphone, PlayCircle, Activity, Wind, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const YouTubeEmbed = ({ videoId, title }: { videoId: string, title: string }) => (
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border-8 border-gray-100 shadow-xl">
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

const Bloeddruk: React.FC = () => {
  return (
    <div className="animate-fade-up">
      {/* Bloeddruk Hero Section */}
      <Section bg="white" className="pt-20 sm:pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-rose-50 text-rose-600 font-semibold text-sm tracking-wide">
              <Heart size={18} />
              MESI mTABLET BP
            </div>
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.85] text-gray-900">
              Bloeddruk<span className="text-rose-500">meting</span>
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-lg sm:text-xl font-semibold text-gray-500">
              <span>snel</span>
              <span className="text-rose-300">|</span>
              <span>betrouwbaar</span>
              <span className="text-rose-300">|</span>
              <span>efficiënt</span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl font-medium">
              Standaard- én 30-minuten bloeddrukmetingen met draadloze armmanchetten in verschillende maten. Geschikt voor de eerstelijns- en specialistische zorg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <FlatButton to="/contact" variant="primary" className="bg-rose-500 hover:bg-rose-600 border-none h-16 px-10">Offerte aanvragen</FlatButton>
              <FlatButton to="/#configurator" variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white h-16 px-10">Naar Configurator</FlatButton>
            </div>
          </div>
          <div className="relative">
            <img
              src="/bp-hero-device.png"
              alt="MESI mTABLET BP met draadloze armmanchetten"
              className="relative z-10 w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* Werkwijze */}
      <Section bg="muted" className="py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Werkwijze MESI <span className="text-rose-500">bloeddrukapparaat</span>
            </h2>
            <div className="h-1.5 w-24 bg-rose-500 rounded-full"></div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Het MESI mTABLET bloeddrukapparaat is een geautomatiseerd en digitaal bloeddrukmeetapparaat dat geschikt is voor zowel de eerstelijns- als specialistische zorg. Dankzij de draadloze armmanchetten in verschillende maten is het systeem inzetbaar voor iedere patiënt en in elke zorgomgeving.
            </p>

            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-2">
                <Clock className="text-rose-500 w-6 h-6 flex-shrink-0" /> Standaard en 30-minutenmetingen
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Met het apparaat kunnen zowel standaard- als 30-minuten bloeddrukmetingen eenvoudig worden uitgevoerd. Dit draagt bij aan een efficiëntere werkwijze en vermindering van de werkdruk binnen de praktijk.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group w-full">
              <div className="absolute -inset-3 bg-gradient-to-tr from-rose-500 to-amber-400 rounded-3xl blur-lg opacity-20 group-hover:opacity-35 transition duration-500"></div>
              <img
                src="/bp-consult.jpg"
                alt="Bloeddrukmeting met de MESI mTABLET in de praktijk"
                className="relative rounded-3xl w-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Gedetailleerd rapport */}
      <Section bg="white" className="py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 font-bold text-xs uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Gedetailleerd rapport</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Direct inzicht in de <span className="text-rose-500">resultaten</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              De gebruiksvriendelijke werkwijze biedt stapsgewijze begeleiding tijdens de meting en ondersteunt bij de interpretatie van de resultaten, wat bijdraagt aan snellere klinische besluitvorming.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Alle meetresultaten worden automatisch digitaal opgeslagen, zijn direct inzichtelijk en eenvoudig terug te bekijken, te vergelijken en veilig te delen.
            </p>
            <div className="h-1.5 w-24 bg-rose-500 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { src: '/bp-rapport-standaard.png', label: 'Voorbeeldrapport', title: 'Standaard bloeddrukmeting' },
              { src: '/bp-rapport-30min.png', label: 'Voorbeeldrapport', title: '30-minuten bloeddrukmeting' },
            ].map((rep, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-full bg-slate-50 rounded-2xl border border-slate-100 shadow-sm p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                  <img
                    src={rep.src}
                    alt={`${rep.label} ${rep.title}`}
                    className="w-full rounded-lg border border-slate-200 bg-white"
                  />
                </div>
                <div className="mt-5 text-center">
                  <span className="block text-xs font-bold uppercase tracking-wider text-rose-500">{rep.label}</span>
                  <span className="block text-lg font-bold text-gray-900 mt-1">{rep.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Onze service */}
      <Section bg="muted" className="py-14">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Onze service gaat verder dan alleen de <span className="text-rose-500">levering van een apparaat</span>
            </h2>
            <div className="h-1 w-20 bg-rose-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                text: 'Toegang tot een innovatief en efficiënt werkproces.',
              },
              {
                icon: <MonitorSmartphone className="w-5 h-5" />,
                text: 'Onderzoeksresultaten direct digitaal beschikbaar, zonder papier of e-mail.',
              },
              {
                icon: <Share2 className="w-5 h-5" />,
                text: 'Onderzoeksrapporten eenvoudig te delen via het deel-icoon met één klik.',
              },
              {
                icon: <GraduationCap className="w-5 h-5" />,
                text: 'Trainingen, protocollen en duidelijke instructies inbegrepen.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                text: 'Inclusief jaarlijks onderhoud en servicegarantie.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="text-rose-500 flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Uitbreiding met extra functionaliteiten */}
      <Section bg="white" className="py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 font-bold text-xs uppercase tracking-wider">
              <span>Uitbreidbaar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              De mTABLET kan uitgebreid worden met <span className="text-rose-500">extra functionaliteiten</span>
            </h2>
            <div className="h-1.5 w-24 bg-rose-500 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { to: '/abi', icon: <CheckCircle2 className="w-7 h-7" />, name: 'Enkel-arm index meting' },
              { to: '/ecg', icon: <Activity className="w-7 h-7" />, name: 'ECG' },
              { to: '/spirometrie', icon: <Wind className="w-7 h-7" />, name: 'Spirometrie' },
            ].map((mod, idx) => (
              <Link
                key={idx}
                to={mod.to}
                className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-rose-200 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-rose-500 shadow-sm mb-5">
                  {mod.icon}
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">{mod.name}</h3>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-rose-500">
                  Meer informatie
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Video Bloeddrukmeting */}
      <Section bg="muted" className="py-20">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="mb-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 font-bold text-xs uppercase tracking-wider">
              <PlayCircle className="w-4 h-4" />
              <span>Video</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">Video Bloeddrukmeting</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Bekijk hoe een bloeddrukmeting met de MESI mTABLET in de praktijk verloopt.</p>
          </div>
          <YouTubeEmbed videoId="1NjSgICp6O4" title="MESI mTABLET BP Demonstratie" />
        </div>
      </Section>

    </div>
  );
};

export default Bloeddruk;
