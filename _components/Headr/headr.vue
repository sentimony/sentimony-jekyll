<template>
  <header class="headr">
    <div class="headr__container">

      <logolink></logolink>

      <nav class="headr__main-menu">
        <router-link to="/news/" class="headr__main-menu-link" active-class="is-selected">News</router-link>
        <router-link to="/releases/" class="headr__main-menu-link" active-class="is-selected">Releases</router-link>
        <router-link to="/artists/" class="headr__main-menu-link" active-class="is-selected">Artists</router-link>
        <router-link to="/events/" class="headr__main-menu-link" active-class="is-selected">Events</router-link>
        <router-link to="/friends/" class="headr__main-menu-link" active-class="is-selected">Friends</router-link>
        <router-link to="/contacts/" class="headr__main-menu-link" active-class="is-selected">Contacts</router-link>
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

      <router-link to="/releases/" class="headr__mob-menu-button">
        <img class="headr__mob-menu-button-img" src="/assets/img/svg-icons/menu.svg">
      </router-link>

    </div>
  </header>
</template>

<script>
import Logolink from './logolink.vue'

export default {
  components: {
    Logolink
  }
}
</script>

<style lang="scss?outputStyle=compressed">
.headr {
}
</style>

