<script setup>
const currentRef = ref(1);
</script>

<template>
    <div class="container mx-auto">
        <div class="my-10 border ">
            <n-h1 class="text-center">Appointment</n-h1>
            <div class="my-16 mx-auto">
                <n-steps v-model:current="currentRef">
                    <n-step title="ข้อมูลสัตว์เลี้ยง" />
                    <n-step title="ข้อมูลการนัดหมาย" />
                    <n-step title="เลือกบริการ" />
                    <n-step title="ยื่นยันการนัด" />
                    <n-step title="รอการติดต่อกลับ" />
                </n-steps>
            </div>
            <n-divider />
            <div name="step1" class="">
                
            </div>
        </div>
    </div>
</template>