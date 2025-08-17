
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
        <title>Shivesh Tiwari - Data Analyst | Data Science Expert | Business Intelligence Professional</title>
        <meta name="description" content="Shivesh Tiwari - Professional Data Analyst specializing in data science, business intelligence, and advanced analytics. Expert in Python, SQL, Power BI, machine learning, and data visualization. Transforming complex data into actionable business insights." />
        <meta name="keywords" content="data analyst, data science, business intelligence, python, SQL, power bi, machine learning, data visualization, business analytics, statistical analysis, predictive modeling, dashboard development, ETL, data mining" />
        <meta name="author" content="Shivesh Tiwari" />
        <meta property="og:title" content="Shivesh Tiwari - Expert Data Analyst & Data Science Professional" />
        <meta property="og:description" content="Professional Data Analyst with expertise in data science and business intelligence. Transforming data into strategic business insights through advanced analytics and visualization." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/a081b5d5-095a-451c-a45b-a9d99e8a8985.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shivesh Tiwari - Data Professional Seeking Opportunities" />
        <meta name="twitter:description" content="Final year student passionate about data engineering and analytics. Ready to contribute to your team." />
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
            <Suspense fallback={<div className="h-32 animate-pulse bg-muted/20 rounded-lg mx-4" aria-hidden="true" />}> 
              <About />
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
