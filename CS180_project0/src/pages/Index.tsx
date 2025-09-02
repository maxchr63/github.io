import HeroSection from "@/components/HeroSection";
import ProjectPart from "@/components/ProjectPart";
import ImageGallery from "@/components/ImageGallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Part 1: Selfie Comparison */}
      <ProjectPart
        partNumber={1}
        title="Portrait Photography: The Wrong Way vs. The Right Way"
        description="Understand how distance and zoom affect facial proportions in portrait photography"
        detailedDescription=" Eventhough face size remains similar between photos,  the facial proportions look dramatically different."
        className="bg-gradient-to-r from-berkeley-light/10 to-transparent"
      >
        <ImageGallery 
          count={5} 
          layout="horizontal-scroll" 
          labels={["0.5 x Zoom", "1 x Zoom", "2 x Zoom", "3 x Zoom", "5 x Zoom"]}
          images={[
            "/src/assets/0.5.jpeg",
            "/src/assets/1.jpeg",
            "/src/assets/2.jpeg",
            "/src/assets/3.jpeg",
            "/src/assets/5.jpeg",
          ]}
          aspectRatio="portrait"
        />
      </ProjectPart>

      {/* Part 2: Architectural Perspective */}
      <ProjectPart
        partNumber={2}
        title="Architectural Perspective Compression"
        description="Explore how focal length affects the perception of depth in urban scenes"
        detailedDescription="The first image (zoomed in from distance) appears compressed and flattened, while the second image (close up without zoom) should show more natural depth and perspective. Both images capture roughly the same scene size but with vastly different spatial relationships."
        className="bg-background"
      >
        <ImageGallery 
          count={2} 
          layout="grid" 
          labels={["Zoomed In (Stretched)", "Close Up (Natural Depth)"]}
          images={[
            "/src/assets/Non_stretched_street.jpeg",
            "/src/assets/Street_stretched.jpeg",
          ]}
        />
      </ProjectPart>

      {/* Part 3: Dolly Zoom */}
      <ProjectPart
        partNumber={3}
        title="The Dolly Zoom (Vertigo Effect)"
        description="Create the classic Hitchcock camera movement effect"
        detailedDescription="Your GIF should demonstrate the characteristic 'Vertigo effect' where the subject remains the same size but the background appears to stretch or compress dramatically. This creates a disorienting visual effect that makes the viewer feel like the space is shifting around the subject."
        className="bg-gradient-to-l from-berkeley-light/10 to-transparent"
      >
        <ImageGallery 
          count={1} 
          layout="single" 
          labels={["Dolly Zoom GIF Animation"]}
          images={[
            "/src/assets/dolly_zoom.gif",
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

export default Index;