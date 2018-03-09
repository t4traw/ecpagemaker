<template lang="ejs">
  <div class="block">
    <div id="capture_block" v-on:click="open_modal()">
      <h2>{{foobar}}</h2>
      <button v-on:click="open_modal()">edit</button>
    </div>
    
    <div id="modal" class="hidden">
      <span class="close" v-on:click="close_modal"></span>
      <div id="modal_content">
        <input v-model="foobar">
      </div>
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
}
</script>

<style lang="sass" scoped>
.block
  background-color: rgb(218, 214, 156)
  margin-bottom: 1em
</style>
