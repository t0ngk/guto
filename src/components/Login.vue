<script setup>
import { Input } from 'flowbite-vue'
import { Button } from 'flowbite-vue'

const login = (event) => {
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(user => user.email === data.email)
    if (!user) {
        alert('User does not exist')
        return
    }
    if (user.password !== data.password) {
        alert('Password does not match')
        return
    }
    alert('Login successful')
    window.localStorage.setItem('user', JSON.stringify(user.id))
    window.location.href = '/'
}

</script>
<template>
    <div class="w-screen h-screen flex transition-all">
        <div class="w-1/2 bg-primary md:flex flex-col justify-center items-center hidden">
            <img src="src/assets/Dog.svg" alt="" srcset="" class="w-1/4">
            <h1 class="text-5xl text-white">Guto</h1>
        </div>
        <div class="w-full md:w-1/2 flex justify-center items-center p-4">
            <form @submit.prevent="login" class="shadow p-4 rounded">
                <div class="flex flex-col gap-4">
                    <h1 class="text-xl text-center">Login</h1>
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="w-full">
                            <Input placeholder="Enter your Email" label="Email" name="email" />
                        </div>
                        <div class="w-full">
                            <Input type="password" placeholder="Enter your Password" label="Password" name="password" />
                        </div>
                    </div>
                    <div class="flex justify-end gap-4 items-center">
                        <a href="/register">สมัครอ๊ะยัง?</a>
                        <Button class="bg-primary hover:bg-primary-400 active:bg-primary-600 transition-all">Login</Button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
