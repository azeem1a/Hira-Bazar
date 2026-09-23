"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SHOWROOM_LOCATION } from "@/config/location";

export default function EditorialBadge() {
  const shouldReduce = useReducedMotion();

  return (
    <motion.a
      href={SHOWROOM_LOCATION.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute z-[12] cursor-pointer group block select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B78C4A] rounded-full"
      style={{
        top: "clamp(84px, 7.5vw, 115px)",
        right: "clamp(20px, 3.5vw, 60px)",
        width: "clamp(86px, 8.5vw, 118px)",
        height: "clamp(86px, 8.5vw, 118px)",
      }}
      aria-label="View Hira Bazaar Curtains king location on Google Maps"
      title="Click to view Hira Bazaar showroom on Google Maps"
      whileHover={
        shouldReduce ? {} : { rotate: 8, scale: 1.06 }
      }
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Outer SVG ring with rotating curved text */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="pointer-events-none"
      >
        <circle
          cx="60"
          cy="60"
          r="56"
          stroke="rgba(231,226,217,0.1)"
          strokeWidth="1"
          className="transition-colors duration-300 group-hover:stroke-[rgba(183,140,74,0.35)]"
        />
        {/* Rotating group */}
        <motion.g
          animate={shouldReduce ? {} : { rotate: 360 }}
          transition={
            shouldReduce
              ? {}
              : { duration: 20, repeat: Infinity, ease: "linear" }
          }
          style={{ transformOrigin: "60px 60px" }}
        >
          <path
            id="tc"
            d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
            fill="none"
          />
          <text
            fontSize="8"
            fontWeight="500"
            letterSpacing="3.8"
            fill="rgba(231,226,217,0.5)"
            fontFamily="var(--font-dm-sans, system-ui, sans-serif)"
            className="transition-colors duration-300 group-hover:fill-[rgba(231,226,217,0.85)]"
          >
            <textPath href="#tc" startOffset="0%">
              PREMIUM CURTAINS MYSURU • HIRA BAZAAR •
            </textPath>
          </text>
        </motion.g>
      </svg>

      {/* Center arrow button */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full border border-[rgba(231,226,217,0.18)] flex items-center justify-center transition-all duration-300 group-hover:border-[#B78C4A] group-hover:bg-[#B78C4A]/20 group-hover:shadow-[0_0_14px_rgba(183,140,74,0.35)]"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          className="transition-transform duration-300 group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]"
        >
          <path
            d="M3 12L12 3M12 3H5.5M12 3V9.5"
            stroke="rgba(231,226,217,0.7)"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-300 group-hover:stroke-[#F7F3EC]"
          />
        </svg>
      </div>
    </motion.a>
  );
}
