<template>
  <div>
    <release-page></release-page>
  </div>
</template>

<script>
  var ReleasePage = require('./release-page.vue');

  module.exports = {
    components: {
      'release-page': ReleasePage
    }
  };
</script>
