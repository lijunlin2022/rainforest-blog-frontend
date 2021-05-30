<template>
  <router-view :key="$route.fullPath" />
</template>

<style>
@import url(./assets/css/style.css);
* {
  padding: 0;
  margin: 0;
}
</style>
