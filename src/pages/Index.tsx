
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Suspense, lazy } from "react";

const About = lazy(() => import("@/components/About"));
const Admission = lazy(() => import("@/components/Admission"));
const Skills = lazy(() => import("@/components/Skills"));
const Services = lazy(() => import("@/components/Services"));
const Projects = lazy(() => import("@/components/Projects"));
const Experience = lazy(() => import("@/components/Experience"));
const Contact = lazy(() => import("@/components/Contact"));
const BackgroundAudio = lazy(() => import("@/components/BackgroundAudio"));

const Index = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <section id="home" className="relative">
            <Hero />
          </section>
          <section id="about" className="relative">
            <Suspense fallback={<div className="h-32 animate-pulse bg-muted/20 rounded-lg mx-4" aria-hidden="true" />}> 
              <About />
            </Suspense>
          </section>
          <section id="admission" className="relative">
            <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20 rounded-lg mx-4" aria-hidden="true" />}> 
              <Admission />
            </Suspense>
          </section>
          <section id="skills" className="relative">
            <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20 rounded-lg mx-4" aria-hidden="true" />}> 
              <Skills />
            </Suspense>
          </section>
          <section id="services" className="relative">
            <Suspense fallback={<div className="h-32 animate-pulse bg-muted/20 rounded-lg mx-4" aria-hidden="true" />}> 
              <Services />
            </Suspense>
          </section>
          <section id="projects" className="relative">
            <Suspense fallback={<div className="h-32 animate-pulse bg-muted/20 rounded-lg mx-4" aria-hidden="true" />}> 
              <Projects />
            </Suspense>
          </section>
          <section id="experience" className="relative">
            <Suspense fallback={<div className="h-32 animate-pulse bg-muted/20 rounded-lg mx-4" aria-hidden="true" />}> 
              <Experience />
            </Suspense>
          </section>
          <section id="contact" className="relative">
            <Suspense fallback={<div className="h-32 animate-pulse bg-muted/20 rounded-lg mx-4" aria-hidden="true" />}> 
              <Contact />
            </Suspense>
          </section>
        </main>
        <Suspense fallback={null}>
          <BackgroundAudio />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
