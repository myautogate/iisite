import React, { useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface WhisperCharacterProps {
  size?: number;
  isActive?: boolean;
}

export default function WhisperCharacter({ size = 40, isActive = false }: WhisperCharacterProps) {
  const leftEyeControls = useAnimationControls();
  const rightEyeControls = useAnimationControls();
  const characterRef = useRef<HTMLDivElement>(null);
  const eyeLeftRef = useRef<SVGRectElement>(null);
  const eyeRightRef = useRef<SVGRectElement>(null);
  const blinkTimeoutRef = useRef<NodeJS.Timeout>();
  const isComponentMounted = useRef(true);

  // Blinking animation
  useEffect(() => {
    const blink = async () => {
      if (!isComponentMounted.current) return;

      try {
        // Close eyes
        await Promise.all([
          leftEyeControls.start({ scaleY: 0.1 }, { duration: 0.1 }),
          rightEyeControls.start({ scaleY: 0.1 }, { duration: 0.1 })
        ]);

        if (!isComponentMounted.current) return;

        // Open eyes
        await Promise.all([
          leftEyeControls.start({ scaleY: 1 }, { duration: 0.1 }),
          rightEyeControls.start({ scaleY: 1 }, { duration: 0.1 })
        ]);

        if (!isComponentMounted.current) return;

        // Schedule next blink
        blinkTimeoutRef.current = setTimeout(
          blink,
          Math.random() * 4000 + 2000 // Random interval between 2-6 seconds
        );
      } catch (error) {
        // Animation was interrupted, which is fine
      }
    };

    // Start initial blink cycle
    blink();

    // Cleanup
    return () => {
      isComponentMounted.current = false;
      if (blinkTimeoutRef.current) {
        clearTimeout(blinkTimeoutRef.current);
      }
    };
  }, [leftEyeControls, rightEyeControls]);

  // Eye tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!characterRef.current || !eyeLeftRef.current || !eyeRightRef.current) return;

      const rect = characterRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate angle between mouse and character center
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      
      // Maximum eye movement radius
      const radius = 1;
      
      // Calculate new eye positions
      const eyeX = Math.cos(angle) * radius;
      const eyeY = Math.sin(angle) * radius;

      // Apply movement to both eyes
      const baseLeftX = 8;
      const baseRightX = 18;
      const baseY = 10;

      eyeLeftRef.current.setAttribute('x', `${baseLeftX + eyeX}`);
      eyeLeftRef.current.setAttribute('y', `${baseY + eyeY}`);
      eyeRightRef.current.setAttribute('x', `${baseRightX + eyeX}`);
      eyeRightRef.current.setAttribute('y', `${baseY + eyeY}`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={characterRef} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 30 30">
        {/* Outer Square Frame */}
        <motion.rect
          x="3"
          y="3"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          animate={isActive ? {
            scale: [1, 1.05, 1],
            transition: { duration: 2, repeat: Infinity }
          } : undefined}
        />
        
        {/* Eyes */}
        <g>
          <motion.rect
            ref={eyeLeftRef}
            x="8"
            y="10"
            width="4"
            height="8"
            fill="currentColor"
            initial={{ scaleY: 1 }}
            animate={leftEyeControls}
            style={{ transformOrigin: '10 14' }}
          />
          <motion.rect
            ref={eyeRightRef}
            x="18"
            y="10"
            width="4"
            height="8"
            fill="currentColor"
            initial={{ scaleY: 1 }}
            animate={rightEyeControls}
            style={{ transformOrigin: '20 14' }}
          />
        </g>
      </svg>
    </div>
  );
}