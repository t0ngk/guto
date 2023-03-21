<script setup>
import FormLogin from '../components/FormLogin.vue';

</script>

<template>
    <n-layout-content>
        <div class="w-screen h-screen flex transition-all">
            <div class="w-1/2 bg-primary md:flex flex-col justify-center items-center hidden">
                <img src="src/assets/Dog.svg" alt="" srcset="" class="w-1/4">
                <h1 class="text-5xl text-white">Guto</h1>
            </div>
            <n-message-provider>
                <FormLogin />
            </n-message-provider>
        </div>
    </n-layout-content>
</template>
