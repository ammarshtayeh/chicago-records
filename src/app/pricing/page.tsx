import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-28">
        <Pricing />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
