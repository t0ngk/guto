<script setup>

let slides = [
    {
        header: "PetCare",
        content: "PetCare บริการดูแลสัตว์เลี้ยงที่มุ่งเน้นให้ความสะดวกสบายและความสุขสำหรับสัตว์เลี้ยงของคุณ บริการนี้มีเป้าหมายเพื่อให้เจ้าของสัตว์เลี้ยงมีเวลาและอำนวยความสะดวกในการดูแลสัตว์เลี้ยงของพวกเขา",
        image: '../assets/course_4335051.jpg',
    },
    {
        header: "PetHealth",
        content: "PetHealth เป็นบริการที่มุ่งเน้นการดูแลสุขภาพของสัตว์เลี้ยง โดยมีทีมแพทย์สัตว์มืออาชีพที่มีความเชี่ยวชาญในการรักษาและดูแลสุขภาพของสัตว์ เราให้บริการตรวจรักษาโรค การรักษาอาการบาดเจ็บ การฉีดวัคซีน การตรวจสุขภาพประจำปี และการเสริมสร้างสุขภาพของสัตว์เลี้ยงให้มีคุณภาพชีวิตที่ดีขึ้น เพื่อให้สัตว์เลี้ยงของคุณมีสุขภาพแข็งแรงและมีความสุขอยู่เสมอ",
        image: "../assets/Animal-Care-Welfare-First-aid.jpg",
    },
    {
        header: "PetShop",
        content: "PetShop เป็นบริการที่เน้นการขายสินค้าสำหรับสัตว์เลี้ยง ที่จัดตั้งอยู่ในคลินิกเพื่อความสะดวกสบายของเจ้าของสัตว์เลี้ยง โดยเรามีสินค้าต่างๆ ที่หลากหลาย เช่น อาหารสัตว์เลี้ยง ของเล่น อุปกรณ์การเลี้ยงสัตว์ เสื้อผ้าสำหรับสัตว์ เครื่องดื่มและอื่นๆ ที่จะทำให้เจ้าของสัตว์เลี้ยงสามารถซื้อสินค้าได้ตามความต้องการและความชอบของตนเอง",
        image: "../assets/course_4335051.jpg",
    }
]

</script>
<template>
    <n-carousel :space-between="20" draggable autoplay class="bg-primary-100">
        <div class="w-full h-56 flex flex-row justify-center items-center bg-gray-200 md:h-96"
            v-for="slide in slides">
            <div class="flex-auto w-1/2">
                <img :src="slide.image" alt="image" class="w-5/6">
            </div>
            <div class="flex-grow w-1/2 pr-14 pb-10">
                <n-h1>{{ slide.header }}</n-h1>
                <div class="flex flex-col">
                    <n-p class="text-center">{{ slide.content }}</n-p>
                    <n-button class="bg-primary-500 w-1/5 mt-10" type="primary">ดูเพิ่มเติม</n-button>
                </div>
            </div>
        </div>
    </n-carousel>
</template>