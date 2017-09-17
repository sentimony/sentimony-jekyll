// define('store', [], function () {
//   var Vuex = require('vuex/dist/vuex.js');

//   return new Vuex.Store({
//     state: {
//       artists: [],
//       artists_options: {count: null}
//     },
//     mutations: {
//       addContent: function (state, payload) {
//         for (var key in payload) {
//           if (state.content[key] && payload.hasOwnProperty(key) && state.content[key] instanceof Array) {
//             state.content[key] = state.content[key].concat(payload[key]);
//           }
//           else {
//             state.content[key] = payload[key];
//           }
//         }
//       }
//     }
//   });
// });
