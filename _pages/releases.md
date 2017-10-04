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
<li>{{ i.mastered_by }} xxxxxxxx</li>
{% endfor %}
</ol>

{% comment %}
{% endcomment %}
