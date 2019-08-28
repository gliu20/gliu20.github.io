---
title: Calculating Weighted Averages of Weighted Averages of Weighted Averages...  
project: gradetree
description: A guide to using Gradetree to calculate both your grades and GPA
---
# About
Gradetree is a utility for calculating grades and GPA, allowing you to assess your performance in school. 

# Disclaimer
Use at your own risk. I cannot guarantee the accuracy of any of the results provided in the calculator. This software comes with no warranty whatsoever.

## How to use
![Screenshot of Gradetree](https:/gliu20.github.io/assets/images/2019-07-12-gradetree-screenshot.png)

### Specifying an assigment
```
# name of assignment
w <term in ratio e.g. if you have three assignments and their respective weights are 1,2,3 then they will be weighed in a 1:2:3 ratio. So the third assignment will be worth 3x the first and the second 2x the first.> (optional)
f <score: e.g. 97/100> (optional if there are sub assignments)
```

### Specifying sub assignments
use multiple `#`s as shown
```
## name of sub assignment
etc..
```

### Example
Demonstrates an example where Tests are worth 40% of quarter, Quizzes 40%, and Participation is worth 20% 
(indentation is optional). And yes, decimal percentages are acceptable. 
```
# Quarter grade
  ## Test average
  w 40
    ### test 1
    f 97/100
    ### test 2
    f 99/100
    ### test 3
    f 92/100
  ## Quiz average
  w 40
    ### quiz 1
    f 91/100
    ### quiz 2
    f 100/100
    ### quiz 3
    f 98/100
  ##  Participation
  w 20
  f 19.5/20

```
Click the Grade button to grade.


