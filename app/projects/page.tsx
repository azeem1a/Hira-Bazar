"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_CONFIG } from "@/config/whatsapp";

interface ProjectItem {
  id: string;
  title: string;
  category: "Curtains & Drapes" | "Arabian & Royal" | "Blinds & Outdoor" | "Wallpapers & Installation";
  location: string;
  tag: string;
  description: string;
  image: string;
  aspect: string;
}

const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "02",
    title: "The Royal Arabian Suite",
    category: "Arabian & Royal",
    location: "Jayalakshmipuram, Mysuru",
    tag: "Arabian Curtains",
    description: "Bespoke mocha drapes featuring handcrafted tassel-fringe borders, layered over translucent white sheers.",
    image: "/images/hira_arabian_tassel_drapes.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "03",
    title: "Gokulam Luxury Villa",
    category: "Curtains & Drapes",
    location: "Gokulam, Mysuru",
    tag: "Triple-Pinch Pleat",
    description: "Floor-to-ceiling double-layered window treatments with tailored triple-pinch pleating and coordinated tiebacks.",
    image: "/images/hira_triple_pinch_pleat.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "04",
    title: "Saraswathipuram Modern Villa",
    category: "Blinds & Outdoor",
    location: "Saraswathipuram, Mysuru",
    tag: "Outdoor Weather Blinds",
    description: "Custom exterior weather-resistant blinds engineered for sun protection, rainwater resilience, and architectural privacy.",
    image: "/images/hira_exterior_weather_blinds.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "05",
    title: "Champagne Gold Lounge",
    category: "Curtains & Drapes",
    location: "Yadavagiri, Mysuru",
    tag: "Double-Layer Drapes",
    description: "Champagne gold drapes layered over sheer lace curtains with custom matching fabric tiebacks and mandala rug setting.",
    image: "/images/hira_champagne_mirrored_lounge.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "06",
    title: "Imperial Palace Embroidery",
    category: "Arabian & Royal",
    location: "Kuvempunagar, Mysuru",
    tag: "Royal Embroidery",
    description: "Classic royal gold embroidered drapes with delicate floral inner sheers and heavy golden rope tassels.",
    image: "/images/hira_royal_embroidered_lace.png",
    aspect: "aspect-[3/4]",
  },
  {
    id: "07",
    title: "Minimalist Ripple-Pleats",
    category: "Curtains & Drapes",
    location: "Siddhartha Layout, Mysuru",
    tag: "Ripple Pleats",
    description: "Tailored ivory ripple-pleat curtains complementing rich marble flooring in a contemporary Mysuru residence.",
    image: "/images/hira_ripple_pleat_marble.png",
    aspect: "aspect-[3/4]",
  },
  {
    id: "08",
    title: "Designer Passage & Door Drapes",
    category: "Curtains & Drapes",
    location: "Dattagalli, Mysuru",
    tag: "Doorway Curtains",
    description: "Custom doorway and passage curtains framing interior room transitions with warmth and privacy.",
    image: "/images/hira_passage_doorway_drapes.png",
    aspect: "aspect-[3/4]",
  },
  {
    id: "09",
    title: "Sunlit Master Bedroom",
    category: "Curtains & Drapes",
    location: "Bannimantap, Mysuru",
    tag: "Bedroom Curtains",
    description: "Warm golden pinch-pleat bedroom curtains with matching fabric tiebacks capturing gentle natural morning light.",
    image: "/images/hira_sunlit_bedroom_curtains.png",
    aspect: "aspect-[3/4]",
  },
  {
    id: "10",
    title: "The Drapery Studio & Workshop",
    category: "Curtains & Drapes",
    location: "Hira Bazaar Showroom, Mysuru",
    tag: "Fabric Selection",
    description: "Extensive drapery fabric collection, pleating samples, and bespoke tailoring studio displays for client consultations.",
    image: "/images/hira_studio_fabric_workshop.png",
    aspect: "aspect-[3/4]",
  },
  {
    id: "11",
    title: "Japandi Textured Wallpaper Suite",
    category: "Wallpapers & Installation",
    location: "Bogadi, Mysuru",
    tag: "Textured Wallpaper",
    description: "Textured limewash wallpaper with vertical fluted wood wall paneling and ambient architectural cove backlighting.",
    image: "/images/hira_wallpaper_japandi_suite.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "13",
    title: "Dual-Window Coordinated Drapes",
    category: "Curtains & Drapes",
    location: "Vontikoppal, Mysuru",
    tag: "Living Room Curtains",
    description: "Coordinated floor-to-ceiling cream drapes and sheer curtains dressing dual adjacent windows seamlessly.",
    image: "/images/living_room_dual_drapes.jpg",
    aspect: "aspect-[16/9]",
  },
  {
    id: "14",
    title: "Royal Peacock Scalloped Valance",
    category: "Arabian & Royal",
    location: "Nazarbad, Mysuru",
    tag: "Pelmet & Valance",
    description: "Vibrant peacock blue scalloped valance with layered swags and tassel fringes installed over a 3D stone accent wall.",
    image: "/images/arabian_peacock_valance.jpg",
    aspect: "aspect-[16/9]",
  },
  {
    id: "15",
    title: "Architectural Woven Bamboo Blinds",
    category: "Blinds & Outdoor",
    location: "Lashkar Mohalla, Mysuru",
    tag: "Woven Blinds",
    description: "Custom natural woven bamboo/reed blinds for wide architectural studio windows providing soft diffused sunlight.",
    image: "/images/woven_blinds_commercial.jpg",
    aspect: "aspect-[16/9]",
  },
  {
    id: "16",
    title: "Commercial Vertical Louvre Blinds",
    category: "Blinds & Outdoor",
    location: "Devaraja Mohalla, Mysuru",
    tag: "Vertical Blinds",
    description: "Vibrant vertical louvre blinds precision-fitted for commercial offices with smooth rotational light adjustment.",
    image: "/images/vertical_blinds_office.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "01",
    title: "The Royal Bay Window Suite",
    category: "Curtains & Drapes",
    location: "Vijayanagar, Mysuru",
    tag: "Embroidered Sheers",
    description: "Opulent bay window setup with criss-cross embroidered sheer drapes, golden tassel tiebacks, and ceiling cove lighting.",
    image: "/images/hira_hero_luxury_living.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "12",
    title: "Executive Dual Roller Blinds",
    category: "Blinds & Outdoor",
    location: "Hebbal Industrial Area, Mysuru",
    tag: "PVC Roller Blinds",
    description: "Dual charcoal-grey roller blinds installed in an executive study for complete daylight and glare control.",
    image: "/images/roller_blinds_office.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "17",
    title: "Emerald Lounge Pinch-Pleat Drapes",
    category: "Curtains & Drapes",
    location: "Vijayanagar 2nd Stage, Mysuru",
    tag: "Pinch-Pleat Drapes",
    description: "Tailored champagne-cream pinch-pleat drapes layered with delicate embroidered inner sheers, complementing an opulent emerald-and-gold living salon.",
    image: "/images/17.png",
    aspect: "aspect-[3/4]",
  },
];

const CATEGORIES = [
  "All",
  "Curtains & Drapes",
  "Arabian & Royal",
  "Blinds & Outdoor",
  "Wallpapers & Installation",
] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = selectedCategory === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#101A15] text-[#F7F3EC] pb-24 selection:bg-[#B78C4A] selection:text-[#101A15]">
      {/* ── Top Header Navigation ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#101A15]/85 border-b border-[#F7F3EC]/10">
        <div className="max-w-[1340px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#8FA394] hover:text-[#F7F3EC] transition-colors"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            <span>Back to Home</span>
          </Link>

          <Link href="/" className="flex items-center gap-3 no-underline">
            <div className="w-8 h-8 rounded-full bg-[#B78C4A]/20 border border-[#B78C4A]/40 flex items-center justify-center text-xs font-semibold text-[#B78C4A]">
              H
            </div>
            <span className="font-medium text-sm tracking-[0.06em] text-[#F7F3EC] hidden sm:inline">
              Hira Bazaar Curtain King
            </span>
          </Link>

          <a
            href={WHATSAPP_CONFIG.getLink("Hello Mohammed Ismail, I am browsing your project gallery and would like a free measurement and quote.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#1B7A58] hover:bg-[#125E42] text-white transition-all shadow-md"
          >
            <span>Book Free Measure</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </header>

      {/* ── Hero Title Section ── */}
      <section className="max-w-[1340px] mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#F7F3EC]/10">
          <div>
            <p className="flex items-center gap-3 uppercase tracking-[0.22em] text-[#8FA394] text-xs font-medium mb-3">
              <span className="w-6 h-[1px] bg-[#B78C4A]" />
              Portfolio &amp; Client Installations
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#F7F3EC]"
              style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
            >
              The Complete Gallery
            </h1>
          </div>
          <p className="text-sm sm:text-base text-[#F7F3EC]/60 max-w-md leading-relaxed">
            Explore {ALL_PROJECTS.length} completed window treatments, Arabian drapes, PVC blinds, and wallpapers installed across Mysuru by Mohammed Ismail and team.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = cat === "All" ? ALL_PROJECTS.length : ALL_PROJECTS.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${isActive
                    ? "bg-[#F7F3EC] text-[#14231E] shadow-lg"
                    : "bg-[#14231E] text-[#F7F3EC]/70 hover:text-[#F7F3EC] hover:bg-[#1C2F28] border border-[#F7F3EC]/10"
                  }`}
              >
                {cat} <span className="opacity-60 ml-1 text-xs">({count})</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Project Grid ── */}
      <section className="max-w-[1340px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <article
              key={proj.id}
              className="group flex flex-col bg-[#14231E]/60 border border-[#F7F3EC]/10 rounded-[22px] overflow-hidden hover:border-[#B78C4A]/40 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className={`relative w-full ${proj.aspect} overflow-hidden bg-[#0A120D]`}>
                <Image
                  src={proj.image}
                  alt={`${proj.title} — ${proj.description}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101A15]/80 via-transparent to-black/20 pointer-events-none" />

                {/* Chip Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-medium tracking-[0.1em] uppercase bg-[#101A15]/80 backdrop-blur-md text-[#B78C4A] border border-[#B78C4A]/30">
                    {proj.tag}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#8FA394] mb-2 font-medium">
                    <span>{proj.location}</span>
                    <span className="opacity-60">#{proj.id}</span>
                  </div>
                  <h2
                    className="text-2xl font-semibold text-[#F7F3EC] mb-3 group-hover:text-[#B78C4A] transition-colors"
                    style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
                  >
                    {proj.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#F7F3EC]/65 leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#F7F3EC]/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#8FA394] flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#B78C4A]" />
                    Custom Measured &amp; Fitted
                  </span>
                  <a
                    href={WHATSAPP_CONFIG.getLink(`Hello Mohammed Ismail, I am interested in curtains like "${proj.title}" (${proj.location}). Could you share fabric options and pricing?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F7F3EC] hover:text-[#B78C4A] transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Bottom Callout Banner ── */}
      <section className="max-w-[1340px] mx-auto px-6 mt-20">
        <div className="rounded-[24px] p-8 sm:p-12 bg-gradient-to-br from-[#14231E] to-[#1C2F28] border border-[#B78C4A]/30 text-center flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#B78C4A] font-medium mb-3">
            Hira Bazaar Curtain King &middot; Mysuru
          </p>
          <h3
            className="text-3xl sm:text-4xl font-semibold text-[#F7F3EC] mb-4 max-w-xl"
            style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
          >
            Ready to Dress Your Windows?
          </h3>
          <p className="text-sm sm:text-base text-[#F7F3EC]/70 max-w-lg mb-8 leading-relaxed">
            Get personalized fabric recommendations, free at-home measurements, and transparent pricing directly from Mohammed Ismail.
          </p>
          <a
            href={WHATSAPP_CONFIG.getLink("Hello Mohammed Ismail, I would like to schedule a free window measurement and consultation in Mysuru.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium bg-[#1B7A58] hover:bg-[#125E42] text-white shadow-xl transition-all hover:scale-105"
          >
            <span>Chat on WhatsApp: +91 9739711980</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </section>
    </main>
  );
}
