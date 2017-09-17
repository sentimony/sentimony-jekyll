<template>
  <div class="artists">
    <h1>Artists</h1>
    <div class="artists__list">
      <div v-for="i in artists.data" class="artists__item">
        <p v-if="i.slug">
          <!-- <a :href="'/artist/' + i.slug" class="artists__link"> -->
          <router-link :to="'/artist/' + i.slug + '/'" class="artists__link">
            <img class="artists__photo lazyload"
              :src="'https://content.sentimony.com/assets/img/artists/small/' + i.slug + '.jpg'"
              :data-srcset="'https://content.sentimony.com/assets/img/artists/small/' + i.slug + '.jpg 1x, https://content.sentimony.com/assets/img/artists/small-retina/' + i.slug + '.jpg 2x'"
              :alt="i.title + ' Small Thumbnail'"
            >
          </router-link>
          <!-- </a> -->
        </p>
        <p class="artists__title">
          <!-- <a :href="'/artist/' + i.slug">{{ i.title }}</a> -->
          <router-link :to="'/artist/' + i.slug + '/'">{{ i.title }}</router-link>
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
              slug: '',
              title: ''
            }
          ]
        }
      }
    },
    created: function () {
      var self = this;
      this.axios.get('https://sentimony-db.firebaseio.com/artists.json').then(function (response) {
        self.artists = response.data;
        console.log('firebase: ARTISTS catched');
      }).catch(function (error) {
        console.log(error);
      });
    }
  };
</script>

<style lang="scss?outputStyle=compressed">
  @import '../../_scss/ui/_variables.scss';

  .artists {
    max-width: 1278px;
    margin: 0 auto;

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    &__item,
    &__link {
      width: 120px;
    }

    &__photo {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: auto;
      box-shadow: $shadow;
      border-radius: 8px;
    }

    &__title {
      min-height: 44px;
    }
  }
</style>
