
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Code, Database, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from "recharts";

// TiltCard: lightweight 3D tilt with glare
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ rx: number; ry: number; gx: number; gy: number }>({ rx: 0, ry: 0, gx: 50, gy: 50 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const max = 8; // deg
    const ry = (px - 0.5) * max * 2;
    const rx = -(py - 0.5) * max * 2;
    setTilt({ rx, ry, gx: px * 100, gy: py * 100 });
  };

  const handleLeave = () => setTilt({ rx: 0, ry: 0, gx: 50, gy: 50 });

  return (
    <div className="[perspective:1000px]">
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cn(
          "relative will-change-transform transition-transform duration-200",
          className
        )}
        style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
      >
        {/* Glare */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{
            background: `radial-gradient(600px at ${tilt.gx}% ${tilt.gy}%, hsl(var(--primary)/0.12), transparent 60%)`,
          }}
        />
        {children}
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const languages = [
    { name: "PYTHON", color: "bg-[#3776ab] text-white" },
    { name: "C", color: "bg-[#00599C] text-white" },
    { name: "JAVA", color: "bg-[#f89820] text-white" },
    { name: "PHP", color: "bg-[#777BB4] text-white" },
    { name: "TYPESCRIPT", color: "bg-[#3178c6] text-white" },
    { name: "MYSQL", color: "bg-[#4479A1] text-white" },
    { name: "SQL", color: "bg-[#CC2927] text-white" },
    { name: "JAVASCRIPT", color: "bg-[#F7DF1E] text-black" },
    { name: "DAX", color: "bg-[#F2C811] text-black" },
  ];

  const tools = [
    { name: "POWER BI", color: "bg-[#F2C811] text-black" },
    { name: "BIGQUERY", color: "bg-[#669DF6] text-white" },
    { name: "GOOGLE ANALYTICS 4", color: "bg-[#E37400] text-white" },
    { name: "EXCEL", color: "bg-[#217346] text-white" },
    { name: "GITHUB ACTIONS", color: "bg-[#2088FF] text-white" },
    { name: "AWS", color: "bg-[#FF9900] text-white" },
    { name: "GOOGLECLOUD", color: "bg-[#4285F4] text-white" },
    { name: "ORACLE", color: "bg-[#F80000] text-white" },
    { name: "RENDER", color: "bg-[#46E3B7] text-black" },
    { name: "VERCEL", color: "bg-[#000000] text-white" },
    { name: "FIREBASE", color: "bg-[#FFCA28] text-black" },
    { name: "CHART.JS", color: "bg-[#FF6384] text-white" },
  ];

  const concepts = [
    { name: "OPENCV", color: "bg-[#5C3EE8] text-white" },
    { name: "REACT", color: "bg-[#61DAFB] text-black" },
    { name: "REDUX", color: "bg-[#764ABC] text-white" },
    { name: "MONGODB", color: "bg-[#47A248] text-white" },
    { name: "MATPLOTLIB", color: "bg-[#11557c] text-white" },
    { name: "PANDAS", color: "bg-[#150458] text-white" },
    { name: "SCIKIT-LEARN", color: "bg-[#F7931E] text-white" },
    { name: "NUMPY", color: "bg-[#013243] text-white" },
    { name: "NODE.JS", color: "bg-[#339933] text-white" },
    { name: "EXPRESS", color: "bg-[#000000] text-white" },
    { name: "D3.JS", color: "bg-[#F9A03C] text-black" },
  ];

  return (
    <section
      id="skills-section"
      aria-label="Skills and technologies"
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-muted/30"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-gradient-to-br from-primary/30 to-secondary/30" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl bg-gradient-to-tl from-accent/30 to-primary/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={cn(
          "mb-10 sm:mb-14 text-center",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}>
          <h2 className="responsive-heading font-bold text-primary mb-4">
            Skills & Technologies
          </h2>
          <p className="responsive-body text-muted-foreground max-w-2xl mx-auto">
            My technical expertise across different domains and technologies
          </p>
        </div>

        {/* Languages Section */}
        <div className={cn(
          "mb-8",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}>
          <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/60 shadow-sm">
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
              <Code className="h-6 w-6" />
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className={cn(
                    "px-6 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg",
                    lang.color
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {lang.name}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Tools Section */}
        <div className={cn(
          "mb-8",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}>
          <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/60 shadow-sm">
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
              <Database className="h-6 w-6" />
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className={cn(
                    "px-6 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg",
                    tool.color
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tool.name}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Core Concepts Section */}
        <div className={cn(
          "mb-12",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}>
          <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/60 shadow-sm">
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
              <Brain className="h-6 w-6" />
              Core Concepts & Libraries
            </h3>
            <div className="flex flex-wrap gap-4">
              {concepts.map((concept, index) => (
                <div
                  key={index}
                  className={cn(
                    "px-6 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg",
                    concept.color
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {concept.name}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Stats strip */}
        <div className={cn(
          "mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}>
          {[
            { number: `${languages.length}`, label: "Languages", icon: "💻" },
            { number: `${tools.length}`, label: "Tools", icon: "🛠️" },
            { number: `${concepts.length}`, label: "Concepts", icon: "🧠" },
            { number: `${languages.length + tools.length + concepts.length}`, label: "Total", icon: "⚡" },
          ].map((stat, i) => (
            <div key={i} className="card-hover-effect rounded-xl border border-border/60 bg-card p-4 text-center shadow-sm">
              <div className="mb-2 text-2xl">{stat.icon}</div>
              <div className="mb-1 text-2xl font-bold text-primary">{stat.number}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

