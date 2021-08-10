import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import VueMarkdownEditor from "@/reliance/mdEditor.js";
import VMdPreview from "@/reliance/mdPreview.js";
import utils from "@/reliance/utils";
import components from "@/reliance/elementPlus.js";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueMarkdownEditor);
app.use(VMdPreview);
components.forEach((item) => {
  app.use(item);
});
app.config.globalProperties.$utils = utils;
app.mount("#app");
