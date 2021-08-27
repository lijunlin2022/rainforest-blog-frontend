<template>
  <div>
    <section>
      <span>4</span>
      <span>霖</span>
      <span>4</span>
    </section>
    <footer>{{ timer }} 秒之后将返回主页</footer>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      timer: 5
    }
  },
  created () {
    setInterval(() => {
      this.timer--
      if (this.timer === 0) {
        this.$router.replace('/')
      }
    }, 1000)
  }
}
</script>

<style scoped>
div {
  text-align: center;
}
section {
  display: flex;
  justify-content: center;
  margin: 100px 0;
}
section span {
  margin: 0 20px;
  font-size: 50px;
  height: 100px;
  line-height: 100px;
}
section span:nth-child(2) {
  width: 100px;
  background-color: #fec41c;
  border-radius: 50%;
  font-size: 50px;
  color: #fff;
}
footer {
  font-size: 20px;
}
</style>
