<template lang="ejs">
  <div id="editable" class="design_block">
    <span class="close" v-on:click="$emit('remove')"></span>
    <h1 class="text" v-if="!midashi.edit" v-text="midashi.body" v-on:click="midashi.edit = true"></h1>
    <input v-if="midashi.edit" type="text" v-model="midashi.body" v-on:blur="midashi.edit = false" v-autofocus>
    <p class="text" v-if="!text1.edit" v-text="text1.body" v-on:click="text1.edit = true"></p>
    <input v-if="text1.edit" type="text" v-model="text1.body" v-on:blur="text1.edit = false" v-autofocus>
  </div>
</template>

<script>
export default {
  data() {
    return {
      midashi: {
        body: this.msg[0],
        edit: false
      },
      text1: {
        body: this.msg[1],
        edit: false
      }
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
  
</style>
