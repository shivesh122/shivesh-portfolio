
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Download, Phone, MapPin } from "lucide-react";

const Hero = () => {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1N4ckJfbFHSYgF17FJJjnel3WLHNmmTLK/view?usp=drivesdk', '_blank');
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
                <p className="text-lg text-muted-foreground">Welcome to my 📖</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  <span className="text-gradient">Digital Adventure Log</span>
                </h1>
                <div className="space-y-1">
                  <p className="text-xl sm:text-2xl text-muted-foreground">
                    by <span className="text-primary font-semibold hover:scale-105 transition-transform duration-300 inline-block cursor-pointer" onClick={() => {
                      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeScFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDGA0fPTgjMGHm++7+OZSA0PVKzn77BdGAU+ltryxnkpBSl+zPLaizsIGGS57OScTgwRUarm7rJfGgU9k9n0unElBC17yO/eizEIGWq+8OOYSw0PU6jk7q5cGAY9ldjywHgiBC2Ay/LXhzoLFly57OGVTAoPUpzh8LVeGAU8ltrswHkjBSuGzvDZizAIGWm+8+OZSA0PVqzp7a9bGAY+ltrzxXkoBS2GzO7diyELF16+8OOYTw0NTKfj7q5eGgQ7k9nzwHojBS6Bzu7aiDkJGGm68OCSQwoSXLXn5ppPEAlLnN7utmQdBjuR2vLGeSsFLILM7d2MPAoUXLzw4pdQDwxOqeHrt2AaCz2S3O+/fCEELYPP8N2JOwkXZrvs45ZLDAxOptzwtmMbBzuR2fLEeSUELIHN7NyNPAoUXrvr45ZODAxOpOHtt2QbBD2U3PK/fCEFLYPP8N2KPAoUXbzs4pdQDwxOpdzwtmMdBTuQ2fDBeCUEK4DN69yOOwkUXbnn4ppPEAlKnN7vtmQcBjiQ2fHBdyEELIHM7dyNPAoVXb3s4pZODAxOpNzwsmMaAzuS2fLBeSsBLYDL79qOOgYTXLXo6JpPEApOnN3vtWMcBzqT2O3BeCQFL4fN7duNPAkSW7Tv4ppUEQpNnN/wsmYbBDyU2fHBeSUELYLN7tyNOwkUXbzs4pZODQxNpNzxtWgeBzKLwPFAJAEoMY/NlEgUB0ic0vK9fSEEJ5TT9tWMpf8AAAAASUVORK0CYII=');
                      audio.volume = 0.3;
                      audio.play().catch(() => {});
                    }}>Shivesh Tiwari</span> 🎮
                  </p>
                  <p className="text-lg text-muted-foreground">
                    <span className="text-primary font-semibold">Data Wizard</span> & <span className="text-primary font-semibold">Code Alchemist</span>
                  </p>
                </div>
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
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-soft hover:shadow-hover hover:scale-105 transform"
                  onClick={handleDownloadResume}
                >
                  <Download className="mr-2 h-5 w-5" />
                  📜 My Quest Summary
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-border hover:bg-muted px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="group-hover:animate-pulse">🚀</span> Let's Build Something Epic!
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                {[
                  { href: "https://github.com/shivesh122", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/shivesh-tiwari-68b79a245", icon: Linkedin, label: "LinkedIn" },
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
              <div className="relative group">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  {/* Magical floating icons */}
                  <div className="absolute -top-4 -left-4 text-2xl animate-bounce" style={{ animationDelay: '0s' }}>📊</div>
                  <div className="absolute -top-2 -right-6 text-2xl animate-bounce" style={{ animationDelay: '1s' }}>🤖</div>
                  <div className="absolute -bottom-2 -left-6 text-2xl animate-bounce" style={{ animationDelay: '2s' }}>🧠</div>
                  <div className="absolute -bottom-4 -right-4 text-2xl animate-bounce" style={{ animationDelay: '3s' }}>⚡</div>
                  
                  {/* Main Image Container */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-xl relative group-hover:border-primary/50 transition-all duration-500 cursor-pointer"
                       onClick={() => {
                         const messages = ["🎯 Data Detective at your service!", "📈 Ready to decode the matrix!", "🔮 Turning data into gold!", "🎪 The show must go on!"];
                         const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                         const messageEl = document.createElement('div');
                         messageEl.textContent = randomMessage;
                         messageEl.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50 animate-bounce';
                         document.body.appendChild(messageEl);
                         setTimeout(() => messageEl.remove(), 3000);
                       }}>
                    <img 
                      src="/lovable-uploads/a081b5d5-095a-451c-a45b-a9d99e8a8985.png" 
                      alt="Shivesh Tiwari - The Data Adventurer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary bg-muted" style={{ display: 'none' }}>
                      🧙‍♂️
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold animate-pulse">Click me! 🎪</span>
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
