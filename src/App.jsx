
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import InnovatorSection from "./components/InnovatorSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="product"> 
        <AboutSection/> 
      </section>
      <section id="about">
        <InnovatorSection />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
