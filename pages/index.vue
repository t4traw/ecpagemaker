<template>
  <section class="container">
    <template v-for="(child, index) in children">
      <component v-bind:key="index" v-bind:index="index" v-bind:is="child.name" v-bind:msg="child.body" v-on:remove="child.display = false" v-if="child.display" class="design_component"></component>
    </template>
    <div class="controll_panel">
      <button v-on:click="add_plain_component">Add Plain</button>
      <button v-on:click="add_basic1_component">Add Basic1</button>
      <button v-on:click="capture">Capture!!!!</button>
      <button v-on:click="log">log</button>
    </div>
  </section>
</template>

<script>
import html2canvas from 'html2canvas'
import PlainComponent from '~/components/design_block/plain.vue'
import Basic1Component from '~/components/design_block/basic1.vue'
import Image1Component from '~/components/design_block/image1.vue'

export default {
  data: function() {
    return {
      counter: 0,
      currentView: 'headerblock',
      children: [
        {name: 'plain', body: ['ただのテキストのみのブロック'], display: true},
        {name: 'basic1', body: ['見出し付きのブロック', 'テキストテキスト'], display: true},
        {name: 'image1', body: ['画像つきブロック', 'テキストテキスト'], display: true},
      ]
    }
  },
  components: {
    "plain": PlainComponent,
    "basic1": Basic1Component,
    "image1": Image1Component,
  },
  methods: {
    capture: function(){
      html2canvas(document.body).then(function(canvas) {
          document.body.appendChild(canvas);
      });
    },
    log: function(){
      console.log(this.children)
    },
    add_plain_component: function(){
      this.counter += 1
      this.children.push({name: 'plain', body: ["ついかしたへっだー" + this.counter, 'さぶこんてんつ'], display: true})
    },
    add_basic1_component: function(){
      this.counter += 1
      this.children.push({name: 'basic1', body: ['さぶへっだー' + this.counter, 'さぶこんてんつ'], display: true})
    },
  }
}

</script>

<style lang="scss" scoped>

#design_column {
  width: 800px;
}

.controll_panel {
  clear: both;
}

.container {
  width: 800px;
  margin: 2em auto;
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

.design_component {
  position: relative;
}
</style>
