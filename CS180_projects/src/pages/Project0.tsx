import HeroSection from "@/components/HeroSection";
import ProjectPart from "@/components/ProjectPart";
import ImageGallery from "@/components/ImageGallery";
import ProjectNavigation from "@/components/ProjectNavigation";

// Import all images - now using public folder paths
// import image05 from "@/assets/project0/0.5.jpeg";
// import image1 from "@/assets/project0/1.jpeg";
// import image2 from "@/assets/project0/2.jpeg";
// import image3 from "@/assets/project0/3.jpeg";
// import image5 from "@/assets/project0/5.jpeg";
// import nonStretchedStreet from "@/assets/project0/Non_stretched_street.jpeg";
// import streetStretched from "@/assets/project0/Street_stretched.jpeg";
// import dollyZoom from "@/assets/project0/dolly_zoom.gif";

const Project0 = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <ProjectNavigation currentProject="Project 0" />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Part 1: Selfie Comparison */}
      <ProjectPart
        partNumber={1}
        title='Portrait Photography: "The Wrong Way vs. The Right Way"'
        description="Understand how distance and zoom affect facial proportions in portrait photography"
        detailedDescription={[
          "Result: Although face size remains similar between photos, the facial proportions look dramatically different.",
          "The close-up selfie appears distorted due to perspective distortion, where proximity to the lens makes closer features like your nose seem disproportionately large, while stepping back and zooming in compresses depth for more flattering, natural proportions. However, beyond the point of 3 x zoom, we are already far enough away that further zooming yields only minimal, less perceptible changes in perspective."
        ]}
        className="bg-gradient-to-r from-berkeley-light/10 to-transparent"
      >
        <ImageGallery 
          count={5} 
          layout="horizontal-scroll" 
          labels={["0.5 x Zoom", "1 x Zoom", "2 x Zoom", "3 x Zoom", "5 x Zoom"]}
          images={[
            "project0/0.5.jpeg",
            "project0/1.jpeg",
            "project0/2.jpeg",
            "project0/3.jpeg",
            "project0/5.jpeg",
          ]}
          aspectRatio="portrait"
        />
      </ProjectPart>

      {/* Part 2: Architectural Perspective */}
      <ProjectPart
        partNumber={2}
        title="Architectural Perspective Compression"
        description="Explore how focal length affects the perception of depth in urban scenes"
        detailedDescription={["Result: The zoomed telephoto image exhibits perspective compression, where the distant camera position minimizes the relative size difference between foreground and background objects, causing the car on the right to appear flattened. Conversely, the non-zoomed shot exaggerates perspective by making the car's nearer components look significantly larger than its farther ones, showing greater three-dimensional depth.",
        "This comparison shows that perceived spatial depth is dictated by the camera's physical location and cannot be compensated for with its focal length."]}
        className="bg-background"
      >
        <ImageGallery 
          count={2} 
          layout="grid" 
          labels={["No Zoom (Appears Stretched)", "Zoomed In (Appears Compressed)"]}
          images={[
            "project0/Street_stretched.jpeg",
            "project0/Non_stretched_street.jpeg",
          ]}
        />
      </ProjectPart>

      {/* Part 3: Dolly Zoom */}
      <ProjectPart
        partNumber={3}
        title="The Dolly Zoom (Vertigo Effect)"
        description="Create the classic Hitchcock camera movement effect"
        detailedDescription={["Result: In this example, the Vertigo effect is created by moving away from the subject while zooming in to keep the subject the same size in frame. This produces a disorienting visual where the background appears to expand substantially and stretch outward due to the wider focal length from the closer position. The surrounding space seems to grow larger around the stationary subject, creating spatial distortion and an unsettling sensation as the environment expands while the central subject remains unchanged.",
        "Note: The reason why the background appears to stretch is most likely because the the object of the same size is in the middle of the scene this time opposed to the first car on the right hand side in Part 2."
        ]}
        className="bg-gradient-to-l from-berkeley-light/10 to-transparent"
      >
        <ImageGallery 
          count={1} 
          layout="single" 
          labels={["Dolly Zoom GIF Animation"]}
          images={[
            "project0/dolly_zoom.gif",
          ]}
        />
      </ProjectPart>

      {/* Footer */}
      <footer className="bg-berkeley-navy text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-berkeley-light mb-2">Maximilian Christof - CS180 Project 0</p>
          <p className="text-sm text-berkeley-light/70">
            Understanding perspective, focal length, and the center of projection
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Project0;