import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import InnovatorSection from "./components/InnovatorSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <InnovatorSection />
      <ContactSection />
      <Footer />
    </div>
  );
}