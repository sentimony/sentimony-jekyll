<template>
  <header class="headr">
    <div class="headr__container">

      <logolink></logolink>

      <nav class="headr__main-menu">
        <a href="/release/zymosis-insight/" class="headr__main-menu-link is-selected">Releases</a>
        <a href="/artist/irukanji/" class="headr__main-menu-link is-selected">Artists</a>
      </nav>

      <nav class="headr__social-menu">
        <a class="headr__social-menu-link" href="https://sentimony.bandcamp.com" target="_blank" rel="noopener">
          <img class="headr__social-menu-link-img" src="/assets/img/svg-icons/bandcamp.svg" alt="Bandcamp Icon">
          <span class="headr__social-menu-link-tooltip">bandcamp</span>
        </a>
        <a class="headr__social-menu-link" href="https://www.facebook.com/sentimony.records" target="_blank" rel="noopener">
          <img class="headr__social-menu-link-img" src="/assets/img/svg-icons/facebook.svg" alt="Facebook Icon">
          <span class="headr__social-menu-link-tooltip">facebook</span>
        </a>
        <a class="headr__social-menu-link" href="https://www.youtube.com/c/SentimonyRecordsOfficial" target="_blank" rel="noopener">
          <img class="headr__social-menu-link-img" src="/assets/img/svg-icons/youtube.svg" alt="YouTube Icon">
          <span class="headr__social-menu-link-tooltip">youtube</span>
        </a>
      </nav>

      <a href="/release/zymosis-insight/" class="headr__mob-menu-button">
        <img class="headr__mob-menu-button-img" src="/assets/img/svg-icons/menu.svg">
      </a>

    </div>
  </header>
</template>

<script>
  var Logolink = require('./logolink.vue');
  // var MenuMain = require('./menu-main.vue');
  // var MenuSocial = require('./menu-social.vue');

  module.exports = {
    components: {
      'logolink': Logolink,
      // 'menu-main': MenuMain,
      // 'menu-social': MenuSocial
    }
  };
</script>

<style>
  .headr {
  }
</style>

