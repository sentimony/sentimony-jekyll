<template>
  <div>
    <artists></artists>
  </div>
</template>

<script>
  var Artists = require('./artists.vue');

  module.exports = {
    components: {
      'artists': Artists
    }
  };
</script>
