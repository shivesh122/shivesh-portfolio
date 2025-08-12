
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Download } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1F90xwqi47XZPuNururSnH1ChfqcYl32T/view?usp=drivesdk', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden pb-0 mb-0">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Floating geometric shapes */}
        <div 
          className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"
          style={{
            top: `${20 + mousePosition.y * 0.02}%`,
            left: `${10 + mousePosition.x * 0.01}%`,
          }}
        ></div>
        <div 
          className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-3xl animate-float-reverse"
          style={{
            bottom: `${15 + mousePosition.y * 0.015}%`,
            right: `${15 + mousePosition.x * 0.01}%`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute w-48 h-48 sm:w-60 sm:h-60 lg:w-64 lg:h-64 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl animate-morph"
          style={{
            top: `${50 + mousePosition.y * 0.01}%`,
            left: `${50 + mousePosition.x * 0.005}%`,
            animationDelay: '4s'
          }}
        ></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,109,89,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,109,89,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh] lg:min-h-[85vh]">
              {/* Text Content */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1 px-2 sm:px-0">
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight animate-slide-in-left">
                      Hello, I'm
                    </h1>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-shimmer leading-tight animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                      Shivesh Tiwari
                    </h2>
                    <div className="w-12 sm:w-16 lg:w-20 xl:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto lg:mx-0 mt-3 sm:mt-4 rounded-full animate-fade-in-up" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    Data Engineer | Data Analyst | Tech Explorer
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed text-center lg:text-left animate-fade-in-up px-2 sm:px-0" style={{ animationDelay: '0.8s' }}>
                  Passionate about transforming raw data into meaningful insights and building scalable data pipelines. 
                  Currently pursuing my degree while building practical projects and expanding my skills in modern analytics.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center pt-3 sm:pt-4 animate-fade-in-up px-2 sm:px-0" style={{ animationDelay: '1s' }}>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant rounded-xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-hover group"
                    onClick={handleDownloadResume}
                  >
                    <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 gradient-border"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get In Touch
                  </Button>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 lg:space-x-6 pt-4 sm:pt-6 lg:pt-8 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                  {[
                    { href: "https://github.com/shivesh122", icon: Github, label: "GitHub" },
                    { href: "https://linkedin.com/in/shivesh-tiwari-68b79a245", icon: Linkedin, label: "LinkedIn" },
                    { href: "mailto:nikutiwari70@gmail.com", icon: Mail, label: "Email" }
                  ].map((social, index) => (
                    <a 
                      key={social.label}
                      href={social.href}
                      target={social.label !== "Email" ? "_blank" : undefined}
                      rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 transform shadow-card card-hover-effect animate-glow"
                      style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Visual Element with Image */}
              <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="relative">
                  {/* Main decorative element */}
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full animate-pulse-3d"></div>
                    <div className="absolute inset-2 sm:inset-4 bg-gradient-to-tl from-accent/30 via-primary/30 to-secondary/30 rounded-full animate-float"></div>
                    <div className="absolute inset-4 sm:inset-8 glass-effect rounded-full flex items-center justify-center overflow-hidden">
                      <img 
                        src="/lovable-uploads/a081b5d5-095a-451c-a45b-a9d99e8a8985.png" 
                        alt="Shivesh Tiwari"
                        className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105"
                        decoding="async"
                        fetchPriority="high"
                        onError={(e) => {
                          // Fallback to ST text if image fails to load
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-4xl sm:text-6xl lg:text-8xl font-bold text-primary/20" style={{ display: 'none' }}>
                        ST
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating tech icons */}
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-card rounded-full flex items-center justify-center shadow-card animate-float" style={{ animationDelay: '1s' }}>
                    <span className="text-lg sm:text-2xl">🐍</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-card rounded-full flex items-center justify-center shadow-card animate-float-reverse" style={{ animationDelay: '2s' }}>
                    <span className="text-lg sm:text-2xl">📊</span>
                  </div>
                  <div className="absolute top-1/4 -left-4 sm:-left-8 w-10 h-10 sm:w-12 sm:h-12 bg-card rounded-full flex items-center justify-center shadow-card animate-float" style={{ animationDelay: '3s' }}>
                    <span className="text-base sm:text-xl">⚡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
