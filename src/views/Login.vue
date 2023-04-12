<script setup>
import FormLogin from '../components/FormLogin.vue';

</script>

<template>
    <n-layout-content>
        <div class="w-screen h-screen flex transition-all">
            <div class="w-1/2 bg-primary md:flex flex-col justify-center items-center hidden">
                <img src="../assets/logo.svg" alt="" srcset="" class="w-1/4">
            </div>
            <div class="w-auto h-auto my-auto mx-auto">
                <n-card class="shadow-2xl" hoverable>
                    <n-message-provider>
                        <FormLogin />
                    </n-message-provider>
                </n-card>
            </div>
        </div>
    </n-layout-content>
</template>
