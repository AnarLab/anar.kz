import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
              <span className="text-white text-xl font-bold">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Anar.kz</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className={`transition-colors ${
                isActive("/portfolio") || pathname.startsWith("/portfolio/")
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className={`transition-colors ${
                isActive("/blog") || pathname.startsWith("/blog/")
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`transition-colors ${
                  isActive("/")
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className={`transition-colors ${
                  isActive("/portfolio") || pathname.startsWith("/portfolio/")
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className={`transition-colors ${
                  isActive("/blog") || pathname.startsWith("/blog/")
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}