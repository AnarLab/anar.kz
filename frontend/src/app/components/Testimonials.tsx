import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  {
    id: 1,
    name: "Aigerim Sagyndykova",
    role: "CEO, TechCorp International",
    content: "Anar.kz delivered an exceptional ERP system that transformed our operations. Their team's expertise and dedication were outstanding.",
    rating: 5
  },
  {
    id: 2,
    name: "Nurlan Bekmuratov",
    role: "CTO, Kazakhstan National Bank",
    content: "The mobile banking app they built exceeded all our expectations. Secure, user-friendly, and incredibly reliable. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Saule Omarova",
    role: "Director, Central Asian Retail Group",
    content: "Our e-commerce platform has been a game-changer. Sales tripled in the first year. The team at Anar.kz truly understands business needs.",
    rating: 5
  },
  {
    id: 4,
    name: "Daniyar Kasymov",
    role: "VP Operations, Oil & Gas Analytics Ltd",
    content: "The BI dashboard they developed gives us real-time insights that drive strategic decisions. ROI was achieved within 6 months.",
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  return (
    <div className="relative bg-gray-50 p-8 md:p-12 rounded-lg">
      <Quote className="w-12 h-12 text-blue-600 mb-6 opacity-50" />
      
      <div className="relative h-64 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <div className="mb-6">
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-600">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-8">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white border hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white border hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
