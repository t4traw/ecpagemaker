<template lang="ejs">
  <div id="editable" class="design_block">
    <span class="close" v-on:click="$emit('remove')"></span>
    
    <div class="block_header">
      <h1 class="text" v-if="!midashi.edit" v-text="midashi.body" v-on:click="midashi.edit = true"></h1>
      <input class="text" v-if="midashi.edit" type="text" v-model="midashi.body" v-on:blur="midashi.edit = false" v-autofocus>
    </div>
    
    <div class="image_and_text">
      <div class="square_image">
        <image-uploader/>
      </div>
      
      <div class="description">
        <p class="text" v-if="!text1.edit" v-text="text1.body" v-on:click="text1.edit = true"></p>
        <input class="text" v-if="text1.edit" type="text" v-model="text1.body" v-on:blur="text1.edit = false" v-autofocus>
      </div>
    </div>
  </div>
</template>

<script>
import imageUploader from '~/components/design_block/parts/image_uploader.vue'
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
      },
      imageUrl: ''
    }
  },
  components: {
    imageUploader
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
$square_image_size: 200px
.image_and_text
  display: flex
  .square_image
    // width: $square_image_size
    min-height: $square_image_size
    width: 30%
  .description
    width: 70%
    padding: 0 10px
</style>
