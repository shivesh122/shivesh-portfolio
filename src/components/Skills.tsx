
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Programming",
      skills: [
        "Python", "SQL", "C++", "Java"
      ]
    },
    {
      title: "Data Tools & Platforms", 
      skills: [
        "Power BI", "Excel", "Tableau", "Microsoft Power Platform"
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        "Data Cleaning", "Data Visualization", "ETL Pipelines", 
        "DSA", "Basic ML", "Data Analytics"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="bg-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 rounded-xl"
              >
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-primary mb-8 text-center">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-3 bg-primary/10 text-primary rounded-xl text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
