<template>
    <n-data-table pagination-behavior-on-filter="first" :columns="columns" :data="data" :pagination="pagination" />
</template>

<script setup>
const columns = [
    {
        title: "id",
        key: "Bill_id"
    },
    {
        title: "detail",
        key: "Bill_detail"
    },
    {
        title: "date",
        key: "Bill_date"
    },
    {
        title: "state",
        key: "Bill_state"
    }

];
const data = [
];

let pagination = {
    current: 1,
    pageSize: 10,
    total: 0
};
</script>