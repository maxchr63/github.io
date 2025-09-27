import HeroSection from "@/components/HeroSection";
import ProjectPart from "@/components/ProjectPart";
import ImageGallery from "@/components/ImageGallery";
import ProjectNavigation from "@/components/ProjectNavigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Camera } from "lucide-react";

const Project3 = () => {
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
    <div className="min-h-screen">
      {/* Navigation */}
      <ProjectNavigation currentProject="Project 3" />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-berkeley-blue/10 via-background to-berkeley-light/20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}berkeley-hero.jpg`}
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
              <span className="text-berkeley-navy font-medium">Maximilian Christof - CS180 Project 3</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-berkeley-navy via-berkeley-blue to-berkeley-navy bg-clip-text text-transparent leading-tight">
              Fun with Filters and Frequencies!
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Exploring filters, edges, frequency analysis, and image blending through convolution, sharpening, hybrid images, and Gaussian/Laplacian stacks.
            </p>
          </div>
        </div>
      </section>

      {/* Part 1: Filters and Edges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-berkeley-navy mb-12 text-center">Part 1: Filters and Edges</h2>
            
            {/* Part 1.1: Convolution Implementation */}
            <ProjectPart
              partNumber={1.1}
              title="Convolution Implementation"
              description="Correct implementations of convolution with numpy only, compared with scipy.signal.convolve2d"
              detailedDescription={[
                "[Placeholder for your explanation of convolution implementation and comparison with scipy]",
                "[Add your analysis of runtime and boundary handling differences here]"
              ]}
              className="mb-16"
            >
              <div className="space-y-8">
                <div className="text-center">
                  <ImageWithModal 
                    imageName="4 For Loops Implementation"
                    imageSrc={`${import.meta.env.BASE_URL}project3/1.1_4forloops.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/1.1_4forloops.png`}
                      alt="4 for loops convolution"
                      className="w-full max-w-2xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">4 For Loops Implementation</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="2 For Loops Implementation"
                    imageSrc={`${import.meta.env.BASE_URL}project3/1.1_2forloops.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/1.1_2forloops.png`}
                      alt="2 for loops convolution"
                      className="w-full max-w-2xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">2 For Loops Implementation</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="SciPy Conv Implementation"
                    imageSrc={`${import.meta.env.BASE_URL}project3/1.1_scipy_conv.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/1.1_scipy_conv.png`}
                      alt="scipy convolution"
                      className="w-full max-w-2xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">SciPy Conv Implementation</p>
                </div>
              </div>
            </ProjectPart>

            {/* Part 1.2: Partial Derivatives and Edge Detection */}
            <ProjectPart
              partNumber={1.2}
              title="Partial Derivatives and Edge Detection"
              description="Showing partial derivatives in x and y, gradient magnitude, and binarized edge detection"
              detailedDescription={[
                "[Add your explanation of partial derivatives and edge detection process]",
                "[Justify your decision on the tradeoff between finding all edges and removing noise]"
              ]}
              className="mb-16"
            >
              <div className="space-y-8">
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Cameraman Binarization Testing"
                    imageSrc={`${import.meta.env.BASE_URL}project3/1.2_crameraman_binarization_testing.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/1.2_crameraman_binarization_testing.png`}
                      alt="cameraman binarization testing"
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Cameraman Binarization Testing</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Cameraman Binarization High Threshold"
                    imageSrc={`${import.meta.env.BASE_URL}project3/1.2_crameraman_binarization_testing_high.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/1.2_crameraman_binarization_testing_high.png`}
                      alt="cameraman binarization high threshold"
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">High Threshold Binarization</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Cameraman Gradient"
                    imageSrc={`${import.meta.env.BASE_URL}project3/1.2_crameraman_gradient.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/1.2_crameraman_gradient.png`}
                      alt="cameraman gradient"
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Gradient Magnitude</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Cameraman Side by Side"
                    imageSrc={`${import.meta.env.BASE_URL}project3/1.2_crameraman_sidebyside.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/1.2_crameraman_sidebyside.png`}
                      alt="cameraman side by side comparison"
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Side by Side Comparison</p>
                </div>
              </div>
            </ProjectPart>

            {/* Part 1.3: Gaussian and DoG Filters */}
            <ProjectPart
              partNumber={1.3}
              title="Gaussian and DoG Filters"
              description="Constructing Gaussian filters, building DoG filters, and comparing with finite difference methods"
              detailedDescription={[
                "[Add your explanation of Gaussian filter construction using cv2.getGaussianKernel]",
                "[Compare DoG filter results with finite difference methods and explain the differences]"
              ]}
              className="mb-16"
            >
              <div className="space-y-8">
                <div className="text-center">
                  <ImageWithModal 
                    imageName="DoG Filter Visualization"
                    imageSrc={`${import.meta.env.BASE_URL}project3/1.3_DoG_Filter.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/1.3_DoG_Filter.png`}
                      alt="DoG filter visualization"
                      className="w-full max-w-3xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">DoG Filter Visualization</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Cameraman Difference of Approaches"
                    imageSrc={`${import.meta.env.BASE_URL}project3/1.3_crameraman_difference_of_approaches.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/1.3_crameraman_difference_of_approaches.png`}
                      alt="cameraman difference of approaches"
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Finite Difference vs DoG Comparison</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Cameraman Gradient After Smoothing"
                    imageSrc={`${import.meta.env.BASE_URL}project3/1.3_crameraman_gradient_after_smoothing.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/1.3_crameraman_gradient_after_smoothing.png`}
                      alt="cameraman gradient after smoothing"
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Gradient After Gaussian Smoothing</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Cameraman Gradient Testing"
                    imageSrc={`${import.meta.env.BASE_URL}project3/1.3_crameraman_gradient_testing.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/1.3_crameraman_gradient_testing.png`}
                      alt="cameraman gradient testing"
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Gradient Testing Results</p>
                </div>
              </div>
            </ProjectPart>
          </div>
        </div>
      </section>

      {/* Part 2: Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-berkeley-navy mb-12 text-center">Part 2: Applications</h2>
            
            {/* Part 2.1: Unsharp Mask Filter */}
            <ProjectPart
              partNumber={2.1}
              title="Unsharp Mask Filter"
              description="Implementing the unsharp mask filter and demonstrating sharpening effects"
              detailedDescription={[
                "[Explain how the unsharp mask filter works in relation to blur filters and high frequencies]",
                "[Show how varying the sharpening amount changes the result]"
              ]}
              className="mb-16"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <ImageWithModal 
                      imageName="Blur Sharpen Blur Process"
                      imageSrc={`${import.meta.env.BASE_URL}project3/2.1_blurr_sharpen_blurr.png`}
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}project3/2.1_blurr_sharpen_blurr.png`}
                        alt="blur sharpen blur process"
                        className="w-full h-64 object-contain rounded-lg bg-white mb-2"
                      />
                    </ImageWithModal>
                    <p className="text-sm text-gray-600">Blur → Sharpen → Blur Process</p>
                  </div>
                  <div className="text-center">
                    <ImageWithModal 
                      imageName="Cathedral Decomposition"
                      imageSrc={`${import.meta.env.BASE_URL}project3/2.1_cathedral_decomposition.png`}
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}project3/2.1_cathedral_decomposition.png`}
                        alt="cathedral decomposition"
                        className="w-full h-64 object-contain rounded-lg bg-white mb-2"
                      />
                    </ImageWithModal>
                    <p className="text-sm text-gray-600">Cathedral Image Decomposition</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="text-center">
                    <ImageWithModal 
                      imageName="Cathedral Sharpened Best"
                      imageSrc={`${import.meta.env.BASE_URL}project3/2.1_cathedral_sharpened_best.png`}
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}project3/2.1_cathedral_sharpened_best.png`}
                        alt="cathedral sharpened best"
                        className="w-full h-64 object-contain rounded-lg bg-white mb-2"
                      />
                    </ImageWithModal>
                    <p className="text-sm text-gray-600">Cathedral Sharpened (Best Result)</p>
                  </div>
                  <div className="text-center">
                    <ImageWithModal 
                      imageName="National Park Enhancement"
                      imageSrc={`${import.meta.env.BASE_URL}project3/2.1_national_park_enhancement.png`}
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}project3/2.1_national_park_enhancement.png`}
                        alt="national park enhancement"
                        className="w-full h-64 object-contain rounded-lg bg-white mb-2"
                      />
                    </ImageWithModal>
                    <p className="text-sm text-gray-600">National Park Enhancement</p>
                  </div>
                </div>
              </div>
              
              {/* Side by Side Comparisons */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <ImageWithModal 
                    imageName="National Park Enhancement Side by Side"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.1_nationalpark_enhancement_sidebyside.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.1_nationalpark_enhancement_sidebyside.png`}
                      alt="national park enhancement side by side"
                      className="w-full h-48 object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">National Park: Before vs After</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Skyline Enhancement Side by Side"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.1_skyline_enhancement_sidebyside.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.1_skyline_enhancement_sidebyside.png`}
                      alt="skyline enhancement side by side"
                      className="w-full h-48 object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Skyline: Before vs After</p>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Skyline Enhancement"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.1_skyline_enhancement.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.1_skyline_enhancement.png`}
                      alt="skyline enhancement"
                      className="w-full h-64 object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Skyline Enhancement Process</p>
                </div>
              </div>
            </ProjectPart>

            {/* Part 2.2: Hybrid Images */}
            <ProjectPart
              partNumber={2.2}
              title="Hybrid Images"
              description="Creating hybrid images including Derek + Nutmeg and two custom examples"
              detailedDescription={[
                "[For one hybrid, show the entire process: original and aligned images, Fourier transforms, filtered results, cutoff frequency choice, and final image]",
                "[For the others, present the originals and final hybrid results]"
              ]}
              className="mb-16"
            >
              {/* Derek + Nutmeg detailed process */}
              <div className="mb-12">
                <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Derek + Nutmeg: Complete Process</h4>
                <div className="grid lg:grid-cols-2 gap-8 mb-6">
                  <div className="text-center">
                    <ImageWithModal 
                      imageName="Derek + Nutmeg Alignments"
                      imageSrc={`${import.meta.env.BASE_URL}project3/2.2_hybrid_nutmeg_alignments.png`}
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}project3/2.2_hybrid_nutmeg_alignments.png`}
                        alt="derek nutmeg alignments"
                        className="w-full h-64 object-contain rounded-lg bg-white mb-2"
                      />
                    </ImageWithModal>
                    <p className="text-sm text-gray-600">Original and Aligned Images</p>
                  </div>
                  <div className="text-center">
                    <ImageWithModal 
                      imageName="Derek + Nutmeg with Frequency Analysis"
                      imageSrc={`${import.meta.env.BASE_URL}project3/2.2_hybrid_nutmeg_derek_grey_with_freq.png`}
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}project3/2.2_hybrid_nutmeg_derek_grey_with_freq.png`}
                        alt="derek nutmeg with frequency analysis"
                        className="w-full h-64 object-contain rounded-lg bg-white mb-2"
                      />
                    </ImageWithModal>
                    <p className="text-sm text-gray-600">Fourier Transforms & Filtering Process</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <ImageWithModal 
                      imageName="Derek + Nutmeg Greyscale"
                      imageSrc={`${import.meta.env.BASE_URL}project3/2.2_hybrid_nutmeg_derek_grey.png`}
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}project3/2.2_hybrid_nutmeg_derek_grey.png`}
                        alt="derek nutmeg greyscale"
                        className="w-full h-64 object-contain rounded-lg bg-white mb-2"
                      />
                    </ImageWithModal>
                    <p className="text-sm text-gray-600">Greyscale Hybrid</p>
                  </div>
                  <div className="text-center">
                    <ImageWithModal 
                      imageName="Derek + Nutmeg Color"
                      imageSrc={`${import.meta.env.BASE_URL}project3/2.2_hybrid_nutmeg_derek.png`}
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}project3/2.2_hybrid_nutmeg_derek.png`}
                        alt="derek nutmeg color"
                        className="w-full h-64 object-contain rounded-lg bg-white mb-2"
                      />
                    </ImageWithModal>
                    <p className="text-sm text-gray-600">Color Hybrid</p>
                  </div>
                  <div className="text-center">
                    <ImageWithModal 
                      imageName="Derek + Nutmeg Scale Comparison"
                      imageSrc={`${import.meta.env.BASE_URL}project3/2.2_hybrid_nutmeg_derek_scale_comparison.png`}
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}project3/2.2_hybrid_nutmeg_derek_scale_comparison.png`}
                        alt="derek nutmeg scale comparison"
                        className="w-full h-64 object-contain rounded-lg bg-white mb-2"
                      />
                    </ImageWithModal>
                    <p className="text-sm text-gray-600">Multi-Scale Comparison</p>
                  </div>
                </div>
              </div>
              
              {/* Other hybrid examples */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-4">Hybrid Example: Glasses</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Hybrid Glasses Greyscale"
                        imageSrc={`${import.meta.env.BASE_URL}project3/2.2_hybrid_glasses_grey.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/2.2_hybrid_glasses_grey.png`}
                          alt="hybrid glasses greyscale"
                          className="w-full h-48 object-contain rounded-lg bg-white mb-2"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600">Greyscale</p>
                    </div>
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Hybrid Glasses Color"
                        imageSrc={`${import.meta.env.BASE_URL}project3/2.2_hybrid_glasses.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/2.2_hybrid_glasses.png`}
                          alt="hybrid glasses color"
                          className="w-full h-48 object-contain rounded-lg bg-white mb-2"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600">Color</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <ImageWithModal 
                      imageName="Hybrid Glasses Grid"
                      imageSrc={`${import.meta.env.BASE_URL}project3/2.2_hybrid_glasses_grid.png`}
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}project3/2.2_hybrid_glasses_grid.png`}
                        alt="hybrid glasses grid"
                        className="w-full h-40 object-contain rounded-lg bg-white mb-2"
                      />
                    </ImageWithModal>
                    <p className="text-sm text-gray-600">Multi-Scale Grid</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-4">Hybrid Example: Tree</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Hybrid Tree Greyscale"
                        imageSrc={`${import.meta.env.BASE_URL}project3/2.2_hybrid_tree_grey.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/2.2_hybrid_tree_grey.png`}
                          alt="hybrid tree greyscale"
                          className="w-full h-48 object-contain rounded-lg bg-white mb-2"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600">Greyscale</p>
                    </div>
                    <div className="text-center">
                      <ImageWithModal 
                        imageName="Hybrid Tree Color"
                        imageSrc={`${import.meta.env.BASE_URL}project3/2.2_hybrid_tree.png`}
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}project3/2.2_hybrid_tree.png`}
                          alt="hybrid tree color"
                          className="w-full h-48 object-contain rounded-lg bg-white mb-2"
                        />
                      </ImageWithModal>
                      <p className="text-sm text-gray-600">Color</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <ImageWithModal 
                      imageName="Hybrid Tree Grid"
                      imageSrc={`${import.meta.env.BASE_URL}project3/2.2_hybrid_tree_grid.png`}
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}project3/2.2_hybrid_tree_grid.png`}
                        alt="hybrid tree grid"
                        className="w-full h-40 object-contain rounded-lg bg-white mb-2"
                      />
                    </ImageWithModal>
                    <p className="text-sm text-gray-600">Multi-Scale Grid</p>
                  </div>
                </div>
              </div>
            </ProjectPart>

            {/* Part 2.3: Gaussian and Laplacian Stacks */}
            <ProjectPart
              partNumber={2.3}
              title="Gaussian and Laplacian Stacks (Orange + Apple)"
              description="Visualizing the multiresolution blending process using Gaussian and Laplacian stacks"
              detailedDescription={[
                "[Show the Gaussian and Laplacian stacks for the Orange + Apple images]",
                "[Recreate the outcomes of Figure 3.42 (a) through (l)]"
              ]}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <ImageWithModal 
                  imageName="Orange + Apple Grid"
                  imageSrc={`${import.meta.env.BASE_URL}project3/2.3_oraple_grid.png`}
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}project3/2.3_oraple_grid.png`}
                    alt="orange apple grid"
                    className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                  />
                </ImageWithModal>
                <p className="text-sm text-gray-600">Orange + Apple Gaussian and Laplacian Stacks Process</p>
              </div>
            </ProjectPart>

            {/* Part 2.4: Custom Multiresolution Blending */}
            <ProjectPart
              partNumber={2.4}
              title="Custom Multiresolution Blending"
              description="Two additional custom blended images, including one with an irregular mask"
              detailedDescription={[
                "[Present your two custom blended images here]",
                "[Explain how you created the irregular mask for one of them]"
              ]}
              className="mb-16"
            >
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Berkeley Blend"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.4_berkeley_blend.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.4_berkeley_blend.png`}
                      alt="berkeley blend"
                      className="w-full h-64 object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Berkeley Campus Blend</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Political Blend"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.4_political_blend.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.4_political_blend.png`}
                      alt="political blend"
                      className="w-full h-64 object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Political Figure Blend</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Berkeley Blend Trigonometric Process"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.4_berkeley_blend_trigonometric.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.4_berkeley_blend_trigonometric.png`}
                      alt="berkeley blend trigonometric"
                      className="w-full h-64 object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Berkeley Blend: Trigonometric Process</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Mask Visualization"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.4_mask_visualization.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.4_mask_visualization.png`}
                      alt="mask visualization"
                      className="w-full h-64 object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Irregular Mask Visualization</p>
                </div>
              </div>
            </ProjectPart>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-berkeley-navy text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-berkeley-light mb-2">Maximilian Christof - CS180 Project 3</p>
          <p className="text-sm text-berkeley-light/70">
            Fun with Filters and Frequencies! - Exploring Filters, Edges, and Frequency Analysis
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Project3;