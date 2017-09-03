<template>
  <div>
    <artist-page></artist-page>
  </div>
</template>

<script>
  var ArtistPage = require('./artist-page.vue');

  module.exports = {
    components: {
      'artist-page': ArtistPage
    }
  };
</script>
