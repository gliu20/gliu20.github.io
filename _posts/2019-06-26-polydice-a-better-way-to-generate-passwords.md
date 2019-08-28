---
title: The State of Passwords and A Better Way to Generate and Remember Secure Passwords
description: Introducing a new tool to generate secure passwords
project: polydice
---

Passwords have become increasingly prevalent and complex. Indeed, the average user has around 90 accounts to manage. With so many accounts, users tend to rely on short, simple, and ineffective passwords, often reusing them on many accounts. 

# Incomplete Solutions
To address this issue, people have developed several solutions:
1. OAuth2 -- Users can authenticate by signing in with their Google, Facebook, Twitter, or Github account. Through these means, users only need to remember one password: that of the password provider. 
2. Password-less logins -- Users sign in by clicking a link in their email. While these systems seem promising and don't require too many changes, they encourage users to click on links (which may lead to accidental clicking of malware) and are also limited in its prevalence.
3. Security keys -- Although they are designed to be replacements to passwords in the future, they still don't have enough prevalence on the web yet. Furthermore, it requires major overhauls to the authentication system, limiting its availability and thus its impact.
4. Password managers -- Despite password managers' increased prevalence and utility, most users overwhelmingly still rely on memorization, fearing that password managers are unsafe or contain backdoors from government agencies.

While these solutions seem promising, they are still second-class citizens on the web. Simply put, passwords are a deep-seated de facto standard of the web, and they are not going away anytime soon.

# Password Reuse
In recent times, password breaches have increased, revealing millions of passwords. As of this year, Have I Been Pawned reported over 340 breaches since its inception. This isn't surprising considering that many people are reusing their passwords, making password spray attacks extremely effective.

While it might be difficult to discourage password reuse or even to improve upon current solutions to passwords, one thing is sure: we can make better passwords if we can find a way to put the right amount of entropy, or randomness, into our passwords. However, humans tend to pick non-random words, often opting for the simple "password123" or its counterparts. If we take humans out of the equation, however, we can guarantee the time it takes for a person to crack a password, ensuring, mathematically speaking, that the password is secure. But these randomly generated passwords are difficult to memorize.

# Polydice
![Screenshot of Polydice](https://gliu20.github.io/assets/images/2019-06-26-polydice-screenshot.png)
An exceptional alternative is diceware, a provably secure system for generating passwords. By rolling dice several times, we can generate a password by searching a reference table for the word that corresponds to your dice roll. In that list, there are 7,776 words. These words can be concatenated together to form your password. To generate a secure password, you would need at least 6 words, resulting in 30 dice rolls. This can be tedious, so I created polydice, software to help you generate a password.

## Using Polydice
![Polydice UI showing how to roll the dice](https://gliu20.github.io/assets/images/2019-06-26-start-rolling.png)
1. Click start rolling on the bottom of the screen.
2. Click stop rolling when you feel like it.
3. Repeat steps 1 and 2 until the you have a sufficient password strength that you are comfortable with
4. To generate a new password, reload the page.
