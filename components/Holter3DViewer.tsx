import React, { useRef, useState } from 'react';
import { RotateCw, Sparkles } from 'lucide-react';

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
    <div className={`relative w-full select-none overflow-hidden rounded-3xl bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-xl ${className}`}>
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
          className={`p-2 rounded-xl transition-all shadow-sm border ${
            isRotating
              ? 'bg-blue-600 text-white border-blue-600 shadow-blue-500/20'
              : 'bg-white/95 text-slate-700 border-slate-200 hover:bg-white'
          }`}
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
        </button>
      </div>

      {/* Bottom Interaction Hint */}
      {!interacted && (
        <div className="absolute bottom-3.5 inset-x-0 mx-auto w-max z-10 pointer-events-none px-3.5 py-1 rounded-full bg-slate-900/75 backdrop-blur-sm text-white text-xs font-medium shadow-md transition-opacity duration-500">
          Sleep om te draaien • Scroll om te zoomen
        </div>
      )}
    </div>
  );
};

export default Holter3DViewer;
