import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-3xl font-bold tracking-wide text-white">
              EMONJOY GHANA
            </h3>
            <p className="text-gray-400 mt-3 leading-relaxed">
            Revolutionizing Sustainable Farming with Organic Pesticides.
            </p>
            <p className="text-gray-500 mt-2">
              &copy; {new Date().getFullYear()} Emonjoy Ghana. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-semibold text-white">Quick Links</h4>
            <nav className="mt-4 space-y-2">
              {[
                { name: "Home", id: "home" },
                { name: "About Us", id: "about" }, 
                { name: " Our Product", id: "product" }, 
                { name: "Testimonials", id: "testimonials" }, 
                { name: "Contact", id: "contact" }
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info & Social Media */}
          <div>
            <h4 className="text-2xl font-semibold text-white">Contact Us</h4>
            <p className="text-gray-400 mt-2">
              Email:{" "}
              <a
                href="mailto:info@emonjoyghana.com"
                className="text-green-600 hover:underline"
              >
                info@emonjoyghana.com
              </a>
            </p>
            <p className="text-gray-400 mt-2">
              Phone:{" "}
              <a
                href="tel:+233123456789"
                className="text-green-600 hover:underline"
              >
                +233 123 456 789
              </a>
            </p>

            {/* Social Media */}
            <div className="flex justify-center md:justify-start mt-4 space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-transform transform hover:scale-110"
              >
                <FaFacebookF size={24} />
              </a>
              <a
        href="https://wa.me/233123456789" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-transform transform hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          Designed with ❤️ by Emonjoy Ghana Team
        </div>
      </div>
    </footer>
  );
}

export default Footer;
