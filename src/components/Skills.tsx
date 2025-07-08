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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="bg-card-gradient border-border/50 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
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