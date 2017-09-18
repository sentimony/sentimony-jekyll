<template>
  <div class="menu-mobile">
    <div class="menu-mobile__list">
      <a class="menu-mobile__link" href="/">Home</a>
      <a class="menu-mobile__link" href="/news/">News</a>
      <a class="menu-mobile__link" href="/releases/">Releases</a>
      <a class="menu-mobile__link" href="/artists/">Artists</a>
      <a class="menu-mobile__link" href="/events/">Events</a>
      <a class="menu-mobile__link" href="/friends/">Friends</a>
      <a class="menu-mobile__link" href="/contacts/">Contacts</a>
    </div>
  </div>
</template>

<script>
  module.exports = {
  };
</script>

<style lang="scss?outputStyle=compressed">
  .menu-mobile {
    position: relative;
    position: fixed;
    width: 280px;
    height: 100%;
    top: 0;
    left: 100%;

    &__list {
      background-color: rgba(#000,1);
      box-sizing: border-box;
      padding: 18px 0;
    }

    &__link {
      display: block;
      padding: 18px 10px;
      box-sizing: border-box;
      transition: background-color .1s ease;

      &:hover {
        background-color: rgba(#fff,.1);
      }

      &:active {
        background-color: rgba(#fff,.2);
      }
    }
  }
</style>
