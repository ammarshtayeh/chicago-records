import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="relative">
      <Navbar />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
