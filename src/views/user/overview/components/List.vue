<template>
  <main>
    <section class="notes">
      <note
        v-for="item in noteArray"
        :key="item.id"
        @click="$utils.changeRoute(`/detail/${item.id}`)"
        :title="item.title"
        :abstract="item.abstract"
        :createdTime="item.created_time"
        :updatedTime="item.updated_time"
      >
      </note>
    </section>
    <footer>
      <button v-show="hasNext" @click="handleNextBtn">加载更多</button>
    </footer>
  </main>
</template>

<script>
import { getNoteList } from '@/api/notes.js'
import Note from '@/components/note/Note.vue'
export default {
  components: {
    Note
  },
  data () {
    return {
      noteArray: [],
      current: 0,
      size: 10,
      hasNext: true
    }
  },
  async created () {
    const queryBody = {}
    queryBody.current = this.current
    queryBody.size = this.size
    const result = await getNoteList(queryBody)
    this.noteArray = result.data.data.map((item) => {
      return this.$utils.htmlDecodeObject(item)
    })
  },
  methods: {
    async handleNextBtn () {
      this.current++
      const res = await getNoteList({ current: this.current, size: this.size })
      const array = res.data.data.map((item) => {
        return this.$utils.htmlDecodeObject(item)
      })
      this.noteArray.push(...array)
      if (res.data.data.length < this.size) {
        this.hasNext = false
      }
    }
  }
}
</script>

<style scoped>
header {
  margin: 30px;
  display: flex;
}
.notes {
  display: flex;
  flex-wrap: wrap;
}
footer {
  text-align: center;
}
footer > button {
  margin: 20px 0;
  width: 250px;
  padding: 14px;
  font-size: 14px;
  background-color: #fff;
  outline: none;
  border: 1px solid #ccc;
}
</style>
