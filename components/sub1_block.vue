<template lang="ejs">
  <div id="editable" class="block">
    <span class="close" v-on:click="$emit('panretRemoveBlock')"></span>
    <h1>{{midashi}}</h1>
    <div class="text" v-if="!edit" v-text="content" v-on:click="edit = true"></div>
    <input v-if="edit" type="text" v-model="content" v-on:blur="edit = false" v-autofocus>
  </div>
</template>

<script>
export default {
  data() {
    return {
      midashi: this.msg[0],
      content: this.msg[1],
      edit: false
    }
  },
  props: ['msg'],
  directives: {
    autofocus: {
      inserted: function(el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.block
  background-color: rgb(218, 214, 156)
  margin-bottom: 1em
</style>
