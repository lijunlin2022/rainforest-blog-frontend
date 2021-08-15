<template>
  <div class="blog-notebook">
    <b-breadcrumb></b-breadcrumb>
    <main>
      <note-table></note-table>
      <v-md-preview class="readme" :text="content" v-show="hasReadme">
      </v-md-preview>
    </main>
  </div>
</template>

<script>
import { getNoteDetail } from "@/api/notes.js";

import BBreadcrumb from "@/components/breadcrumb/BBreadcrumb.vue";
import NoteTable from "./components/NoteTable.vue";

export default {
  name: "NotebookDetail",
  components: {
    BBreadcrumb,
    NoteTable,
  },
  data() {
    return {
      hasReadme: true,
      content: "",
    };
  },
  async created() {
    try {
      const readme = await getNoteDetail({
        id: null,
        pid: this.$route.params.id,
        title: "README",
      });
      this.content = this.$utils.htmlDecode(readme.data.data.content);
    } catch (e) {
      this.hasReadme = false;
      console.error("获取 README 失败");
    }
  },
};
</script>

<style scoped>
.blog-notebook {
  max-width: 900px;
  margin: 20px auto;
}
.readme {
  margin-top: 30px;
  padding-top: 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
