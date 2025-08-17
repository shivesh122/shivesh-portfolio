
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

  const educationData = [
    {
      degree: "B.Tech (Final Year)",
      institution: "KIPM College of Engineering & Technology",
      field: "Engineering",
      icon: GraduationCap,
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      degree: "12th Grade",
      institution: "Saraswati Vidya Mandir, CBSE",
      field: "83% Score",
      score: "83%",
      icon: Award,
      gradient: "from-secondary/20 to-accent/20"
    },
    {
      degree: "10th Grade", 
      institution: "Saraswati Vidya Mandir, CBSE",
      field: "93% Score",
      score: "93%",
      icon: Award,
      gradient: "from-accent/20 to-primary/20"
    }
  ];

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
              About Me
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="responsive-body text-muted-foreground max-w-3xl mx-auto">
              Passionate about transforming data into actionable insights
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
                    Who I Am
                  </h3>
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
                  <p className="responsive-body">
                    A dedicated Data Analyst with deep expertise in Data Science, passionate about transforming complex datasets into strategic business insights. 
                    I specialize in advanced statistical analysis, predictive modeling, data visualization, and developing comprehensive business intelligence solutions that drive organizational growth.
                  </p>
                  <p className="responsive-body">
                    With proficiency in Python, SQL, Power BI, machine learning algorithms, and statistical modeling, I excel at uncovering hidden patterns in data and translating findings into actionable recommendations. 
                    My analytical mindset combined with strong business acumen enables me to bridge the gap between technical analysis and strategic decision-making.
                  </p>
                  <p className="responsive-body">
                    Currently leveraging my expertise to help organizations optimize operations, improve performance metrics, and make data-driven decisions. 
                    I'm passionate about continuous learning in emerging analytics technologies and methodologies.
                  </p>
                </div>

                {/* Key highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8">
                  {[
                    { icon: "📊", title: "Specialization", desc: "Data Analysis & Science" },
                    { icon: "🧠", title: "Expertise", desc: "Machine Learning & BI" },
                    { icon: "🎓", title: "Education", desc: "B.Tech Engineering" },
                    { icon: "⚡", title: "Passion", desc: "Business Intelligence" }
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

            {/* Education Section */}
            <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 delay-400 relative ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary">Education Journey</h3>
              </div>
              
              {/* Animated Sun Journey */}
              <div className="absolute left-6 top-16 w-0.5 bg-gradient-to-b from-primary/30 to-secondary/30 h-full rounded-full -z-10"></div>
              <div 
                className="absolute left-3 transition-all duration-300 ease-out z-20"
                style={{ 
                  top: `${16 + (sunPosition * 2)}px`,
                  transform: 'translateX(-50%)'
                }}
              >
                <div className="text-2xl animate-pulse">🌞</div>
              </div>
              
              <div ref={educationRef} className="space-y-4 sm:space-y-6 relative z-10">
                {educationData.map((edu, index) => (
                  <Card 
                    key={index}
                    className={`bg-gradient-to-r ${edu.gradient} border-border/50 shadow-card hover:shadow-elegant transition-all duration-500 card-hover-effect perspective-card animate-fade-in-up overflow-hidden group`}
                    style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                  >
                    <div className="p-6 sm:p-8 relative">
                      {/* Background pattern */}
                      <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                        <edu.icon className="w-full h-full" />
                      </div>
                      
                      <div className="relative z-10 space-y-3">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <edu.icon className="h-6 w-6 text-primary" />
                          </div>
                          
                          <div className="flex-1 space-y-2">
                            <h4 className="font-semibold text-primary text-lg">{edu.degree}</h4>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>{edu.institution}</span>
                            </div>
                            {edu.field && (
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 text-secondary" />
                                <span className="text-sm font-medium text-secondary">{edu.field}</span>
                              </div>
                            )}
                            {edu.score && (
                              <div className="flex items-center justify-between mt-3">
                                <span className="text-sm text-muted-foreground">Academic Score:</span>
                                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-md">
                                  {edu.score}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Progress indicator */}
                        <div className="w-full bg-primary/10 h-1 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: isVisible ? '100%' : '0%',
                              transitionDelay: `${0.8 + index * 0.2}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
