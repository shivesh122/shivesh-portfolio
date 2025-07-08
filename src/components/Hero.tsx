import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-text-gradient bg-clip-text text-transparent leading-tight">
                Shivesh Tiwari
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                Data Engineer | Analyst | Tech Explorer
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transforming data into decisions using modern analytics and scalable pipelines. 
              Passionate about turning raw data into meaningful insights.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/20 text-foreground hover:bg-primary/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a 
                href="https://github.com/shivesh122" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/shivesh-tiwari-68b79a245" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:nikutiwari70@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;