<template>
  <div class="menu-temporary">
    <div class="menu-temporary__wrapper">
      <router-link class="menu-temporary__link" active-class="is-selected" to="/" exact>Home</router-link>
      <router-link class="menu-temporary__link" active-class="is-selected" to="/news/">News</router-link>
      <router-link class="menu-temporary__link" active-class="is-selected" to="/releases/">Releases</router-link>
      <router-link class="menu-temporary__link" active-class="is-selected" to="/artists/">Artists</router-link>
      <router-link class="menu-temporary__link" active-class="is-selected" to="/events/">Events</router-link>
      <router-link class="menu-temporary__link" active-class="is-selected" to="/friends/">Friends</router-link>
      <router-link class="menu-temporary__link" active-class="is-selected" to="/contacts/">Contacts</router-link>
    </div>
  </div>
</template>

<script>
  module.exports = {
  };
</script>

<style lang="scss?outputStyle=compressed">
  @import '../../_scss/ui/_variables.scss';

  .menu-temporary {
    padding: 0 .6em;

    &__wrapper {
      border-bottom: 1px solid rgba(#fff,.3);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-top: .3em;
      max-width: 1278px;
      margin: 0 auto;
    }

    &__link {
      padding: .25em .50em;
      border: 1px solid #fff;
      border-radius: 6px;
      margin: 0 .1em .3em;
      background-color: rgba(#fff,.0);
      transition: background-color .2s ease;

      &.is-selected,
      &:hover {
        background-color: rgba(#fff,.1);
        background-color: $colorBgLight;
      }
    }
  }
</style>
