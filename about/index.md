---
layout: construction
---
{% capture content %}
## About me
Hey I'm George Liu, a pun-maker, product-minded Software developer, and Computer Engineering student at the University of Toronto working at the intersection of tech, design, and product thinking.

{% include contact-info.html %}

{% endcapture %}

{% assign content = content | markdownify %}

{% include text-content.html 
    content=content
%}
