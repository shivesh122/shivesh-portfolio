
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sunPosition, setSunPosition] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (educationRef.current && isVisible) {
        const rect = educationRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Calculate scroll progress within the education section
        if (sectionTop <= viewportHeight && sectionTop + sectionHeight >= 0) {
          const progress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight)));
          setSunPosition(progress * 100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="responsive-heading font-bold text-primary mb-4 sm:mb-6">
              🎭 The Adventurer's Tale
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="responsive-body text-muted-foreground max-w-3xl mx-auto">
              Every hero has an origin story - here's mine! 🌟
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Bio Section */}
            <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="space-y-4 sm:space-y-6">
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-4 sm:mb-6">
                    🎮 Player Profile
                  </h3>
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
                  <p className="responsive-body">
                    🧙‍♂️ Welcome to my realm! I'm a dedicated Data Wizard with mystical powers in Data Science, on an epic quest to transform chaotic datasets into golden business insights. 
                    My spellbook includes advanced statistical incantations, predictive modeling magic, mesmerizing data visualization, and legendary business intelligence potions that fuel organizational growth!
                  </p>
                  <p className="responsive-body">
                    ⚔️ Armed with Python scrolls, SQL swords, Power BI shields, and machine learning artifacts, I'm your go-to adventurer for uncovering hidden treasures in data dungeons. 
                    My superpower? Translating cryptic data languages into crystal-clear business strategies that even non-wizards can understand!
                  </p>
                  <p className="responsive-body">
                    🎯 Currently on a mission to help fellow adventurers (aka organizations) level up their operations, boost their performance stats, and make data-driven decisions that would make even the wisest council proud. 
                    Always grinding to unlock new achievements in emerging analytics technologies! 🚀
                  </p>
                </div>

                {/* Key highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8">
                {[
                  { icon: "🏆", title: "Class", desc: "Data Wizard Supreme" },
                  { icon: "🎯", title: "Special Skills", desc: "ML Magic & BI Sorcery" },
                  { icon: "📚", title: "Guild Certification", desc: "B.Tech Engineering Academy" },
                  { icon: "💫", title: "Ultimate Power", desc: "Insight Manifestation" }
                ].map((item, index) => (
                    <div 
                      key={index}
                      className={`bg-card p-4 rounded-xl border border-border/50 shadow-card hover:shadow-hover transition-all duration-300 card-hover-effect animate-fade-in-up`}
                      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="font-semibold text-primary text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
