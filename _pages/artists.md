---
layout: default
title: Artists
description: Artists of Sentimony Records
permalink: /artists/
og-image: https://content.sentimony.com/assets/img/og-images/sentimony/home.jpg
---

{% comment %}
{% for i in site.categories.artists %}
<div>{{i.slug}}</div>
<div>{{i.title}}</div>
{% endfor %}
{% endcomment %}
