import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Portfolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
