<template>
  <div>
    <v-md-preview :text="text"></v-md-preview>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:
        "# 你好啊 \n ## 我看看是不是只有预览效果, nice \n 这是正文 \n 一个典型的效果是,这里的正文真的是我想看到的吗,还是说字号要更小一些呢? 果然啊, 没有共产党就没有新中国,没有共产党就没有新中国,共产党,请老唯名族,共产党,它一心就中国 \n \n ![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKV943kOSCJVIVx8VjtjuLfcQVuDGneDctg&usqp=CAU)",
    };
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
  font-family: Oswald, "Microsoft Yahei", Arial, Helvetica, sans-serif !important;
}
::v-deep(p) {
  text-align: justify !important;
}
</style>
