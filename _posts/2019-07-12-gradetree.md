---
title: Calculating Weighted Averages of Weighted Averages of Weighted Averages...  
project: gradetree
description: A guide to using Gradetree to calculate both your grades and GPA
---
# About
Gradetree is a utility for calculating grades and GPA, allowing you to assess your performance in school. Gradetree works exceptionally on nested grades. For example, your history grade might consist of quarters that each account for 20% of your grade along with a final that counts for 20% of your grade. Each quarter has tests, quizzes, and participation, which might account for 50%, 30%, and 20% respectively. Large projects may also have subassignments that each account for a certain percentage of the whole. With so many variables, it may be difficult to accurately and quickly calculate your scores. But with Gradetree, the process is easy, fast, and convenient.

## Frequently Asked Questions

### Why the name Gradetree?
Gradetree alludes to the fact that nested grades can be formed into a tree. Each score average can be calculated at each leaf node, which are in turn propagated up. Eventually each level's scores are calculated, resulting in a neat summary of your performance. 

### Unweighted or weighted GPA?
Gradetree uses the standard unweighted GPA scale, one that you might see at colleges. This means that both A and A+ are a 4.0. You cannot get higher than that. If you want to use a weighted scale, fork me and shoot me a pull request! Check out the `grades.js` under the libs section of the [gradetree repo](https://github.com/gliu20/gradetree).

### Why is GPA inaccurate?
That may be the case. Gradetree does not take into account credits or course difficulty level. In addition, when Gradetree calculates GPA, it does interpolation of the GPA scale, which may lead to less accurate results.

# Disclaimer
Use at your own risk. I cannot guarantee the accuracy of any of the results provided in the calculator. This software comes with no warranty whatsoever.

## How to use
![Screenshot of Gradetree](https:/gliu20.github.io/assets/images/2019-07-12-gradetree-screenshot.png)

### Specifying an assigment
* `w` stands for the weight of the assignment. e.g. if you have three assignments and their respective weights are 1,2,3 then they will be weighed in a 1:2:3 ratio. So the third assignment will be worth 3x the first and the second 2x the first.
* `f` stands for fraction. As in what fraction of points did you earn? A 95/100?

Here's a demonstration:
```
# name of assignment
w <term in ratio> (optional)
f <score: e.g. 97/100> (optional if there are sub assignments)
```

### Specifying sub assignments
Use 1 `#`s if it is the root assignment

Use 2 `#`s if it is the sub assignment of the root assignment

Use 3 `#`s if it is the sub assignment of the sub assignment of the root assignment

etc...

View it just like markdown headers; you specify a main heading with `#`, a subheading with `##`, and a subsubheading with `###`.
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


