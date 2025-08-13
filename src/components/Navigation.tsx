
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Code, Briefcase, FolderOpen, Award, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Experience", href: "#experience", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail }
  ];

  const handleHireMe = () => {
    window.location.href = "mailto:nikutiwari70@gmail.com?subject=Hire%20Inquiry&body=Hi%20Shivesh,%0A%0AI%20would%20like%20to%20discuss%20a%20potential%20project%20opportunity.%0A%0ARegards";
  };

  const handleNavClick = (href: string, sectionName: string) => {
    setIsOpen(false);
    setActiveSection(sectionName);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-elegant glass-effect' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="text-2xl sm:text-3xl font-bold text-primary transition-all duration-300 hover:scale-110 cursor-pointer">
                ST
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <span className="hidden sm:block text-sm font-medium text-muted-foreground">Shivesh Tiwari</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.name.toLowerCase())}
                  className={`relative px-5 py-3 text-sm font-bold rounded-2xl transition-all duration-500 group ${
                    isActive 
                      ? 'text-primary bg-primary/15 shadow-card neon-glow' 
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <item.icon className="inline-block w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-125" />
                  {item.name}
                  
                  {/* Futuristic active indicator */}
                  <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-500 ${
                    isActive ? 'w-4/5 opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100'
                  }`}></span>
                </button>
              );
            })}
            
            <ThemeToggle />
            
            <Button 
              size="sm" 
              className="ml-4 bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-primary-foreground rounded-2xl px-8 py-3 font-bold transition-all duration-500 hover:scale-110 shadow-card hover:shadow-hover neon-glow relative overflow-hidden group"
              onClick={handleHireMe}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Hire Me</span>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:bg-primary/10 w-10 h-10 rounded-2xl transition-all duration-500 glass-effect border border-primary/30 neon-glow"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${isOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'}`} />
                <X className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-effect border border-border/50 rounded-xl mt-4 mb-4 p-6 shadow-elegant animate-slide-in-right">
            <div className="grid grid-cols-1 gap-3">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.name.toLowerCase())}
                    className={`flex items-center space-x-3 p-3 rounded-lg font-medium transition-all duration-300 animate-fade-in-up ${
                      isActive 
                        ? 'text-primary bg-primary/10 border border-primary/20' 
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    )}
                  </button>
                );
              })}
              
              <Button 
                size="sm" 
                className="mt-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground w-full rounded-lg py-3 font-medium transition-all duration-300 hover:scale-105 shadow-card"
                onClick={handleHireMe}
              >
                <Mail className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300"
           style={{ 
             width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
           }}
      ></div>
    </nav>
  );
};

export default Navigation;
