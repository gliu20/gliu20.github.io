---
title: How I Got Started With Contributing to Firefox
description: I used to think it was hard to meaningfully contribute to open source. I felt overwhelmed. How could I find something that I could actually meaningfully improve? I’ve considered contributing to browsers, but I never thought I’d be able to. This is the story of how I contributed to Firefox despite not knowing how.
image: /assets/images/2020-03-23-css-framework.png
image_caption: Photo by me
image_alt: Picture of CSS code
---

I used to think it was hard to meaningfully contribute to open source. I’d browse on Github scouring for good first issues only to find them already taken or far outside my depth. 

I felt overwhelmed. How did I know which projects I could contribute to? How could I find something that I could actually meaningfully improve?

I’ve considered contributing to browsers, but I never thought I’d be able to. I thought they were giant codebases that were difficult to understand, and without solid Rust and C++ foundations, I assumed it was impossible.

It wasn’t until I discovered [codetribute.mozilla.org](https://codetribute.mozilla.org) that I finally found something that fit me. While Firefox is written in C++ and Rust, much of the browser user interface is written in good old HTML, Javascript, and CSS−all things I was familiar with. Furthermore, since Firefox code wasn’t hosted on Github, there were many more good first bugs to choose from (probably because it’ll be harder for someone to include on their Github profile or resume).

After searching for hours, I finally found a bug that was easy enough to get started with. It was a [bug that involved a modal button being cut off](https://bugzilla.mozilla.org/show_bug.cgi?id=1755008). Debugging the issue, it was a problem with its flexbox layout and I was able to fix it in a single line of code. 

From there, I’ve progressed onto more challenging bugs like implementing a feature where you can open the context menu on a phone number and copy the number or fixing a bug in detecting urls in plain text link selections.

While I ultimately hope to become a Core Contributor to Firefox, I still have a long way to go. I know the journey may be difficult, just as it has been thus far. But the philosophy that keeps me going is knowing the people who achieve the impossible are the people delusional enough to try regardless. And regardless of what you think of me, I’m happy to keep trying, and hopefully you would too.
