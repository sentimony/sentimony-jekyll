---
layout: page
title: Releases
description: Releases of Sentimony Records
permalink: /releases/
og-image: https://content.sentimony.com/assets/img/og-images/sentimony/home.jpg
---

{% for i in site.categories.releases %}
[{{ i.title }}]({{ i.url }})
{% endfor %}
