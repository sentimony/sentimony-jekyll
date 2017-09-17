---
layout: default
title: Artists
description: Artists of Sentimony Records
permalink: /artists/
og-image: https://content.sentimony.com/assets/img/og-images/sentimony/home.jpg
---

<ol>
{% assign artists = site.categories.artists | sort: 'title' %}
{% for i in artists %}
<li>{{ i.bandcamp }} xxxxxxxx</li>
{% endfor %}
</ol>

{% comment %}
{% endcomment %}
