<template>
  <!-- <a href="/" class="logolink is-selected"> -->
  <router-link to="/" class="logolink" exact-active-class="is-selected" exact>
    <img class="logolink__logo" src="/assets/img/svg-icons/sentimony-records-logo.svg" alt="Sentimony Records Logo SVG">
    <div class="logolink__text">
      <div class="logolink__title">{{ siteTitle }}</div>
      <div class="logolink__description">{{ siteDescription }}</div>
    </div>
  </router-link>
  <!-- </a> -->
</template>

<script>
  module.exports = {
    data: function () {
      return {
        siteTitle: 'Sentimony Records',
        siteDescription: 'Psychedelic Music Label'
      }
    }
  };
</script>

<style lang="scss?outputStyle=compressed">
  .logolink {
  }
</style>
