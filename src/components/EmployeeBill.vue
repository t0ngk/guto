<script setup>
import { Input } from 'flowbite-vue'
import { Modal } from 'flowbite-vue'
import { computed, ref } from 'vue'

const pets = ref(JSON.parse(localStorage.getItem('pets')) || []);
const appointments = ref(JSON.parse(localStorage.getItem('appointments')) || []);
const bills = ref(JSON.parse(localStorage.getItem('bills')) || []);

let filterValue = ref('all');
let filterSearch = ref('');

const filterBills = computed(() => {
  let result = [];
  if (filterValue.value == 'all') {
    result = bills.value;
  } else {
    const pet = pets.value.find(pet => pet.id == filterValue.value);
    const allAppo = pet.appointmentId.map(appoId => appointments.value.find(appo => appo.id == appoId));
    const allBill = allAppo.map(appo => appo.bill);
    result = bills.value.filter(bill => allBill.includes(bill.id));
  }
  return result.filter(bill => bill.detail.toLowerCase().includes(filterSearch.value.toLowerCase()));
});

const allAppo = pets.value.map(ele => {
  return appointments.value.filter(appointment => ele.appointmentId.includes(appointment.id) && appointment.bill == null)
    .map((appointment) => {
      return {
        id: appointment.id,
        title: `${ele.name} - ${appointment.title}`
      }
    })
}).flat();

console.log(allAppo);

const addBill = (event) => {
  const formData = new FormData(event.target);
  const data = ref(Object.fromEntries(formData));

  const id = bills.value.length + 1;

  const appointment = appointments.value.find(appointment => appointment.id == data.value.petAppointment);

  bills.value.push({
    id: id,
    detail: data.value.details,
    date: data.value.date,
    state: data.value.billState,
  });

  appointment.bill = id;

  localStorage.setItem('bills', JSON.stringify(bills.value));
  localStorage.setItem('appointments', JSON.stringify(appointments.value));

  closeModal();
}

const isShowModal = ref(false)
function closeModal() {
  isShowModal.value = false
}
function showModal() {
  isShowModal.value = true
}

let isShowEditModal = ref(false)
const closeEditModal = () => {
  selectBill.value = null
  isShowEditModal.value = false
}
const showEditModal = (id) => {
  selectBill.value = id
  isShowEditModal.value = true
}

let selectBill = ref(null)

const deleteBill = () => {
  const id = selectBill.value;
  bills.value = bills.value.filter(bill => bill.id != id);
  localStorage.setItem('bills', JSON.stringify(bills.value));

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
              <input type="text" id="table-search" v-model="filterSearch"
                class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items">
              <div class="flex gap-2 items-center">
                <label for="petType" class="text-sm font-medium text-gray-700 dark:text-gray-200">From</label>
                <select id="petType" v-model="filterValue"
                  class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="all">All</option>
                  <option v-for="pet in pets" :value="pet.id">{{ pet.id }} - {{ pet.name }}</option>
                </select>
              </div>
            </div>
            <button @click="showModal" type="button"
              class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add Bill
            </button>
          </div>
        </div>
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              Id
            </th>
            <th scope="col" class="px-6 py-3">
              Details
            </th>
            <th scope="col" class="px-6 py-3">
              Date
            </th>
            <th scope="col" class="px-6 py-3">
              State
            </th>
            <th scope="col" class="px-6 py-3">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filterBills.length == 0" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
            <td colspan="5" class="text-center p-4">
              ไม่มีข้อมูล
            </td>
          </tr>
          <tr v-for="bill in filterBills" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
              {{ bill.id }}
            </th>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowr">
              {{ bill.detail }}
            </th>
            <td class="px-6 py-4">
              {{ bill.date }}
            </td>
            <td class="px-6 py-4">
              {{ bill.state }}
            </td>
            <td class="px-6 py-4">
              <a @click="showEditModal(bill.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Modal :size="size" v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">
        Add Bill
      </div>
    </template>
    <template #body>
      <form @submit.prevent="addBill" class="flex flex-col gap-2">
        <label for="petType" class="text-sm font-medium text-gray-700 dark:text-gray-200">Pet</label>
        <select id="petType" name="petAppointment"
          class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option v-for="ap in allAppo" :value="ap.id">{{ ap.title }}</option>
        </select>
        <Input placeholder="Details Bill" label="Details" name="details" />
        <Input type="date" placeholder="Date of bill" label="Date" name="date" />
        <label for="petType" class="text-sm font-medium text-gray-700 dark:text-gray-200">State</label>
        <select id="petType" name="billState"
          class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="ยังไม่ชำระเงิน">ยังไม่ชำระเงิน</option>
          <option value="ชำระเงินแล้ว">ชำระเงินแล้ว</option>
        </select>
        <div class="flex justify-between">
          <button @click="closeModal" type="button"
            class="text-white bg-red-600 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Delete
          </button>
          <button type="sumbit"
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
        Edit Bill
      </div>
    </template>
    <template #body>
      <form @submit.prevent="" class="flex flex-col gap-2">
        <Input placeholder="Details Bill" label="Details" name="details" />
        <Input type="date" placeholder="Date of bill" label="Date" name="date" />
        <label for="petType" class="text-sm font-medium text-gray-700 dark:text-gray-200">State</label>
        <select id="petType" name="billState"
          class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="ยังไม่ชำระเงิน">ยังไม่ชำระเงิน</option>
          <option value="ชำระเงินแล้ว">ชำระเงินแล้ว</option>
        </select>
        <div class="flex justify-between">
          <button @click="deleteBill" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Cancel
          </button>
          <button @click="closeModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Confirm
          </button>
        </div>
      </form>
    </template>
  </Modal>
</template>
