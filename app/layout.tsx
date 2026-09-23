import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://hirabazaarcurtainking.com"
  ),
  title: "Hira Bazaar Curtain King — Premium Curtains & Wallpapers in Mysuru",
  description:
    "Your one-stop destination for premium curtains, elegant wallpapers, and custom window treatments in Mysuru. Led by Mohammed Ismail.",
  keywords: [
    "curtains mysuru",
    "arabian curtains",
    "pvc blinds mysuru",
    "weather resistant outdoor blinds",
    "wallpapers mysuru",
    "custom window treatments",
    "hira bazaar curtain king",
    "mohammed ismail curtains",
  ],
  authors: [{ name: "Mohammed Ismail" }],
  creator: "Mohammed Ismail",
  publisher: "Hira Bazaar Curtain King",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Hira Bazaar Curtain King — Premium Curtains & Wallpapers in Mysuru",
    description:
      "Your one-stop destination for premium curtains, elegant wallpapers, and custom window treatments in Mysuru.",
    siteName: "Hira Bazaar Curtain King",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/hira_hero_luxury_living.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury curtains and window treatments by Hira Bazaar Curtain King, Mysuru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hira Bazaar Curtain King — Premium Curtains & Wallpapers in Mysuru",
    description:
      "Your one-stop destination for premium curtains, elegant wallpapers, and custom window treatments in Mysuru.",
    images: ["/images/hira_hero_luxury_living.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeGoodsStore",
  "name": "Hira Bazaar Curtain King",
  "description": "Premium custom curtains, Arabian royal drapes, PVC blinds, and luxury wallpapers in Mysuru.",
  "image": "/images/hira_hero_luxury_living.jpg",
  "telephone": "+91 97397 11980",
  "email": "hirabazaar980@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ram Mandir, 3088, Kali Temple St, Fazeel Masjid. Maratha, Mandi Mohalla",
    "addressLocality": "Mysuru",
    "addressRegion": "Karnataka",
    "postalCode": "570001",
    "addressCountry": "IN",
  },
  "priceRange": "₹₹",
  "founder": {
    "@type": "Person",
    "name": "Mohammed Ismail",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
