<template>
  <div>{{ obj }}</div>
  <button @click="clearObj">清空对象</button>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup () {
    const obj = reactive({
      name: 'Tom',
      age: 20
    })
    const clearObj = () => {
      Object.keys(obj).forEach(key => {
        delete obj[key]
      })
    }
    return {
      obj,
      clearObj
    }
  }
}
</script>
