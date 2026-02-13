"use client";

import { motion } from "framer-motion";

export default function AnimatedCamera({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative pointer-events-none select-none will-change-transform ${className}`}
    >
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-yellow-500 dark:text-yellow-400 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Camera Body */}
        <motion.path
          d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Lens Outer Ring */}
        <motion.circle
          cx="12"
          cy="13"
          r="4"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "backOut" }}
        />

        {/* Lens Shutter/Aperture - Rotating */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ originX: "12px", originY: "13px" }}
        >
          <circle
            cx="12"
            cy="13"
            r="2"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="1 2"
            className="opacity-70"
          />
          <circle
            cx="12"
            cy="13"
            r="3"
            stroke="currentColor"
            strokeWidth="0.3"
            strokeDasharray="4 4"
            className="opacity-50"
          />
        </motion.g>

        {/* Flash - Pulsing */}
        <motion.circle
          cx="18.5"
          cy="8.5"
          r="1.5"
          fill="currentColor"
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />

        {/* Flash Burst Lines */}
        <motion.g
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 4.5, // Syncs roughly with flash pulse
          }}
          style={{ originX: "18.5px", originY: "8.5px" }}
        >
          <line
            x1="18.5"
            y1="4.5"
            x2="18.5"
            y2="2.5"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <line
            x1="22.5"
            y1="8.5"
            x2="24.5"
            y2="8.5"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <line
            x1="21.5"
            y1="5.5"
            x2="23"
            y2="4"
            stroke="currentColor"
            strokeWidth="0.8"
          />
        </motion.g>
      </motion.svg>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-yellow-500/20 rounded-full blur-3xl -z-10" />
    </div>
  );
}
