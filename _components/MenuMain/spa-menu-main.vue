<template>
  <div class="menu-main">
    <div class="menu-main__wrapper">
      <div class="menu-main__list">
        <a class="menu-main__link" href="/">Home</a>
        <!-- <router-link class="menu-main__link" to="/spa/">Home</router-link> -->
        <router-link class="menu-main__link" to="/news/">News</router-link>
        <a class="menu-main__link" href="/releases/">Releases</a>
        <a class="menu-main__link" href="/artists/">Artists</a>
        <a class="menu-main__link" href="/events/">Events</a>
        <!-- <router-link class="menu-main__link" to="/spa/releases/">Releases</router-link>
        <router-link class="menu-main__link" to="/spa/artists/">Artists</router-link>
        <router-link class="menu-main__link" to="/spa/events/">Events</router-link> -->
        <router-link class="menu-main__link" to="/friends/">Friends</router-link>
        <router-link class="menu-main__link" to="/contacts/">Contacts</router-link>
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
