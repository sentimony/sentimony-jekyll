<template>
  <div>
    <friends></friends>
  </div>
</template>

<script>
  var Friends = require('./friends.vue');

  module.exports = {
    components: {
      'friends': Friends
    }
  };
</script>
