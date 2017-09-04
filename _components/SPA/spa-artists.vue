<template>
  <div>
    <menu-temporary></menu-temporary>
    <artists></artists>
  </div>
</template>

<script>
  var MenuTemporary = require('./menu-temporary.vue');
  var Artists = require('./artists.vue');

  module.exports = {
    components: {
      'menu-temporary': MenuTemporary,
      'artists': Artists
    }
  };
</script>
