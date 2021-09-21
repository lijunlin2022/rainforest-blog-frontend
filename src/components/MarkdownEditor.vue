<template>
  <div id="markdown">
    <textarea id="writing-place" :value="input" @input="update"></textarea>
    <div id="reading-place" v-html="compiledMarkdown" class="markdown-body">
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import _ from 'loadsh'
import 'github-markdown-css/github-markdown.css'

export default {
  name: 'MarkdownEditor',
  props: {
    content: String
  },
  data () {
    return {
      input: this.content
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.input)
    }
  },
  watch: {
    content (val) {
      this.input = val
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
      this.$emit('updateParent', this.input)
    }, 300)
  }
}
</script>

<style lang="less">
#markdown {
  width: 100%;
  min-height: 500px;
  background-color: #fff;
  display: flex;
  #writing-place {
    width: 50%;
    min-height: 100%;
    padding: 20px;
    outline: none;
    border: none;
    font-size: 16px;
  }
  #reading-place {
    width: 50%;
    padding: 20px;
    border-left: 1px solid #aaa;
  }
}
</style>
