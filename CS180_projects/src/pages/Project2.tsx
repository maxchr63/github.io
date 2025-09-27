import HeroSection from "@/components/HeroSection";
import ProjectPart from "@/components/ProjectPart";
import ImageGallery from "@/components/ImageGallery";
import ProjectNavigation from "@/components/ProjectNavigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Camera } from "lucide-react";

const Project2 = () => {
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
      <ProjectNavigation currentProject="Project 2" />
      
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
              <span className="text-berkeley-navy font-medium">Maximilian Christof - CS180 Project 2</span>
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
                "For this task, I developed a custom 2D convolution function from scratch. My initial approach, conv_4_loops, used four nested loops to iterate through every pixel and kernel element. While functionally correct, this method proved to be computationally inefficient.",
                "To improve performance, I implemented an optimized version, conv_2_loops, which reduces the operation to two loops. This was achieved by iterating only through the kernel and using NumPy's array slicing to apply the kernel weights to corresponding image regions in a vectorized manner. For all my implementations, I used zero-padding to handle the boundaries, ensuring the output image has the same dimensions as the input.",
                "A comparison with scipy.signal.convolve2d (configured with mode='same' and boundary='fill') showed that my two-loop function produced identical results and had a much-improved runtime over the four-loop version, though SciPy's optimized library remains the fastest. I then applied my convolution function to calculate image derivatives using Dx and Dy operators, which successfully highlighted the vertical and horizontal edges in the image, respectively."
              ]}
              className="mb-16"
            >
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-berkeley-navy mb-4">Implementation Details</h4>
                
                {/* 4-Loop Implementation */}
                <div className="mb-6">
                  <h5 className="text-md font-semibold text-berkeley-navy mb-3">4-Loop Implementation (Inefficient)</h5>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
                    <code>{`def conv_4_loops(image: np.ndarray, kernel: np.ndarray) -> np.ndarray:
    """
    Convolves an image with a kernel using 4 nested loops (inefficient)
    For grey scale images, so the color channels is not considered
    
    Args:
        image (np.ndarray): Input image of shape (H, W)
        kernel (np.ndarray): Convolution kernel of shape (kH, kW)
    
    Returns:
        np.ndarray: Convolved image of shape (H, W)
    """
    H, W = image.shape
    kH, kW = kernel.shape
    pad_h, pad_w = kH // 2, kW // 2
    
    # Pad the image to handle borders
    padded_image = np.pad(image, ((pad_h, pad_h), (pad_w, pad_w)), 
                         mode='constant', constant_values=0)
    convolved_image = np.zeros_like(image) # init image

    # "flip" the kernel for convolution
    flipped_kernel = kernel[::-1, ::-1] 
    
    # convolve 
    for h in range(H):
        for w in range(W):
            conv_sum = 0.0
            for kh in range(kH):
                for kw in range(kW):
                    conv_sum += padded_image[h + kh, w + kw] * flipped_kernel[kh, kw]
            convolved_image[h, w] = conv_sum

    return convolved_image`}</code>
                  </pre>
                </div>

                {/* 2-Loop Implementation */}
                <div className="mb-6">
                  <h5 className="text-md font-semibold text-berkeley-navy mb-3">2-Loop Implementation (More Efficient)</h5>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
                    <code>{`def conv_2_loops(image: np.ndarray, kernel: np.ndarray) -> np.ndarray:
    """
    Convolves an image with a kernel using 2 nested loops (more efficient)
    For grey scale images, so the color channels is not considered
    
    Args:
        image (np.ndarray): Input image of shape (H, W)
        kernel (np.ndarray): Convolution kernel of shape (kH, kW)

    Returns:
        np.ndarray: Convolved image of shape (H, W)
    """
    H, W = image.shape
    kH, kW = kernel.shape
    pad_h, pad_w = kH // 2, kW // 2

    # Pad the image to handle borders
    padded_image = np.pad(image, ((pad_h, pad_h), (pad_w, pad_w)), 
                         mode='constant', constant_values=0)
    convolved_image = np.zeros_like(image) # init image

    # "flip" the kernel for convolution
    flipped_kernel = kernel[::-1, ::-1]

    for h in range(H):
        for w in range(W):
            conv_sum = np.sum(padded_image[h:h + kH, w:w + kW] * flipped_kernel)
            convolved_image[h, w] = conv_sum

    return convolved_image`}</code>
                  </pre>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>:</strong> Main Optimization: The 2-loop version leverages NumPy's vectorized operations with array slicing 
                    (<code className="bg-gray-200 px-1 rounded">padded_image[h:h + kH, w:w + kW] * flipped_kernel</code>), 
                    eliminating the need for the inner two loops and significantly improving performance.
                  </p>
                </div>
              </div>
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
                "After computing the partial derivatives of the input image in the x and y directions (dx_image and dy_image), I calculated the gradient magnitude. This was done by taking the square root of the sum of the squares of the two derivatives, following the formula: G = sqrt(dx² + dy²). The resulting gradient magnitude image highlights regions of high intensity change, with bright pixels indicating strong edges and dark pixels representing flat areas.",
                "However, this initial gradient image contained significant noise, appearing as scattered bright pixels in otherwise uniform regions. To produce a cleaner edge map, I binarized the gradient magnitude by applying a threshold, T. For my final result, I chose a threshold of 0.31. Any pixel with a gradient magnitude above this value was set to 1 (white), and any pixel below it was set to 0 (black).",
                "The selection of this threshold required a careful trade-off. As shown in the test images below, setting the threshold too low results in an edge map that, while capturing all features, is overwhelmed with noise. Conversely, setting it too high erases finer edge details along with the noise. The value of 0.31 was chosen to best preserve the primary structural edges of the subject while effectively suppressing most of the background noise."
              ]}
              className="mb-16"
            >
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-berkeley-navy mb-4">Filter Definitions</h4>
                
                <div className="mb-6">
                  <h5 className="text-md font-semibold text-berkeley-navy mb-3">Box Filter (9×9)</h5>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="grid grid-cols-9 gap-1 max-w-xs mx-auto mb-3">
                      {Array.from({length: 81}, (_, i) => (
                        <div key={i} className="w-6 h-6 bg-blue-200 border border-gray-400 flex items-center justify-center text-xs font-mono">
                          1/81
                        </div>
                      ))}
                    </div>
                    <pre className="bg-gray-800 text-green-400 p-2 rounded text-xs text-center">
                      <code>np.ones((9, 9)) / 81.0</code>
                    </pre>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h5 className="text-md font-semibold text-berkeley-navy mb-3">Dx Filter</h5>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="grid grid-cols-3 gap-2 max-w-32 mx-auto mb-3">
                        <div className="w-8 h-8 bg-red-200 border border-gray-400 flex items-center justify-center text-sm font-bold">1</div>
                        <div className="w-8 h-8 bg-gray-200 border border-gray-400 flex items-center justify-center text-sm">0</div>
                        <div className="w-8 h-8 bg-blue-200 border border-gray-400 flex items-center justify-center text-sm font-bold">-1</div>
                      </div>
                      <pre className="bg-gray-800 text-green-400 p-2 rounded text-xs">
                        <code>d_x = np.array([[1, 0, -1]])</code>
                      </pre>
                      <p className="text-xs text-gray-600 mt-2">Detects vertical edges</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h5 className="text-md font-semibold text-berkeley-navy mb-3">Dy Filter</h5>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="grid grid-rows-3 grid-cols-1 gap-2 max-w-12 mx-auto mb-3">
                        <div className="w-8 h-8 bg-red-200 border border-gray-400 flex items-center justify-center text-sm font-bold">1</div>
                        <div className="w-8 h-8 bg-gray-200 border border-gray-400 flex items-center justify-center text-sm">0</div>
                        <div className="w-8 h-8 bg-blue-200 border border-gray-400 flex items-center justify-center text-sm font-bold">-1</div>
                      </div>
                      <pre className="bg-gray-800 text-green-400 p-2 rounded text-xs">
                        <code>d_y = np.array([[1, 0, -1]]).T</code>
                      </pre>
                      <p className="text-xs text-gray-600 mt-2">Detects horizontal edges</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Threshold Selection:</strong> After testing various thresholds, <strong>0.31</strong> provided the optimal balance 
                    between edge detection and noise suppression, compared to the initial threshold of 0.5 which was too restrictive.
                  </p>
                </div>
              </div>
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
                  <p className="text-sm text-gray-600">Cameraman Binarization Threshold Testing (low Thresholds)</p>
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
                  <p className="text-sm text-gray-600">Cameraman Binarization Threshold Testing (high Thresholds)</p>
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
                  <p className="text-sm text-gray-600">Partial derivatives in x and y directions</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Cameraman Side by Side"
                    imageSrc={`${import.meta.env.BASE_URL}project3/1.2_crameraman_sidebyside.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/1.2_crameraman_sidebyside.png`}
                      alt="cameraman "
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Thresholds Side by Side Comparison</p>
                </div>
              </div>
            </ProjectPart>

            {/* Part 1.3: Gaussian and DoG Filters */}
            <ProjectPart
              partNumber={1.3}
              title="Gaussian and DoG Filters"
              description="Constructing Gaussian filters, building DoG filters, and comparing with finite difference methods"
              detailedDescription={[
                "To improve upon the noisy edge detection from the finite difference method, I implemented an approach using a Derivative of Gaussian (DoG) filter. The initial step was to determine the appropriate kernel size for a given sigma of 1.2. I calculated the kernel size using the formula ksize = int(6 * sigma) + 1 and ensured the result was an odd number, which yielded a 9x9 kernel. I then constructed the Gaussian filter using cv2.getGaussianKernel.",
                "I explored two equivalent methods to compute the smoothed derivatives, leveraging the associative property of convolution, where (Image * Gaussian) * Dx = Image * (Gaussian * Dx). Two-Step Convolution: I first applied the 9x9 Gaussian filter to the cameraman.png image. Then, I convolved this smoothed image with the standard Dx and Dy finite difference operators. DoG Filter Convolution: I created DoG filters by convolving the Gaussian kernel directly with the Dx and Dy operators. These new DoG_x and DoG_y filters were then applied to the original, unsmoothed image in a single step.",
                "Both methods produced nearly identical gradient images, with minor differences attributable to floating-point arithmetic inaccuracies rather than any functional variance. The primary advantage of this approach is that smoothing the image with the Gaussian filter removes most high-frequency noise before edge detection. This pre-filtering allows for the use of a much lower binarization threshold, which in turn produces a cleaner final edge map with more pronounced and continuous edges compared to the simple finite difference method. The background is cleaner, and the main subject's outline is more coherent. However, there is a slight trade-off, as the Gaussian blur can soften and remove some of the finest details, such as the texture on the camera body itself. Overall, the DoG filter offers a more robust solution for clean edge detection."
              ]}
              className="mb-16"
            >
              <div className="space-y-8">
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
                  <p className="text-sm text-gray-600">Gradient Testing Results (for high thresholds)</p>
                </div>
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
                  <p className="text-sm text-gray-600">Multi-Step Convolution vs DoG Comparison</p>
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
                "For this subproblem, I implement the unsharp mask filter to enhance image details. The technique works by isolating the high-frequency components of an image and adding them back to the original. This process can be defined by the formula: Sharpened Image = Original + alpha * (Original - Blurred). Here, the (Original - Blurred) term represents the high-frequency details, and alpha is a scaling factor that controls the intensity of the sharpening effect.",
                "To implement this, I first create a blurred version of the image by convolving it with a Gaussian filter. Subtracting this low-frequency result from the original image yields the high-frequency component, which primarily consists of edges and fine textures. This high-frequency map is then scaled by alpha and added back to the original image. As shown in the \"Cathedral Image Decomposition\" plots, the original Taj Mahal image is separated into its low-frequency (blurred) and high-frequency (edges) components. The final sharpened result is obtained by amplifying these high-frequency details.",
                "I applied this process to both the Taj Mahal image and additional images of a national park and the San Francisco skyline, demonstrating the filter's effectiveness in different contexts. The alpha parameter directly influences the final appearance. A higher alpha value makes the edges more pronounced, but can also introduce artifacts or a \"halo\" effect if set too high. The \"before and after\" comparisons for the National Park and SF Skyline images show a sharpening effect with an alpha of 3 and 4, respectively.",
                "Lastly, I investigated whether an image that has been blurred can be fully restored through sharpening. As demonstrated with the \"Original → Blur → Sharpen Process\" on the tree image, the answer is no. The blurring process causes an irreversible loss of high-frequency information. While the subsequent sharpening step does enhance the remaining edge details, it cannot recreate the lost information, resulting in an image that remains noticeably less sharp than the original."
              ]}
              className="mb-16"
            >
              <div className="space-y-8">
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Cathedral Image Decomposition"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.1_cathedral_decomposition.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.1_cathedral_decomposition.png`}
                      alt="cathedral decomposition"
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Cathedral Image Decomposition</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Cathedral Sharpened Best"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.1_cathedral_sharpened_best.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.1_cathedral_sharpened_best.png`}
                      alt="cathedral sharpened best"
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Cathedral Sharpened (Best Result)</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Blur Sharpen Blur Process"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.1_blurr_sharpen_blurr.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.1_blurr_sharpen_blurr.png`}
                      alt="blur sharpen blur process"
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Original → Blur → Sharpen Process</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="National Park Enhancement"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.1_national_park_enhancement.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.1_national_park_enhancement.png`}
                      alt="national park enhancement"
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">National Park Enhancement Process</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Skyline Enhancement"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.1_skyline_enhancement.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.1_skyline_enhancement.png`}
                      alt="skyline enhancement"
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Skyline Enhancement Process</p>
                </div>
                <div className="text-center">
                  <ImageWithModal 
                    imageName="National Park Enhancement Side by Side"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.1_nationalpark_enhancement_sidebyside.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.1_nationalpark_enhancement_sidebyside.png`}
                      alt="national park enhancement side by side"
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
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
                      className="w-full max-w-4xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Skyline: Before vs After</p>
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
              <div className="space-y-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  In this subproblem, I created hybrid images, which are static images that change in interpretation depending on the viewing distance. The core idea is to blend the low-frequency components of one image (the one visible from afar) with the high-frequency components of another (the one visible up close).
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-3">Process Walkthrough: Derek + Nutmeg</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To demonstrate the full process, I created a hybrid of the classic "Derek + Nutmeg" image pair, as shown in the complete process view.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-berkeley-navy mb-2">Alignment:</h5>
                      <p className="text-gray-700 text-sm">
                        The first step is to align the two source images. My implementation includes an alignment function that can use two, three, or four correspondence points to achieve the best possible overlay, which is crucial for the effect to work properly.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-berkeley-navy mb-2">Filtering:</h5>
                      <ul className="text-gray-700 text-sm space-y-2">
                        <li><strong>Low-Pass Filter:</strong> The image of Derek, intended to be seen from a distance, was processed with a low-pass Gaussian filter. This removes the fine details (high frequencies) and preserves the broad, smooth shapes (low frequencies). For this, I used a sigma_lowpass of 15.</li>
                        <li><strong>High-Pass Filter:</strong> The image of Nutmeg, intended for close-up viewing, was high-pass filtered. This was achieved by subtracting a Gaussian-blurred version of the image from the original, isolating the edges and textures. A sigma_highpass of 7 was used for the blur in this step. A higher sigma here results in a broader band of high frequencies being extracted, which can enhance detail.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-berkeley-navy mb-2">Combining:</h5>
                      <p className="text-gray-700 text-sm">
                        The two filtered images were then combined. The high-frequency layer was scaled by a factor of high_freq_scale = 1.3 to ensure its details were sufficiently pronounced before being added to the low-frequency layer. The resulting hybrid image appears as Derek from a distance and Nutmeg up close.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-berkeley-navy mb-2">Frequency Analysis:</h5>
                      <p className="text-gray-700 text-sm">
                        The Fourier Transform plots visualize this process in the frequency domain. The FFT of the low-pass filtered image shows energy concentrated near the center (low frequencies). The FFT of the high-pass filtered image shows energy primarily away from the center. The FFT of the final hybrid image clearly shows the combination of both.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-3">Additional Hybrid Image Examples</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I created two additional hybrid images to further demonstrate the technique.
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <strong className="text-berkeley-navy">Hybrid Example: Glasses:</strong>
                      <span className="text-gray-700"> For this image, which blends a portrait of me with and without glasses, I used sigma_low_glasses = 8 and sigma_high_glasses = 4, with a high-frequency scaling of 1.3.</span>
                    </div>
                    <div>
                      <strong className="text-berkeley-navy">Hybrid Example: Tree:</strong>
                      <span className="text-gray-700"> This example combines two different views or types of trees. The parameters were tuned to sigma_low_tree = 12, sigma_high_tree = 10, and a high_freq_scale_tree of 1.6 to balance the details.</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mt-4">
                    For both examples, the "Greyscale," "Color," and "Multi-Scale Grid" images show the final results of this process. The selection of sigma values for the filters is a critical step that requires experimentation to find the optimal cutoff frequencies for each image pair.
                  </p>
                </div>
              </div>
              
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
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                </div>
                
                <div className="mb-6">
                  <div className="text-center">
                    <ImageWithModal 
                      imageName="Derek + Nutmeg with Frequency Analysis"
                      imageSrc={`${import.meta.env.BASE_URL}project3/2.2_hybrid_nutmeg_derek_grey_with_freq.png`}
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}project3/2.2_hybrid_nutmeg_derek_grey_with_freq.png`}
                        alt="derek nutmeg with frequency analysis"
                        className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                      />
                    </ImageWithModal>
                    <p className="text-sm text-gray-600">Hybrid Image generation and corresponding Fourier Spectra</p>
                  </div>
                </div>
              </div>
              
              {/* Other hybrid examples - full width sections */}
              <div className="mb-12">
                <h4 className="text-lg font-semibold text-berkeley-navy mb-4">Hybrid Example: Glasses</h4>
                <div className="grid md:grid-cols-3 gap-6">
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
                  <div className="text-center">
                    <ImageWithModal 
                      imageName="Hybrid Glasses Grid"
                      imageSrc={`${import.meta.env.BASE_URL}project3/2.2_hybrid_glasses_grid.png`}
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}project3/2.2_hybrid_glasses_grid.png`}
                        alt="hybrid glasses grid"
                        className="w-full h-48 object-contain rounded-lg bg-white mb-2"
                      />
                    </ImageWithModal>
                    <p className="text-sm text-gray-600">Multi-Scale Grid</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-12">
                <h4 className="text-lg font-semibold text-berkeley-navy mb-4">Hybrid Example: Tree</h4>
                <div className="grid md:grid-cols-3 gap-6">
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
                  <div className="text-center">
                    <ImageWithModal 
                      imageName="Hybrid Tree Grid"
                      imageSrc={`${import.meta.env.BASE_URL}project3/2.2_hybrid_tree_grid.png`}
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}project3/2.2_hybrid_tree_grid.png`}
                        alt="hybrid tree grid"
                        className="w-full h-48 object-contain rounded-lg bg-white mb-2"
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
              detailedDescription={[]}
              className="mb-16"
            >
              <div className="space-y-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  In this subproblem, I explore multiresolution blending, a technique that creates seamless composite images by combining them across different frequency bands. The process relies on decomposing the source images using Gaussian and Laplacian stacks.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-3">The Blending Process</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To create a seamless blend, such as the "Oraple" shown in the figure, I followed a multi-step process:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-berkeley-navy mb-2">Image Decomposition with Stacks:</h5>
                      <ul className="text-gray-700 text-sm space-y-2">
                        <li><strong>Gaussian Stack:</strong> For both the apple and orange images, I first created a Gaussian stack. This is a pyramid of images where each subsequent level is a more blurred version of the one before it. The bottom level is the original image, and the top is the most blurred, containing only the lowest-frequency information.</li>
                        <li><strong>Laplacian Stack:</strong> From the Gaussian stack, I constructed a Laplacian stack. Each level of the Laplacian stack stores the difference between two adjacent levels of the Gaussian stack (L_i = G_i - G_i+1). This isolates specific bands of image detail, from fine textures (high frequencies) at the bottom to coarse shapes (low frequencies) at the top.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-berkeley-navy mb-2">Mask Creation and Blending:</h5>
                      <div className="text-gray-700 text-sm space-y-2">
                        <p>A simple vertical mask was used to blend the left half of the apple with the right half of the orange. To avoid a visible seam, the mask has a smooth transition in the center.</p>
                        <p>The core of the technique is to blend the images at each corresponding level of their Laplacian stacks. The mask itself is also converted into a Gaussian stack, so the blend at each frequency level uses a mask of a corresponding smoothness. The high-frequency details are blended with a sharp mask, while low-frequency components are blended with a very blurry mask.</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-berkeley-navy mb-2">Image Reconstruction:</h5>
                      <div className="text-gray-700 text-sm space-y-2">
                        <p>The final blended image is reconstructed by first summing all the levels of the new, blended Laplacian stack.</p>
                        <p>To this sum, the blended lowest-frequency components (the final level of the Gaussian stacks) are added. This final step is crucial as it restores the base coloring and smooth gradients of the image.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-3">Visualizing the "Oraple" Blend</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The image provided visualizes this process for creating the "Oraple".
                  </p>
                  
                  <ul className="text-gray-700 text-sm space-y-2 mb-4">
                    <li>The three columns show the masked components for the Apple, the Orange, and the resulting Blend.</li>
                    <li>The first three rows show the blending process at different frequency bands from the Laplacian stacks: High Freq, Med Freq, and Low Freq. Notice how the fine textures of the apple and orange are combined in the top row, while the smooth color gradients are blended in the third row.</li>
                    <li>The final row shows the two masked source images alongside the Final Oraple, the perfectly reconstructed image that seamlessly combines both fruits.</li>
                  </ul>
                </div>
              </div>
              
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
                <p className="text-sm text-gray-600">Orange + Apple Gaussian Multiresolution Blending with Laplacian Stacks Process</p>
              </div>
            </ProjectPart>

            {/* Part 2.4: Custom Multiresolution Blending */}
            <ProjectPart
              partNumber={2.4}
              title="Custom Multiresolution Blending"
              description="Two additional custom blended images, including one with an irregular mask"
              detailedDescription={[]}
              className="mb-16"
            >
              <div className="space-y-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Following the principles of multiresolution blending, I created two additional custom composite images, each requiring a unique masking strategy to achieve a seamless result.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-3">Politician Blend with Irregular Mask</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For the first custom blend, I combined the portraits of two politicians. A simple vertical or horizontal split would not be effective for faces. Therefore, after carefully aligning the two source images to match the positions of the facial features, I used an irregular, circular mask.
                  </p>
                  <p className="text-gray-700 text-sm">
                    This mask was centered over the faces, defining the area of the blend. The multiresolution blending algorithm was then applied. By blending the different frequency bands within this circular region using a progressively smoothed mask, the transition between the two faces becomes imperceptible. The result is a single, coherent portrait that effectively merges the features of both individuals.
                  </p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-3">Day and Night Blend with Gradient Mask</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Blending a day scene with a night scene presented a different challenge, as the transition needed to be exceptionally smooth to appear natural. A simple mask with a narrow, linear transition was insufficient.
                  </p>
                  
                  <div className="space-y-3">
                    <p className="text-gray-700 text-sm">
                      To address this, I implemented a more advanced <code className="bg-gray-100 px-2 py-1 rounded text-xs">create_gradient_mask</code> function to generate a nuanced gradient over a user-defined portion of the image. I explored two modes for creating this smooth transition:
                    </p>
                    
                    <ul className="text-gray-700 text-sm space-y-2 ml-4">
                      <li><strong>Linear Gradient:</strong> This mode creates a straight, linear ramp between the two images.</li>
                      <li><strong>Trigonometric Gradient:</strong> This mode uses a cosine function (0.5 + 0.5 * np.cos(...)) to create the transition. This results in a more gradual ease-in and ease-out at the edges of the blend zone.</li>
                    </ul>
                    
                    <p className="text-gray-700 text-sm">
                      After testing both, the trigonometric approach yielded a marginally smoother and more convincing result. This gradient mask was then used in the multi-resolution blending process to seamlessly merge the day and night landscapes into a single composite image.
                    </p>
                  </div>
                </div>
              </div>
              
                            <div className="space-y-8">
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Political Blend"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.4_political_blend.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.4_political_blend.png`}
                      alt="political blend"
                      className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Political Figure Blend</p>
                </div>
                
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Political Blend 2"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.4_political_blend_2.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.4_political_blend_2.png`}
                      alt="political blend 2"
                      className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Political Figure Blend 2</p>
                </div>
                
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Mask Visualization"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.4_mask_visualization.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.4_mask_visualization.png`}
                      alt="mask visualization"
                      className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Irregular Mask Visualization</p>
                </div>
                
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Berkeley Blend"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.4_berkeley_blend.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.4_berkeley_blend.png`}
                      alt="berkeley blend"
                      className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Berkeley Campus Blend</p>
                </div>
                
                <div className="text-center">
                  <ImageWithModal 
                    imageName="Berkeley Blend Trigonometric Process"
                    imageSrc={`${import.meta.env.BASE_URL}project3/2.4_berkeley_blend_trigonometric.png`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}project3/2.4_berkeley_blend_trigonometric.png`}
                      alt="berkeley blend trigonometric"
                      className="w-full max-w-5xl mx-auto h-auto object-contain rounded-lg bg-white mb-2"
                    />
                  </ImageWithModal>
                  <p className="text-sm text-gray-600">Berkeley Blend: Trigonometric Process</p>
                </div>
              </div>
            </ProjectPart>
          </div>
        </div>
      </section>

      {/* Project 2 Learnings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-berkeley-navy mb-4">Project 2 Learnings</h2>
              <p className="text-xl text-gray-600 mb-8">Insights and takeaways from working with filters and frequencies</p>
              
              <div className="space-y-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  The fundamental revelation of this project was understanding how images are essentially composed of different frequency components, each carrying distinct visual information. High frequencies capture fine details like edges and textures, while low frequencies represent broader patterns and overall structure. This frequency-domain perspective completely changed how I approach image processing—realizing that techniques like blurring, sharpening, and hybrid image creation are really just sophisticated ways of manipulating these frequency bands.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Working with Gaussian and Laplacian stacks enhanced my knowledge about the multi-scale nature of visual perception. The ability to decompose images into different levels of detail and then selectively enhance or suppress certain frequencies provides incredible creative and analytical power. Whether creating hybrid images that change appearance based on viewing distance, or blending images seamlessly using multi-resolution techniques, it all comes down to understanding how our visual system processes different frequency information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A critical technical lesson was mastering the nuances of pixel value management throughout the processing pipeline. Operations like convolution, subtraction, and frequency filtering can easily push pixel values outside the standard [0,1] range, leading to clipping artifacts or completely broken images. Learning when to normalize, when to clip, and when to carefully scale values back to valid ranges became essential for producing clean, professional results. This seemingly mundane aspect of implementation often makes the difference between a successful technique and a complete failure.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-berkeley-navy mb-3">Technical Insights</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Frequency Domain Thinking:</strong> Every image operation can be understood through the lens of frequency manipulation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Multi-Resolution Processing:</strong> Breaking images into different scales enables powerful blending and analysis techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Pixel Value Management:</strong> Proper handling of value ranges is crucial for maintaining image quality throughout processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Implementation Details Matter:</strong> Small choices in boundary handling, normalization, and parameter selection can dramatically impact results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-berkeley-navy text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Project 2: Fun with Filters and Frequencies!</p>
        </div>
      </footer>
    </div>
  );
};

export default Project2;

