
import React from 'react';
import {
  Activity,
  Heart,
  Wind,
  Watch,
  Smartphone,
  Stethoscope,
  FileText,
  PhoneCall,
  Info,
  ChevronRight
} from 'lucide-react';
import { NavItem, ServiceItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'mTABLET', path: '/mtablet' },
  { label: 'Holter', path: '/holter' },
  { label: 'App', path: '/app' },
];

export const SERVICE_LINKS: ServiceItem[] = [
  {
    title: 'ECG',
    description: 'Volledig digitaal en draadloos 12-kanaals ECG met cardiologische beoordeling.',
    icon: <Activity className="w-8 h-8" />,
    path: '/ecg'
  },
  {
    title: 'Enkel-arm Index',
    description: 'De slimste draadloze ABI meting met PADsense™-algoritme.',
    icon: <ChevronRight className="w-8 h-8" />,
    path: '/abi'
  },
  {
    title: 'Bloeddrukmeting',
    description: 'Professionele geautomatiseerde metingen geïntegreerd in mTABLET.',
    icon: <Heart className="w-8 h-8" />,
    path: '/bloeddruk'
  },
  {
    title: 'Spirometrie',
    description: 'Draadloze digitale spirometer voor diagnostiek van astma en COPD.',
    icon: <Wind className="w-8 h-8" />,
    path: '/spirometrie'
  },
  {
    title: 'Holter Monitoring',
    description: '24-uurs hartritme monitoring aan huis zonder investering.',
    icon: <Watch className="w-8 h-8" />,
    path: '/holter'
  },
  {
    title: 'mTABLET Concept',
    description: 'Modulair totaalplatform voor alle medische metingen.',
    icon: <Smartphone className="w-8 h-8" />,
    path: '/mtablet'
  },
];

export const CONTACT_INFO = {
  phone: '+31 (0)85 060 5525',
  email: 'info@ahmd.nl',
  hours: 'Ma–vr 09:00–17:00',
  address: 'Nederland', // Could be more specific if provided
};
