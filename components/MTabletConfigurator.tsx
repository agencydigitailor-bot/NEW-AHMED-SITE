import React, { useState } from 'react';
import { Layers, CheckCircle, X } from 'lucide-react';
import Section from './Section';
import FlatButton from './FlatButton';

interface MTabletConfiguratorProps {
  id?: string;
  className?: string;
  bg?: 'white' | 'muted';
}

export const CONFIGURATOR_MODULES = [
  {
    id: 'ecg',
    title: '12-kanaals ECG',
  },
  {
    id: 'bp',
    title: '30-min Bloeddruk',
  },
  {
    id: 'eai',
    title: 'Enkel-Arm Index',
  },
  {
    id: 'spiro',
    title: 'Spirometrie',
  }
];

const MTabletConfigurator: React.FC<MTabletConfiguratorProps> = ({ 
  id = 'configurator',
  className = 'py-24 border-t border-gray-100',
  bg = 'white' 
}) => {
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleModule = (moduleId: string) => {
    if (selectedModules.includes(moduleId)) {
      setSelectedModules(selectedModules.filter(m => m !== moduleId));
    } else {
      setSelectedModules([...selectedModules, moduleId]);
    }
  };

  const getSelectedModulesString = () => {
    if (selectedModules.length === 0) return 'MESI mTABLET Basis';
    return `MESI mTABLET met: ${selectedModules.map(id => CONFIGURATOR_MODULES.find(m => m.id === id)?.title).join(', ')}`;
  };

  return (
    <Section id={id} bg={bg} className={className}>
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50/80 to-cyan-50/50 rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-xl">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Stel uw ideale systeem samen
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Selecteer de gewenste modules en ontvang direct een vrijblijvend voorstel.
          </p>
        </div>

        <div className="space-y-6">
          {/* Base Unit */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-500 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Layers size={24} />
              </div>
              <div>
                <span className="font-bold text-lg text-gray-900 block">MESI mTABLET (Basisunit)</span>
                <span className="text-xs text-gray-500">Inclusief docking station en mRECORDS software</span>
              </div>
            </div>
            <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
          </div>

          {/* Module Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONFIGURATOR_MODULES.map(mod => (
              <div
                key={mod.id}
                onClick={() => toggleModule(mod.id)}
                className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                  selectedModules.includes(mod.id) 
                    ? 'border-blue-600 bg-white shadow-md' 
                    : 'border-gray-200 bg-white/70 hover:border-blue-300'
                }`}
              >
                <span className="font-bold text-gray-900 text-base">{mod.title}</span>
                {selectedModules.includes(mod.id) ? (
                  <CheckCircle className="text-blue-600 w-5 h-5 flex-shrink-0" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <FlatButton
              onClick={() => setIsFormOpen(true)}
              variant="primary"
              className="w-full sm:w-auto h-14 px-10 text-base font-black shadow-xl shadow-blue-500/25"
            >
              Informatie aanvragen voor deze configuratie
            </FlatButton>
          </div>
        </div>
      </div>

      {/* Offerte Form Popup */}
      {isFormOpen && (
        <div
          className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsFormOpen(false);
          }}
        >
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white relative">
              <button 
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Sluiten"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">Offerte &amp; Informatie Aanvraag</h3>
              <p className="text-blue-100 text-sm">Vul uw gegevens in en wij sturen u spoedig een passend voorstel.</p>
            </div>
            
            <form className="p-8 space-y-6" onSubmit={(e) => {
               e.preventDefault();
               alert('Bedankt voor uw aanvraag! We nemen zo snel mogelijk contact met u op.');
               setIsFormOpen(false);
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Naam</label>
                  <input required type="text" className="w-full h-14 px-5 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-gray-800" placeholder="Uw volledige naam" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-1">E-mail</label>
                  <input required type="email" className="w-full h-14 px-5 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-gray-800" placeholder="uw@email.nl" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Geselecteerde Configuratie</label>
                <div className="w-full p-4 bg-blue-50 rounded-xl border border-blue-100 text-blue-900 font-bold text-sm">
                  {getSelectedModulesString()}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Bericht of Specifieke Wensen</label>
                <textarea required className="w-full p-5 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:bg-white outline-none transition-all h-28 resize-none font-medium text-gray-800" placeholder="Heeft u nog specifieke vragen of wensen?"></textarea>
              </div>
              
              <div className="pt-2">
                <FlatButton className="w-full h-14 uppercase tracking-wider font-black shadow-lg shadow-blue-500/30">
                  Aanvraag versturen
                </FlatButton>
              </div>
              
              <p className="text-center text-[11px] text-gray-400 uppercase tracking-widest">
                Uw gegevens worden veilig verwerkt conform onze privacyverklaring.
              </p>
            </form>
          </div>
        </div>
      )}
    </Section>
  );
};

export default MTabletConfigurator;
