---
title: A Blog from a High School Self-taught Developer
description: Get the latest updates from George Liu regarding his recent projects -- from his Midway Chrome Extension to his Fractal viewer to his productivity tool Timescend
---

<header class="page-header">
      <h1 class="project-name">Latest Posts</h1>
      <h1 class="project-tagline">By George Liu</h1>
</header>

<section class="main-content">
  {% for post in site.posts %}
    <article class="card">
      <h2 class="exempt"><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <h3 class="exempt">{{ post.date | date_to_string }}</h3>
      <p>{{ post.excerpt }}</p>
    </article>
  {% endfor %}
</section>
