<script setup>
import { Input, Button } from 'flowbite-vue'
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'
</script>

<template>
    <div class="w-full p-4">
        <div class="shadow p-4 w-full flex flex-col gap-4 rounded">
            <h1 class="text-5xl">Register</h1>
            <form class="w-full flex flex-col gap-4">
                <div class="flex flex-col md:flex-row w-full gap-4">
                    <Input placeholder="First name" label="First name" class="w-full" />
                    <Input placeholder="Last name" label="Last name" class="w-full" />
                    <Input placeholder="Phone Nummber" label="Phone Nummber" class="w-full" />
                </div>
                <div>
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        Address
                    </label>
                    <textarea id="message" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Write your Address here...">
                            </textarea>
                </div>
                <div class="flex flex-col md:flex-row w-full gap-4">
                    <Input placeholder="Email" label="Email" class="w-full" />
                    <Input placeholder="Password" type="password" label="Password" class="w-full" />
                    <Input placeholder="Confirm Password" type="password" label="Confirm Password" class="w-full" />
                </div>
                <div class="flex w-full justify-end">
                    <Button class="w-full md:w-1/4 bg-primary hover:bg-primary-400 active:bg-primary-600 transition-all">Register</Button>
                </div>
            </form>
        </div>
    </div>
</template>
