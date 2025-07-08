import { Card } from "@/components/ui/card";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional experience in data processing and analysis
            </p>
          </div>

          {/* Experience Card */}
          <Card className="bg-card-gradient border-border/50 shadow-card hover:shadow-elegant transition-all duration-500">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Data Processing Intern
                  </h3>
                  <div className="flex items-center space-x-2 text-primary">
                    <Building2 className="h-4 w-4" />
                    <span className="font-medium">BLW Banaras</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end space-y-2 mt-4 md:mt-0">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">1 Month</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Banaras, India</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-foreground">
                  Electronic Data Processing
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Gained hands-on experience in electronic data processing, working with various data formats 
                  and learning industry-standard practices for data handling and management. Developed skills 
                  in data organization, processing workflows, and quality assurance procedures.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20">
                    Data Processing
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20">
                    Quality Assurance
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20">
                    Workflow Management
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;