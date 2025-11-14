import React from "react";
import { Camera, Zap, Eye, Cpu } from "lucide-react";
import ProjectNavigation from "@/components/ProjectNavigation";
import ProjectPart from "@/components/ProjectPart";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Project4 = () => {
  const ImageWithModal = ({ children, imageName, imageSrc }: { children: React.ReactNode; imageName: string; imageSrc?: string }) => (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer hover:opacity-80 transition-opacity">
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">{imageName}</h3>
          {imageSrc ? (
            <img 
              src={imageSrc}
              alt={imageName}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          ) : (
            <div className="bg-gradient-to-br from-purple-200 via-blue-200 to-green-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-700">Enlarged {imageName}</span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-berkeley-light/5 to-berkeley-navy/5">
      {/* Navigation */}
      <ProjectNavigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-purple-900/20 via-berkeley-blue/30 to-green-900/20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}berkeley-hero.jpg`}
            alt="Berkeley campus"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
          <div className="max-w-4xl">
            {/* Course Info */}
            <div className="flex items-center gap-2 mb-6">
              <Camera className="w-5 h-5 text-berkeley-blue" />
              <span className="text-berkeley-navy font-medium">Maximilian Christof - CS180 Project 4</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-berkeley-navy via-berkeley-blue to-berkeley-navy bg-clip-text text-transparent leading-tight">
              Neural Radiance Fields (NeRF)
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              3D scene reconstruction from 2D images using neural rendering. From camera calibration and ArUco pose estimation to volumetric ray marching and neural density prediction.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">

            {/* Project Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-berkeley-navy mb-6">Neural Radiance Field Project Overview</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Neural Radiance Fields volumetrically encode 3D scenes through multilayer perceptrons that map spatial coordinates and viewing directions to density and color values. The approach generates photorealistic novel views by integrating samples along camera rays, producing continuous representations that surpass traditional discrete methods. This implementation reconstructs the complete 2020 NeRF pipeline, from geometric calibration through volumetric rendering, applied to both standard benchmark datasets and a custom-captured scene.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-3">Functional Representation and High-Frequency Learning</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Representing images as continuous functions C = F(x, y) rather than pixel grids extends naturally to volumetric 3D functions C = F(x, y, z). Direct training of fully-connected networks on raw coordinates fails to capture high-frequency content due to the spectral bias of standard architectures.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Positional encoding transforms inputs through sinusoidal basis functions: γ(v) = [cos(2πσʲv), sin(2πσʲv)] for multiple frequency bands j, expanding the representation space and modifying the neural tangent kernel to enable learning of fine detail.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-3">Volume Rendering Mathematics</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Rendering computes pixel color by integrating density and emitted radiance along rays cast from the camera. The continuous rendering equation C(r) = ∫ T(t) σ(t) c(t, d) dt accumulates contributions from all points along the ray from near bound tₙ to far bound t_f.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Transmittance T(t) = exp(-∫ σ(s) ds) models light absorption through the volume. Numerical quadrature approximates this integral through stratified sampling, with random perturbations during training ensuring comprehensive coverage of ray positions and preventing overfitting to discrete sample locations.
                  </p>
                </div>
              </div>
            </div>

            {/* Part 0: Camera Calibration & 3D Scanning */}
            <ProjectPart
              partNumber={0}
              title="Part 0: Camera Calibration and Dataset Preparation"
              description="ArUco-based calibration, pose estimation, and undistorted dataset construction"
              detailedDescription={[
                "ArUco fiducial markers enable robust camera calibration and pose estimation by providing detectable correspondences across multiple views. The workflow progresses from intrinsic parameter estimation through pose recovery and culminates in assembling an undistorted image dataset with accurate camera matrices."
              ]}
              className="mb-16"
            >
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Part 0.1: Intrinsic Parameter Estimation</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Calibration employed a <strong>2×3 ArUco grid</strong> (6 tags total) with 60mm tags, 30mm horizontal gaps, and 15.67mm vertical gaps. The gap-based specification directly determines marker positions: the top-left corner of marker at row r, column c lies at (c · (s + gₓ), r · (s + g_y), 0) where s is tag size and gₓ, g_y are gaps.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      OpenCV's <code className="bg-gray-100 px-2 py-1 rounded">cv2.aruco.detectMarkers()</code> extracts corner locations from each calibration image, returning coordinates for all detected tags. For each detected marker, the four corner image coordinates were paired with their known 3D world positions. Images with zero detections were automatically skipped to prevent processing failures.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Calibration Results</h5>
                      <p className="text-gray-700 mb-3">
                        After accumulating corners across all valid images, <code className="bg-gray-100 px-2 py-1 rounded">cv2.calibrateCamera()</code> solved for the intrinsic matrix and distortion coefficients.
                      </p>
                      <div className="font-mono text-sm bg-white p-4 rounded overflow-x-auto">
                        <div>RMS Reprojection Error: 5.5 pixels</div>
                        <div>Image Resolution: 4032×3024</div>
                        <div>Calibration Images: Multiple views with varying orientations</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Part 0.2: Scene Capture</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      A single <strong>100mm ArUco tag</strong> was positioned beside the target object, and images were captured from evenly distributed viewpoints at consistent standoff distance. Uniform lighting and sharp focus ensure high-quality input data for neural network training.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The capture strategy involved systematically photographing the scene from multiple angles while maintaining the ArUco marker visibility for subsequent pose estimation.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Part 0.3: Camera Pose Recovery</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      The Perspective-n-Point algorithm determines camera orientation and position from 2D-3D correspondences. <code className="bg-gray-100 px-2 py-1 rounded">cv2.solvePnP()</code> processes the detected tag corners, intrinsic parameters, and known tag geometry to produce rotation vector <code className="bg-gray-100 px-1 rounded">rvec</code> and translation <code className="bg-gray-100 px-1 rounded">tvec</code> in the world-to-camera frame.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Conversion via <code className="bg-gray-100 px-2 py-1 rounded">cv2.Rodrigues()</code> yields rotation matrix R_w2c, which inverts to camera-to-world: R_c2w = R_w2c^T and t_c2w = -R_c2w · t_w2c.
                    </p>
                    
                    {/* Viser Visualization */}
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="space-y-2">
                        <img 
                          src={`${import.meta.env.BASE_URL}project4/part0.3_viser_favorites/0_3_top.png`}
                          alt="Viser top view showing camera poses and scene orientation"
                          className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                        />
                        <p className="text-sm text-gray-600 text-center">Top view: Camera poses distributed around the scene</p>
                      </div>
                      <div className="space-y-2">
                        <img 
                          src={`${import.meta.env.BASE_URL}project4/part0.3_viser_favorites/0_3_side.png`}
                          alt="Viser side view showing camera poses and scene orientation"
                          className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                        />
                        <p className="text-sm text-gray-600 text-center">Side view: Consistent camera height and orbital trajectory</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Below are camera frustum visualizations from Viser showing the recovered poses around the captured object. The visualizations demonstrate the quality of the pose estimation with cameras distributed evenly around the scene.
                    </p>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Coordinate Frame Adjustments</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        A coordinate transformation flipped camera positions across the horizontal plane, ensuring all viewpoints lie above rather than below the scene.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Additionally, the world origin was shifted in the negative y direction by 25% of the y-coordinate range, moving the reference frame from the tag corner to approximate object center. This adjustment produces circular test trajectories that orbit the object itself rather than the marker.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Part 0.4: Image Undistortion and Dataset Construction</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Undistortion removes lens aberrations using <code className="bg-gray-100 px-2 py-1 rounded">cv2.undistort()</code> with the calibrated distortion coefficients. Border artifacts from undistortion were minimized by computing an optimal camera matrix via <code className="bg-gray-100 px-2 py-1 rounded">cv2.getOptimalNewCameraMatrix()</code> with <code className="bg-gray-100 px-1 rounded">alpha=0.8</code>, balancing between retaining valid pixels and cropping black regions.
                    </p>
                    
                    {/* Dataset Quality Analysis */}
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="space-y-2">
                        <img 
                          src={`${import.meta.env.BASE_URL}project4/part_0.4/0.4_training_image_datased_overview.png`}
                          alt="Training dataset overview showing sample images of fluffy ewes ball"
                          className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                        />
                        <p className="text-sm text-gray-600 text-center">Training dataset: Sample views of the fluffy ewes ball</p>
                      </div>
                      <div className="space-y-2">
                        <img 
                          src={`${import.meta.env.BASE_URL}project4/part_0.4/0.4_image_quality_analysis.png`}
                          alt="Image quality analysis metrics for the dataset"
                          className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                        />
                        <p className="text-sm text-gray-600 text-center">Image quality analysis: Metrics across all captured views</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Aspect-Ratio-Preserving Downsampling</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        The ROI dimensions determine the natural aspect ratio w/h, and the target resolution constrains the longer dimension to 850 pixels while computing the shorter dimension to maintain the ratio. For example, a 1200×900 ROI (4:3) downsamples to 850×638 rather than 850×850.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Intrinsic parameters scale proportionally with resolution changes. The implementation computes independent scale factors sₓ = w_new/w_roi and s_y = h_new/h_roi, then multiplies focal lengths: fₓ' = fₓ · sₓ and f_y' = f_y · s_y.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The principal point shifts to image center after downsampling. The dataset stores both individual focal lengths as a tuple (fx, fy) and the complete 3×3 intrinsic matrix K containing scaled focal lengths and centered principal point.
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      Test camera poses were synthesized by computing the centroid and average radius of training camera positions, then generating 60 viewpoints uniformly distributed on a circle at constant height. The final <code className="bg-gray-100 px-1 rounded">.npz</code> archive contains training/validation images (0-255 range), corresponding camera-to-world matrices, test poses, focal length tuple, and full intrinsic matrix.
                    </p>
                  </div>
                </div>
              </div>
            </ProjectPart>

            {/* Part 1: Neural Field for 2D Images */}
            <ProjectPart
              partNumber={1}
              title="Part 1: Fitting a Neural Field to 2D Images"
              description="Coordinate-based neural networks for image memorization with positional encoding"
              detailedDescription={[
                "Coordinate-based neural networks can memorize image content by learning a mapping from spatial position to RGB color. This simplified 2D scenario introduces the core NeRF machinery, positional encoding and multilayer perceptrons, without the complexity of volumetric rendering. The network treats each pixel as an independent training sample, optimizing parameters until the learned function reproduces the target image when queried at all coordinate locations."
              ]}
              className="mb-16"
            >
              <div className="space-y-8">
                {/* Network Architecture */}
                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Network Architecture</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      The multilayer perceptron consists of <strong>four fully-connected layers</strong> with ReLU activations, concluding with a sigmoid to constrain outputs to valid color range [0,1]. Positional encoding transforms the 2D input coordinates (x, y) through sinusoidal functions at multiple frequencies: γ(p) = [p, sin(2π·2⁰p), cos(2π·2⁰p), ..., sin(2π·2^(L-1)p), cos(2π·2^(L-1)p)] where L controls the maximum frequency band.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      For L=10, this expands two coordinates into a 42-dimensional vector (2 original + 2 directions × 10 frequencies × 2 components) that feeds into the first linear layer. Hidden layer <strong>width</strong> determines network capacity. Coordinates are normalized by dividing pixel indices by image dimensions, ensuring inputs lie in [0,1].
                    </p>
                    <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Hyperparameter Selection</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>Batch size:</strong> 10,000 pixels per iteration</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>Iterations:</strong> 3,000</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>Learning rate:</strong> 0.01 (Adam optimizer)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>Hidden width:</strong> {'{32, 256}'}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>Positional encoding L:</strong> {'{2, 10}'}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>Layers:</strong> 4 fully-connected with ReLU</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>Output:</strong> 3 channels with sigmoid activation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Training Configuration */}
                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Training Configuration</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Training samples 10,000 random pixels per iteration, computing MSE loss between predicted and ground-truth colors normalized to [0,1]. Adam optimization with learning rate 10⁻² runs for 3,000 iterations. Peak signal-to-noise ratio quantifies reconstruction quality: PSNR = 10 log₁₀(1/MSE) when images are normalized to unit range.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Rendering the full image during training would exceed memory limits, so random sampling provides stochastic gradient estimates. At evaluation time, the trained model renders all pixels by sweeping the complete coordinate grid in 10,000-pixel batches.
                    </p>
                  </div>
                </div>

                {/* Training Datasets */}
                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Training Datasets</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The implementation trains on the provided fox photograph and a custom image captured at <strong>Yosemite National Park</strong>. Both images demonstrate how network capacity and frequency encoding affect reconstruction of natural textures, foliage, and fine spatial detail.
                  </p>

                  {/* Fox Dataset */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Fox Image</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <img 
                          src={`${import.meta.env.BASE_URL}project4/part_1_fox/part1_fox.jpg`}
                          alt="Original fox image"
                          className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                        />
                        <p className="text-sm text-gray-600 text-center">Original fox image</p>
                      </div>
                      <div className="space-y-2">
                        <img 
                          src={`${import.meta.env.BASE_URL}project4/part_1_fox/Full_Render_Fox.png`}
                          alt="Final neural field reconstruction of fox"
                          className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                        />
                        <p className="text-sm text-gray-600 text-center">Final reconstruction (L=10, width=256)</p>
                      </div>
                    </div>
                  </div>

                  {/* Yosemite Dataset */}
                  <div>
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Yosemite National Park</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <img 
                          src={`${import.meta.env.BASE_URL}project4/part_1_yosemite_pictures/yosemite.jpg`}
                          alt="Original Yosemite image"
                          className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                        />
                        <p className="text-sm text-gray-600 text-center">Original Yosemite image</p>
                      </div>
                      <div className="space-y-2">
                        <img 
                          src={`${import.meta.env.BASE_URL}project4/part_1_yosemite_pictures/yosemite_final_256_3000.png`}
                          alt="Final neural field reconstruction of Yosemite"
                          className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                        />
                        <p className="text-sm text-gray-600 text-center">Final reconstruction (L=10, width=256, 3000 iterations)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Training Progression */}
                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Training Progression</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Snapshots captured at logarithmically-spaced iterations reveal the optimization trajectory. Early iterations establish coarse color distributions and large-scale structure. Mid-training refinement sharpens edges and recovers medium-frequency patterns. Later iterations converge on high-frequency texture when sufficient positional encoding bandwidth is available.
                    </p>
                    
                    {/* Fox Progression */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Fox Image Progression</h5>
                      <div className="space-y-2">
                        <img 
                          src={`${import.meta.env.BASE_URL}project4/part_1_fox/progression_log.png`}
                          alt="Fox training progression at logarithmic intervals"
                          className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                        />
                        <p className="text-sm text-gray-600 text-center">Training progression showing progressive detail emergence</p>
                      </div>
                    </div>

                    {/* Yosemite Progression */}
                    <div>
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Yosemite Image Progression</h5>
                      <div className="space-y-2">
                        <img 
                          src={`${import.meta.env.BASE_URL}project4/part_1_yosemite_pictures/yosemite_progression_256_3000.png`}
                          alt="Yosemite training progression"
                          className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                        />
                        <p className="text-sm text-gray-600 text-center">Model learning tree textures, lighting gradients, and vegetation patterns</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hyperparameter Exploration */}
                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Hyperparameter Exploration</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      A 2×2 grid compares four configurations: L ∈ {'{2, 10}'} crossed with width ∈ {'{32, 256}'}. <strong>Low frequency encoding</strong> (L=2) limits the model to smooth, blurry reconstructions regardless of width, as the 6-dimensional positional encoding lacks bandwidth for high-frequency detail. <strong>Low width</strong> (32 hidden units) constrains capacity even when L=10, producing reconstructions that capture edges but miss subtle texture.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The high-capacity configuration (L=10, width=256) achieves sharp, detailed reconstructions by combining sufficient frequency representation with adequate network parameters. Conversely, the minimal configuration (L=2, width=32) yields the most degraded output, demonstrating that both frequency encoding and model capacity independently contribute to reconstruction quality.
                    </p>

                    {/* Fox Hyperparameters */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Fox Hyperparameter Comparison</h5>
                      <div className="space-y-2">
                        <img 
                          src={`${import.meta.env.BASE_URL}project4/part_1_fox/Hxperparameter_comparison.png`}
                          alt="Fox 2x2 grid comparing L and width configurations"
                          className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                        />
                        <p className="text-sm text-gray-600 text-center">2×2 Grid: L ∈ {'{2, 10}'} × width ∈ {'{32, 256}'}</p>
                      </div>
                    </div>

                    {/* Yosemite Hyperparameters */}
                    <div>
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Yosemite Hyperparameter Comparison</h5>
                      <div className="space-y-2">
                        <img 
                          src={`${import.meta.env.BASE_URL}project4/part_1_yosemite_pictures/yosemite_hyperparameters.png`}
                          alt="Yosemite 2x2 grid comparing L and width configurations"
                          className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                        />
                        <p className="text-sm text-gray-600 text-center">2×2 Grid demonstrating capacity and frequency trade-offs</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PSNR Training Curves */}
                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">PSNR Training Curves</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      PSNR rises steeply during the first 500 iterations as the network learns global color and structure. The curve transitions to logarithmic growth between iterations 500-2000, gradually refining details. Beyond iteration 2000, PSNR plateaus as the model approaches its capacity limit for the given architecture. The high-capacity model (L=10, width=256) sustains improvement longer than low-capacity variants, indicating that increased parameters enable closer fits to high-frequency content.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <img 
                          src={`${import.meta.env.BASE_URL}project4/part_1_fox/PSNR.png`}
                          alt="Fox PSNR training curve"
                          className="w-full rounded-lg border-2 border-gray-200 shadow-md bg-white p-2"
                        />
                        <p className="text-sm text-gray-600 text-center">Fox PSNR progression over 3000 iterations</p>
                      </div>
                      <div className="space-y-2">
                        <img 
                          src={`${import.meta.env.BASE_URL}project4/part_1_yosemite_pictures/yosemite_psnr.png`}
                          alt="Yosemite PSNR training curve"
                          className="w-full rounded-lg border-2 border-gray-200 shadow-md bg-white p-2"
                        />
                        <p className="text-sm text-gray-600 text-center">Yosemite PSNR progression showing capacity impact</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ProjectPart>

            {/* Part 2: Multi-view NeRF */}
            <ProjectPart
              partNumber={2}
              title="Part 2: Neural Radiance Field Training on Multi-view Images"
              description="Volumetric scene representation using the Lego dataset with camera rays and 3D point sampling"
              detailedDescription={[
                "This section extends the 2D neural field to volumetric scene representation using the Lego dataset (100 training images at 200×200 resolution). The pipeline constructs camera rays from calibrated poses, samples 3D points along those rays, and prepares batched data for network training."
              ]}
              className="mb-16"
            >
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Part 2.1: Camera Ray Generation</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Three coordinate transformations enable conversion from pixel indices to world-space rays. Camera-to-world matrices encode extrinsic parameters (rotation R and translation t) as 4×4 homogeneous transforms, while the intrinsic matrix K maps between camera and pixel coordinates.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Coordinate Transformations</h5>
                      <div className="space-y-3 text-gray-700">
                        <p className="leading-relaxed">
                          <strong>Camera-to-world transformation</strong> applies the extrinsic matrix to homogeneous camera coordinates. The implementation converts input points x_c to homogeneous form by appending ones, multiplies by c2w^T, and dehomogenizes by dividing by the fourth component. Broadcasting enables batch processing of multiple points through a single matrix multiplication.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Pixel-to-camera conversion</strong> inverts the intrinsic matrix to lift 2D pixel coordinates (u, v) into 3D camera space. Given depth s along the optical axis, the camera coordinates satisfy x_c = s · K⁻¹ [u, v, 1]^T. Setting s=1 places the point on a virtual image plane one unit from the camera center.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Ray construction</strong> combines these operations. The ray origin equals the camera position in world coordinates, extracted as the translation component c2w[:3, 3]. To find ray direction, a point at unit depth is transformed from pixel to camera coordinates, then from camera to world coordinates. Subtracting the ray origin and normalizing yields the unit direction vector d = (x_w - o) / ||x_w - o||.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Part 2.2: Ray and Point Sampling</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Training requires randomly sampling rays across the multi-view dataset and discretizing each ray into spatial points. Stochastic sampling prevents memory overflow and provides unbiased gradient estimates.
                    </p>
                    
                    <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Ray Sampling Strategy</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        <strong>Ray sampling</strong> selects random pixels from the full training set. The implementation generates global pixel indices spanning all images via <code className="bg-gray-100 px-1 rounded">torch.randint(0, N_imgs * H * W, (N_rays,))</code>. Integer division by H×W recovers the source image index, while the modulo operation isolates the within-image pixel position.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Decomposing the pixel index into row and column coordinates follows standard raster ordering: y = index // W and x = index mod W. Pixel centers require a 0.5 offset from integer indices to align with continuous image coordinates. For each selected pixel, the corresponding camera-to-world matrix converts adjusted UV coordinates to ray origins and directions. Ground-truth RGB values are extracted by indexing the image tensor at the sampled locations.
                      </p>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-4">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Point Sampling Along Rays</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        <strong>Point sampling along rays</strong> discretizes the continuous ray into depth values between near and far bounds. Linear spacing creates N samples via <code className="bg-gray-100 px-1 rounded">torch.linspace(near, far, N)</code>, yielding uniform depth intervals. For the Lego scene, near=2.0 and far=6.0 meter bounds were used with <strong>64 samples</strong> per ray.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Stratified sampling with random perturbation prevents overfitting to fixed sample locations. The implementation adds uniform noise within each bin: t = t + rand(t.shape) × bin_width, where bin width equals (far - near) / (N - 1). World coordinates follow from the ray equation p = o + t·d, broadcast over all depth values to produce shape [N_rays, n_samples, 3].
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Part 2.3: Unified Data Pipeline</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      The <code className="bg-gray-100 px-2 py-1 rounded">RaysDataSampler</code> class consolidates ray generation and point sampling into a single interface. Initialization caches the image tensor, camera poses, and intrinsic matrix on the target device (CPU, CUDA, or MPS), while precomputing the inverse intrinsic matrix K⁻¹ to avoid repeated inversion.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The <code className="bg-gray-100 px-2 py-1 rounded">sample_rays(N_rays)</code> method implements the random sampling strategy described above, returning ray origins, directions, and RGB targets as aligned tensors. Grouping pixels by source image enables efficient batched ray generation using the corresponding camera matrix. The <code className="bg-gray-100 px-2 py-1 rounded">sample_points_along_rays(rays_o, rays_d, perturb)</code> method converts ray batches into 3D point arrays with optional stratified noise.
                    </p>
                    
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Viser Visualization & Parameter Tuning</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        An auxiliary <code className="bg-gray-100 px-1 rounded">precompute_all_rays()</code> method generates rays for every pixel across all images, storing the complete dataset in memory. This precomputation supports visualization but is memory-intensive (200×200×100 = 4 million rays for the Lego dataset).
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Viser visualization confirms geometric correctness by rendering camera frustums, sampled rays as splines, and 3D points as a point cloud. Testing with 100 rays from a single camera verifies that all samples lie within the expected frustum, catching coordinate system bugs before training. The visualization was used to tune sampling rates and ray distances to achieve optimal results on the custom fluffy ewes dataset.
                      </p>
                    </div>

                    {/* Visualization Images */}
                    <div className="mt-6">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Lego Dataset Visualization</h5>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project4/2.3_viser_dataset_and_ray_visualization/lego_with_samples_nice.png`}
                            alt="Lego dataset with ray samples and point cloud"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                          />
                          <p className="text-sm text-gray-600 text-center">Lego: Camera frustums, rays, and sampled points</p>
                        </div>
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project4/2.3_viser_dataset_and_ray_visualization/lego_rays_no_samples_nice.png`}
                            alt="Lego dataset showing only rays without samples"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                          />
                          <p className="text-sm text-gray-600 text-center">Lego: Ray visualization without sample points</p>
                        </div>
                      </div>

                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Individual Frame Sampling</h5>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project4/2.3_viser_dataset_and_ray_visualization/viser_lego_individual.png`}
                            alt="Lego individual frame ray sampling"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                          />
                          <p className="text-sm text-gray-600 text-center">Lego: All rays sampled through a single image frame</p>
                        </div>
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project4/2.3_viser_dataset_and_ray_visualization/viser_lego_idividual2.png`}
                            alt="Lego individual frame ray sampling alternate view"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                          />
                          <p className="text-sm text-gray-600 text-center">Lego: Individual frame sampling, alternate perspective</p>
                        </div>
                      </div>

                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Custom Fluffy Ewes Dataset</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project4/2.3_viser_dataset_and_ray_visualization/fluffy_samples_and_rays.png`}
                            alt="Fluffy ewes dataset with rays and samples"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                          />
                          <p className="text-sm text-gray-600 text-center">Fluffy ewes: Camera setup with rays and sample points</p>
                        </div>
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project4/2.3_viser_dataset_and_ray_visualization/fluffy_rays_only.png`}
                            alt="Fluffy ewes dataset showing only rays"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                          />
                          <p className="text-sm text-gray-600 text-center">Fluffy ewes: Ray-only visualization for parameter tuning</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">2.4 NeRF Architecture</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      The NeRF multilayer perceptron extends the 2D neural field by accepting 3D spatial coordinates and viewing directions as input, outputting both volume density and view-dependent color. This architecture implements three design principles absent from the simpler 2D case: directional conditioning for view-dependent effects, increased network depth to handle volumetric complexity, and skip connections to preserve gradient flow through deeper layers.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Positional Encoding</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        <strong>Positional encoding</strong> operates independently on position and direction inputs with different frequency bands. Spatial coordinates receive high-frequency encoding with L=10 (expanding 3D input to 63 dimensions when including the original coordinates), while viewing directions use lower frequency L=4 (yielding 27 dimensions) to capture smooth reflectance variations.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The implementation vectorizes encoding by broadcasting coordinates across frequency bands: <code className="bg-gray-100 px-1 rounded">x_freq = x[..., None] * freq_bands</code> produces shape <code className="bg-gray-100 px-1 rounded">[..., D, L]</code>, which flattens to <code className="bg-gray-100 px-1 rounded">[..., D*L]</code> after applying sine and cosine.
                      </p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg mt-4">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Network Structure</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        <strong>Network structure</strong> consists of eight fully-connected layers with 256 hidden units (512 for the custom dataset), processing position encoding through the main trunk. A <strong>skip connection at layer 4</strong> concatenates the original position encoding with intermediate features, creating the combined input <code className="bg-gray-100 px-1 rounded">[hidden_features, pos_encoding]</code>.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Skip connections mitigate vanishing gradients in deep networks by providing direct pathways for gradient flow, implementing residual learning where each layer models the difference between input and desired output rather than learning complete transformations.
                      </p>
                    </div>

                    <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg mt-4">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Density and Color Heads</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        After the main trunk, the architecture branches into separate <strong>density and color heads</strong>. Density prediction applies ReLU activation to enforce non-negativity: <code className="bg-gray-100 px-1 rounded">density = relu(linear(features))</code>.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The color branch first projects features through a bottleneck layer, concatenates the encoded viewing direction, processes the combined representation through two additional ReLU layers (128 hidden units), and applies sigmoid to constrain RGB output to [0,1]. This separation reflects the physical intuition that geometry (density) is view-independent while appearance (color) varies with observation angle.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">2.5 Differentiable Volume Rendering</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Volume rendering accumulates color and opacity along camera rays to produce 2D pixel values. The discrete rendering equation approximates the continuous integral through weighted summation over sampled points: C(r) = Σᵢ Tᵢ (1 - exp(-σᵢδᵢ)) cᵢ where Tᵢ denotes transmittance (cumulative transparency to sample i), σᵢ is predicted density, δᵢ equals step size, and cᵢ is emitted color.
                    </p>
                    
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Alpha Values and Transmittance</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        <strong>Alpha values</strong> convert density to per-sample opacity: αᵢ = 1 - exp(-σᵢδᵢ). This exponential relationship models Beer's law, where light intensity decreases exponentially with distance through an absorbing medium. The complement (1 - αᵢ) represents the probability that a ray passes through sample i without terminating.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Transmittance computation</strong> multiplies these survival probabilities cumulatively. The implementation prepends ones to the (1-α) tensor to initialize T₀ = 1, applies <code className="bg-gray-100 px-1 rounded">torch.cumprod</code> along the sample dimension, and removes the final element: <code className="bg-gray-100 px-1 rounded">transmittance = cumprod([1, (1-α₁), (1-α₂), ...])[:-1]</code>. This produces Tᵢ = ∏ⱼ₌₁^(i-1) (1 - αⱼ), the fraction of light reaching sample i from the camera.
                      </p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mt-4">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Rendering Weights and Differentiation</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Rendering weights combine transmittance and opacity: wᵢ = Tᵢαᵢ. The final pixel color emerges from the weighted sum <code className="bg-gray-100 px-1 rounded">rendered_color = sum(weights * colors)</code>, where weights broadcast across RGB channels.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        This formulation supports automatic differentiation because all operations (exponentiation, cumulative product, multiplication) have well-defined gradients that PyTorch tracks during backpropagation. Object-order rendering typically traverses samples in front-to-back order when using software compositing. The implementation samples uniformly between near and far bounds with stratified noise, naturally producing front-to-back ordering along each ray.
                      </p>
                    </div>

                    <div className="mt-6">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Training Configuration and Results (Lego Dataset)</h5>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Training samples 10,000 random rays per iteration, evaluates the NeRF network on all 3D points along those rays (reshaped from [N_rays, N_samples, 3] to [N_rays*N_samples, 3] for batch processing), and applies volume rendering to compare predicted colors against ground truth. Adam optimization with learning rate 5×10⁻⁴ updates network parameters to minimize MSE loss.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The Lego dataset training used <strong>128 samples per ray</strong> (double the typical 64) to improve reconstruction quality at the cost of longer iteration time. Checkpoints saved every 100 iterations preserve model state, optimizer parameters, and complete training history (PSNR and loss arrays), enabling resumption from arbitrary points.
                      </p>

                      {/* Lego Results Images */}
                      <div className="space-y-6">
                        {/* Training Curves */}
                        <div className="flex justify-center">
                          <div className="w-2/3 space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project4/part_2.5_lego_results/Lego_training_curves_iter6600.png`}
                              alt="Lego training curves showing loss and PSNR"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                            />
                            <p className="text-sm text-gray-600 text-center">Training curves: Loss and PSNR evolution over 6600 iterations</p>
                          </div>
                        </div>

                        {/* Validation PSNR */}
                        <div className="flex justify-center">
                          <div className="w-2/3 space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project4/part_2.5_lego_results/validation_psnr_curve_lego.png`}
                              alt="Validation PSNR curve for Lego dataset"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md bg-white p-2"
                            />
                            <p className="text-sm text-gray-600 text-center">Validation PSNR: Rapid initial improvement, plateau near 8,000 iterations</p>
                          </div>
                        </div>

                        {/* Training Progression */}
                        <div className="flex justify-center">
                          <div className="w-2/3 space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project4/part_2.5_lego_results/Lego_training_progression_img19.png`}
                              alt="Lego training progression showing quality evolution"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                            />
                            <p className="text-sm text-gray-600 text-center">Training progression: Evolution from blurry distributions to sharp geometric detail</p>
                          </div>
                        </div>

                        {/* Novel View Synthesis GIFs side by side */}
                        <h5 className="text-lg font-semibold text-berkeley-navy mb-4 mt-6">Novel View Synthesis</h5>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          <strong>Novel view synthesis</strong> applies the trained model to test camera poses not present during training. Spherical rendering follows a circular trajectory at constant radius, generating 60 frames that interpolate smoothly around the object. Two viewpoint perspectives (orbital at different heights or angles) demonstrate the network's ability to synthesize consistent appearance from arbitrary vantage points.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project4/part_2.5_lego_results/Lego_360_rotation_z_axis_iter6600.gif`}
                              alt="Lego 360 degree rotation around z-axis"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                            />
                            <p className="text-sm text-gray-600 text-center">360° rotation around z-axis (iteration 6600)</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project4/part_2.5_lego_results/Lego_test_cameras_iter6600.gif`}
                              alt="Lego test camera trajectory"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                            />
                            <p className="text-sm text-gray-600 text-center">Test camera trajectory: Spherical orbital path</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">2.6 Custom Dataset Training</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Applying NeRF to the custom-captured dataset required three <strong>hyperparameter adjustments</strong>. Scene-specific near and far bounds replaced the Lego defaults: near=0.12 meters and far=0.59 meters match the physical standoff distance during capture, preventing wasted samples in empty space before or beyond the object. Experimentation determined these values by visualizing ray samples in Viser and adjusting until points bracketed the object volume.
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Resolution and Network Capacity Scaling</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        <strong>Resolution management</strong> trades quality against training speed. The Part 0 pipeline downsampled images to 850 pixels (longer dimension) while preserving aspect ratio, updating intrinsic parameters accordingly. Training first used 32 samples per ray to validate the implementation, then increased to 128 samples for final rendering.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Network capacity scaling</strong> addressed the increased scene complexity. The custom dataset model employed 512 hidden units (versus 256 for Lego), positional encoding L=12 (versus 10), and learning rate 10⁻³ (versus 5×10⁻⁴). Higher learning rates accelerate convergence on simpler scenes but risk instability on complex geometry. The training loop extended to 15,000 iterations with checkpoints every 200 steps.
                      </p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg mt-4">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Test Trajectory Generation</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Test trajectory generation centers on the captured object rather than the ArUco marker origin due to the coordinate shift applied in Part 0.4. The <code className="bg-gray-100 px-1 rounded">look_at_origin</code> function constructs camera-to-world matrices by computing forward (toward origin), right (cross product with up vector), and recomputed up (ensuring orthogonality) directions. Rotating the start position through 360 degrees via <code className="bg-gray-100 px-1 rounded">rot_x(phi)</code> produces circular motion, while varying the initial height or radius creates alternative viewing angles.
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mt-4">
                      Training loss curves monitor optimization progress without requiring expensive rendering. Intermediate renders at progressively-spaced iterations reveal gradual sharpening as the network fits high-frequency detail. The final novel-view video demonstrates high-quality synthesis, though training duration substantially exceeds the Lego benchmark due to increased scene complexity and higher sample counts.
                    </p>

                    {/* Fluffy Results Images */}
                    <div className="mt-6 space-y-6">
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Custom Fluffy Ewes Dataset Results</h5>
                      
                      {/* Training Curves */}
                      <div className="flex justify-center">
                        <div className="w-2/3 space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project4/part_2.6_fluffy_results/fluffy_training_curves_iter15200.png`}
                            alt="Fluffy training curves"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                          />
                          <p className="text-sm text-gray-600 text-center">Training curves: Loss convergence over 15,200 iterations</p>
                        </div>
                      </div>

                      {/* Training Progression */}
                      <div className="flex justify-center">
                        <div className="w-2/3 space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project4/part_2.6_fluffy_results/fluffy_training_progression_img15-60k.png`}
                            alt="Fluffy training progression"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                          />
                          <p className="text-sm text-gray-600 text-center">Training progression: Gradual sharpening and high-frequency detail fitting</p>
                        </div>
                      </div>

                      {/* Training vs Ground Truth Comparison */}
                      <div className="flex justify-center">
                        <div className="w-2/3 space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project4/part_2.6_fluffy_results/fluffy_training_image_15_15200_it_comparison_2_images.png`}
                            alt="Fluffy training comparison with ground truth"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                          />
                          <p className="text-sm text-gray-600 text-center">Training image 15 at 15,200 iterations: Comparison with ground truth</p>
                        </div>
                      </div>

                      {/* Novel View Synthesis */}
                      <div className="flex justify-center">
                        <div className="w-2/3 space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project4/part_2.6_fluffy_results/fluffy_new_360_z_axis_60_it_14800_4_pic41.gif`}
                            alt="Fluffy 360 degree rotation"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md"
                          />
                          <p className="text-sm text-gray-600 text-center">Novel view synthesis: 360° rotation around z-axis (iteration 14,800)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-4">Additional: Technical Implementation Notes</h4>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Device Compatibility & Optimization</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <strong>Device priority:</strong> MPS (Apple Silicon) → CUDA → CPU fallback</li>
                        <li>• <strong>Chunk processing:</strong> 8096 rays (MPS) to avoid memory glitches / 10000 rays (CUDA/CPU)</li>
                        <li>• <strong>Validation scheduling:</strong> PSNR evaluation every 100 iterations</li>
                        <li>• <strong>Memory management:</strong> torch.mps.empty_cache() after checkpoint saves, @torch.no_grad() for rendering</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Positional Encoding Optimizations</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <strong>Frequency bands:</strong> Stored as buffer (register_buffer) to automatically move with model to GPU</li>
                        <li>• <strong>Vectorized broadcasting:</strong> x[..., None] * freq_bands avoids explicit loops</li>
                        <li>• <strong>Efficient flattening:</strong> flatten(-2) combines frequency and coordinate dimensions in one operation</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Ray Sampling Architecture</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <strong>Global pixel sampling:</strong> Flattens all images into single index space (randint(0, N_imgs×H×W))</li>
                        <li>• <strong>Pixel center offset:</strong> +0.5 ensures accurate ray-pixel alignment</li>
                        <li>• <strong>Stratified sampling:</strong> Random perturbation t + rand(t.shape) × bin_width prevents overfitting to fixed depths</li>
                        <li>• <strong>Dual modes:</strong> Precomputation for visualization vs. on-the-fly for training memory efficiency</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg">
                      <h5 className="font-semibold text-berkeley-navy mb-3">Checkpoint & Validation Systems</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <strong>Complete history:</strong> Stores full PSNR and loss arrays (not just final values)</li>
                        <li>• <strong>Resume capability:</strong> Arbitrary iteration restart with optimizer state restoration</li>
                        <li>• <strong>Validation strategy:</strong> Per-checkpoint evaluation across full validation set, averaged PSNR for robust metrics</li>
                        <li>• <strong>Model configuration:</strong> Architecture parameters saved in checkpoint for reconstruction</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ProjectPart>

          </div>
        </div>
      </section>

      {/* Project Learnings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-berkeley-navy mb-4">Project 4 Learnings</h2>
              <p className="text-xl text-gray-600 mb-8">Key insights from implementing Neural Radiance Fields</p>
              
              <div className="space-y-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  <strong>ArUco-based calibration provides robust pose estimation</strong> without requiring specialized calibration targets. The gap-based marker specification and automated corner detection enable precise intrinsic parameter recovery and camera-to-world transformations. Coordinate frame adjustments (flipping vertical positions, centering on objects rather than markers) significantly improve test trajectory quality for novel view synthesis.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Positional encoding frequency selection</strong> represents a fundamental trade-off between reconstruction detail and training stability. High-frequency encodings (L=10-12) capture fine texture and sharp edges but require larger network capacity and longer convergence. The asymmetric encoding strategy, high frequencies for spatial positions, lower frequencies for viewing directions, reflects the physical intuition that geometry contains finer detail than smooth reflectance variations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Skip connections at mid-depth layers</strong> solve the vanishing gradient problem in 8-layer NeRF architectures. Concatenating original positional encodings with intermediate features enables residual learning where each layer models incremental refinements rather than complete transformations, dramatically improving convergence speed and final reconstruction quality.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Stratified sampling with random perturbation</strong> prevents overfitting to fixed depth locations while maintaining uniform ray coverage. The combination of linearly-spaced bins with uniform jitter within each interval provides unbiased gradient estimates during training while ensuring no scene regions are systematically undersampled.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Scene-specific hyperparameter tuning</strong> proved essential for custom dataset success. Viser visualization enabled iterative refinement of near/far bounds (0.12m-0.59m) to bracket the object without wasting samples in empty space. Network capacity scaling (512 units, L=12) and learning rate adjustments (10⁻³) accommodated increased geometric complexity compared to synthetic benchmarks like Lego.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Volume rendering differentiability</strong> emerges from careful implementation of transmittance computation. Using <code className="bg-gray-100 px-1 rounded">torch.cumprod</code> on survival probabilities with proper initialization (prepending ones) enables gradient flow through the entire ray marching process, allowing the network to learn 3D density distributions that produce correct 2D projections.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Training progression reveals optimization hierarchy:</strong> coarse color and geometry emerge within 500 iterations, medium-frequency details refine between 500-2000 iterations, and high-frequency texture convergence requires 8000+ iterations. PSNR curves plateau when network capacity becomes the limiting factor, indicating when to increase model size rather than training duration.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-berkeley-navy mb-3">Technical Insights</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The complete pipeline integration, from ArUco calibration through aspect-ratio-preserving downsampling to volumetric neural rendering, demonstrates how classical computer vision (camera geometry, intrinsic/extrinsic parameters) combines with modern deep learning (implicit representations, differentiable rendering) to achieve high-quality 3D reconstruction from 2D images.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Practical implementation considerations like device-specific chunk sizes (2048 rays for MPS, 4096 for CUDA), checkpoint frequency balancing disk I/O against resumability, and logarithmic iteration spacing for visualization all significantly impact development velocity and final model quality beyond the core algorithm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-berkeley-navy text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Project 4: Neural Radiance Fields (NeRF)</p>
        </div>
      </footer>
    </div>
  );
};

export default Project4;