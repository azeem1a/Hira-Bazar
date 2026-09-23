import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Showroom & Workshop | Hira Bazaar Curtain King Mysuru",
  description:
    "Visit our drapery showroom in Mandi Mohalla, Mysuru. Browse premium fabrics, ripple-pleats, valance samples, and consult with Mohammed Ismail.",
  openGraph: {
    title: "Our Showroom & Workshop — Hira Bazaar Curtain King",
    description:
      "Visit our drapery showroom in Mandi Mohalla, Mysuru. Browse premium fabrics, ripple-pleats, valance samples, and consult with Mohammed Ismail.",
    type: "website",
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
