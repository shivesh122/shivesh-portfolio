import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";

type Category = "Machine Learning" | "Data Analytics" | "Full-Stack";

interface Project {
  title: string;
  description: string;
  highlights?: string[];
  tech: string[];
  category: Category;
  image: string;
  github: string;
  live?: string;
  liveLabel?: string;
  featured?: boolean;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Banking Fraud Detection System",
    description:
      "Two-stage fraud model (Isolation Forest anomaly detection + Gradient Boosting) on 216K card, UPI, ATM and online transactions, with a live fraud-operations dashboard that scores transactions in real time in the browser.",
    highlights: ["82% of fraud value caught", "0.4% false-positive rate", "Explainable alerts"],
    tech: ["Python", "Scikit-learn", "Pandas", "SQL", "Power BI", "D3.js"],
    category: "Machine Learning",
    image: "/projects/fraud-detection.jpg",
    github: "https://github.com/shivesh122/banking-fraud-detection",
    live: "https://banking-fraud-detection-w3e7.onrender.com",
    featured: true,
    gradient: "from-rose-500/20 to-red-500/20",
  },
  {
    title: "Supply Chain Risk Analytics",
    description:
      "Automated daily ETL pipeline into a SQL star schema that monitors supplier OTIF, delivery delays and stockout risk across 4 warehouses, with Holt-Winters demand forecasting and an interactive dashboard.",
    highlights: ["86% forecast accuracy", "Stockout-risk model", "Daily automated refresh"],
    tech: ["Python", "Pandas", "SQL", "Power BI", "DAX", "D3.js"],
    category: "Data Analytics",
    image: "/projects/supply-chain-risk.jpg",
    github: "https://github.com/shivesh122/supply-chain-risk-analytics",
    live: "https://supply-chain-risk-analytics.onrender.com",
    featured: true,
    gradient: "from-sky-500/20 to-cyan-500/20",
  },
  {
    title: "ExpenseIQ – Full-Stack Expense Tracker",
    description:
      "MERN-stack web app with JWT authentication and REST APIs to track and categorise expenses, set monthly and category budgets with smart alerts, visualise spending and export CSV.",
    highlights: ["JWT auth & REST API", "Budget alerts", "CSV export"],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Full-Stack",
    image: "/projects/expenseiq.jpg",
    github: "https://github.com/shivesh122/expenseiq",
    live: "https://expenseiq-9h2k.onrender.com",
    featured: true,
    gradient: "from-teal-500/20 to-emerald-500/20",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Machine learning model that predicts customer churn, helping businesses identify at-risk customers and improve retention strategies.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
    category: "Machine Learning",
    image: "/lovable-uploads/Dashboard.png",
    github: "https://github.com/shivesh122/customer-churn-prediction",
    live: "https://customer-churn-prediction-7f8c.onrender.com",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "ML Movie Recommendation Engine",
    description:
      "Recommendation system that suggests movies based on content similarity and user preferences.",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    category: "Machine Learning",
    image: "https://i.ibb.co/JwNxymnv/movie-recommendation.png",
    github: "https://github.com/shivesh122/movie-Recommendation",
    live: "https://movie-recommendation-nbkm.onrender.com",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Titanic Survival Prediction App",
    description:
      "Predicts passenger survival from historical data, with batch CSV predictions and an interactive web interface for individual predictions.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
    category: "Machine Learning",
    image: "/lovable-uploads/40fa6509-20a0-44c9-a08e-908375f37a3e.png",
    github: "https://github.com/shivesh122/Titanic-servival-prediction-model-",
    live: "https://titanic-servival-prediction-model.onrender.com",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Fixtral",
    description:
      "AI-powered image editing assistant that automates edits for Reddit's r/PhotoshopRequest using Google Gemini.",
    tech: ["Next.js", "React", "Google Gemini", "Image Processing"],
    category: "Full-Stack",
    image: "/lovable-uploads/84ba3fb3-6a1a-4013-8b55-5a93b37688fe.png",
    github: "https://github.com/shivesh122/Fixtral",
    live: "https://fixtralai.vercel.app",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Pizza Sales Dashboard",
    description:
      "Interactive Power BI report analysing pizza sales data from SQL Server with KPIs and visual sales analysis.",
    tech: ["SQL", "Power BI", "DAX", "Excel"],
    category: "Data Analytics",
    image: "/lovable-uploads/Pizza_Sales.png",
    github: "https://github.com/shivesh122/Pizza-Sales-Dashboard",
    live: "https://app.powerbi.com/view?r=eyJrIjoiM2Y3M2QwNTgtMTVlZi00ZmU4LTg0M2MtZGY0NTNmZDlhNjUyIiwidCI6IjFlYjk4MmNlLThkZTgtNDllMi1iMDA4LTNiYjJmYjg1NzU1YyJ9",
    liveLabel: "Live report",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Hospital Emergency Room Dashboard",
    description:
      "Interactive Power BI report analysing hospital emergency-room data with KPIs and visual trend analysis.",
    tech: ["SQL", "Power BI", "DAX", "Excel"],
    category: "Data Analytics",
    image: "/lovable-uploads/Consolidated.png",
    github: "https://github.com/shivesh122/Hospital-Emergency-Room-Dashboard",
    live: "https://app.powerbi.com/view?r=eyJrIjoiMWFmMDA3ODUtZjg2Yi00OGI2LTg4MzYtMmVlMzcxMjBlNWIyIiwidCI6IjFlYjk4MmNlLThkZTgtNDllMi1iMDA4LTNiYjJmYjg1NzU1YyJ9",
    liveLabel: "Live report",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Coffee Sales Dashboard",
    description:
      "Power BI dashboard analysing coffee sales trends, customer behaviour and revenue patterns.",
    tech: ["Power BI", "Excel", "DAX"],
    category: "Data Analytics",
    image: "https://i.ibb.co/zVfwG45z/coffee-dashboard.png",
    github: "https://github.com/shivesh122/Coffee-Sales-Dashboard",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Netflix Data Analysis",
    description:
      "Exploratory analysis of Netflix content using Python, uncovering trends in genres, ratings, countries and release patterns.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    category: "Data Analytics",
    image: "https://i.ibb.co/WWvkTcRb/netflix-analysis.png",
    github: "https://github.com/shivesh122/Netflix-Movie-Data-Analysis",
    gradient: "from-red-500/20 to-pink-500/20",
  },
  {
    title: "SkillMate Pods",
    description:
      "Hyperlocal, barter-based skill-sharing platform connecting people to exchange skills and services within their communities.",
    tech: ["React", "Web Development", "Database Design", "UX/UI"],
    category: "Full-Stack",
    image: "https://i.ibb.co/TqHGvhYP/skillmate-pods.png",
    github: "https://github.com/shivesh122/Skill-Mate",
    live: "https://skillmate7.vercel.app",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "BLW Employee Nexus Hub",
    description:
      "Employee management system with employee records, dashboard analytics and administrative tools.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full-Stack",
    image: "/lovable-uploads/4335dc7b-2b4a-4bb1-91a6-62395704fd29.png",
    github: "https://github.com/shivesh122/BLW-Employee-Nexus-Hub",
    live: "https://blw-employee-nexus-hub.vercel.app",
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
];

const FILTERS: Array<"All" | Category> = ["All", "Machine Learning", "Data Analytics", "Full-Stack"];

const open = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

const Projects = () => {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm font-medium text-primary border border-primary/20">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              End-to-end machine learning, analytics and full-stack projects, each with source code and most with a live demo
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filter projects by category">
            {FILTERS.map((f) => {
              const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
              const active = filter === f;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                    active
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "bg-card/60 text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {f} <span className="opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {shown.map((project) => (
              <div key={project.title} className="group relative">
                <Card className="relative overflow-hidden bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-0 shadow-2xl hover:shadow-elegant transition-all duration-700 hover:-translate-y-2 h-full">
                  {/* Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>
                  <div className="absolute inset-[1px] bg-card/90 backdrop-blur-sm rounded-lg"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Project Image */}
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                      />
                      {project.featured && (
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground shadow-lg">
                          <Star className="h-3 w-3" /> Featured
                        </span>
                      )}
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium bg-background/85 backdrop-blur-sm text-foreground border border-border">
                        {project.category}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                      {project.highlights && (
                        <ul className="mb-4 space-y-1">
                          {project.highlights.map((h) => (
                            <li key={h} className="text-sm text-foreground flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden="true"></span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                          onClick={() => open(project.github)}
                          aria-label={`${project.title} source code on GitHub`}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source
                        </Button>
                        {project.live && (
                          <Button
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => open(project.live as string)}
                            aria-label={`${project.title} live demo`}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {project.liveLabel ?? "Live demo"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Want to see more projects or discuss a collaboration?</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8"
              onClick={() => open("https://github.com/shivesh122?tab=repositories")}
            >
              View all projects on GitHub
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
