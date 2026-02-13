import Navbar from "@/components/Navbar";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function BookingPage() {
  return (
    <div className="relative">
      <Navbar />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}
