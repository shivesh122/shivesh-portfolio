
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about transforming data into actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">
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
              <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
              <div className="space-y-4">
                <Card className="bg-card border-border/50 p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 rounded-xl">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">B.Tech (Final Year)</h4>
                    <p className="text-sm text-muted-foreground">
                      KIPM College of Engineering & Technology
                    </p>
                    <p className="text-xs text-secondary font-medium">Engineering</p>
                  </div>
                </Card>

                <Card className="bg-card border-border/50 p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 rounded-xl">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">12th Grade (83%)</h4>
                    <p className="text-sm text-muted-foreground">
                      Saraswati Vidya Mandir, CBSE
                    </p>
                  </div>
                </Card>

                <Card className="bg-card border-border/50 p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 rounded-xl">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">10th Grade (93%)</h4>
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
