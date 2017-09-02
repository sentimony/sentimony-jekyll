<template>
  <div class="temporary-menu">
    <div class="temporary-menu__wrapper">
      <router-link class="temporary-menu__link" to="/spa/">Home</router-link>
      <router-link class="temporary-menu__link is-disabled" to="/news/">News</router-link>
      <router-link class="temporary-menu__link" to="/spa/releases/">Releases</router-link>
      <router-link class="temporary-menu__link" to="/spa/artists/">Artists</router-link>
      <router-link class="temporary-menu__link" to="/spa/events/">Events</router-link>
      <router-link class="temporary-menu__link is-disabled" to="/friends/">Friends</router-link>
      <router-link class="temporary-menu__link is-disabled" to="/contacts/">Contacts</router-link>
    </div>
  </div>
</template>

<script>
  module.exports = {
  };
</script>

<style>
  .temporary-menu {
    padding: 0 .6em;
  }

  .temporary-menu__wrapper {
    border-bottom: 1px solid rgba(255,255,255,.3);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: .3em;
  }

  .temporary-menu__link {
    padding: .25em .50em;
    border: 1px solid #fff;
    border-radius: 6px;
    margin: 0 .1em .3em;
  }

  .temporary-menu__link.is-disabled {
    opacity: .5;
  }
</style>
