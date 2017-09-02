<template>
  <div>
    <temporary-menu></temporary-menu>
    <h2>SPA Artists</h2>
    <p>Sit harum eveniet, unde amet ex. Quae, temporibus, doloremque. Alias harum nemo repudiandae commodi, consequuntur asperiores obcaecati tempore tenetur aliquam impedit quos ut adipisci facere, quidem enim expedita quae aut necessitatibus vero.</p>
    <p>Sapiente saepe maxime nostrum repellat error delectus, cumque sunt voluptatum ea laborum culpa architecto soluta iusto perspiciatis id iste pariatur suscipit fugit nulla, magnam nisi dolore corporis!</p>
  </div>
</template>

<script>
  var TemporaryMenu = require('./temporary-menu.vue');

  module.exports = {
    components: {
      'temporary-menu': TemporaryMenu
    }
  };
</script>
