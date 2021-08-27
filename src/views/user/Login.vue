<template>
  <div class="blog-login">
    <section>
      <div :class="{ container: true, active: isActive }">
        <div class="user signinBx">
          <div class="imgBx">
            <img src="https://gitee.com/Li-Jun-Lin/figure/raw/master/background/forest.png" />
          </div>
          <div class="formBx">
            <form>
              <h2>登录</h2>
              <input type="text" v-model="userData.username" placeholder="Username" />
              <input type="password" v-model="userData.password" placeholder="Password" />
              <input type="button" value="Login" @click="handleLogin" />
              <p class="signup">
                没有账号 ?<a @click="toggleForm()">注册</a> 或
                <router-link to="/">直接浏览</router-link>
              </p>
            </form>
          </div>
        </div>
        <div class="user signupBx">
          <div class="formBx">
            <form>
              <h2>创建账号</h2>
              <input type="text" placeholder="Username" />
              <input type="eamil" placeholder="Username" />
              <input type="password" placeholder="Create Password" />
              <input type="password" placeholder="Confirm Password" />
              <input type="button" value="Sign Up" />
              <p class="signup">
                已有账号 ?<a @click="toggleForm()">登录</a> 或
                <router-link to="/">直接浏览</router-link>
              </p>
            </form>
          </div>
          <div class="imgBx">
            <img src="https://gitee.com/Li-Jun-Lin/figure/raw/master/background/jungle.png" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { login } from '@/api/users.js'
import { debounce } from '@/utils/debounce.js'

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
  },
  methods: {
    handleLogin: debounce(
      async function () {
        try {
          const result = await login(this.userData)
          const res = result.data
          if (res.code !== 200) {
            this.$message.error(res.message)
          } else {
            this.$store.commit('login')
            this.$router.replace('/admin')
            this.$message.success('登录成功')
          }
        } catch (e) {
          this.$message.error('发生错误, 无法登录')
        }
      },
      300,
      true
    ),
    toggleForm () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
section {
  min-height: 100vh;
  background-color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
section .container {
  position: relative;
  width: 800px;
  height: 500px;
  background-color: var(--main-color);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
section .container .user {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
section .container .user .imgBx {
  position: relative;
  width: 50%;
  padding: 0 20px;
  height: 100%;

  transition: all 0.5s;
}
section .container .user .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保留原有尺寸,但部分内容可能被裁剪 */
}
section .container .user .formBx {
  position: relative;
  width: 50%;
  padding: 0 20px;
  height: 100%;
  background-color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.5s;
}
section .container .user .formBx h2 {
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: var(--secondary-color);
}
section .container .user .formBx input {
  position: relative;
  width: 100%;
  padding: 10px;
  background-color: var(--border-color);
  color: var(--third-color);
  border: none;
  outline: none;
  box-shadow: none;

  margin: 8px 0;
  font-size: 14px;
}
section .container .user .formBx input[type='button'] {
  max-width: 100px;
  background-color: var(--link-color);
  color: var(--main-color);
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}
section .container .user .formBx form .signup {
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  color: var(--secondary-color);
  text-transform: uppercase;
  font-weight: bold;
}
section .container .user .formBx form .signup a {
  text-decoration: none;
  padding: 0 5px;
  color: var(--link-color);
}

section .container .signupBx {
  pointer-events: none;
}
section .container.active .signupBx {
  pointer-events: initial;
}
section .container .signupBx .formBx {
  top: 100%;
}
section .container.active .signupBx .formBx {
  top: 0;
}
section .container .signupBx .imgBx {
  top: -100%;
}
section .container.active .signupBx .imgBx {
  top: 0;
}
@media (max-width: 992px) {
  section .container {
    max-width: 400px;
  }
  section .container .imgBx {
    display: none;
  }
  section .container .user .formBx {
    width: 100%;
  }
}
</style>
