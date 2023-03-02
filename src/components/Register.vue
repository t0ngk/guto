<script setup>
import { Input, Button } from 'flowbite-vue'

const register = (event) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const user = users.find(user => user.email === data.email);
    if (user) {
        alert('User already exists');
        return;
    }
    if (data.password !== data.confirm_password) {
        alert('Password does not match');
        return;
    }
    users.push({
        ...data,
        id: users.length,
        permission: users.length === 0 ? '2' : '0',
    });
    alert('User registered successfully');
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = '/login';
}

</script>

<template>
    <div class="w-full p-4">
        <div class="shadow  w-full flex flex-col gap-4 rounded overflow-hidden">
            <div class="w-full p-4 bg-primary">
                <h1 class="text-5xl text-white">Register</h1>
            </div>
            <form @submit.prevent="register" class="w-full flex flex-col gap-4 p-4">
                <div class="flex flex-col md:flex-row w-full gap-4">
                    <Input placeholder="First name" label="First name" class="w-full" name="first_name" required/>
                    <Input placeholder="Last name" label="Last name" name="last_name" class="w-full" />
                    <Input placeholder="Phone Nummber" label="Phone Nummber" name="phone_number" class="w-full" />
                </div>
                <div>
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        Address
                    </label>
                    <textarea id="message" rows="4" name="address"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Write your Address here...">
                            </textarea>
                </div>
                <div class="flex flex-col md:flex-row w-full gap-4">
                    <Input placeholder="Email" label="Email" class="w-full" name="email" />
                    <Input placeholder="Password" type="password" label="Password" class="w-full" name="password" />
                    <Input placeholder="Confirm Password" type="password" label="Confirm Password" class="w-full" name="confirm_password" />
                </div>
                <div class="flex w-full justify-end">
                    <a href="/register">สมัครอ๊ะยัง?</a>
                    <Button class="w-full md:w-1/4 bg-primary hover:bg-primary-400 active:bg-primary-600 transition-all">Register</Button>
                </div>
            </form>
        </div>
    </div>
</template>
