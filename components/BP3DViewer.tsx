import React, { useRef, useState } from 'react';
import { RotateCw, Maximize2 } from 'lucide-react';

interface BP3DViewerProps {
  className?: string;
}

const BP3DViewer: React.FC<BP3DViewerProps> = ({ className = '' }) => {
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
    <div className={`relative w-full h-full flex items-center justify-center select-none overflow-hidden rounded-2xl bg-transparent ${className}`}>
      {/* 3D Model Web Component */}
      <model-viewer
        ref={viewerRef}
        src="/models/bp-cuff.glb"
        alt="MESI Bloeddrukmanchet 3D Model"
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
        onPointerDown={() => setInteracted(true)}
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

export default BP3DViewer;
