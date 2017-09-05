<template>
  <div>
    <releases></releases>
  </div>
</template>

<script>
  var Releases = require('./releases.vue');

  module.exports = {
    components: {
      'releases': Releases
    }
  };
</script>
