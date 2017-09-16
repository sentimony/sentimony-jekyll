<template>
  <div class="release-page">
    <svg-triangle></svg-triangle>
    <div>{{ $route.params.slug }}</div>
    <!-- <div>{{ post.title }}</div> -->
  </div>
</template>

<script>
  var SvgTriangle = require('./svg-triangle.vue');

  module.exports = {
    components: {
      'svg-triangle': SvgTriangle
    },

    // data: function () {
    //   return {
    //     artist: [{
    //       slug: '',
    //       title: ''
    //     }]
    //   };
    // },

    // created: function () {
    //   this.fetchData();
    // },

    // methods: {
    //   fetchData: function () {
    //     var self = this;
    //     var postSlug = this.$route.params.slug;
    //     var postPage = this.$route.params.page;

    //     if (!self.$store.state.content[postPage].length) {
    //       this.axios.get('/api/content/' + postPage + '/' + postSlug, {}).then(function (response) {
    //         self.$data.post = response.data.data;
    //         self.preloader = false;
    //       });
    //     } else {
    //       self.$store.state.content[postPage].forEach(function (item) {
    //           if (item.slug === postSlug) {
    //             self.post = item;
    //             self.preloader = false;

    //             self.addMetadata(item.meta);
    //           }
    //       });
    //     }
    //   },

    //   addMetadata: function (val) {
    //     document.title = val.title;
    //     var meta = document.getElementsByTagName('meta');
    //     var link = document.getElementsByTagName('link');

    //     for (var key in val) {
    //       for (var i = 0; i < meta.length; i++) {
    //         if (meta[i].name.toLowerCase() === key) {
    //           meta[i].content = val[key];
    //         }
    //       }
    //     }

    //     for (var j = 0; j < link.length; j++) {
    //       if (link[j].rel.toLowerCase() === 'canonical') {
    //         link[j].href = val.canonical_url;
    //       }
    //     }
    //   }
    // }
  };
</script>

<style lang="scss?outputStyle=compressed">
  .release-page {
  }
</style>
