<template>
  <div class="friends">
    <div class="friends__list">
      <div v-for="i in friends.data" class="friends__item">
        <span class="friends__title">{{ i.title }}</span>
        <a v-if="i.site" :href="i.site" class="friends__site"><span class="icon-public"></span></a>
        <a v-if="i.bandcamp" :href="i.bandcamp" class="friends__link"><span class="icon-bandcamp"></span></a>
        <a v-if="i.facebook" :href="i.facebook" class="friends__link"><span class="icon-facebook"></span></a>
        <a v-if="i.soundcloud" :href="i.soundcloud" class="friends__link"><span class="icon-soundcloud"></span></a>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        friends: {
          data: [
            {
              title: '',
              site: '',
              bandcamp: '',
              facebook: '',
              soundcloud: ''
            }
          ]
        }
      }
    },
    created: function () {
      var self = this;
      this.axios.get('/assets/data/friends.json').then(function (response) {
        self.friends = response.data.friends;
      }).catch(function (error) {
        console.log(error);
      });
    }
  };
</script>

<style>
  .friends {
  }
</style>
