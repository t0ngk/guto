<script setup>
import { Modal, Input, Button } from 'flowbite-vue';
import { ref, computed, watch } from 'vue';

const users = JSON.parse(localStorage.getItem('users')) || [];

const permission = {
  0: 'Customer',
  1: 'Employee',
  2: 'Admin',
}

let filterValue = ref('');

let selectUser = ref(null);

let selectedUser = computed(() => {
  return users.find(user => user.id == selectUser.value);
})

watch(selectUser, (val) => {
  console.log(val);
})

watch(selectedUser, (val) => {
  console.log(val);
});

const openModal = ref(false);

const closeModal = () => {
  selectUser.value = null;
  openModal.value = false;
}

const openModalEdit = (id) => {
  console.log(id);
  selectUser.value = id;
  openModal.value = true
};

const editPerm = (event) => {
  const formData = new FormData(event.target);
  let data = ref(Object.fromEntries(formData));
  selectedUser.value.permission = data.value.perm;
  localStorage.setItem('users', JSON.stringify(users));
  closeModal();
}

let filteredUsers = computed(() => {
  return users.filter(user => {
    return (`${user.first_name} ${user.last_name}`).toLowerCase().includes(filterValue.value.toLowerCase())
  })
})

</script>



<template>
  <div class="container mx-auto my-4">

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="pb-4 bg-white dark:bg-gray-900">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="flex justify-between">
            <input type="text" id="table-search" v-model="filterValue"
              class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items">
              <Button @click="openModalEdit" color="red" class= "text-white font-bold py-2 px-4 rounded">
                Delete User
              </Button>
          </div>
        </div>
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Id
            </th>
            <th scope="col" class="px-6 py-3">
              User name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Permission
            </th>
            <th scope="col" class="px-6 py-3">
              Phone Nummber
            </th>
            <th scope="col" class="px-6 py-3">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredUsers.length === 0" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
          <td colspan="4" class="text-center p-4">ไม่มีข้อมูล</td>
        </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50" v-for="user in filteredUsers">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
              {{ user.id }}
            </th>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowr">
              {{ user.first_name }} {{ user.last_name }}
            </th>
            <td class="px-6 py-4">
              {{ user.email }}
            </td>
            <td class="px-6 py-4">
              {{ permission[user.permission] }}
            </td>
            <td class="px-6 py-4">
              {{ user.phone_number }}
            </td>
            <td class="px-6 py-4">
              <a @click="openModalEdit(user.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
          </tr>
        </tbody>
    </table>
  </div>
</div>
<Modal v-if="openModal" @close="closeModal">
  <template #header>
    <div class="flex items-center text-lg">
      Edit User
    </div>
  </template>
  <template #body>
    <form @submit.prevent="editPerm" class="flex flex-col gap-2">
      <label for="petType" class="text-sm font-medium text-gray-700 dark:text-gray-200">Permission</label>
            <select id="petType" name="perm"
              class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="0" >{{ permission[0] }}</option>
              <option value="1" >{{ permission[1] }}</option>
              <option value="2" >{{ permission[2] }}</option>
            </select>
      <div class="flex justify-end">
        <Button type="submit" >Save</Button>
      </div>
    </form>
  </template>
</Modal>
</template>
