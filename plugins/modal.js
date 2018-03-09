// function open_modal(){
//   document.querySelector('#modal').classList.remove('hidden')
// }
//
// function close_modal(){
//   document.querySelector('#modal').classList.add('hidden')
// }

import Vue from 'vue'
Vue.mixin({
  methods: {
    open_modal: function(){
      document.querySelector('#modal').classList.remove('hidden')
    },
    close_modal: function(){
      document.querySelector('#modal').classList.add('hidden')
    }
  }
})
