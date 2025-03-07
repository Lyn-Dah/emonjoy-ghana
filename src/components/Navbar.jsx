import React, { useState } from "react";
import { Link } from "react-scroll"; 
import logo from "../assets/images/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {[
            { name: "Home", id: "home" },
            { name: "Our Product", id: "product" },
            { name: "About Us", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={800}
                spy={true}
                offset={-70}
                activeClass="text-green-500 font-bold border-b-2 border-green-500"
                className="cursor-pointer hover:text-gray-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg absolute w-full left-0 top-16">
          <ul className="space-y-2 p-4">
            {[
              { name: "Home", id: "home" },
              { name: "Our Product", id: "product" },
              { name: "About Us", id: "about" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-70}
                  activeClass="text-green-500 font-bold border-b-2 border-green-500"
                  onClick={closeMenu} // Close menu on click
                  className="block cursor-pointer text-white hover:text-gray-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
