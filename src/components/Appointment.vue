<script setup>
import { Button, Input } from 'flowbite-vue'
import { ref } from 'vue'

let checkRadio = ref('');
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

</script>

<template>
    <div class=" container mx-auto my-16">
        <h1 class=" text-center text-2xl font-semibold my-5">
            Appointment
        </h1>

        <!--Time line Here-->
        <p>Time line Here</p>
        <hr>

        <!--Appointment Details Here-->
        <div class="container mx-auto my-16" v-if="state == 1">
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
        <div class="container mx-auto my-16" v-if="state == 3">

        </div>
        <Button class="bg-primary" @click="state++">Next</Button>
    </div>
</template>
