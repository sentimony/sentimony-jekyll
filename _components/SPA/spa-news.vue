<template>
  <div>
    <menu-temporary></menu-temporary>
    <news></news>
  </div>
</template>

<script>
  var MenuTemporary = require('./menu-temporary.vue');
  var News = require('./news.vue');

  module.exports = {
    components: {
      'menu-temporary': MenuTemporary,
      'news': News
    }
  };
</script>
