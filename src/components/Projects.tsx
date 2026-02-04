import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Helmet } from 'react-helmet-async';

const Projects = () => {
  const projects = [
    {
      title: "Coffee Sales Dashboard",
      description: "Interactive data visualization dashboard built in Power BI to analyze coffee sales trends, customer behavior, and revenue patterns with real-time insights.",
      tech: ["Power BI", "Excel", "Data Analysis", "DAX"],
      image: "https://i.ibb.co/zVfwG45z/coffee-dashboard.png",
      github: "https://github.com/shivesh122/Coffee-Sales",
      live: "https://github.com/shivesh122/Coffee-Sales",
      gradient: "from-orange-500/20 to-amber-500/20"
    },
    {
      title: "Netflix Data Analysis",
      description: "Comprehensive analysis of Netflix viewing trends using Python, uncovering insights into content preferences and user behavior patterns across different demographics.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      image: "https://i.ibb.co/WWvkTcRb/netflix-analysis.png", 
      github: "https://github.com/shivesh122/NETFLIX_Movie_data_analysis",
      live: "https://github.com/shivesh122/NETFLIX_Movie_data_analysis",
      gradient: "from-red-500/20 to-pink-500/20"
    },
    {
      title: "ML Movie Recommendation Engine",
      description: "Machine learning-powered recommendation system that provides personalized movie suggestions based on user preferences, viewing history, and collaborative filtering.",
      tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
      image: "https://i.ibb.co/JwNxymnv/movie-recommendation.png",
      github: "https://github.com/shivesh122/movie-Recommendation",
      live: "https://movie-recommendation-nbkm.onrender.com",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      title: "SkillMate Pods",
      description: "Hyperlocal, barter-based skill-sharing web platform connecting people to exchange skills and services within their communities using modern web technologies.",
      tech: ["Web Development", "Database Design", "UX/UI", "React"],
      image: "https://i.ibb.co/TqHGvhYP/skillmate-pods.png",
      github: "https://github.com/shivesh122/Skill-Mate",
      live: "https://skillmate7.vercel.app",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "BLW Employee Nexus Hub",
      description: "Employee management system for BLW organization featuring comprehensive employee data management, dashboard analytics, and administrative functionalities.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "/lovable-uploads/4335dc7b-2b4a-4bb1-91a6-62395704fd29.png",
      github: "https://github.com/shivesh122/BLW-Employee-Nexus-Hub",
      live: "https://blw-employee-nexus-hub.vercel.app",
      gradient: "from-cyan-500/20 to-teal-500/20"
    },
    {
      title: "Titanic Survival Prediction App",
      description: "Machine learning application that predicts passenger survival on the Titanic using historical data. Features batch CSV prediction capabilities and an intuitive web interface for individual predictions.",
      tech: ["Python", "Streamlit", "Machine Learning", "Pandas", "Scikit-learn"],
      image: "/lovable-uploads/40fa6509-20a0-44c9-a08e-908375f37a3e.png",
      github: "https://github.com/shivesh122/Titanic-servival-prediction-model-",
      live: "https://titanic-servival-prediction-model.onrender.com",
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
     {
      title: "Custumer Churn Prediction",
      description: "A machine learning model that predicts customer churn, helping businesses identify at-risk customers and improve retention strategies.",
      tech: ["Python", "Streamlit", "Machine Learning", "Pandas", "Scikit-learn"],
      image: "/lovable-uploads/Dashboard.png",
      github: "https://github.com/shivesh122/customer-churn-prediction",
      live: "https://customer-churn-prediction-7f8c.onrender.com",
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Fixtral",
      description: "Revolutionize your image editing with AI-powered Photoshop assistance. Automate edits from Reddit's r/PhotoshopRequest using Google Gemini AI.",
      tech: ["React", "AI/ML", "Google Gemini", "Next.js", "Image Processing"],
      image: "/lovable-uploads/84ba3fb3-6a1a-4013-8b55-5a93b37688fe.png",
      github: "https://github.com/shivesh122/Fixtral",
      live: "https://fixtralai.vercel.app",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
   {
      title: "Pizza Sales Dashboard",
      description: "Interactive data visualization dashboard analyzing Pizza Sales report using POWER BI and SQL Server data using data visualization and analytics techniques.",
      tech: ["MySQL","Power BI", "Excel", "Data Analysis", "DAX"],
      image: "/lovable-uploads/Pizza_Sales.png",
      github: "https://github.com/shivesh122/Pizza-Sales-Dashboard",
      live: "https://app.powerbi.com/view?r=eyJrIjoiM2Y3M2QwNTgtMTVlZi00ZmU4LTg0M2MtZGY0NTNmZDlhNjUyIiwidCI6IjFlYjk4MmNlLThkZTgtNDllMi1iMDA4LTNiYjJmYjg1NzU1YyJ9",
      gradient: "from-orange-500/20 to-amber-500/20"
    },
    {
      title: "Hospital Emergency Room Dashboard",
      description: "Interactive data visualization dashboard analyzing Hospital Emergency Room data using data visualization and analytics techniques.",
      tech: ["MySQL","Power BI", "Excel", "Data Analysis", "DAX"],
      image: "/lovable-uploads/Consolidated.png",
      github: "https://github.com/shivesh122/Hospital-Emergency-Room-Dashboard",
      live: "https://app.powerbi.com/view?r=eyJrIjoiMWFmMDA3ODUtZjg2Yi00OGI2LTg4MzYtMmVlMzcxMjBlNWIyIiwidCI6IjFlYjk4MmNlLThkZTgtNDllMi1iMDA4LTNiYjJmYjg1NzU1YyJ9",
      gradient: "from-orange-500/20 to-amber-500/20"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Projects | Shivesh Tiwari</title>
        <meta name="description" content="View Shivesh Tiwari's AI, Data Analytics, and Web Development projects including Dashboards, ML Models, and Full Stack Apps." />
      </Helmet>

      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm font-medium text-primary border border-primary/20">
                  Portfolio Showcase
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Data-driven projects showcasing analytical expertise and technical problem-solving skills across various domains
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="relative overflow-hidden bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-0 shadow-2xl hover:shadow-elegant transition-all duration-700 hover:-translate-y-3 hover:rotate-1 h-full">
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>
                    <div className="absolute inset-[1px] bg-card/90 backdrop-blur-sm rounded-lg"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Project Image */}
                      <div className="aspect-video relative overflow-hidden rounded-t-lg">
                        <img 
                          src={project.image} 
                          alt={`${project.title} - Portfolio project screenshot`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          decoding="async"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        
                        {/* Floating Action Buttons */}
                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                          <Button 
                            size="icon"
                            variant="secondary"
                            className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="icon"
                            className="h-8 w-8 bg-primary/80 backdrop-blur-sm hover:bg-primary"
                            onClick={() => window.open(project.live, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:border-primary/40 transition-colors duration-300"
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
                            className="flex-1 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Source
                          </Button>
                          <Button 
                            size="sm" 
                            className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => window.open(project.live, '_blank')}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                Want to see more projects or discuss a collaboration?
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8"
              >
                View All Projects
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
