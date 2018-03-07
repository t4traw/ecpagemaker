<template lang="ejs">
  <div class="block">
    <div class="">
      <canvas ref="canvas" width="800" height="200"></canvas>
    </div>
    <div class="">
      <input v-model="foobar">
    </div>
  </div>
</template>

<script>

export default {
  head: {
    script: [
      { src: 'https://code.createjs.com/1.0.0/easeljs.min.js' }
    ],
  },
  data() {
    return {
      foobar: 'FooBar'
    }
  },
  // mounted: function(){
  //   stage.update()
  // }
}
</script>

<style lang="sass" scoped>
.block
  background-color: rgb(218, 214, 156)
  margin-bottom: 1em
</style>
