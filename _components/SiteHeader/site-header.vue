<template>
  <header class="site-header">
    <div class="site-header__container">

      <logolink/>

      <nav class="site-header__main-menu">
        <a href="/release/zymosis-insight/" class="site-header__main-menu-link is-selected">Releases</a>
      </nav>

      <nav class="site-header__social-menu">
        <a class="site-header__social-menu-link" href="https://sentimony.bandcamp.com" target="_blank" rel="noopener">
          <img class="site-header__social-menu-link-img" src="/assets/img/svg-icons/bandcamp.svg" alt="Bandcamp Icon">
          <span class="site-header__social-menu-link-tooltip">bandcamp</span>
        </a>
        <a class="site-header__social-menu-link" href="https://www.facebook.com/sentimony.records" target="_blank" rel="noopener">
          <img class="site-header__social-menu-link-img" src="/assets/img/svg-icons/facebook.svg" alt="Facebook Icon">
          <span class="site-header__social-menu-link-tooltip">facebook</span>
        </a>
        <a class="site-header__social-menu-link" href="https://www.youtube.com/c/SentimonyRecordsOfficial" target="_blank" rel="noopener">
          <img class="site-header__social-menu-link-img" src="/assets/img/svg-icons/youtube.svg" alt="YouTube Icon">
          <span class="site-header__social-menu-link-tooltip">youtube</span>
        </a>
      </nav>

    </div>
  </header>
</template>

<script>
  var Logolink = require('./logolink.vue');
  var MenuMain = require('./menu-main.vue');
  var MenuSocial = require('./menu-social.vue');

  module.exports = {
    components: {
      'logolink': Logolink,
      'menu-main': MenuMain,
      'menu-social': MenuSocial
    }
  };
</script>

<style>
  .site-header {
  }
</style>

