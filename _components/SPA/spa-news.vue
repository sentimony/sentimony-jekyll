<template>
  <div>
    <news></news>
  </div>
</template>

<script>
  var News = require('./news.vue');

  module.exports = {
    components: {
      'news': News
    }
  };
</script>
