import React, { useRef, useState } from 'react';
import { RotateCw, Maximize2, Sparkles } from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
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
        },
        HTMLElement
      >;
    }
  }
}

interface Spiro3DViewerProps {
  className?: string;
}

const Spiro3DViewer: React.FC<Spiro3DViewerProps> = ({ className = '' }) => {
  const viewerRef = useRef<any>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [interacted, setInteracted] = useState(false);

  const toggleAutoRotate = () => {
    if (viewerRef.current) {
      viewerRef.current.autoRotate = !isRotating;
      setIsRotating(!isRotating);
    }
  };

  const handleResetCamera = () => {
    if (viewerRef.current) {
      viewerRef.current.cameraOrbit = '0deg 75deg 105%';
      viewerRef.current.cameraTarget = 'auto auto auto';
      viewerRef.current.fieldOfView = 'auto';
      if (!isRotating) {
        viewerRef.current.autoRotate = true;
        setIsRotating(true);
      }
    }
  };

  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none overflow-hidden rounded-2xl bg-transparent ${className}`}>
      {/* 3D Model Web Component */}
      <model-viewer
        ref={viewerRef}
        src="/models/spiro-module.glb"
        alt="MESI Spirometrie Module 3D Model"
        camera-controls=""
        auto-rotate={isRotating ? '' : undefined}
        auto-rotate-delay="500"
        rotation-per-second="18deg"
        camera-orbit="-25deg 75deg 145%"
        camera-target="auto auto auto"
        min-camera-orbit="auto auto 60%"
        max-camera-orbit="auto auto 260%"
        shadow-intensity="1.2"
        shadow-softness="0.8"
        environment-image="neutral"
        exposure="1.05"
        touch-action="pan-y"
        loading="eager"
        style={{
          width: '100%',
          height: '100%',
          outline: 'none',
          backgroundColor: 'transparent',
          '--poster-color': 'transparent',
        } as React.CSSProperties}
        onPointerDown={() => setInteracted(true)}
      />


      {/* Action Controls */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
        <button
          type="button"
          onClick={toggleAutoRotate}
          title={isRotating ? 'Pauzeer rotatie' : 'Start rotatie'}
          className={`p-2 rounded-xl transition-all shadow-sm border ${
            isRotating
              ? 'bg-cyan-600 text-white border-cyan-500 shadow-cyan-500/20'
              : 'bg-slate-900/80 text-cyan-200 border-cyan-500/30 hover:bg-slate-800'
          }`}
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
        </button>
      </div>

      {/* Bottom Subtle Interaction Hint */}
      {!interacted && (
        <div className="absolute bottom-3 inset-x-0 mx-auto w-max z-10 pointer-events-none px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/30 backdrop-blur-sm text-cyan-200 text-[11px] font-medium shadow-md transition-opacity duration-500">
          Sleep om te draaien • Scroll om te zoomen
        </div>
      )}
    </div>
  );
};

export default Spiro3DViewer;
