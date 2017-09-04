<template>
  <div class="menu-main">
    <div class="menu-main__wrapper">
      <div class="menu-main__list">

        <a class="menu-main__link is-selected" href="/">Home</a>
        <a class="menu-main__link is-selected" href="/news/">News</a>
        <a class="menu-main__link is-selected" href="/releases/">Releases</a>
        <a class="menu-main__link is-selected" href="/artists/">Artists</a>
        <a class="menu-main__link is-selected" href="/events/">Events</a>
        <a class="menu-main__link is-selected" href="/friends/">Friends</a>
        <a class="menu-main__link is-selected" href="/contacts/">Contacts</a>

        <!-- <router-link class="menu-main__link is-selected" to="/spa/">Home</router-link>
        <router-link class="menu-main__link is-selected" to="/news/">News</router-link>
        <router-link class="menu-main__link is-selected" to="/releases/">Releases</router-link>
        <router-link class="menu-main__link is-selected" to="/artists/">Artists</router-link>
        <router-link class="menu-main__link is-selected" to="/events/">Events</router-link>
        <router-link class="menu-main__link is-selected" to="/friends/">Friends</router-link>
        <router-link class="menu-main__link is-selected" to="/contacts/">Contacts</router-link> -->

      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
  };
</script>

<style lang="scss?outputStyle=compressed">
  .menu-main {
    margin: 0 auto 2em;

    &__wrapper {
      display: inline-block;
    }

    &__list {
      border: 1px solid rgba(#fff,.1);
      border-width: 1px 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    &__link {
      padding: .6em;
      background-color: rgba(#fff,.0);
      transition: background-color .2s ease;

      // &.is-selected,
      &:hover {
        background-color: rgba(#fff,.1);
      }
    }
  }
</style>
