<template>
  <div class="hero">
    <div class="hero__wrapper">
      <div class="hero__title">{{ siteTitle }}</div>
      <div class="hero__description">{{ siteDescription }}</div>
    </div>
  </div>
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
  .hero {
  }
</style>
