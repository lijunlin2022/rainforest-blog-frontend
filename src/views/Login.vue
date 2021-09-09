<template>
  <div class="login-wrapper">
    <div class="signinBx">
      <div class="imgBx">
        <img src="https://gitee.com/Li-Jun-Lin/figure/raw/master/background/forest.png" />
      </div>
      <div class="formBx">
        <form>
          <h2>登录</h2>
          <el-input type="text" v-model="userData.username" placeholder="Username" />
          <el-input type="password" v-model="userData.password" placeholder="Password" />
          <button>Login</button>
          <p>
            没有账号 ? <router-link to="/">直接浏览</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      isActive: false,
      userData: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  .signinBx {
    display: flex;
    width: 800px;
    height: 500px;
    box-shadow:2px 2px 5px rgba(0, 0, 0, 0.2);
    .imgBx {
      width: 50%;
      @media (max-width: 992px) {
        display: none;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* 保留原有尺寸,但部分内容可能被裁剪 */
      }
    }
    .formBx {
      width: 50%;
      @media (max-width: 992px) {
        width: 100%;
      }
      display: flex;
      align-items: center;
      form {
        margin: 0 20px;
        h2 {
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 40px;
        }
        button {
          outline: none;
          border: none;
          padding: 10px 30px;
          margin: 40px 0;
          background-color: #0366d6;
          color: #fff;
        }
        p {
          font-size: 12px;
          color: #aaa;
          font-weight: bold;
          a {
            color: #0366d6;
          }
        }
      }
    }
  }
}
</style>
