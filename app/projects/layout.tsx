import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Complete Gallery — 17 Projects | Hira Bazaar Curtain King Mysuru",
  description:
    "Explore 17 completed window treatments, Arabian drapes, PVC blinds, and wallpapers installed across Mysuru by Mohammed Ismail and team.",
  openGraph: {
    title: "The Complete Gallery — Hira Bazaar Curtain King",
    description:
      "Explore 17 completed window treatments, Arabian drapes, PVC blinds, and wallpapers installed across Mysuru.",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
