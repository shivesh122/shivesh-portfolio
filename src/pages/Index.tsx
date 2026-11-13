import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundAudio from "@/components/BackgroundAudio";
import Marquee from "@/components/Marquee";
import Highlights from "@/components/Highlights";
import ScrollProgress from "@/components/ScrollProgress";
import RecruiterPanel from "@/components/RecruiterPanel";
import { useReveal } from "@/hooks/useReveal";
import { useSpotlight } from "@/hooks/useSpotlight";

const Index = () => {
  useReveal();
  useSpotlight();
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main id="main">
        <Hero />
        <Marquee />
        <Highlights />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <RecruiterPanel />
      <BackgroundAudio />
    </>
  );
};

export default Index;
