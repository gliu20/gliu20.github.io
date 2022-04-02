---
title: How I optimized my fractal viewer and the things I learned along the way
description: From learning WebAssembly to eliminating unnecessary work with period checking to progressive refinement, this is how I made my fractal viewer faster and more usable.
image: /assets/images/2021-04-23-multiplication-cover.png
image_caption: Photo created by me
image_alt: Image of mathematical symbols like subtraction, addition, multiplication, and equal signs
project: fractals
---

From learning WebAssembly to eliminating unnecessary work with period checking to progressive refinement, this is how I made my fractal viewer faster and more usable.

## 1. Migration away from TensorflowJS, progressive refinement, and workload-adaptive calculations
The original fractal viewer indirectly used WebGL by running matrix operations using TensorflowJS, a javascript-based machine learning framework. However, the system was extremely laggy due to the overhead of transferring matrices between the CPU and GPU for each operation that needed to be done. This severely limited the frames per second and greatly impacted responsiveness. Additionally, the precision of floats are severely limited as compared to native Javascript floats. 

By rewriting everything to use native Javascript, we can avoid the overhead of sending calculations to and from the GPU, while also allowing me to create a straightforward implementation of progressive enhancement, a usability technique that displays a coarse resolution of the image and iteratively increases the resolution to give the user immediate feedback.

Next, I developed an adaptive engine to calculate a number of pixels while maintaining responsiveness. It accomplishes this by checking how long it takes to render a given number of pixels and then updates the number of pixels it renders each frame. The algorithm is a slight modification of the AIMD algorithm (inspired from the TCP protocol), in which the algorithm increases the number of pixels it renders additively but if it fails to meet a target frame rate, it multiplicatively decreases the number of pixels it handles on the next frame.

## 2. Critical code was rewritten in WebAssembly
Using Chrome's developer tools, I identified critical sections of code which I rewrote to avoid slow operations like the creation of unnecessary arrays or objects. Then for extremely critical code, such as the Mandelbrot and Julia fractal calculating code, I rewrote them in C and used Emscripten to compile it to WebAssembly (WASM). I don't remember the exact numbers, but the difference in calculation speed between the analogous native js version vs the WASM version was tremendous.  

## 3. Removed dead work by implementing periodicity checking
For the Mandelbrot and Julia sets, we know that points in the set (aka the points that are colored black) are periodic. Using this knowledge, we don't need to wait until these points reach `maxIterations` for us to determine that it belongs in the set. Instead, we can check for periodicity and quit calculating early. This saves a tremendous amount of time especially if much of the current field of view is part of the Mandelbrot set. 

## 4. Used fast approximations of exponential function
Finally, since the colouring algorithm didn't require precise numbers, it was reasonable to switch to fast approximations of the exponential algorithm which allowed an even faster speed up.

## Conclusion
Altogether, this resulted in quite a speedup from the original proof of concept. The progressive refinement technique in particular even allowed my fractal viewer to work surprisingly well on mobile, despite the lackluster hardware. Hopefully you found this helpful! I've attached some further resources below in case you want to learn more!

## Further resources
-  [Youtube video from SimonDev on optimizing your Javascript](https://www.youtube.com/watch?v=oewDaISQpw0)
-  [Smashing Magazine's article on fast, efficient Javascript](https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/)
