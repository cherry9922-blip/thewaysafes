import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Vehicles from "@/components/Vehicles";
import Pricing from "@/components/Pricing";
import CabServices from "@/components/CabServices";
import AboutUs from "@/components/AboutUs";
import Download from "@/components/Download";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Vehicles />
      <Pricing />
      <CabServices />
      <AboutUs />
      <Download />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
