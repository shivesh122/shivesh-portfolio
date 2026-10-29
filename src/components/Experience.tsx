import { Card } from "@/components/ui/card";
import { Building2, Calendar, MapPin } from "lucide-react";

interface Role {
  title: string;
  org: string;
  type: string;
  period: string;
  location?: string;
  current?: boolean;
  points: string[];
  tags: string[];
}

const roles: Role[] = [
  {
    title: "AI/ML Developer & Data Analyst",
    org: "Effling Kids Pvt. Ltd.",
    type: "Freelance",
    period: "Aug 2025 – Present",
    current: true,
    points: [
      "Build and maintain a Power BI KPI dashboard on Google Analytics 4 (GA4) data via Google BigQuery to track app engagement, retention and user growth, and present insights to management.",
      "Designed and deployed machine learning solutions that automate core educational processes, integrating backend services with ML pipelines.",
    ],
    tags: ["Power BI", "BigQuery", "GA4", "Python", "Machine Learning"],
  },
  {
    title: "Project Mentor",
    org: "GirlScript Summer of Code",
    type: "Internship",
    period: "May 2024 – Nov 2024",
    points: [
      "Mentored a cohort of Python developers building agentic AI systems and workflow automation.",
      "Co-led two open-source projects, SPRING and BEAUTIFY, with a team of 3 mentors from ideation to delivery.",
    ],
    tags: ["Python", "Agentic AI", "Open Source", "Mentoring"],
  },
  {
    title: "Data Processing Intern",
    org: "BLW Banaras",
    type: "Internship",
    period: "1 Month",
    location: "Banaras, India",
    points: [
      "Gained hands-on experience in electronic data processing with industry-standard practices for data handling, organisation, processing workflows and quality assurance.",
    ],
    tags: ["Data Processing", "Quality Assurance", "Workflow Management"],
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building analytics, dashboards and machine learning for real teams
            </p>
          </div>

          {/* Timeline */}
          <ol className="relative border-l-2 border-primary/20 ml-3 space-y-10">
            {roles.map((r) => (
              <li key={r.title + r.org} className="pl-8 relative">
                <span
                  className={`absolute -left-[11px] top-8 h-5 w-5 rounded-full border-4 border-background ${
                    r.current ? "bg-primary animate-pulse" : "bg-primary/60"
                  }`}
                  aria-hidden="true"
                ></span>
                <Card className="bg-card-gradient border-border/50 shadow-card hover:shadow-elegant transition-all duration-500">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground">{r.title}</h3>
                        <div className="flex items-center gap-2 text-primary">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium">{r.org}</span>
                          <span className="text-xs text-muted-foreground">· {r.type}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{r.period}</span>
                          {r.current && (
                            <span className="ml-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                              Current
                            </span>
                          )}
                        </div>
                        {r.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{r.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
                      {r.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {r.tags.map((t) => (
                        <span key={t} className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
