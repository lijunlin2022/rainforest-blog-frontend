<template>
  <div id="markdown" v-html="compiledMarkdown" class="markdown-body">
  </div>
</template>

<script>
import marked from 'marked'
import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/github.css'
import { ref } from 'vue'

const headerArrRef = ref([])
const counterRef = ref(0)

const renderer = {
  heading (text, level) {
    const header = text.replace(/<code>/g, '').replace(/<\/code>/g, '')
    counterRef.value += 1
    headerArrRef.value.push({ text: header, id: counterRef.value })
    return `
      <h${level} id="data-id-${counterRef.value}">${text}</h${level}>
    `
  }
}

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const hljs = require('highlight.js')
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

marked.use({ renderer })

export default {
  name: 'MarkdownPreviewer',
  props: { content: { type: String, required: true } },
  computed: {
    compiledMarkdown () {
      headerArrRef.value.splice(0)
      counterRef.value = 0
      return marked(this.content)
    }
  },
  mounted () {
    this.$emit('recvCatalogue', headerArrRef.value)
  }
}
</script>

<style scoped>
#markdown {
  padding: 16px;
  background-color: #fff;
}
</style>
