<template>
  <div class="news">
    <h1>News</h1>
    <div class="news__list">
      <p v-for="i in news" class="news__item">
        <router-link :to="i.url" class="news__link" v-if="i.date" v-html="">{{ i.date | formatDate }} @ {{ i.title }}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      news: [
          {
            title: '',
            date: '',
            url: ''
          }
        ]
    }
  },
  created: function () {
    var self = this;
    this.axios.get('https://sentimony-db.firebaseio.com/news.json').then(function (response) {
      self.news = response.data;
      console.log('firebase: NEWS catched');
    }).catch(function (error) {
      console.log(error);
    });
  },
  filters: {
    formatDate: function (date) {
      var moment = require('moment');
      if (date) {
        return moment(String(date)).format('DD MMM YYYY');
      }
    }
  }
};
</script>

<style lang="scss?outputStyle=compressed">
.news {
}
</style>
