
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
      {/* Ultra-Modern Background Elements */}
      <div className="absolute inset-0">
        {/* Cyberpunk floating elements */}
        <div 
          className="absolute w-96 h-96 sm:w-[30rem] sm:h-[30rem] lg:w-[40rem] lg:h-[40rem] bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl animate-float neon-glow"
          style={{
            top: `${15 + mousePosition.y * 0.03}%`,
            left: `${5 + mousePosition.x * 0.02}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] bg-gradient-to-l from-accent/30 to-primary/30 rounded-full blur-3xl animate-float-reverse neon-glow"
          style={{
            bottom: `${10 + mousePosition.y * 0.02}%`,
            right: `${10 + mousePosition.x * 0.015}%`,
            animationDelay: '3s'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-full blur-3xl animate-morph holographic"
          style={{
            top: `${45 + mousePosition.y * 0.015}%`,
            left: `${45 + mousePosition.x * 0.01}%`,
            animationDelay: '6s'
          }}
        ></div>
        
        {/* Futuristic data streams */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] animate-pulse"></div>
        
        {/* Animated tech elements */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/80 rounded-full animate-data-stream" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-secondary/80 rounded-full animate-data-stream" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-accent/80 rounded-full animate-data-stream" style={{ animationDelay: '3s' }}></div>
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
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground leading-tight animate-slide-in-left tracking-tight">
                    Hello, I'm
                  </h1>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-shimmer leading-tight animate-slide-in-right tracking-tight animate-cyberpunk" style={{ animationDelay: '0.3s' }}>
                    Shivesh Tiwari
                  </h2>
                  <div className="w-16 sm:w-20 lg:w-24 xl:w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto lg:mx-0 mt-4 sm:mt-6 rounded-full animate-fade-in-up neon-glow" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground animate-fade-in-up tracking-wide" style={{ animationDelay: '0.9s' }}>
                    <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Data Engineer</span> | 
                    <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Data Analyst</span> | 
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tech Explorer</span>
                  </h3>
                </div>
                
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed text-center lg:text-left animate-fade-in-up px-2 sm:px-0 font-light tracking-wide" style={{ animationDelay: '1.2s' }}>
                  Passionate about <span className="text-primary font-semibold">transforming raw data</span> into meaningful insights and building 
                  <span className="text-secondary font-semibold"> scalable data pipelines</span>. Currently pursuing my degree while building 
                  <span className="text-accent font-semibold">cutting-edge projects</span> and expanding my skills in modern analytics.
                </p>
                
                {/* Ultra-Modern CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center pt-6 sm:pt-8 animate-fade-in-up px-2 sm:px-0" style={{ animationDelay: '1.5s' }}>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-elegant rounded-2xl px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl font-bold transition-all duration-500 hover:scale-110 hover:shadow-hover neon-glow group relative overflow-hidden"
                    onClick={handleDownloadResume}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Download className="mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:animate-bounce relative z-10" />
                    <span className="relative z-10">Download Resume</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto glass-effect border-2 border-primary/50 text-primary hover:bg-primary/20 hover:border-primary rounded-2xl px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl font-bold transition-all duration-500 hover:scale-110 cyber-border relative overflow-hidden group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Get In Touch</span>
                  </Button>
                </div>
                
                {/* Futuristic Social Links */}
                <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 lg:space-x-8 pt-6 sm:pt-8 lg:pt-10 animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
                  {[
                    { href: "https://github.com/shivesh122", icon: Github, label: "GitHub", color: "primary" },
                    { href: "https://linkedin.com/in/shivesh-tiwari-68b79a245", icon: Linkedin, label: "LinkedIn", color: "secondary" },
                    { href: "mailto:nikutiwari70@gmail.com", icon: Mail, label: "Email", color: "accent" }
                  ].map((social, index) => (
                    <a 
                      key={social.label}
                      href={social.href}
                      target={social.label !== "Email" ? "_blank" : undefined}
                      rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 glass-effect rounded-2xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-500 hover:scale-125 transform shadow-card perspective-card animate-neon-glow group relative overflow-hidden"
                      style={{ animationDelay: `${2 + index * 0.2}s` }}
                      aria-label={social.label}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r from-${social.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                      <social.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 relative z-10 group-hover:animate-pulse" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Futuristic Visual Element */}
              <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="relative">
                  {/* Cyberpunk main element */}
                  <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] relative perspective-card">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/40 to-accent/40 rounded-3xl animate-pulse-3d neon-glow"></div>
                    <div className="absolute inset-2 sm:inset-4 bg-gradient-to-tl from-accent/50 via-primary/50 to-secondary/50 rounded-3xl animate-float holographic"></div>
                    <div className="absolute inset-4 sm:inset-8 glass-effect rounded-3xl flex items-center justify-center overflow-hidden border-2 border-primary/30">
                      <img 
                        src="/lovable-uploads/a081b5d5-095a-451c-a45b-a9d99e8a8985.png" 
                        alt="Shivesh Tiwari - Data Engineer & Analyst"
                        className="w-full h-full object-cover rounded-3xl transition-all duration-500 hover:scale-110 filter hover:contrast-125 hover:brightness-110"
                        decoding="async"
                        fetchPriority="high"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-5xl sm:text-7xl lg:text-9xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ display: 'none' }}>
                        ST
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating tech elements with modern design */}
                  <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 glass-effect rounded-2xl flex items-center justify-center shadow-card animate-float neon-glow border border-primary/30" style={{ animationDelay: '2s' }}>
                    <span className="text-2xl sm:text-3xl filter drop-shadow-lg">🐍</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 glass-effect rounded-2xl flex items-center justify-center shadow-card animate-float-reverse neon-glow border border-secondary/30" style={{ animationDelay: '4s' }}>
                    <span className="text-2xl sm:text-3xl filter drop-shadow-lg">📊</span>
                  </div>
                  <div className="absolute top-1/4 -left-6 sm:-left-10 w-14 h-14 sm:w-16 sm:h-16 glass-effect rounded-2xl flex items-center justify-center shadow-card animate-float neon-glow border border-accent/30" style={{ animationDelay: '6s' }}>
                    <span className="text-xl sm:text-2xl filter drop-shadow-lg">⚡</span>
                  </div>
                  <div className="absolute bottom-1/3 -right-6 sm:-right-10 w-12 h-12 sm:w-14 sm:h-14 glass-effect rounded-2xl flex items-center justify-center shadow-card animate-float-reverse neon-glow border border-primary/30" style={{ animationDelay: '8s' }}>
                    <span className="text-lg sm:text-xl filter drop-shadow-lg">💡</span>
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
