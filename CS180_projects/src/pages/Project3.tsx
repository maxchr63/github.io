import ProjectPart from "@/components/ProjectPart";
import ImageGallery from "@/components/ImageGallery";
import ProjectNavigation from "@/components/ProjectNavigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Camera } from "lucide-react";

const Project3 = () => {
  const ImageWithModal = ({ children, imageName, imageSrc }: { children: React.ReactNode; imageName: string; imageSrc?: string }) => (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer group relative overflow-hidden rounded-lg transition-transform hover:scale-105">
          {children}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Camera className="text-white w-8 h-8" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden p-0">
        <div className="relative w-full h-full">
          <img 
            src={imageSrc} 
            alt={imageName}
            className="w-full h-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-berkeley-light/5 to-berkeley-navy/5">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}berkeley-hero.jpg)` }}
        >
          <div className="absolute inset-0 bg-berkeley-navy/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <div className="inline-flex items-center bg-berkeley-blue/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
            <Camera className="w-4 h-4 mr-2" />
            Project 3
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Image Warping and Mosaicing
          </h1>
          <p className="text-xl md:text-2xl text-berkeley-light max-w-3xl mx-auto">
            Maximilian Christof - CS180 Project 3
          </p>
        </div>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex gap-8 max-w-7xl mx-auto">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block w-32 flex-shrink-0">
              <div className="sticky top-24 space-y-0.5 text-xs px-1">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Overview</div>
                
                <div className="space-y-0.5 border-l-2 border-gray-200 pl-1">
                  <a href="#part-a" className="block text-sm font-semibold text-berkeley-navy hover:text-berkeley-blue transition-colors py-0.5">
                    Part A: Image Warping and Mosaicing
                  </a>
                  
                  <a href="#part-a1" className="block text-xs text-gray-600 hover:text-berkeley-blue transition-colors py-0.5 pl-1">
                    A.1: Shoot the Pictures
                  </a>
                  
                  <a href="#part-a2" className="block text-xs text-gray-600 hover:text-berkeley-blue transition-colors py-0.5 pl-1">
                    A.2: Recover Homographies
                  </a>
                  
                  <a href="#part-a3" className="block text-xs text-gray-600 hover:text-berkeley-blue transition-colors py-0.5 pl-1">
                    A.3: Warp the Images
                  </a>
                  
                  <a href="#part-a4" className="block text-xs text-gray-600 hover:text-berkeley-blue transition-colors py-0.5 pl-1">
                    A.4: Blend the Images into a Mosaic
                  </a>
                  
                  <a href="#part-b" className="block text-sm font-semibold text-berkeley-navy hover:text-berkeley-blue transition-colors py-0.5 mt-2">
                    Part B: Feature Matching for Autostitching
                  </a>
                  
                  <a href="#part-b1" className="block text-xs text-gray-600 hover:text-berkeley-blue transition-colors py-0.5 pl-1">
                    B.1: Harris Corner Detection
                  </a>
                  
                  <a href="#part-b2" className="block text-xs text-gray-600 hover:text-berkeley-blue transition-colors py-0.5 pl-1">
                    B.2: Feature Descriptor Extraction
                  </a>
                  
                  <a href="#part-b3" className="block text-xs text-gray-600 hover:text-berkeley-blue transition-colors py-0.5 pl-1">
                    B.3: Feature Matching
                  </a>
                  
                  <a href="#part-b4" className="block text-xs text-gray-600 hover:text-berkeley-blue transition-colors py-0.5 pl-1">
                    B.4: Autostitching
                  </a>
                  
                  <a href="#part-b5" className="block text-xs text-gray-600 hover:text-berkeley-blue transition-colors py-0.5 pl-2">
                    Manual vs. Auto
                  </a>
                  
                  <a href="#part-b6" className="block text-xs text-gray-600 hover:text-berkeley-blue transition-colors py-0.5 pl-2">
                    3-Image Panoramas
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 space-y-16 min-w-0">

            {/* Project Overview */}
            <div id="part-a" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-berkeley-navy mb-4">Part A: Image Warping and Mosaicing</h2>
              <div className="text-left max-w-4xl mx-auto space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  This section explores image warping through practical implementation of image mosaics. The process involves capturing multiple photographs from different perspectives, then stitching them together through registration, projective warping, resampling, and compositing. The core challenge centers on computing homographies and applying them to transform images.
                </p>
              </div>
            </div>

            {/* Part A.1: Shoot the Pictures */}
            <div id="part-a1">
            <ProjectPart
              partNumber={1}
              title="Part A.1: Capturing Images for Mosaicing"
              description="Understanding projective transformations and image acquisition strategy"
              detailedDescription={[]}
              className="mb-16"
            >
              <div className="space-y-8">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-4">Projective Transformations Hierarchy</h4>
                  <p className="text-gray-700 mb-4">
                    The project relies on projective transformations to handle perspective differences between images. These transformations form a hierarchy of geometric operations, each with increasing flexibility:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Translation</strong> shifts images along x and y axes (2 parameters)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Euclidean</strong> adds rotation while maintaining distances (3 parameters)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Similarity</strong> introduces uniform scaling while preserving angles (4 parameters)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Affine</strong> allows non-uniform scaling and shearing, keeping parallel lines parallel (6 parameters)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Projective</strong> provides the most general 2D linear transformation, preserving only straight lines (8 parameters)</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Projective transformations work particularly well for mosaicing because they model the perspective distortion that naturally occurs when rotating a camera around its optical center. When images share the same center of projection but capture different viewing angles, they can't be directly aligned, they need perspective correction first.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The image acquisition strategy required rotating the camera around its optical center while maintaining the same projection point. This approach captures overlapping views of a scene from different angles, creating the perspective variation that projective warping can then correct.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    The example images below demonstrate the captured perspectives:
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Image Set 1: Berkeley Bell Tower</h4>
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Bell Tower - Left View"
                        imageSrc={`${import.meta.env.BASE_URL}project3/tower1.jpeg`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/tower1.jpeg`}
                          alt="bell tower left view"
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Left View</p>
                    </div>
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Bell Tower - Center View"
                        imageSrc={`${import.meta.env.BASE_URL}project3/tower2.jpeg`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/tower2.jpeg`}
                          alt="bell tower center view"
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Center View</p>
                    </div>
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Bell Tower - Right View"
                        imageSrc={`${import.meta.env.BASE_URL}project3/tower3.jpeg`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/tower3.jpeg`}
                          alt="bell tower right view"
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Right View</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Image Set 2: Old Buildings</h4>
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Old Buildings - Left View"
                        imageSrc={`${import.meta.env.BASE_URL}project3/oldbuildings1.jpeg`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/oldbuildings1.jpeg`}
                          alt="old buildings left view"
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Left View</p>
                    </div>
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Old Buildings - Center View"
                        imageSrc={`${import.meta.env.BASE_URL}project3/oldbuildings2.jpeg`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/oldbuildings2.jpeg`}
                          alt="old buildings center view"
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Center View</p>
                    </div>
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Old Buildings - Right View"
                        imageSrc={`${import.meta.env.BASE_URL}project3/oldbuildings3.jpeg`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/oldbuildings3.jpeg`}
                          alt="old buildings right view"
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Right View</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Image Set 3: Physics Building</h4>
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Physics Building - Left View"
                        imageSrc={`${import.meta.env.BASE_URL}project3/physics1.jpeg`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/physics1.jpeg`}
                          alt="physics building left view"
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Left View</p>
                    </div>
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Physics Building - Center View"
                        imageSrc={`${import.meta.env.BASE_URL}project3/physics2.jpeg`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/physics2.jpeg`}
                          alt="physics building center view"
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Center View</p>
                    </div>
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Physics Building - Right View"
                        imageSrc={`${import.meta.env.BASE_URL}project3/physics3.jpeg`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/physics3.jpeg`}
                          alt="physics building right view"
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Right View</p>
                    </div>
                  </div>
                </div>
              </div>
            </ProjectPart>
            </div>

            {/* Part A.2: Recover Homographies */}
            <div id="part-a2">
            <ProjectPart
              partNumber={2}
              title="Part A.2: Estimating the Homography"
              description="Computing homography matrices from corresponding point pairs"
              detailedDescription={[]}
              className="mb-16"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    To align the images, it was necessary to determine the homography parameters, a 3×3 matrix with 8 independent values, since the last element can be fixed to 1 for normalization. The homography relates corresponding points between two images, mapping one perspective onto another.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Correspondence points were selected manually: each pair marks the same physical location in both images. While four point pairs are the theoretical minimum to constrain all degrees of freedom (each pair provides two constraints), practical usage requires more due to noise and inexact measurements. Using more points allows the system of equations to be solved with least-squares regression, producing a solution that is less sensitive to outliers and small errors.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    For each selected pair (x, y) in the source and (x', y') in the destination image, the corresponding equations can be written in a linear system. The image below shows the structure of these equations:
                  </p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-4 text-center">General Homography Equation System</h4>
                  <div className="overflow-x-auto flex justify-center">
                    <div className="text-sm text-gray-800">
                      <div className="flex items-center gap-3">
                        <div className="border-l-2 border-gray-800 pl-2 pr-3">
                          <div>x&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;−x′x&nbsp;&nbsp;&nbsp;−x′y&nbsp;&nbsp;&nbsp;−x′</div>
                          <div>0&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;−y′x&nbsp;&nbsp;&nbsp;−y′y&nbsp;&nbsp;&nbsp;−y′</div>
                        </div>
                        <div className="border-l-2 border-r-2 border-gray-800 px-3 flex flex-col justify-center">
                          <div className="text-center leading-tight">h₁₁</div>
                          <div className="text-center leading-tight">h₁₂</div>
                          <div className="text-center leading-tight">h₁₃</div>
                          <div className="text-center leading-tight">h₂₁</div>
                          <div className="text-center leading-tight">h₂₂</div>
                          <div className="text-center leading-tight">h₂₃</div>
                          <div className="text-center leading-tight">h₃₁</div>
                          <div className="text-center leading-tight">h₃₂</div>
                          <div className="text-center leading-tight">h₃₃</div>
                        </div>
                        <div className="px-2">
                          <span className="text-xl">=</span>
                        </div>
                        <div className="px-2">
                          <span className="text-xl">0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Example: Old Buildings Homography Computation</h4>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-6">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-3">System of Linear Equations from Correspondence Points</h5>
                    <p className="text-sm text-gray-600 mb-4">Each pair of corresponding points generates two equations (one for x-coordinate, one for y-coordinate). The complete system A×h = b:</p>
                    <div className="bg-white p-4 rounded overflow-x-auto">
                      <pre className="text-xs font-mono text-gray-800 leading-relaxed">
{`Equation 1:  773.0×h₁ + 930.0×h₂ + 1.0×h₃ + 0.0×h₄ + 0.0×h₅ + 0.0×h₆ + -85803.0×h₇ + -103230.0×h₈ = 111
Equation 2:  0.0×h₁ + 0.0×h₂ + 0.0×h₃ + 773.0×h₄ + 930.0×h₅ + 1.0×h₆ + -733577.0×h₇ + -882570.0×h₈ = 949
Equation 3:  855.0×h₁ + 891.0×h₂ + 1.0×h₃ + 0.0×h₄ + 0.0×h₅ + 0.0×h₆ + -185535.0×h₇ + -193347.0×h₈ = 217
Equation 4:  0.0×h₁ + 0.0×h₂ + 0.0×h₃ + 855.0×h₄ + 891.0×h₅ + 1.0×h₆ + -760095.0×h₇ + -792099.0×h₈ = 889
Equation 5:  751.0×h₁ + 282.0×h₂ + 1.0×h₃ + 0.0×h₄ + 0.0×h₅ + 0.0×h₆ + -110397.0×h₇ + -41454.0×h₈ = 147
Equation 6:  0.0×h₁ + 0.0×h₂ + 0.0×h₃ + 751.0×h₄ + 282.0×h₅ + 1.0×h₆ + -165971.0×h₇ + -62322.0×h₈ = 221
Equation 7:  838.0×h₁ + 502.0×h₂ + 1.0×h₃ + 0.0×h₄ + 0.0×h₅ + 0.0×h₆ + -197768.0×h₇ + -118472.0×h₈ = 236
Equation 8:  0.0×h₁ + 0.0×h₂ + 0.0×h₃ + 838.0×h₄ + 502.0×h₅ + 1.0×h₆ + -399726.0×h₇ + -239454.0×h₈ = 477
Equation 9:  901.0×h₁ + 238.0×h₂ + 1.0×h₃ + 0.0×h₄ + 0.0×h₅ + 0.0×h₆ + -295528.0×h₇ + -78064.0×h₈ = 328
Equation 10: 0.0×h₁ + 0.0×h₂ + 0.0×h₃ + 901.0×h₄ + 238.0×h₅ + 1.0×h₆ + -192814.0×h₇ + -50932.0×h₈ = 214
Equation 11: 921.0×h₁ + 509.0×h₂ + 1.0×h₃ + 0.0×h₄ + 0.0×h₅ + 0.0×h₆ + -302088.0×h₇ + -166952.0×h₈ = 328
Equation 12: 0.0×h₁ + 0.0×h₂ + 0.0×h₃ + 921.0×h₄ + 509.0×h₅ + 1.0×h₆ + -453132.0×h₇ + -250428.0×h₈ = 492
Equation 13: 1054.0×h₁ + 543.0×h₂ + 1.0×h₃ + 0.0×h₄ + 0.0×h₅ + 0.0×h₆ + -471138.0×h₇ + -242721.0×h₈ = 447
Equation 14: 0.0×h₁ + 0.0×h₂ + 0.0×h₃ + 1054.0×h₄ + 543.0×h₅ + 1.0×h₆ + -557566.0×h₇ + -287247.0×h₈ = 529
Equation 15: 1160.0×h₁ + 144.0×h₂ + 1.0×h₃ + 0.0×h₄ + 0.0×h₅ + 0.0×h₆ + -653080.0×h₇ + -81072.0×h₈ = 563
Equation 16: 0.0×h₁ + 0.0×h₂ + 0.0×h₃ + 1160.0×h₄ + 144.0×h₅ + 1.0×h₆ + -216920.0×h₇ + -26928.0×h₈ = 187
Equation 17: 1206.0×h₁ + 569.0×h₂ + 1.0×h₃ + 0.0×h₄ + 0.0×h₅ + 0.0×h₆ + -685008.0×h₇ + -323192.0×h₈ = 568
Equation 18: 0.0×h₁ + 0.0×h₂ + 0.0×h₃ + 1206.0×h₄ + 569.0×h₅ + 1.0×h₆ + -671742.0×h₇ + -316933.0×h₈ = 557
Equation 19: 746.0×h₁ + 105.0×h₂ + 1.0×h₃ + 0.0×h₄ + 0.0×h₅ + 0.0×h₆ + -115630.0×h₇ + -16275.0×h₈ = 155
Equation 20: 0.0×h₁ + 0.0×h₂ + 0.0×h₃ + 746.0×h₄ + 105.0×h₅ + 1.0×h₆ + -14920.0×h₇ + -2100.0×h₈ = 20
Equation 21: 1136.0×h₁ + 296.0×h₂ + 1.0×h₃ + 0.0×h₄ + 0.0×h₅ + 0.0×h₆ + -608896.0×h₇ + -158656.0×h₈ = 536
Equation 22: 0.0×h₁ + 0.0×h₂ + 0.0×h₃ + 1136.0×h₄ + 296.0×h₅ + 1.0×h₆ + -361248.0×h₇ + -94128.0×h₈ = 318
Equation 23: 1143.0×h₁ + 869.0×h₂ + 1.0×h₃ + 0.0×h₄ + 0.0×h₅ + 0.0×h₆ + -569214.0×h₇ + -432762.0×h₈ = 498
Equation 24: 0.0×h₁ + 0.0×h₂ + 0.0×h₃ + 1143.0×h₄ + 869.0×h₅ + 1.0×h₆ + -938403.0×h₇ + -713449.0×h₈ = 821`}
                      </pre>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 italic">Note: h₉ is fixed to 1.0 for normalization, so we solve for 8 unknowns (h₁ through h₈) using least-squares</p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-3">Computed Homography Matrix H</h5>
                    <p className="text-sm text-gray-600 mb-4">Solution obtained via least-squares regression (SVD decomposition):</p>
                    <div className="bg-white p-4 rounded overflow-x-auto">
                      <pre className="text-sm font-mono text-gray-800">
{`H = [[ 3.14801343e+00  -2.22066205e-01  -1.97151599e+03]
     [ 9.83750884e-01   2.51946342e+00  -9.54008383e+02]
     [ 1.65728949e-03  -1.99626010e-05   1.00000000e+00]]`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Correspondence Point Visualizations</h4>
                  <p className="text-gray-700 mb-6">
                    For the project images, featuring the Berkeley tower, historic campus buildings, and the physics building, this method was used to choose sets of corresponding points in each image pair. These selections laid the foundation for robust computation of the transformation matrix.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Bell Tower - Point Correspondences"
                        imageSrc={`${import.meta.env.BASE_URL}project3/tower_images_with_correspondence_points.png.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/tower_images_with_correspondence_points.png.png`}
                          alt="tower point correspondences"
                          className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Bell Tower: Manually Selected Correspondence Points</p>
                    </div>

                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Old Buildings - Point Correspondences"
                        imageSrc={`${import.meta.env.BASE_URL}project3/oldbuilidngs_images_with_correspondence_points.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/oldbuilidngs_images_with_correspondence_points.png`}
                          alt="old buildings point correspondences"
                          className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Old Buildings: Manually Selected Correspondence Points</p>
                    </div>

                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Physics Building - Point Correspondences"
                        imageSrc={`${import.meta.env.BASE_URL}project3/physicsbuilding_images_with_correspondence_points.png.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/physicsbuilding_images_with_correspondence_points.png.png`}
                          alt="physics building point correspondences"
                          className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Physics Building: Manually Selected Correspondence Points</p>
                    </div>
                  </div>
                </div>
              </div>
            </ProjectPart>
            </div>

            {/* Part A.3: Warp the Images */}
            <div id="part-a3">
            <ProjectPart
              partNumber={3}
              title="Part A.3: Warping the Images"
              description="Applying homography transformations with different interpolation methods"
              detailedDescription={[]}
              className="mb-16"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Once I had the homography matrices, the next step was actually warping the images to align them. I implemented two versions, one with nearest neighbor sampling and another with bilinear interpolation.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">Implementation Strategy</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Both warping functions follow an <strong>inverse mapping</strong> approach. Instead of pushing source pixels to output positions, I loop through each pixel in the output image and ask: where does this pixel come from in the source? This prevents holes in the result.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The process works like this:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                      <li>Transform the four corners of the source image using H to figure out how large the output canvas needs to be</li>
                      <li>For each pixel in that output canvas, convert its coordinates to "world" coordinates by adding the offset (min_x, min_y)</li>
                      <li>Apply H⁻¹ to find the corresponding location in the source image</li>
                      <li>Sample the color from the source using either nearest neighbor or bilinear interpolation</li>
                      <li>Store the result in an RGBA output image (alpha channel tracks valid pixels)</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      For rectification cases where I wanted to correct perspective distortion, like straightening out tilted rectangles, I computed the homography from the distorted corners to a clean rectangle of known dimensions. My <code className="bg-gray-100 px-2 py-1 rounded">warp_image_bilinear()</code> and <code className="bg-gray-100 px-2 py-1 rounded">warp_image_NN()</code> functions accept an optional <code className="bg-gray-100 px-2 py-1 rounded">output_shape</code> parameter: when provided, they skip the corner transformation step and just fill the specified rectangle. The <code className="bg-gray-100 px-2 py-1 rounded">show_surroundings_perc</code> parameter expands the canvas slightly to reveal context beyond the rectified region.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">Interpolation Methods</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Nearest neighbor</strong> rounds the source coordinates to the closest integer and copies that pixel directly. It's fast but produces jagged edges when there's significant warping.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Bilinear interpolation</strong> computes fractional offsets <code className="bg-gray-100 px-2 py-1 rounded">dx</code> and <code className="bg-gray-100 px-2 py-1 rounded">dy</code>, then blends the four surrounding pixels. The top two pixels get weighted by <code className="bg-gray-100 px-2 py-1 rounded">(1-dx)</code> and <code className="bg-gray-100 px-2 py-1 rounded">dx</code>, the bottom two likewise, then those results are blended vertically using <code className="bg-gray-100 px-2 py-1 rounded">(1-dy)</code> and <code className="bg-gray-100 px-2 py-1 rounded">dy</code>. This smooths out the result noticeably.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Testing with Rectification</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    To validate the warping functions, I tested them on objects with perspective distortion: floor tiles shot at an angle, an exit sign viewed from below, and a library information stand. For each, I selected the four corners of the distorted rectangle and mapped them to a proper rectangle with the right aspect ratio. After applying the warp, previously angled surfaces appeared flat and undistorted, confirming the implementation worked correctly.
                  </p>

                  <div className="space-y-8">
                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Floor Tiles Rectification</h5>
                      <ImageWithModal 
                        imageName="Floor Tiles - Before and After Rectification"
                        imageSrc={`${import.meta.env.BASE_URL}project3/rectification_of_tiles_on_floor.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/rectification_of_tiles_on_floor.png`}
                          alt="floor tiles rectification"
                          className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Original distorted floor tiles (left) and rectified result (right)</p>
                    </div>

                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Exit Sign Rectification</h5>
                      <ImageWithModal 
                        imageName="Exit Sign - Before and After Rectification"
                        imageSrc={`${import.meta.env.BASE_URL}project3/rectification_of_exit_sign.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/rectification_of_exit_sign.png`}
                          alt="exit sign rectification"
                          className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Original distorted exit sign (left) and rectified result (right)</p>
                    </div>

                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Library Stand Rectification</h5>
                      <ImageWithModal 
                        imageName="Library Stand - Before and After Rectification"
                        imageSrc={`${import.meta.env.BASE_URL}project3/rectification_of_library_stand.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/rectification_of_library_stand.png`}
                          alt="library stand rectification"
                          className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Original distorted library information stand (left) and rectified result (right)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">Comparing Interpolation Quality</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Visually, the two methods produce noticeably different results. Nearest neighbor tends to preserve sharp transitions between pixel values, which can make edges look crisper from a distance. However, this also introduces high-frequency artifacts, the result looks sharper than the original image actually is, with blocky discontinuities wherever multiple output pixels round to the same source location.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Bilinear interpolation, on the other hand, blends neighboring pixels, which naturally attenuates high frequencies and adds more low-frequency content to the output. This makes the warped image appear smoother and slightly softer, avoiding the jagged edges that nearest neighbor produces. The tradeoff is a mild loss of perceived sharpness.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Neither method is objectively "better", it depends on the application. For this project, though, the goal is to blend multiple images into seamless mosaics. Since bilinear interpolation produces smoother gradients and fewer sharp discontinuities, I'm continuing with it for all subsequent warping. The hope is that smoother warped images will make the blending transitions between overlapping regions less visible.
                    </p>
                  </div>
                </div>
              </div>
            </ProjectPart>
            </div>

            {/* Part A.4: Blend Images into Mosaics */}
            <div id="part-a4">
            <ProjectPart
              partNumber={4}
              title="Part A.4: Blending Images into Mosaics"
              description="Creating seamless image mosaics using weighted averaging"
              detailedDescription={[]}
              className="mb-16"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Once the warping implementation was validated, the next challenge involved combining the warped images into seamless panoramas. The overlapping regions required careful handling to avoid visible seams.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">Computing the Canvas Size</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Before blending, the output canvas dimensions needed to be determined. When images undergo warping, their corners can map to negative coordinates or extend beyond their original bounds. To handle this, the <code className="bg-gray-100 px-2 py-1 rounded">get_warped_image_dimensions()</code> function transforms all four corners through the homography and finds the min/max x and y values in "world coordinates." This provides the bounding box for the warped image.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      For blending, the <strong>global bounds</strong> are computed by taking the union of the base image's extent (which remains at [0, width] × [0, height]) and the warped image's bounds. The canvas size becomes the span of these global bounds, and each image is placed at the appropriate offset within this shared coordinate system.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">Blending Approach</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      In overlap regions, both images contribute pixels to the same location. Simply choosing one or averaging them directly creates visible seams due to small alignment errors and exposure differences. To achieve smooth transitions, a <strong>blending mask</strong> was required to smoothly weight the contribution of each image.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Several masking strategies were explored:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>All-edges overlap blending</strong> processes each row individually. For rows with overlap, it locates the center of the overlapping region and creates a feathered transition around that point. For rows without overlap, it assigns full weight to whichever image is present. This approach worked reasonably well but occasionally left visible seams where the blending direction changed between rows.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Overlap blending</strong> determines which side of the canvas has more overlap (left vs. right), then creates a feather zone at the appropriate edge. It uses a small fraction of the overlap width (controlled by <code className="bg-gray-100 px-2 py-1 rounded">feather_fraction</code>) to blend between the two images. The mask is inverted if the base image is on the left instead of the right. This reduced seam visibility but still exhibited issues with complex overlap patterns.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Edge intersection blending</strong> proved to be the most effective approach. Instead of using a vertical feather line, it scans row-by-row to find where the warped image's edge actually intersects the base image in the overlap region. The top and bottom intersection points define an <strong>angled blend line</strong> that follows the true geometry of the overlap. A narrow feather zone (5% of the base image width by default) is applied perpendicular to this line. This minimized the blending region and produced the smoothest results across all test scenes.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The final blending is computed as:
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                      <code className="text-sm">blended = mask · base + (1 − mask) · warped</code>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      where the mask smoothly transitions from 1.0 (full base image) to 0.0 (full warped image) in the feather zone.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Mosaic 1: Bell Tower</h4>
                  <div className="space-y-6">
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Tower - Source and Warped Images"
                        imageSrc={`${import.meta.env.BASE_URL}project3/source_tower_images_and_warped_image.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/source_tower_images_and_warped_image.png`}
                          alt="tower source and warped"
                          className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Source Images and Warped Result</p>
                    </div>
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Tower - Mask and Blending"
                        imageSrc={`${import.meta.env.BASE_URL}project3/tower_source_and_warped_images_and_mask.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/tower_source_and_warped_images_and_mask.png`}
                          alt="tower mask"
                          className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Blending Mask Visualization</p>
                    </div>
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Tower - Final Mosaic"
                        imageSrc={`${import.meta.env.BASE_URL}project3/tower_mosaic.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/tower_mosaic.png`}
                          alt="tower mosaic"
                          className="w-full max-w-6xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Final Bell Tower Mosaic</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Mosaic 2: Old Buildings</h4>
                  <div className="space-y-6">
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Old Buildings - Source and Warped Images"
                        imageSrc={`${import.meta.env.BASE_URL}project3/source_oldbuildings_images_and_warped_image.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/source_oldbuildings_images_and_warped_image.png`}
                          alt="old buildings source and warped"
                          className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Source Images and Warped Result</p>
                    </div>
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Old Buildings - Mask and Blending"
                        imageSrc={`${import.meta.env.BASE_URL}project3/oldbuildings_source_and_warped_images_and_mask.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/oldbuildings_source_and_warped_images_and_mask.png`}
                          alt="old buildings mask"
                          className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Blending Mask Visualization</p>
                    </div>
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Old Buildings - Final Mosaic"
                        imageSrc={`${import.meta.env.BASE_URL}project3/oldbuildings_mosaic.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/oldbuildings_mosaic.png`}
                          alt="old buildings mosaic"
                          className="w-full max-w-6xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Final Old Buildings Mosaic</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Mosaic 3: Physics Building</h4>
                  <div className="space-y-6">
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Physics Building - Source and Warped Images"
                        imageSrc={`${import.meta.env.BASE_URL}project3/source_physics_images_and_warped_image.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/source_physics_images_and_warped_image.png`}
                          alt="physics building source and warped"
                          className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Source Images and Warped Result</p>
                    </div>
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Physics Building - Mask and Blending"
                        imageSrc={`${import.meta.env.BASE_URL}project3/physics_source_and_warped_images_and_mask.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/physics_source_and_warped_images_and_mask.png`}
                          alt="physics building mask"
                          className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Blending Mask Visualization</p>
                    </div>
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Physics Building - Final Mosaic"
                        imageSrc={`${import.meta.env.BASE_URL}project3/physics_mosaic.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/physics_mosaic.png`}
                          alt="physics building mosaic"
                          className="w-full max-w-6xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Final Physics Building Mosaic</p>
                    </div>
                  </div>
                </div>
              </div>
            </ProjectPart>
            </div>

            {/* Part B Overview */}
            <div id="part-b" className="text-center mb-16 mt-24">
              <h2 className="text-4xl font-bold text-berkeley-navy mb-4">Part B: Feature Matching for Autostitching</h2>
              <div className="text-left max-w-4xl mx-auto space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Part A required manual selection of correspondence points to compute homographies. Part B automates this process by detecting and matching features algorithmically, enabling fully automatic image mosaicing. The implementation draws from the approach in "Multi-Image Matching using Multi-Scale Oriented Patches" by Brown et al., with some simplifications.
                </p>
              </div>
            </div>

            {/* Part B.1: Harris Corner Detection */}
            <div id="part-b1">
            <ProjectPart
              partNumber={1}
              title="Part B.1: Detecting Harris Corners"
              description="Identifying distinctive keypoints for automatic feature matching"
              detailedDescription={[]}
              className="mb-16"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    The foundation of automatic feature matching is identifying distinctive keypoints where images can be reliably matched. Harris corner detection finds locations in an image where intensity changes sharply in multiple directions, making them robust landmarks for tracking across different views.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The implementation uses <code className="bg-gray-100 px-2 py-1 rounded">skimage.feature.corner_harris()</code> with the 'eps' method and sigma=1 for Gaussian smoothing. This produces a response map <em>H</em> where higher values indicate stronger corner features. The algorithm analyzes how image gradients <em>I<sub>x</sub></em> and <em>I<sub>y</sub></em> vary locally by constructing a structure tensor from their products <em>I<sub>x</sub><sup>2</sup></em>, <em>I<sub>x</sub>I<sub>y</sub></em>, and <em>I<sub>y</sub><sup>2</sup></em>. Strong corners occur where both eigenvalues of this tensor are large, meaning intensity varies in all directions rather than just along an edge.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    After computing the response map, <code className="bg-gray-100 px-2 py-1 rounded">peak_local_max()</code> extracts local maxima with min_distance=3 pixel spacing. The <code className="bg-gray-100 px-2 py-1 rounded">get_harris_corners()</code> function then filters out any corners within edge_discard pixels of the image boundary (set to at least 20 pixels) since edge regions often lack sufficient context for reliable matching.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">The Clustering Problem</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Raw Harris detection typically finds thousands of corners, but they cluster heavily in textured areas like building facades or fine details, leaving sparse coverage in smooth regions. For robust matching, a smaller, evenly distributed set of strong corners is preferable.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">Adaptive Non-Maximal Suppression (ANMS)</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      ANMS addresses the clustering issue by selecting corners that are both strong and spatially isolated. The core idea: for each corner, compute how far you need to travel to find a significantly stronger corner. Corners with large suppression radii are isolated strong features worth keeping, while corners near even stronger neighbors get discarded.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The <code className="bg-gray-100 px-2 py-1 rounded">run_anms()</code> function implements this:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                      <li>Compute pairwise distances between all corners using <code className="bg-gray-100 px-1 rounded">dist2()</code> (a vectorized squared Euclidean distance function)</li>
                      <li>For each corner <em>i</em>, find the minimum distance to any corner <em>j</em> where <em>H<sub>j</sub> &gt; c<sub>robust</sub> · H<sub>i</sub></em>. The parameter <em>c<sub>robust</sub></em> (typically 0.9) defines "significantly stronger"</li>
                      <li>This minimum distance becomes the suppression radius <em>r<sub>i</sub></em> for corner <em>i</em></li>
                      <li>Sort corners by suppression radius in descending order and keep the top 500</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Corners in dense clusters naturally get small radii because there's always a stronger neighbor nearby. Isolated corners in less-textured regions get larger radii and survive the filtering, producing better spatial distribution.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">Pipeline Parameters</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The <code className="bg-gray-100 px-2 py-1 rounded">find_and_filter_corners()</code> function chains these steps together. Before running ANMS, it limits the input to the top 5000 strongest corners (sorted by <em>H</em> value) to keep computation manageable. The ANMS stage then reduces this to 500 well-distributed points using c_robust=0.9 and harris_edge_discard=21.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The images below show the progression for the old buildings image: raw Harris corners (heavily clustered with 12053 points), the strongest 5000 corners before ANMS, and the final 500 ANMS-filtered corners with improved spatial distribution.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Harris Corner Detection Results</h4>
                  
                  <div className="space-y-8">
                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Bell Tower - Corner Detection Progression</h5>
                      <ImageWithModal 
                        imageName="Tower - Harris ANMS Progression"
                        imageSrc={`${import.meta.env.BASE_URL}project3/tower_harris_anms.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/tower_harris_anms.png`}
                          alt="tower harris anms"
                          className="w-full max-w-6xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Left: All Harris corners | Center: Top 5000 corners | Right: 500 ANMS-filtered corners</p>
                    </div>

                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Old Buildings - Corner Detection Progression</h5>
                      <ImageWithModal 
                        imageName="Old Buildings - Harris ANMS Progression"
                        imageSrc={`${import.meta.env.BASE_URL}project3/oldbuildings_harris_anms.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/oldbuildings_harris_anms.png`}
                          alt="old buildings harris anms"
                          className="w-full max-w-6xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Left: All Harris corners | Center: Top 5000 corners | Right: 500 ANMS-filtered corners</p>
                    </div>

                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Physics Building - Corner Detection Progression</h5>
                      <ImageWithModal 
                        imageName="Physics Building - Harris ANMS Progression"
                        imageSrc={`${import.meta.env.BASE_URL}project3/physics_harris_anms.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/physics_harris_anms.png`}
                          alt="physics building harris anms"
                          className="w-full max-w-6xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Left: All Harris corners | Center: Top 5000 corners | Right: 500 ANMS-filtered corners</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">Performance Analysis</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The ANMS algorithm performs as expected across all test images. The leftmost panels consistently show extreme clustering in high-texture regions, with thousands of corners concentrated around architectural details, window frames, and tree branches while smoother areas remain nearly empty. After selecting the strongest 5000 corners, the clustering persists but becomes slightly more visible as weaker points disappear. The rightmost panels demonstrate that ANMS successfully redistributes the feature set, maintaining exactly 500 corners while achieving much better spatial coverage. Corners now appear in previously sparse regions like the sky and ground, while still preserving strong features on the building facades. This balanced distribution is essential for robust matching, as it ensures correspondence candidates exist across the entire overlap region between images rather than just in localized textured areas.
                  </p>
                </div>
              </div>
            </ProjectPart>
            </div>

            {/* Part B.2: Feature Descriptor Extraction */}
            <div id="part-b2">
            <ProjectPart
              partNumber={2}
              title="Part B.2: Extracting Feature Descriptors"
              description="Creating robust descriptors for reliable feature matching"
              detailedDescription={[]}
              className="mb-16"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Once corner locations are identified, the next step is creating descriptors that characterize each feature (Section 4 of the paper). These descriptors need to be robust to illumination changes and small geometric variations so they can be reliably matched between images.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">Descriptor Construction Pipeline</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      The <code className="bg-gray-100 px-2 py-1 rounded">extract_feature_patches()</code> function builds descriptors from the local neighborhood around each corner. The process works as follows:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>Gaussian blur:</strong> Apply a Gaussian blur with σ = 2.5 to the grayscale image to reduce aliasing artifacts during downsampling</li>
                      <li><strong>Extract 40×40 patches:</strong> Center a square window at each corner point and extract the pixel values</li>
                      <li><strong>Boundary validation:</strong> Skip any corners where the patch would extend beyond image bounds (though the earlier harris_edge_discard parameter should prevent this)</li>
                      <li><strong>Downsample to 8×8:</strong> Sample every 5th pixel in both dimensions to reduce the patch from 40×40 to 8×8</li>
                      <li><strong>Normalize:</strong> Subtract the mean and divide by the standard deviation to remove bias and gain, making the descriptor invariant to linear brightness and contrast changes</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      The 40×40 window captures sufficient local context, while the 8×8 downsampling creates a compact 64-dimensional descriptor. Normalization is essential because it allows patches with similar structure but different lighting conditions to produce similar descriptor vectors, improving matching reliability across images.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Visualization</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Below are example feature descriptors extracted from various test images. Each 8×8 grid represents the normalized intensity pattern around a detected corner point. Each descriptor captures local patterns like edges, corners, and texture gradients. The normalized 8×8 representation balances descriptive power with computational efficiency, providing enough detail to distinguish features while remaining compact enough for efficient matching.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Bell Tower - Feature Descriptors</h5>
                      <div className="text-center mb-6">
                        <ImageWithModal 
                          imageName="Tower - Sample Feature Patches"
                          imageSrc={`${import.meta.env.BASE_URL}project3/tower_feature_patches.png`}
                        >
                          <img 
                            src={`${import.meta.env.BASE_URL}project3/tower_feature_patches.png`}
                            alt="tower feature patches"
                            className="w-3/5 mx-auto h-auto object-contain rounded-lg shadow-lg"
                          />
                        </ImageWithModal>
                        <p className="text-sm text-gray-600 mt-2">6 example 8×8 feature descriptors from detected corners</p>
                      </div>
                      <div className="text-center">
                        <ImageWithModal 
                          imageName="Tower - Patch Locations"
                          imageSrc={`${import.meta.env.BASE_URL}project3/tower_patch_locations.png`}
                        >
                          <img 
                            src={`${import.meta.env.BASE_URL}project3/tower_patch_locations.png`}
                            alt="tower patch locations"
                            className="w-3/5 mx-auto h-auto object-contain rounded-lg shadow-lg"
                          />
                        </ImageWithModal>
                        <p className="text-sm text-gray-600 mt-2">Original image with corner locations marked where patches were extracted</p>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Old Buildings - Feature Descriptors</h5>
                      <div className="text-center mb-6">
                        <ImageWithModal 
                          imageName="Old Buildings - Sample Feature Patches"
                          imageSrc={`${import.meta.env.BASE_URL}project3/oldbuildings_feature_patches.png`}
                        >
                          <img 
                            src={`${import.meta.env.BASE_URL}project3/oldbuildings_feature_patches.png`}
                            alt="old buildings feature patches"
                            className="w-3/5 mx-auto h-auto object-contain rounded-lg shadow-lg"
                          />
                        </ImageWithModal>
                        <p className="text-sm text-gray-600 mt-2">6 example 8×8 feature descriptors from detected corners</p>
                      </div>
                      <div className="text-center">
                        <ImageWithModal 
                          imageName="Old Buildings - Patch Locations"
                          imageSrc={`${import.meta.env.BASE_URL}project3/oldbuildings_patch_locations.png`}
                        >
                          <img 
                            src={`${import.meta.env.BASE_URL}project3/oldbuildings_patch_locations.png`}
                            alt="old buildings patch locations"
                            className="w-3/5 mx-auto h-auto object-contain rounded-lg shadow-lg"
                          />
                        </ImageWithModal>
                        <p className="text-sm text-gray-600 mt-2">Original image with corner locations marked where patches were extracted</p>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Physics Building - Feature Descriptors</h5>
                      <div className="text-center mb-6">
                        <ImageWithModal 
                          imageName="Physics Building - Sample Feature Patches"
                          imageSrc={`${import.meta.env.BASE_URL}project3/physics_feature_patches.png`}
                        >
                          <img 
                            src={`${import.meta.env.BASE_URL}project3/physics_feature_patches.png`}
                            alt="physics building feature patches"
                            className="w-3/5 mx-auto h-auto object-contain rounded-lg shadow-lg"
                          />
                        </ImageWithModal>
                        <p className="text-sm text-gray-600 mt-2">6 example 8×8 feature descriptors from detected corners</p>
                      </div>
                      <div className="text-center">
                        <ImageWithModal 
                          imageName="Physics Building - Patch Locations"
                          imageSrc={`${import.meta.env.BASE_URL}project3/physics_patch_locations.png`}
                        >
                          <img 
                            src={`${import.meta.env.BASE_URL}project3/physics_patch_locations.png`}
                            alt="physics building patch locations"
                            className="w-3/5 mx-auto h-auto object-contain rounded-lg shadow-lg"
                          />
                        </ImageWithModal>
                        <p className="text-sm text-gray-600 mt-2">Original image with corner locations marked where patches were extracted</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ProjectPart>
            </div>

            {/* Part B.3: Feature Matching */}
            <div id="part-b3">
            <ProjectPart
              partNumber={3}
              title="Part B.3: Matching Features Between Images"
              description="Establishing correspondences with Lowe's ratio test"
              detailedDescription={[]}
              className="mb-16"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    With descriptors extracted from both images, the next task is establishing correspondences between features that represent the same physical points in the scene. Simply matching each feature to its closest neighbor in the other image produces many incorrect matches, especially in regions with repetitive patterns or low texture.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">Filtering with Lowe's Ratio Test</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      The <code className="bg-gray-100 px-2 py-1 rounded">match_feature_patches()</code> function addresses this problem using Lowe's ratio test (Section 5 of the paper). Instead of accepting the nearest neighbor unconditionally, the algorithm examines the ratio between the nearest and second-nearest neighbor distances.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The matching process works as follows:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>Flatten descriptors:</strong> Reshape patches from 8×8 to 64-dimensional vectors</li>
                      <li><strong>Compute distance matrix:</strong> Use the <code className="bg-gray-100 px-1 rounded">dist2()</code> function to calculate squared Euclidean distances between all patch pairs, then take the square root to get Euclidean distances</li>
                      <li><strong>Find two nearest neighbors:</strong> For each feature in image 1, sort distances to all features in image 2 and identify the closest (nn1) and second-closest (nn2) matches</li>
                      <li><strong>Apply ratio test:</strong> Accept the match only if <span className="bg-gray-100 px-2 py-1 rounded text-sm">d<sub>nn1</sub> / d<sub>nn2</sub> &lt; threshold</span></li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      The ratio test filters out ambiguous matches where multiple features have similar distances. Good matches have a clear winner (small ratio), while ambiguous matches where several candidates are equally close get rejected (large ratio). This significantly reduces false positives.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">Threshold Selection</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The <code className="bg-gray-100 px-2 py-1 rounded">lowe_threshold</code> parameter controls the tradeoff between match quantity and quality. Lower values accept fewer but more reliable matches, while higher values increase match count at the cost of more false positives. The implementation uses a threshold of 0.7, which provides enough correspondences for robust homography estimation while maintaining high accuracy.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">Matching Results</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The code processes three image pairs: old buildings, physics building, and tower. For each pair, it detects corners, extracts descriptors, and applies feature matching with Lowe's test. The matched correspondences are stored for later use in RANSAC-based homography estimation.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Below are visualizations showing matched keypoints between image pairs, with lines connecting corresponding features that passed the ratio test:
                  </p>

                  <div className="space-y-8">
                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Bell Tower - Feature Matches</h5>
                      <ImageWithModal 
                        imageName="Tower - Matched Features"
                        imageSrc={`${import.meta.env.BASE_URL}project3/tower_feature_matches.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/tower_feature_matches.png`}
                          alt="tower feature matches"
                          className="w-full max-w-6xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Matched features between tower image pair with Lowe's ratio test (threshold = 0.7)</p>
                    </div>

                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Old Buildings - Feature Matches</h5>
                      <ImageWithModal 
                        imageName="Old Buildings - Matched Features"
                        imageSrc={`${import.meta.env.BASE_URL}project3/oldbuildings_feature_matches.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/oldbuildings_feature_matches.png`}
                          alt="old buildings feature matches"
                          className="w-full max-w-6xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Matched features between old buildings image pair with Lowe's ratio test (threshold = 0.7)</p>
                    </div>

                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Physics Building - Feature Matches</h5>
                      <ImageWithModal 
                        imageName="Physics Building - Matched Features"
                        imageSrc={`${import.meta.env.BASE_URL}project3/physics_feature_matches.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/physics_feature_matches.png`}
                          alt="physics building feature matches"
                          className="w-full max-w-6xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Matched features between physics building image pair with Lowe's ratio test (threshold = 0.7)</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mt-8">
                    <p className="text-gray-700 leading-relaxed">
                      While the matched features show reasonable spatial coherence in the overlap regions, the tower and physics building scenes exhibit numerous incorrect matches with crossing lines and geometrically inconsistent correspondences. This demonstrates the necessity of a further refinement step like RANSAC to filter outliers and identify the geometrically consistent subset. These automatic correspondences replace the manual point selection from Part A, but require additional robustness mechanisms before reliable homography estimation.
                    </p>
                  </div>
                </div>
              </div>
            </ProjectPart>
            </div>

            {/* Part B.4: Automatic Image Stitching */}
            <div id="part-b4">
            <ProjectPart
              partNumber={4}
              title="Part B.4: Automatic Image Stitching"
              description="RANSAC homography estimation, mosaic comparisons, and multi-image panoramas"
              detailedDescription={[]}
              className="mb-16"
            >
              <div className="space-y-8">
                {/* Subsection: RANSAC */}
                <div>
                  <h3 className="text-2xl font-bold text-berkeley-navy mb-6">RANSAC for Robust Homography Estimation</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Even after Lowe's ratio test, some incorrect matches persist in the correspondence set. Computing a homography directly from all matched points would be severely affected by these outliers, producing poor alignment. RANSAC (RANdom SAmple Consensus) provides a robust framework for estimating the homography while handling outliers effectively.
                    </p>
                  </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">The Outlier Problem</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Traditional least-squares fitting assumes all data points are valid measurements with small noise. Feature matching violates this assumption because the correspondence set contains:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>False matches:</strong> Features that don't actually correspond to the same physical location</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Repetitive patterns:</strong> Similar-looking structures that create ambiguous matches</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Occlusions:</strong> Objects visible in one image but not the other</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Moving elements:</strong> Scene changes between image captures</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      RANSAC handles datasets with significant outlier contamination by iteratively searching for the largest subset of data points (inliers) that fit a consistent geometric model.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">RANSAC Algorithm</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      The <code className="bg-gray-100 px-2 py-1 rounded">ransac_image_features()</code> function implements the following process:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>Random sampling:</strong> Select 4 matched point pairs randomly without replacement</li>
                      <li><strong>Homography computation:</strong> Use <code className="bg-gray-100 px-1 rounded">cv2.findHomography()</code> to compute a candidate homography from these 4 pairs</li>
                      <li><strong>Projection and error measurement:</strong> Project each corner from image 1 to image 2 using the candidate homography, then compute the Euclidean distance between the projected location and the true matched corner in image 2</li>
                      <li><strong>Inlier identification:</strong> Count matches with error below <code className="bg-gray-100 px-1 rounded">eps_threshold</code> (10 pixels) as inliers</li>
                      <li><strong>Model selection:</strong> Track the homography with the largest inlier count</li>
                      <li><strong>Iteration:</strong> Repeat for <code className="bg-gray-100 px-1 rounded">n_iterations</code> (500 iterations)</li>
                      <li><strong>Refinement:</strong> After finding the best inlier set, recompute the final homography using all inliers via least-squares fitting</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      The algorithm exploits the fact that true matches will consistently agree with the correct homography, producing small projection errors. Outliers, on the other hand, will have random errors and rarely all agree with any single candidate homography. By sampling many random subsets, RANSAC identifies the geometric transformation supported by the largest consensus set.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">4-Point Sampling</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Each RANSAC iteration samples exactly 4 correspondence pairs because a homography has 8 degrees of freedom and each point pair provides 2 constraints (x and y coordinates). Four points give the minimum required to uniquely determine the homography matrix.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Results After RANSAC</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Below are the matched features after RANSAC filtering, showing only the inliers:
                  </p>

                  <div className="space-y-8">
                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Bell Tower - RANSAC-Filtered Matches</h5>
                      <ImageWithModal 
                        imageName="Tower - Feature Matches After RANSAC"
                        imageSrc={`${import.meta.env.BASE_URL}project3/tower_feature_matches_after_ransac.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/tower_feature_matches_after_ransac.png`}
                          alt="tower feature matches after ransac"
                          className="w-full max-w-6xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Only geometrically consistent inlier matches retained after RANSAC</p>
                    </div>

                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Old Buildings - RANSAC-Filtered Matches</h5>
                      <ImageWithModal 
                        imageName="Old Buildings - Feature Matches After RANSAC"
                        imageSrc={`${import.meta.env.BASE_URL}project3/oldbuildings_feature_matches_after_ransac.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/oldbuildings_feature_matches_after_ransac.png`}
                          alt="old buildings feature matches after ransac"
                          className="w-full max-w-6xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Only geometrically consistent inlier matches retained after RANSAC</p>
                    </div>

                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Physics Building - RANSAC-Filtered Matches</h5>
                      <ImageWithModal 
                        imageName="Physics Building - Feature Matches After RANSAC"
                        imageSrc={`${import.meta.env.BASE_URL}project3/physics_feature_matches_after_ransac.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/physics_feature_matches_after_ransac.png`}
                          alt="physics building feature matches after ransac"
                          className="w-full max-w-6xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Only geometrically consistent inlier matches retained after RANSAC</p>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg mt-8">
                    <p className="text-gray-700 leading-relaxed">
                      The results show that RANSAC successfully retained only geometrically consistent matches. The visualizations reveal clean correspondence sets with no crossing lines or inconsistent matches, which is a positive surprise demonstrating how effectively the algorithm separates inliers from outliers. All remaining matches exhibit strong spatial coherence and appear to be true correspondences.
                    </p>
                  </div>
                </div>
                </div>

                {/* Subsection: Comparing Manual vs. Automatic Mosaics */}
                <div id="part-b5" className="space-y-8 pt-8 border-t-2 border-gray-200">
                  <div>
                    <h3 className="text-2xl font-bold text-berkeley-navy mb-6">Comparing Manual vs. Automatic Mosaics</h3>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        With the automatic correspondence pipeline complete (Harris corners, ANMS, feature descriptors, Lowe's ratio test, and RANSAC), the final step is generating mosaics and comparing them to the manually created ones from Part A.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The automatic pipeline produces mosaics that are virtually identical to the manual versions. This demonstrates the effectiveness of the feature matching and RANSAC pipeline. Since the correspondence points were identified accurately and RANSAC successfully filtered out all outliers, the computed homography matrices are highly accurate. The resulting alignment and blending quality match what was achieved with careful manual point selection.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Below are side-by-side comparisons showing the manual mosaics (Part A) on the left and the automatic mosaics (Part B) on the right:
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Bell Tower Comparison</h4>
                  <div className="grid lg:grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Manual Correspondences (Part A)</h5>
                      <ImageWithModal 
                        imageName="Tower - Manual Mosaic"
                        imageSrc={`${import.meta.env.BASE_URL}project3/tower_mosaic.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/tower_mosaic.png`}
                          alt="tower manual mosaic"
                          className="w-full h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Mosaic created with manually selected correspondence points</p>
                    </div>
                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Automatic Correspondences (Part B)</h5>
                      <ImageWithModal 
                        imageName="Tower - Automatic Mosaic"
                        imageSrc={`${import.meta.env.BASE_URL}project3/auto_stitched_mosaic_tower.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/auto_stitched_mosaic_tower.png`}
                          alt="tower automatic mosaic"
                          className="w-full h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Mosaic created with automatic feature matching pipeline</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      The manual and automatic mosaics are visually indistinguishable, confirming that the automatic pipeline successfully replaces manual correspondence selection.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Old Buildings Comparison</h4>
                  <div className="grid lg:grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Manual Correspondences (Part A)</h5>
                      <ImageWithModal 
                        imageName="Old Buildings - Manual Mosaic"
                        imageSrc={`${import.meta.env.BASE_URL}project3/oldbuildings_mosaic.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/oldbuildings_mosaic.png`}
                          alt="old buildings manual mosaic"
                          className="w-full h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Mosaic created with manually selected correspondence points</p>
                    </div>
                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Automatic Correspondences (Part B)</h5>
                      <ImageWithModal 
                        imageName="Old Buildings - Automatic Mosaic"
                        imageSrc={`${import.meta.env.BASE_URL}project3/auto_stitched_mosaic_old_buildings.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/auto_stitched_mosaic_old_buildings.png`}
                          alt="old buildings automatic mosaic"
                          className="w-full h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Mosaic created with automatic feature matching pipeline</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Both methods produce seamless alignment and blending, demonstrating the robustness of the automatic feature detection and matching approach.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Physics Building Comparison</h4>
                  <div className="grid lg:grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Manual Correspondences (Part A)</h5>
                      <ImageWithModal 
                        imageName="Physics Building - Manual Mosaic"
                        imageSrc={`${import.meta.env.BASE_URL}project3/physics_mosaic.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/physics_mosaic.png`}
                          alt="physics building manual mosaic"
                          className="w-full h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Mosaic created with manually selected correspondence points</p>
                    </div>
                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Automatic Correspondences (Part B)</h5>
                      <ImageWithModal 
                        imageName="Physics Building - Automatic Mosaic"
                        imageSrc={`${import.meta.env.BASE_URL}project3/auto_stitched_mosaic_physics_building.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/auto_stitched_mosaic_physics_building.png`}
                          alt="physics building automatic mosaic"
                          className="w-full h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Mosaic created with automatic feature matching pipeline</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      The visual similarity across all three scenes confirms that the automatic pipeline reliably replaces the tedious manual correspondence selection process while maintaining the same quality.
                    </p>
                  </div>
                </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-berkeley-navy mb-3">Pipeline Performance Summary</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The automatic correspondence pipeline successfully demonstrates that computer vision algorithms can match human-level performance in image alignment tasks. The combination of Harris corner detection, ANMS spatial filtering, normalized feature descriptors, Lowe's ratio test, and RANSAC outlier rejection creates a robust system that handles real-world images with varying lighting, texture, and perspective.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The key advantage of the automatic approach is scalability: while manual point selection becomes increasingly tedious for larger image sets or panoramas with many images, the automatic pipeline maintains consistent performance regardless of dataset size. This makes it practical for applications requiring processing of hundreds or thousands of images.
                    </p>
                  </div>
                </div>

                {/* Subsection: Three-Image Panoramas */}
                <div id="part-b6" className="space-y-8 pt-8 border-t-2 border-gray-200">
                  <div>
                    <h3 className="text-2xl font-bold text-berkeley-navy mb-6">Three-Image Panoramas</h3>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        To further demonstrate the capabilities of the automatic stitching pipeline, I created 3-image panoramas for each scene using an additional image that wasn't included in the earlier demonstrations. These wider panoramas showcase the true scalability advantage of the automatic approach, selecting correspondence points manually for three images would have been significantly more time-consuming and error-prone.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The results demonstrate that the auto-stitching pipeline works flawlessly for multi-image panoramas. The sequential application of homographies, combined with the blending strategies developed earlier, produces seamless wide-angle views with no visible artifacts or alignment errors. This confirms that the entire pipeline, from corner detection through RANSAC to final blending, scales effectively to larger image sets.
                      </p>
                    </div>
                    </div>

                  <div>
                    <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Three-Image Panorama Results</h4>
                    
                    <div className="space-y-8">
                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Bell Tower - Wide Panorama</h5>
                      <ImageWithModal 
                        imageName="Tower - 3-Image Panorama"
                        imageSrc={`${import.meta.env.BASE_URL}project3/towe_3_image_panorama.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/towe_3_image_panorama.png`}
                          alt="tower 3-image panorama"
                          className="w-full max-w-7xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Seamless panorama stitched from three images using automatic feature matching</p>
                    </div>

                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Old Buildings - Wide Panorama</h5>
                      <ImageWithModal 
                        imageName="Old Buildings - 3-Image Panorama"
                        imageSrc={`${import.meta.env.BASE_URL}project3/oldbuildings_3_image_panorama.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/oldbuildings_3_image_panorama.png`}
                          alt="old buildings 3-image panorama"
                          className="w-full max-w-7xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Seamless panorama stitched from three images using automatic feature matching</p>
                    </div>

                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Physics Building - Wide Panorama</h5>
                      <ImageWithModal 
                        imageName="Physics Building - 3-Image Panorama"
                        imageSrc={`${import.meta.env.BASE_URL}project3/physics_3_image_panorama.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/physics_3_image_panorama.png`}
                          alt="physics building 3-image panorama"
                          className="w-full max-w-7xl mx-auto h-auto object-contain rounded-lg shadow-lg"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600 mt-2">Seamless panorama stitched from three images using automatic feature matching</p>
                    </div>
                  </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg mt-8">
                      <p className="text-gray-700 leading-relaxed">
                        All three panoramas exhibit excellent alignment with no visible seams or ghosting artifacts. The automatic pipeline handled the increased complexity of three-image stitching without any degradation in quality, validating the robustness of the feature detection, matching, and RANSAC components.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ProjectPart>
            </div>

            {/* Project Learnings */}
            <section className="py-16 bg-gray-50 rounded-lg">
              <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                  <div className="mb-16">
                    <h2 className="text-3xl font-bold text-berkeley-navy mb-4">Project 3 Learnings</h2>
                    <p className="text-xl text-gray-600 mb-8">Key insights from image warping and automatic mosaicing</p>
                    
                    <div className="space-y-6 mb-8">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Projective transformations</strong> provide the mathematical framework for aligning images taken from different viewing angles. These 3×3 homography matrices have 8 independent parameters and can correct perspective distortion when images share the same center of projection, making them essential for mosaicing applications.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Homography estimation</strong> requires at least 4 point correspondences to constrain the 8 degrees of freedom. Sampling more than the minimum and solving the overdetermined system with least-squares regression produces more robust results that handle noise and imperfect manual selections effectively.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Inverse warping</strong> is the correct approach for image transformation. By iterating through output pixels and using H⁻¹ to find their source locations, the algorithm avoids holes that would appear with forward warping. This ensures complete coverage in the warped output.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Bilinear interpolation</strong> creates smoother warped images compared to nearest neighbor by computing weighted averages of the four surrounding pixels based on fractional coordinates. While slower due to additional memory accesses and arithmetic operations, it reduces high-frequency artifacts and produces visually superior results suitable for blending.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Edge intersection blending</strong> works better than simple overlap masks by detecting where the warped image edge actually intersects the base image in the overlap region. Creating an angled feather line that follows this geometry minimizes the blending region and produces the smoothest transitions with fewer visible seams.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Harris corner detection</strong> identifies feature points by analyzing how image gradients vary locally. Corners produce large responses in multiple directions, making them distinctive landmarks that can be reliably tracked across images with different perspectives.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>ANMS</strong> distributes features spatially by computing suppression radii for each corner. Features clustered near stronger neighbors get filtered out, while isolated strong features in less-textured regions survive. This spatial distribution is critical because clustered features provide insufficient geometric diversity for robust homography estimation.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Feature descriptors</strong> extracted from 40×40 patches, downsampled to 8×8, and normalized to zero mean and unit variance capture local structure while remaining invariant to brightness and contrast changes. This normalization is what enables reliable matching across images with different lighting conditions.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Lowe's ratio test</strong> filters ambiguous matches by comparing the nearest neighbor distance to the second-nearest. When these distances are similar (ratio close to 1), the match is unreliable. Accepting only matches with ratios below 0.7 sacrifices quantity for quality, keeping distinctive correspondences where one candidate is clearly better than alternatives.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>RANSAC</strong> handles outliers by design rather than trying to eliminate them upfront. By iteratively sampling minimal 4-point subsets, computing candidate homographies, and counting inliers, it finds the geometric model supported by the largest consensus set. This approach remains effective even when a significant fraction of matches are incorrect, as demonstrated by clean results after filtering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            </div>
          </div>
        </div>
      </section>

      <footer className="bg-berkeley-navy text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Project 3: Image Warping and Mosaicing</p>
        </div>
      </footer>
    </div>
  );
};

export default Project3;