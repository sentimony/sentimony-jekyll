---
layout: default
title: Artists
description: Artists of Sentimony Records
permalink: /artists/
og-image: https://content.sentimony.com/assets/img/og-images/sentimony/home.jpg
---

{% for i in site.categories.artists %}
<div>{{i.title}}: {{i.youtube_id}}</div>
{% endfor %}
{% comment %}
{% endcomment %}
