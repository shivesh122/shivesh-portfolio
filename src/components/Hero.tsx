
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Download } from "lucide-react";

const Hero = () => {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1RI9Zm89wp2HE-8fz6lyvzaOEv1YruL5A/view?usp=drivesdk', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                  Hello, I'm
                </h1>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-text-gradient bg-clip-text text-transparent leading-tight">
                  Shivesh Tiwari
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto lg:mx-0 mt-4"></div>
              </div>
              
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
                Data Engineer | Data Analyst | Tech Explorer
              </h3>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed text-center lg:text-left">
              Passionate about transforming raw data into meaningful insights and building scalable data pipelines. 
              Currently pursuing my degree while building practical projects and expanding my skills in modern analytics.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant rounded-xl px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-8">
              <a 
                href="https://github.com/shivesh122" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 transform shadow-card"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/shivesh-tiwari-68b79a245" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 transform shadow-card"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:nikutiwari70@gmail.com" 
                className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 transform shadow-card"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
