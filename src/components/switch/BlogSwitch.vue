<template>
  <table class="blog-switch">
    <tr>
      <td class="title">
        <slot name="title"></slot>
      </td>
      <td class="switch">
        <label>
          <slot name="checkbox"></slot>
        </label>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "BlogSwitch",
};
</script>

<style>
.blog-switch {
  width: 100%;
  height: 80px;
  font-size: 18px;
  text-align: center;
  color: var(--secondary-color);
}
.blog-switch tr td {
  width: 50%;
}
.blog-switch label {
  position: relative;
  bottom: 15px;
  overflow: hidden;
}
.blog-switch label input {
  visibility: hidden;
}
.blog-switch label input::after {
  content: "";
  position: absolute;
  visibility: visible;
  width: 40px;
  height: 40px;
  left: 5px;
  top: 4px;
  background-color: var(--main-color);
  border-radius: 50%;
  transition: all 0.2s;
}
.blog-switch label input:checked::after {
  transform: translateX(50px);
}
.blog-switch label input::before {
  content: "";
  position: absolute;
  visibility: visible;
  width: 100px;
  height: 50px;
  border-radius: 25px;
  left: 0;
  top: 0;
  transition: all 0.2s;
  background-color: var(--assist-color);
}
.blog-switch label input:checked::before {
  background-color: var(--accent-color);
}
</style>
