---
title: Midway Through the Years
description: Midway changed a lot from its humble beginnings as a simple prototype to the complex extension it is now. Let's explore how it changed.
project: midway
---

# A Note on Versioning
While it might seem as though I am using Semantic Versioning (or SemVer as the developer community calls it), I actually simply increase the numbers based on how significant I feel the change to be, rather than simply increasing a major number or minor number based on the corresponding magnitude of change. 

# The Initial Prototype (v1.3.15) 
![Midway branding image with extension logo](https://gliu20.github.io/assets/images/2019-08-27-midway-big-tile.png)

Yes, the initial prototype does not start from 0.0.0 or even 1.0.0, it starts at 1.3.15. Although it may seem unintuitive, it is actually because I've re-written my code several times and I didn't feel like labeling it such a mundane 1.0.0. It's a bit whack, but that's ok.

But I digress.

![Midway v1.3.15 timebox](https://gliu20.github.io/assets/images/2018-08-27-timebox-1-3-15.png "Timebox is on the Google website, displaying 9:47, which is the period end time.")

At this point, Midway was a simple extension, merely displaying the end of the period in a little box in the corner, called the timebox. Although you could move the timebox out of the way, the position did not persist across tabs. This meant that every time you refreshed the page or when you opened a new tab, Midway's timebox was back in the top left corner. In addition, the timebox lacked a close button, which proved annoying for some users, when Midway covered an important item on the page.

![Midway marketing slide 1](https://gliu20.github.io/assets/images/2019-08-27-midway-screenshot-1.png "Midway's timebox on the new tab page")
![Midway marketing slide 2](https://gliu20.github.io/assets/images/2019-08-27-midway-screenshot-2.png "Click and drag the timebox to move it out of the way")
![Midway marketing slide 3](https://gliu20.github.io/assets/images/2019-08-27-midway-screenshot-3.png "Midway contains no ads")
![Midway marketing slide 4](https://gliu20.github.io/assets/images/2019-08-27-midway-screenshot-4.png "Midway works offline")

# No longer just a prototype (v1.4.2)
With the introduction of Midway v1.4.2, Midway has greatly increased in both capability and complexity. One of the challenges in developing Midway was the fact that, due to a Chrome browser bug, Custom Elements were NOT supported when it is registered by an extension. As a result, Midway could not be isolated from its containing page. I ended up using a workaround: injecting a script onto the page that loaded code from Github. Unfortunately, it meant that Midway no longer worked offline, but since the users were almost always online, it wasn't much of a problem. 

Addressing one of the primary concerns of many users, Midway now persisted the timebox on the page. What that means is if you drag the timebox to the bottom right corner, it stays there, even if you switch tabs or reload the page. However, the implementation was a bit poor since it depended on time delays. As a result, sometimes the delays didn't fire at the correct times, resulting in glitchy timebox persistence.

In addition, Midway now had the ability to close it. Previously, the only way to get rid of it was by dragging it to the edge of the screen, a suboptimal solution for many. Now, a simple close button will get rid of it.

