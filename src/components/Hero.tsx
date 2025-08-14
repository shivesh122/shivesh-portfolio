
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
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[90vh]">
              {/* Text Content */}
              <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h1 className="responsive-heading text-foreground leading-tight animate-slide-in-left">
                      Hello, I'm <span className="gradient-text">Shivesh Tiwari</span>
                    </h1>
                    <div className="w-20 h-1 bg-primary mx-auto lg:mx-0 rounded-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                  
                  <h2 className="responsive-subheading text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    Data Engineer | Data Analyst | Tech Explorer
                  </h2>
                </div>
                
                <p className="responsive-body text-muted-foreground max-w-2xl leading-relaxed text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                  Passionate about transforming raw data into meaningful insights and building scalable data pipelines. 
                  Currently pursuing my degree while building practical projects and expanding my skills in modern analytics.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant px-8 py-3 font-medium transition-all duration-300 card-hover-effect focus-visible"
                    onClick={handleDownloadResume}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 font-medium transition-all duration-300 card-hover-effect focus-visible"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get In Touch
                  </Button>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-4 pt-8 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
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
                      className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 shadow-card card-hover-effect focus-visible"
                      style={{ animationDelay: `${1.3 + index * 0.1}s` }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Professional Image */}
              <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-subtle-float"></div>
                    <div className="absolute inset-4 glass-effect rounded-full flex items-center justify-center overflow-hidden shadow-elegant">
                      <img 
                        src="/lovable-uploads/a081b5d5-095a-451c-a45b-a9d99e8a8985.png" 
                        alt="Shivesh Tiwari - Data Engineer and Analyst"
                        className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105"
                        decoding="async"
                        fetchPriority="high"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary/30" style={{ display: 'none' }}>
                        ST
                      </div>
                    </div>
                  </div>
                  
                  {/* Professional Tech Indicators */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-card animate-subtle-float" style={{ animationDelay: '1s' }}>
                    <span className="text-xl">🐍</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-card animate-subtle-float" style={{ animationDelay: '2s' }}>
                    <span className="text-xl">📊</span>
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
