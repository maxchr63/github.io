      {/* The Run for Glory */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-berkeley-navy mb-8 text-center">The Run for Glory</h2>
            <p className="text-gray-700 text-center mb-10">Automatically restored images after all bells and whistles have been applied together.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Images from all_bells_and_whistles */}
              <div className="flex flex-col items-center">
                <img 
                  src="/src/assets/project1/all_bells_and_whistles/church_b_n_w.png"
                  alt="church"
                  className="w-full max-w-md h-72 object-contain rounded-lg bg-white shadow mb-2"
                />
                <p className="text-sm text-gray-600">Full restoration of church</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/src/assets/project1/all_bells_and_whistles/eleven_adults_b_n_w.png"
                  alt="eleven_adults"
                  className="w-full max-w-md h-72 object-contain rounded-lg bg-white shadow mb-2"
                />
                <p className="text-sm text-gray-600">Full restoration of eleven_adults</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/src/assets/project1/all_bells_and_whistles/icon_b_n_w.png"
                  alt="icon"
                  className="w-full max-w-md h-72 object-contain rounded-lg bg-white shadow mb-2"
                />
                <p className="text-sm text-gray-600">Full restoration of icon</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/src/assets/project1/all_bells_and_whistles/self_portrait_b_n_w.png"
                  alt="self_portrait"
                  className="w-full max-w-md h-72 object-contain rounded-lg bg-white shadow mb-2"
                />
                <p className="text-sm text-gray-600">Full restoration of self_portrait</p>
              </div>
            </div>
          </div>
        </div>
      </section>
import ProjectNavigation from "@/components/ProjectNavigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Camera, ArrowDown } from "lucide-react";
import berkeleyHero from "@/assets/berkeley-hero.jpg";
import { useState } from "react";

const Project1 = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const ImageWithModal = ({ children, imageName, imageSrc }: { children: React.ReactNode; imageName: string; imageSrc?: string }) => (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer hover:opacity-80 transition-opacity">
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">{imageName}</h3>
          {imageSrc ? (
            <img 
              src={imageSrc}
              alt={imageName}
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />
          ) : (
            <div className="bg-gradient-to-br from-red-200 via-green-200 to-blue-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-700">Enlarged {imageName}</span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <ProjectNavigation currentProject="Project 1" />

      {/* Hero Section - matching Project 0 style */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-berkeley-blue/10 via-background to-berkeley-light/20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <img 
            src={berkeleyHero}
            alt="Berkeley cityscape with traffic direction signs"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
          <div className="max-w-4xl">
            {/* Course Info */}
            <div className="flex items-center gap-2 mb-6">
              <Camera className="w-5 h-5 text-berkeley-blue" />
              <span className="text-berkeley-navy font-medium">Maximilian Christof - CS180 Project 1</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-berkeley-navy via-berkeley-blue to-berkeley-navy bg-clip-text text-transparent leading-tight">
              Images of the Russian Empire
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Colorizing the Prokudin-Gorskii Photo Collection using computational alignment techniques and multi-scale image processing.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-berkeley-navy mb-8 text-center">Introduction</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  The Prokudin-Gorskii collection, led by Russian photographer Sergei Mikhailovich Prokudin-Gorskii in the early 20th century, is a pioneering project documenting the Russian Empire in color. Using an innovative method commissioned by Tsar Nicholas II, Prokudin-Gorskii captured three black-and-white images of the same scene through red, green, and blue filters.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When combined, these images produced vivid color photographs, offering a rare glimpse into life over a century ago. Now preserved by the Library of Congress, the collection includes 1,902 digitized triple-frame glass negatives.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Prokudin-Gorskii believed in the future of color photography, and his method involved creating triple-frame negatives for vibrant projections. The task today is to align these three color channels—red, green, and blue—accurately, recreating sharp and true-to-original color images. Proper alignment avoids blurring and ensures the photographs reflect Prokudin-Gorskii's vision.
                </p>
              </div>
              {/* Images on the right */}
              <div className="flex flex-col gap-8">
                <div className="text-center">
                  <ImageWithModal imageName="Self Portrait - 3 Images"
                    imageSrc="/src/assets/project1/Intro/self_portrait_3_images.jpg">
                    <img 
                      src="/src/assets/project1/Intro/self_portrait_3_images.jpg"
                      alt="Self Portrait - 3 Images"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50 mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Three separate exposures: red, green, blue</p>
                </div>
                <div className="text-center">
                  <ImageWithModal imageName="Self Portrait - B&W Composite"
                    imageSrc="/src/assets/project1/Intro/self_portrait_b_n_w.png">
                    <img 
                      src="/src/assets/project1/Intro/self_portrait_b_n_w.png"
                      alt="Self Portrait - Black and White Composite"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50 mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Stacked composite after alignment and automatic refinement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-berkeley-navy mb-12 text-center"> Approaches for Alignment</h2>
            
            {/* Exhaustive Search in Window */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-berkeley-navy mb-6">1. Single-Scale, Exhaustive Search</h3>
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  My initial method involved a direct, exhaustive search. For this process, the green channel of the image was held stationary while the red and blue channels were systematically shifted across a predefined search area. The optimal alignment was found by evaluating a similarity metric at each possible displacement.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  For the images shown, a search window of ±18 pixels was used. While a smaller window of ±15 pixels was sufficient for lower-resolution images without any loss of alignment quality, the larger window was used for consistency. To prevent distortions from the image edges from affecting the similarity calculation, the outer 8% of the border pixels were excluded from consideration.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Two primary similarity metrics were used to quantify alignment quality:
                </p>
                <div className="bg-gray-100 p-6 rounded-lg mb-4">
                  <h5 className="font-semibold text-berkeley-navy mb-3">Euclidean Distance (L2 Norm)</h5>
                  <div className="font-mono text-center text-lg mb-3">
                    d(I₁, I₂) = ∑(I₁(x,y) - I₂(x,y))²
                  </div>
                  <p className="text-gray-700 text-sm">
                    This metric calculates the sum of squared differences between pixel values in the two channels. A lower score signifies a better match, as it indicates less variance between the images.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <h5 className="font-semibold text-berkeley-navy mb-3">Normalized Cross-Correlation (NCC)</h5>
                  <div className="font-mono text-center text-sm mb-3">
                    NCC(I₁, I₂) = ∑[(I₁(x,y) - μ₁)(I₂(x,y) - μ₂)] / √[∑(I₁(x,y) - μ₁)² ∑(I₂(x,y) - μ₂)²]
                  </div>
                  <p className="text-gray-700 text-sm">
                    This metric measures the structural similarity between two images by normalizing for variations in brightness and contrast. NCC scores range from -1 to 1, where 1 represents a perfect positive correlation and thus the best possible alignment.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  While effective for smaller JPG images, this brute-force technique proved to be too computationally intensive for high-resolution TIFF files, as the required search radius was too large to be processed in a reasonable time.
                </p>
              </div>
            </div>

            {/* Multi-Scale Pyramid */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-berkeley-navy mb-6">2. Multi-Scale Pyramid Alignment</h3>
              <div className="bg-blue-50 p-8 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-6">
                  To efficiently align high-resolution images, I implemented a more sophisticated coarse-to-fine strategy using an image pyramid. In my case, this technique involves creating a 4-level pyramid where each level is a downsampled version of the one below it, generated using bilinear interpolation.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The alignment process begins at the coarsest level (the smallest image). Once the best displacement vector is found, the process moves to the next finer level, using the previous result as a starting point for a more refined search. This cascading approach dramatically reduces the computational load.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The search window is adjusted dynamically at each level of the pyramid:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>At the coarsest level, an initial search range of ±18 pixels is used.</li>
                  <li>At each subsequent, finer level, the search range is scaled down according to the rule: <span className="font-mono">new_range = max(5, previous_range * 0.55)</span>.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Using this pyramid method with NCC as the similarity metric, the alignment for a single color channel was completed in approximately 13 to 15 seconds.
                </p>
                
                {/* Image Pyramid Visualization */}
                <div className="mb-6">
                  <ImageWithModal 
                    imageName="Image Pyramid Visualization"
                    imageSrc="/src/assets/project1/Image_pyramid.png"
                  >
                    <img 
                      src="/src/assets/project1/Image_pyramid.png"
                      alt="Image pyramid visualization showing multi-scale approach"
                      className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
                    />
                  </ImageWithModal>
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Multi-scale image pyramid visualization showing the coarse-to-fine alignment approach. 
                    <br />
                    <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Image_pyramid.svg/1200px-Image_pyramid.svg.png" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-blue-600 hover:text-blue-800 underline">
                      Source: Wikimedia Commons
                    </a>
                  </p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <h5 className="font-semibold text-berkeley-navy mb-3">Additional feature: Final Artifact Correction</h5>
                  <p className="text-gray-700 text-sm">
                    A final processing step is applied to all images to eliminate edge artifacts caused by pixel rollovers during alignment. After the optimal displacement vectors for the red and blue channels are found, the single largest displacement value from any vector is identified. This maximum value is then used to crop all four sides of the final stacked image, ensuring a clean result free of any wrap-around artifacts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Naive Search Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-berkeley-navy mb-4 text-center">Results - 1. Exhaustive Search in Window</h2>
            <p className="text-gray-600 text-center mb-12">Smaller .jpg images  aligned with a ±18 pixel window</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* JPG results with real alignment data */}
              {[
                { name: "cathedral", green: [0, 0], red: [1, 7], blue: [2, 5] },
                { name: "tobolsk", green: [0, 0], red: [1, 4], blue: [3, 3] },
                { name: "monastery", green: [0, 0], red: [1, 6], blue: [2, -3] }
              ].map((image, i) => (
                <Card key={image.name} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-berkeley-navy capitalize">{image.name}.jpg</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ImageWithModal 
                      imageName={`${image.name}.jpg`}
                      imageSrc={`/src/assets/project1/alignment_only_images/without_alignment_${image.name}.jpg`}
                    >
                      <img 
                        src={`/src/assets/project1/alignment_only_images/without_alignment_${image.name}.jpg`}
                        alt={`${image.name} aligned result`}
                        className="w-full h-64 object-contain rounded-lg mb-4 bg-gray-50"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const placeholder = target.nextElementSibling as HTMLElement;
                          if (placeholder) placeholder.style.display = 'flex';
                        }}
                      />
                      <div className="bg-gradient-to-br from-red-200 via-green-200 to-blue-200 h-64 rounded-lg hidden items-center justify-center mb-4">
                        <span className="text-gray-700">Aligned Result {image.name}</span>
                      </div>
                    </ImageWithModal>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-berkeley-navy mb-2">Alignment Vectors (NCC):</h4>
                      <div className="space-y-1 text-sm">
                        <p><span className="text-red-600 font-medium">Red:</span> ({image.red[0]}, {image.red[1]})</p>
                        <p><span className="text-green-600 font-medium">Green:</span> ({image.green[0]}, {image.green[1]})</p>
                        <p><span className="text-blue-600 font-medium">Blue:</span> ({image.blue[0]}, {image.blue[1]})</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pyramid Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-berkeley-navy mb-4 text-center">Results - 2. Multi-Scale Image Pyramid</h2>
            <p className="text-gray-600 text-center mb-12">The .tif images, which have significantly more pixels, are aligned using the image pyramid approach</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* TIF results with real alignment data */}
              {[
                { name: "church", green: [0, 0], red: [-8, 33], blue: [4, 25] },
                { name: "emir", green: [0, 0], red: [17, 57], blue: [24, 49] },
                { name: "harvesters", green: [0, 0], red: [-3, 65], blue: [17, 60], hasNote: true },
                { name: "icon", green: [0, 0], red: [5, 48], blue: [17, 41] },
                { name: "italil", green: [0, 0], red: [15, 39], blue: [21, 38] },
                { name: "lastochikino", green: [0, 0], red: [-7, 78], blue: [-2, -3] },
                { name: "lugano", green: [0, 0], red: [-13, 52], blue: [-16, 41] },
                { name: "melons", green: [0, 0], red: [4, 96], blue: [10, 82] },
                { name: "self_portrait", green: [0, 0], red: [8, 98], blue: [29, 79] },
                { name: "siren", green: [0, 0], red: [-18, 47], blue: [-6, 49] },
                { name: "three_generations", green: [0, 0], red: [-3, 58], blue: [14, 53] },
                { name: "eleven_adults", green: [0, 0], red: [16, 73], blue: [31, 58] },
                { name: "makhrovye_maki", green: [0, 0], red: [5, 51], blue: [8, 8] },
                { name: "ordezh_bliz", green: [0, 0], red: [-5, 112], blue: [-1, 39] }
              ].map((image) => (
                <Card key={image.name} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-berkeley-navy">{image.name.replace(/_/g, ' ')}.tif</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ImageWithModal 
                      imageName={`${image.name}.tif`}
                      imageSrc={`/src/assets/project1/alignment_only_images/without_alignment_${image.name}.jpg`}
                    >
                      <img 
                        src={`/src/assets/project1/alignment_only_images/without_alignment_${image.name}.jpg`}
                        alt={`${image.name} aligned result`}
                        className="w-full h-56 object-contain rounded-lg mb-3 bg-gray-50"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const placeholder = target.nextElementSibling as HTMLElement;
                          if (placeholder) placeholder.style.display = 'flex';
                        }}
                      />
                      <div className="bg-gradient-to-br from-red-200 via-green-200 to-blue-200 h-56 rounded-lg hidden items-center justify-center mb-3">
                        <span className="text-gray-700 text-sm">Result {image.name}</span>
                      </div>
                    </ImageWithModal>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <h4 className="font-semibold text-berkeley-navy mb-2 text-sm">Alignment Vectors (NCC):</h4>
                      <div className="space-y-1 text-xs">
                        <p><span className="text-red-600 font-medium">Red:</span> ({image.red[0]}, {image.red[1]})</p>
                        <p><span className="text-green-600 font-medium">Green:</span> ({image.green[0]}, {image.green[1]})</p>
                        <p><span className="text-blue-600 font-medium">Blue:</span> ({image.blue[0]}, {image.blue[1]})</p>
                      </div>
                      {image.hasNote && (
                        <div className="mt-2 p-2 bg-yellow-50 border-l-2 border-yellow-400 rounded">
                          <p className="text-xs text-gray-600">
                            <strong>Note:</strong> Image appears to be twisted, which cannot be solved with alignment only. Right side is aligned perfectly. Left side alignment could be improved with additional correction.
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Euclidean vs NCC Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-berkeley-navy mb-4 text-center">Euclidean Distance vs. NCC Alignment Comparison</h2>
            <p className="text-gray-600 text-center mb-12">
              [Placeholder for comparison description - Add your analysis of the differences between Euclidean distance and NCC alignment methods here]
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Cathedral comparison */}
              <Card className="overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-berkeley-navy">Cathedral - Euclidean vs NCC</CardTitle>
                </CardHeader>
                <CardContent>
                  <ImageWithModal 
                    imageName="Cathedral Euclidean vs NCC Comparison"
                    imageSrc="/src/assets/project1/alignment_only_images/eucl_and_ncc_side_by_side_cathedral.jpg"
                  >
                    <img 
                      src="/src/assets/project1/alignment_only_images/eucl_and_ncc_side_by_side_cathedral.jpg"
                      alt="Cathedral euclidean vs ncc comparison"
                      className="w-full h-auto aspect-[2/1] object-contain rounded-lg mb-4"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                    <div className="bg-gradient-to-r from-blue-200 to-green-200 h-64 rounded-lg hidden items-center justify-center mb-4">
                      <span className="text-gray-700">Cathedral Euclidean vs NCC</span>
                    </div>
                  </ImageWithModal>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-berkeley-navy mb-2">Alignment Vectors:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-800 mb-1">Euclidean:</p>
                        <p><span className="text-red-600 font-medium">Red:</span> (1, 7)</p>
                        <p><span className="text-green-600 font-medium">Green:</span> (0, 0)</p>
                        <p><span className="text-blue-600 font-medium">Blue:</span> (2, 5)</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 mb-1">NCC:</p>
                        <p><span className="text-red-600 font-medium">Red:</span> (1, 7)</p>
                        <p><span className="text-green-600 font-medium">Green:</span> (0, 0)</p>
                        <p><span className="text-blue-600 font-medium">Blue:</span> (2, 5)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Three Generations comparison */}
              <Card className="overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-berkeley-navy">Three Generations - Euclidean vs NCC</CardTitle>
                </CardHeader>
                <CardContent>
                  <ImageWithModal 
                    imageName="Three Generations Euclidean vs NCC Comparison"
                    imageSrc="/src/assets/project1/alignment_only_images/eucl_and_ncc_side_by_side_three_generations.jpg"
                  >
                    <img 
                      src="/src/assets/project1/alignment_only_images/eucl_and_ncc_side_by_side_three_generations.jpg"
                      alt="Three generations euclidean vs ncc comparison"
                      className="w-full h-auto aspect-[2/1] object-contain rounded-lg mb-4"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                    <div className="bg-gradient-to-r from-purple-200 to-pink-200 h-64 rounded-lg hidden items-center justify-center mb-4">
                      <span className="text-gray-700">Three Generations Euclidean vs NCC</span>
                    </div>
                  </ImageWithModal>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-berkeley-navy mb-2">Alignment Vectors:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-800 mb-1">Euclidean:</p>
                        <p><span className="text-red-600 font-medium">Red:</span> (-3, 58)</p>
                        <p><span className="text-green-600 font-medium">Green:</span> (0, 0)</p>
                        <p><span className="text-blue-600 font-medium">Blue:</span> (14, 53)</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 mb-1">NCC:</p>
                        <p><span className="text-red-600 font-medium">Red:</span> (-3, 58)</p>
                        <p><span className="text-green-600 font-medium">Green:</span> (0, 0)</p>
                        <p><span className="text-blue-600 font-medium">Blue:</span> (14, 53)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bells and Whistles */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            <h2 className="text-3xl font-bold text-berkeley-navy mb-8 text-center">Bells & Whistles</h2>

            {/* Post Processing Order */}
            <div>
              <h3 className="text-2xl font-semibold text-berkeley-navy mb-4">Post Processing Order</h3>
              <div className="p-5 bg-blue-50 rounded border border-blue-200 text-gray-800 text-sm space-y-3 mb-6">
                <h5 className="font-semibold text-berkeley-navy mb-2">Processing Order for Bells and Whistle Adjustments</h5>
                <p>The image enhancement features are applied in a specific sequence to ensure the best possible results. The Sobel filter, which is utilized for improved alignment, is applied to the individual channels <em>before</em> the alignment and stacking process begins. The following "bells and whistles" are then applied to the fully aligned and stacked color image in a deliberate order.</p>
                <p>The post-alignment processing pipeline is as follows:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li><strong>Automatic Cropping:</strong> The first step is always to remove the image borders. This is critical because the dark or inconsistent borders of the original glass plates would otherwise negatively affect the statistical calculations used in the subsequent contrast and color adjustment steps. If automatic cropping is enabled, the gradient-based Sobel method is used to precisely trim the image. If not, a basic crop is still performed to remove any edge artifacts created by the pixel "rollover" during alignment and other border effects such as shadows and distortions from the edges.</li>
                  <li><strong>Color Correction:</strong> Immediately after cropping, a matrix-based color mapping is applied. This step is performed early in the pipeline to correct any inherent color inaccuracies that may originate from the original color filters on the glass plates. By establishing a correct color base first, subsequent enhancements become more effective and predictable.</li>
                  <li><strong>Adaptive Contrast Adjustment:</strong> With the borders removed and the base colors corrected, the adaptive gamma correction is applied. This step adjusts the image's overall brightness and contrast, enhancing detail in both the shadow and highlight regions. An adjustment magnitude of 90% is used to apply a strong but not overpowering correction.</li>
                  <li><strong>White Balancing:</strong> The final step in the pipeline is a combined white balance adjustment. This fine-tunes the color temperature and brightness of the image to achieve a natural and visually neutral result, correcting any remaining color casts.</li>
                </ol>
                <p>This specific sequence—crop, color correct, contrast, then white balance—ensures that each enhancement builds logically on the previous one, leading to a clean, well-balanced, and visually appealing final image.</p>
              </div>
              <div className="bg-white p-6 rounded-lg mb-4">
                <h4 className="text-xl font-bold text-berkeley-navy mb-4">Automatic Border Cropping</h4>
                <h4 className="font-semibold mb-2">Implementation Details</h4>
                <p className="text-gray-600 text-sm">Both automatic contrasting and white balancing are performed <strong>after</strong> auto-cropping, as borders would introduce noise to these algorithms and affect the statistical calculations used for gamma correction and color balance.<br/>To make the pictures prettier, I needed to detect and remove borders automatically rather than using a fixed margin. Initial approaches using variance analysis and pixel intensity thresholds proved unstable.</p>
                <div className="mt-4 p-5 bg-blue-50 rounded border border-blue-200 text-gray-800 text-sm space-y-3">
                  <h5 className="font-semibold text-berkeley-navy mb-2">Automated Border Cropping via Sobel Filter-Based Edge Detection</h5>
                  <p>To improve the final appearance of the aligned images, an automated cropping system was implemented to detect and remove unwanted borders. This method proved more reliable than earlier attempts that used simple pixel intensity or variance analysis. The core of this approach is to identify the distinct transitions between the image content and its border using gradient-based edge detection.</p>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Image Preparation:</strong> If the input image is in color, it is first converted to a grayscale representation by averaging the RGB channels. An optional Gaussian smoothing filter can be applied at this stage to reduce noise in the image, which helps in preventing false edge detections later on.</li>
                    <li><strong>Gradient Calculation with a Custom Sobel Filter:</strong> Edge detection is performed using a custom implementation of the Sobel operator. Two 3x3 kernels are used to calculate the horizontal (Gx) and vertical (Gy) gradients across the image:</li>
                    <div className="flex flex-col md:flex-row gap-6 mt-2 justify-center items-center w-full">
                      <div className="flex flex-col items-center">
                        <div className="font-mono text-xs mb-1 text-center">sobel_kernel_x</div>
                        <table className="border border-gray-300 text-xs mx-auto">
                          <tbody>
                            <tr>
                              <td className="border px-2 py-1 text-center">-1</td>
                              <td className="border px-2 py-1 text-center">0</td>
                              <td className="border px-2 py-1 text-center">1</td>
                            </tr>
                            <tr>
                              <td className="border px-2 py-1 text-center">-3</td>
                              <td className="border px-2 py-1 text-center">0</td>
                              <td className="border px-2 py-1 text-center">3</td>
                            </tr>
                            <tr>
                              <td className="border px-2 py-1 text-center">-1</td>
                              <td className="border px-2 py-1 text-center">0</td>
                              <td className="border px-2 py-1 text-center">1</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="font-mono text-xs mb-1 text-center">sobel_kernel_y</div>
                        <table className="border border-gray-300 text-xs mx-auto">
                          <tbody>
                            <tr>
                              <td className="border px-2 py-1 text-center">-1</td>
                              <td className="border px-2 py-1 text-center">-3</td>
                              <td className="border px-2 py-1 text-center">-1</td>
                            </tr>
                            <tr>
                              <td className="border px-2 py-1 text-center">0</td>
                              <td className="border px-2 py-1 text-center">0</td>
                              <td className="border px-2 py-1 text-center">0</td>
                            </tr>
                            <tr>
                              <td className="border px-2 py-1 text-center">1</td>
                              <td className="border px-2 py-1 text-center">3</td>
                              <td className="border px-2 py-1 text-center">1</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <ul className="list-disc ml-6 mt-1">
                      <li>A manual convolution function applies each kernel to the image. This function uses zero-padding to ensure that the output gradient maps have the same dimensions as the input image.</li>
                      <li>The final edge strength is calculated by computing the magnitude of the gradients at each pixel using the formula: <span className="font-mono">Magnitude = sqrt(Gx² + Gy²)</span>. This results in a map where brighter pixels indicate stronger edges.</li>
                    </ul>
                    <li><strong>Boundary Localization and Cropping:</strong> The crop lines are determined by analyzing the edge strength map within a margin of 8% on all four sides of the image.
                      <ul className="list-disc ml-6 mt-1">
                        <li>For each border region (top, bottom, left, and right), a one-dimensional "edge profile" is created by summing the edge strength values along the relevant axis.</li>
                        <li>This 1D profile is smoothed with a Gaussian filter to reduce noise. A dynamic threshold is then applied by identifying the top 25% of the strongest edge signals.</li>
                        <li>The final crop boundary for each side is identified based on the position of these strong edge signals, effectively locating the innermost edge of the border.</li>
                        <li>Once all four boundaries are determined, the image is cropped to these coordinates.</li>
                      </ul>
                    </li>
                  </ol>
                  <p>This gradient-based method successfully removes borders by identifying the actual content boundaries within the image. Its use of a dynamic, percentile-based threshold allows it to adapt to various images without requiring manual adjustments, making it a robust and automated solution for cleaning the final output.</p>
                  <div className="mt-2 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 text-sm rounded">
                    <strong>Note:</strong> The detected cropping lines have been visualized in the images below on the left-hand side with red lines.
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Church - Auto Cropped</h4>
                  <ImageWithModal 
                    imageName="Church Auto Cropping"
                    imageSrc="/src/assets/project1/bells_and_whistles/church_auto_cropping.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/church_auto_cropping.png"
                      alt="Church auto cropping result"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Lastochikino - Auto Cropped</h4>
                  <ImageWithModal 
                    imageName="Lastochikino Auto Cropping"
                    imageSrc="/src/assets/project1/bells_and_whistles/lastochikino_auto_cropping.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/lastochikino_auto_cropping.png"
                      alt="Lastochikino auto cropping result"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
              </div>
            </div>

            {/* Automatic White Balance */}
            <div>
              <h3 className="text-2xl font-semibold text-berkeley-navy mb-4">Automatic White Balance</h3>
              <div className="bg-white p-6 rounded-lg mb-4">
                <div className="p-5 bg-blue-50 rounded border border-blue-200 text-gray-800 text-sm space-y-3">
                  <h4 className="font-semibold text-berkeley-navy mb-2">Implementation Details</h4>
                  <h3 className="text-lg font-bold mb-2">Automatic White Balance with Brightness and Temperature Control</h3>
                  <p>To correct for color casts which are especially common in historical images and produce natural-looking tones, a custom, two-stage white balance algorithm was developed. This hybrid approach first applies a broad color correction and then refines the result with more nuanced adjustments for brightness and color temperature.</p>
                  <p><strong>My combined white balancing works as follows:</strong></p>
                  <ol className="list-decimal list-inside ml-4">
                    <li>
                      <strong>Initial Correction with the Gray-World Assumption:</strong> The first stage operates on the "gray-world" principle, which assumes that the average color of the entire scene should be a neutral gray. The algorithm calculates the average value for the red, green, and blue channels individually. It then computes scaling factors to shift the average of each channel to match a common, neutral gray value. This step effectively removes any dominant, overall color cast from the image.
                    </li>
                    <li>
                      <strong>Refinement with Percentile-Based Scaling:</strong> The output of the gray-world correction is then passed to a second stage for fine-tuning. This stage is based on the "white patch" concept, but with significant enhancements for robustness and control:
                      <ul className="list-disc ml-6 mt-1">
                        <li><strong>Robust White Point Detection:</strong> Instead of using the absolute brightest pixels (which could be noise or scratches), the algorithm identifies the 98th percentile of pixel values for each color channel. This provides a much more stable and reliable measure of the "whitest" point in the image.</li>
                        <li><strong>Brightness Adjustment:</strong> The overall brightness is normalized by scaling the image so that its identified white point matches a predefined target brightness (e.g., 95%). This ensures consistent brightness across different images and prevents the highlights from being clipped or "blown out."</li>
                        <li><strong>Color Temperature Control:</strong> A unique feature of my implementation is a <code>temperature</code> parameter that allows for artistic control over the final color tone. This parameter adjusts the balance between the red and blue channels, making it possible to shift the image towards a warmer (more yellow/red) or cooler (bluer) look.</li>
                      </ul>
                    </li>
                  </ol>
                  <p>By combining a global gray-world correction with a refined, percentile-based adjustment, this method provides a stable and highly adaptable solution.</p>
                  <p className="mt-2">The effect of the single steps and the combined correction can be seen in the images below.</p>
                </div>
              </div>
              {/* White Balance Images */}
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Melons - White Balance Percent</h4>
                  <ImageWithModal 
                    imageName="Melons White Balance Percent"
                    imageSrc="/src/assets/project1/bells_and_whistles/melons_white_balance_percentile.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/melons_white_balance_percentile.png"
                      alt="Melons white balance percent method"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Melons - White Balance All Gray</h4>
                  <ImageWithModal 
                    imageName="Melons White Balance All Gray"
                    imageSrc="/src/assets/project1/bells_and_whistles/melons_white_balance_all_gray.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/melons_white_balance_all_gray.png"
                      alt="Melons white balance all gray method"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Melons - White Balance Combined</h4>
                  <ImageWithModal 
                    imageName="Melons White Balance Combined"
                    imageSrc="/src/assets/project1/bells_and_whistles/melons_white_balance_combined.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/melons_white_balance_combined.png"
                      alt="Melons white balance combined method"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Self Portrait - White Balance Combined</h4>
                  <ImageWithModal 
                    imageName="Self Portrait White Balance Combined"
                    imageSrc="/src/assets/project1/bells_and_whistles/self_portait_white_balance_combined.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/self_portait_white_balance_combined.png"
                      alt="Self portrait white balance combined method"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Harvesters - White Balance Combined</h4>
                  <ImageWithModal 
                    imageName="Harvesters White Balance Combined"
                    imageSrc="/src/assets/project1/bells_and_whistles/harvesters_white_balance_combined.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/harvesters_white_balance_combined.png"
                      alt="Harvesters white balance combined method"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
              </div>
            </div>

            {/* Automatic Contrasting */}
            <div>
              <h3 className="text-2xl font-semibold text-berkeley-navy mb-4">Automatic Contrasting</h3>
              <div className="bg-white p-6 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Implementation Details</h4>
                <div className="p-5 bg-blue-50 rounded border border-blue-200 text-gray-800 text-sm space-y-3 mb-4">
                  <h5 className="font-semibold text-berkeley-navy mb-2">Adaptive Contrast Enhancement with Dynamic Gamma Correction</h5>
                  <p>To automatically improve the visual balance of images, I developed an adaptive contrast enhancement technique. This method uses a non-linear gamma correction that dynamically adjusts its intensity based on the overall brightness of the source image, ensuring that details in both shadows and highlights are preserved.</p>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Brightness Analysis:</strong> First, the algorithm assesses the overall brightness of the image. This is done by calculating the mean intensity value, which is the average of the means of the red, green, and blue color channels.</li>
                    <li><strong>Dynamic Gamma Calculation:</strong> Unlike a fixed correction, the gamma value is calculated differently depending on whether the image is predominantly dark or bright:
                      <ul className="list-disc ml-6 mt-1">
                        <li>For <strong>dark images</strong> (where the mean intensity is less than 0.5), a gamma value greater than 1 is calculated using the formula <span className="font-mono">γ = -log₂(mean_intensity)</span>. This brightens the image by expanding the range of the darker tones.</li>
                        <li>For <strong>bright images</strong> (where the mean intensity is 0.5 or greater), a gamma value less than 1 is calculated using the formula <span className="font-mono">γ = e^(1 - mean_intensity)</span>. This subtly darkens the image, helping to recover details in overexposed areas.</li>
                        <li>To prevent extreme adjustments, the final gamma value is always clamped to a reasonable range of <strong>[0.3, 3.0]</strong>.</li>
                      </ul>
                    </li>
                    <li><strong>Applying the Correction:</strong> The calculated gamma is then applied to each color channel of the image. A special feature of this implementation is the <span className="font-mono">adjustment_magnitude</span> parameter, which allows for fine-tuning the strength of the correction. This parameter scales the calculated gamma value before it is applied, enabling anything from a subtle tweak to a full-strength adjustment. The final pixel values are clipped to ensure they remain within the valid  range and the contrast does not get adjusted too much.</li>
                  </ol>
                  <p>This adaptive approach produces natural and visually appealing results by intelligently tailoring the gamma correction to the specific characteristics of each image.</p>
                </div>
              </div>
              {/* Contrast Images */}
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Emir - Contrast</h4>
                  <p className="text-sm text-gray-600 mb-2">Gamma correction: mean_intensity=0.534, gamma=1.594</p>
                  <ImageWithModal 
                    imageName="Emir Contrast"
                    imageSrc="/src/assets/project1/bells_and_whistles/emir_contrast.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/emir_contrast.png"
                      alt="Emir contrast adjustment"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Siren - Contrast</h4>
                  <p className="text-sm text-gray-600 mb-2">Gamma correction: mean_intensity=0.512, gamma=1.629</p>
                  <ImageWithModal 
                    imageName="Siren Contrast"
                    imageSrc="/src/assets/project1/bells_and_whistles/siren_contrast.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/siren_contrast.png"
                      alt="Siren contrast adjustment"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Self Portrait - Contrast</h4>
                  <p className="text-sm text-gray-600 mb-2">Gamma correction: mean_intensity=0.492, gamma=1.025 → This one is very balanced, next to no adjustment necessary</p>
                  <ImageWithModal 
                    imageName="Self Portrait Contrast"
                    imageSrc="/src/assets/project1/bells_and_whistles/self_portrait_contrast.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/self_portrait_contrast.png"
                      alt="Self portrait contrast adjustment"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
              </div>
            </div>

            {/* Adjusted Color Mapping */}
            <div>
              <h3 className="text-2xl font-semibold text-berkeley-navy mb-4">Adjusted Color Mapping</h3>
              <div className="p-5 bg-blue-50 rounded border border-blue-200 text-gray-800 text-sm space-y-3 mb-4">
                <h4 className="font-semibold text-berkeley-navy mb-2">Implementation Details</h4>
                <h3 className="text-lg font-bold mb-2">Color Remapping with a Custom Transformation Matrix</h3>
                <p>Another challenge with historical three-color photography is that the spectral responses of the original glass plate filters do not directly correspond to modern RGB color channels. A direct one-to-one mapping often results in unnatural and inaccurate colors. To address this, I implemented a refined color remapping technique using a 3x3 linear transformation matrix.</p>
                <p>The goal was to create a transformation that would better approximate the intended colors, with a particular focus on enhancing the vibrancy of natural elements like plants. The process involved:</p>
                <ol className="list-decimal list-inside ml-4">
                  <li>
                    <strong>Defining the Transformation:</strong> The core of this method is a matrix that recalculates each pixel's final RGB values as a weighted sum of its original red, green, and blue values. For instance, the new red value is calculated as:
                    <span className="block font-mono bg-gray-100 rounded p-1 my-1">new_red = c1*old_red + c2*old_green + c3*old_blue</span>
                  </li>
                  <li>
                    <strong>Experimental Optimization:</strong> The optimal transformation matrix was determined through an iterative, experimental process. Different matrix values were tested, and the resulting images were visually compared to manually restored versions of the same photographs from historical libraries. This allowed for fine-tuning the matrix to achieve the most aesthetically pleasing and natural-looking results.
                  </li>
                  <li>
                    <strong>The Optimized Matrix:</strong> The final, experimentally-derived matrix was designed to achieve the following:
                    <ul className="list-disc ml-6 mt-1">
                      <li><strong>Slightly reduce red intensity:</strong> <span className="font-mono">[0.99, 0.01, 0.00]</span></li>
                      <li><strong>Boost the green channel:</strong> <span className="font-mono">[0.00, 1.08, 0.00]</span> to make plants appear more vibrant.</li>
                      <li><strong>Weaken the blue channel:</strong> <span className="font-mono">[0.00, 0.01, 0.96]</span> to temper overly cool tones and add a hint of warmth.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Implementation:</strong> In the code, the image is first reshaped into a flat list of pixels. A fast matrix multiplication (dot product) is then performed to apply the transformation to all pixels simultaneously. Finally, the image is reshaped back to its original dimensions, and the pixel values are clipped to ensure they remain within the valid  range.
                  </li>
                </ol>
                <p>This custom color remapping resulted in a  improvement in color fidelity, producing images with "fresher" and more realistic colors, especially in scenes with vegetation. The results, which can be seen in the color-matched examples, closely align with the quality of professionally restored archival prints.</p>
              </div>
              {/* Color Adjustment Images */}
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Church - Color Adjustment</h4>
                  <ImageWithModal 
                    imageName="Church Color Adjustment"
                    imageSrc="/src/assets/project1/bells_and_whistles/church_color_adjustment.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/church_color_adjustment.png"
                      alt="Church color adjustment"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Self Portrait - Color Adjustment</h4>
                  <ImageWithModal 
                    imageName="Self Portrait Color Adjustment"
                    imageSrc="/src/assets/project1/bells_and_whistles/self_portrait_color_adjustment.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/self_portrait_color_adjustment.png"
                      alt="Self portrait color adjustment"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
              </div>
            </div>

            {/* Improve alignment robustness with edge detection */}
            <div>
              <h3 className="text-2xl font-semibold text-berkeley-navy mb-4">Improve Alignment Robustness with Edge Detection</h3>
              <div className="bg-white p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  To explore a more robust alignment strategy, I implemented an approach that relies on edge detection rather than a direct comparison of raw pixel intensities. The goal was to align the image channels based on their underlying structural features, which are often more consistent across different color filter plates than brightness or color values. For this, I used the Sobel operator.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The implementation process is as follows:
                </p>
                <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 ml-4 space-y-2">
                  <li><strong>Gradient Extraction:</strong> For each individual color channel (red, green, and blue), the Sobel filter is applied. This involves convolving the image with two separate kernels to compute the horizontal (Gx) and vertical (Gy) gradients.</li>
                  <li><strong>Edge Map Generation:</strong> The magnitude of the gradients is then calculated at each pixel using the formula <span className="font-mono bg-gray-100 px-1 rounded">Magnitude = √(Gx² + Gy²)</span>. This creates an "edge map" for each channel, which highlights the structural contours of the image.</li>
                  <li><strong>Alignment on Edge Maps:</strong> The alignment algorithm (e.g., Normalized Cross-Correlation) is then run on these generated edge maps instead of the original raw pixel data.</li>
                </ol>
                
                <h4 className="text-lg font-semibold text-berkeley-navy mb-3 mt-6">Results and Analysis</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In practice, this gradient-based method did not yield a significant improvement in alignment quality over the standard NCC approach for most of the images in the dataset. However, the experiment still provided valuable insights and helped significantly with achieving great results in auto-cropping.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The primary benefit was in visualizing the structural content of each channel. By generating and stacking the edge maps, it becomes clear which structural features are present in each of the three color plates. The images below demonstrate this by comparing the original photograph with the stacked result of the Sobel-filtered channels. These visualizations serve two main purposes:
                </p>
                <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 ml-4 space-y-1">
                  <li>They confirm that the Sobel filter is effectively identifying edges within each channel.</li>
                  <li>They show which color channels contain the most dominant structural information on particular surfaces and illustrate the inherent challenge of aligning channels that may have very different characteristics.</li>
                </ol>
                <p className="text-gray-700 leading-relaxed">
                  While this method did not outperform the standard approach on this particular dataset in most cases, the underlying theory remains sound. An alignment based on structural features holds the potential to be more robust, especially for images with challenging lighting conditions or significant variations in exposure between the color channels.
                </p>
              </div>
              {/* Edge Detection Images */}
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Church - Edge Detection</h4>
                  <ImageWithModal 
                    imageName="Church Edge Detection"
                    imageSrc="/src/assets/project1/bells_and_whistles/church_edge_detection.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/church_edge_detection.png"
                      alt="Church edge detection"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Italil - Edge Detection</h4>
                  <ImageWithModal 
                    imageName="Italil Edge Detection"
                    imageSrc="/src/assets/project1/bells_and_whistles/italil_edge_detection.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/italil_edge_detection.png"
                      alt="Italil edge detection"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-2">Emir - Edge Detection</h4>
                  <ImageWithModal 
                    imageName="Emir Edge Detection"
                    imageSrc="/src/assets/project1/bells_and_whistles/emir_edge_detection.png"
                  >
                    <img 
                      src="/src/assets/project1/bells_and_whistles/emir_edge_detection.png"
                      alt="Emir edge detection"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                  </ImageWithModal>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Run for Glory */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-berkeley-navy mb-8 text-center">The Run for Glory</h2>
            <p className="text-gray-700 text-center mb-10">Automatically restored images after all bells and whistles have been applied together.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Images from all_bells_and_whistles */}
              <div className="flex flex-col items-center">
                <ImageWithModal 
                  imageName="Church - All Bells and Whistles"
                  imageSrc="/src/assets/project1/all_bells_and_whistles/church_b_n_w.png"
                >
                  <img 
                    src="/src/assets/project1/all_bells_and_whistles/church_b_n_w.png"
                    alt="church"
                    className="w-full max-w-md h-72 object-contain rounded-lg bg-white shadow mb-2"
                  />
                </ImageWithModal>
                <p className="text-sm text-gray-600">Full restoration of church</p>
              </div>
              <div className="flex flex-col items-center">
                <ImageWithModal 
                  imageName="Eleven Adults - All Bells and Whistles"
                  imageSrc="/src/assets/project1/all_bells_and_whistles/eleven_adults_b_n_w.png"
                >
                  <img 
                    src="/src/assets/project1/all_bells_and_whistles/eleven_adults_b_n_w.png"
                    alt="eleven_adults"
                    className="w-full max-w-md h-72 object-contain rounded-lg bg-white shadow mb-2"
                  />
                </ImageWithModal>
                <p className="text-sm text-gray-600">Full restoration of eleven_adults</p>
              </div>
              <div className="flex flex-col items-center">
                <ImageWithModal 
                  imageName="Icon - All Bells and Whistles"
                  imageSrc="/src/assets/project1/all_bells_and_whistles/icon_b_n_w.png"
                >
                  <img 
                    src="/src/assets/project1/all_bells_and_whistles/icon_b_n_w.png"
                    alt="icon"
                    className="w-full max-w-md h-72 object-contain rounded-lg bg-white shadow mb-2"
                  />
                </ImageWithModal>
                <p className="text-sm text-gray-600">Full restoration of icon</p>
              </div>
              <div className="flex flex-col items-center">
                <ImageWithModal 
                  imageName="Self Portrait - All Bells and Whistles"
                  imageSrc="/src/assets/project1/all_bells_and_whistles/self_portrait_b_n_w.png"
                >
                  <img 
                    src="/src/assets/project1/all_bells_and_whistles/self_portrait_b_n_w.png"
                    alt="self_portrait"
                    className="w-full max-w-md h-72 object-contain rounded-lg bg-white shadow mb-2"
                  />
                </ImageWithModal>
                <p className="text-sm text-gray-600">Full restoration of self_portrait</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-berkeley-navy text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-berkeley-light mb-2">Maximilian Christof - CS180 Project 1</p>
          <p className="text-sm text-berkeley-light/70">
            Images of the Russian Empire - Colorizing the Prokudin-Gorskii Photo Collection
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Project1;