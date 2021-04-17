<template>
  <div>
    <v-md-preview :text="text"></v-md-preview>
  </div>
</template>

<script>
var HtmlUtil = {
  /*2.用浏览器内部转换器实现html解码（反转义）*/
  htmlDecode: function (text) {
    //1.首先动态创建一个容器标签元素，如DIV
    var temp = document.createElement("div");
    //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
    temp.innerHTML = text;
    //3.最后返回这个元素的innerText或者textContent，即得到经过HTML解码的字符串了。
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
  },
};
import { getBlogDetail } from "@/api/blogs";
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleGetDetail(id) {
      getBlogDetail(id)
        .then((result) => {
          const res = result.data;
          this.text = HtmlUtil.htmlDecode(res.data.content);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.handleGetDetail(this.$route.query.id);
  },
};
</script>

<style scoped>
::v-deep(h1),
::v-deep(h2),
::v-deep(h3),
::v-deep(h4),
::v-deep(h5),
::v-deep(h6) {
  font-weight: normal !important;
  font-family: var(--title-font) !important;
}
::v-deep(p) {
  text-align: justify !important;
}
</style>
