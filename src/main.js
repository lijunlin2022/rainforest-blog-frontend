import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";
import createMermaidPlugin from "@kangc/v-md-editor/lib/plugins/mermaid/cdn";
import "@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css";
import cpp from "highlight.js/lib/languages/cpp";
import java from "highlight.js/lib/languages/java";
import json from "highlight.js/lib/languages/json";
import python from "highlight.js/lib/languages/python";
import sql from "highlight.js/lib/languages/sql";

VueMarkdownEditor.use(githubTheme);
VueMarkdownEditor.use(createMermaidPlugin());
VMdPreview.use(githubTheme, {
  extend(md, hljs) {
    // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
    // md.set(option).use(plugin);
    // 注册语言包
    hljs.registerLanguage("cpp", cpp);
    hljs.registerLanguage("json", json);
    hljs.registerLanguage("java", java);
    hljs.registerLanguage("python", python);
    hljs.registerLanguage("sql", sql);
  },
});
VMdPreview.use(createMermaidPlugin());
const app = createApp(App);
app.use(router);
app.use(VueMarkdownEditor);
app.use(VMdPreview);
app.mount("#app");
