<template lang="ejs">
  <div id="editable" class="block">
    <div class="text" v-if="!edit" v-text="foobar" v-on:click="edit = true"></div>
    <input v-if="edit" type="text" v-model="foobar" v-on:blur="edit = false" v-autofocus>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foobar: this.msg,
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
