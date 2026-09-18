import React, { useRef, useState } from 'react';
import { RotateCw, Maximize2 } from 'lucide-react';

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
      className={`relative w-full h-64 sm:h-80 flex items-center justify-center select-none overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_50%_35%,#8ed6fd_0%,#4ca7eb_45%,#207ec4_80%,#1162a1_100%)] border border-sky-200/60 shadow-[inset_0_2px_15px_rgba(255,255,255,0.4),0_12px_32px_rgba(18,104,168,0.22)] ${className}`}
      onClick={(e) => e.stopPropagation()}
      onPointerDown={(e) => {
        e.stopPropagation();
        setInteracted(true);
      }}
    >
      {/* Soft ambient studio highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.45)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-4 h-16 bg-gradient-to-t from-white/20 via-sky-200/10 to-transparent blur-sm pointer-events-none" />

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
          className="w-8 h-8 rounded-full bg-white/85 hover:bg-white text-sky-900 hover:text-blue-600 border border-white/80 shadow-md flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
        >
          <RotateCw className={`w-3.5 h-3.5 transition-transform ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
        </button>
        <button
          type="button"
          onClick={handleResetCamera}
          title="Reset weergave"
          className="w-8 h-8 rounded-full bg-white/85 hover:bg-white text-sky-900 hover:text-blue-600 border border-white/80 shadow-md flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Helper interaction hint */}
      {!interacted && (
        <div className="absolute bottom-3 inset-x-0 mx-auto w-max z-10 px-3 py-1 rounded-full bg-white/90 border border-white/90 shadow-sm backdrop-blur-md text-[11px] font-semibold text-sky-950 pointer-events-none transition-opacity duration-500">
          Sleep om te draaien • Scroll om in te zoomen
        </div>
      )}
    </div>
  );
};

export default HomeMonitor3DViewer;
