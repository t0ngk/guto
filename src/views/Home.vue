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

    <section class="my-64 reveal">
        <n-h1 class="text-center font-semibold"> ที่ตั้งคลินิก </n-h1>
        <div class="flex justify-center">
            <div class="">
                <iframe class=""
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.790312141103!2d100.77900356483022!3d13.73114134036085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d66308ce98ffd%3A0xcb43a76f038c38ca!2z4LiE4LiT4Liw4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Liq4Liy4Lij4Liq4LiZ4LmA4LiX4LioIOC4quC4luC4suC4muC4seC4meC5gOC4l-C4hOC5guC4meC5guC4peC4ouC4teC4nuC4o-C4sOC4iOC4reC4oeC5gOC4geC4peC5ieC4suC5gOC4iOC5ieC4suC4hOC4uOC4k-C4l-C4q-C4suC4o-C4peC4suC4lOC4geC4o-C4sOC4muC4seC4hyAoSVRLTUlUTCk!5e0!3m2!1sth!2sth!4v1681292986331!5m2!1sth!2sth"
                    width="800" height="450" style="border:1;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>

    <footer class="bg-primary-400">
        <div class="py-5 flex flex-col">
            <div class="flex flex-col">
                <n-p class="text-center font-semibold text-xl">ช่องทางการติดต่อ</n-p>
                <div class="flex flex-col gap-y-3">
                    <div class="flex gap-5 justify-center">
                        <a href="https://www.facebook.com/ITLadkrabang">
                            <Icon icon="mdi:facebook" class="text-4xl" />
                        </a>
                        <a href="https://www.instagram.com/kmitlofficial/">
                            <Icon icon="mdi:instagram" class="text-4xl" />
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-y-0">
                        <n-p>อีเมล : 64070047@kmitl.ac.th</n-p>
                        <n-p>เบอร์โทร : 064-070-047</n-p>
                    </div>
                </div>
                <div class="text-center text-lg px-10">
                    <n-p>คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เลขที่ 1 ซอยฉลองกรุง 1
                        แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520 ติดต่อ +66 (0) 2723 4900 หรือ +66 (0) 2723 4910</n-p>
                </div>
            </div>
        </div>
    </footer>
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

