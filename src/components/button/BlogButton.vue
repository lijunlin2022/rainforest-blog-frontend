<template>
  <div class="blog-button">
    <button><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: "BlogButton",
};
</script>

<style scoped>
.blog-button button {
  padding: 5px 10px;
  margin: 0 20px;

  font-size: 14px;
  font-family: var(--nav-font);
  color: var(--bg-color);
  background-color: var(--assist-color);
  outline: none;
  border: none;
}
.blog-button button:hover {
  background-color: var(--border-color);
}
</style>
