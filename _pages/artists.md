---
layout: default
title: Artists
description: Artists of Sentimony Records
permalink: /artists/
og-image: https://content.sentimony.com/assets/img/og-images/sentimony/home.jpg
---

{% assign artists = site.categories.artists | sort: 'title' %}
{% for i in artists %}
<div>{{i.style}}</div>
{% endfor %}
{% comment %}
{% endcomment %}
