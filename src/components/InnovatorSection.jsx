import React from "react";
import { motion } from "framer-motion";
import innovator1 from "../assets/images/simon.jpg";
import innovator2 from "../assets/images/joy.jpg";
import innovator3 from "../assets/images/enoch.jpg";

const innovators = [
  {
    name: "Simon Etornam Felitse",
    role: "Innovator & Team Lead",
    image: innovator1,
    bio: "A visionary leader committed to revolutionizing sustainable farming in Ghana."
  },
  {
    name: "Agnes Joy Aryee",
    role: "Innovator & Researcher",
    image: innovator2,
    bio: "Bringing cutting-edge research to develop eco-friendly and effective pesticides."
  },
  {
    name: "Enoch Alale",
    role: "Innovator & Researcher",
    image: innovator3,
    bio: "Ensuring smooth operations and impactful execution of our sustainable solutions."
  }
];

export default function InnovatorSection() {
  return (
    <section id="innovator" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet Our Innovators
          
        </motion.h2>

        {/* Write-up Container */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-3xl mx-auto mb-10 border-l-4 border-green-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At <span className="font-semibold text-green-700">Emonjoy Ghana</span>, our team is driven by a shared passion for sustainability and innovation. 
            We bring together expertise in research, agriculture, and technology to create eco-friendly solutions that empower farmers and protect the environment. 
            With a commitment to excellence, we strive to revolutionize modern farming by making organic and effective pesticides accessible to all. 
            <span className="block mt-2 font-medium text-gray-900">Meet the minds behind our mission!</span>
          </p>
        </motion.div>

        {/* Innovator Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {innovators.map((innovator, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 transform transition-all duration-300 hover:scale-105"
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
