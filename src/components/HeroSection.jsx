import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import heroImage1 from "../assets/images/hero10.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage1}
          alt="Hero Background"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-green-500">EMONJOY Ghana</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-300 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Revolutionizing Sustainable Farming with Edible Organic Pesticide and Fungicide.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="https://paystack.shop/emonjoy-ghana"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            Shop Now
          </a>
          
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-10 flex justify-center animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <FaArrowDown className="text-white text-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

