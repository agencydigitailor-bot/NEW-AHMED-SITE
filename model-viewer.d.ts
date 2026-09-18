import type * as React from 'react';

type ModelViewerAttributes = React.HTMLAttributes<HTMLElement> & {
  src?: string;
  alt?: string;
  poster?: string;
  'camera-controls'?: boolean | string;
  'auto-rotate'?: boolean | string;
  'auto-rotate-delay'?: string | number;
  'rotation-per-second'?: string;
  'shadow-intensity'?: string | number;
  'shadow-softness'?: string | number;
  'exposure'?: string | number;
  'camera-orbit'?: string;
  'touch-action'?: string;
  loading?: 'auto' | 'lazy' | 'eager';
  reveal?: 'auto' | 'interaction' | 'manual';
};

type ModelViewerElement = React.DetailedHTMLProps<ModelViewerAttributes, HTMLElement>;

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerElement;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerElement;
    }
  }
}
