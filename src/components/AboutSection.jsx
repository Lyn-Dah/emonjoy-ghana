import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, CheckCircle, Leaf, ShieldCheck, Users } from "lucide-react";
import productImage1 from "../assets/images/product5.jpg";
import productImage2 from "../assets/images/product6.jpg";
import productImage3 from "../assets/images/product7.jpg";
import productImage4 from "../assets/images/product8.jpg";

const products = [
  {
    id: 1,
    image: productImage1,
    name: "250ml",
    price: "120ghc",
    link: "https://paystack.com/buy/organic-pesticide-mjgjmp",
  },
  {
    id: 2,
    image: productImage2,
    name: "500ml",
    price: "230ghc",
    link: "https://paystack.com/buy/eco-friendly-pest-repellent-fzrdxc",
  },
  {
    id: 3,
    image: productImage3,
    name: "1 litre",
    price: "500ghc",
    link: "https://paystack.com/buy/biodegradable-insect-killer-pebydx",
  },
  {
    id: 4,
    image: productImage4,
    name: "1.5 litre",
    price: "600ghc",
    link: "https://paystack.com/buy/natural-plant-protector-pdbocn",
  },
];

export default function ProductSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          🌿 Our Premium Organic Products
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
        Our products are 100% Organic, Safe for your health and your plants. 
        Also highly effective in keeping pests and diseases away from your crops. 
        Enjoy Chemical-free farming experience while protecting the environment and human health.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform transition hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img src={product.image} alt={product.name} className="w-full max-w-[200px] h-auto rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-green-600 font-bold text-xl my-2">{product.price}</p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
              >
                <ShoppingCart className="w-5 h-5 mr-2" /> Buy Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Product Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[ 
            { icon: <CheckCircle className="text-green-600 w-8 h-8" />, title: "Effective & Reliable", text: "Proven to control pests and ensure healthier crops." },
            { icon: <ShieldCheck className="text-green-600 w-8 h-8" />, title: "Safe & Non-Toxic", text: "Formulated with natural ingredients, safe for farmers and consumers." },
            { icon: <Users className="text-green-600 w-8 h-8" />, title: "Empowering Farmers", text: "Affordable pricing to help farmers boost productivity sustainably." },
            { icon: <Leaf className="text-green-600 w-8 h-8" />, title: "Eco-Friendly", text: "Biodegradable and free from harsh chemicals, preserving the environment." },
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
    </section>
  );
}
