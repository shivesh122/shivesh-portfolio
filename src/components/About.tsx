import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Visibility observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="responsive-heading font-bold text-primary mb-4 sm:mb-6">
              About Me
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="responsive-body text-muted-foreground max-w-3xl mx-auto">
              Passionate about transforming data into actionable insights
            </p>
          </div>

          {/* Bio (left) + Video (right) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            {/* Bio */}
            <div
              className={`space-y-6 lg:space-y-8 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-4 sm:mb-6">
                    Who I Am
                  </h3>
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                </div>

                <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
                  <p className="responsive-body">
                    A dedicated Data Analyst with deep expertise in Data Science, passionate
                    about transforming complex datasets into strategic business insights. I
                    specialize in advanced statistical analysis, predictive modeling, data
                    visualization, and developing comprehensive business intelligence solutions
                    that drive organizational growth.
                  </p>
                  <p className="responsive-body">
                    With proficiency in Python, SQL, Power BI, machine learning algorithms, and
                    statistical modeling, I excel at uncovering hidden patterns in data and
                    translating findings into actionable recommendations. My analytical mindset
                    combined with strong business acumen enables me to bridge the gap between
                    technical analysis and strategic decision-making.
                  </p>
                  <p className="responsive-body">
                    Currently leveraging my expertise to help organizations optimize operations,
                    improve performance metrics, and make data-driven decisions. I'm passionate
                    about continuous learning in emerging analytics technologies and
                    methodologies.
                  </p>
                </div>

                {/* Key highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8">
                  {[
                    { icon: "📊", title: "Specialization", desc: "Data Analysis & Science" },
                    { icon: "🧠", title: "Expertise", desc: "Machine Learning & BI" },
                    { icon: "🎓", title: "Education", desc: "B.Tech Engineering" },
                    { icon: "⚡", title: "Passion", desc: "Business Intelligence" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-card p-4 rounded-xl border border-border/50 shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: ${0.5 + i * 0.1}s }}
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="font-semibold text-primary text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video (full-height) */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              {/* Make the cell stretch to the row height */}
              <div className="h-full">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-lg border border-border/50">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster="/videos/about-poster.jpg"   // add a poster image for autoplay/fallback
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/public/ezgif-1c1f0eb6e3b4d9 (1).mp4" type="video/mp4" />
                    {/* Fallback text for very old browsers */}
                    Your browser does not support the video tag.
                  </video>
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
