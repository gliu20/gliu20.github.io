---
title: What I learned from hacking Google Chrome
description: I never expected to find a medium severity security bug, much less at 18 years old with little background in ethical hacking. Discovering the vulnerability as a complete beginner changed the way I thought about bug bounty and learning. Here's what I discovered.
image: /assets/images/2021-10-05-google-chrome-hack-cover.png
image_caption: Photo created by me
image_alt: Image of a terminal window with the words "What I learned from hacking Google Chrome." In the top right corner, the text "CVE-2021-30582" can be seen.
---

I’m just a regular engineering student. I mean, sure, I like watching random educational youtube videos, using computers, and programming for fun, but I mean, hey, that’s why I’m in ECE. Yet, I’m not a hacker, nor do I have the skills to even remotely consider myself one. And even despite the plethora of reasons I should fail, I managed to do what I thought I could never do.

***

It started near the end of the school year, just before I was about to be swamped by finals season. I was thinking about how browsers like Firefox or Chrome could improve privacy. I remembered hearing somewhere that a design flaw in browsers allowed malicious websites to infer the browser history of unsuspecting visitors. It worked because any website could apply different styles depending on whether a link was visited or unvisited (in other words, whether it was in a user’s history). Then, using code, they could check which links were visited simply by checking the style of each link. It was a serious enough risk that major browsers had long fixed this issue. 

 And I remember sitting at my desk seriously doubting if I could find a similar bug. Real ethical hackers would know so many more advanced techniques and tools than I would. Given that Google Chrome is such a popular browser, I didn’t think that I’d find anything new, especially since so many security researchers were working on finding these bugs.

I’ve no idea why, but I decided to press on and find ways in which visited links exhibit different behaviour than unvisited links that are detectable using code. I could then exploit this property to create an automated script to probe a user’s browser history. 

I spent hours figuring out different combinations until I remembered a recent video introducing the Web Animations API. It then hit me that I could craft styles that used a transition animation on visited links but not on unvisited links. Then using the Web Animations API, I could determine which links had the animation and thus deduce which links were visited. 

I typed up a proof-of-concept and tested it on Google Chrome on Windows. When I checked the page, I just froze. I tried it again on Linux. And then Microsoft Edge. 

It worked. 

I was thrilled to have found a bug, yet I was absolutely terrified. It wasn’t just the bug’s existence that bothered me, but also that it worked on Microsoft Edge. The thing is that Google Chrome relies on the Chromium engine, which powers almost all major browsers except Firefox and Safari. This meant if a vulnerability worked in both Edge and Chrome, it was likely a Chromium bug. Thus, its effects aren’t limited to just [Google Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=1205981) and [Microsoft Edge](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-30582), but also everywhere Chromium is used, including [Opera](https://security.archlinux.org/ASA-202108-5), Brave, [Vivaldi](https://security.archlinux.org/ASA-202107-74), and [Chrome OS](https://bugs.chromium.org/p/chromium/issues/detail?id=1205981). Even more troubling was the fact that someone like me who knew very little about hacking could find a bug in such a critical part of the web. 

I didn’t know what to do, much less about reporting bugs, and knowing that a company could sue me for disclosing a vulnerability disturbed me. But researching Google’s policy, I felt relieved as they actually rewarded people for finding bugs through their Vulnerability Rewards Program. More importantly, their rules seemed to protect security researchers who did this kind of work. 

Even once I got to the page where I was supposed to actually report the bug, I couldn’t help but think about how I should describe it−I didn’t even know what went in a bug report, let alone one for a security vulnerability. Even just reading previously published security bug reports showed a level of technical depth that I simply didn’t have. But somehow, despite all that, it turned out to be a medium-severity security bug, and I was rewarded $5,000 for finding it.

***

I’m still shocked about finding that vulnerability, but I know that if I hadn’t tried, I definitely never would have found it. I’m well aware that there is survivorship bias for me to say this, and I know it is a cliche, but I really believe that people miss 100% of the shots they don’t take.

I just wanted to get this out there because I think so many people are skilled in their own ways but don’t let themselves recognize it. I was and maybe still am one of these people. But I guess even if people don’t see it in themselves, I hope that people don’t let it hold them back from trying things even if they think they won’t succeed.

One of the things this experience reminds me of is how [A Graduate School Survival Guide: “So long, and thanks for the Ph.D.!”](https://www.cs.unc.edu/~azuma/hitch4.html) describes great Ph.D. students as “delusional.” Although the author spoke only about Ph.D. students, I think it applies to everyone: the people who accomplish things they never expect are the ones who are delusional enough to still be trying, even if all odds seem stacked against them. And I, for one, would be happy to keep trying, even if it means I’d have to be a bit delusional−and hopefully, you would too.
