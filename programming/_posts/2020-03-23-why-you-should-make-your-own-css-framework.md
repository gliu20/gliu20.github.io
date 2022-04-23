---
title: Why you should build your own CSS framework and what I learned building one
description: It's often too easy to just include a CSS framework, but before we mindlessly add it to our projects, let's consider what we are losing out on by doing so. 
image: /assets/images/2020-03-23-css-framework.png
image_caption: Photo by me
image_alt: Picture of a CSS framework written in Sass
---

With the rise in utility-first CSS libraries, I wanted to dive deeper into why that's the case, and why we I think it's valuable to re-invent the wheel. 

Since many mainstream frameworks include kilobytes of never used CSS and tons of styles that need to be overridden, it's not hard to see how most frameworks do too much, adding unnecessary bloat and slowing page speeds. But beyond heavy [frameworks like Bootstrap](https://getbootstrap.com/), there are a rising number of utility-first frameworks, such as [Tailwind](https://tailwindcss.com/), that don't have the bloat and customization issues like Bootstrap and their counterparts[^1]. Plus, with tools like [Sass](https://sass-lang.com/) and modern utilities like [CSS flexbox and grid](https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/), it's never been easier to build custom frameworks. 

With this in mind, I sought to create a replacement--one that also passes [Google's Lighthouse](https://developers.google.com/web/tools/lighthouse) and that has my own personal flair.

# So, why reinvent the wheel?
Oftentimes, I found the best way to learn is to do things on your own. While our individual implementations might not be as advanced, I think it's enlightening to go through the process without a framework and discover the rationale behind the design choices.

For instance, building [my own remake of TailwindCSS](https://github.com/gliu20/faketailwind) made me appreciate the unique quirks of [Tailwind's mobile-first approach to responsive styles](https://tailwindcss.com/docs/responsive-design#targeting-mobile-screens). By having having mobile styles as the base and layering on styles for devices of increasing power, Tailwind encourages developers to make design decisions that help mobile devices take less processing time for media queries.

In addition, through struggling to scale my own framework with numerous css classes, I've discovered important discussions on conventions like [BEM](https://getbem.com/) or [SUIT](https://suitcss.github.io/). Furthermore, I've also learned about common solutions to widespread problems like clearfix for layouts built with floats that I wouldn't have found otherwise. Without creating my own tools, I might not have stumbled upon such ideas. 

# Takeaways
Building your own framework can help you:
1. Gain a greater appreciation for what they try to solve
2. Discover new discussions of which you were previously unaware
3. Broaden your understanding of the fundamentals

To conclude this post, I challenge you to build your own CSS framework, and I encourage you to share what you learned. 


[^1]: Well, that is if you use [PurgeCSS, as described on the Tailwind docs](https://tailwindcss.com/docs/optimizing-for-production)
