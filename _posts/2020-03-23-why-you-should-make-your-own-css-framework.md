---
title: Why you should build your own CSS framework and what I learned as a result
description: It's often too easy to just include a CSS framework, but before we mindlessly add it to our projects, let's consider what we are losing out on by doing so. 
---

With a flood of custom CSS frameworks, it helps to dive deeper into why that's the case. With many frameworks including kilobytes of never used CSS and the many more styles that need to be overriden, it's not hard to see how most frameworks do too much, adding unnecessary bloat and slowing page speeds. But beyond heavy [frameworks like Bootstrap](https://getbootstrap.com/), there are a rising number of utility-first frameworks, such as [Tailwind](https://tailwindcss.com/), that don't have the bloat and customization issues like Bootstrap and their counterparts.

# So, why reinvent the wheel?
Oftentimes, I found the best way to learn is to do things on your own. While our individual implementations might not be as advanced, I think it's enlightening to go through the process without a framework and discover the rationale behind the design choices.

For instance, I now come to appreciate the unique quirks of Tailwind's mobile-first approach to responsive styles. By having having mobile styles as the base and layering on styles for devices of increasing power, Tailwind encourages developers to make design decisions that help mobile devices take less processing time for media queries.

In addition, through struggling to build my own framework, I've discovered important discussions on conventions like [BEM](https://getbem.com/) or [SUIT](https://suitcss.github.io/). Furthermore, I've also discovered common solutions to widespread problems like clearfix for layouts built with floats that's not found in most textbooks on Web Design. Without creating my own tools, I might not have discovered such ideas. 

# Takeaways
Building your own framework can help you:
1. Gain a greater appreciation for what they try to solve
2. Discover new discussions of which you were previously unaware
3. Broaden your understanding of the fundamentals
