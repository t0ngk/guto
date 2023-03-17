<script setup>
import { useMessage } from "naive-ui";
import { ref } from "vue";

const message = useMessage();

const onSelect = (value) => {
    message.info(`${value}`);
}

const options = ref([
    {
        label: "Marina Bay Sands",
        key: "marina bay sands",
        disabled: true
    },
    {
        label: "Brown's Hotel, London",
        key: "brown's hotel, london"
    },
    {
        label: "Atlantis Bahamas, Nassau",
        key: "atlantis nahamas, nassau"
    },
    {
        label: "The Beverly Hills Hotel, Los Angeles",
        key: "the beverly hills hotel, los angeles"
    }
]);

</script>

<template>

    <div class="bg-primary-500">
        <div class="py-5 flex justify-between px-16">
            <img src="../assets/Dog.svg" alt="Workflow" class="h-8 w-auto">
            <div class="flex-row md:flex md:gap-10 gap-16 text-xl items-center">
                <div>
                    <n-button text class="text-lg">หน้าหลัก</n-button>
                </div>
                <div>
                    <n-dropdown trigger="hover" :options="options" @select="onSelect">
                        <n-button text class="text-lg">บริการ</n-button>
                    </n-dropdown>
                </div>
                <div>
                    <n-button text class="text-lg">สมัครสมาชิก</n-button>
                </div>
                <div>
                    <n-button text class="text-lg">เข้าสู่ระบบ</n-button>
                </div>
                <div>
                    <n-avatar class="hidden" round size="large"
                        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                </div>
            </div>
        </div>
    </div>
</template>
