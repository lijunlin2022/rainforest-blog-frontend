<template>
  <div class="login-wrapper">
    <div class="signinBx">
      <div class="imgBx">
        <img src="https://gitee.com/Li-Jun-Lin/figure/raw/master/background/forest.png" />
      </div>
      <div class="formBx">
        <el-form :model="userData" :rules="rules" status-icon ref="userForm">
          <h2>登录</h2>
          <el-form-item prop="username">
            <el-input type="text" v-model="userData.username" placeholder="Username" prefix-icon="el-icon-user" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="userData.password" placeholder="Password" prefix-icon="el-icon-lock" @keyup.enter="handleLogin" />
          </el-form-item>
          <el-form-item>
            <el-button @click="handleLogin">Login</el-button>
          </el-form-item>
          <p>
            没有账号 ? <router-link to="/">直接浏览</router-link>
          </p>
        </el-form>
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
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs.userForm.validate(async (valid) => {
        if (valid) {
          const res = await this.$api.login(this.userData)
          if (res) {
            this.$store.commit('saveUserInfo', res)
            this.$router.push('/admin/dir')
            this.$message.success('登录成功')
          }
        } else {
          return false
        }
      })
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
      justify-content: center;
      align-items: center;
      .el-form {
        margin: 20px;
        width: 100%;
        h2 {
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          margin: 20px 0;
        }
        .el-input {
          margin: 5px 0;
        }
        .el-button {
          background-color: #0366d6;
          color: #fff;
          margin-bottom: 20px;
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
