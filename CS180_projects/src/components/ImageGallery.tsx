import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageIcon } from "lucide-react";

interface ImageGalleryProps {
  count: number;
  layout: "horizontal-scroll" | "grid" | "single";
  labels?: string[];
  images?: string[];
  aspectRatio?: "portrait" | "landscape" | "square"; 
}

const ImageGallery = ({ count, layout, labels = [], images = [], aspectRatio }: ImageGalleryProps) => {
    const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "portrait":
        return "aspect-[3/4]"; 
      case "square":
        return "aspect-square";
      case "landscape":
      default:
        return "aspect-[4/3]";
    }
  };

  const renderImagePlaceholder = (index: number) => {
    const hasImage = images[index];
    
    return (
      <Card 
        key={index}
        className={`relative ${getAspectRatioClass()} ${
          hasImage 
            ? 'bg-black overflow-hidden border-2 border-berkeley-blue/30' 
            : 'bg-gradient-to-br from-berkeley-light/20 to-berkeley-blue/10 border-2 border-dashed border-berkeley-blue/30 flex items-center justify-center'
        } group hover:border-berkeley-blue/50 transition-colors`}
      >
        {hasImage ? (
          // Show image
          <>
            <img 
              src={`${import.meta.env.BASE_URL}${images[index]}`} 
              alt={labels[index] || `Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2">
              <Badge variant="secondary" className="bg-black/70 text-white">
                {labels[index] || `Image ${index + 1}`}
              </Badge>
            </div>
          </>
        ) : (
          <div className="text-center">
            <ImageIcon className="w-12 h-12 text-berkeley-blue/50 mx-auto mb-3 group-hover:text-berkeley-blue/70 transition-colors" />
            <Badge variant="secondary" className="bg-berkeley-blue/10 text-berkeley-navy">
              {labels[index] || `Image ${index + 1}`}
            </Badge>
          </div>
        )}
      </Card>
    );
  };

  if (layout === "horizontal-scroll") {
    return (
      <div className="w-full">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {Array.from({ length: count }, (_, index) => (
            <div key={index} className="flex-none w-80 snap-start">
              {renderImagePlaceholder(index)}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4 text-center">
          Scroll horizontally to view all images →
        </p>
      </div>
    );
  }

  if (layout === "grid") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: count }, (_, index) => renderImagePlaceholder(index))}
      </div>
    );
  }

  // Single layout
  return (
    <div className="w-full max-w-2xl mx-auto">
      {renderImagePlaceholder(0)}
    </div>
  );
};

export default ImageGallery;