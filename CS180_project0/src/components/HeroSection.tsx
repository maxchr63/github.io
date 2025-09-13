import { Camera, ArrowDown } from "lucide-react";
// import berkeleyHero from "@/assets/berkeley-hero.jpg"; // Now using public folder

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-berkeley-blue/10 via-background to-berkeley-light/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img 
          src="/berkeley-hero.jpg"
          alt="Berkeley cityscape with traffic direction signs"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Floating Arrow Animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <ArrowRight className="absolute top-1/4 left-1/4 w-8 h-8 text-berkeley-blue/30 animate-bounce" style={{animationDelay: '0s'}} />
        <ArrowDown className="absolute top-1/3 right-1/3 w-6 h-6 text-berkeley-navy/40 animate-bounce" style={{animationDelay: '1s'}} />
        <ChevronRight className="absolute bottom-1/3 left-1/3 w-10 h-10 text-berkeley-blue/20 animate-bounce" style={{animationDelay: '2s'}} />
        <ArrowRight className="absolute top-1/2 right-1/4 w-7 h-7 text-berkeley-navy/30 animate-bounce" style={{animationDelay: '0.5s'}} /> */}
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Course Info */}
          <div className="flex items-center gap-2 mb-6">
            <Camera className="w-5 h-5 text-berkeley-blue" />
            <span className="text-berkeley-navy font-medium">Maximilian Christof - CS180 Project 0</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-berkeley-navy via-berkeley-blue to-berkeley-navy bg-clip-text text-transparent leading-tight">
            Becoming Friends with my Camera
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            The goal of this project is to understand the relationship between perspective, focal length, and the center of projection through different hands-on photography exercises.
          </p>

          {/* Due Date */}
          <div className="inline-flex items-center gap-2 bg-berkeley-light/30 border border-berkeley-blue/20 rounded-full px-6 py-3 mb-12">
            <span className="text-berkeley-navy font-medium">Due Date:</span>
            <span className="text-berkeley-blue font-semibold">Tuesday, September 2nd, 2025 at 11:59PM</span>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-berkeley-blue" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;