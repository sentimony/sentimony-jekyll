<template>
  <div class="events">
    <h1>Events</h1>
    <div class="events__list">
      <p v-for="i in sortByDate" class="events__item">
        <router-link :to="'/event/' + i.slug" class="events__link" v-if="i.date">{{ i.date | formatDate }} @ {{ i.title }}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
var sortBy = require('lodash/sortBy');

module.exports = {
  data: function () {
    return {
      events: {
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
    var self = this;
    this.axios.get('https://sentimony-db.firebaseio.com/events.json').then(function (response) {
      self.events = response.data;
      console.log('firebase: EVENTS catched');
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
  },
  computed: {
    sortByDate () {
      return sortBy(this.events, 'date').reverse()
    }
  }
};
</script>

<style lang="scss?outputStyle=compressed">
.events {
}
</style>
