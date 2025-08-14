
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
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Shivesh Tiwari - Data Engineer & Analyst | Modern Portfolio</title>
        <meta name="description" content="Shivesh Tiwari is a passionate Data Engineer and Analyst specializing in transforming raw data into meaningful insights and building scalable data pipelines. Explore my projects, skills, and achievements." />
        <meta name="keywords" content="data engineer, data analyst, python, machine learning, data science, portfolio, Shivesh Tiwari" />
        <meta name="author" content="Shivesh Tiwari" />
        <meta property="og:title" content="Shivesh Tiwari - Data Engineer & Analyst Portfolio" />
        <meta property="og:description" content="Modern portfolio showcasing data engineering projects, analytics skills, and professional achievements." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/a081b5d5-095a-451c-a45b-a9d99e8a8985.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shivesh Tiwari - Data Engineer & Analyst" />
        <meta name="twitter:description" content="Passionate about transforming data into insights. View my portfolio." />
        <link rel="canonical" href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <section id="home" className="relative">
            <Hero />
          </section>
          <section id="about" className="relative">
            <Suspense fallback={<div className="h-40 animate-pulse bg-muted/30" aria-hidden="true" />}> 
              <About />
            </Suspense>
          </section>
          <section id="skills" className="relative">
            <Suspense fallback={<div className="h-60 animate-pulse bg-muted/30" aria-hidden="true" />}> 
              <Skills />
            </Suspense>
          </section>
          <section id="services" className="relative">
            <Suspense fallback={<div className="h-40 animate-pulse bg-muted/30" aria-hidden="true" />}> 
              <Services />
            </Suspense>
          </section>
          <section id="projects" className="relative">
            <Suspense fallback={<div className="h-40 animate-pulse bg-muted/30" aria-hidden="true" />}> 
              <Projects />
            </Suspense>
          </section>
          <section id="experience" className="relative">
            <Suspense fallback={<div className="h-40 animate-pulse bg-muted/30" aria-hidden="true" />}> 
              <Experience />
            </Suspense>
          </section>
          <section id="contact" className="relative">
            <Suspense fallback={<div className="h-40 animate-pulse bg-muted/30" aria-hidden="true" />}> 
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
