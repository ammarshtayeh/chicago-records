import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
