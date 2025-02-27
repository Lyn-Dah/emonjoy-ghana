import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Leaf, ShieldCheck, Users } from "lucide-react";
import productImage from "../assets/images/product4.jpg";

export default function AboutSection() {
  return (
    <section id="product" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          🌿 About Our Product
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Image with Reduced Size */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              src={productImage}
              alt="Organic Pesticide Product"
              className="w-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-xl shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>

          {/* Content Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <CheckCircle className="text-green-600 w-8 h-8" />,
                title: "Effective & Reliable",
                text: "Our organic pesticide is proven to control pests and ensure healthier crops."
              },
              {
                icon: <ShieldCheck className="text-green-600 w-8 h-8" />,
                title: "Safe & Non-Toxic",
                text: "Formulated with natural ingredients, safe for farmers and consumers."
              },
              {
                icon: <Users className="text-green-600 w-8 h-8" />,
                title: "Empowering Farmers",
                text: "Affordable pricing to help farmers boost productivity sustainably."
              },
              {
                icon: <Leaf className="text-green-600 w-8 h-8" />,
                title: "Eco-Friendly",
                text: "Biodegradable and free from harsh chemicals, preserving the environment."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
