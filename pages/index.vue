<template>
  <section class="container">
    <div class="design_column">
      <capture-test v-for='index in counter' :key="index"/>
    </div>
    <div class="">
      <button v-on:click="counter++">aaa</button>
      <button v-on:click="capture">Capture!!!!</button>
    </div>
  </section>
</template>

<script>
import html2canvas from 'html2canvas'
import CaptureTest from '~/components/capture_test.vue'

export default {
  data: function() {
    return {
      counter: 2
    }
  },
  components: {
    CaptureTest
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

<style lang="scss" scoped>

.design_column {
  width: 800px;
}

.container {
  width: 800px;
  margin: 10em auto;
  min-height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
