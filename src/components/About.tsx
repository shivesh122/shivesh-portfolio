import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about transforming data into actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  🚀 Aspiring Data Engineer | Data Analyst | Data Enthusiast
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Final year Engineering student passionate about turning raw data into meaningful insights 
                  and building scalable data pipelines. I specialize in Python, SQL, Power BI, Excel, and 
                  Tableau, with a strong foundation in DSA and pipelining techniques.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in data engineering combines analytical thinking with technical expertise 
                  to solve complex data challenges and create value-driven solutions.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
              <div className="space-y-4">
                <Card className="bg-card-gradient border-border/50 p-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">B.Tech (Final Year)</h4>
                    <p className="text-sm text-muted-foreground">
                      KIPM College of Engineering & Technology
                    </p>
                    <p className="text-xs text-primary">Engineering</p>
                  </div>
                </Card>

                <Card className="bg-card-gradient border-border/50 p-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">12th Grade (83%)</h4>
                    <p className="text-sm text-muted-foreground">
                      Saraswati Vidya Mandir, CBSE
                    </p>
                  </div>
                </Card>

                <Card className="bg-card-gradient border-border/50 p-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">10th Grade (93%)</h4>
                    <p className="text-sm text-muted-foreground">
                      Saraswati Vidya Mandir, CBSE
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;