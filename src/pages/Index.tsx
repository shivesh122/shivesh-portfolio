
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Suspense, lazy } from "react";

const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Services = lazy(() => import("@/components/Services"));
const Projects = lazy(() => import("@/components/Projects"));
const Experience = lazy(() => import("@/components/Experience"));
const Contact = lazy(() => import("@/components/Contact"));
const BackgroundAudio = lazy(() => import("@/components/BackgroundAudio"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="home" className="relative">
        <Hero />
      </div>
      <div id="about" className="relative -mt-1">
        <Suspense fallback={<div className="h-40 animate-pulse bg-muted/30" aria-hidden="true" />}> 
          <About />
        </Suspense>
      </div>
      <div id="skills" className="relative -mt-1">
        <Suspense fallback={<div className="h-60 animate-pulse bg-muted/30" aria-hidden="true" />}> 
          <Skills />
        </Suspense>
      </div>
      <div id="services" className="relative -mt-1">
        <Suspense fallback={<div className="h-40 animate-pulse bg-muted/30" aria-hidden="true" />}> 
          <Services />
        </Suspense>
      </div>
      <div id="projects" className="relative -mt-1">
        <Suspense fallback={<div className="h-40 animate-pulse bg-muted/30" aria-hidden="true" />}> 
          <Projects />
        </Suspense>
      </div>
      <div id="experience" className="relative -mt-1">
        <Suspense fallback={<div className="h-40 animate-pulse bg-muted/30" aria-hidden="true" />}> 
          <Experience />
        </Suspense>
      </div>
      <div id="contact" className="relative -mt-1">
        <Suspense fallback={<div className="h-40 animate-pulse bg-muted/30" aria-hidden="true" />}> 
          <Contact />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <BackgroundAudio />
      </Suspense>
    </div>
  );
};

export default Index;
