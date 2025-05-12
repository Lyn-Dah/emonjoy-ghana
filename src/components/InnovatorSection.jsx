import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Leaf, Users } from "lucide-react";
import innovator1 from "../assets/images/simon.jpg";
import innovator2 from "../assets/images/joy.jpg";
import innovator3 from "../assets/images/enoch.jpg";

const innovators = [
  {
    name: "Simon Etornam Felitse",
    role: "  IT & Operations Lead",
    image: innovator1,
    bio: "A visionary leader  with Computer Science background, committed to revolutionizing sustainable farming in Ghana."
  },
  {
    name: "Agnes Joy Aryee",
    role: "Marketing and Sales Lead ",
    image: innovator2,
    bio: "A Background in Agribusiness, passionate about creating awareness and driving sales."
  },
  {
    name: "Enoch Mbawin Alale",
    role: "Team Lead",
    image: innovator3,
    bio: " An Industrial Chemistry Background. Ensuring smooth operations and impactful execution of our sustainable solutions."
  }
];

export default function InnovatorSection() {
  return (
    <section id="innovator" className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
                  className="text-4xl font-extrabold text-gray-800 mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                🌿Meet Our Innovators
                </motion.h2>
        {/* Write-up Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto mt-6">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 flex items-center space-x-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Lightbulb className="text-green-500 w-10 h-10" />
            <p className="text-gray-700 text-lg leading-relaxed">
              At <span className="font-semibold text-green-700">EMONJOY Ghana</span>, we combine expertise in agriculture, technology, and research to develop eco-friendly solutions that empower farmers.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 flex items-center space-x-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Leaf className="text-green-500 w-10 h-10" />
            <p className="text-gray-700 text-lg leading-relaxed">
              We strive to make sustainable farming accessible, ensuring healthier crops and a safer environment with organic, effective pesticides.
            </p>
          </motion.div>
        </div>

        {/* Innovator Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {innovators.map((innovator, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-xl rounded-lg overflow-hidden p-6 transform transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <img
                src={innovator.image}
                alt={innovator.name}
                className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full object-cover mb-4 border-4 border-green-500"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{innovator.name}</h3>
              <p className="text-green-600 font-medium text-sm sm:text-base">{innovator.role}</p>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">{innovator.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
