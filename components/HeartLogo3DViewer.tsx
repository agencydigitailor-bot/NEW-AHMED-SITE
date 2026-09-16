import React, { useRef, useState } from 'react';
import { RotateCw, Maximize2, Sparkles } from 'lucide-react';

interface HeartLogo3DViewerProps {
  className?: string;
}

const HeartLogo3DViewer: React.FC<HeartLogo3DViewerProps> = ({ className = '' }) => {
  const viewerRef = useRef<any>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [interacted, setInteracted] = useState(false);

  const toggleAutoRotate = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (viewerRef.current) {
      viewerRef.current.autoRotate = !isRotating;
      setIsRotating(!isRotating);
    }
  };

  const handleResetCamera = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (viewerRef.current) {
      viewerRef.current.cameraOrbit = '0deg 90deg 110%';
      viewerRef.current.cameraTarget = 'auto auto auto';
      viewerRef.current.fieldOfView = 'auto';
      if (!isRotating) {
        viewerRef.current.autoRotate = true;
        setIsRotating(true);
      }
    }
  };

  return (
    <div
      className={`relative w-full h-[460px] flex items-center justify-center select-none overflow-hidden rounded-3xl bg-gradient-to-b from-slate-50 to-slate-100/80 border border-slate-200 shadow-xl ${className}`}
      onClick={(e) => e.stopPropagation()}
      onPointerDown={(e) => {
        e.stopPropagation();
        setInteracted(true);
      }}
    >
      {/* 3D Model Web Component */}
      <model-viewer
        ref={viewerRef}
        src="/models/heart-logo.glb"
        alt="AH Medische Dienstverlening Heart Logo 3D Model"
        camera-controls=""
        auto-rotate={isRotating ? '' : undefined}
        auto-rotate-delay="300"
        rotation-per-second="20deg"
        camera-orbit="0deg 90deg 110%"
        camera-target="auto auto auto"
        shadow-intensity="1.5"
        shadow-softness="0.7"
        environment-image="neutral"
        exposure="1.1"
        touch-action="pan-y"
        loading="eager"
        style={{
          width: '100%',
          height: '100%',
          outline: 'none',
          backgroundColor: 'transparent',
        } as React.CSSProperties}
      />

      {/* Top Floating Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-sm text-xs font-bold text-slate-700 pointer-events-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
        </span>
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Interactief 3D Logo
        </span>
      </div>

      {/* Action Controls */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <button
          type="button"
          onClick={toggleAutoRotate}
          title={isRotating ? 'Pauzeer rotatie' : 'Start rotatie'}
          className={`p-2 rounded-xl transition-all shadow-sm border ${
            isRotating
              ? 'bg-blue-600 text-white border-blue-600 shadow-blue-500/20'
              : 'bg-white/90 text-slate-700 border-slate-200 hover:bg-white'
          }`}
        >
          <RotateCw className={`w-4 h-4 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
        </button>
        <button
          type="button"
          onClick={handleResetCamera}
          title="Reset weergave"
          className="p-2 rounded-xl bg-white/90 text-slate-700 border border-slate-200 hover:bg-white transition-all shadow-sm cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Helper interaction hint */}
      {!interacted && (
        <div className="absolute bottom-4 inset-x-0 mx-auto w-max z-10 px-4 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-md text-xs font-medium text-white/90 pointer-events-none transition-opacity duration-500 shadow-lg">
          Sleep om te draaien • Scroll om in te zoomen
        </div>
      )}
    </div>
  );
};

export default HeartLogo3DViewer;
