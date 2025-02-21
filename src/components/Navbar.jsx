export default function Navbar() {
    return (
      <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">YAI Project</div>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#company" className="hover:text-gray-400">Company</a></li>
            <li><a href="#services" className="hover:text-gray-400">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    );
  }