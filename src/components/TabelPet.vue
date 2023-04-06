<template>
    <n-data-table pagination-behavior-on-filter="first" :columns="columns" :data="data" :pagination="pagination" />
</template>

<script setup>
const columns = [
    {
        title: "id",
        key: "Pet_id"
    },
    {
        title: "name",
        key: "Pet_name"
    },
    {
        title: "type",
        key: "Pet_type"
    },
    {
        title: "appointment",
        key: "Appointment_id"
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