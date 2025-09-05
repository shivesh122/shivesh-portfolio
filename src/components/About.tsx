
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
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-32 sm:w-64 h-32 sm:h-64 bg-primary/20 rounded-full blur-2xl sm:blur-3xl animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-40 sm:w-80 h-40 sm:h-80 bg-secondary/20 rounded-full blur-2xl sm:blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 md:mb-6">
              About Me
            </h2>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about transforming data into actionable insights
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Bio Section */}
            <div className={`space-y-6 md:space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="space-y-4 sm:space-y-6">
                <div className="relative pl-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 sm:mb-6">
                    Who I Am
                  </h3>
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed pl-6">
                  <p className="text-sm sm:text-base leading-relaxed">
                    A dedicated Data Analyst with deep expertise in Data Science, passionate about transforming complex datasets into strategic business insights. 
                    I specialize in advanced statistical analysis, predictive modeling, data visualization, and developing comprehensive business intelligence solutions that drive organizational growth.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    With proficiency in Python, SQL, Power BI, machine learning algorithms, and statistical modeling, I excel at uncovering hidden patterns in data and translating findings into actionable recommendations. 
                    My analytical mindset combined with strong business acumen enables me to bridge the gap between technical analysis and strategic decision-making.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Currently leveraging my expertise to help organizations optimize operations, improve performance metrics, and make data-driven decisions. 
                    I'm passionate about continuous learning in emerging analytics technologies and methodologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div ref={educationRef} className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative pl-6">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-6 sm:mb-8">
                  Education Journey
                </h3>
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              </div>

              {/* Education Timeline */}
              <div className="relative ml-6">
                {/* Animated Sun */}
                <div 
                  className="absolute -left-8 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-lg transition-all duration-500 ease-out shadow-lg z-10"
                  style={{ 
                    top: `${sunPosition}%`,
                    transform: 'translateY(-50%)',
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
                  }}
                >
                  🌞
                </div>

                {/* Timeline Line */}
                <div className="absolute -left-6 top-0 w-0.5 h-full bg-gradient-to-b from-primary/30 via-secondary/30 to-accent/30"></div>

                {/* Education Items */}
                <div className="space-y-8 sm:space-y-12">
                  {[
                    {
                      year: "2021 - 2025",
                      degree: "Bachelor of Technology",
                      field: "Computer Science & Engineering",
                      institution: "Kamla Nehru Institute of Technology, Sultanpur",
                      location: "Uttar Pradesh, India",
                      icon: GraduationCap,
                      status: "Pursuing"
                    },
                    {
                      year: "2019 - 2021",
                      degree: "Senior Secondary (XII)",
                      field: "Science (PCM)",
                      institution: "Government Inter College, Gola Gokarnath",
                      location: "Uttar Pradesh, India",  
                      icon: Award,
                      status: "Completed"
                    },
                    {
                      year: "2017 - 2019",
                      degree: "Secondary (X)",
                      field: "General Studies",
                      institution: "Government Inter College, Gola Gokarnath",
                      location: "Uttar Pradesh, India",
                      icon: Award,
                      status: "Completed"
                    }
                  ].map((item, index) => (
                    <Card 
                      key={index}
                      className="relative bg-card/50 backdrop-blur-sm border border-border/50 p-4 sm:p-6 ml-4 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.02]"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute -left-6 top-6 w-3 h-3 bg-primary rounded-full border-2 border-background shadow-sm"></div>
                      
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <div className="flex items-center gap-2">
                            <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                              {item.year}
                            </span>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            item.status === 'Pursuing' 
                              ? 'bg-green-500/10 text-green-600 border border-green-500/20' 
                              : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        
                        <h4 className="text-sm sm:text-base font-semibold text-foreground">
                          {item.degree}
                        </h4>
                        <p className="text-xs sm:text-sm text-primary font-medium">
                          {item.field}
                        </p>
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {item.institution}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights - Full Width */}
          <div className={`mt-12 sm:mt-16 md:mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary text-center mb-6 sm:mb-8">
              Key Highlights
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                { icon: "📊", title: "Specialization", desc: "Data Analysis & Science" },
                { icon: "🧠", title: "Expertise", desc: "Machine Learning & BI" },
                { icon: "🎓", title: "Education", desc: "B.Tech Engineering" },
                { icon: "⚡", title: "Passion", desc: "Business Intelligence" }
              ].map((item, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm p-3 sm:p-4 md:p-6 border border-border/50 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-center"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-primary text-xs sm:text-sm md:text-base mb-1 sm:mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-tight">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
