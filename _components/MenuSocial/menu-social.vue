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
      this.axios.get('https://sentimony-db.firebaseio.com/social.json').then(function (response) {
        self.social = response.data;
        console.log('firebase: SOCIAL catched');
      }).catch(function (error) {
        console.log(error);
      });
    }
  };
</script>

<style lang="scss?outputStyle=compressed">
  .menu-social {
    margin: 0 auto 2em;

    &__caption {
    }

    &__list {
      padding-top: 1.2em;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
    }

    &__link {
      padding: .1em .9em;
      position: relative;
    }

    &__icon {
      width: 20px;
    }

    &__tooltip {
      font-size: .75em;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate3d(-50%,-100%,0);
      transition: opacity .2s ease;
      opacity: 0;
      visibility: hidden;

      .menu-social__link:hover & {
        opacity: 1;
        visibility: visible;
      }
    }
  }
</style>
