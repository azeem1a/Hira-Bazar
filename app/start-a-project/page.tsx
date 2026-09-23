import Link from "next/link";
import type { Metadata } from "next";
import { WHATSAPP_CHAT_URL } from "@/config/whatsapp";
import { SHOWROOM_LOCATION } from "@/config/location";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/config/contact";

export const metadata: Metadata = {
  title: "Get a Quote — Hira Bazaar Curtain King",
  description: "Get a free quote for curtains, blinds, Arabian curtains, and wallpapers from Hira Bazaar Curtain King in Mysuru.",
};

export default function StartAProjectPage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        backgroundColor: "#F7F3EC",
        fontFamily: "system-ui, sans-serif",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8FA394" }}>
        Get in Touch
      </p>
      <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 600, color: "#14231E", lineHeight: 1.1, margin: 0 }}>
        Get a Free Quote
      </h1>
      <p style={{ fontSize: "16px", color: "rgba(20,35,30,0.55)", maxWidth: "420px", lineHeight: 1.7, margin: 0 }}>
        Connect directly with Hira Bazaar on WhatsApp to share details about your space, ask about curtains, blinds or wallpapers, and get your free quote.
      </p>
      <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href={WHATSAPP_CHAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="start-conversation-btn"
          style={{
            display: "inline-block",
            padding: "14px 30px",
            borderRadius: "999px",
            backgroundColor: "#14231E",
            color: "#F7F3EC",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.05em",
            boxShadow: "0 4px 18px rgba(20,35,30,0.18)",
          }}
        >
          Start a Conversation on WhatsApp →
        </a>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            borderRadius: "999px",
            border: "1px solid rgba(20,35,30,0.2)",
            backgroundColor: "transparent",
            color: "#14231E",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          ← Back to Home
        </Link>
      </div>

      <div style={{ marginTop: "12px", maxWidth: "480px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <p style={{ fontSize: "13px", color: "rgba(20,35,30,0.65)", margin: 0 }}>
          Or email us directly at{" "}
          <a
            href={CONTACT_MAILTO}
            style={{
              color: "#14231E",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            {CONTACT_EMAIL}
          </a>
        </p>

        <p style={{ fontSize: "12px", color: "rgba(20,35,30,0.5)", margin: 0, marginTop: "6px" }}>
          Prefer to visit our showroom in person?
        </p>
        <a
          href={SHOWROOM_LOCATION.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "13px",
            color: "#14231E",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            fontWeight: 500,
            lineHeight: 1.6,
          }}
        >
          📍 {SHOWROOM_LOCATION.address}
        </a>
      </div>
    </main>
  );
}
