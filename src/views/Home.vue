<script setup>
import slide from "../components/Slide.vue";
import { Icon } from "@iconify/vue";

let reveal = () => {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
</script>
<template>
    <section class="my-32">
        <div class="flex flex-col-reverse justify-between mx-16 md:flex-row">
            <div class="flex flex-col items-center">
                <div class="typewriter">
                    <n-h2 class="font-semibold">Place that <span class="text-primary-500">care</span> everything that <span
                            class="text-primary-500">you care</span></n-h2>
                </div>
                <div class="pt-3 w-2/3">
                    <p class="text-base">ศูนย์ความเป็นเลิศด้านการดูแลคลินิกสัตว์เลี้ยงครอบคลุมทั้งการตรวจรักษา
                        และ ดูแลอย่างต่อเนื่อง ด้วยประสบการณ์ และ มาตรฐานระดับสากล
                        รวมถึงประสานการส่งต่อสัตว์ป่วยเพื่อรับคำปรึกษา
                        หรือเข้ามารับการดูแลและส่งกลับไปดูแลต่อยังเจ้าของ</p>
                </div>
            </div>
            <div>
                <img src="../assets/pet.svg" class="h-4/5">
            </div>
        </div>

    </section>

    <section class="my-32 reveal">
        <n-h1 class="text-center font-semibold">การบริการ</n-h1>
        <slide />
    </section>

    <section class="my-64 reveal">
        <n-h1 class="text-center font-semibold">ทำไมต้องเลือกเรา</n-h1>
        <div class="flex justify-around items-center">
            <div class="flex flex-col">
                <Icon icon="healthicons:doctor-outline" class="text-8xl self-center" />
                <n-p class="font-medium text-lg">มีผู้เชี่ยวชาญมือหนึ่ง</n-p>
            </div>
            <div class="flex flex-col">
                <Icon icon="material-symbols:home-repair-service-outline-rounded" class="text-8xl self-center" />
                <n-p class="font-medium text-lg">มีเครื่องมือที่พร้อม</n-p>
            </div>
            <div class="flex flex-col">
                <Icon icon="mdi:customer-service" class="text-8xl self-center" />
                <n-p class="font-medium text-lg">มีคนดูแล 24 ชม.</n-p>
            </div>
            <div class="flex flex-col">
                <Icon icon="map:veterinary-care" class="text-8xl self-center" />
                <n-p class="font-medium text-lg">สามารถรักษาได้ทุกรูปแบบ</n-p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.typewriter h2 {
    overflow: hidden;
    /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange;
    /* The typwriter cursor */
    white-space: nowrap;
    /* Keeps the content on a single line */
    margin: 0 auto;
    /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em;
    /* Adjust as needed */
    animation:
        typing 3.5s steps(40, end),
        blink-caret .75s step-end infinite;
}

@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

    from,
    to {
        border-color: transparent
    }

    50% {
        border-color: orange;
    }
}

.reveal {
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: 1s all ease;
}

.reveal.active {
    transform: translateY(0);
    opacity: 1;
}
</style>

