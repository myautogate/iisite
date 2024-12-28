import React from 'react';
import { motion } from 'framer-motion';

interface WhisperIconProps {
  isActive?: boolean;
  size?: number;
}

export default function WhisperIcon({ isActive = false, size = 40 }: WhisperIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      initial={false}
      animate={isActive ? "active" : "inactive"}
      variants={{
        active: {
          scale: [1, 1.1, 1],
          transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
        },
        inactive: {
          scale: 1
        }
      }}
    >
      <motion.rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          active: {
            pathLength: [0.3, 0.6, 0.3],
            transition: { duration: 2, repeat: Infinity }
          }
        }}
      />
      <motion.line
        x1="7"
        y1="12"
        x2="8"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          active: {
            x: [0, 1, 0],
            transition: { duration: 1, repeat: Infinity }
          }
        }}
      />
      <motion.line
        x1="16"
        y1="12"
        x2="17"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          active: {
            x: [0, -1, 0],
            transition: { duration: 1, repeat: Infinity }
          }
        }}
      />
    </motion.svg>
  );
}