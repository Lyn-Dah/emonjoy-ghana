import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import testimonialImage from "../assets/images/testimg.jpg"; // Change this path to your actual image

const testimonials = [
  {
    id: 1,
    text: "Since switching to Emonjoy, I've seen a significant reduction in pest damage and an increase in crop yields.",
    author: "Abena Koomson",
    rating: 5,
  },
  {
    id: 2,
    text: "As a gardener, I'm always looking for ways to keep my plants healthy and pest-free without harming the environment. Emonjoy Pesticide has been a lifesaver!",
    author: "Kwame Adu",
    rating: 4,
  },
  {
    id: 3,
    text: "Eco-friendly and highly effective! My farm has never been healthier!",
    author: "Yaw Mensah",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-[80vh] py-12 px-6 bg-white gap-12">
      
      {/* IMAGE SECTION */}
      <motion.div 
        className="w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={testimonialImage} alt="Happy farmer" className="w-full max-w-md rounded-lg shadow-lg object-cover" />
      </motion.div>

      {/* TESTIMONIALS SECTION */}
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What Our Farmers Say
        </motion.h2>

        <div className="relative w-full max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              className="absolute w-full p-8 rounded-lg shadow-lg bg-white border border-gray-200 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 120 }}
              >
                <Quote className="text-green-500 w-10 h-10" />
              </motion.div>
              <p className="text-lg text-gray-700 italic leading-relaxed">"{testimonials[currentIndex].text}"</p>
              <div className="flex text-yellow-500 text-lg my-3">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.15, type: "spring", stiffness: 120 }}
                  >
                    <Star className="w-5 h-5" />
                  </motion.span>
                ))}
              </div>
              <p className="text-gray-900 font-semibold mt-2">— {testimonials[currentIndex].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-4 mt-8">
          <motion.button
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-400 transition-all shadow-md"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </motion.button>
          <motion.button
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-400 transition-all shadow-md"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex mt-4 gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-green-500" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
