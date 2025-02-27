import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-20 mt-16 ">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-xl rounded-lg p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Form */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <textarea placeholder="What do you have in mind?" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" rows="4"></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            className="flex flex-col space-y-6 justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700">
              Feel free to reach out to us for any inquiries or assistance. We’re here to help!
            </p>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center space-x-4">
              <FaPhone className="text-green-600 text-xl animate-pulse" />
              <span className="text-gray-800">+123 456 7890</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center space-x-4">
              <FaEnvelope className="text-green-600 text-xl animate-pulse" />
              <span className="text-gray-800">contact@emonjoyghana.com</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-green-600 text-xl animate-pulse" />
              <span className="text-gray-800">123 Street, Ghana</span>
            </motion.div>
            {/* Social Icons */}
            <div className="flex space-x-4 text-green-600 text-2xl mt-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer hover:text-green-700 transition"
                >
                  <Icon />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
