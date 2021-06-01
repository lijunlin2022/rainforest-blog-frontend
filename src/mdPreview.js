import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";
import createMermaidPlugin from "@kangc/v-md-editor/lib/plugins/mermaid/cdn";
import "@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css";
import createCopyCodePlugin from "@kangc/v-md-editor/lib/plugins/copy-code/index";
import "@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css";
import createTodoListPlugin from "@kangc/v-md-editor/lib/plugins/todo-list/index";
import "@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css";
import c from "highlight.js/lib/languages/c.js";
import java from "highlight.js/lib/languages/java.js";
import json from "highlight.js/lib/languages/json.js";
import python from "highlight.js/lib/languages/python.js";
import sql from "highlight.js/lib/languages/sql.js";

VMdPreview.use(githubTheme, {
  extend(md, hljs) {
    // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
    // md.set(option).use(plugin);
    // 注册语言包
    hljs.registerLanguage("c", c);
    hljs.registerLanguage("json", json);
    hljs.registerLanguage("java", java);
    hljs.registerLanguage("python", python);
    hljs.registerLanguage("sql", sql);
  },
});
VMdPreview.use(createMermaidPlugin());
VMdPreview.use(createCopyCodePlugin());
VMdPreview.use(createTodoListPlugin());

export default VMdPreview;
