<template>
  <div class="release-page">

    <div class="page-release">
      <svg-triangle></svg-triangle>
      <div class="page-release__wrapper">

        <div class="page-release__media">
          <div class="page-release__cover">
            <a v-if="release.cover" class="page-release__cover-link" :href="'https://content.sentimony.com/assets/img/releases/large/' + release.cat_no + '/' + release.slug +'.jpg'">
              <img class="page-release__cover-img"
                :src="'https://content.sentimony.com/assets/img/releases/small/' + release.cat_no + '/' + release.slug +'.jpg'"
                :srcset="'https://content.sentimony.com/assets/img/releases/medium/' + release.cat_no + '/' + release.slug +'.jpg 1x, https://content.sentimony.com/assets/img/releases/medium-retina/' + release.cat_no + '/' + release.slug +'.jpg 2x'"
                :alt="release.title + 'Medium Thumbnail'" 
              >
            </a>
            <div v-else class="page-release__cover-coming">Artwork<br>in progress</div>
          </div>
          <div class="page-release__info">
            <div class="page-release__small-info">
              <span v-if="release.cat_no" class="page-release__catalog-number">{{ release.cat_no }}</span>
              <span v-if="release.coming_soon"> | Coming at 2017</span>
              <span v-else-if="release.date"> | {{ release.date | formatDate }}</span>
            </div>
            <h1 v-if="release.title" class="page-release__title">{{ release.title }}</h1>
            <div v-if="release.link_applemusic" class="page-release__small-info">{{ release.style }}</div>
            <div v-if="release.link_applemusic" class="page-release__small-info">Get it:</div>
            <div>
              <a v-if="release.link_applemusic" class="page-release__applemusic-btn"
                :href="release.link_applemusic"
                target="_blank" rel="noopener"
              >
                <img class="page-release__applemusic-btn-img" src="/assets/img/svg-icons/apple-music.svg?01" alt="Apple Music Icon">
                <span class="page-release__applemusic-btn-text">Apple Music</span>
              </a>
              <a v-if="release.link_googleplay" class="page-release__googlemusic-btn"
                :href="release.link_googleplay"
                target="_blank" rel="noopener"
              >
                <img class="page-release__googlemusic-btn-img" src="/assets/img/svg-icons/google-play.svg?01" alt="Google Play Icon">
                <span class="page-release__googlemusic-btn-text">Google Play</span>
              </a>
            </div>
          </div>
        </div>

        <div class="page-release__player-tabs">
          <vue-tabs>

            <v-tab title="Bandcamp" icon="icon-bandcamp">
              <div class="page-release__bandcamp-player">
                <div v-if="release.coming_soon" class="page-release__bandcamp-player-coming">Music<br>is coming</div>
                <iframe
                  v-if="release.bandcamp_id"
                  class="page-release__bandcamp-player-iframe"
                  :src="'https://bandcamp.com/EmbeddedPlayer/album=' + release.bandcamp_id + '/size=large/bgcol=333333/linkcol=4ec5ec/artwork=none/transparent=true/'"
                  seamless
                  :title="release.title + ' Bandcamp Iframe'"
                ></iframe>
              </div>
            </v-tab>

            <v-tab v-if="release.youtube_playlist_id" title="YouTube" icon="icon-youtube">
              <div class="page-release__youtube-player">
                <iframe
                  class="page-release__youtube-player-iframe"
                  :src="'https://www.youtube.com/embed/videoseries?list=' + release.youtube_playlist_id"
                  :title="release.title + ' YouTube Iframe'"
                ></iframe>
              </div>
            </v-tab>

          </vue-tabs>
        </div>

      </div>
    </div>

    <div class="page-release-content">
      <div class="page-release-content__wrapper">
      </div>
    </div>

    <div class="page-release-content">
      <div class="page-release-content__wrapper">
      </div>
    </div>

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
        release: {
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
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData: function () {
        var self = this;
        var id = this.$route.params.slug;
        this.axios.get('https://sentimony-db.firebaseio.com/releases/data/' + id + '.json').then(function (response) {
          self.release = response.data;
          console.log('firebase: RELEASE ' + id + ' catched');
        }).catch(function (error) {
          console.log(error);
        });
      }
    },
    filters: {
      formatDate: function (date) {
        var moment = require('moment');
        if (date) {
          return moment(String(date)).format('DD MMM YYYY');
        }
      }
    }
  }
</script>

<style lang="scss?outputStyle=compressed">
  .release-page {
  }
</style>
