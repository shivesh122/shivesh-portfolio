
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Coffee Sales Dashboard",
      description: "Interactive data visualization dashboard built in Power BI to analyze coffee sales trends, customer behavior, and revenue patterns with real-time insights.",
      tech: ["Power BI", "Excel", "Data Analysis", "DAX"],
      image: "/placeholder.svg",
      github: "https://github.com/shivesh122/Coffee-Sales",
      live: "https://github.com/shivesh122/Coffee-Sales"
    },
    {
      title: "Netflix Data Analysis",
      description: "Comprehensive analysis of Netflix viewing trends using Python, uncovering insights into content preferences and user behavior patterns across different demographics.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      image: "/placeholder.svg", 
      github: "https://github.com/shivesh122/NETFLIX_Movie_data_analysis",
      live: "https://github.com/shivesh122/NETFLIX_Movie_data_analysis"
    },
    {
      title: "ML Movie Recommendation Engine",
      description: "Machine learning-powered recommendation system that provides personalized movie suggestions based on user preferences, viewing history, and collaborative filtering.",
      tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
      image: "/placeholder.svg",
      github: "https://github.com/shivesh122/Movie-Recommendation-model-",
      live: "https://github.com/shivesh122/Movie-Recommendation-model-"
    },
    {
      title: "SkillMate Pods",
      description: "Hyperlocal, barter-based skill-sharing web platform connecting people to exchange skills and services within their communities using modern web technologies.",
      tech: ["Web Development", "Database Design", "UX/UI", "React"],
      image: "/placeholder.svg",
      github: "https://github.com/shivesh122/Skill-Mate",
      live: "https://skillmate7.vercel.app"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data-driven projects showcasing analytical expertise and technical problem-solving skills
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-card-gradient border-border/50 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="aspect-video bg-muted/50 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-primary/20 text-foreground hover:bg-primary/10"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
