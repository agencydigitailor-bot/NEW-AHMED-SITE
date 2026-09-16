
// Import React to provide the React namespace for types like ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}
