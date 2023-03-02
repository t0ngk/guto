<script setup>
import { Button, Input } from 'flowbite-vue'
import { Icon } from '@iconify/vue';
import { onMounted, reactive, ref } from 'vue'
import PermissionTable from '../components/PermissionTable.vue'
import EmployeePetTable from '../components/EmployeePetTable.vue'
const Sidebar = [{
  title: 'User',
  icon: 'material-symbols:person',
  value: 'user',
  permission: 0
},
{
  title: 'Permission',
  icon: 'material-symbols:person',
  value: 'permission',
  permission: 1
}, {
  title: 'Pets',
  icon: 'material-symbols:pets',
  value: 'pets',
  permission: 0
}, {
  title: 'Appointments',
  icon: 'material-symbols:calendar-month',
  value: 'appointments',
  permission: 0
}, {
  title: 'Bills',
  icon: 'material-symbols:payments-outline-sharp',
  value: 'bills',
  permission: 0
}];

let active = ref('user')

const employeeComponent = {
  permission : PermissionTable,
  pets: EmployeePetTable
}

const menus = {
  pets: [{
    title: 'Pet 1',
    desc: [
      {
        title: 'เพศ',
        value: 'เพศผู้'
      },
      {
        title: 'พันธุ์',
        value: 'พันธุ์แมว'
      },
      {
        title: 'สถานะ',
        value: 'สถานะปกติ'
      }
    ]
  }],
  appointments: [{
    title: '10 มีนาคม 2564',
    desc: [
      {
        title: 'เวลานัดหมาย',
        value: '10-00 - 10-30'
      },
      {
        title: 'ประเภทที่นัดหมาย',
        value: 'PetCare'
      },
      {
        title: 'สัตว์เลี้ยง',
        value: 'สีนวล'
      },
    ]
  }],
  bills: [{
    title: '10 มีนาคม 2564',
    desc: [
      {
        title: 'รายการ',
        value: 'ยาสมุนไพร'
      },
      {
        title: 'ราคา',
        value: '100 บาท'
      },
      {
        title: 'สถานะ',
        value: 'ยังไม่ชำระเงิน'
      },
    ]
  }]
}

const users = JSON.parse(localStorage.getItem('users')) || [];
const userId = JSON.parse(localStorage.getItem('user'));
let user = reactive(users.find(user => user.id === userId));

</script>

<template>
  <div class="flex justify-center items-center w-full p-4">
    <div class="flex shadow-2xl h-[35rem] p-4 gap-4 rounded-lg w-11/12 border">
      <aside class="z-40 flex flex-col w-1/4 transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div class="px-3 rounded-lg h-full py-4 overflow-y-auto bg-primary-100 dark:bg-gray-800">
          <ul class="space-y-2">
            <li v-for="menu in Sidebar">
              <a v-if="user.permission >= menu.permission" @click="active = menu.value"
                :class="[`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-primary hover:text-white transition-all dark:hover:bg-gray-700`, active == menu.value ? `bg-primary text-white` : ``]">
                <span>
                  <Icon :icon="menu.icon" class="w-6 h-6" />
                </span>
                <span class="ml-3">{{ menu.title }}</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div class="flex w-3/4 flex-wrap h-full overflow-y-auto">
        <div v-if="active == 'user'" class="w-full p-4">
          <div class="flex justify-between gap-4 w-full">
            <H1 class="text-xl">User</H1>
            <div class="flex gap-4">
              <Button>Change Password</Button>
              <Button>Edit</Button>
            </div>
          </div>
          <div class="my-4">
            <Input :disabled="true" placeholder="enter your First name" v-model="user.first_name" label="ชื่อ" />
            <Input :disabled="true" placeholder="enter your Last name" v-model="user.last_name" label="นามสกุล" />
            <Input :disabled="true" placeholder="enter your Phone number" v-model="user.phone_number" label="เบอร์โทรศัพท์" />
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ที่อยู่</label>
            <textarea id="message" rows="2" :disabled="true"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              v-model="user.address"></textarea>
            <Input :disabled="true" placeholder="enter your Email" v-model="user.email" label="อีเมล" />
          </div>
          <div class="flex justify-end">
            <Button>Log out</Button>
          </div>
        </div>
        <div v-else-if="user.permission > 0" class="flex w-full flex-wrap">
          <component :is="employeeComponent[active]"></component>
        </div>
        <div v-else class="flex gap-4 w-full flex-wrap">
          <div v-for="item in menus[active]" class="w-1/4">
            <div class=" shadow-2xl border rounded-lg p-4 flex flex-col gap-4 w-full">
              <h1 class="text-xl">{{ item.title }}</h1>
              <p v-for="desc in item.desc">
                {{ desc.title }} : {{ desc.value }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
