<template>
  <div class="artists">
    <h3>Artists</h3>
    <div class="artists__list">
      <div v-for="i in artists.data" class="artists__item">
        <p>
          <a :href="i.url">
            <img class="artist-list__photo"
              :src="'https://content.sentimony.com/assets/img/artists/small/' + i.slug + '.jpg'"
              :alt="i.title"
            >
          </a>
        </p>
        <p class="artist-list__title">
          <a :href="i.url">{{ i.title }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        artists: {
          data: [
            {
              title: '',
              slug: '',
              url: ''
            }
          ]
        }
      }
    },
    created: function () {
      var self = this;
      this.axios.get('/assets/data/artists.json').then(function (response) {
        self.artists = response.data.artists;
      }).catch(function (error) {
        console.log(error);
      });
    }
  };
</script>

<style>
  .artists__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
