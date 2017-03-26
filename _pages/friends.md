---
layout: page
title: Friends
description: Friends of Sentimony Records
permalink: /friends/
og-image: https://content.sentimony.com/assets/img/og-images/sentimony/home.jpg
---

{% for i in site.data.Friends.config %}
{{ i.title }}
{% if i.site %}<a href="{{ i.site }}"><span class="icon-public"></span></a>{% endif %}
{% if i.bandcamp %}<a href="{{ i.bandcamp }}"><span class="icon-bandcamp"></span></a>{% endif %}
{% if i.facebook %}<a href="{{ i.facebook }}"><span class="icon-facebook"></span></a>{% endif %}
{% if i.soundcloud %}<a href="{{ i.soundcloud }}"><span class="icon-soundcloud"></span></a>{% endif %}
{% endfor %}
