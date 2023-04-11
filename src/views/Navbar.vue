<script setup>
import { defineComponent } from "vue";
import { ref } from "vue";

const options = [
    {
        label: 'Pet Care',
        key: 'pet care'
    },
    {
        label: 'Pet Health',
        key: 'pet health'
    }
]
const handleSelect = (option) => {
    console.log(option)
}

</script>


<template>
    <n-layout-header bordered class="bg-primary-500">
        <div class="py-2 flex justify-between items-center px-16">
            <router-link to="/">
                <img src="../assets/logo.svg" alt="Workflow" class="h-[80px] w-auto">
            </router-link>
            <div class="flex-row md:flex md:gap-10 gap-16 text-xl items-center">
                <div>
                    <router-link to="/">
                        <n-button text class="text-lg">หน้าหลัก</n-button>
                    </router-link>
                </div>
                <div>
                    <n-dropdown trigger="hover" :options="options" @select="handleSelect">
                        <n-button text class="text-lg">บริการ</n-button>
                    </n-dropdown>
                </div>
                <div>
                    <router-link to="/Register">
                        <n-button text class="text-lg">สมัครสมาชิก</n-button>
                    </router-link>
                </div>
                <div>
                    <router-link to="/Login">
                        <n-button text class="text-lg">เข้าสู่ระบบ</n-button>
                    </router-link>
                </div>
                <div>
                    <router-link to="/User">
                        <n-avatar class="" round size="large"
                            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                    </router-link>
                </div>
            </div>
        </div>
    </n-layout-header>
</template>