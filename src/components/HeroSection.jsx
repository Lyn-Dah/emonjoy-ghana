export default function HeroSection() {
    return (
      <section id="home" className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to YAI Project
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Innovative solutions for a better future.
          </p>
          <a
            href="#about"
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>
    );
  }