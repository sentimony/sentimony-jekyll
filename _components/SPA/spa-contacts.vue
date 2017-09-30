<template>
  <div>
    <contacts></contacts>
  </div>
</template>

<script>
var Contacts = require('./contacts.vue');

module.exports = {
  components: {
    'contacts': Contacts
  }
};
</script>
