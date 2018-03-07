<template lang="ejs">
  <div class="block">
    <div id="capture_block">
      <h2>{{foobar}}</h2>
    </div>
    <div class="">
      <input v-model="foobar">
    </div>
    <button v-on:click="capture">Capture!!!!</button>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  data() {
    return {
      foobar: 'FooBar'
    }
  },
  methods: {
    capture: function(){
      html2canvas(document.body).then(function(canvas) {
          document.body.appendChild(canvas);
      });
    }
  }
}

</script>

<style lang="sass" scoped>
.block
  background-color: rgb(218, 214, 156)
  margin-bottom: 1em
</style>
