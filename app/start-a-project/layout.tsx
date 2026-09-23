import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote — Hira Bazaar Curtain King",
  description:
    "Get a free quote for curtains, blinds, Arabian curtains, and wallpapers from Hira Bazaar Curtain King in Mysuru.",
  openGraph: {
    title: "Get a Quote — Hira Bazaar Curtain King",
    description:
      "Get a free quote for curtains, blinds, Arabian curtains, and wallpapers from Hira Bazaar Curtain King in Mysuru.",
    type: "website",
  },
};

export default function StartAProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
