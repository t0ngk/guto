<script setup>
import { TheCard } from 'flowbite-vue'
import { Input } from 'flowbite-vue'
import { Button } from 'flowbite-vue'
</script>
<template>
    <div class="w-screen h-screen flex">
        <div class="w-1/2 bg-primary-400 md:flex flex-col justify-center items-center hidden">
            <img src="src/assets/Dog.svg" alt="" srcset="" class="w-1/4">
            <h1 class="text-5xl text-white">Guto</h1>
        </div>
        <div class="w-full md:w-1/2 flex justify-center items-center p-4">
            <div class="shadow p-4">
                <div class="flex flex-col gap-4">
                    <h1 class="text-xl text-center">Login</h1>
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="w-full">
                            <Input placeholder="Enter your Username" label="Username" />
                        </div>
                        <div class="w-full">
                            <Input placeholder="Enter your Password" label="Password" />
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <Button class="bg-primary hover:bg-primary-400 transition-all">Login</Button>
                    </div>
            </div>
        </div>
    </div>
</div>
<!-- <div class="container mx-auto flex my-64 gap-40 justify-center items-center">
        <div class="">
            <img src="src/assets/Dog.svg" class=" w-60">
        </div>
        <div class="flex-col">
            <TheCard>
                <h1 class=" text-center mb-5 font-bold text-xl">Login</h1>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                        <Input placeholder="Enter your Username" label="Username" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <Input placeholder="Enter your Password" label="Password" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <Button color="yellow">Login</Button>
                                </div>
                            </div>
                        </TheCard>
                    </div>
                </div> -->
</template>
