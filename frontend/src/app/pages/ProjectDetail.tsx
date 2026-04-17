"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock, CheckCircle } from "lucide-react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";

export function ProjectDetail({ id }: { id: string }) {
  const router = useRouter();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl mb-4">Project Not Found</h1>
        <Link href="/portfolio" className="text-blue-600 hover:underline">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Back Button */}
      <div className="bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <span className="px-3 py-1 bg-blue-600 text-sm rounded-full">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">{project.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-96 md:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: User, label: "Client", value: project.client },
              { icon: Clock, label: "Duration", value: project.duration },
              { icon: Calendar, label: "Year", value: project.year }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow"
                >
                  <div className="flex items-center mb-2">
                    <Icon className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">{item.label}</span>
                  </div>
                  <p className="text-lg">{item.value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl mb-4">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl mb-4">Our Solution</h2>
              <p className="text-gray-700 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl mb-8">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl mb-4">Interested in Similar Results?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business succeed
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}