<template>
  <a-table :columns="columns" :data-source="data">
    <template #action>
      <a>Delete</a>
    </template>
  </a-table>
</template>
<script>
import { defineComponent } from "vue";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    slots: {
      customRender: "action",
    },
  },
];
const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description: "My name is John Brown",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description: "My name is Jim Green",
  },
  {
    key: 3,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    description: "My name is Joe Black",
  },
];
export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
});
</script>
