export default function ContactSection() {
    return (
      <section id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded text-gray-800"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded text-gray-800"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 rounded text-gray-800"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }