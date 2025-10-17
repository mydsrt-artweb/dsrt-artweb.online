import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Showcase from "../components/Showcase";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Showcase />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
