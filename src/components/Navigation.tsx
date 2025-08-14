
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Code, Briefcase, FolderOpen, Award, Mail } from "lucide-react";

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Professional Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-primary cursor-pointer transition-all duration-300 hover:scale-105">
              ST
            </div>
            <span className="hidden sm:block text-sm font-medium text-muted-foreground">Shivesh Tiwari</span>
          </div>

          {/* Clean Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.name.toLowerCase())}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 focus-visible ${
                    isActive 
                      ? 'text-primary bg-primary/10' 
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <item.icon className="inline-block w-4 h-4 mr-2" />
                  {item.name}
                  
                  {/* Clean active indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full"></span>
                  )}
                </button>
              );
            })}
            
            <Button 
              size="sm" 
              className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-medium transition-all duration-300 card-hover-effect shadow-card focus-visible"
              onClick={handleHireMe}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-primary hover:bg-primary/10 w-10 h-10 rounded-lg transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-background/95 backdrop-blur-md border border-border rounded-lg mt-4 mb-4 p-4 shadow-card">
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.name.toLowerCase())}
                    className={`flex items-center space-x-3 p-3 rounded-md font-medium transition-all duration-300 w-full text-left ${
                      isActive 
                        ? 'text-primary bg-primary/10' 
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </button>
                );
              })}
              
              <Button 
                size="sm" 
                className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground w-full py-3 font-medium transition-all duration-300 shadow-card"
                onClick={handleHireMe}
              >
                <Mail className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300"
           style={{ 
             width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
           }}
      ></div>
    </nav>
  );
};

export default Navigation;
