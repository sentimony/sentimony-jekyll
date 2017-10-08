---
layout: default
title: Releases
description: Releases of Sentimony Records
permalink: /releases/
og-image: https://content.sentimony.com/assets/img/og-images/sentimony/home.jpg
---

<ol>
{% assign releases = site.categories.releases | sort: 'title' %}
{% for i in releases %}
<li>{{ i.total_time }} ZZZZZZZZ</li>
{% endfor %}
</ol>

{% comment %}
{% endcomment %}
