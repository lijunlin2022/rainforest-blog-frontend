import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import VueMarkdownEditor from "./mdEditor.js";
import VMdPreview from "./mdPreview.js";
import utils from "./utils";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.use(router);
app.use(VueMarkdownEditor);
app.use(VMdPreview);
app.use(Antd);
app.config.globalProperties.$utils = utils;
app.mount("#app");
