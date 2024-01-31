---
layout: archive
title: "My Work"
permalink: /publications/
author_profile: true
---

I hope to publish the results of my bachelor's thesis in Cryptography and future papers in this domain here soon.

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
