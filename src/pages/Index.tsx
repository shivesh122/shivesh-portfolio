
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import BackgroundAudio from "@/components/BackgroundAudio";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="home" className="relative">
        <Hero />
      </div>
      <div id="about" className="relative -mt-1">
        <About />
      </div>
      <div id="skills" className="relative -mt-1">
        <Skills />
      </div>
      <div id="services" className="relative -mt-1">
        <Services />
      </div>
      <div id="projects" className="relative -mt-1">
        <Projects />
      </div>
      <div id="experience" className="relative -mt-1">
        <Experience />
      </div>
      <div id="contact" className="relative -mt-1">
        <Contact />
      </div>
      <BackgroundAudio />
    </div>
  );
};

export default Index;
