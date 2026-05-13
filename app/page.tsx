import CallToAction from "./components/CallToAction";
import Coverage from "./components/Coverage";
import Differentials from "./components/Differentials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Partners from "./components/Partners";
import Process from "./components/Process";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Stats />
        <Partners />
        <Services />
        <Coverage />
        <Process />
        <Differentials />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
