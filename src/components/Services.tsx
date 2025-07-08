import { Card } from "@/components/ui/card";
import { BarChart3, Monitor, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into meaningful insights using advanced analytical techniques and statistical methods.",
      features: ["Data Cleaning & Processing", "Statistical Analysis", "Trend Identification", "Performance Metrics"]
    },
    {
      icon: Monitor,
      title: "Dashboard Creation",
      description: "Create interactive and visually appealing dashboards using Power BI, Excel, and Tableau for data visualization.",
      features: ["Power BI Dashboards", "Excel Analytics", "Tableau Visualizations", "Real-time Reporting"]
    },
    {
      icon: Globe,
      title: "Web Design",
      description: "Design and develop modern, responsive websites with focus on user experience and data presentation.",
      features: ["Responsive Design", "Data Visualization", "User Interface", "Performance Optimization"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive data solutions to help you make informed decisions
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-card-gradient border-border/50 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 p-8"
              >
                <div className="text-center space-y-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="text-xs text-muted-foreground bg-primary/5 px-3 py-2 rounded-md"
                      >
                        {feature}
                      </div>
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

export default Services;