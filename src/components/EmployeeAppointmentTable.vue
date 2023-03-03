<script setup>
import { Input } from 'flowbite-vue'
import { Modal } from 'flowbite-vue'
import { ref, computed } from 'vue'

const pets = ref(JSON.parse(localStorage.getItem('pets')) || []);
const appointments = ref(JSON.parse(localStorage.getItem('appointments')) || []);

const addAppointment = (event) => {
  const formData = new FormData(event.target);
  let data = ref(Object.fromEntries(formData));
  
  let pet = pets.value.find(pet => pet.id == data.value.petId);

  let id = appointments.value.length + 1;

  appointments.value.push({
    id: id,
    title: data.value.title,
    desc: data.value.desc,
    date: data.value.date,
    type: data.value.type,
    state: data.value.state,
    bill: null
  })

  pet.appointmentId.push(id);

  localStorage.setItem('appointments', JSON.stringify(appointments.value));
  localStorage.setItem('pets', JSON.stringify(pets.value));

  closeModal();
}

let filterAppointment = ref('all');
let filterValue = ref('');

const filteredAppointments = computed(() => {
  let filtered = [];
  if (filterAppointment.value === 'all') {
    filtered = appointments.value;
  } else {
    const pet = pets.value.find(pet => pet.id == filterAppointment.value);
    filtered = appointments.value.filter(appointment => pet.appointmentId.includes(appointment.id));
  }
  return filtered.filter(appointment => appointment.title.toLowerCase().includes(filterValue.value.toLowerCase()));
});

const isShowModal = ref(false)
function closeModal() {
  isShowModal.value = false
}
function showModal() {
  isShowModal.value = true
}

let isShowEditModal = ref(false)
function closeEditModal() {
  selectAppointment.value = null
  isShowEditModal.value = false
}
function showEditModal(id) {
  selectAppointment.value = id
  isShowEditModal.value = true
}

let selectAppointment = ref(null)

const deleteAppointment = () => {
  const id = selectAppointment.value;
  appointments.value.slice(appointments.value.findIndex(appointment => appointment.id == id), 1);
  appointments.value = appointments.value.filter(appointment => appointment.id != id);
  localStorage.setItem('appointments', JSON.stringify(appointments.value));

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
            <div class="flex gap-2">
              <input v-model="filterValue" type="text" id="table-search"
                class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items">
                <div class="flex gap-2 items-center">
                  <label for="petType" class="text-sm font-medium text-gray-700 dark:text-gray-200">From</label>
                  <select id="petType" v-model="filterAppointment"
                    class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="all">All</option>
                    <option v-for="pet in pets" :value="pet.id">{{ pet.id }} - {{ pet.name }}</option>
                  </select>
                </div>
            </div>
            <button @click="showModal" type="button"
              class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add Appointment
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
              name
            </th>
            <th scope="col" class="px-6 py-3">
              Desciption
            </th>
            <th scope="col" class="px-6 py-3">
              Type
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
            <th scope="col" class="px-6 py-3">
              Date
            </th>
            <th scope="col" class="px-6 py-3">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredAppointments.length == 0" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
            <td colspan="7" class="text-center p-4">ไม่มีข้อมูล</td>
          </tr>
          <tr v-for="appointment in filteredAppointments" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
              {{ appointment.id }}
            </th>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowr">
              {{ appointment.title }}
            </th>
            <td class="px-6 py-4">
              {{ appointment.desc }}
            </td>
            <td class="px-6 py-4">
              {{ appointment.type }}
            </td>
            <td class="px-6 py-4">
              {{ appointment.state }}
            </td>
            <td class="px-6 py-4">
              {{ appointment.date }}
            </td>
            <td class="px-6 py-4">
              <a @click="showEditModal(appointment.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Modal :size="size" v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">
        Add Appointment
      </div>
    </template>
    <template #body>
      <form @submit.prevent="addAppointment" class="flex flex-col gap-2">
        <label for="petType" class="text-sm font-medium text-gray-700 dark:text-gray-200">Pet</label>
        <select id="petType" name="petId"
                    class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="pet in pets" :value="pet.id">{{ pet.id }} - {{ pet.name }}</option>
                  </select>
        <Input placeholder="enter your Name" label="Name" name="title" />
        <Input placeholder="enter your Desciption" label="Desciption" name="desc" />
        <label for="petType" class="text-sm font-medium text-gray-700 dark:text-gray-200">Type</label>
        <select id="petType" name="type"
          class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="PetCare">PetCare</option>
          <option value="PetHealth">PetHealth</option>
        </select>
        <label for="petType" class="text-sm font-medium text-gray-700 dark:text-gray-200">State</label>
        <select id="petType" name="state"
          class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="กำลังดำเนินการ">กำลังดำเนินการ</option>
          <option value="เสร็จแล้ว">เสร็จแล้ว</option>
        </select>
        <Input type="date" placeholder="enter your Desciption" label="Date" name="date" />
        <div class="flex justify-between">
          <button @click="closeModal" type="button"
            class="text-white bg-red-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Delete
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
      Edit Appointment
    </div>
  </template>
  <template #body>
    <form @submit.prevent="editAppointment" class="flex flex-col gap-2">
      <Input placeholder="enter your Name" label="Name" name="title" />
      <Input placeholder="enter your Desciption" label="Desciption" name="desc" />
      <label for="petType" class="text-sm font-medium text-gray-700 dark:text-gray-200">Type</label>
      <select id="petType" name="type"
        class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="PetCare">PetCare</option>
        <option value="PetHealth">PetHealth</option>
      </select>
      <label for="petType" class="text-sm font-medium text-gray-700 dark:text-gray-200">State</label>
      <select id="petType" name="state"
        class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="กำลังดำเนินการ">กำลังดำเนินการ</option>
        <option value="เสร็จแล้ว">เสร็จแล้ว</option>
      </select>
      <Input type="date" placeholder="enter your Desciption" label="Date" name="date" />
      <div class="flex justify-between">
        <button @click="deleteAppointment()" type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
          Cancel
        </button>
        <button @click="closeEditModal" type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Confirm
        </button>
      </div>
    </form>
  </template>
</Modal>

</template>
