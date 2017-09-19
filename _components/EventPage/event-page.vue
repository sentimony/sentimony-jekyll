<template>
  <div class="event-page">

    <!-- <svg-triangle></svg-triangle> -->

    <h1>{{ event.title }}</h1>
    <p v-if="event.date">Date: {{ event.date | formatDate }}</p>

  </div>
</template>

<script>
  // var SvgTriangle = require('./svg-triangle.vue');
  // var {VueTabs, VTab} = require('../js/vue-tabs.min.js');
  // var DisqusComments = require('./disqus-comments.vue');

  module.exports = {
    components: {
      // 'svg-triangle': SvgTriangle,
      // 'vue-tabs': VueTabs,
      // 'v-tab': VTab,
      // 'disqus-comments': DisqusComments
    },
    data: function () {
      return {
        event: {
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
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData: function () {
        var self = this;
        var id = this.$route.params.slug;
        this.axios.get('https://sentimony-db.firebaseio.com/events/data/' + id + '.json').then(function (response) {
          self.event = response.data;
          console.log('firebase: EVENT ' + id + ' catched');
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
  .event-page {
  }
</style>
