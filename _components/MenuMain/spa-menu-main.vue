<template>
  <div class="menu-main">
    <div class="menu-main__wrapper">
      <div class="menu-main__list">
        <a class="menu-main__link is-selected" href="/">Home</a>
        <!-- <router-link class="menu-main__link is-selected" to="/spa/">Home</router-link> -->
        <router-link class="menu-main__link is-selected" to="/news/">News</router-link>
        <a class="menu-main__link is-selected" href="/releases/">Releases</a>
        <a class="menu-main__link is-selected" href="/artists/">Artists</a>
        <a class="menu-main__link is-selected" href="/events/">Events</a>
        <!-- <router-link class="menu-main__link is-selected" to="/spa/releases/">Releases</router-link>
        <router-link class="menu-main__link is-selected" to="/spa/artists/">Artists</router-link>
        <router-link class="menu-main__link is-selected" to="/spa/events/">Events</router-link> -->
        <router-link class="menu-main__link is-selected" to="/friends/">Friends</router-link>
        <router-link class="menu-main__link is-selected" to="/contacts/">Contacts</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
  };
</script>

<style>
  .menu-main {
  }
</style>
