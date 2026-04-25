import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  className = "",
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion value for the slider position (0 to 100)
  const sliderPosition = useMotionValue(50);
  
  // Smooth the slider movement
  const smoothPosition = useSpring(sliderPosition, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    sliderPosition.set(position);
  }, [sliderPosition]);

  const onMouseDown = () => setIsResizing(true);
  const onMouseUp = () => setIsResizing(false);
  
  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing) return;
    handleMove(e.clientX);
  }, [isResizing, handleMove]);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!isResizing) return;
    handleMove(e.touches[0].clientX);
  }, [isResizing, handleMove]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onMouseUp);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isResizing, onMouseMove, onTouchMove]);

  // Initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      sliderPosition.set(60);
      setTimeout(() => sliderPosition.set(50), 1000);
    }, 1500);
    return () => clearTimeout(timer);
  }, [sliderPosition]);

  const clipPath = useTransform(smoothPosition, (pos) => `inset(0 ${100 - pos}% 0 0)`);
  const leftPos = useTransform(smoothPosition, (pos) => `${pos}%`);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full aspect-[3/4] overflow-hidden rounded-3xl select-none group ${className}`}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gold text-background rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-lg">
        After
      </div>

      {/* Before Image (Foreground) */}
      <motion.div 
        className="absolute inset-0 z-10 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-bold text-white uppercase tracking-widest">
            Before
        </div>
      </motion.div>

      {/* Slider Handle */}
      <motion.div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-gold/50 cursor-ew-resize group-active:bg-gold transition-colors"
        style={{ left: leftPos }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-background border-2 border-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-gold rounded-full" />
            <div className="w-0.5 h-4 bg-gold rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Click to interact hint overlay */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-[10px] text-white/60 font-bold uppercase tracking-[0.2em] animate-pulse">Drag to Compare</span>
      </div>
    </div>
  );
};
