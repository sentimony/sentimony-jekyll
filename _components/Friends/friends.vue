<template>
  <div class="friends">
    <h1>Friends</h1>
    <div class="friends__list">
      <p v-for="i in friends" class="friends__item">
        <router-link :to="'/friend/' + i.slug" class="friends__link" v-if="i.title">{{ i.title }}</router-link>
      </p>

      <!-- <p v-for="i in friends" class="friends__item">
        <span class="friends__title">{{ i.title }}</span>
        <a v-if="i.site" :href="i.site" class="friends__site">
           <span class="icon-public"></span>
        </a>
        <a v-if="i.bandcamp" :href="i.bandcamp" class="friends__link">
          <span class="icon-bandcamp"></span>
        </a>
        <a v-if="i.facebook" :href="i.facebook" class="friends__link">
          <span class="icon-facebook"></span>
        </a>
        <a v-if="i.soundcloud" :href="i.soundcloud" class="friends__link">
          <span class="icon-soundcloud"></span>
        </a>
      </p> -->
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
    this.axios.get('https://sentimony-db.firebaseio.com/friends.json').then(function (response) {
      self.friends = response.data;
      console.log('firebase: FRIENDS catched');
    }).catch(function (error) {
      console.log(error);
    });
  }
};
</script>

<style lang="scss?outputStyle=compressed">
.friends {
}
</style>
