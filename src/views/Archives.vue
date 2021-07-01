<template>
  <div class="archives">
    <a-timeline mode="alternate">
      <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item color="green">
        Solve initial network problems 2015-09-01
      </a-timeline-item>
      <a-timeline-item>
        <template #dot>
          <ClockCircleOutlined style="font-size: 16px" />
        </template>
      </a-timeline-item>
      <a-timeline-item color="red">
        Network problems being solved 2015-09-01
      </a-timeline-item>
      <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item>
        <template #dot>
          <ClockCircleOutlined style="font-size: 16px" />
        </template>
        Technical testing 2015-09-01
      </a-timeline-item>
    </a-timeline>
  </div>
</template>
<script>
import { ClockCircleOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    ClockCircleOutlined,
  },
});
</script>

<style scoped>
.archives {
  max-width: 600px;
  margin: 80px auto;
}
</style>
