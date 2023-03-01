<script setup>
  import Slide from './Slide.vue' 
  import { Button } from 'flowbite-vue';
</script>

<template>
  <div class=" container mx-auto">
    <div class=" mx-auto my-14 text-center">
      <h1 class=" text-2xl font-black mb-4">
        ศูนย์ความเป็นเลิศด้านการดูแล และ ศูนย์ความเป็นเลิศด้านการรักษา
      </h1>
      <p class="text-primary text-base font-bold">ศูนย์ความเป็นเลิศด้านการดูแลคลินิกสัตว์เลี้ย ครอบคลุมทั้งการตรวจ รักษา
        และดูแลอย่างต่อเนื่อง ด้วยประสบการณ์
        และมาตรฐานระดับสากล รวมถึงประสานการส่งต่อสัตว์ป่วยเพื่อรับคำปรึกษา
        หรือเข้ามารับการดูแลและส่งกลับไปดูแลต่อยังเจ้าของ</p>
    </div>
  </div>

  <Slide></Slide>

  <section>
    <div class=" container mx-auto my-4">
      <div class="flex-row md:flex gap-4">
        <div class="bg-white rounded-lg shadow-2xl p-4">
          <div class=" text-center">
            <img class="mx-auto my-2 w-9/12 h-2/4" src="src/assets/course_4335051.jpg" alt="logo" />
            <h1 class=" text-xl font-bold my-3">
              PetCare
            </h1>
            <p class=" text-sm mb-5">
              คลินิกสัตว์เลี้ยง ครอบคลุมทั้งการตรวจ รักษา และดูแลอย่างต่อเนื่อง ด้วยประสบการณ์
              และมาตรฐานระดับสากล รวมถึงประสานการส่งต่อสัตว์ป่วยเพื่อรับคำปรึกษา
              หรือเข้ามารับการดูแลและส่งกลับไปดูแลต่อยังเจ้าของ
            </p>
            <Button class="bg-primary hover:bg-primary-400 active:bg-primary-600 transition-all">
              อ่านเพิ่มเติม
            </Button>
          </div>
        </div>
        <div class=" bg-white rounded-lg shadow-lg p-4">
          <div class=" text-center">
            <img class="mx-auto my-2 w-10/12 h-2/3" src="src/assets/Animal-Care-Welfare-First-aid.jpg" alt="logo" />
            <h1 class=" text-xl font-bold my-3">
              PetHealth
            </h1>
            <p class=" text-sm mb-5">
              คลินิกสัตว์เลี้ยง ครอบคลุมทั้งการตรวจ รักษา และดูแลอย่างต่อเนื่อง ด้วยประสบการณ์
              และมาตรฐานระดับสากล รวมถึงประสานการส่งต่อสัตว์ป่วยเพื่อรับคำปรึกษา
              หรือเข้ามารับการดูแลและส่งกลับไปดูแลต่อยังเจ้าของ
            </p>
            <Button class="bg-primary hover:bg-primary-400 active:bg-primary-600 transition-all">
              อ่านเพิ่มเติม
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
