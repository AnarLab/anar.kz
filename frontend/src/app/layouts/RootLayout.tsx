export {};
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {null}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}