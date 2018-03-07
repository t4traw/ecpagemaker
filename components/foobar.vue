<template lang="ejs">
  <div>
    <h2>{{ msg }}</h2>
    <input v-model="msg">
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: "FooBar"
    }
  },
}
</script>

<style lang="sass" scoped>
div
  height: 100px
  background-color: blue
  margin-bottom: 1em
  h2
    color: #ffffff
</style>
