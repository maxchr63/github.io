import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import berkeleyHero from "@/assets/berkeley-hero.jpg"; // Now using public folder

const Index = () => {
  const projects = [
    {
      id: 0,
      title: "Photography and Perspective",
      subtitle: "Understanding Camera Distance and Focal Length",
      description: "Understanding perspective, focal length, and the center of projection through practical photography exercises.",
      status: "Completed",
      topics: ["Perspective", "Focal Length", "Portrait Photography", "Dolly Zoom"],
      route: "/project-0"
    },
    {
      id: 1,
      title: "Images of the Russian Empire",
      subtitle: "Colorizing the Prokudin-Gorskii Photo Collection",
      description: "Aligning and colorizing historical Russian Empire photographs using computer vision techniques and image processing algorithms.",
      status: "Completed",
      topics: ["Image Alignment", "Color Reconstruction", "Multi-scale Processing", "Historical Photography"],
      route: "/project-1"
    },
    {
      id: 3,
      title: "Fun with Filters and Frequencies!",
      subtitle: "Filters, Edges, and Frequency Analysis",
      description: "Exploring convolution, edge detection, unsharp masking, hybrid images, and multi-resolution blending through frequency domain analysis.",
      status: "Completed",
      topics: ["Filters", "Edge Detection", "Hybrid Images", "Frequency Analysis", "Image Blending"],
      route: "/project-3"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-berkeley-light/5 to-berkeley-navy/5">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/berkeley-hero.jpg)` }}
        >
          <div className="absolute inset-0 bg-berkeley-navy/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            CS180 Projects
          </h1>
          <p className="text-xl md:text-2xl text-berkeley-light">
            Computer Vision & Computational Photography
          </p>
          <p className="text-lg mt-2 text-berkeley-light/80">
            Maximilian Christof - Fall 2024
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-berkeley-navy mb-4">
            Project Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a collection of computer vision and computational photography projects, 
            each demonstrating different techniques and concepts in the field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                  <span className="text-sm text-gray-500">Project {project.id}</span>
                </div>
                <CardTitle className="text-xl text-berkeley-navy">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-berkeley-navy/70 font-medium">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
                {project.status === "Completed" ? (
                  <Link to={project.route}>
                    <Button className="w-full bg-berkeley-navy hover:bg-berkeley-navy/90">
                      View Project
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    disabled 
                    className="w-full"
                    variant="outline"
                  >
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-berkeley-navy text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-berkeley-light mb-2">UC Berkeley - Computer Science 180</p>
          <p className="text-sm text-berkeley-light/70">
            Intro to Computer Vision and Computational Photography
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;