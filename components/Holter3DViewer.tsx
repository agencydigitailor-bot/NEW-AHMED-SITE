import React, { useRef, useState } from 'react';
import { RotateCw } from 'lucide-react';

interface Holter3DViewerProps {
  className?: string;
}

const Holter3DViewer: React.FC<Holter3DViewerProps> = ({ className = '' }) => {
  const viewerRef = useRef<any>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [interacted, setInteracted] = useState(false);

  const toggleAutoRotate = () => {
    if (viewerRef.current) {
      viewerRef.current.autoRotate = !isRotating;
      setIsRotating(!isRotating);
    }
  };

  return (
    <div className={`relative w-full select-none overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_50%_35%,#8ed6fd_0%,#4ca7eb_45%,#207ec4_80%,#1162a1_100%)] border border-sky-200/60 shadow-[inset_0_2px_15px_rgba(255,255,255,0.4),0_12px_32px_rgba(18,104,168,0.22)] ${className}`}>
      {/* Soft ambient studio highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.45)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-4 h-16 bg-gradient-to-t from-white/20 via-sky-200/10 to-transparent blur-sm pointer-events-none" />

      {/* 3D Model Web Component */}
      <model-viewer
        ref={viewerRef}
        src="/models/holter.glb"
        alt="Compacte Holter-recorder 3D Model"
        camera-controls=""
        auto-rotate={isRotating ? '' : undefined}
        auto-rotate-delay="500"
        rotation-per-second="20deg"
        camera-orbit="0deg 60deg 110%"
        camera-target="auto auto auto"
        shadow-intensity="1.2"
        shadow-softness="0.8"
        environment-image="neutral"
        exposure="1.05"
        touch-action="pan-y"
        loading="eager"
        style={{ width: '100%', height: '100%', minHeight: '320px', outline: 'none' }}
        onPointerDown={() => setInteracted(true)}
      />


      {/* Action Controls */}
      <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5">
        <button
          type="button"
          onClick={toggleAutoRotate}
          title={isRotating ? 'Pauzeer rotatie' : 'Start rotatie'}
          className="w-8 h-8 rounded-full bg-white/85 hover:bg-white text-sky-900 hover:text-blue-600 border border-white/80 shadow-md flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
        >
          <RotateCw className={`w-3.5 h-3.5 transition-transform ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
        </button>
      </div>

      {/* Bottom Interaction Hint */}
      {!interacted && (
        <div className="absolute bottom-3.5 inset-x-0 mx-auto w-max z-10 pointer-events-none px-3.5 py-1 rounded-full bg-white/90 border border-white/90 shadow-sm backdrop-blur-md text-sky-950 text-xs font-semibold transition-opacity duration-500">
          Sleep om te draaien • Scroll om te zoomen
        </div>
      )}
    </div>
  );
};

export default Holter3DViewer;
