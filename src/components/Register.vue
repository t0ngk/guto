<script setup>
import { Input } from 'flowbite-vue'
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'
</script>

<template>
    <div class=" container border-[1px] border-b-0 border-black mt-16 mx-auto bg-[#FFC46B]">
        <p class=" text-lg font-semibold pl-6 py-3">Register</p>
    </div>
    <div class=" container border-[1px] border-black mx-auto">
        <div class="my-5 mx-5">
            <form>
                <h1 class=" font-semibold">ข้อมูลส่วนตัว</h1>
                <div class="flex gap-5 my-5">
                    <div class="flex flex-col gap-2 w-1/4">
                        <Input type="text" placeholder="Enter your First Name" label="First Name" />
                    </div>
                    <div class="flex flex-col gap-2 w-1/4">
                        <Input type="text" placeholder="Enter your Last Name" label="Last Name" />
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <Input type="number" placeholder="Enter your Number Phone" label="Number Phone" />
                    </div>
                    <div class="flex flex-col gap-2 w-1/4">
                        <Input type="email" placeholder="Enter your Email" label="Email" />
                    </div>
                </div>
                <div class="flex gap-5">
                    <div class="flex flex-col gap-2 w-1/4">
                        <Input type="date" placeholder="" label="Date of Birth" />
                    </div>
                    <div class="flex flex-col gap-2 w-1/4">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                            Address</label>
                        <textarea id="message" rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Write your Address here..."></textarea>
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                            your
                            Province</label>
                        <select id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div class="flex flex-col gap-2 w-1/4">
                        <Input placeholder="Enter your Postal Code" label="Postal Code" />
                    </div>
                </div>
                <label>ท่านเป็น...</label>
                <div class="flex items-center my-4">
                    <input id="default-radio-1" type="radio" value="" name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">สัตวแพทย์</label>
                </div>
                <div class="flex items-center my-4">
                    <input id="default-radio-1" type="radio" value="" name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">พยาบาล</label>
                </div>
                <div class="flex items-center my-4">
                    <input id="default-radio-1" type="radio" value="" name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">พนักงาน</label>
                </div>
                <div class="flex items-center my-4">
                    <input id="default-radio-1" type="radio" value="" name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">เจ้าของสัตว์เลี้ยง</label>
                </div>

                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-800">
                <h1 class=" font-semibold">ข้อมูลสัตว์เลี้ยง</h1>
                <div class="flex gap-5 my-5">
                    <div class="flex flex-col gap-2 w-1/4">
                        <Input type="text" placeholder="Enter your Name Pet" label="ชื่อสัตว์เลี้ยง" />
                    </div>
                    <div class="flex flex-col gap-2 w-1/4">
                        <label for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ประเภทสัตว์เลี้ยง</label>
                        <select id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>กรุณาเลือก</option>
                            <option value="US">หมา</option>
                            <option value="CA">แมว</option>
                            <option value="FR">นก</option>
                            <option value="DE">กระต่าย</option>
                            <option value="DE">ปลา</option>
                            <option value="DE">อื่นๆ</option>
                        </select>
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label>เพศ</label>
                        <div>
                            <input type="radio">
                            <label class="ml-2">เพศผู้</label>
                            <input class="ml-2" type="radio">
                            <label class="ml-2">เพศเมีย</label>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 w-1/4">
                        <Input type="text" placeholder="Enter your species" label="สายพันธ์" />
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class=" container border-[1px] border-t-0 border-black mx-auto bg-[#D9D9D9] mb-20">
        <a href="" class="">
        <p class=" text-center">Register</p>
    </a>
</div></template>
