
import React from 'react';
import Section from '../components/Section';
import FlatButton from '../components/FlatButton';
import { Phone, Mail, Clock, MapPin, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-up">
      {/* Hero Section */}
      <Section bg="blue" className="pt-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none">
            Contact <br /> <span className="text-blue-100 opacity-80">Opnemen</span>
          </h1>
          <p className="text-2xl text-blue-50 leading-relaxed max-w-2xl mx-auto font-medium">
            Heeft u vragen over onze diensten of wilt u een demonstratie op locatie? Wij staan klaar om u te helpen.
          </p>
        </div>
      </Section>

      {/* Main Contact Section */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-gray-50 rounded-lg space-y-4 border-b-8 border-blue-500 transition-transform hover:scale-105">
                <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <h3 className="font-black uppercase tracking-widest text-xs text-gray-400">Telefoon</h3>
                <p className="text-xl font-black text-gray-900">{CONTACT_INFO.phone}</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-lg space-y-4 border-b-8 border-emerald-500 transition-transform hover:scale-105">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <h3 className="font-black uppercase tracking-widest text-xs text-gray-400">E-mail</h3>
                <p className="text-xl font-black text-gray-900">{CONTACT_INFO.email}</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-lg space-y-4 border-b-8 border-amber-500 transition-transform hover:scale-105">
                <div className="w-12 h-12 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <h3 className="font-black uppercase tracking-widest text-xs text-gray-400">Bereikbaarheid</h3>
                <p className="text-xl font-black text-gray-900">{CONTACT_INFO.hours}</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-lg space-y-4 border-b-8 border-gray-900 transition-transform hover:scale-105">
                <div className="w-12 h-12 bg-gray-200 text-gray-900 rounded-full flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <h3 className="font-black uppercase tracking-widest text-xs text-gray-400">Regio</h3>
                <p className="text-xl font-black text-gray-900">Heel Nederland</p>
              </div>
            </div>

            {/* Small Map Thumbnail / Quick Info Card */}
            <div className="bg-blue-500 text-white p-10 rounded-2xl flex flex-col md:flex-row items-center gap-8">
              <div className="flex-grow space-y-4">
                <h3 className="text-3xl font-black tracking-tighter">Hoofdkantoor</h3>
                <p className="text-lg font-medium opacity-90 leading-snug">
                  Amsterdam, Nederland<br />
                  Specialisten in cardiologische diagnostiek voor de eerstelijnszorg.
                </p>
              </div>
              <FlatButton 
                variant="accent" 
                className="h-16 px-8 whitespace-nowrap bg-white text-blue-500 hover:bg-gray-100"
                onClick={() => window.open('https://www.google.com/maps?q=Amsterdam', '_blank')}
              >
                Plan Route <ExternalLink className="ml-2" size={20} />
              </FlatButton>
            </div>
          </div>

          <div className="bg-gray-100 p-8 md:p-12 rounded-2xl">
            <h2 className="text-4xl font-black mb-8 tracking-tight text-gray-900">Stuur een bericht</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Naam</label>
                  <input type="text" className="w-full h-16 px-6 bg-white rounded-md border-2 border-transparent focus:border-blue-500 outline-none transition-all font-medium" placeholder="Uw naam" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-1">E-mail</label>
                  <input type="email" className="w-full h-16 px-6 bg-white rounded-md border-2 border-transparent focus:border-blue-500 outline-none transition-all font-medium" placeholder="Uw e-mailadres" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Onderwerp</label>
                <input type="text" className="w-full h-16 px-6 bg-white rounded-md border-2 border-transparent focus:border-blue-500 outline-none transition-all font-medium" placeholder="Waar gaat het over?" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Bericht</label>
                <textarea className="w-full p-6 bg-white rounded-md border-2 border-transparent focus:border-blue-500 outline-none transition-all h-40 resize-none font-medium" placeholder="Uw bericht voor ons"></textarea>
              </div>
              <FlatButton className="w-full h-16 uppercase tracking-widest font-black">Bericht versturen</FlatButton>
            </form>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section bg="muted" className="p-0 overflow-hidden">
        <div className="relative w-full h-[500px] border-y-8 border-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d155913.3156683526!2d4.79257639460287!3d52.35478496464871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1snl!2snl!4v1715800000000!5m2!1snl!2snl" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) brightness(0.9)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="AHMD Locatie Amsterdam"
          ></iframe>
          
          {/* Overlay Tag */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="bg-blue-500 text-white px-6 py-4 rounded-lg flex items-center gap-3 animate-bounce border-4 border-white">
              <MapPin size={24} fill="currentColor" className="text-white" />
              <span className="font-black uppercase tracking-tighter">AH Medische Dienstverlening</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section bg="white" className="text-center py-32">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-[0.9] text-gray-900">Samenwerken aan <br /><span className="text-blue-500">betere diagnostiek?</span></h2>
          <p className="text-xl text-gray-600 font-medium max-w-xl mx-auto">
            Wij helpen u graag bij de implementatie van moderne cardiologische zorg in uw praktijk.
          </p>
          <div className="pt-8">
            <FlatButton to="/mtablet" variant="outline" className="h-20 px-16 text-xl">
              Bekijk het systeem
            </FlatButton>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
