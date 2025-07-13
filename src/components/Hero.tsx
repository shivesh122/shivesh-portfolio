import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Download, ChevronDown } from "lucide-react";
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
    window.open('https://drive.google.com/file/d/1RI9Zm89wp2HE-8fz6lyvzaOEv1YruL5A/view?usp=drivesdk', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Floating geometric shapes */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"
          style={{
            top: `${20 + mousePosition.y * 0.02}%`,
            left: `${10 + mousePosition.x * 0.01}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-3xl animate-float-reverse"
          style={{
            bottom: `${15 + mousePosition.y * 0.015}%`,
            right: `${15 + mousePosition.x * 0.01}%`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl animate-morph"
          style={{
            top: `${50 + mousePosition.y * 0.01}%`,
            left: `${50 + mousePosition.x * 0.005}%`,
            animationDelay: '4s'
          }}
        ></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,109,89,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,109,89,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h1 className="responsive-heading font-bold text-primary leading-tight animate-slide-in-left">
                      Hello, I'm
                    </h1>
                    <h2 className="responsive-heading font-bold text-shimmer leading-tight animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                      Shivesh Tiwari
                    </h2>
                    <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto lg:mx-0 mt-4 rounded-full animate-fade-in-up" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  
                  <h3 className="responsive-subheading font-medium text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    Data Engineer | Data Analyst | Tech Explorer
                  </h3>
                </div>
                
                <p className="responsive-body text-muted-foreground max-w-2xl leading-relaxed text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  Passionate about transforming raw data into meaningful insights and building scalable data pipelines. 
                  Currently pursuing my degree while building practical projects and expanding my skills in modern analytics.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant rounded-xl px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-hover group"
                    onClick={handleDownloadResume}
                  >
                    <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 gradient-border"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get In Touch
                  </Button>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 pt-6 sm:pt-8 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
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
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 transform shadow-card card-hover-effect animate-glow"
                      style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Visual Element with Image */}
              <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="relative">
                  {/* Main decorative element */}
                  <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full animate-pulse-3d"></div>
                    <div className="absolute inset-4 bg-gradient-to-tl from-accent/30 via-primary/30 to-secondary/30 rounded-full animate-float"></div>
                    <div className="absolute inset-8 glass-effect rounded-full flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://i.ibb.co/1JbxXW2/your-image.jpg" 
                        alt="Shivesh Tiwari"
                        className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          // Fallback to ST text if image fails to load
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl font-bold text-primary/20" style={{ display: 'none' }}>
                        ST
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating tech icons */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-card rounded-full flex items-center justify-center shadow-card animate-float" style={{ animationDelay: '1s' }}>
                    <span className="text-2xl">🐍</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-card rounded-full flex items-center justify-center shadow-card animate-float-reverse" style={{ animationDelay: '2s' }}>
                    <span className="text-2xl">📊</span>
                  </div>
                  <div className="absolute top-1/4 -left-8 w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-card animate-float" style={{ animationDelay: '3s' }}>
                    <span className="text-xl">⚡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs sm:text-sm text-muted-foreground font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
          <ChevronDown className="h-4 w-4 text-primary/50 animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
