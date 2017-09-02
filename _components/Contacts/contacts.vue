<template>
  <div class="contacts">
    <h3>Contacts</h3>
    <p>Let's be in touch:</p>
    <p><a href='mailto:sentimony@gmail.com?subject=Hello, Sentimony Records'>sentimony@gmail.com</a></p>
    <menu-social></menu-social>
  </div>
</template>

<script>
  var MenuSocial = require('./menu-social.vue');

  module.exports = {
    components: {
      'menu-social': MenuSocial
    }
  };
</script>

<style>
  .contacts {
  }
</style>
