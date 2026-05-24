import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MarketsTicker from "./components/MarketsTicker";
import Philosophy from "./components/Philosophy";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PageCurtain from "./components/PageCurtain";

export default function Home() {
  return (
    <>
      <PageCurtain />
      <MarketsTicker />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
