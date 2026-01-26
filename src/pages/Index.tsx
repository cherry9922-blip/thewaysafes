import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Stickers from "@/components/Stickers";
import CabServices from "@/components/CabServices";
import Download from "@/components/Download";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Stickers />
      <CabServices />
      <Download />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
