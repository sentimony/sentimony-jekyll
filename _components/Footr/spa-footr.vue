<template>
  <div class="footr">

    <spa-menu-main></spa-menu-main>
    <menu-social></menu-social>

    <div class="footr__copyright">
      <div>2006 - 2017 © Sentimony Records</div>
      <div>All Rights Reserved</div>
      <div>
        <img class="footr__copyright-logo" src="/assets/img/svg-icons/sentimony-records-logo.svg" alt="Sentimony Records Logo SVG">
      </div>
    </div>

    <div class="footr__powered">
      <div>Web development by <a href="https://ihororlovskyi.com" target="_blank" rel="noopener">Ihor Orlovskyi</a></div>
      <div>Design by <a href="https://rooster-chess.netlify.com" target="_blank" rel="noopener">Anton Pivniuk</a></div>
    </div>

  </div>
</template>

<script>
  var SpaMenuMain = require('./spa-menu-main.vue');
  var MenuSocial = require('./menu-social.vue');

  module.exports = {
    components: {
      'spa-menu-main': SpaMenuMain,
      'menu-social': MenuSocial
    }
  };
</script>

<style>
  .footr {
  }
</style>
