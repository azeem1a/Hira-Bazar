"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin, Phone, Award, Mail } from "lucide-react";
import { WHATSAPP_CONFIG } from "@/config/whatsapp";
import { SHOWROOM_LOCATION } from "@/config/location";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/config/contact";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#14231E] pb-24 selection:bg-[#B78C4A] selection:text-[#F7F3EC]">
      {/* ── Top Header Navigation ── */}
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
            href={WHATSAPP_CONFIG.getLink("Hello Mohammed Ismail, I would like to visit the showroom or schedule a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#1B7A58] hover:bg-[#125E42] text-white transition-all shadow-md"
          >
            <span>WhatsApp Us</span>
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
              About Hira Bazaar Curtain King
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#14231E]"
              style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
            >
              Crafting Elegance for Mysuru Windows
            </h1>
          </div>
          <p className="text-sm sm:text-base text-[#14231E]/65 max-w-md leading-relaxed">
            Led by Mohammed Ismail, Hira Bazaar Curtain King has established itself as the trusted authority for custom curtains, Arabian drapes, PVC blinds, and luxury wallpapers across Mysuru.
          </p>
        </div>
      </section>

      {/* ── Studio & Craftsmanship Showcase ── */}
      <section className="max-w-[1340px] mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl border border-[#B78C4A]/20">
            <Image
              src="/images/hira_studio_fabric_workshop.png"
              alt="Hira Bazaar tailoring studio and fabric showroom in Mysuru"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <span className="text-xs uppercase tracking-[0.16em] text-[#B78C4A] font-semibold">
              Our Philosophy
            </span>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#14231E] leading-tight"
              style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
            >
              Every Window Deserves Bespoke Tailoring
            </h2>
            <p className="text-sm sm:text-base text-[#14231E]/75 leading-relaxed">
              Windows are the soul of any home — they frame your view, dictate your natural light, and define your interior privacy. At Hira Bazaar, we don&apos;t believe in standard, one-size-fits-all treatments.
            </p>
            <p className="text-sm sm:text-base text-[#14231E]/75 leading-relaxed">
              Under Mohammed Ismail&apos;s guidance, our team brings thousands of premium fabric swatches directly to your doorstep. We measure millimeter by millimeter, tailor each panel in our workshop, and install with seamless precision.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#14231E]/10">
              <div className="p-4 rounded-[16px] bg-white/70 border border-[#14231E]/06">
                <span className="block text-2xl font-bold text-[#14231E]">100%</span>
                <span className="text-xs text-[#8FA394]">Custom Measured &amp; Fitted</span>
              </div>
              <div className="p-4 rounded-[16px] bg-white/70 border border-[#14231E]/06">
                <span className="block text-2xl font-bold text-[#14231E]">Mysuru</span>
                <span className="text-xs text-[#8FA394]">Serving All Localities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business & Contact Details ── */}
      <section className="max-w-[1340px] mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-[24px] bg-white/80 border border-[#14231E]/08 shadow-sm flex flex-col justify-between">
            <div>
              <MapPin className="text-[#B78C4A] mb-4" size={28} />
              <h3 className="text-lg font-semibold text-[#14231E] mb-2">Location &amp; Showroom</h3>
              <p className="text-sm text-[#14231E]/75 leading-relaxed mb-4">
                {SHOWROOM_LOCATION.address}
              </p>
            </div>
            <a
              href={SHOWROOM_LOCATION.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#B78C4A] font-semibold hover:underline inline-flex items-center gap-1.5"
            >
              Get Directions on Google Maps →
            </a>
          </div>

          <div className="p-8 rounded-[24px] bg-white/80 border border-[#14231E]/08 shadow-sm flex flex-col justify-between">
            <div>
              <Phone className="text-[#1B7A58] mb-4" size={28} />
              <h3 className="text-lg font-semibold text-[#14231E] mb-2">Direct Contact</h3>
              <p className="text-sm text-[#14231E]/65 leading-relaxed mb-4">
                Speak directly with Mohammed Ismail on WhatsApp, phone, or email for consultations, pricing, and fabric selection.
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-2 border-t border-[#14231E]/08">
              <a
                href="tel:+919739711980"
                className="text-sm font-semibold text-[#14231E] hover:text-[#1B7A58] transition-colors inline-flex items-center gap-2"
              >
                <Phone size={14} className="text-[#1B7A58]" />
                +91 97397 11980
              </a>
              <a
                href={CONTACT_MAILTO}
                className="text-xs font-medium text-[#B78C4A] hover:underline inline-flex items-center gap-2"
              >
                <Mail size={14} className="text-[#B78C4A]" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="p-8 rounded-[24px] bg-white/80 border border-[#14231E]/08 shadow-sm flex flex-col justify-between">
            <div>
              <Award className="text-[#B78C4A] mb-4" size={28} />
              <h3 className="text-lg font-semibold text-[#14231E] mb-2">Specialty Range</h3>
              <p className="text-sm text-[#14231E]/65 leading-relaxed mb-4">
                • Arabian Royal Curtains &amp; Valances<br />
                • PVC &amp; Weather-Proof Blinds<br />
                • Triple-Pinch Pleat Drapes<br />
                • Designer Wallpapers &amp; Installation
              </p>
            </div>
            <span className="text-xs text-[#8FA394] font-medium">Under Mohammed Ismail&apos;s Leadership</span>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="max-w-[1340px] mx-auto px-6">
        <div className="rounded-[28px] p-8 sm:p-14 bg-[#14231E] text-[#F7F3EC] text-center flex flex-col items-center">
          <h3
            className="text-3xl sm:text-4xl font-semibold mb-4 max-w-xl leading-tight"
            style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
          >
            Ready to Plan Your Window Treatments?
          </h3>
          <p className="text-sm sm:text-base text-[#F7F3EC]/70 max-w-lg mb-8 leading-relaxed">
            Contact Mohammed Ismail today to book a free measurement appointment with fabric swatches at your convenience.
          </p>
          <a
            href={WHATSAPP_CONFIG.getLink("Hello Mohammed Ismail, I would like to book a consultation with Hira Bazaar Curtain King.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-medium bg-[#1B7A58] hover:bg-[#125E42] text-white shadow-xl transition-all hover:scale-105"
          >
            <span>Book Free Appointment on WhatsApp</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
