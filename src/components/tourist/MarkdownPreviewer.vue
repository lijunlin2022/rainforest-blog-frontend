<template>
  <div id="markdown" v-html="compiledMarkdown" class="markdown-body">
  </div>
</template>

<script>
import marked from 'marked'
import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/github.css'
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

export default {
  name: 'MarkdownPreviewer',
  props: { content: { type: String, required: true } },
  computed: {
    compiledMarkdown () {
      return marked(this.content)
    }
  }
}
</script>

<style scoped>
#markdown {
  padding: 16px;
  background-color: #fff;
}
</style>
