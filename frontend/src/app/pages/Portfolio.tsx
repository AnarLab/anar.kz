"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl mb-4">Our Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Explore our successful projects and see how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Link href={`/portfolio/${project.id}`} className="group block h-full">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="overflow-hidden rounded-lg border hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 text-sm rounded-full">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-sm text-blue-600 mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex items-center text-blue-600">
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate and create something amazing together
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}