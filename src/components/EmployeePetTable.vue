<script setup>
import { Modal, Input, Button } from 'flowbite-vue'
import { computed, ref } from 'vue'

const pets = ref(JSON.parse(localStorage.getItem('pets')) || []);
const users = ref(JSON.parse(localStorage.getItem('users')) || []);

const addPet = (event) => {
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const id = pets.value.length + 1;

  const user = users.value.find(user => user.id == data.owner);

  pets.value.push({
    ...data,
    id: id,
    appointmentId: []
  });

  user.petId.push(id);

  localStorage.setItem('pets', JSON.stringify(pets.value));
  localStorage.setItem('users', JSON.stringify(users.value));

  closeModal();
}

let filterSearch = ref('');

let filterPets = computed(() => {
  return pets.value.filter(pet => pet.name.toLowerCase().includes(filterSearch.value.toLowerCase()));
});

const isShowModal = ref(false)
function closeModal() {
  isShowModal.value = false
}
function showModal() {
  isShowModal.value = true
}

let selectPet = ref(null)
let selectedPet = computed(() => {
  return pets.value.find(pet => pet.id == selectPet.value)
})

const isShowEditModal = ref(false)
function closeEditModal() {
  selectPet.value = null
  isShowEditModal.value = false
}
function showEditModal(id) {
  selectPet.value = id
  isShowEditModal.value = true
}

const deletePet = () => {
  const id = selectPet.value;
  pets.value = pets.value.filter(pet => pet.id != id);
  localStorage.setItem('pets', JSON.stringify(pets.value));

  closeEditModal();
}
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
            <input type="text" id="table-search" v-model="filterSearch"
              class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items">

            <button @click="showModal" type="button"
              class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add Pet
            </button>
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
              Pet name
            </th>
            <th scope="col" class="px-6 py-3">
              Pet type
            </th>
            <th scope="col" class="px-6 py-3">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filterPets.length === 0" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
          <td colspan="4" class="text-center p-4">ไม่มีข้อมูล</td>
        </tr>
        <tr v-for="pet in filterPets" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
            {{ pet.id }}
            </th>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowr">
              {{ pet.name }}
            </th>
            <td class="px-6 py-4">
              {{ pet.type }}
            </td>
            <td class="px-6 py-4">
              <a @click="showEditModal(pet.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <Modal :size="size" v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">
        Add Pet
      </div>
    </template>
    <template #body>
      <!-- <div class="flex flex-col">
          <label for="petName" class="text-sm font-medium text-gray-700 dark:text-gray-200">Pet name</label>
          <input type="text" id="petName"
            class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Pet name">
        </div> -->
      <form @submit.prevent="addPet" class="flex flex-col gap-2">
        <div class="flex flex-col gap-2">
          <label for="petType" class="text-sm font-medium text-gray-700 dark:text-gray-200">Owner</label>
          <select id="petType" name="owner"
            class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option v-for="user in users" :value="user.id">{{ user.first_name }} {{ user.last_name }} - {{ user.email }}</option>
          </select>
        </div>
        <Input placeholder="Pet name" label="Pet name" name="name"></Input>
        <div class="flex flex-col gap-2">
          <label for="petType" class="text-sm font-medium text-gray-700 dark:text-gray-200">Pet type</label>
          <select id="petType" name="type"
            class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>
        <div class="flex justify-between">
          <button @click="closeModal" type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Cancel
          </button>
          <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Confirm
          </button>
        </div>
      </form>
    </template>
  </Modal>

  <Modal v-if="isShowEditModal" @close="closeEditModal">
    <template #header>
      <div class="flex items-center text-lg">
        Edit Pet
      </div>
    </template>
    <template #body>
      <form @submit.prevent="editPet" class="flex flex-col gap-2">
        <Input placeholder="Pet name" label="Pet name" name="name" v-model="selectedPet.name"></Input>
        <div class="flex flex-col gap-2">
          <label for="petType" class="text-sm font-medium text-gray-700 dark:text-gray-200">Pet type</label>
          <select id="petType" name="type" v-model="selectedPet.type"
            class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>
        <div class="flex justify-between">
          <button @click="deletePet" type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Cancel
          </button>
          <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Confirm
          </button>
        </div>
      </form>
    </template>
  </Modal>
</template>
