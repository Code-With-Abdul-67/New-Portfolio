import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#000000" }}>
      <Navbar />
      <Hero />
      <Works />
      <Services />
      <Experience />
      <Capabilities />
      <Contact />
      <Footer />
    </main>
  );
}
