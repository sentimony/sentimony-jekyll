<template>
  <div>
    <menu-temporary></menu-temporary>
    <events></events>
  </div>
</template>

<script>
  var MenuTemporary = require('./menu-temporary.vue');
  var Events = require('./events.vue');

  module.exports = {
    components: {
      'menu-temporary': MenuTemporary,
      'events': Events
    }
  };
</script>
