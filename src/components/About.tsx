
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16">
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
