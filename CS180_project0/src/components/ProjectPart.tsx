import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectPartProps {
  partNumber: number;
  title: string;
  description: string;
  detailedDescription: string | string[];
  children: React.ReactNode;
  className?: string;
}

const ProjectPart = ({ 
  partNumber, 
  title, 
  description, 
  detailedDescription, 
  children, 
  className = "" 
}: ProjectPartProps) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Part Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-berkeley-blue text-berkeley-navy">
              Part {partNumber}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
            <div className="bg-muted/50 rounded-lg p-6 border border-berkeley-blue/10">
              {/* <div className="text-berkeley-navy leading-relaxed space-y-4 "></div>text-justify */}
              <div className="text-berkeley-navy leading-relaxed space-y-4 ">
                {Array.isArray(detailedDescription) ? (
                  detailedDescription.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>{detailedDescription}</p>
                )}
              </div>
            </div>
          </div>

          {/* Part Content */}
          <Card className="p-8 shadow-[var(--shadow-card)] border-berkeley-blue/20">
            {children}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectPart;