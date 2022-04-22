---
name: Punderline
description: A mix of comics, jokes, and punchlines plus puns!
redirect_from:
 - /projects/punderline.html
 - /projects/punderline/
date: 2020-02-05
---

{% capture pun_description %}
    
# What is Punderline?
Punderline is a webcomic that consists of a unique mix of comics, jokes, and punchlines combined with puns that are published on a weekly basis on every Friday. Topics range from animals to physics to math. 

![Punderline: Puns on every Friday](/assets/puns/punderline banner.jpg)

# About the name
Punderline is a pun in and of itself! It is named after the fact that nearly every comic has a pun that is underlined. Punderlined!

# But what's a pun?
For those of you who don't already know, puns are jokes that exploit different meanings of a word for a humorous effect.

    {% include text-content-paginator.html %}
    {% include post-comments.html %}
{% endcapture %}

{% include text-content.html 
    content=pun_description
    %}


{% assign category_posts = site.puns | sort: 'date' | reverse %}

{% include posts-recommended.html 
    view_type="horizontal"
    posts=category_posts
    topk=10
    count=3
    heading="Pun highlights"
    hide_view_more=true
    use_post_tags=true
%}

{% include posts-snapshot-vertical.html
    heading="All Punderline puns"
    posts=category_posts
    hide_view_more=true
    use_post_tags=true
    %}