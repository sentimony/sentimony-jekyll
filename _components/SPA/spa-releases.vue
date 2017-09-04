<template>
  <div>
    <menu-temporary></menu-temporary>
    <releases></releases>
  </div>
</template>

<script>
  var MenuTemporary = require('./menu-temporary.vue');
  var Releases = require('./releases.vue');

  module.exports = {
    components: {
      'menu-temporary': MenuTemporary,
      'releases': Releases
    }
  };
</script>
