import { useEffect, useRef, useState } from "react";

const Admission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sunPosition, setSunPosition] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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
      if (timelineRef.current && isVisible) {
        const rect = timelineRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Calculate scroll progress within the timeline section
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

  const admissionData = [
    {
      title: "Master of Computer Science",
      period: "2015 - 2016",
      institution: "University of XYZ",
      description: "Advanced studies in machine learning, data structures, and algorithm optimization. Specialized in artificial intelligence and distributed systems architecture.",
      isActive: false
    },
    {
      title: "Bachelor of Computer Science", 
      period: "2010 - 2014",
      institution: "University of ABC",
      description: "Comprehensive foundation in computer science principles, software engineering, and database management systems. Graduated with honors.",
      isActive: false
    },
    {
      title: "Diploma in Computer Science",
      period: "2006 - 2010", 
      institution: "XYZ Institution",
      description: "Initial exposure to programming fundamentals, web development, and computer hardware. Built strong technical foundation.",
      isActive: true
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-lg">🎓</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                Education
              </h2>
            </div>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 w-0.5 h-full bg-border rounded-full"></div>
            
            {/* Animated Sun */}
            <div 
              className="absolute left-6 transition-all duration-500 ease-out z-20"
              style={{ 
                top: `${sunPosition * 0.8}%`,
                transform: 'translateX(-50%)'
              }}
            >
              <div className="text-2xl animate-pulse filter drop-shadow-lg">🌞</div>
            </div>

            {/* Timeline items */}
            <div className="space-y-8">
              {admissionData.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start space-x-6 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-3 h-3 rounded-full border-2 ${
                    item.isActive 
                      ? 'bg-primary border-primary shadow-lg shadow-primary/50' 
                      : 'bg-muted border-border'
                  } flex-shrink-0 mt-2`}>
                    {item.isActive && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className={`p-6 rounded-xl transition-all duration-300 hover:shadow-lg ${
                      item.isActive 
                        ? 'bg-primary/5 border border-primary/20' 
                        : 'bg-background border border-border/50'
                    }`}>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {item.title}
                      </h3>
                      <div className="text-sm text-muted-foreground mb-2">
                        {item.period}
                      </div>
                      <div className="text-base font-medium text-foreground mb-3">
                        {item.institution}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;