<template>
  <div>
    <menu-temporary></menu-temporary>
    <!-- <event-page></event-page> -->
  </div>
</template>

<script>
  var MenuTemporary = require('./menu-temporary.vue');
  var EventPage = require('./event-page.vue');

  module.exports = {
    components: {
      'menu-temporary': MenuTemporary,
      'event-page': EventPage
    }
  };
</script>
