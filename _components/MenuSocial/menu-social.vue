<template>
  <div>
    <div v-for="(item, key) in contacts">
      <div>{{ item.title }}</div>
    </div>

    <div class="menu-social__caption">{{ msg }}</div>
  </div>
</template>

<script>
  // export default {
  //   data () {
  //     return {
  //       msg: 'Follow Us:'
  //     }
  //   }
  // },
  module.exports = {
    data: function () {
      return {
        msg: 'Follow Us:',
        contacts: {
          title: '',
          url: ''
        }
      }
    },

    created: function () {
      var self = this;

      this.axios.get('https://sentimony-db.firebaseio.com/contacts.json')
        .then(function (response) {
          self.contacts = response.data.contacts;
          console.log('contacts ok!');
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  };
</script>

<style>
  .menu-social__caption {
  }
</style>
