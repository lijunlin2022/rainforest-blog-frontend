<template>
  <div class="profile">
    <div class="logo">霖</div>
    <div>
      <v-md-preview :text="profileContent"></v-md-preview>
    </div>
  </div>
</template>

<script>
import { getNoteDetail } from "@/api/notes.js";
export default {
  data() {
    return {
      profileContent: "",
    };
  },
  async created() {
    try {
      const profile = await getNoteDetail(1);
      this.profileContent = this.$utils.htmlDecode(profile.data.data.content);
    } catch (error) {
      console.error("Profile 请求失败");
    }
  },
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--secondary-color);
}
.profile .logo {
  width: 100px;
  margin: 0 50px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #fec41c;
  border-radius: 50%;
  font-size: 50px;
  color: #fff;
}
@media screen and (min-width: 992px) {
  .profile {
    flex-direction: row;
  }
}
</style>
