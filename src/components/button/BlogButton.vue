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
  font-size: 15.2px;
  font-family: var(--text-font);
  background-color: var(--main-color);
  color: var(--secondary-color);
  outline: none;
  border: 1px solid var(--border-color);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.blog-button button:hover {
  color: var(--accent-color);
}
</style>
