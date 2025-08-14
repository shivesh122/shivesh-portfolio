
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-effect border-b border-primary/10 shadow-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-22">
          {/* Modern Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center text-2xl font-bold text-white cursor-pointer transition-all duration-500 magnetic-hover glow-effect">
              ST
            </div>
            <span className="hidden sm:block text-lg font-bold gradient-text">Shivesh Tiwari</span>
          </div>

          {/* Modern Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.name.toLowerCase())}
                  className={`relative px-5 py-3 text-sm font-semibold rounded-2xl transition-all duration-500 focus-visible group overflow-hidden ${
                    isActive 
                      ? 'text-primary bg-primary/15 shadow-card glow-effect' 
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <item.icon className="inline-block w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Modern active indicator */}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                  )}
                </button>
              );
            })}
            
            <Button 
              size="lg" 
              className="ml-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-8 py-3 font-semibold transition-all duration-500 magnetic-hover glow-effect shadow-elegant focus-visible rounded-2xl"
              onClick={handleHireMe}
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
          </div>

          {/* Modern Mobile Menu Button */}
          <Button
            variant="ghost"
            size="lg"
            className="lg:hidden glass-effect text-primary hover:bg-primary/10 w-14 h-14 rounded-2xl transition-all duration-500 magnetic-hover shadow-card"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-7 h-7">
              <Menu className={`absolute inset-0 w-7 h-7 transition-all duration-500 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
              <X className={`absolute inset-0 w-7 h-7 transition-all duration-500 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
            </div>
          </Button>
        </div>

        {/* Modern Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-effect border border-primary/20 rounded-3xl mt-6 mb-6 p-6 shadow-elegant animate-scale-in">
            <div className="space-y-4">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.name.toLowerCase())}
                    className={`flex items-center space-x-4 p-4 rounded-2xl font-semibold transition-all duration-500 w-full text-left animate-fade-in group overflow-hidden relative ${
                      isActive 
                        ? 'text-primary bg-primary/15 shadow-card' 
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <item.icon className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full relative z-10 animate-glow-pulse"></div>
                    )}
                  </button>
                );
              })}
              
              <Button 
                size="lg" 
                className="mt-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white w-full py-4 font-semibold transition-all duration-500 shadow-elegant rounded-2xl magnetic-hover glow-effect"
                onClick={handleHireMe}
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300 glow-effect"
           style={{ 
             width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
           }}
      ></div>
    </nav>
  );
};

export default Navigation;
