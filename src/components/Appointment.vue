<script setup>
import { Button, Input } from 'flowbite-vue'
import { ref } from 'vue'
import Timeline from './Timeline.vue';
import { Icon } from '@iconify/vue';

let checkRadio = ref('');
let checkstep = ref('');
const PetCare = {
    first: 'บริการอาบน้ำตัดขนสัตว์เลี้ยง',
    second: 'บริการสระว่ายน้ำสุนัก',
    third: 'บริการรับฝากสัตว์เลี้ยง',
}
const PetHealth = {
    first: 'บริการตรวจสุขภาพสัตว์เลี้ยง',
}
const service = {
    PetCare: 'PetCare',
    PetHealth: 'PetHealth',
}
let selection = ref({});
let state = ref(1);
let dateApptionment = ref('');
let timeApptionment = ref('');
const AllTime = {
    morning: {
        first: '9.00 - 10.00',
        second: '10.00 - 11.00',
        third: '11.00 - 12.00',
    },
    afternoon: {
        first: '13.00 - 14.00',
        second: '14.00 - 15.00',
        third: '15.00 - 16.00',
    },
    evening: {
        first: '17.00 - 18.00',
        second: '18.00 - 19.00',
        third: '19.00 - 20.00',
    },
}
const stateName = ['a', 'b', 'c', 'd', 'e']


</script>

<template>
    <div class=" container mx-auto my-16">
        <h1 class=" text-center text-2xl font-semibold my-5">
            Appointment
        </h1>

        <!--Time line Here-->
        <Timeline :timeline="stateName" :step="state"></Timeline>
        <hr class="my-7">

        <!--Appointment Details Here-->
        <div class="container mx-auto my-16" v-if="state == 3">
            <div class="flex justify-center gap-12">
                <div class="flex items-center pl-4 border border-gray-200 rounded w-1/6">
                    <input id="bordered-radio-1" type="radio" value="PetCare" name="bordered-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" v-model="checkRadio">
                    <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">
                        PetCare</label>
                </div>
                <div class="flex items-center pl-4 border border-gray-200 rounded w-1/6">
                    <input id="bordered-radio-1" type="radio" value="PetHealth" name="bordered-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" v-model="checkRadio">
                    <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">
                        PetHealth</label>
                </div>
            </div>
            <h1 class=" text-xl font-semibold">
                เลือกบริการ
            </h1>
            <hr>
            <div class="flex items-center pl-4 border border-gray-200 rounded my-5" v-if="checkRadio == 'PetCare'"
                v-for="n in PetCare">
                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">{{ n }}</label>
            </div>
            <div class="flex items-center pl-4 border border-gray-200 rounded my-5" v-if="checkRadio == 'PetHealth'"
                v-for="n in PetHealth">
                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">{{ n }}</label>
            </div>
        </div>
        <div class="container mx-auto my-16" v-if="state == 2">
            <h1 class="text-xl font-semibold">วันที่ต้องการจะนัด</h1>
            <hr class="mb-5">
            <Input type="date" placeholder="enter your first name" label="Date for apptionment" v-model="dateApptionment" />
            <h1 class="text-xl font-semibold mt-5">เวลาที่ต้องการจะนัด</h1>
            <hr class="mb-5">
            <p class=" text-xl font-medium"> รอบเช้า </p>
            <div class="flex flex-row items-center pl-4 w-1/6 border border-gray-200 rounded mb-3"
                v-for="time in AllTime.morning">
                <input id="bordered-checkbox-1" type="radio" value="" name="bordered-checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                    v-model="timeApptionment">
                <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">{{
                    time }}</label>
            </div>

            <p class=" text-xl font-medium"> รอบเช้า </p>
            <div class="flex flex-row items-center pl-4 w-1/6 border border-gray-200 rounded mb-3"
                v-for="time in AllTime.afternoon">
                <input id="bordered-checkbox-1" type="radio" value="" name="bordered-checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                    v-model="timeApptionment">
                <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">{{
                    time }}</label>
            </div>

            <p class=" text-xl font-medium"> รอบเช้า </p>
            <div class="flex flex-row items-center pl-4 w-1/6 border border-gray-200 rounded mb-3"
                v-for="time in AllTime.evening">
                <input id="bordered-checkbox-1" type="radio" value="" name="bordered-checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                    v-model="timeApptionment">
                <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">{{
                    time }}</label>
            </div>
        </div>
        <div class="container mx-auto my-16" v-if="state == 1">
            <div>
                <h1 class="text-xl font-semibold">ข้อมูลสัตว์เลี้ยง</h1>
                <hr class="my-3">
                <p class=" text-base font-medium mb-3">
                    เคยใช้บริการมาก่อนไหม ?
                </p>
                <div class="mb-5 flex gap-4">
                    <div>
                        <input id="bordered-radio-1" type="radio" value="yes" name="bordered-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            v-model="checkstep">
                        <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">
                            เคยใช้บริการมาก่อน</label>
                    </div>
                    <div>
                        <input id="bordered-radio-1" type="radio" value="no" name="bordered-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            v-model="checkstep">
                        <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">
                            ไม่เคยใช้บริการมาก่อน</label>
                    </div>
                </div>
                <div v-if="checkstep == 'yes'">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Select an
                        option</label>
                    <select id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected>Choose a country</option>
                    </select>
                </div>
                <div v-else-if="checkstep == 'no'">
                    <Input type="text" placeholder="enter your pet" label="ชื่อสัตว์เลี้ยง" v-model="firstName" />
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">ประเภท</label>
                    <select id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected>Choose a type</option>
                        <option>หมา</option>
                        <option>แมว</option>
                        <option>นก</option>
                    </select>
                    <p class="mt-2">เพศ</p>
                    <div class="flex gap-5 my-3">
                        <div>
                            <div class="flex items-center">
                                <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="default-radio-2"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">เพศผู้</label>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center">
                                <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="default-radio-2"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">เพศเมีย</label>
                            </div>
                        </div>
                    </div>
                    <Input type="number" placeholder="enter your pet age" label="อายุ" />
                    <Input type="text" placeholder="enter your email" label="สายพันธ์" />
                    <label for="message"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">หมายเหตุ</label>
                    <textarea id="message" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Write your thoughts here..."></textarea>
                </div>
            </div>
        </div>
        <div class="container mx-auto my-16" v-if="state == 4">
            <div>
                <h1 class=" text-xl font-semibold">สรุปการนัด</h1>
                <hr class="my-4">
                <div class="flex w-full shadow-2xl rounded p-4">
                    <div class="w-1/2 ">
                        <p class="px-2 my-3">
                            ประเภทการนัดหมาย : {{ }}
                        </p>
                        <p class="px-2 my-3">
                            บริการ : {{ }}
                        </p>
                        <p class="px-2 my-3">
                            ชื่อ : {{ }}
                        </p>
                        <p class="px-2 my-3">
                            เบอร์ : {{ }}
                        </p>
                        <p class="px-2 my-3">
                            เคยใช้บริการมาก่อนไหม : {{ }}
                        </p>
                    </div>
                    <div class="w-1/2">
                        <p class="px-2 my-3">
                            ชื่อสัตว์เลี้ยง : {{ }}
                        </p>
                        <p class="px-2 my-3">
                            ประเภท : {{ }}
                        </p>
                        <p class="px-2 my-3">
                            เพศ : {{ }}
                        </p>
                        <p class="px-2 my-3">
                            สายพันธ์ : {{ }}
                        </p>
                        <p class="px-2 my-3">
                            วัน : {{ }}
                        </p>
                        <p class="px-2 my-3">
                            เวลา : {{ }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto my-16" v-if="state == 5">
            <div class="w-full flex flex-col justify-center items-center gap-4">
                <Icon icon="line-md:circle-to-confirm-circle-twotone-transition" class="text-green-500 text-8xl"></Icon>
                <p class="text-lg font-semibold">ยื่นยันการนัดหมาย</p>
            </div>
        </div>
        <div class="flex justify-between">
            <Button class="bg-primary" v-if="state > 1" @click="state--">Previous</Button>
            <Button class="bg-primary" v-if="state != 5" @click="state++">Next</Button>
            <Button class="bg-primary" v-if="state == 5" @click="state++">Confirm</Button>
        </div>
    </div>
</template>
