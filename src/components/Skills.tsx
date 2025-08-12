
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

  const skillCategories = [
    {
      title: "Languages & Programming",
      icon: Code,
      color: "from-primary/15 via-primary/5 to-secondary/15",
      borderColor: "border-primary/20",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "C++", level: 75 },
        { name: "Java", level: 70 },
      ],
    },
    {
      title: "Data Tools & Platforms",
      icon: Database,
      color: "from-secondary/15 via-secondary/5 to-accent/15",
      borderColor: "border-secondary/20",
      skills: [
        { name: "Power BI", level: 88 },
        { name: "Excel", level: 92 },
        { name: "Tableau", level: 80 },
        { name: "Microsoft Power Platform", level: 75 },
      ],
    },
    {
      title: "Core Concepts",
      icon: Brain,
      color: "from-accent/15 via-accent/5 to-primary/15",
      borderColor: "border-accent/20",
      skills: [
        { name: "Data Cleaning", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "ETL Pipelines", level: 82 },
        { name: "DSA", level: 78 },
        { name: "Basic ML", level: 70 },
        { name: "Data Analytics", level: 88 },
      ],
    },
  ];

  const radarData = skillCategories.map((c) => {
    const avg = Math.round(
      c.skills.reduce((sum, s) => sum + s.level, 0) / c.skills.length
    );
    return { subject: c.title.split(" ")[0], level: avg };
  });

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
        {/* Header + Radar */}
        <div className={cn(
          "mb-10 sm:mb-14 grid gap-6 lg:grid-cols-3 lg:items-center",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}>
          <div className="lg:col-span-2">
            <h2 className="responsive-heading font-bold text-primary">
              Skills & Technologies
            </h2>
            <p className="responsive-body mt-3 text-muted-foreground max-w-2xl">
              A modern, interactive view of my core capabilities with a quick
              radar snapshot for credibility.
            </p>
          </div>
          <Card className="bg-card/60 backdrop-blur-sm border-border/60 h-[260px]">
            <div className="h-full w-full p-4">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} outerRadius="80%">
                  <PolarGrid stroke="hsl(var(--border))" strokeOpacity={0.3} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    dataKey="level"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.25}
                  />
                  <RechartsTooltip cursor={false} contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Tilt Cards */}
        <div className="responsive-grid">
          {skillCategories.map((category, idx) => (
            <TiltCard key={idx} className="group">
              <Card
                className={cn(
                  "relative overflow-hidden rounded-xl border shadow-sm",
                  "bg-gradient-to-br",
                  category.color,
                  category.borderColor,
                  "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_0%,hsl(var(--primary)/0.10),transparent_35%),radial-gradient(circle_at_80%_100%,hsl(var(--secondary)/0.10),transparent_35%)] before:opacity-60"
                )}
              >
                <div className="relative p-6 sm:p-8">
                  {/* Icon mark */}
                  <div className="absolute -right-6 -top-6 h-24 w-24 opacity-10">
                    <category.icon className="h-full w-full" />
                  </div>

                  <div className="mb-6 flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Compact progress rows */}
                  <div className="space-y-4">
                    {category.skills.slice(0, 4).map((skill, sIdx) => (
                      <div key={sIdx} className={cn("transition-all", isVisible ? "animate-fade-in" : "opacity-0")} style={{ animationDelay: `${0.1 * sIdx}s` }}>
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-primary/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                            style={{ width: isVisible ? `${skill.level}%` : "0%", transition: "width 900ms cubic-bezier(0.4, 0, 0.2, 1)" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.slice(0, 5).map((skill, sIdx) => (
                      <span key={sIdx} className="rounded-lg border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                        {skill.name}
                      </span>
                    ))}
                    {category.skills.length > 5 && (
                      <span className="rounded-lg border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                        +{category.skills.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </TiltCard>
          ))}
        </div>

        {/* Stats strip */}
        <div className={cn(
          "mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}>
          {[
            { number: "15+", label: "Technologies", icon: "⚡" },
            { number: "4+", label: "Languages", icon: "💻" },
            { number: "8+", label: "Tools", icon: "🛠️" },
            { number: "6+", label: "Concepts", icon: "🧠" },
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

