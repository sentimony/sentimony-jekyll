<template>
  <div class="releases">
    <h1>Releases</h1>
    <div class="releases__list">
      <div v-for="i in releases.data" class="releases__item">
        <p v-if="i.slug">
          <a :href="'/release/' + i.slug" class="releases__link">
            <img class="releases__photo lazyload"
              :src="'https://content.sentimony.com/assets/img/releases/small/' + i.cat_no + '/' + i.slug + '.jpg'"
              :data-srcset="'https://content.sentimony.com/assets/img/releases/small/' + i.cat_no + '/' + i.slug + '.jpg 1x, https://content.sentimony.com/assets/img/releases/small-retina/' + i.cat_no + '/' + i.slug + '.jpg 2x'"
              :alt="i.title + ' Small Thumbnail'"
            >
          </a>
        </p>
        <p class="releases__title">
          <a :href="'/release/' + i.slug">{{ i.title }}</a>
        </p>
      </div>
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
              slug: '',
              cat_no: ''
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

<style lang="scss?outputStyle=compressed">
  @import '../../_scss/ui/_variables.scss';

  .releases {
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
