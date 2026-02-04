
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Download, Phone, MapPin } from "lucide-react";

const Hero = () => {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1gLPflyupvUM4x69FbPUOCugjw0O3PoD7/view?usp=drivesdk', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Greeting */}
              <div className="space-y-2 animate-slide-up">
                <p className="text-lg text-muted-foreground">Hey! 👋 I'm</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  <span className="text-gradient">Shivesh Tiwari</span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mt-2">
                  I'm a <span className="text-primary font-semibold">Data Analyst</span> & <span className="text-primary font-semibold">Data Science Expert</span>
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+919554193106" className="hover:text-primary transition-colors">
                    +91 9554193106
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:nikutiwari70@gmail.com" className="hover:text-primary transition-colors">
                    nikutiwari70@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Gorakhpur, India</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-soft hover:shadow-hover"
                  onClick={handleDownloadResume}
                >
                  <Download className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-border hover:bg-muted px-8 py-3 rounded-lg font-medium transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                {[
                  { href: "https://github.com/shivesh122", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/shivesh--tiwari", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:nikutiwari70@gmail.com", icon: Mail, label: "Email" }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 shadow-soft hover:shadow-hover"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  {/* Main Image Container */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-xl relative">
                    <img 
                      src="/lovable-uploads/a081b5d5-095a-451c-a45b-a9d99e8a8985.png" 
                      alt="Shivesh Tiwari - Data Engineer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary bg-muted" style={{ display: 'none' }}>
                      🅢🅣
                    </div>
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
