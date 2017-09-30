<template>
  <div class="artist-page">

    <div class="page-artist">
      <svg-triangle></svg-triangle>
      <div class="page-artist__wrapper">

        <div class="page-artist__media">
          <div class="page-artist__photo">
            <a v-if="artist.photo" class="page-artist__photo-link" :href="'https://content.sentimony.com/assets/img/artists/large/' + artist.slug + '.jpg'">
              <img class="page-artist__photo-img"
                :src="'https://content.sentimony.com/assets/img/artists/small/' + artist.slug + '.jpg'"
                :srcset="'https://content.sentimony.com/assets/img/artists/medium/' + artist.slug + '.jpg 1x, https://content.sentimony.com/assets/img/artists/medium-retina/' + artist.slug + '.jpg 2x'"
                :alt="artist.title + ' Medium Thumbnail'"
              >
            </a>
            <div v-else class="page-artist__photo-coming">Photo<br>coming soon</div>
          </div>
          <div class="page-artist__info">
            <div v-if="artist.style" class="page-artist__small-info">
              <div class="page-artist__style">{{ artist.style }}</div>
            </div>
            <h1 v-if="artist.title" class="page-artist__title">{{ artist.title }}</h1>
            <div v-if="artist.name" class="page-artist__small-info">Name: {{ artist.name }}</div>
            <div v-if="artist.location" class="page-artist__small-info">Location: {{ artist.location }}</div>
          </div>
        </div>

        <div class="page-artist__player-tabs">
          <vue-tabs>
            <v-tab v-if="artist.youtube_id" title="YouTube" icon="icon-youtube">
              <div class="iframe-holder">
                <div class="iframe-holder__ratio">
                  <iframe
                    class="iframe-holder__iframe"
                    :src="'https://www.youtube.com/embed/videoseries?list=' + artist.youtube_id"
                    :title="artist.title + ' YouTube Iframe'"
                  ></iframe>
                </div>
              </div>
            </v-tab>
            <v-tab v-if="artist.soundcloud_id" title="SoundCloud" icon="icon-soundcloud">
              <iframe
                :src="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/' + artist.soundcloud_id + '&amp;color=00aabb&amp;hide_related=true&amp;show_comments=true&amp;show_user=false&amp;sharing=false&amp;show_bpm=true'"
                :title="artist.title + ' SoundCloud Iframe'"
                style="width:100%;height:500px;border:none;display:block"
              ></iframe>
            </v-tab>
            <v-tab v-if="artist.facebook" title="Facebook" icon="icon-facebook">
              <!-- TODO: What is appId ??? -->
              <iframe
                class="facebook-widget facebook-widget--size-s"
                :src="'https://www.facebook.com/plugins/page.php?href=' + artist.facebook + '%2F&tabs&width=287&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=197035617008842'"
                :title="artist.title + ' Facebook Mobile Iframe'"
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
              ></iframe>
              <iframe
                class="facebook-widget facebook-widget--size-m"
                :src="'https://www.facebook.com/plugins/page.php?href=' + artist.facebook + '%2F&tabs&width=500&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=197035617008842'"
                :title="artist.title + ' Facebook Desktop Iframe'"
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
              ></iframe>
            </v-tab>
            <v-tab v-if="artist.discogs" title="Discography" icon="icon-discogs">
              <a :href="artist.discogs" target="_blank" rel="noopener" style="display:flex;align-items:center">
                <img src="/assets/img/svg-icons/discogs.svg" style="width:20px;margin-right:.4em">
                <span>Discogs</span>
              </a>
            </v-tab>
          </vue-tabs>
        </div>

      </div>
    </div>

    <!-- <div class="page-artist-content">
      <div class="page-artist-content__wrapper">
        <disqus-comments></disqus-comments>
      </div>
    </div> -->

  </div>
</template>

<script>
var SvgTriangle = require('./svg-triangle.vue');
var {VueTabs, VTab} = require('vue-nav-tabs/dist/vue-tabs.min.js');
// var DisqusComments = require('./disqus-comments.vue');

module.exports = {
  components: {
    'svg-triangle': SvgTriangle,
    'vue-tabs': VueTabs,
    'v-tab': VTab,
    // 'disqus-comments': DisqusComments
  },
  data: function () {
    return {
      artist: [
        {
          slug: null,
          title: null
        }
      ]
    }
  },
  created: function () {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function () {
      var self = this;
      var id = this.$route.params.slug;
      this.axios.get('https://sentimony-db.firebaseio.com/artists/' + id + '.json').then(function (response) {
        self.artist = response.data;
        console.log('firebase: ARTIST ' + id + ' catched');
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="scss?outputStyle=compressed">
.artist-page {
}
</style>
