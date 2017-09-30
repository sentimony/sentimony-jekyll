<template>
  <div>
    <events></events>
  </div>
</template>

<script>
var Events = require('./events.vue');

module.exports = {
  components: {
    'events': Events
  }
};
</script>
