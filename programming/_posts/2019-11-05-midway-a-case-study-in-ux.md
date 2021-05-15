---
title: Midway&#58; A Case Study in UX
description: Let's dive into the many steps we take to make Midway as easy and convenient to use as possible.
project: midway
image: /assets/images/2021-05-15-cover-midway-ux.png
image_caption: Photo created by me
image_alt: Image of the stylized text UX, which is short for User Experience  
---

[Midway](https://gliu20.github.io/midway/) may seem like a simple application that displays the current period details, but there are surprising ways that can get in the way of a frictionless experience. As a Chrome extension developed by a student for teachers, Midway is committed to a great user experience.

# Integration with SMART Technologies
{% include post-image.html 
 src="/assets/images/2021-05-15-smart-board-pause.png"
 alt="The lower right hand corner of an interactive display is shown with the pause button"
 caption="The SMART™ Board pause feature proves to be problematic since teachers are unaware that the timebox is not updating since the screen is paused"
%}

As a tool for facilitating efficient class time usage, one of the things I noticed was the widespread use of Midway alongside digital peripherals such as SMART boards. Especially among technologically-inclined teachers, much of the faculty make use of the pause feature on the SMART board, which freezes the display. One of the main issues of this feature is the fact that Midway's timebox display will show an outdated time because the screen is frozen. When working on the Midway improvement, this was one of the key considerations.

{% include post-image.html 
 src="/assets/images/2021-05-15-timebox-moving-gradient.png"
 alt="The timebox has a moving gradient"
 caption="The moving gradient indicates to teachers that the timebox is working and so if the screen is paused, they are able to know. This is inspired from the flashing recording indicator  and the moving gradients on loading bars. These all convey to the user that something is happening."
%}

To address this problem, Midway now has an optional feature called timebox shimmer that displays a moving gradient on the timebox. This allows the end user to quickly determine whether or not the timebox is live. If teachers  find this feature distracting, there is a toggle available in the settings to quickly enable or disable the feature.

# Timebox Display Format

{% include post-image.html 
 src="/assets/images/2021-05-15-minute-emphasis.png"
 alt="The timebox was changed to show the time left in a period"
 caption="The emphasis shifts to the number of minutes left in a period, which proved to be more important to teachers when planning out their lessons and to allow them to know this information quickly without requiring mental math."
%}

Speaking with numerous teachers, one of the most important pieces of information to know was actually not the period end time, but instead the number of minutes left in the period. As a result of this new information, Midway now emphasizes the number of minutes left in the period, allowing teachers to quickly determine what activities are appropriate for the given amount of class time remaining. Furthermore, there is now an additional option for a more compact version of the timebox for a more convenient experience.

# Frictionless Sign-in

{% include post-image.html 
 src="/assets/images/2021-05-15-problem-click-icon.png"
 alt="The midway extension icon is not easy to notice and few teachers knew to click it to sign in"
 caption="Signing in to Midway proved difficult as teachers didn't know they had to click the extension icon to log in."
%}

During the onboarding process, users must sign in with their Google account to complete the sign up process. However, all too often, users are unable to figure out how to sign in and don't realize that they need to activate the browser action/popup. Consequently, they are unable to properly use Midway. 

{% include post-image.html 
 src="/assets/images/2021-05-15-sign-in-welcome.png"
 alt="The Chrome Extension Midway welcome page with the sign in feature"
 caption="Signing in to Midway was revamped to display the sign in page immediately after installing Midway, which meant that there was less guesswork in figuring out how to use Midway."
%}

As an improvement over this situation, Midway now displays the sign in button directly on the onboarding screen, allowing them to sign in without having to find the browser popup. Right after signing in, Midway immediately redirects the user to the welcome screen and displays the timebox. In this way, they can have immediate confirmation of the successful installation of Midway and the timebox.
