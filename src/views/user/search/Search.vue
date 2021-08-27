<template>
  <main>
    <!-- 搜索栏 -->
    <header>
      <el-input class="b-input" placeholder="请输入 Notebook 的名字" v-model="searchValue" @input="search"> </el-input>
      <el-select v-model="value" placeholder="排序" @change="sort">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </header>

    <!-- 列表栏 -->
    <section>
      <notebook v-for="item in listArray" :key="item.id" @click="$utils.changeRoute(`/nDetail/${item.id}`)">
        <template #name>
          {{ item.name }}
        </template>
        <template #description>
          {{ item.description }}
        </template>
      </notebook>
    </section>
  </main>
</template>

<script>
import { getNotebookList } from '@/api/notebooks.js'
import { debounce } from '@/utils/debounce.js'
import options from './components/options.js'
import Notebook from '@/components/notebook/Notebook.vue'
export default {
  components: {
    Notebook
  },
  data () {
    return {
      searchValue: '',
      listArray: [],
      options,
      value: ''
    }
  },
  async created () {
    const result = await getNotebookList({ current: null, size: null })
    this.listArray = result.data.data.map((item) => {
      return this.$utils.htmlDecodeObject(item)
    })
  },
  methods: {
    search: debounce(
      async function () {
        const queryData = {
          keyword: this.searchValue,
          current: null,
          size: null
        }
        const result = await getNotebookList(queryData)
        this.listArray = result.data.data.map((item) => {
          return this.$utils.htmlDecodeObject(item)
        })
      },
      300,
      false
    ),
    async sort () {
      const queryData = {}
      queryData.keyword = this.searchValue
      queryData.current = null
      queryData.size = null
      queryData.sortMode = this.value
      const result = await getNotebookList(queryData)
      this.listArray = result.data.data.map((item) => {
        return this.$utils.htmlDecodeObject(item)
      })
    }
  }
}
</script>

<style scoped>
main {
  box-sizing: border-box;
  max-width: 900px;
  margin: auto;
}
header {
  margin: 20px;
  display: flex;
}
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
