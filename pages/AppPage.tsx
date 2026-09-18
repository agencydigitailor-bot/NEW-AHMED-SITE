import React from 'react';
import Section from '../components/Section';
import FlatButton from '../components/FlatButton';
import FlatCard from '../components/FlatCard';
import { Layers, Archive, Tablet, Clock, Users, Smartphone } from 'lucide-react';

const AppPage: React.FC = () => {
    return (
        <div className="animate-fade-up">
            {/* Hero Section with Video Background */}
            <Section className="relative overflow-hidden min-h-[50vh] flex items-center pt-20 pb-24 bg-slate-950">
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
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-900/20 to-slate-950/60 pointer-events-none"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-cyan-200 border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-widest backdrop-blur-md shadow-lg">
                        <Smartphone className="w-4 h-4 text-cyan-300" />
                        <span>In Ontwikkeling</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white drop-shadow-md">
                        AHMD <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-100">Mobile Zorg App</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
                        Het toekomstige platform voor efficiënte diagnostieksamenwerking.
                        Beheer uw protocollen, apparaten en team eenvoudig en digitaal.
                    </p>
                </div>
            </Section>

            {/* Huidige Functionaliteiten */}
            <Section bg="white" className="py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                        <h2 className="text-3xl sm:text-5xl font-black uppercase text-gray-900 tracking-tight">
                            Huidige <span className="text-blue-600">Functionaliteiten</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FlatCard
                            title="Protocol Management"
                            description="Beheer diagnostische protocollen centraal. Wijs verantwoordelijkheden toe en beheer toegangsrechten (inzien, bewerken, verwijderen)."
                            icon={<Layers className="w-10 h-10 text-blue-500" />}
                            variant="white"
                        />
                        <FlatCard
                            title="Apparaatbeheer"
                            description="Volledig overzicht van uw inventaris. Registreer serienummers, aankoopdata en houd onderhoudsstatussen bij."
                            icon={<Tablet className="w-10 h-10 text-blue-500" />}
                            variant="white"
                        />
                        <FlatCard
                            title="Team Toegang"
                            description="Beheer wie toegang heeft tot welke data en functionaliteiten binnen uw organisatie."
                            icon={<Users className="w-10 h-10 text-blue-500" />}
                            variant="white"
                        />
                    </div>
                </div>
            </Section>

            {/* Binnenkort Beschikbaar */}
            <Section bg="muted" className="py-24 bg-slate-100/70">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                        <h2 className="text-3xl sm:text-5xl font-black uppercase text-gray-900 tracking-tight">
                            Binnenkort <span className="text-purple-600">Beschikbaar</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-purple-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 flex-shrink-0">
                                    <Archive className="w-8 h-8" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-gray-900">Digitaal Archief</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Automatische logging en archivering van alle actiepunten en metingen.
                                        Nooit meer zoeken naar historische data.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-50 rounded-2xl text-purple-600 flex-shrink-0">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-gray-900">Interne Samenwerking</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Vergader- en samenwerkingstools direct in de app.
                                        Deel notities en wijs actiepunten direct toe aan teamleden.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section bg="dark" className="text-center py-20 bg-slate-950">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Klaar voor de toekomst?
                    </h2>
                    <p className="text-slate-400 text-lg">
                        De AHMD App wordt continu doorontwikkeld om uw praktijkvoering te optimaliseren.
                    </p>
                    <div className="pt-2">
                        <FlatButton to="/contact" variant="primary" className="h-14 px-10 text-base font-bold shadow-xl shadow-blue-500/25">
                            Blijf op de hoogte
                        </FlatButton>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default AppPage;
