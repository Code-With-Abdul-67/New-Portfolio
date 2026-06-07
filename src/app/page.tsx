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
    <main style={{ position: "relative", minHeight: "100vh", background: "transparent" }}>
      {/* Ambient glass background blur blobs */}
      <div className="blob blob-purple" style={{ top: "5%", left: "-10%", width: "600px", height: "600px" }} />
      <div className="blob blob-blue" style={{ top: "35%", right: "-10%", width: "500px", height: "500px" }} />
      <div className="blob blob-yellow" style={{ bottom: "20%", left: "5%", width: "450px", height: "450px" }} />
      <div className="blob blob-purple" style={{ bottom: "5%", right: "5%", width: "550px", height: "550px" }} />

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
