
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Download } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1F90xwqi47XZPuNururSnH1ChfqcYl32T/view?usp=drivesdk', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/15 rounded-full blur-xl animate-float" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-float" style={{ animationDelay: '-4s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[90vh]">
              {/* Text Content */}
              <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="space-y-6">
                    <h1 className="text-display text-foreground leading-tight animate-slide-in-left">
                      Hello, I'm <span className="gradient-text animate-shimmer shimmer-effect">Shivesh Tiwari</span>
                    </h1>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto lg:mx-0 rounded-full animate-fade-in-up glow-effect" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                  
                  <h2 className="responsive-subheading accent-gradient animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    Data Engineer | Data Analyst | Tech Explorer
                  </h2>
                </div>
                
                <p className="responsive-body text-muted-foreground max-w-2xl leading-relaxed text-center lg:text-left animate-slide-up" style={{ animationDelay: '0.7s' }}>
                  Passionate about <span className="text-primary font-semibold">transforming raw data</span> into meaningful insights and building 
                  <span className="text-accent font-semibold"> scalable data pipelines</span>. 
                  Currently pursuing my degree while building practical projects and expanding my skills in modern analytics.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-scale-in" style={{ animationDelay: '0.9s' }}>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground shadow-elegant px-10 py-4 font-semibold transition-all duration-500 magnetic-hover glow-effect focus-visible text-lg"
                    onClick={handleDownloadResume}
                  >
                    <Download className="mr-3 h-6 w-6" />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto glass-effect border-primary/30 text-primary hover:bg-primary/10 hover:border-primary px-10 py-4 font-semibold transition-all duration-500 magnetic-hover focus-visible text-lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get In Touch
                  </Button>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-6 pt-12 animate-scale-in" style={{ animationDelay: '1.1s' }}>
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
                      className="w-16 h-16 glass-effect rounded-2xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-500 shadow-card magnetic-hover focus-visible relative group overflow-hidden"
                      style={{ animationDelay: `${1.3 + index * 0.15}s` }}
                      aria-label={social.label}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <social.icon className="h-7 w-7 relative z-10" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Professional Image */}
              <div className="order-1 lg:order-2 flex justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="relative">
                  <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] relative">
                    {/* Glowing Background Ring */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-glow opacity-50 blur-xl"></div>
                    <div className="absolute inset-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full animate-float"></div>
                    
                    {/* Main Image Container */}
                    <div className="absolute inset-6 glass-effect rounded-full flex items-center justify-center overflow-hidden shadow-elegant border-2 border-primary/20 relative group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 rounded-full"></div>
                      <img 
                        src="/lovable-uploads/a081b5d5-095a-451c-a45b-a9d99e8a8985.png" 
                        alt="Shivesh Tiwari - Data Engineer and Analyst"
                        className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110 relative z-10"
                        decoding="async"
                        fetchPriority="high"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold gradient-text" style={{ display: 'none' }}>
                        ST
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Tech Indicators */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 glass-effect rounded-2xl flex items-center justify-center shadow-card animate-float border border-primary/20" style={{ animationDelay: '1s' }}>
                    <span className="text-2xl">🐍</span>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 glass-effect rounded-2xl flex items-center justify-center shadow-card animate-float border border-accent/20" style={{ animationDelay: '2s' }}>
                    <span className="text-2xl">📊</span>
                  </div>
                  <div className="absolute top-1/4 -left-8 w-14 h-14 glass-effect rounded-xl flex items-center justify-center shadow-card animate-float border border-primary/20" style={{ animationDelay: '3s' }}>
                    <span className="text-xl">⚡</span>
                  </div>
                  <div className="absolute bottom-1/4 -right-8 w-14 h-14 glass-effect rounded-xl flex items-center justify-center shadow-card animate-float border border-accent/20" style={{ animationDelay: '4s' }}>
                    <span className="text-xl">🚀</span>
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
