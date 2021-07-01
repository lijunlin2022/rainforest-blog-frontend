import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import VueMarkdownEditor from "./mdEditor.js";
import VMdPreview from "./mdPreview.js";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.use(router);
app.use(VueMarkdownEditor);
app.use(VMdPreview);
app.use(Antd);
app.mount("#app");
