<template>
  <div>
    <temporary-menu></temporary-menu>
    <hero></hero>
    <about></about>
  </div>
</template>

<script>
  var TemporaryMenu = require('./temporary-menu.vue');
  var Hero = require('./hero.vue');
  var About = require('./about.vue');

  module.exports = {
    components: {
      'temporary-menu': TemporaryMenu,
      'hero': Hero,
      'about': About
    }
  };
</script>
