import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curtain & Blind Services | Hira Bazaar Curtain King Mysuru",
  description:
    "Custom window treatments, Arabian royal curtains, PVC & outdoor weather blinds, textured wallpapers, and free at-home measurements in Mysuru.",
  openGraph: {
    title: "Window Treatment Services — Hira Bazaar Curtain King",
    description:
      "Custom window treatments, Arabian royal curtains, PVC & outdoor weather blinds, textured wallpapers in Mysuru.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
