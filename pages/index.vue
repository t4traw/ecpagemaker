
<!-- children.splice(index, 1) -->
<template>
  <section class="container">
      <template v-for="(child, index) in children">
        <component v-bind:key="index" v-bind:index="index" v-bind:is="child.name" v-bind:msg="child.body" v-on:remove="child.display = false" v-if="child.display" class="design_component"></component>
      </template>
    <div class="">
      <button v-on:click="add_header_block">Add HeaderBlock</button>
      <button v-on:click="add_sub1_block">Add Sub1Block</button>
      <button v-on:click="capture">Capture!!!!</button>
      <button v-on:click="log">log</button>
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
      counter: 0,
      currentView: 'headerblock',
      children: [
        {name: 'headerblock', body: ['へっだー'], display: true},
        {name: 'subblock', body: ['さぶへっだー', 'さぶこんてんつ'], display: true},
        {name: 'headerblock', body: ['へっだーふたたび1'], display: false},
        {name: 'headerblock', body: ['へっだーふたたび2'], display: true},
        {name: 'headerblock', body: ['へっだーふたたび3'], display: true},
      ]
    }
  },
  components: {
    "headerblock": HeaderBlock,
    "subblock": Sub1Block
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
    add_header_block: function(){
      this.counter += 1
      this.children.push({name: 'headerblock', body: ["ついかしたへっだー" + this.counter, 'さぶこんてんつ'], display: true})
    },
    add_sub1_block: function(){
      this.counter += 1
      this.children.push({name: 'subblock', body: ['さぶへっだー' + this.counter, 'さぶこんてんつ'], display: true})
    },
    // remove_block: function(child){
    //   console.log('Delete: ' + child);
    //   this.children.$remove(child)
    //   console.log(this.children)
    // }
  }
}

</script>

<style lang="scss" scoped>

#design_column {
  width: 800px;
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
  background-color: rgb(223, 222, 220)
}
</style>
