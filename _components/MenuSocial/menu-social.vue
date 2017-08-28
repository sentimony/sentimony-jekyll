<template>
  <div class="menu-social">
    <div class="menu-social__caption">{{ social.follow }}</div>
    <div class="menu-social__list">
      <a v-for="i in social.data" v-if="i.isVisible" class="menu-social__link" :href="i.url" target="_blank" rel="noopener">
        <img class="menu-social__icon" :src="'/assets/img/svg-icons/' + i.icon + '.svg'" :alt="i.title + ' Icon'">
        <span class="menu-social__tooltip">{{ i.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        social: {
          follow: '',
          data: [
            {
              title: '',
              icon: '',
              url: '',
              isVisible: ''
            }
          ]
        }
      }
    },
    created: function () {
      var self = this;
      this.axios.get('/assets/data/menu-social.json').then(function (response) {
        self.social = response.data.social;
      }).catch(function (error) {
        console.log(error);
      });
    }
  };
</script>

<style>
  .menu-social__caption {
  }
</style>
