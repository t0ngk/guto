<script setup>

const emailLogin = ref('')
const passwordLogin = ref('')

let anw = () => {
    console.log(emailLogin.value)
    console.log(passwordLogin.value)
}

</script>

<template>
    <n-layout-content>
        <div class="w-screen h-screen flex transition-all">
            <div class="w-1/2 bg-primary md:flex flex-col justify-center items-center hidden">
                <img src="src/assets/Dog.svg" alt="" srcset="" class="w-1/4">
                <h1 class="text-5xl text-white">Guto</h1>
            </div>
            <div class="w-full md:w-1/2 flex justify-center items-center p-4">
                <form @submit.prevent="login" class="shadow p-4 rounded ">
                    <div class="flex flex-col gap-4">
                        <h1 class="text-xl text-center">Login</h1>
                        <n-space vertical>
                            <n-input round placeholder="Email" v-model:value="emailLogin"/>
                            <n-input round placeholder="Password" v-model:value="passwordLogin" />
                        </n-space>
                        <div class="flex justify-end gap-4 items-center">
                            <a href="/register">สมัครอ๊ะยัง?</a>
                            <!--Button-->
                            <n-button type="primary" round @click="anw">
                                Login
                            </n-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </n-layout-content>
</template>
