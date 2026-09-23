"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Ruler, Sparkles } from "lucide-react";
import { WHATSAPP_CONFIG } from "@/config/whatsapp";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/config/contact";

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  aspect: string;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    number: "01",
    title: "Window & Door Curtains",
    tagline: "Tailored sheer & blackout drapes for every doorway and window.",
    description:
      "Crafted from premium fabrics including linen blends, velvet, silk-finish polyesters, and sheer voile. Choose from tailored triple-pinch pleats, modern ripple folds, eyelet headers, and motorized tracks.",
    features: [
      "Custom floor-to-ceiling measurements",
      "Blackout, thermal & sheer opacity options",
      "Precision brass & stainless steel curtain tracks",
      "Coordinated matching fabric tiebacks",
    ],
    image: "/images/living_room_dual_drapes.jpg",
    imageAlt: "Hira Bazaar Curtain King — dual window cream drapes in modern living room, Mysuru",
    aspect: "aspect-[16/10]",
  },
  {
    number: "02",
    title: "Arabian & Royal Curtains",
    tagline: "Regal swags, handcrafted valances, and opulent tassel fringes.",
    description:
      "Our signature specialty. Traditional Arabian swags, tiered pelmets, handcrafted crystal & silk tassel fringes, and layered embroidery designed to give your living lounge an unmistakable royal elegance.",
    features: [
      "Handcrafted scalloped swags & pelmets",
      "Custom bead & bullion tassel fringe borders",
      "Intricate floral lace & embroidery sheers",
      "Royal palace & villa architectural styling",
    ],
    image: "/images/arabian_peacock_valance.jpg",
    imageAlt: "Hira Bazaar Curtain King — peacock blue Arabian scalloped valance with swags and tassels, Mysuru",
    aspect: "aspect-[16/10]",
  },
  {
    number: "03",
    title: "PVC & Outdoor Weather-Resistant Blinds",
    tagline: "High-durability blinds engineered for heat, rain, and privacy.",
    description:
      "Commercial and residential window blinds designed for maximum light regulation and weather protection. From interior roller and vertical louvre blinds to heavy-duty exterior monsoon and balcony blinds.",
    features: [
      "Weatherproof exterior PVC balcony blinds",
      "Smooth manual chain & motorized roller mechanisms",
      "Vertical louvre blinds for commercial office privacy",
      "Natural woven bamboo & reed daylight diffusers",
    ],
    image: "/images/roller_blinds_office.jpg",
    imageAlt: "Hira Bazaar Curtain King — executive grey roller blinds for office and study, Mysuru",
    aspect: "aspect-[16/10]",
  },
  {
    number: "04",
    title: "Wallpapers & Professional Fitting",
    tagline: "Designer wall coverings installed with flawless seams.",
    description:
      "Transform flat walls into luxurious textured surfaces. We offer textured plaster papers, botanical prints, metallic accents, and seamless fitting executed by our experienced in-house technicians.",
    features: [
      "Curated international & Indian wallpaper collections",
      "Moisture-resistant & easy-clean materials",
      "Precision wall preparation and seamless alignment",
      "Turnkey service from consultation to final handover",
    ],
    image: "/images/hospitality.jpg",
    imageAlt: "Hira Bazaar Curtain King — luxury textured wallpaper master bedroom with warm cove lighting, Mysuru",
    aspect: "aspect-[16/10]",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#14231E] pb-24 selection:bg-[#B78C4A] selection:text-[#F7F3EC]">
      {/* ── Top Header ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F7F3EC]/90 border-b border-[#14231E]/10">
        <div className="max-w-[1340px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#8FA394] hover:text-[#14231E] transition-colors"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            <span>Back to Home</span>
          </Link>

          <Link href="/" className="flex items-center gap-3 no-underline">
            <div className="w-8 h-8 rounded-full bg-[#14231E] text-[#F7F3EC] flex items-center justify-center text-xs font-semibold">
              H
            </div>
            <span className="font-medium text-sm tracking-[0.06em] text-[#14231E] hidden sm:inline">
              Hira Bazaar Curtain King
            </span>
          </Link>

          <a
            href={WHATSAPP_CONFIG.getLink("Hello Mohammed Ismail, I would like to consult on curtain and window treatments for my property.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#1B7A58] hover:bg-[#125E42] text-white transition-all shadow-md"
          >
            <span>Inquire on WhatsApp</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </header>

      {/* ── Page Hero ── */}
      <section className="max-w-[1340px] mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#14231E]/10">
          <div>
            <p className="flex items-center gap-3 uppercase tracking-[0.22em] text-[#8FA394] text-xs font-medium mb-3">
              <span className="w-6 h-[1px] bg-[#B78C4A]" />
              Tailored Craftsmanship
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#14231E]"
              style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
            >
              Our Specialties &amp; Services
            </h1>
          </div>
          <p className="text-sm sm:text-base text-[#14231E]/65 max-w-md leading-relaxed">
            From regal Arabian drapery to weather-proof outdoor blinds, every solution is measured on-site and tailored specifically to your home or office.
          </p>
        </div>

        {/* ── Key Service Pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="p-6 rounded-[20px] bg-white/70 border border-[#14231E]/08 flex items-start gap-4 shadow-sm">
            <Ruler className="text-[#B78C4A] shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-sm text-[#14231E] mb-1">Free At-Home Measurement</h3>
              <p className="text-xs text-[#14231E]/60 leading-relaxed">
                We bring fabric swatches directly to your doorstep across Mysuru and take exact millimeter-accurate measurements.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-[20px] bg-white/70 border border-[#14231E]/08 flex items-start gap-4 shadow-sm">
            <Sparkles className="text-[#B78C4A] shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-sm text-[#14231E] mb-1">Bespoke Workshop Tailoring</h3>
              <p className="text-xs text-[#14231E]/60 leading-relaxed">
                Every curtain panel is custom-pleated, hemmed, and inspected in our workshop under Mohammed Ismail&apos;s guidance.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-[20px] bg-white/70 border border-[#14231E]/08 flex items-start gap-4 shadow-sm">
            <ShieldCheck className="text-[#B78C4A] shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-sm text-[#14231E] mb-1">Professional Installation</h3>
              <p className="text-xs text-[#14231E]/60 leading-relaxed">
                Expert track fitting, ceiling anchoring, steam ironing, and drape dressing to guarantee a flawless finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Detailed Services Section ── */}
      <section className="max-w-[1340px] mx-auto px-6 space-y-16">
        {SERVICES_LIST.map((srv, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <article
              key={srv.number}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-8 sm:p-12 rounded-[28px] bg-white/80 border border-[#14231E]/08 shadow-sm ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2 shrink-0">
                <div className={`relative w-full ${srv.aspect} rounded-[22px] overflow-hidden shadow-lg border border-[#14231E]/08`}>
                  <Image
                    src={srv.image}
                    alt={srv.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#14231E]/80 backdrop-blur-md text-[#F7F3EC]">
                      Service {srv.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span
                  className="block text-4xl sm:text-5xl font-light text-[#B78C4A]/40 mb-2"
                  style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
                >
                  {srv.number}
                </span>
                <h2
                  className="text-3xl sm:text-4xl font-semibold text-[#14231E] mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
                >
                  {srv.title}
                </h2>
                <p className="text-sm font-medium text-[#B78C4A] mb-4">
                  {srv.tagline}
                </p>
                <p className="text-sm sm:text-base text-[#14231E]/70 leading-relaxed mb-6">
                  {srv.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {srv.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-xs sm:text-sm text-[#14231E]/85">
                      <CheckCircle2 size={16} className="text-[#1B7A58] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <a
                    href={WHATSAPP_CONFIG.getLink(`Hello Mohammed Ismail, I am interested in your service: ${srv.title}. Can we discuss options?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium bg-[#14231E] hover:bg-[#1B7A58] text-[#F7F3EC] transition-all shadow-md"
                  >
                    <span>Request a Quote for {srv.title}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* ── Footer Banner ── */}
      <section className="max-w-[1340px] mx-auto px-6 mt-20">
        <div className="rounded-[28px] p-8 sm:p-14 bg-[#14231E] text-[#F7F3EC] text-center flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8FA394] font-medium mb-3">
            Hira Bazaar Curtain King
          </p>
          <h3
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 max-w-xl leading-tight"
            style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
          >
            Have a Specific Window in Mind?
          </h3>
          <p className="text-sm sm:text-base text-[#F7F3EC]/70 max-w-lg mb-8 leading-relaxed">
            Send us a photo or rough measurements on WhatsApp. Mohammed Ismail will share fabric ideas, photos of similar installations, and a quick estimate.
          </p>
          <a
            href={WHATSAPP_CONFIG.getLink("Hello Mohammed Ismail, I want to share photos and measurements of my windows for a quick quote.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-medium bg-[#1B7A58] hover:bg-[#125E42] text-white shadow-xl transition-all hover:scale-105"
          >
            <span>Message on WhatsApp: +91 9739711980</span>
            <ArrowUpRight size={16} />
          </a>
          <p className="mt-4 text-xs text-[#F7F3EC]/55">
            Prefer email? Send your inquiry to{" "}
            <a href={CONTACT_MAILTO} className="text-[#B78C4A] hover:underline font-medium">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
