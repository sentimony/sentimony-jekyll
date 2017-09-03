<template>
  <div class="release-page">
    <svg-triangle></svg-triangle>
    <div>{{ $route.params.slug }}</div>
  </div>
</template>

<script>
  var SvgTriangle = require('./svg-triangle.vue');

  module.exports = {
    components: {
      'svg-triangle': SvgTriangle
    }
  };
</script>

<style lang="scss?outputStyle=compressed">
  .release-page {
  }
</style>
