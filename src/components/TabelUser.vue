<template>
    <n-data-table pagination-behavior-on-filter="first" :columns="columns" :data="data" :pagination="pagination" />
</template>

<script setup>
const columns = [
    {
        title: "id",
        key: "User_id"
    },
    {
        title: "email",
        key: "User_email"
    },
    {
        title: "password",
        key: "User_password"
    },
    {
        title: "fname",
        key: "User_fname"
    },
    {
        title: "lname",
        key: "User_lname"
    },
    {
        title: "phone",
        key: "User_phone"
    },
    {
        title: "role",
        key: "User_role"
    },
    {
        title: "Pet",
        key: "Pet_id"
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