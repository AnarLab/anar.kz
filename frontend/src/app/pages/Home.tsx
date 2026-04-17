"use client";

import Link from "next/link";
import { ArrowRight, Code, Smartphone, BarChart, Palette, Users, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { Testimonials } from "../components/Testimonials";
import { motion } from "motion/react";

export function Home() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android."
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with advanced analytics solutions."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: Users,
      title: "Enterprise Solutions",
      description: "Scalable systems designed to grow with your business."
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge technology solutions."
    }
  ];

  const stats = [
    { value: 100, label: "Projects Completed", suffix: "+" },
    { value: 50, label: "Happy Clients", suffix: "+" },
    { value: 8, label: "Years Experience", suffix: "+" },
    { value: 30, label: "Team Members", suffix: "+" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl mb-6">
              Transforming Ideas Into Digital Reality
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              We are a leading IT company in Kazakhstan, specializing in custom software development, mobile apps, and digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl text-blue-600 mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </motion.div>
          
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}