import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ProjectNavigation from '@/components/ProjectNavigation';
import ProjectPart from '@/components/ProjectPart';

const Project5 = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Project 5: Fun With Diffusion Models! | CS 180";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-berkeley-light/5 to-berkeley-navy/5">
      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-4">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-full object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

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
              <div className="w-5 h-5 text-berkeley-blue" />
              <span className="text-berkeley-navy font-medium">Maximilian Christof - CS180 Project 5</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-berkeley-navy via-berkeley-blue to-berkeley-navy bg-clip-text text-transparent leading-tight">
              Fun With Diffusion Models!
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              Exploring diffusion models for image generation and training flow matching from scratch with DeepFloyd IF and custom neural architectures.
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
              <h2 className="text-3xl font-bold text-berkeley-navy mb-6">Diffusion Models Project Overview</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  This project explores the fascinating world of diffusion models through two complementary approaches. Part A investigates the power of pretrained models using DeepFloyd IF to understand sampling techniques, image editing, and create optical illusions. Part B builds diffusion capabilities from scratch by implementing and training flow matching models on the MNIST dataset, providing deep insights into the underlying mathematical principles and architectural considerations.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-3">Part A: Pretrained Model Exploration</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Working with DeepFloyd IF diffusion model to explore sampling loops, classifier-free guidance, image-to-image translation, inpainting, visual anagrams, and hybrid images. This part focuses on understanding how to effectively use and modify existing diffusion models for various creative and practical applications.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-berkeley-navy mb-3">Part B: Flow Matching From Scratch</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Building and training custom UNet architectures for flow matching on MNIST digits. Starting with single-step denoising and progressing to time-conditioned and class-conditioned models with classifier-free guidance. This implementation provides hands-on experience with the mathematical foundations and architectural choices in modern diffusion models.
                  </p>
                </div>
              </div>
            </div>

            {/* Part A: The Power of Diffusion Models */}
            <div id="part-a">
            <ProjectPart
              partNumber="A"
              title="Part A: The Power of Diffusion Models!"
              description="Exploring pretrained DeepFloyd IF for sampling, editing, and optical illusions"
              detailedDescription={[
                "This section works with the pretrained DeepFloyd IF diffusion model to explore various sampling techniques and image manipulation capabilities. We implement sampling loops, test different inference steps, apply classifier-free guidance, and create fascinating optical illusions through visual anagrams and hybrid images."
              ]}
              className="mb-16"
            >
              <div className="space-y-8">
                
                {/* A.0: Setup & Play with DeepFloyd */}
                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">A.0: Setup & Play with DeepFloyd</h4>
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      Once we gained access to DeepFloyd through Hugging Face, we started exploring how different sampling parameters affect image generation quality. DeepFloyd is a two-stage text-to-image diffusion model that first generates 64x64 images, then upsamples them to 256x256. The text prompts are first encoded into high-dimensional vectors (77x4096) using a T5 text encoder, which then guide the diffusion process. Here, we investigate how the number of inference steps, essentially how many denoising iterations the model performs, impacts the final output quality.
                    </p>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-berkeley-navy mb-4">Experiment: Effect of num_inference_steps</h5>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        To understand the trade-off between generation speed and quality, we tested three different num_inference_steps values: 10, 20, and 30. All images were generated using <strong>seed=63</strong> for reproducibility. The number of inference steps determines how many times the model iteratively denoises the image, gradually refining it from pure noise to the final result.
                      </p>
                    </div>

                    {/* Prompt 1: Cyclist */}
                    <div className="space-y-4">
                      <h6 className="text-base font-semibold text-berkeley-navy">Prompt 1: "a cyclist cycling through the Berkeley mountains"</h6>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/cyclist_cycling_thought_the_berkeley_mounatins/cyclist_10.png`}
                            alt="Cyclist at 10 inference steps"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/cyclist_cycling_thought_the_berkeley_mounatins/cyclist_10.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">10 steps</p>
                        </div>
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/cyclist_cycling_thought_the_berkeley_mounatins/cyclist_20.png`}
                            alt="Cyclist at 20 inference steps"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/cyclist_cycling_thought_the_berkeley_mounatins/cyclist_20.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">20 steps</p>
                        </div>
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/cyclist_cycling_thought_the_berkeley_mounatins/cyclist_30.png`}
                            alt="Cyclist at 30 inference steps"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/cyclist_cycling_thought_the_berkeley_mounatins/cyclist_30.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">30 steps</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Observation & Analysis</h6>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          With only 10 inference steps, the cyclist image appears somewhat flat with limited depth perception. The scene looks more like a sketch or illustration rather than a photograph. As we increase to 20 and then 30 steps, we observe a notable enhancement in three-dimensionality and spatial depth. The mountains gain better definition, atmospheric perspective becomes more pronounced, and the overall composition appears more photographic.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          This improvement occurs because more denoising steps allow the model to progressively refine fine details and spatial relationships. Each step removes a small amount of noise while preserving and enhancing coherent structures. With fewer steps, the model must make larger jumps in the denoising process, potentially missing subtle lighting cues and depth information that contribute to photorealism.
                        </p>
                      </div>
                    </div>

                    {/* Prompt 2: Helicopter */}
                    <div className="space-y-4">
                      <h6 className="text-base font-semibold text-berkeley-navy">Prompt 2: "a helicopter flying near the Statue of Liberty"</h6>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/Helicopter_liberty/liberty_helicopter_10.png`}
                            alt="Helicopter at 10 inference steps"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/Helicopter_liberty/liberty_helicopter_10.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">10 steps</p>
                        </div>
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/Helicopter_liberty/liberty_helicopter_20.png`}
                            alt="Helicopter at 20 inference steps"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/Helicopter_liberty/liberty_helicopter_20.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">20 steps</p>
                        </div>
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/Helicopter_liberty/liberty_helicopter_30.png`}
                            alt="Helicopter at 30 inference steps"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/Helicopter_liberty/liberty_helicopter_30.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">30 steps</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Observation & Analysis</h6>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          The Statue of Liberty scene demonstrates an interesting phenomenon: while depth and realism improve from 10 to 20 steps, we notice an unusual glowing or shading artifact appearing around the helicopter at 20 steps. This luminous halo effect actually intensifies at 30 steps rather than resolving.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          This artifact likely stems from how the diffusion model handles high-contrast elements against complex backgrounds. The helicopter, being a metallic object against sky and monument, creates challenging lighting conditions. At intermediate step counts (20), the model may be caught in a local optimum where it's attempting to reconcile conflicting signals about metallic reflections and ambient lighting. More steps (30) don't necessarily fix this because the model continues refining based on these intermediate representations, essentially 'baking in' the artifact. This highlights that more steps isn't always better; the diffusion path can sometimes converge toward visually implausible solutions for certain scene compositions.
                        </p>
                      </div>
                    </div>

                    {/* Prompt 3: Windsurfer */}
                    <div className="space-y-4">
                      <h6 className="text-base font-semibold text-berkeley-navy">Prompt 3: "a windsurfer planing in the bay"</h6>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/windsurfer_in_bay/windsurfer_planing_in_bay_10.png`}
                            alt="Windsurfer at 10 inference steps"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/windsurfer_in_bay/windsurfer_planing_in_bay_10.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">10 steps</p>
                        </div>
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/windsurfer_in_bay/windsurfer_planing_in_bay_20.png`}
                            alt="Windsurfer at 20 inference steps"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/windsurfer_in_bay/windsurfer_planing_in_bay_20.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">20 steps</p>
                        </div>
                        <div className="space-y-2">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/windsurfer_in_bay/windsurfer_planing_in_bay_30.png`}
                            alt="Windsurfer at 30 inference steps"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/setup/Part_A0/windsurfer_in_bay/windsurfer_planing_in_bay_30.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">30 steps</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Observation & Analysis</h6>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          The windsurfing scene shows consistent improvement across all step counts. At 10 steps, the image captures the basic scene composition but lacks fine details in the water texture and sail definition. Moving to 20 and 30 steps, we see progressively better rendering of water dynamics, wave patterns, and the subtle interplay of light on the sail.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Interestingly, this prompt does still suffer from the glowing artifacts we observed in the helicopter image, but they're less visually apparent. The glowing effect is less noticeable here because it affects both light and dark areas (not just bright light sources like the helicopter's bulb), and because the image already contains many sharp contrast changes throughout the scene, making the artifacts blend in rather than stand out. Additionally, it's clearly visible that the model struggles to estimate the physical dynamics and positioning of the windsurfer and sail correctly at each denoising step, and this doesn't improve with higher step counts.
                        </p>
                      </div>
                    </div>

                    {/* Conclusion */}
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg">
                      <h6 className="font-semibold text-berkeley-navy mb-3">Conclusion</h6>
                      <p className="text-gray-700 leading-relaxed">
                        These experiments reveal that while increasing num_inference_steps generally improves image quality by allowing more gradual refinement, the relationship isn't purely linear. The optimal step count depends on scene complexity, lighting conditions, and the specific objects being rendered. For most photographic scenes, 20-30 steps provide a good balance between quality and computational cost. However, certain edge cases with complex lighting or reflective surfaces may require careful tuning, or even benefit from fewer steps to avoid converging on visual artifacts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Part 1: Sampling Loops */}
                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">Part 1: Sampling Loops</h4>
                  <div className="space-y-8">
                    <p className="text-gray-700 leading-relaxed">
                      In this section, we implement our own sampling loops using the pretrained DeepFloyd denoisers. These loops allow us to understand the mechanics of diffusion models by manually controlling the forward (noising) and reverse (denoising) processes. We'll start by implementing the forward process that adds noise to clean images, then compare classical denoising methods against learned diffusion-based approaches.
                    </p>
                  
                  {/* 1.1: Forward Process */}
                  <div className="space-y-6">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">1.1: Forward Process</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        The forward process is the foundation of diffusion models. It defines how we progressively add Gaussian noise to a clean image x₀ until it becomes pure noise at timestep T=1000. The process follows the formula:
                      </p>
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                        <p className="font-mono text-sm text-center">
                          x_t = √(ᾱ_t) · x₀ + √(1 - ᾱ_t) · ε, where ε ~ N(0, I)
                        </p>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Here, ᾱ_t controls the noise schedule. When t=0, we have ᾱ₀=1 (clean image), and as t increases, ᾱ_t decreases toward 0 (pure noise). This allows us to sample any intermediate noisy version of an image directly without iterating through all previous timesteps.
                      </p>

                      {/* Forward Process Visualization */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Forward Process: Progressive Noise Addition</h6>
                        <div className="flex justify-center">
                          <div className="w-full space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/forward_process/forward_process.png`}
                              alt="Forward process showing original Campanile and progressive noise addition at t=250, 500, 750"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/forward_process/forward_process.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Progressive noise addition: Original → t=250 → t=500 → t=750</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Observation</h6>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          As we progress from t=250 to t=750, the Campanile becomes increasingly obscured by noise. At t=250, the tower structure remains clearly visible with moderate noise corruption. By t=500, significant noise dominates the image, though the vertical structure and general shape are still discernible. At t=750, the image approaches pure noise with only faint hints of the underlying structure remaining.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          This progressive degradation demonstrates the noise schedule's effectiveness. The √(ᾱ_t) scaling factor gradually reduces the image signal's contribution while √(1 - ᾱ_t) increases the noise component. This balance ensures smooth transitions between clean and noisy states, which is crucial for the reverse diffusion process to learn meaningful denoising steps.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 1.2: Classical Denoising */}
                  <div className="space-y-6">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">1.2: Classical Denoising</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Before exploring learned denoising with diffusion models, we establish a baseline using classical Gaussian blur filtering. This approach attempts to remove noise by averaging pixel values within a local neighborhood. We test two kernel sizes: k=11 and k=15, representing different smoothing strengths. The question is whether simple averaging can recover meaningful structure from heavily corrupted images.
                      </p>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-2">Gaussian Blur Parameters:</h6>
                        <ul className="text-gray-700">
                          <li>• Kernel size k=11: sigma=2, moderate smoothing</li>
                          <li>• Kernel size k=15: sigma=2, stronger smoothing</li>
                        </ul>
                      </div>

                      {/* Denoising Results at t=250 */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Denoising Results at t=250</h6>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/A1.2/A1.2_gauss_denoise_11_250.png`}
                              alt="Gaussian denoising with k=11 at t=250"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/A1.2/A1.2_gauss_denoise_11_250.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Noisy (t=250) + Gaussian Blur (k=11)</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/A1.2/A1.2_gauss_denoise_15_250.png`}
                              alt="Gaussian denoising with k=15 at t=250"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/A1.2/A1.2_gauss_denoise_15_250.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Noisy (t=250) + Gaussian Blur (k=15)</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Observation for t=250</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            At moderate noise levels (t=250), we observe a clear trade-off between noise removal and detail preservation. The k=15 kernel applies stronger smoothing, which more effectively suppresses the noise, resulting in a cleaner appearance. However, this aggressive filtering comes at a significant cost. Comparing the denoised result to the original Campanile reveals substantial blur, with fine architectural details like the tower's surface texture and edge sharpness severely degraded.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            In contrast, the k=11 kernel retains noticeably better sharpness and structural detail despite leaving slightly more visible noise. This occurs because Gaussian blur is fundamentally indiscriminate. It cannot distinguish between high-frequency noise and high-frequency image details like edges and textures. Both are smoothed equally. For real image recovery, preserving authentic details often matters more than achieving perfectly smooth results, making k=11 the better choice at this noise level.
                          </p>
                        </div>
                      </div>

                      {/* Denoising Results at t=500 */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Denoising Results at t=500</h6>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/A1.2/A1.2_gauss_denoise_11_500.png`}
                              alt="Gaussian denoising with k=11 at t=500"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/A1.2/A1.2_gauss_denoise_11_500.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Noisy (t=500) + Gaussian Blur (k=11)</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/A1.2/A1.2_gauss_denoise_15_500.png`}
                              alt="Gaussian denoising with k=15 at t=500"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/A1.2/A1.2_gauss_denoise_15_500.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Noisy (t=500) + Gaussian Blur (k=15)</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Observation for t=500</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            As noise intensity increases (t=500), the limitations of Gaussian filtering become more pronounced. The k=15 kernel now produces an extremely blurred result where the Campanile's shape is barely recognizable. The excessive smoothing required to combat heavy noise has essentially destroyed all meaningful image structure, leaving behind only vague color gradients.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            The k=11 kernel performs relatively better, maintaining some semblance of the tower's vertical structure and preserving more spatial information. However, substantial noise artifacts remain visible throughout the image. This demonstrates a fundamental limitation: Gaussian blur requires a balance between noise suppression and detail preservation, but at high noise levels, no such balance exists. Any kernel large enough to significantly reduce t=500 noise will obliterate all fine details.
                          </p>
                        </div>
                      </div>

                      {/* Denoising Results at t=750 */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Denoising Results at t=750</h6>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/A1.2/A1.2_gauss_denoise_11_750.png`}
                              alt="Gaussian denoising with k=11 at t=750"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/A1.2/A1.2_gauss_denoise_11_750.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Noisy (t=750) + Gaussian Blur (k=11)</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/A1.2/A1.2_gauss_denoise_15_750.png`}
                              alt="Gaussian denoising with k=15 at t=750"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/A1.2/A1.2_gauss_denoise_15_750.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Noisy (t=750) + Gaussian Blur (k=15)</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Observation for t=750</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            At extreme noise levels (t=750), Gaussian denoising completely breaks down regardless of kernel size. Both k=11 and k=15 produce results that bear almost no resemblance to the original Campanile. The k=11 output shows marginally better structure preservation but is still overwhelmed by noise. The k=15 output achieves greater smoothness but at the cost of turning the image into an unrecognizable blur.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            This failure illustrates why classical denoising methods cannot handle diffusion-level noise corruption. The noise has nearly the same magnitude as the original signal, meaning the image information is almost entirely lost in the observed data. Simple spatial averaging cannot 'hallucinate' or infer what the underlying structure should be. It lacks any understanding of natural image priors or semantic content. This motivates the need for learned denoising approaches like diffusion models, which can leverage patterns learned from vast image datasets to perform intelligent reconstruction rather than blind smoothing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 1.3: One-Step Denoising */}
                  <div className="space-y-6">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">1.3: One-Step Denoising</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Now we employ the pretrained DeepFloyd diffusion model to denoise our corrupted Campanile images in a single step. Unlike Gaussian blur, the UNet denoiser has been trained on millions of (x₀, x_t) image pairs, learning to predict the noise component ε given a noisy observation x_t and timestep t. By estimating and subtracting this predicted noise, we can directly recover an approximation of the clean image x₀.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The model uses the conditioning: stage_1.unet(x_noisy, t, prompt_embedding), where we provide a neutral text prompt 'a high quality photo' to guide the reconstruction. This text conditioning helps the model understand what kind of image structure to expect, though we're using a deliberately generic prompt rather than 'a photo of a tower' to avoid giving it unfair advantages.
                      </p>

                      {/* One-Step Denoising Results at t=250 */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">One-Step Denoising Results at t=250</h6>
                        <div className="flex justify-center">
                          <div className="w-full space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/A1.3/A1.3_250.png`}
                              alt="One-step denoising triplet at t=250: Original, Noisy, One-Step Denoised"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/A1.3/A1.3_250.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">t=250 reconstruction triplet: Original | Noisy | One-Step Denoised</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Observation</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            At t=250, the one-step diffusion denoiser dramatically outperforms Gaussian blur. The reconstructed Campanile shows remarkable recovery of the tower's overall structure, shape, and general appearance. The sky background is properly reconstructed in blue tones, and the distinction between the tower and its surroundings is clearly preserved.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            However, close inspection reveals the reconstruction is not perfect. Fine architectural details like window patterns, surface textures, and precise edge geometries differ from the original. The model has essentially 'guessed' what a tower-like structure should look like based on its training data. It successfully infers that the noisy input contains a tall, vertical structure against a sky background and generates a plausible tower, but it cannot recover the exact original details. This is because at t=250, genuine information has been irreversibly lost to noise. The model fills in these gaps using learned priors about typical building structures rather than deterministic denoising.
                          </p>
                        </div>
                      </div>

                      {/* One-Step Denoising Results at t=500 */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">One-Step Denoising Results at t=500</h6>
                        <div className="flex justify-center">
                          <div className="w-full space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/A1.3/A1.3_500.png`}
                              alt="One-step denoising triplet at t=500: Original, Noisy, One-Step Denoised"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/A1.3/A1.3_500.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">t=500 reconstruction triplet: Original | Noisy | One-Step Denoised</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Observation</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            At the higher noise level of t=500, we observe both the strengths and limitations of one-step denoising more clearly. The diffusion model still manages to produce a recognizable tower structure, which is remarkable given that the noisy input is dominated by random noise with minimal visible original content.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            The reconstruction captures the correct general scene composition: a vertical structure centered in the frame with greenery at the base and blue sky above. However, the specific details increasingly diverge from the original Campanile. The tower's proportions, architectural features, and fine details are clearly hallucinated rather than recovered. Some artifacts begin appearing, particularly in texture consistency and edge sharpness. This degradation occurs because with more noise, the model has even less actual signal to work with. It relies more heavily on learned priors and less on the input data itself. The model essentially answers: 'Given this extremely noisy input and the knowledge that it should be a high-quality photo, what natural image would be most consistent with what I observe?' The answer is plausible but not accurate to the original.
                          </p>
                        </div>
                      </div>

                      {/* One-Step Denoising Results at t=750 */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">One-Step Denoising Results at t=750</h6>
                        <div className="flex justify-center">
                          <div className="w-full space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/A1.3/A1.3_750.png`}
                              alt="One-step denoising triplet at t=750: Original, Noisy, One-Step Denoised"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/A1.3/A1.3_750.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">t=750 reconstruction triplet: Original | Noisy | One-Step Denoised</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Observation</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            At extreme noise levels (t=750), one-step denoising reaches its practical limits. While still vastly superior to Gaussian blur, which produced only unrecognizable blur, the diffusion model's output now shows substantial artifacts and incorrect details. The overall composition, a vertical structure against sky, is preserved, but the specific tower geometry and all fine-scale features are clearly invented rather than recovered.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            The model may generate plausible building-like shapes, but these bear only loose resemblance to the actual Campanile. Colors may shift, structures may appear or disappear, and the overall clarity is significantly reduced. This happens because at t=750, the noisy input contains approximately 95% noise and only 5% original signal (based on the noise schedule). The model is essentially performing conditional image generation with minimal input guidance rather than true reconstruction. This limitation motivates the need for iterative denoising. Rather than making a single large jump from heavy noise to clean image, the diffusion model works better when taking many small denoising steps, gradually refining the image while maintaining consistency with both the evolving reconstruction and learned natural image priors. We'll explore this iterative approach in the next section.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 1.4: Iterative Denoising */}
                  <div className="space-y-6">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">1.4: Iterative Denoising</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        In section A.1.3, we saw that one-step denoising works reasonably well for moderate noise levels but degrades significantly as noise increases. This makes intuitive sense because asking the model to jump directly from heavy noise to a clean image is an extremely difficult task. Diffusion models, however, are fundamentally designed to denoise iteratively, taking many small refinement steps rather than one large leap.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        In theory, we could start at timestep T=1000 (pure noise) and denoise one step at a time through all 1000 timesteps until reaching t=0 (clean image). However, running the UNet 1000 times would be computationally expensive and slow. Fortunately, we can accelerate this process by skipping steps. The mathematical justification involves connections to differential equations and is beyond this course's scope, but the key insight is that the denoising process can take larger jumps while still maintaining quality.
                      </p>

                      {/* Strided Timesteps & Implementation */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Strided Timesteps & Implementation</h6>
                        <p className="text-gray-700 leading-relaxed">
                          To implement step-skipping, we create a list called strided_timesteps that samples from the full 1000-step schedule at regular intervals. We start at timestep 990 (nearly pure noise) and step backward by 30 until reaching 0 (clean image). This gives us approximately 33 denoising steps instead of 1000, dramatically reducing computation while preserving quality.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          At each iteration i, we're at timestep strided_timesteps[i] and want to reach the less noisy strided_timesteps[i+1]. The denoising formula combines three components:
                        </p>

                        {/* Interpolation Diagram */}
                        <div className="flex justify-center my-6">
                          <div className="w-2/3 space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/iterative_denoising/A1.4_Interpolation_image.png`}
                              alt="Linear interpolation between noisy state and predicted clean image"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/iterative_denoising/A1.4_Interpolation_image.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Linear interpolation between noisy state and predicted clean image</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Update Equation</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            The update equation balances signal and noise:
                          </p>
                          <div className="bg-white p-4 rounded-lg font-mono text-sm border border-gray-200">
                            x_t' = √(ᾱ_t' β_t)/(1 - ᾱ_t) · x₀ + √(α_t(1 - ᾱ_t'))/(1 - ᾱ_t) · x_t + v_σ
                          </div>
                          <p className="text-gray-700 leading-relaxed mt-3">
                            Where:
                          </p>
                          <ul className="space-y-1 text-gray-700 ml-4">
                            <li>• x₀ is our current one-step estimate of the clean image</li>
                            <li>• x_t is the current noisy image at timestep t</li>
                            <li>• x_t' is the next less-noisy image at timestep t' &lt; t</li>
                            <li>• v_σ is predicted variance noise (handled by add_variance)</li>
                          </ul>
                          <p className="text-gray-700 leading-relaxed mt-3">
                            This formula essentially interpolates between the predicted clean image x₀ and the current noisy state x_t, with the balance controlled by the noise schedule coefficients. The additional variance term v_σ adds stochasticity to prevent the process from becoming deterministic, which helps maintain sample diversity.
                          </p>
                        </div>
                      </div>

                      {/* Iterative Denoising Results */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Iterative Denoising Results</h6>
                        <p className="text-gray-700 leading-relaxed">
                          We start with the Campanile noised to timestep strided_timesteps[10] (which equals t=690) and iteratively denoise using i_start=10. Below we show every 5th denoising step to visualize the progressive refinement.
                        </p>

                        {/* Denoising Progression */}
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/iterative_denoising/A1.4_steps.png`}
                            alt="Iterative denoising progression, showing every 5th step from t=690 to t=90"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/iterative_denoising/A1.4_steps.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Iterative denoising progression, showing every 5th step from t=690 to t=90</p>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Observation</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            The iterative denoising process reveals how the model gradually refines the image from heavy noise to clarity. At t=690, the image is dominated by noise with only the faintest hint of vertical structure. By t=540, the general composition begins emerging, sky separates from ground, and we can identify a central vertical element.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            At t=390, the Campanile's shape becomes clearly recognizable, though details remain fuzzy and colors aren't fully resolved. Moving to t=240, architectural features sharpen significantly, the tower's proportions stabilize, and the surrounding landscape gains definition. Finally, at t=90, we approach the final clean result with well-defined edges, accurate colors, and realistic textures.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            This progressive refinement works because each step makes a small, manageable correction. Early steps focus on establishing large-scale composition and structure. Middle steps refine shapes and spatial relationships. Later steps polish fine details and textures. By breaking the impossible task of denoising t=690 noise in one step into 33 manageable sub-tasks, the model achieves dramatically better results.
                          </p>
                        </div>
                      </div>

                      {/* Final Comparison */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Final Comparison</h6>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/iterative_denoising/A1.4_steps_comparison.png`}
                            alt="Comparison of denoising methods starting from noise level t=690"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/iterative_denoising/A1.4_steps_comparison.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Comparison of denoising methods starting from noise level t=690: Original | Iteratively Denoised | One-Step | Gaussian Blur | Noisy t=690</p>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Analysis</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            Comparing the final results reveals the superiority of iterative denoising. The Gaussian blur result is completely unrecognizable, just colorful haze. The one-step denoised image shows visible artifacts, incorrect color tones, and hallucinated details that don't match the original. The tower shape is roughly correct but many specifics are wrong.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            In contrast, the iteratively denoised Campanile closely resembles the original. The tower's structure, proportions, and architectural features are accurately recovered. Colors match the sky's blue tone and the tower's cream color. Fine details like the building's surface texture and the surrounding trees are plausibly reconstructed.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            Crucially, the iterative approach doesn't just produce a sharper result. It produces a more correct result. This happens because each small denoising step maintains consistency with both the noisy observation and learned image priors. The model can't hallucinate wildly different structures between consecutive steps because each update is constrained by the previous state. This creates a smooth path from noise to data that stays close to natural image manifolds throughout, rather than making erratic jumps that might land in implausible regions of image space.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 1.5: Diffusion Model Sampling */}
                  <div className="space-y-6">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">1.5: Diffusion Model Sampling</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Now that we have a working iterative denoising function, we can use it for pure generative sampling by starting from complete random noise instead of a noised real image. We set i_start=0 and pass pure Gaussian noise ε ~ N(0,I) as input, then let the diffusion model denoise this noise into a coherent image. This effectively asks the question: given only the text prompt 'a high quality photo' and learned priors about natural images, what can the model create from scratch?
                      </p>

                      {/* Sampling Results */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Sampling Results</h6>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/sampling/A1.5_1.png`}
                            alt="Five images sampled from pure noise using prompt 'a high quality photo'"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sampling/A1.5_1.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Five images sampled from pure noise using prompt 'a high quality photo'</p>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Observation & Discussion</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            The generated samples demonstrate that the diffusion model can indeed create novel images from pure noise. Each sample shows recognizable subjects like people, landscapes, animals, or objects, arranged in plausible compositions. The images have coherent color schemes, appropriate lighting, and generally realistic spatial layouts.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            However, the quality is noticeably limited. Images appear somewhat blurry, lack fine detail, and sometimes contain subtle artifacts or anatomically unusual features. Colors may be oversaturated or oddly tinted. Some samples look more like artistic renderings than crisp photographs.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            This happens because our conditioning is extremely weak. The prompt 'a high quality photo' provides almost no guidance about content, just a vague instruction toward photorealism. The model must rely almost entirely on its learned priors about what natural images look like. With such minimal direction, it produces generic, average-looking outputs that satisfy the broad constraint of 'looking like a photo' but lack specificity or strong detail.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            Additionally, the model faces an inherent challenge: when denoising pure random noise, there's no underlying signal to recover. Unlike denoising a noisy Campanile where the correct answer exists, here the model must create something from nothing. This makes the task fundamentally harder and more prone to artifacts. We'll address this limitation in the next section with Classifier-Free Guidance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 1.6: Classifier-Free Guidance (CFG) */}
                  <div className="space-y-6">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">1.6: Classifier-Free Guidance (CFG)</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        The samples from section A.1.5 show that pure diffusion sampling works but produces mediocre quality. To dramatically improve results, we employ Classifier-Free Guidance (CFG), a technique that amplifies the influence of text conditioning. CFG doesn't require additional models or training, it simply modifies how we combine noise predictions during sampling.
                      </p>

                      {/* CFG Method */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">CFG Method</h6>
                        <p className="text-gray-700 leading-relaxed">
                          At each denoising step, we run the UNet twice:
                        </p>
                        <ul className="space-y-2 text-gray-700 ml-6">
                          <li>• <strong>Conditional prediction ε_c:</strong> Using the text prompt 'a high quality photo'</li>
                          <li>• <strong>Unconditional prediction ε_u:</strong> Using an empty prompt '' (the model learned unconditional generation during training)</li>
                        </ul>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">CFG Formula</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            We then blend these predictions using:
                          </p>
                          <div className="bg-white p-4 rounded-lg font-mono text-sm border border-gray-200">
                            ε_guided = ε_u + γ(ε_c - ε_u)
                          </div>
                          <p className="text-gray-700 leading-relaxed mt-3">
                            Where γ is the guidance scale. When γ=0, we get pure unconditional generation. When γ=1, we get standard conditional generation. The magic happens when γ &gt; 1, which we set to γ=7. This over-amplifies the difference between conditional and unconditional predictions, pushing outputs more strongly toward satisfying the text prompt.
                          </p>
                        </div>
                      </div>

                      {/* CFG Sampling Results */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">CFG Sampling Results (γ=7)</h6>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/text_conditional/A1.6_1.png`}
                            alt="Five images generated with CFG (γ=7) using prompt 'a high quality photo'"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/text_conditional/A1.6_1.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Five images generated with CFG (γ=7) using prompt 'a high quality photo'</p>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Observation & Analysis</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            The improvement from CFG is immediately visible. Compared to the non-CFG samples in A.1.5, these images show dramatically sharper edges, better-defined subjects, more realistic textures, and improved overall photorealism. Facial features are clearer, object boundaries are crisper, and fine details like hair strands or fabric textures are better resolved.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            The images now genuinely resemble high-quality photographs rather than blurry renderings. Lighting appears more natural, colors are better balanced, and compositions feel more intentional. Each sample depicts its subject (whether person, animal, or scene) with convincing detail and coherence.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            Why does CFG work? The term (ε_c - ε_u) represents the difference between what the model predicts with and without text conditioning. This difference captures the signal that specifically responds to the prompt. By amplifying this difference with γ=7, we push the output much more strongly toward satisfying 'a high quality photo.'
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            Mathematically, this moves samples away from the unconditional distribution (generic images) and toward regions where the conditional distribution (images matching the prompt) has high probability. The over-amplification (γ&gt;1) sacrifices some sample diversity to gain significantly higher quality and better prompt adherence. This trade-off is almost always worthwhile for practical applications.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            From this point forward, we'll use CFG with γ=7 for all generation tasks, as it represents the current best practice for high-quality diffusion sampling.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 1.7: Image-to-Image Translation (SDEdit) */}
                  <div className="space-y-6">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">1.7: Image-to-Image Translation (SDEdit)</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Beyond generating images from pure noise, diffusion models excel at image-to-image translation through a technique called SDEdit (Stochastic Differential Editing). The core idea is elegantly simple: take a real image, add controlled noise to partially destroy it, then denoise using text conditioning to guide the reconstruction in a new direction.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The key parameter is i_start, which determines where we begin in the denoising schedule. Higher i_start values mean we add more noise, giving the model greater freedom to transform the image toward the text prompt. Lower i_start values preserve more of the original structure. This creates a controllable spectrum from subtle refinement to dramatic transformation.
                      </p>

                      {/* SDEdit Results Overview */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">SDEdit Results Overview</h6>
                        <p className="text-gray-700 leading-relaxed">
                          We test SDEdit on three diverse images with i_start values [1, 3, 5, 7, 10, 20], all using the conditioning prompt 'a high quality photo' and seed=100.
                        </p>

                        {/* Example 1: Campanile */}
                        <div className="space-y-4">
                          <h6 className="text-base font-semibold text-berkeley-navy">Example 1: Campanile</h6>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7_sedit_capnile.png`}
                              alt="Campanile edited across noise levels (i_start 1→20)"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7_sedit_capnile.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Campanile edited across noise levels (i_start 1→20)</p>
                          </div>
                        </div>

                        {/* Example 2: Snowy Hike */}
                        <div className="space-y-4">
                          <h6 className="text-base font-semibold text-berkeley-navy">Example 2: Snowy Hike</h6>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7_sedit_snowy_hike.png`}
                              alt="Snowy hike scene edited across noise levels"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7_sedit_snowy_hike.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Snowy hike scene edited across noise levels</p>
                          </div>
                        </div>

                        {/* Example 3: Sunset Road */}
                        <div className="space-y-4">
                          <h6 className="text-base font-semibold text-berkeley-navy">Example 3: Sunset Road</h6>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7_sedit_sunset_road.png`}
                              alt="Sunset road scene edited across noise levels"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7_sedit_sunset_road.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Sunset road scene edited across noise levels</p>
                          </div>
                        </div>

                        {/* Comparison at i_start=7 */}
                        <div className="space-y-4">
                          <h6 className="text-base font-semibold text-berkeley-navy">Comparison at i_start=7</h6>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7_comparison_of_all_images_at_i_7.png`}
                              alt="All three images at moderate edit strength (i_start=7)"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7_comparison_of_all_images_at_i_7.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">All three images at moderate edit strength (i_start=7)</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Observation &amp; Analysis</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            The results reveal a clear pattern across all three images. At i_start=1 (minimal noise), edits are barely perceptible, the model makes only subtle adjustments to colors and fine details. This happens because very little noise means the original image signal dominates, leaving the model minimal room to deviate.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            At i_start=3 and 5, we see more noticeable refinements. Colors become more saturated, atmospheric effects intensify, and the overall aesthetic shifts toward the 'high quality photo' conditioning. The images look more polished and professionally processed, but their fundamental composition and content remain intact.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            Moving to i_start=7 and 10, significant transformations occur. The Campanile transforms from a lady to a tower with recognizable architecture, the snowy hike scene's atmosphere shifts dramatically from a realistic photo to a fantasy-like interpretation that approximates the original scene, and the sunset road's atmosphere, shading, and proportions come significantly closer to an actual road. The model now has enough freedom to reinterpret scene elements while maintaining overall structure. However, since the sunset road looks very similar to a beach, even at step 10 the image remains beach-like and doesn't fully transform to a road. Similarly for the snowy hike, the hikers are so small and some wear earthy colors, so the diffusion model interprets them as part of a tree or landscape feature.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            At i_start=20, we approach the boundary of recognition. Heavy noise allows radical reinterpretation. Specific details from the original are lost, replaced by the model's learned priors about what 'a high quality photo' should contain. Some images remain recognizable, others transform into related but distinctly different scenes. This demonstrates the fundamental trade-off in SDEdit: preservation versus transformation. The noise level controls how much we trust the original versus the model's generative capabilities. For subtle enhancement, use a low i_start. For creative reinterpretation, use a higher i_start with more noise from the start.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 1.7.1: Hand-Drawn and Web Images */}
                  <div className="space-y-6">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">1.7.1: Hand-Drawn and Web Images</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        A particularly powerful application of SDEdit is projecting non-photorealistic images onto the natural image manifold. By applying diffusion-based denoising to sketches, drawings, or stylized graphics, we can transform them into photorealistic renderings while preserving their compositional structure. This effectively asks: 'What would a photograph of this concept look like?'
                      </p>

                      {/* Hand-Drawn Sketch Car */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Hand-Drawn Sketch Car</h6>
                        <div className="grid grid-cols-5 gap-2">
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_original.png`}
                              alt="Original hand-drawn car sketch"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_original.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">Original</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_1.png`}
                              alt="Car sketch i_start=1"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_1.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=1</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_3.png`}
                              alt="Car sketch i_start=3"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_3.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=3</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_5.png`}
                              alt="Car sketch i_start=5"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_5.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=5</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_7.png`}
                              alt="Car sketch i_start=7"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_7.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=7</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_9.png`}
                              alt="Car sketch i_start=9"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_9.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=9</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_10.png`}
                              alt="Car sketch i_start=10"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_10.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=10</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_11.png`}
                              alt="Car sketch i_start=11"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_11.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=11</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_13.png`}
                              alt="Car sketch i_start=13"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_13.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=13</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_20.png`}
                              alt="Car sketch i_start=20"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_car_20.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=20</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 text-center">Hand-drawn car sketch transformed across noise levels: Original → i_start=1 (t=960), i_start=3 (t=900), i_start=5 (t=840), i_start=7 (t=780), i_start=9 (t=720), i_start=10 (t=690), i_start=11 (t=660), i_start=13 (t=600), i_start=20 (t=390)</p>
                      </div>

                      {/* Hand-Drawn Sketch Boat */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Hand-Drawn Sketch Boat</h6>
                        <div className="grid grid-cols-7 gap-2">
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_boat_original.png`}
                              alt="Original hand-drawn boat sketch"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_boat_original.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">Original</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_boat_1_istart.png`}
                              alt="Boat sketch i_start=1"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_boat_1_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=1</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_boat_3_istart.png`}
                              alt="Boat sketch i_start=3"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_boat_3_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=3</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_boat_5_istart.png`}
                              alt="Boat sketch i_start=5"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_boat_5_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=5</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_boat_7_istart.png`}
                              alt="Boat sketch i_start=7"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_boat_7_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=7</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_boat_10_istart.png`}
                              alt="Boat sketch i_start=10"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_boat_10_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=10</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_boat_20_istart.png`}
                              alt="Boat sketch i_start=20"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_sketch_boat_20_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=20</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 text-center">Hand-drawn boat sketch transformed across noise levels: Original → i_start=1 (t=960), i_start=3 (t=900), i_start=5 (t=840), i_start=7 (t=780), i_start=10 (t=690), i_start=20 (t=390)</p>
                      </div>

                      {/* Web Avocado */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Web Avocado Image</h6>
                        <div className="grid grid-cols-7 gap-2">
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_avocado_web_original.png`}
                              alt="Original web avocado image"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_avocado_web_original.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">Original</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_avocado_web_1_istart.png`}
                              alt="Avocado i_start=1"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_avocado_web_1_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=1</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_avocado_web_3_istart.png`}
                              alt="Avocado i_start=3"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_avocado_web_3_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=3</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_avocado_web_5_istart.png`}
                              alt="Avocado i_start=5"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_avocado_web_5_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=5</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_avocado_web_7_istart.png`}
                              alt="Avocado i_start=7"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_avocado_web_7_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=7</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_avocado_web_10_istart.png`}
                              alt="Avocado i_start=10"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_avocado_web_10_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=10</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_avocado_web_20_istart.png`}
                              alt="Avocado i_start=20"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_avocado_web_20_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=20</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 text-center">Web avocado image transformed across noise levels: Original → i_start=1 (t=960), i_start=3 (t=900), i_start=5 (t=840), i_start=7 (t=780), i_start=10 (t=690), i_start=20 (t=390)</p>
                      </div>

                      {/* Web Plane Drawing */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Web Plane Drawing</h6>
                        <div className="grid grid-cols-5 gap-2">
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_orig_istart.png`}
                              alt="Original web plane drawing"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_orig_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">Original</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_1_istart.png`}
                              alt="Plane drawing i_start=1"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_1_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=1</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_2_istart.png`}
                              alt="Plane drawing i_start=2"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_2_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=2</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_5_istart.png`}
                              alt="Plane drawing i_start=5"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_5_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=5</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_7_istart.png`}
                              alt="Plane drawing i_start=7"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_7_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=7</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_9_istart.png`}
                              alt="Plane drawing i_start=9"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_9_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=9</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_10_istart.png`}
                              alt="Plane drawing i_start=10"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_10_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=10</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_13_istart.png`}
                              alt="Plane drawing i_start=13"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_13_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=13</p>
                          </div>
                          <div className="space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_20_istart.png`}
                              alt="Plane drawing i_start=20"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/A1.7.1_planedrawing_web_20_istart.png`)}
                            />
                            <p className="text-xs text-gray-600 text-center">i_start=20</p>
                          </div>
                          <div></div>
                        </div>
                        <p className="text-sm text-gray-600 text-center">Web plane drawing transformed across noise levels: Original → i_start=1 (t=960), i_start=2 (t=930), i_start=5 (t=840), i_start=7 (t=780), i_start=9 (t=720), i_start=10 (t=690), i_start=13 (t=600), i_start=20 (t=390)</p>
                      </div>

                      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Expected Analysis</h6>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          The transformation of non-photorealistic images reveals remarkable capabilities. At low noise levels, sketches barely change, retaining their hand-drawn aesthetic. At moderate levels, the model begins developing realistic surfaces, proper shading, and photographic lighting while inferring what real photographs of these subjects should look like based on compositional cues.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          This demonstrates that diffusion models learn strong priors about natural image statistics. Given even rough structural guidance from a sketch, they can hallucinate photorealistic details like materials, lighting, shadows, and textures, essentially learning the mapping from geometric structure to photorealistic appearance.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 1.7.2: Inpainting (RePaint) */}
                  <div className="space-y-6">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">1.7.2: Inpainting (RePaint)</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Inpainting fills masked regions in images by leveraging the diffusion model's understanding of natural image structure. Unlike traditional inpainting that blends neighboring pixels, diffusion-based inpainting can generate entirely new semantically coherent content. The key innovation in RePaint is maintaining consistency between the known and unknown regions throughout the iterative denoising process.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        We can use the same procedure to perform image inpainting (following the RePaint paper). The inpainting process uses a binary mask <strong>m</strong> and applies it to the original image x_orig, creating a new image that has the same content where <strong>m = 0</strong> and new content where <strong>m = 1</strong>. This can be achieved by "forcing" the obtained x_t at every step in the denoising loop to have the same pixels as x_orig where <strong>m = 0</strong>.
                      </p>

                      {/* Formula */}
                      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">RePaint Implementation Formula</h6>
                        <div className="bg-white p-4 rounded-lg font-mono text-lg border border-gray-200 mb-3 text-center">
                          x_t ← <strong>m</strong>x_t + (1 - <strong>m</strong>)forward(x_orig, t)
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          The implementation of the inpaint function can be easily obtained by simply modifying the denoising loop in iterative_denoise_cfg to apply the mask at every step. Where <strong>m</strong> is the binary mask (0 for regions to inpaint, 1 for regions to preserve), x_t is the current denoised estimate, and forward(x_orig, t) generates a fresh noisy version of the original image at timestep t. This ensures the unmasked region stays faithful to the original while the model infers plausible content for the masked area.
                        </p>
                      </div>

                      {/* Example 1: Snowy Hike - Big Hiker */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Example 1: Snowy Hike - Adding Hiker in Foreground</h6>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/inpainting/1.7.2_inpainted_snowy_hike_1big_hiker_in_the_front.png`}
                            alt="Adding a hiker in the foreground of snowy mountain scene: Original | Mask | Masked Image | Inpainted Result"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/inpainting/1.7.2_inpainted_snowy_hike_1big_hiker_in_the_front.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Adding a hiker in the foreground: Original | Mask | Masked Image | Inpainted Result</p>
                        </div>
                      </div>

                      {/* Example 2: Sunset Road - Photographer */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Example 2: Sunset Road - Adding Photographer</h6>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/inpainting/1.7.2_inpainted_sunset_road_1_person making_a_photo.png`}
                            alt="Adding a photographer to sunset road scene: Original | Mask | Masked Image | Inpainted Result"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/inpainting/1.7.2_inpainted_sunset_road_1_person making_a_photo.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Adding a photographer: Original | Mask | Masked Image | Inpainted Result</p>
                        </div>
                      </div>

                      {/* Example 3: Snowy Hike - Hikers Right */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Example 3: Snowy Hike - Adding Hikers on Right</h6>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/inpainting/1.7.2_inpainted_snowy_hike_2_big_hikers_on_right.png`}
                            alt="Adding hikers on the right side of mountain scene: Original | Mask | Masked Image | Inpainted Result"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/inpainting/1.7.2_inpainted_snowy_hike_2_big_hikers_on_right.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Adding hikers on the right: Original | Mask | Masked Image | Inpainted Result</p>
                        </div>
                      </div>

                      {/* Example 4: Campanile - House Left */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Example 4: Campanile - Adding House to Left</h6>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/inpainting/1.7.2_inpainted_capnile_own_house_to_left.png`}
                            alt="Adding a house to the left of the Campanile: Original | Mask | Masked Image | Inpainted Result"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/inpainting/1.7.2_inpainted_capnile_own_house_to_left.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Adding a house to the left: Original | Mask | Masked Image | Inpainted Result</p>
                        </div>
                      </div>

                      {/* Example 5: Campanile Basic */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Example 5: Campanile - Basic Inpainting</h6>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/inpainting/1.7.2_inpainted_capnile.png`}
                            alt="Campanile with masked region inpainted: Original | Mask | Masked Image | Inpainted Result"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/inpainting/1.7.2_inpainted_capnile.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Basic Campanile inpainting: Original | Mask | Masked Image | Inpainted Result</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Expected Analysis</h6>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Diffusion-based inpainting demonstrates both strengths and challenges. When masked regions require content that naturally fits the scene context, the model often succeeds remarkably well, generating semantically appropriate content with correct lighting and scale that matches the scene.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          However, success varies based on the model's ability to infer appropriate content from visual context alone. The insight is that diffusion inpainting doesn't just fill holes with blurred textures, it generates semantically meaningful content that demonstrates understanding of scene composition, object relationships, and physical plausibility.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 1.7.3: Text-Conditional Image-to-Image Translation */}
                  <div className="space-y-6">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">1.7.3: Text-Conditional Image-to-Image Translation</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Now we combine SDEdit's controllable transformation with explicit text conditioning to perform dramatic image-to-image translation. Instead of using the generic 'a high quality photo' prompt, we provide specific target descriptions that guide the transformation toward entirely different subjects while preserving compositional structure from the original image. This enables creative transformations like turning a tower into a rocket or a road scene into a racing track.
                      </p>

                      {/* Transformation 1: Sunset Road → Porsche Racetrack */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Transformation 1: Sunset Road → Porsche Racetrack</h6>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                          <p className="text-sm font-medium text-berkeley-navy">Prompt: "a Porsche race car speeding on a racetrack"</p>
                        </div>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7.3_Sunset_Road_to_Porsche_Racetrack_orig2.png`}
                            alt="Sunset road transforming into Porsche racetrack across noise levels"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7.3_Sunset_Road_to_Porsche_Racetrack_orig2.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Original | i_start=1 (t=960) | i_start=3 (t=900) | i_start=5 (t=840) | i_start=7 (t=780) | i_start=10 (t=690) | i_start=20 (t=390)</p>
                        </div>
                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <p className="text-gray-700 leading-relaxed">
                            The sunset road gradually transforms into a dynamic racing scene. At low noise levels (i_start=1-3), we see subtle shifts, the road begins gaining racing track characteristics, colors shift toward the vibrant aesthetic of motorsports. By i_start=5-7, a Porsche emerges on the transformed track, incorporating motion blur that suggests high speed. The sunset lighting persists but recontextualizes to dramatic trackside illumination. At i_start=10-20, the scene fully commits to the racing prompt, though the horizontal composition and general layout echo the original road.
                          </p>
                        </div>
                      </div>

                      {/* Transformation 2: Sunset Road → Sailboat at Sunrise */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Transformation 2: Sunset Road → Sailboat at Sunrise</h6>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                          <p className="text-sm font-medium text-berkeley-navy">Prompt: "a sailboat at sunrise on calm water"</p>
                        </div>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7.3_Sunset_Road_to_Sailboat_at_Sunrise_orig1.png`}
                            alt="Sunset road transforming into sailboat at sunrise across noise levels"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7.3_Sunset_Road_to_Sailboat_at_Sunrise_orig1.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Original | i_start=1 (t=960) | i_start=3 (t=900) | i_start=5 (t=840) | i_start=7 (t=780) | i_start=10 (t=690) | i_start=20 (t=390)</p>
                        </div>
                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <p className="text-gray-700 leading-relaxed">
                            The road-to-sailboat transformation is particularly poetic. The horizontal road gradually becomes a horizon line over water. The sunset colors seamlessly translate into sunrise hues over the ocean. At moderate noise levels (i_start=5-7), sailboats appear at roughly the position where vehicles might have been in the original composition. The transformation respects spatial relationships, the far distance remains distant (sky/water meeting point), and the foreground adapts to water surface. This demonstrates how compositional structure persists even through semantically dramatic changes.
                          </p>
                        </div>
                      </div>

                      {/* Transformation 3: Campanile → Rocket Ship */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Transformation 3: Campanile → Rocket Ship</h6>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                          <p className="text-sm font-medium text-berkeley-navy">Prompt: "a rocket ship launching into space"</p>
                        </div>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7.3_Campanile_to_rocket_ship1_orig.png`}
                            alt="Campanile transforming into rocket ship across noise levels"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7.3_Campanile_to_rocket_ship1_orig.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Original | i_start=1 (t=960) | i_start=3 (t=900) | i_start=5 (t=840) | i_start=7 (t=780) | i_start=10 (t=690) | i_start=20 (t=390)</p>
                        </div>
                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <p className="text-gray-700 leading-relaxed">
                            The Campanile-to-rocket transformation showcases how vertical structures map naturally to similar forms. At i_start=1-3, the tower begins developing more streamlined, metallic characteristics. By i_start=5-7, clear rocket features emerge, pointed nose cones, fins, exhaust trails. The vertical composition is preserved, but the Berkeley campus surroundings transform into launch facilities or space environments. At high noise levels (i_start=10-20), we get fully realized rocket launches with dramatic fire and smoke effects, though the tall-vertical-structure composition that originated from the Campanile remains evident.
                          </p>
                        </div>
                      </div>

                      {/* Transformation 4: Foggy Mountains → Windsurfer */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Transformation 4: Foggy Mountains → Windsurfer</h6>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                          <p className="text-sm font-medium text-berkeley-navy">Prompt: "a windsurfer planing across the bay"</p>
                        </div>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7.3_Foggy_Mountains_to_Windsurfer_orig1.png`}
                            alt="Foggy mountains transforming into windsurfer across noise levels"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/sdedit/1.7.3_Foggy_Mountains_to_Windsurfer_orig1.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Original | i_start=1 (t=960) | i_start=3 (t=900) | i_start=5 (t=840) | i_start=7 (t=780) | i_start=10 (t=690) | i_start=20 (t=390)</p>
                        </div>
                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <p className="text-gray-700 leading-relaxed">
                            This transformation dramatically changes both subject and environment. The foggy mountains gradually dissolve into water surfaces. At moderate noise levels, windsurfers appear where mountain peaks once stood, the model finding creative ways to map vertical mountain structures onto sail geometry. The fog translates into atmospheric water spray or distant haze over the bay. This is perhaps the most semantically distant transformation, yet the model finds meaningful correspondences between disparate scenes through shared compositional elements like horizon lines and atmospheric effects.
                          </p>
                        </div>
                      </div>

                      {/* General Analysis */}
                      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">General Analysis</h6>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          These text-conditional transformations reveal several key insights about how diffusion models perform guided editing:
                        </p>
                        <ul className="space-y-2 text-gray-700 mb-3">
                          <li><strong>Compositional Preservation:</strong> Large-scale spatial layout persists. Horizontal compositions stay horizontal, vertical elements become vertical elements. The model uses the original image's composition as a structural scaffold.</li>
                          <li><strong>Semantic Bridges:</strong> The model finds plausible connections between source and target concepts. Sunsets work for both road scenes and sailboat scenes because both can have dramatic evening lighting.</li>
                          <li><strong>Noise Level Control:</strong> i_start=1-5 gives conservative edits, i_start=7-10 is the sweet spot for balanced transformation, i_start=20 allows near-complete reinterpretation.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                          This technique opens creative possibilities for artists and designers. Given a rough composition or sketch, one can rapidly explore variations by changing text prompts and noise levels, effectively using the diffusion model as an intelligent transformation tool that understands both visual and semantic structure.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 1.8: Visual Anagrams */}
                  <div className="space-y-6">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">1.8: Visual Anagrams</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Visual anagrams are optical illusions that reveal entirely different scenes when viewed from different orientations. Using diffusion models, we can create images that look like one subject normally but transform into something completely different when flipped upside down. This works by averaging noise predictions from two different text prompts, with one prompt applied to the transformed image orientation.
                      </p>

                      {/* Implementation */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Implementation</h6>
                        <p className="text-gray-700 leading-relaxed">
                          The algorithm denoises an image x_t at each step using two prompts simultaneously:
                        </p>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg border border-gray-200 font-mono text-base">
                              <div className="text-center space-y-2">
                                <div>ε₁ = CFG(UNet(x_t, t, p₁))</div>
                                <div>ε₂ = flip(CFG(UNet(flip(x_t), t, p₂)))</div>
                                <div className="border-t pt-2">ε = (ε₁ + ε₂) / 2</div>
                              </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                              Where p₁ and p₂ are different text prompts. At each denoising step, we:
                            </p>
                            <ul className="space-y-1 text-gray-700 ml-4">
                              <li>• Compute the noise estimate ε₁ for the normal orientation with prompt p₁</li>
                              <li>• Flip the image upside down, compute noise estimate ε₂ with prompt p₂, then flip the result back</li>
                              <li>• Average the two noise estimates</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                              This forces the model to satisfy both prompts simultaneously, with each prompt dominating when viewed in its corresponding orientation. The key implementation detail is properly handling the flip transformation (180° rotation) at each denoising iteration, ensuring the averaged noise estimate guides generation toward both targets.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="space-y-6">
                        <h6 className="text-base font-semibold text-berkeley-navy">Results</h6>

                        {/* Anagram 1: Porsche Racetrack ↔ Cyclist */}
                        <div className="space-y-4">
                          <h6 className="text-base font-semibold text-berkeley-navy">Anagram 1: Porsche Racetrack ↔ Cyclist Climbing Mountain</h6>
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                            <p className="text-sm font-medium text-berkeley-navy">
                              Prompts: "a vintage porsche on a race track" / "a cyclist climbing a mountain pass"
                            </p>
                          </div>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/visual_anagrams/1.8_visual_anagram_porsche_cyclist.png`}
                              alt="Visual anagram: Vintage Porsche (left) transforms to Cyclist (flipped right)"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/visual_anagrams/1.8_visual_anagram_porsche_cyclist.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Left: Vintage Porsche | Right: Cyclist (flipped)</p>
                          </div>
                          <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                            <h6 className="font-semibold text-berkeley-navy mb-3">Observation</h6>
                            <p className="text-gray-700 leading-relaxed">
                              In normal orientation, we clearly see a vintage Porsche on a racetrack with appropriate racing context. Flip it 180°, and a cyclist climbing a mountain pass emerges. The model finds clever visual correspondences, the horizontal racing track becomes a mountain road when inverted, and the car's form transforms into a cyclist's silhouette. The colors and composition work for both interpretations.
                            </p>
                          </div>
                        </div>

                        {/* Anagram 2: Mountain Lake ↔ Windsurfer */}
                        <div className="space-y-4">
                          <h6 className="text-base font-semibold text-berkeley-navy">Anagram 2: Mountain Lake ↔ Windsurfer on Wave</h6>
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                            <p className="text-sm font-medium text-berkeley-navy">
                              Prompts: "a mountain lake" / "a professional windsurfer riding a big wave"
                            </p>
                          </div>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/visual_anagrams/1.8_visual_anagram_mountainlake_surfer_2.png`}
                              alt="Visual anagram: Mountain Lake (left) transforms to Windsurfer (flipped right)"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/visual_anagrams/1.8_visual_anagram_mountainlake_surfer_2.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Left: Mountain Lake | Right: Windsurfer (flipped)</p>
                          </div>
                          <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                            <h6 className="font-semibold text-berkeley-navy mb-3">Observation</h6>
                            <p className="text-gray-700 leading-relaxed">
                              This anagram demonstrates brilliant semantic duality. Viewed normally, we see a serene mountain lake with peaks reflected in calm water. Inverted, the scene transforms into a dynamic windsurfer riding a wave, with the mountains becoming wave crests and the reflection becoming water spray. The stillness of the lake and the motion of windsurfing coexist in the same pixel arrangement through clever use of atmospheric effects and edge structures.
                            </p>
                          </div>
                        </div>

                        {/* Anagram 3: Mountain Peaks ↔ Ocean Waves */}
                        <div className="space-y-4">
                          <h6 className="text-base font-semibold text-berkeley-navy">Anagram 3: Mountain Peaks ↔ Ocean Waves</h6>
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                            <p className="text-sm font-medium text-berkeley-navy">
                              Prompts: "mountain peaks through clouds" / "ocean waves crashing"
                            </p>
                          </div>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/visual_anagrams/1.8_visual_anagram_mountain_peaks_oceanwaves.png`}
                              alt="Visual anagram: Mountain Peaks (left) transforms to Ocean Waves (flipped right)"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/visual_anagrams/1.8_visual_anagram_mountain_peaks_oceanwaves.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Left: Mountain Peaks | Right: Ocean Waves (flipped)</p>
                          </div>
                          <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                            <h6 className="font-semibold text-berkeley-navy mb-3">Observation</h6>
                            <p className="text-gray-700 leading-relaxed">
                              This is perhaps the most natural transformation. In standard orientation, we see mountain peaks emerging through atmospheric clouds with vertical rocky structures. Flip it upside down, and those same vertical elements become crashing ocean waves with foam and spray. The model exploits the shared verticality and contrast patterns between mountain ridges and wave crests to create a convincing dual interpretation. The atmospheric effects work equally well as mountain mist or ocean spray.
                            </p>
                          </div>
                        </div>

                        {/* Analysis */}
                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Analysis</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            Creating successful visual anagrams requires the model to find visual features that can serve double duty. Vertical elements (trees, lightning), horizontal structures (roads becoming waves), and atmospheric effects (reflections becoming spray) are particularly amenable to reinterpretation through rotation.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            The averaging of noise estimates is crucial. Neither prompt fully dominates; instead they negotiate a shared visual vocabulary. The model must find compositional structures and color patterns that plausibly represent both scenes. This is why anagram generation often requires multiple attempts with different random seeds, some seeds produce configurations where the dual interpretation works harmoniously, others create visual confusion.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            The technique demonstrates that diffusion models don't just generate isolated objects; they understand compositional relationships and can manipulate them creatively when given conflicting objectives.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 1.9: Hybrid Images */}
                  <div className="space-y-6">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">1.9: Hybrid Images</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Building on visual anagrams, we now create hybrid images using Factorized Diffusion. These images appear different when viewed up close versus from a distance, exploiting how our visual system processes different spatial frequencies. Low frequencies (smooth gradients, overall shapes) dominate distant viewing, while high frequencies (fine details, edges) dominate close viewing. By combining low frequencies from one prompt with high frequencies from another, we create images with dual interpretations based on viewing distance.
                      </p>

                      {/* Implementation */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Implementation</h6>
                        <p className="text-gray-700 leading-relaxed">
                          The algorithm follows a similar structure to visual anagrams but uses frequency filtering instead of geometric transformations:
                        </p>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg border border-gray-200 font-mono text-base">
                              <div className="text-center space-y-2">
                                <div>ε₁ = CFG(UNet(x_t, t, p₁))</div>
                                <div>ε₂ = CFG(UNet(x_t, t, p₂))</div>
                                <div className="border-t pt-2">ε = f_lowpass(ε₁) + f_highpass(ε₂)</div>
                              </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                              At each denoising step:
                            </p>
                            <ul className="space-y-1 text-gray-700 ml-4">
                              <li>• Compute noise estimate ε₁ with prompt p₁ (provides coarse structure)</li>
                              <li>• Compute noise estimate ε₂ with prompt p₂ (provides fine details)</li>
                              <li>• Apply Gaussian blur to ε₁ to extract low frequencies: f_lowpass(ε₁) = GaussianBlur(ε₁, kernel=33, σ=2)</li>
                              <li>• Extract high frequencies from ε₂ by subtracting its blurred version: f_highpass(ε₂) = ε₂ - GaussianBlur(ε₂, kernel=33, σ=2)</li>
                              <li>• Sum the filtered noise estimates to get the hybrid prediction</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                              This ensures p₁ controls the overall composition and large-scale structure, while p₂ determines the fine details and textures. The kernel size and sigma parameters control the frequency cutoff; larger values create more dramatic transitions between interpretations.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="space-y-6">
                        <h6 className="text-base font-semibold text-berkeley-navy">Results</h6>

                        {/* Hybrid 1: Waterfalls + Skull */}
                        <div className="space-y-4">
                          <h6 className="text-base font-semibold text-berkeley-navy">Hybrid 1: Waterfalls + Skull</h6>
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                            <p className="text-sm font-medium text-berkeley-navy">
                              Prompts: "a lithograph of waterfalls" (low freq) + "a lithograph of a skull" (high freq)
                            </p>
                          </div>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/hybrid_images/1.9_skull_waterfall_new.png`}
                              alt="Hybrid image: Waterfalls from distance, Skull up close (Full | Blurred | Sharpened)"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/hybrid_images/1.9_skull_waterfall_new.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Hybrid Image | From Far: Waterfalls | Up Close: Skull</p>
                          </div>
                          <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                            <h6 className="font-semibold text-berkeley-navy mb-3">Observation</h6>
                            <p className="text-gray-700 leading-relaxed">
                              Viewed from a distance or when blurred, we see cascading waterfalls with flowing water. Move closer or sharpen the image, and a detailed skull emerges from the same pixels. The flowing water patterns provide smooth gradients that read as waterfalls at low resolution, while the fine details encode skull features like eye sockets and bone structure. The lithograph style helps unify the two disparate subjects through shared tonal characteristics.
                            </p>
                          </div>
                        </div>

                        {/* Hybrid 2: Grizzly Bear + Dining Table */}
                        <div className="space-y-4">
                          <h6 className="text-base font-semibold text-berkeley-navy">Hybrid 2: Grizzly Bear + Dining Table</h6>
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                            <p className="text-sm font-medium text-berkeley-navy">
                              Prompts: "an oil painting of a grizzly bear" (low freq) + "an oil painting of a dining table" (high freq)
                            </p>
                          </div>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/hybrid_images/1.9_dining_table_grizly_fav_2.png`}
                              alt="Hybrid image: Grizzly Bear from distance, Dining Table up close (Full | Blurred | Sharpened)"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/hybrid_images/1.9_dining_table_grizly_fav_2.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Hybrid Image | From Far: Grizzly Bear | Up Close: Dining Table</p>
                          </div>
                          <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                            <h6 className="font-semibold text-berkeley-navy mb-3">Observation</h6>
                            <p className="text-gray-700 leading-relaxed">
                              This unusual pairing demonstrates the technique's versatility. The grizzly bear's rounded form and brown tones dominate the low-frequency structure, creating an animal silhouette visible from afar. Up close, fine details resolve into a dining table with distinct surface textures and structural elements. The oil painting style provides enough texture and color variation to support both interpretations. The bear's bulk and the table's horizontal presence find surprising compatibility in their compositional requirements.
                            </p>
                          </div>
                        </div>

                        {/* Hybrid 3: Old Person + Dog */}
                        <div className="space-y-4">
                          <h6 className="text-base font-semibold text-berkeley-navy">Hybrid 3: Old Person + Dog</h6>
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                            <p className="text-sm font-medium text-berkeley-navy">
                              Prompts: "a photo of an old person" (low freq) + "an oil painting of a dog" (high freq)
                            </p>
                          </div>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_a/hybrid_images/1.9_old_person_and_dog_fav.png`}
                              alt="Hybrid image: Old Person from distance, Dog up close (Full | Blurred | Sharpened)"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_a/hybrid_images/1.9_old_person_and_dog_fav.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Hybrid Image | From Far: Old Person | Up Close: Dog</p>
                          </div>
                          <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                            <h6 className="font-semibold text-berkeley-navy mb-3">Observation</h6>
                            <p className="text-gray-700 leading-relaxed">
                              The human face provides low-frequency structure with its oval shape and tonal gradients representing skin, hair, and facial proportions. Overlay dog features in the high frequencies, fur texture, snout details, ears, and the close-up view reveals a canine portrait. The mixed media approach (photo for person, oil painting for dog) creates interesting textural variety. Facial features and dog features surprisingly share similar geometric arrangements (eyes, nose positions), making the dual interpretation more natural than expected.
                            </p>
                          </div>
                        </div>

                        {/* Analysis */}
                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Analysis</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            Hybrid images work because human vision adapts its processing based on viewing conditions. At a distance, our visual system prioritizes low spatial frequencies to understand overall scene composition and identify objects. Up close, we focus on high-frequency details for texture and fine structure recognition.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            The success of hybrids depends on finding compatible subject pairings. Subjects with similar overall shapes or complementary tonal ranges produce the most convincing results. The waterfalls and skull both involve high-contrast dark-light patterns. The bear and table share brownish color palettes. The person and dog have compatible facial geometry.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            Frequency-based factorization demonstrates that diffusion models understand images as multi-scale representations. By manipulating noise estimates at the frequency level, we can surgically control what the model generates at different scales, a form of compositional control that wouldn't be possible with traditional generative approaches.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            The technique also reveals practical applications beyond optical illusions. Multi-resolution image generation, progressive detail refinement, and scale-aware compression all benefit from understanding how diffusion models can separately control coarse and fine image structure.
                            </p>
                            </div> {/* Closes Analysis Box */}
                            </div>   {/* Closes Results */}
                        </div>     {/* Closes Inner Content */}
                        </div>       {/* Closes Section 1.9 */}
                    </div>         {/* Closes Part 1 Content Wrapper */}
                    </div>           {/* Closes Part 1 Container */}
                </div>             {/* Closes ProjectPart Content Wrapper */}
                </ProjectPart>
                </div>

            {/* Part B Overview */}
            <div id="part-b" className="text-center mb-16 mt-24">
              <h2 className="text-4xl font-bold text-berkeley-navy mb-4">Part B: Flow Matching from Scratch!</h2>
              <div className="text-left max-w-4xl mx-auto space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  This section implements diffusion models from the ground up by training custom UNet architectures on MNIST digits. Starting with single-step denoising, we progress through time-conditioned and class-conditioned models, culminating in a full classifier-free guidance system. This hands-on approach provides deep understanding of the mathematical foundations and architectural choices in modern diffusion models.
                </p>
              </div>
            </div>

            {/* Part B.1: Single-step Denoising UNet */}
            <div id="part-b1">

            <ProjectPart
              partNumber="B.1"
              title="Single-step Denoising UNet"
              description="Training custom flow matching model on MNIST dataset"
              detailedDescription={[
                "This section implements diffusion models from the ground up by training custom UNet architectures on MNIST digits. Starting with single-step denoising, we progress through time-conditioned and class-conditioned models, culminating in a full classifier-free guidance system. This hands-on approach provides deep understanding of the mathematical foundations and architectural choices in modern diffusion models."
              ]}
              className="mb-16"
            >
              <div className="space-y-8">

                {/* B.1: Training a Single-Step Denoising UNet */}
                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">B.1: Training a Single-Step Denoising UNet</h4>
                  
                  {/* B.1.1: Implementing the UNet */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">B.1.1: Implementing the UNet</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        The foundation of our flow matching model is the UNet architecture, which serves as the denoiser that learns to map noisy images back to clean data. This encoder-decoder structure progressively reduces spatial dimensions while increasing channel depth, then reconstructs the image back to its original resolution. The skip connections between corresponding encoder and decoder layers are crucial because they preserve fine-grained spatial details that would otherwise be lost during compression.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The architecture uses several atomic operations: convolutional layers handle feature extraction and transformation, batch normalization stabilizes training by normalizing activations, GELU activation introduces non-linearity for learning complex patterns, downsampling/upsampling operations adjust spatial resolution, and flatten/unflatten operations connect spatial features to compact representations. These operations compose into larger blocks (ConvBlock, DownBlock, UpBlock) to create a deep network with substantial representational capacity. The hidden dimension D controls the network's capacity, determining channel count at each layer. For our initial single-step denoiser, we use D=128, which provides sufficient capacity for effective denoising while remaining computationally tractable.
                      </p>

                      {/* UNet Architecture Diagram */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">UNet Architecture Overview</h6>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_b/unet_architecture/Unconditional_UNet_Architecture.png`}
                            alt="Unconditional UNet architecture showing encoder-decoder structure with skip connections"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/unet_architecture/Unconditional_UNet_Architecture.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Unconditional UNet architecture showing the encoder-decoder structure with skip connections. The network downsamples input through three stages, processes through a bottleneck, then upsamples back to the original resolution.</p>
                        </div>
                      </div>

                      {/* Atomic Operations */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Atomic Operations</h6>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_b/unet_architecture/Standard_UNet_Atomic_Operations.png`}
                            alt="Standard UNet atomic operations and composed operations"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/unet_architecture/Standard_UNet_Atomic_Operations.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Standard UNet atomic operations (left) and composed operations (right). Simple operations include convolution, downsampling, and upsampling, while composed operations combine multiple layers for increased depth.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* B.1.2: Using the UNet to Train a Denoiser */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">B.1.2: Using the UNet to Train a Denoiser</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        With our UNet architecture defined, we can now train it as a single-step denoiser. The process is straightforward: take clean MNIST digits, add Gaussian noise with σ=0.5, and train the model to predict the clean image directly from the noisy input. This is formulated as an L2 regression problem minimizing mean squared error between the denoiser's output and the ground truth.
                      </p>

                      {/* Noising Visualization */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Noising Visualization</h6>
                        <p className="text-gray-700 leading-relaxed">
                          The noising process follows z = x + σϵ, where x is the clean image, ϵ ~ N(0,I), and σ controls noise magnitude. As σ increases from 0.0 to 1.0, we observe progressive degradation where σ=0.0 leaves images perfectly clean, σ=0.2 introduces slight speckles with digit structure clearly visible, σ=0.5 shows substantial noise that obscures fine details while overall shape remains recognizable, and σ=1.0 creates heavy corruption with noise comparable to signal magnitude.
                        </p>
                        
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/B1.2.0_noisy_images_for_different_noise_levels.png`}
                            alt="Visualization of noising process across different noise levels"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/B1.2.0_noisy_images_for_different_noise_levels.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Visualization of the noising process across different noise levels σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0] applied to three sample digits. As σ increases, Gaussian noise progressively corrupts the image structure.</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                          This demonstrates why learning-based approaches outperform classical methods. The noise corrupts both high-frequency details and lower-frequency structure, requiring the denoiser to distinguish genuine image content from random patterns. Classical Gaussian blurring can only smooth pixels, not hallucinate missing structure.
                        </p>
                      </div>

                      {/* B.1.2.1: Training */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">B.1.2.1: Training</h6>
                        <p className="text-gray-700 leading-relaxed">
                          We train the UNet denoiser using Adam optimizer with learning rate 1e-4 over 5 epochs. Each batch of 256 images is noised independently using σ=0.5, meaning the same clean digits see different noise patterns across epochs, improving generalization. The model minimizes L2 loss between its output D_θ(z) and the ground truth x.
                        </p>

                        {/* Training Loss Curve */}
                        <div className="flex justify-center my-6">
                          <div className="w-2/3 space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/B1.2.1_training_loss_curve.png`}
                              alt="Training loss curve for single-step UNet denoiser"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/B1.2.1_training_loss_curve.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Training loss curve for the single-step UNet denoiser over 5 epochs with σ=0.5, batch size 256, and learning rate 1e-4. The loss decreases rapidly in the first epoch and then stabilizes.</p>
                          </div>
                        </div>

                        {/* Denoising Results */}
                        <div className="space-y-4">
                          <h6 className="text-base font-semibold text-berkeley-navy">Denoising Results</h6>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <img 
                                src={`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.1_Denoising results after Epoch 1.png`}
                                alt="Denoising results after 1 epoch"
                                className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                                onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.1_Denoising results after Epoch 1.png`)}
                              />
                              <p className="text-sm text-gray-600 text-center">After 1 epoch</p>
                            </div>
                            <div className="space-y-2">
                              <img 
                                src={`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.1_Denoising results after Epoch 5.png`}
                                alt="Denoising results after 5 epochs"
                                className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                                onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.1_Denoising results after Epoch 5.png`)}
                              />
                              <p className="text-sm text-gray-600 text-center">After 5 epochs</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 text-center">Denoising results on test set samples after 1 epoch (left) and 5 epochs (right). Each shows the progression from clean input to noisy image (σ=0.5) to denoised output.</p>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Training Analysis</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            The loss curve shows rapid convergence in the first epoch, with loss dropping sharply then plateauing. This quick initial improvement indicates the model rapidly learns to remove dominant noise patterns. Subsequent epochs show continued but slower refinement as the model recovers finer details.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            The denoised results reveal the learning progression: after 1 epoch, recognizable digits with most noise removed, but some residual artifacts and blurriness remain, especially in fine details. After 5 epochs, significantly cleaner and sharper outputs, high-frequency details effectively recovered, digits nearly as clean as originals. This success occurs because the UNet learns to recognize underlying digit structure rather than applying fixed filters.
                          </p>
                        </div>
                      </div>

                      {/* B.1.2.2: Out-of-Distribution Testing */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">B.1.2.2: Out-of-Distribution Testing</h6>
                        <p className="text-gray-700 leading-relaxed">
                          Our denoiser was trained exclusively on σ=0.5 noise. We now test its generalization to noise levels from 0.0 to 1.0 that it never encountered during training. This reveals the model's ability to extrapolate beyond its training distribution.
                        </p>

                        {/* Results Visualization */}
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 gap-4">
                            <div className="space-y-2">
                              <img 
                                src={`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.2._Out-of-Distribution_Noisy_vs_Denoised_at different_noise_levels_digits_5.png`}
                                alt="Out-of-distribution testing for digit 5"
                                className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                                onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.2._Out-of-Distribution_Noisy_vs_Denoised_at different_noise_levels_digits_5.png`)}
                              />
                            </div>
                            <div className="space-y-2">
                              <img 
                                src={`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.2._Out-of-Distribution_Noisy_vs_Denoised_at different_noise_levels_digits_4.png`}
                                alt="Out-of-distribution testing for digit 4"
                                className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                                onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.2._Out-of-Distribution_Noisy_vs_Denoised_at different_noise_levels_digits_4.png`)}
                              />
                            </div>
                            <div className="space-y-2">
                              <img 
                                src={`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.2._Out-of-Distribution_Noisy_vs_Denoised_at different_noise_levels_digits_3.png`}
                                alt="Out-of-distribution testing for digit 3"
                                className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                                onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.2._Out-of-Distribution_Noisy_vs_Denoised_at different_noise_levels_digits_3.png`)}
                              />
                            </div>
                            <div className="space-y-2">
                              <img 
                                src={`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.2._Out-of-Distribution_Noisy_vs_Denoised_at different_noise_levels_digits_2.png`}
                                alt="Out-of-distribution testing for digit 2"
                                className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                                onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.2._Out-of-Distribution_Noisy_vs_Denoised_at different_noise_levels_digits_2.png`)}
                              />
                            </div>
                            <div className="space-y-2">
                              <img 
                                src={`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.2._Out-of-Distribution_Noisy_vs_Denoised_at different_noise_levels_digits_1.png`}
                                alt="Out-of-distribution testing for digit 1"
                                className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                                onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.2._Out-of-Distribution_Noisy_vs_Denoised_at different_noise_levels_digits_1.png`)}
                              />
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 text-center">Out-of-distribution denoising results across noise levels σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0] for five test digits. The model generalizes well to lower noise levels but shows degradation at σ &gt; 0.6.</p>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Analysis</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            The denoising performance across noise levels shows clear patterns. Within or below training distribution (σ ≤ 0.5): σ=0.0 acts as identity function, leaving clean images unchanged; σ=0.2, 0.4 show excellent performance, removing noise while preserving all fine details; σ=0.5 demonstrates optimal performance as expected at training level.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            Beyond training distribution (σ &gt; 0.5): σ=0.6 still quite good but with subtle artifacts and slightly reduced sharpness; σ=0.8, 1.0 show more pronounced degradation, noticeable artifacts and loss of fine details. This degradation occurs because the model encounters input distributions significantly different from training. Despite this, the denoiser still outperforms classical methods even at out-of-distribution noise levels.
                          </p>
                        </div>
                      </div>

                      {/* B.1.2.3: Denoising Pure Noise */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">B.1.2.3: Denoising Pure Noise</h6>
                        <p className="text-gray-700 leading-relaxed">
                          To transform our denoiser into a generative model, we attempt to denoise pure Gaussian noise ϵ ~ N(0,I) to produce realistic digits. We train a new UNet with the same architecture, but now input z is sampled from N(0,I) rather than generated by corrupting clean images.
                        </p>

                        {/* Training Loss */}
                        <div className="flex justify-center my-6">
                          <div className="w-2/3 space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.3_Trainng_loss_corve_for_training_on_pure_noise.png`}
                              alt="Training loss curve for denoising pure Gaussian noise"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.3_Trainng_loss_corve_for_training_on_pure_noise.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Training loss curve for denoising pure Gaussian noise over 5 epochs. The loss decreases and stabilizes, indicating the model converges to the optimal solution.</p>
                          </div>
                        </div>

                        {/* Generated Results */}
                        <div className="space-y-4">
                          <h6 className="text-base font-semibold text-berkeley-navy">Generated Results</h6>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <img 
                                src={`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.3_Generated samples from pure noise after Epoch 1.png`}
                                alt="Generated samples from pure noise after 1 epoch"
                                className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                                onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.3_Generated samples from pure noise after Epoch 1.png`)}
                              />
                              <p className="text-sm text-gray-600 text-center">After 1 epoch</p>
                            </div>
                            <div className="space-y-2">
                              <img 
                                src={`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.3_Generated samples from pure noise after Epoch 5.png`}
                                alt="Generated samples from pure noise after 5 epochs"
                                className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                                onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/single_step_denoising/1.2.3_Generated samples from pure noise after Epoch 5.png`)}
                              />
                              <p className="text-sm text-gray-600 text-center">After 5 epochs</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 text-center">Generated samples from pure noise after 1 epoch (top) and 5 epochs (bottom). All outputs converge to nearly identical blurry images representing the mean MNIST digit.</p>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Mathematical Explanation</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            The results are striking: instead of generating diverse digits, the model produces nearly identical outputs regardless of input noise. All generated images look like a blurry average of all MNIST digits superimposed together. Why this happens mathematically: our training loss is E[||D_θ(z) - x||²] where z ~ N(0,I) and x ~ D_MNIST are independent.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            The optimal solution minimizing MSE is D*_θ(z) = E[X|Z]. However, since Z and X are independent (pure noise contains no information about digits), this simplifies to E[X|Z] = E[X]. The optimal denoiser is a constant function that always outputs the mean of the training distribution, regardless of input.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            This highlights a fundamental limitation of single-step denoising for generation. When input provides no information about output, minimizing reconstruction error inevitably leads to predicting the mean. To build an effective generative model, we need an approach that gradually transforms noise into data through multiple steps, which is exactly what flow matching accomplishes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* B.2: Training a Flow Matching Model */}
                <div>
                  <h4 className="text-xl font-semibold text-berkeley-navy mb-6">B.2: Training a Flow Matching Model</h4>
                  
                  {/* B.2.1: Adding Time Conditioning to UNet */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">B.2.1: Adding Time Conditioning to UNet</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        The failure of single-step denoising showed we need a different approach. Flow matching learns to iteratively denoise through many small steps rather than one large jump. At each step t ∈ [0,1], the model sees a different interpolation between noise (t=0) and data (t=1): x_t = (1-t)x_0 + tx_1. The UNet must be conditioned on timestep t to predict the appropriate flow direction for each noise level.
                      </p>

                      {/* Time-Conditioned Architecture */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Time-Conditioned Architecture</h6>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_b/time_conditioning/B2.1_Time_Conditioning_UNet_architecture.png`}
                            alt="Time-conditioned UNet architecture with FCBlock modules"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/time_conditioning/B2.1_Time_Conditioning_UNet_architecture.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Time-conditioned UNet architecture showing how timestep t is embedded through FCBlock modules and injected at unflatten and up1 layers.</p>
                        </div>
                      </div>

                      {/* FCBlock Architecture */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">FCBlock Architecture</h6>
                        <div className="flex justify-center">
                          <div className="w-2/3 space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_b/time_conditioning/B2.1_FCBlock_Architecture.png`}
                              alt="FCBlock for embedding time conditioning"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/time_conditioning/B2.1_FCBlock_Architecture.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">FCBlock (Fully-Connected Block) for embedding time conditioning. Two linear layers with GELU activation transform the scalar timestep into a feature vector.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Architecture Details</h6>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Time conditioning is injected at two points through FCBlock modules. FCBlock structure: input is normalized timestep t ∈ [0,1], architecture uses two linear layers with GELU activation, output is feature vector matching dimensions at injection point.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Injection points: at bottleneck unflatten operation (unflatten = unflatten * t1) and at first upsampling (up1 = up1 * t2). This multiplicative interaction allows time information to gate or scale features based on timestep. At t=0 (pure noise), the network might emphasize broad structure extraction, while at t=1 (nearly clean), it focuses on fine detail refinement.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* B.2.2: Training the Time-Conditioned UNet */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">B.2.2: Training the Time-Conditioned UNet</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        We train the time-conditioned UNet to predict the flow vector u(x_t,t) = x_1 - x_0. For each batch: sample clean images x_1 from MNIST, sample noise x_0 ~ N(0,I), sample random timesteps t ~ Uniform(0,1), compute interpolated x_t = (1-t)x_0 + tx_1, and train to predict flow x_1 - x_0.
                      </p>

                      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Hyperparameters</h6>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <strong>Batch size:</strong> 64</li>
                          <li>• <strong>Initial learning rate:</strong> 1e-2</li>
                          <li>• <strong>Learning rate scheduler:</strong> Exponential decay with γ = 0.1^(1/num_epochs)</li>
                          <li>• <strong>Hidden dimension:</strong> D=64</li>
                          <li>• <strong>Epochs:</strong> 10</li>
                        </ul>
                      </div>

                      {/* Algorithm Visualization */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Training Algorithm</h6>
                        <div className="flex justify-center">
                          <div className="w-2/3 space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_b/flow_matching/B2.2_Algorithm1.png`}
                              alt="Training algorithm for time-conditioned UNet flow matching model"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/flow_matching/B2.2_Algorithm1.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Algorithm 1: Training procedure for time-conditioned UNet flow matching model.</p>
                          </div>
                        </div>
                      </div>

                      {/* Training Loss Curve */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Training Results</h6>
                        <div className="flex justify-center">
                          <div className="w-2/3 space-y-2">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_b/flow_matching/B2.2_Loss_curve_time_conditioned_u-net.png`}
                              alt="Training loss curve for time-conditioned UNet"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/flow_matching/B2.2_Loss_curve_time_conditioned_u-net.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Training loss curve over 10 epochs with batch size 64, learning rate 1e-2, and exponential decay schedule. Loss decreases rapidly initially then stabilizes.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Training Analysis</h6>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          The loss curve shows rapid initial decrease followed by stable convergence. In the first few hundred iterations, loss drops sharply as the model learns basic flow patterns. The steep gradient indicates large corrections from random initialization. After this phase, loss decreases more gradually as the model refines predictions across all timesteps and digit classes.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          By epoch 10, the loss has stabilized at a low value, indicating accurate flow prediction across the full range t ∈ [0,1]. The smooth convergence without oscillations suggests well-chosen hyperparameters.
                        </p>
                      </div>
                    </div>
                  </div>


                  {/* B.2.3: Sampling from the Time-Conditional UNet */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">B.2.3: Sampling from the Time-Conditional UNet</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        With the time-conditional UNet trained, we can now sample new MNIST digits from pure noise. Unlike the single-step denoiser from Part B.1, which could only remove a fixed noise level, our flow matching model can iteratively refine images starting from complete Gaussian noise. We use the Euler method to numerically solve the ordinary differential equation (ODE) defined by the learned flow field.
                      </p>

                      {/* Sampling Algorithm */}
                      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Algorithm B.2: Euler Method Sampling</h6>
                        <div className="bg-white p-4 rounded-lg font-mono text-sm border border-gray-200 mb-3">
                          <div>Input: Trained UNet, num_ts (timesteps), seed</div>
                          <div>1. Initialize x_0 ~ N(0, I)  # Pure Gaussian noise</div>
                          <div>2. Set step_size = 1/num_ts</div>
                          <div>3. For i = 0 to num_ts-1:</div>
                          <div>     t = i * step_size</div>
                          <div>     u_t = UNet(x_t, t)  # Predict flow at current position</div>
                          <div>     x_(t+step) = x_t + step_size * u_t  # Euler step</div>
                          <div>4. Return x_1  # Final sample</div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          We use num_ts = 50 timesteps for sampling, providing a balance between quality and computation time. Each step moves along the flow field predicted by the UNet, gradually transforming noise into structured digit images.
                        </p>
                      </div>

                      {/* Algorithm Diagram */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Algorithm Visualization</h6>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_b/time_conditioning/B2.3_Algorithm2_sampling.png`}
                            alt="Algorithm B.2: Euler Method Sampling visualization"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/time_conditioning/B2.3_Algorithm2_sampling.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Algorithm B.2: Euler Method Sampling Process</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="space-y-6">
                        <h6 className="text-base font-semibold text-berkeley-navy">Sampling Results</h6>

                        {/* Epoch 1 Results */}
                        <div className="space-y-4">
                          <h6 className="text-base font-medium text-berkeley-navy">Epoch 1 Results</h6>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_b/time_conditioning/B2.3_TC_flow_matching_restults_at_epoch_1.png`}
                              alt="40 sampled digits after epoch 1"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/time_conditioning/B2.3_TC_flow_matching_restults_at_epoch_1.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">40 sampled digits after epoch 1 (4 samples × 10 digits)</p>
                          </div>
                        </div>

                        {/* Epoch 5 Results */}
                        <div className="space-y-4">
                          <h6 className="text-base font-medium text-berkeley-navy">Epoch 5 Results</h6>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_b/time_conditioning/B2.3_TC_flow_matching_restults_at_epoch_5.png`}
                              alt="40 sampled digits after epoch 5"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/time_conditioning/B2.3_TC_flow_matching_restults_at_epoch_5.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">40 sampled digits after epoch 5</p>
                          </div>
                        </div>

                        {/* Epoch 10 Results */}
                        <div className="space-y-4">
                          <h6 className="text-base font-medium text-berkeley-navy">Epoch 10 Results</h6>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_b/time_conditioning/B2.3_TC_flow_matching_restults_at_epoch_10.png`}
                              alt="40 sampled digits after epoch 10"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/time_conditioning/B2.3_TC_flow_matching_restults_at_epoch_10.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">40 sampled digits after epoch 10</p>
                          </div>
                        </div>

                        {/* Analysis */}
                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Observation & Analysis</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            The progression across epochs reveals gradual improvement in sample quality. After just 1 epoch, the model produces barely recognizable blobs that vaguely suggest digit shapes. The flow field has learned some basic structure but lacks fine detail.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            By epoch 5, significant improvement emerges. Most digits become recognizable, though many exhibit artifacts like broken strokes, irregular thickness, or ambiguous shapes. The model has learned the general topology of digits but struggles with consistent execution.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            At epoch 10, quality plateaus. While legibility improves further and most samples are clearly identifiable as specific digits, persistent artifacts remain. Some digits show unusual stroke patterns, inconsistent line widths, or slightly malformed loops. The model produces plausible MNIST-like digits but not at the quality level of the training data.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            This limitation stems from training without class conditioning. The model learns a general distribution over all digits simultaneously, averaging across different digit structures. When sampling, it generates digits but cannot control which digit appears. This averaging effect prevents it from specializing and refining the characteristics of individual digits. Additionally, without classifier-free guidance (CFG), the model lacks the mechanism to push samples toward higher-quality regions of the learned distribution. These issues motivate our next step: adding class conditioning to enable targeted generation and CFG to improve quality.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* B.2.4: Adding Class-Conditioning to UNet */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">B.2.4: Adding Class-Conditioning to UNet</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        To enable controlled digit generation and improve quality through classifier-free guidance, we extend our UNet with class conditioning. This allows us to specify which digit to generate and train the model to respect this conditioning. The architecture modification is elegant: we add fully connected layers that process class labels into conditioning vectors, then inject these vectors at the same points where we previously injected time information.
                      </p>

                      {/* Architecture Modification */}
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Class Conditioning Implementation</h6>
                        <div className="bg-white p-4 rounded-lg font-mono text-sm border border-gray-200 mb-3">
                          <div>1. One-hot encode class labels: c ∈ R^10</div>
                          <div>2. Create two FC blocks for class conditioning:</div>
                          <div>   - fc1_c: Linear(10 → 64) + GELU + Linear(64 → 64)</div>
                          <div>   - fc2_c: Linear(10 → 64) + GELU + Linear(64 → 64)</div>
                          <div>3. Inject at bottleneck and upsampling:</div>
                          <div>   - unflatten = unflatten * t1 + c1  # Combined time and class</div>
                          <div>   - up1 = up1 * t2 + c2  # Combined time and class</div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          The conditioning vectors c1 and c2 (from fc1_c and fc2_c respectively) are element-wise multiplied and added to the feature maps at critical architecture points. This follows the same pattern as time conditioning, but now the model receives both when in the flow (time t) and what to generate (class c).
                        </p>
                      </div>

                      {/* Dropout for CFG */}
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Unconditional Training (p_uncond = 0.1)</h6>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          To enable CFG during sampling, we must train the model to handle both conditional and unconditional generation. During training, with 10% probability we set the class conditioning to a zero vector (c = 0), forcing the model to generate digits without class guidance. This teaches two distinct modes:
                        </p>
                        <ul className="space-y-1 text-gray-700 ml-4">
                          <li>• <strong>Conditional mode (90%):</strong> Generate digit class c</li>
                          <li>• <strong>Unconditional mode (10%):</strong> Generate any digit</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          At sampling time, we can then amplify the difference between these modes to push outputs more strongly toward the desired class.
                        </p>
                      </div>

                      {/* Architecture Diagram */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Algorithm B.3: Class-Conditional Training</h6>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_b/class_conditioning/B2.5_Algorithm3_class_conditioning_training.png`}
                            alt="Algorithm B.3: Class-Conditional Training with CFG Dropout"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/class_conditioning/B2.5_Algorithm3_class_conditioning_training.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Algorithm B.3: Class-Conditional Training with CFG Dropout</p>
                        </div>
                      </div>

                      {/* Implementation Note */}
                      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Implementation Note</h6>
                        <p className="text-gray-700 leading-relaxed">
                          The combined conditioning (time + class) provides the model with rich information at each step. The time embedding tells it how much structure should exist (early steps: coarse shapes, late steps: fine details). The class embedding tells it what structure to create (curves for 0, vertical lines for 1, loops for 8, etc.). By modulating feature maps with both signals, the UNet can specialize its processing for each digit class while maintaining temporal awareness of the denoising process.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* B.2.5: Training the Class-Conditional UNet */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">B.2.5: Training the Class-Conditional UNet</h5>
                    <div className="space-y-4">
                      {/* Training Configuration */}
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Training Configuration</h6>
                        <div className="space-y-2 text-gray-700">
                          <div><strong>Hyperparameters:</strong></div>
                          <ul className="space-y-1 ml-4">
                            <li>• Batch size: 64</li>
                            <li>• Learning rate: 1e-2</li>
                            <li>• Hidden dimension: 64</li>
                            <li>• Epochs: 10</li>
                            <li>• Unconditional dropout: p_uncond = 0.1</li>
                            <li>• Timesteps: num_ts = 200 (increased from 50)</li>
                          </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          We increased the number of timesteps from 50 to 200 when adding class conditioning. This compensates for the greater information complexity. With class conditioning, the model must now maintain and update not just the general flow field toward digit-like structures, but specialized flows for each of the 10 digit classes. The higher temporal resolution (200 vs. 50 steps) provides more granular control over this class-specific generation process, allowing smoother interpolation paths from noise to each distinct digit topology.
                        </p>
                      </div>

                      {/* Comparing With and Without LR Scheduler */}
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Comparing With and Without LR Scheduler</h6>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          To evaluate the necessity of learning rate scheduling, we trained two variants:
                        </p>
                        <div className="space-y-3 text-gray-700">
                          <div>
                            <strong>Variant 1 (With Scheduler):</strong>
                            <ul className="space-y-1 ml-4">
                              <li>• Initial LR: 1e-2</li>
                              <li>• Scheduler: ExponentialLR with γ = 0.1^(1/10)</li>
                              <li>• Final LR: ~1e-3</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Variant 2 (Without Scheduler):</strong>
                            <ul className="space-y-1 ml-4">
                              <li>• Constant LR: 2e-3 (not 1e-2)</li>
                              <li>• No scheduling</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          For the no-scheduler variant, we adapted the learning rate to 2e-3 instead of the original 1e-2. Higher constant learning rates (like 1e-2) caused training instability, with loss curves exhibiting erratic behavior and occasional divergence. The lower 2e-3 rate provides stable convergence throughout training.
                        </p>
                      </div>

                      {/* Training Loss Comparison */}
                      <div className="space-y-6">
                        <h6 className="text-base font-semibold text-berkeley-navy">Training Loss Comparison</h6>
                        
                        <div className="space-y-6">
                          <div className="space-y-4 flex flex-col items-center">
                            <div className="w-3/5">
                              <img 
                                src={`${import.meta.env.BASE_URL}project5/part_b/class_conditioning/B2.5_Training_loss_comparison_with_and_wihtout_scheduler_1_plot.png`}
                                alt="Training loss comparison with and without scheduler - single plot"
                                className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                                onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/class_conditioning/B2.5_Training_loss_comparison_with_and_wihtout_scheduler_1_plot.png`)}
                              />
                            </div>
                            <p className="text-sm text-gray-600 text-center">Combined Training Loss Comparison</p>
                          </div>
                          
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_b/class_conditioning/B2.5_Training_loss_comparison_with_and_wihtout_scheduler_2plots.png`}
                              alt="Training loss comparison with and without scheduler - separate plots"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/class_conditioning/B2.5_Training_loss_comparison_with_and_wihtout_scheduler_2plots.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">Side-by-Side Training Loss Comparison</p>
                          </div>
                        </div>

                        {/* Analysis */}
                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Observation</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            Both approaches achieve similar final loss values, demonstrating that careful tuning of a constant learning rate can match scheduled training. The scheduled version shows slightly smoother convergence, particularly in early epochs where the high initial rate enables rapid loss reduction. The constant 2e-3 rate converges more gradually but steadily.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            The key lesson: learning rate scheduling is not strictly necessary if you're willing to tune the constant rate appropriately. For this problem scale (MNIST, 10 classes, 64-dim hidden), a well-chosen constant rate of 2e-3 suffices. However, scheduling provides more robustness—the exponential decay automatically adapts to training phases without manual tuning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                    {/* B.2.6: Sampling with Classifier-Free Guidance */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-berkeley-navy mb-4">B.2.6: Sampling with Classifier-Free Guidance</h5>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Now we deploy classifier-free guidance (CFG) to dramatically improve generation quality. CFG works by amplifying the difference between conditional and unconditional predictions, pushing outputs more strongly toward matching the desired class label. This is the same principle we used in Part A with DeepFloyd, but now applied to our custom flow matching model.
                      </p>

                      {/* CFG Sampling Algorithm */}
                      <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                        <h6 className="font-semibold text-berkeley-navy mb-3">Algorithm B.4: CFG Sampling</h6>
                        <div className="bg-white p-4 rounded-lg font-mono text-sm border border-gray-200 mb-3">
                          <div>Input: UNet, class c, guidance_scale γ, num_ts, seed</div>
                          <div>1. Initialize x_0 ~ N(0, I)</div>
                          <div>2. Set step_size = 1/num_ts</div>
                          <div>3. For i = 0 to num_ts-1:</div>
                          <div>     t = i * step_size</div>
                          <div>     u_cond = UNet(x_t, t, c)  # Conditional flow</div>
                          <div>     u_uncond = UNet(x_t, t, ∅)  # Unconditional flow (c=0)</div>
                          <div>     u_guided = u_uncond + γ(u_cond - u_uncond)  # CFG</div>
                          <div>     x_(t+step) = x_t + step_size * u_guided</div>
                          <div>4. Return x_1</div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          We use guidance_scale γ = 5.0 and num_ts = 200 timesteps for sampling. The sampling timestep count (200) differs from training (200), this reduction speeds up inference while maintaining quality. For each digit 0-9, we generate 4 samples, producing 40 total images.
                        </p>
                      </div>

                      {/* Algorithm Diagram */}
                      <div className="space-y-4">
                        <h6 className="text-base font-semibold text-berkeley-navy">Algorithm Visualization</h6>
                        <div className="space-y-4">
                          <img 
                            src={`${import.meta.env.BASE_URL}project5/part_b/class_conditioning/B2.6_Algorithm4_class_conditioning_sampling.png.png`}
                            alt="Algorithm B.4: CFG Sampling Process"
                            className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/class_conditioning/B2.6_Algorithm4_class_conditioning_sampling.png.png`)}
                          />
                          <p className="text-sm text-gray-600 text-center">Algorithm B.4: Class-Conditional Sampling with CFG</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="space-y-6">
                        <h6 className="text-base font-semibold text-berkeley-navy">Results (Without Scheduler, LR=2e-3)</h6>

                        {/* Epoch 1 Results */}
                        <div className="space-y-4">
                          <h6 className="text-base font-medium text-berkeley-navy">Epoch 1 Results</h6>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_b/class_conditioning/B2.6_TC_flow_matching_class_cond_(gamma=5.0)_restults_at_epoch_1_no_sched.png`}
                              alt="40 samples with CFG after epoch 1"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/class_conditioning/B2.6_TC_flow_matching_class_cond_(gamma=5.0)_restults_at_epoch_1_no_sched.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">40 samples with CFG (γ=5.0) after epoch 1, trained without scheduler</p>
                          </div>
                        </div>

                        {/* Epoch 5 Results */}
                        <div className="space-y-4">
                          <h6 className="text-base font-medium text-berkeley-navy">Epoch 5 Results</h6>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_b/class_conditioning/B2.6_TC_flow_matching_class_cond_(gamma=5.0)_restults_at_epoch_5_no_sched.png`}
                              alt="40 samples with CFG after epoch 5"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/class_conditioning/B2.6_TC_flow_matching_class_cond_(gamma=5.0)_restults_at_epoch_5_no_sched.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">40 samples with CFG (γ=5.0) after epoch 5</p>
                          </div>
                        </div>

                        {/* Epoch 10 Results */}
                        <div className="space-y-4">
                          <h6 className="text-base font-medium text-berkeley-navy">Epoch 10 Results</h6>
                          <div className="space-y-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}project5/part_b/class_conditioning/B2.6_TC_flow_matching_class_cond_(gamma=5.0)_restults_at_epoch_10_no_sched.png`}
                              alt="40 samples with CFG after epoch 10"
                              className="w-full rounded-lg border-2 border-gray-200 shadow-md cursor-pointer"
                              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}project5/part_b/class_conditioning/B2.6_TC_flow_matching_class_cond_(gamma=5.0)_restults_at_epoch_10_no_sched.png`)}
                            />
                            <p className="text-sm text-gray-600 text-center">40 samples with CFG (γ=5.0) after epoch 10</p>
                          </div>
                        </div>

                        {/* Analysis */}
                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                          <h6 className="font-semibold text-berkeley-navy mb-3">Observation & Analysis</h6>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            The improvement from class conditioning and CFG is immediately visible and dramatic. After just 1 epoch, digits are already more structured and recognizable compared to the time-only model at epoch 10. The model has learned to associate class labels with specific digit topologies.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            By epoch 5, quality becomes excellent. Nearly all samples are crisp, well-formed digits with consistent stroke thickness and proper proportions. Class conditioning allows the model to specialize, learning the distinct characteristics of each digit separately rather than averaging across all classes.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            At epoch 10, results approach training data quality. Digits show natural variation (different writing styles for the same digit) while maintaining high legibility. Some samples rival or exceed the quality of actual MNIST training examples.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>Why CFG works so well:</strong> The term (u_cond - u_uncond) captures the difference between "generate digit c" and "generate any digit." This difference represents the signal that specifically responds to the class condition. By amplifying it with γ=5.0, we push generation much more strongly toward satisfying the class constraint. This sacrifices some sample diversity (all 4s start looking similar) but gains significant quality and class accuracy.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            <strong>Impact of num_ts increase:</strong> Increasing timesteps from 50 to 200 during training was crucial. Class-conditional models must learn 10 distinct flow fields (one per digit), requiring finer temporal discretization to capture the nuanced differences between digit structures.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>     {/* Closes B.2 Wrapper */}
              </div>       {/* Closes Main Part B Content (space-y-8) */}
            </ProjectPart>
            </div>         {/* Closes part-b1 */}
          </div>           {/* Closes max-w-6xl */}
        </div>             {/* Closes container (THIS WAS MISSING) */}
      </section>
      {/* Project Learnings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-berkeley-navy mb-4">Project 5 Learnings</h2>
              <p className="text-xl text-gray-600 mb-8">Key insights from implementing and working with diffusion models</p>
              
              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-berkeley-navy mb-3">Part A: Diffusion Models</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-berkeley-navy mb-2">Sampling & Quality</h4>
                        <ul className="space-y-1 text-gray-700 text-sm ml-4">
                          <li>• Inference steps matter: More steps (20-30) generally improve quality, but can introduce artifacts in complex lighting scenarios</li>
                          <li>• CFG is transformative: Guidance scale γ=7 dramatically improves quality over unconditional sampling, essential for production use</li>
                          <li>• Iterative beats one-step: Gradual refinement across 30+ steps vastly outperforms single-step denoising at any noise level</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-berkeley-navy mb-2">Image-to-Image Translation</h4>
                        <ul className="space-y-1 text-gray-700 text-sm ml-4">
                          <li>• i_start controls transformation strength: Low i_start (1-5) = heavy transformation, high i_start (10-20) = subtle refinement (counterintuitive!)</li>
                          <li>• Sketch-to-photo works remarkably well: Diffusion models can project non-photorealistic inputs onto natural image manifolds</li>
                          <li>• Structure preservation depends on noise level: Compositional layout persists even through dramatic semantic changes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-berkeley-navy mb-2">Inpainting & Editing</h4>
                        <ul className="space-y-1 text-gray-700 text-sm ml-4">
                          <li>• RePaint maintains consistency: Replacing unmasked regions at each step prevents drift from original content</li>
                          <li>• Context matters more than prompts: With generic prompts, the model infers content from surrounding visual context</li>
                          <li>• Multiple attempts needed: Stochastic sampling means trying different seeds to find good inpainting results</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-berkeley-navy mb-2">Visual Illusions</h4>
                        <ul className="space-y-1 text-gray-700 text-sm ml-4">
                          <li>• Averaging enables dual interpretations: Visual anagrams work by negotiating between conflicting prompt objectives</li>
                          <li>• Frequency separation is powerful: Hybrid images exploit low/high frequency decomposition for distance-dependent perception</li>
                          <li>• Transformation compatibility varies: Some prompt pairs (roads→water, towers→rockets) map more naturally than others</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-berkeley-navy mb-2">General Insights</h4>
                        <ul className="space-y-1 text-gray-700 text-sm ml-4">
                          <li>• Text conditioning needs specificity: Generic prompts like "high quality photo" provide weak guidance compared to detailed descriptions</li>
                          <li>• Diffusion models understand composition: They preserve spatial relationships and find semantic bridges between disparate concepts</li>
                          <li>• Not all parameters scale linearly: More steps usually helps, but optimal settings depend on content complexity and lighting</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-berkeley-navy mb-3">Part B: Flow Matching</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-berkeley-navy mb-2">Architecture</h4>
                        <ul className="space-y-1 text-gray-700 text-sm ml-4">
                          <li>• Time conditioning is essential: Enables adaptive processing at different noise levels in the flow</li>
                          <li>• Class conditioning enables control: Transforms random generation into targeted, high-quality synthesis</li>
                          <li>• Conditioning via modulation: Multiplying features with time/class embeddings at bottleneck + upsampling provides sufficient control</li>
                          <li>• CFG requires dropout training: 10% unconditional training is prerequisite for effective guidance</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-berkeley-navy mb-2">Training Dynamics</h4>
                        <ul className="space-y-1 text-gray-700 text-sm ml-4">
                          <li>• LR tuning matters: Constant LR=2e-3 works well, but 1e-2 causes instability; scheduler provides robustness</li>
                          <li>• More timesteps for complexity: Increased from 50→200 for class-conditional to handle 10 separate flow fields</li>
                          <li>• Quality improves progressively: Consistent gains across epochs, diminishing returns after ~5-7 epochs</li>
                          <li>• Batch size affects convergence: Smaller batches (64) work better for class-conditional with limited per-class data</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-berkeley-navy mb-2">Quality & Capability</h4>
                        <ul className="space-y-1 text-gray-700 text-sm ml-4">
                          <li>• CFG is game-changing: Guidance γ=5.0 transforms mediocre samples into high-quality digits</li>
                          <li>• Class specialization beats averaging: Class-conditional vastly exceeds time-only models</li>
                          <li>• Flow matching is efficient: 50-200 steps competitive with 1000+ step diffusion models</li>
                          <li>• Build incrementally: Unconditional → time-conditional → class-conditional progression helps debugging</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project5;