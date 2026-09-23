import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Hira Bazaar Curtain King",
  description:
    "Tips, inspiration, and insights on curtains, blinds, and window styling from Hira Bazaar Curtain King, Mysuru.",
  openGraph: {
    title: "Blog — Hira Bazaar Curtain King",
    description:
      "Tips, inspiration, and insights on curtains, blinds, and window styling from Hira Bazaar Curtain King, Mysuru.",
    type: "website",
  },
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
