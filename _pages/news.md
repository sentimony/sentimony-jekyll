---
layout: page
title: News
description: News of Sentimony Records
permalink: /news/
og-image: https://content.sentimony.com/assets/img/og-images/sentimony/home.jpg
---

{% for i in site.data.News.config %}
[{{ i.date | date_to_long_string }} - {{ i.title }}]({{ i.url }})
{% endfor %}
