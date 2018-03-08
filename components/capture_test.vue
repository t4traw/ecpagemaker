<template lang="ejs">
  <div class="block">
    <div id="capture_block" v-on:click="edit_block">
      <h2>{{foobar}}</h2>
      <button v-on:click="edit_block">edit</button>
    </div>
    <div class="modal hidden">
      <input v-model="foobar">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foobar: 'FooBar'
    }
  },
  methods: {
    edit_block: function(){
      document.querySelector('#modal').classList.remove('hidden')
      var bg = document.createElement('div')
    }
  }
}

</script>

<style lang="sass" scoped>
.block
  background-color: rgb(218, 214, 156)
  margin-bottom: 1em

.hidden
  display: none
</style>
