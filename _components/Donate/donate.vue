<template>
  <div class="donate">
    <div class="donate__wrapper">
      <p>Recently all Sentimony Records releases available for free download.<br>We will be grateful for your feedback at <a href="https://sentimony.bandcamp.com" target="_blank" rel="noopener">Bandcamp</a>.</p>
      <p>Donations are very welcome!<br>It is not an easy mission to keep the free music flowing.</p>
      <p>{{ donateThanks }}</p>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        donateThanks: 'Huge Thanks for Support!'
      }
    }
  };
</script>

<style>
  .donate {
  }
</style>
