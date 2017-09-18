<template>
  <div class="release-page">
    <h1 v-if="release.title" class="page-release__title">{{ release.title }}</h1>
  </div>
</template>

<script>
  var SvgTriangle = require('./svg-triangle.vue');
  var {VueTabs, VTab} = require('../js/vue-tabs.min.js');
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
              slug: null,
              title: null
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
    }
  }
</script>

<style lang="scss?outputStyle=compressed">
  .release-page {
  }
</style>
