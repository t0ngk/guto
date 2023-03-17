<script>

</script>
<template>
    <n-layout-content class="container mx-auto my-16">
        <n-h1 class="text-center">ศูนย์ความเป็นเลิศด้านการดูแล และ ศูนย์ความเป็นเลิศด้านการรักษา</n-h1>
        <p class="text-primary text-base font-bold text-center">ศูนย์ความเป็นเลิศด้านการดูแลคลินิกสัตว์เลี้ย
            ครอบคลุมทั้งการตรวจ รักษา
            และดูแลอย่างต่อเนื่อง ด้วยประสบการณ์
            และมาตรฐานระดับสากล รวมถึงประสานการส่งต่อสัตว์ป่วยเพื่อรับคำปรึกษา
            หรือเข้ามารับการดูแลและส่งกลับไปดูแลต่อยังเจ้าของ</p>



        <n-carousel autoplay class="my-12">
            <div class="carousel-img flex"> 
                <img src="../assets/Animal-Care-Welfare-First-aid.jpg" alt="">
            </div>
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg">
        </n-carousel>


        <section>
            <div class="flex justify-center gap-36 my-12">
                <n-card title="Pet Health" hoverable>
                    <template #cover>
                        <img src="../assets/Animal-Care-Welfare-First-aid.jpg">
                    </template>
                    <p class="text-sm">
                        คลินิกสัตว์เลี้ยง ครอบคลุมทั้งการตรวจ รักษา และดูแลอย่างต่อเนื่อง ด้วยประสบการณ์
                        และมาตรฐานระดับสากล รวมถึงประสานการส่งต่อสัตว์ป่วยเพื่อรับคำปรึกษา
                        หรือเข้ามารับการดูแลและส่งกลับไปดูแลต่อยังเจ้าของ
                    </p>
                    <n-button class="float-right mt-6">ดูเพิ่มเติม</n-button>
                </n-card>

                <n-card title="Pet Care" hoverable>
                    <template #cover>
                        <img src="../assets/course_4335051.jpg">
                    </template>
                    <p class="text-sm">
                        คลินิกสัตว์เลี้ยง ครอบคลุมทั้งการตรวจ รักษา และดูแลอย่างต่อเนื่อง ด้วยประสบการณ์
                        และมาตรฐานระดับสากล รวมถึงประสานการส่งต่อสัตว์ป่วยเพื่อรับคำปรึกษา
                        หรือเข้ามารับการดูแลและส่งกลับไปดูแลต่อยังเจ้าของ
                    </p>
                    <n-button class="float-right mt-6">ดูเพิ่มเติม</n-button>
                </n-card>
            </div>
        </section>
    </n-layout-content>
</template>

<style scoped>
.n-card {
    @apply max-w-lg;
}

.carousel-img{
    @apply w-full h-[240px] object-cover;
}
</style>

