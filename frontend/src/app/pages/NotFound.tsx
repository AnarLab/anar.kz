"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-9xl text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl mb-4">Page Not Found</h2>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Home className="w-5 h-5 mr-2" />
        Back to Home
      </Link>
    </div>
  );
}
