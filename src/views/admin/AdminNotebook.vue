<template>
  <a-list
    item-layout="vertical"
    size="large"
    :pagination="pagination"
    :data-source="listData"
  >
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <a-list-item-meta :description="item.description">
          <template #title>
            <a>{{ item.title }}</a>
          </template>
        </a-list-item-meta>
        {{ item.content }}
      </a-list-item>
    </template>
  </a-list>
</template>
<script>
import { defineComponent } from "vue";
const listData = [];

for (let i = 0; i < 23; i++) {
  listData.push({
    title: `ant design vue part ${i}`,
    description: `Ant Design, a design language for background applications, is refined by Ant UED Team.`,
    content: `We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.`,
  });
}

export default defineComponent({
  setup() {
    const pagination = {
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    };
    return {
      listData,
      pagination,
    };
  },
});
</script>
