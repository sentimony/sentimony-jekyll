<template>
  <div>
    <temporary-menu></temporary-menu>
    <h2>SPA Home</h2>
    <p>Sit harum eveniet, unde amet ex. Quae, temporibus, doloremque. Alias harum nemo repudiandae commodi, consequuntur asperiores obcaecati tempore tenetur aliquam impedit quos ut adipisci facere, quidem enim expedita quae aut necessitatibus vero.</p>
    <p>Recusandae adipisci. Id alias officiis, possimus reprehenderit iste sequi facilis quaerat nulla praesentium saepe unde nam dolor quod sit asperiores veritatis perferendis eum quam hic, in soluta voluptatibus optio, amet. Esse!</p>
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
