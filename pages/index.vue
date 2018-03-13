<template>
  <section class="container">
    <template v-for="(child, index) in children">
        <component :is="child" :key="index"></component>
    </template>
    <div class="">
      <button v-on:click="add_sub1_block">Add Sub1Block</button>
      <button v-on:click="capture">Capture!!!!</button>
    </div>
  </section>
</template>

<script>
import html2canvas from 'html2canvas'
import HeaderBlock from '~/components/header_block.vue'
import Sub1Block from '~/components/sub1_block.vue'

export default {
  data: function() {
    return {
      counter: 2,
      currentView: 'headblock',
      children: [
        'headblock',
        'subblock',
        'headblock',
      ]
    }
  },
  components: {
    "headblock": HeaderBlock,
    "subblock": Sub1Block
  },
  methods: {
    capture: function(){
      html2canvas(document.body).then(function(canvas) {
          document.body.appendChild(canvas);
      });
    },
    add_sub1_block: function(){
      this.children.push('subblock')
    }
  }
}
</script>

<style lang="scss" scoped>

#design_column {
  width: 800px;
}

.container {
  width: 800px;
  margin: 10em auto;
  min-height: 100vh;
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
