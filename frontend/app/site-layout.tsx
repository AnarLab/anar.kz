"use client";

import { Header } from "../src/app/components/Header";
import { Footer } from "../src/app/components/Footer";
import { ScrollToTop } from "../src/app/components/ScrollToTop";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

