import React, { useRef, useState } from 'react';
import { RotateCw, Maximize2, Sparkles } from 'lucide-react';

interface HomeMonitor3DViewerProps {
  className?: string;
}

const HomeMonitor3DViewer: React.FC<HomeMonitor3DViewerProps> = ({ className = '' }) => {
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
      viewerRef.current.cameraOrbit = '0deg 75deg 120%';
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
      className={`relative w-full h-64 sm:h-80 flex items-center justify-center select-none overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 border border-gray-100 shadow-sm ${className}`}
      onClick={(e) => e.stopPropagation()}
      onPointerDown={(e) => {
        e.stopPropagation();
        setInteracted(true);
      }}
    >
      {/* 3D Model Web Component */}
      <model-viewer
        ref={viewerRef}
        src="/models/portable-monitor.glb"
        poster="/mtablet-landing.png"
        alt="MESI mTABLET Draagbare Monitor 3D Model"
        camera-controls=""
        auto-rotate={isRotating ? '' : undefined}
        auto-rotate-delay="500"
        rotation-per-second="18deg"
        camera-orbit="0deg 75deg 120%"
        camera-target="auto auto auto"
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
      />


      {/* Action Controls */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
        <button
          type="button"
          onClick={toggleAutoRotate}
          title={isRotating ? 'Pauzeer rotatie' : 'Start rotatie'}
          className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-blue-600 hover:bg-white transition-all cursor-pointer"
        >
          <RotateCw className={`w-3.5 h-3.5 transition-transform ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
        </button>
        <button
          type="button"
          onClick={handleResetCamera}
          title="Reset weergave"
          className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-blue-600 hover:bg-white transition-all cursor-pointer"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Helper interaction hint */}
      {!interacted && (
        <div className="absolute bottom-3 inset-x-0 mx-auto w-max z-10 px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md text-[11px] font-medium text-white/90 pointer-events-none transition-opacity duration-500">
          Sleep om te draaien • Scroll om in te zoomen
        </div>
      )}
    </div>
  );
};

export default HomeMonitor3DViewer;
