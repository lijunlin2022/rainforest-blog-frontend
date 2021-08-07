import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import VueMarkdownEditor from "./mdEditor.js";
import VMdPreview from "./mdPreview.js";
import utils from "./utils";
import {
  BackTop,
  Breadcrumb,
  Button,
  Input,
  Layout,
  List,
  Menu,
  Table,
} from "ant-design-vue";
import "ant-design-vue/lib/back-top/style/css";
import "ant-design-vue/lib/breadcrumb/style/css";
import "ant-design-vue/lib/button/style/css";
import "ant-design-vue/lib/input/style/css";
import "ant-design-vue/lib/layout/style/css";
import "ant-design-vue/lib/list/style/css";
import "ant-design-vue/lib/menu/style/css";
import "ant-design-vue/lib/table/style/css";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueMarkdownEditor);
app.use(VMdPreview);
app.use(BackTop);
app.use(Breadcrumb);
app.use(Button);
app.use(Input);
app.use(Layout);
app.use(List);
app.use(Menu);
app.use(Table);
app.config.globalProperties.$utils = utils;
app.mount("#app");
