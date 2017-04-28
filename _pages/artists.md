---
layout: page
title: Artists
description: Artists of Sentimony Records
permalink: /artists/
og-image: https://content.sentimony.com/assets/img/og-images/sentimony/home.jpg
---

{% for i in site.categories.artists reversed %}
  {% if i.youtube_id %}
  [{{ i.title }}]({{ i.url }})
  {% endif %}
{% endfor %}
