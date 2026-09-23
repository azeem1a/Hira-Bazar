"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

/* ── Animation variants ───────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/* ── Project data ─────────────────────────────────────────── */
const projects = [
  {
    id: "01",
    image: "/images/hira_arabian_tassel_drapes.jpg",
    imageAlt:
      "The Royal Arabian Suite — bespoke mocha drapes with handcrafted tassel fringes in Jayalakshmipuram, Mysuru.",
    title: "The Royal Arabian Suite",
    location: "Jayalakshmipuram, Mysuru",
    description:
      "Bespoke Arabian drapes featuring handcrafted tassel-fringe borders, layered over translucent white sheers for a regal living space.",
    /* Controls image height relative to the center dominant card */
    heightClass: "h-[clamp(340px,52vw,580px)] lg:h-[clamp(380px,42vw,560px)]",
    objectPos: "center 30%",
  },
  {
    id: "02",
    image: "/images/hira_triple_pinch_pleat.jpg",
    imageAlt:
      "Gokulam Luxury Villa — double-layered triple-pinch pleat curtains in Gokulam, Mysuru.",
    title: "Gokulam Luxury Villa",
    location: "Gokulam, Mysuru",
    description:
      "Floor-to-ceiling double-layered window treatments with tailored triple-pinch pleating and coordinated tiebacks framing the family lounge.",
    /* Dominant/tallest card */
    heightClass: "h-[clamp(380px,60vw,680px)] lg:h-[clamp(460px,52vw,700px)]",
    objectPos: "center 25%",
  },
  {
    id: "03",
    image: "/images/hira_exterior_weather_blinds.jpg",
    imageAlt:
      "Saraswathipuram Modern Villa — exterior weather-resistant blinds installation in Saraswathipuram, Mysuru.",
    title: "Saraswathipuram Modern Villa",
    location: "Saraswathipuram, Mysuru",
    description:
      "Custom exterior weather-resistant blinds engineered for sun protection, rainwater resilience, and architectural privacy.",
    heightClass: "h-[clamp(340px,52vw,580px)] lg:h-[clamp(380px,42vw,560px)]",
    objectPos: "center 35%",
  },
] as const;

/* ── Single project card ─────────────────────────────────── */
function ProjectCard({
  project,
  shouldReduce,
}: {
  project: (typeof projects)[number];
  shouldReduce: boolean | null;
}) {
  return (
    <motion.article
      className="flex flex-col group"
      variants={cardVariant}
      aria-label={`Project: ${project.title}`}
    >
      {/* Image */}
      <a href="/projects" aria-label={`View ${project.title} project`} className="block">
        <div
          className={`relative overflow-hidden rounded-[24px] lg:rounded-[26px] ${project.heightClass}`}
        >
          <motion.div
            className="absolute inset-0"
            whileHover={shouldReduce ? {} : { scale: 1.035 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 767px) 100vw, 33vw"
              className="object-cover"
              style={{ objectPosition: project.objectPos }}
            />
          </motion.div>

          {/* Subtle bottom vignette */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(10,18,13,0.42) 0%, transparent 50%)",
            }}
          />

          {/* Hover affordance */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="flex flex-col items-center justify-center rounded-full"
              style={{
                width: "88px",
                height: "88px",
                background: "rgba(247,243,236,0.12)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(247,243,236,0.20)",
              }}
            >
              <ArrowUpRight
                size={20}
                strokeWidth={1.4}
                style={{ color: "#F7F3EC" }}
                aria-hidden="true"
              />
              <span
                className="uppercase tracking-[0.12em]"
                style={{
                  fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                  fontSize: "8px",
                  fontWeight: 500,
                  color: "rgba(247,243,236,0.80)",
                  marginTop: "4px",
                }}
              >
                View
              </span>
            </div>
          </motion.div>
        </div>
      </a>

      {/* Metadata beneath image */}
      <div className="mt-5 px-1">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className="text-ivory leading-[1.18] tracking-[-0.01em]"
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(20px, 2.2vw, 28px)",
              fontWeight: 600,
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* Location pill */}
        <div className="flex items-center gap-[6px] mb-3">
          <MapPin
            size={10}
            strokeWidth={1.6}
            style={{ color: "#8FA394", flexShrink: 0 }}
            aria-hidden="true"
          />
          <span
            className="text-sage uppercase tracking-[0.14em]"
            style={{
              fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
              fontSize: "9.5px",
              fontWeight: 500,
            }}
          >
            {project.location}
          </span>
        </div>

        {/* Description */}
        <p
          className="leading-[1.72]"
          style={{
            fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
            fontSize: "clamp(12.5px, 1vw, 14.5px)",
            color: "rgba(235,229,220,0.52)",
          }}
        >
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}

/* ── Main section ─────────────────────────────────────────── */
export default function SelectedSpaces() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "0px 0px -40px 0px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "0px 0px -60px 0px" });
  const shouldReduce = useReducedMotion();

  const headerVisible = shouldReduce || headerInView;
  const cardsVisible = shouldReduce || cardsInView;

  return (
    <section
      id="projects"
      className="relative overflow-hidden scroll-mt-20 w-full max-w-full box-border"
      aria-label="Selected spaces — featured projects"
      style={{ backgroundColor: "#101A15" }}
    >
      {/* Faint brass glow — top right, very subtle */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-5%",
          width: "55%",
          height: "55%",
          background:
            "radial-gradient(ellipse at 65% 20%, rgba(183,140,74,0.055) 0%, transparent 65%)",
        }}
      />
      {/* Faint sage glow — bottom left */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: "-8%",
          left: "-8%",
          width: "48%",
          height: "48%",
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(143,163,148,0.045) 0%, transparent 65%)",
        }}
      />

      <div
        className="relative mx-auto w-full max-w-[1340px] section-pad-x min-w-0"
        style={{
          paddingTop: "clamp(72px, 10vw, 120px)",
          paddingBottom: "clamp(72px, 10vw, 120px)",
        }}
      >
        {/* ── Section header ── */}
        <motion.div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-[clamp(40px,6vw,72px)] w-full min-w-0"
          variants={stagger}
          initial="hidden"
          animate={headerVisible ? "visible" : "hidden"}
        >
          {/* Left: eyebrow + heading */}
          <div className="min-w-0">
            <motion.p
              className="flex items-center gap-3 uppercase tracking-[0.22em] text-sage mb-5"
              style={{
                fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                fontSize: "10px",
                fontWeight: 500,
              }}
              variants={fadeUp}
            >
              <span
                aria-hidden="true"
                className="block h-[1px] bg-brass shrink-0"
                style={{ width: "26px" }}
              />
              Selected Spaces
            </motion.p>

            <motion.h2
              className="text-ivory leading-[1.07] tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(38px, 4.8vw, 70px)",
                fontWeight: 600,
              }}
              variants={fadeUp}
            >
              Spaces with character,
              <br />
              {/* Accent word matching site style, adapted for dark bg */}
              <span className="accent-word-light">
                crafted for life.
              </span>
            </motion.h2>
          </div>

          {/* Right: CTAs */}
          <motion.div
            className="flex items-center gap-4 shrink-0"
            variants={fadeUp}
          >
            <motion.a
              href="/projects"
              id="view-all-projects-btn"
              aria-label="View all Hira Bazaar Curtain King projects"
              className="inline-block rounded-full whitespace-nowrap no-underline font-medium tracking-[0.05em] cursor-pointer border"
              style={{
                fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                fontSize: "13px",
                padding: "14px 28px",
                color: "#F7F3EC",
                borderColor: "rgba(247,243,236,0.22)",
                backgroundColor: "transparent",
              }}
              whileHover={
                shouldReduce
                  ? {}
                  : {
                      y: -3,
                      borderColor: "rgba(183,140,74,0.5)",
                      backgroundColor: "rgba(183,140,74,0.08)",
                      boxShadow: "0 10px 28px rgba(0,0,0,0.24)",
                    }
              }
              transition={{ duration: 0.25 }}
            >
              View All Projects
            </motion.a>

            <motion.a
              href="/projects"
              aria-label="View all projects"
              className="flex items-center justify-center shrink-0 rounded-full border text-ivory cursor-pointer no-underline"
              style={{
                width: "50px",
                height: "50px",
                borderColor: "rgba(247,243,236,0.22)",
                backgroundColor: "transparent",
              }}
              whileHover={
                shouldReduce
                  ? {}
                  : {
                      y: -3,
                      x: 2,
                      borderColor: "#B78C4A",
                      backgroundColor: "rgba(183,140,74,0.12)",
                    }
              }
              transition={{ duration: 0.28 }}
            >
              <motion.span
                whileHover={shouldReduce ? {} : { rotate: -18, scale: 1.12 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-center"
              >
                <ArrowUpRight size={17} strokeWidth={1.4} />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── Projects grid ── */}
        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-end gap-[clamp(14px,1.8vw,24px)] w-full min-w-0"
          variants={stagger}
          initial="hidden"
          animate={cardsVisible ? "visible" : "hidden"}
        >
          {/* Card 01 — slight inset on desktop */}
          <div className="lg:mb-[clamp(0px,4vw,64px)]">
            <ProjectCard project={projects[0]} shouldReduce={shouldReduce} />
          </div>

          {/* Card 02 — dominant, tallest */}
          <div>
            <ProjectCard project={projects[1]} shouldReduce={shouldReduce} />
          </div>

          {/* Card 03 — slight inset on desktop, same as 01 */}
          <div className="lg:mb-[clamp(0px,4vw,64px)]">
            <ProjectCard project={projects[2]} shouldReduce={shouldReduce} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
