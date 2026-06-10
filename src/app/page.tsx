import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; 
import Works from "@/components/Works";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "transparent",
      }}
    >
      <Navbar />
      <Hero />
      <Works />
      <Services />
      <Experience />
      <TechStack />
      <Capabilities />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
