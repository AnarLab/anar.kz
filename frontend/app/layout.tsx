import type { Metadata } from "next";
import "./globals.css";

import "../src/styles/index.css";
import { SiteLayout } from "./site-layout";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:8080"),
  title: {
    default: "Anar.kz — Portfolio",
    template: "%s — Anar.kz",
  },
  description: "Portfolio website for Anar.kz. Custom software development, web and mobile apps, and digital solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Anar.kz — Portfolio",
    description: "Custom software development, web and mobile apps, and digital solutions.",
    url: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

