<template>
  <div>
    <menu-temporary></menu-temporary>
    <friends></friends>
  </div>
</template>

<script>
  var MenuTemporary = require('./menu-temporary.vue');
  var Friends = require('./friends.vue');

  module.exports = {
    components: {
      'menu-temporary': MenuTemporary,
      'friends': Friends
    }
  };
</script>
