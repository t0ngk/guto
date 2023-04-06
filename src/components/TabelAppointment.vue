<template>
    <n-data-table pagination-behavior-on-filter="first" :columns="columns" :data="data" :pagination="pagination" />
</template>

<script setup>
const columns = [
    {
        title: "id",
        key: "Appointment_id"
    },
    {
        title: "name",
        key: "Appointment_name"
    },
    {
        title: "description",
        key: "Appointment_desc"
    },
    {
        title: "type",
        key: "Appointment_type"
    },
    {
        title: "status",
        key: "Appointment_status"
    },
    {
        title: "date",
        key: "Appointment_date"
    },
    {
        title: "Bill",
        key: "Bill_id"
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