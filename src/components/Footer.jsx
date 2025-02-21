export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center px-4">
          <div className="mb-6">
            <h3 className="text-xl font-bold">Alien Seild</h3>
            <p className="text-gray-400 mt-2">
              A paragraph in text that can understand this document.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#services" className="hover:text-gray-400">Services</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          <div className="text-gray-400">
            <p>info@info.com</p>
            <p>+233 123 456 789</p>
            <p>© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }