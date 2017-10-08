<template>
  <div>
    <event-page></event-page>
  </div>
</template>

<script>
var EventPage = require('./event-page.vue');

module.exports = {
  components: {
    'event-page': EventPage
  }
};
</script>
