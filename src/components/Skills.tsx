
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Code, Database, BarChart3, Brain } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
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

  const skillCategories = [
    {
      title: "Languages & Programming",
      icon: Code,
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "C++", level: 75 },
        { name: "Java", level: 70 }
      ]
    },
    {
      title: "Data Tools & Platforms",
      icon: Database,
      color: "from-green-500/20 to-teal-500/20", 
      borderColor: "border-green-500/30",
      skills: [
        { name: "Power BI", level: 88 },
        { name: "Excel", level: 92 },
        { name: "Tableau", level: 80 },
        { name: "Microsoft Power Platform", level: 75 }
      ]
    },
    {
      title: "Core Concepts",
      icon: Brain,
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30", 
      skills: [
        { name: "Data Cleaning", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "ETL Pipelines", level: 82 },
        { name: "DSA", level: 78 },
        { name: "Basic ML", level: 70 },
        { name: "Data Analytics", level: 88 }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-accent/30 to-primary/30 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl animate-morph"></div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,109,89,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,109,89,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="responsive-heading font-bold text-primary mb-4 sm:mb-6">
              Skills & Technologies
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="responsive-body text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable data solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="responsive-grid">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className={`bg-gradient-to-br ${category.color} border ${category.borderColor} shadow-card hover:shadow-elegant transition-all duration-700 card-hover-effect perspective-card group overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="p-6 sm:p-8 relative">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <category.icon className="w-full h-full" />
                  </div>
                  
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8 relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 animate-glow">
                      <category.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-primary group-hover:text-shimmer transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills with progress bars */}
                  <div className="space-y-4 sm:space-y-5 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className={`transition-all duration-500 animate-fade-in-up`}
                        style={{ animationDelay: `${0.3 + index * 0.2 + skillIndex * 0.1}s` }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm sm:text-base font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs sm:text-sm text-muted-foreground font-medium">{skill.level}%</span>
                        </div>
                        
                        {/* Animated progress bar */}
                        <div className="w-full bg-primary/10 h-2 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                            style={{ 
                              width: isVisible && hoveredCategory === index ? `${skill.level}%` : '0%',
                              transitionDelay: `${0.5 + skillIndex * 0.1}s`
                            }}
                          >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Floating skill badges */}
                  <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 relative z-10">
                    {category.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-xs sm:text-sm font-medium border border-primary/20 hover:bg-primary/10 transition-all duration-300 cursor-default animate-fade-in-up`}
                        style={{ animationDelay: `${0.8 + skillIndex * 0.1}s` }}
                      >
                        {skill.name}
                      </span>
                    ))}
                    {category.skills.length > 3 && (
                      <span className="px-3 py-1.5 bg-secondary/5 text-secondary rounded-lg text-xs sm:text-sm font-medium border border-secondary/20 cursor-default">
                        +{category.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </Card>
            ))}
          </div>

          {/* Skills summary stats */}
          <div className={`mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { number: "15+", label: "Technologies", icon: "⚡" },
              { number: "4+", label: "Languages", icon: "💻" },
              { number: "8+", label: "Tools", icon: "🛠️" },
              { number: "6+", label: "Concepts", icon: "🧠" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border/50 shadow-card hover:shadow-hover transition-all duration-300 card-hover-effect"
              >
                <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
