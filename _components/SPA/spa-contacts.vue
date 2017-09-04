<template>
  <div>
    <menu-temporary></menu-temporary>
    <contacts></contacts>
  </div>
</template>

<script>
  var MenuTemporary = require('./menu-temporary.vue');
  var Contacts = require('./contacts.vue');

  module.exports = {
    components: {
      'menu-temporary': MenuTemporary,
      'contacts': Contacts
    }
  };
</script>
