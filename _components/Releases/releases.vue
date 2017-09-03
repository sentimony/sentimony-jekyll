<template>
  <div class="releases">
    <h3>Releases</h3>
    <div class="releases__list">
      <p v-for="i in releases.data" class="releases__item">
        <a :href="i.url" class="releases__link">{{ i.date }} - {{ i.title }}</a>
      </p>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        releases: {
          data: [
            {
              title: '',
              date: '',
              url: ''
            }
          ]
        }
      }
    },
    created: function () {
      var self = this;
      this.axios.get('/assets/data/releases.json').then(function (response) {
        self.releases = response.data.releases;
      }).catch(function (error) {
        console.log(error);
      });
    }
  };
</script>

<style>
  .releases {
  }
</style>
