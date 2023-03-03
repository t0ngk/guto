<script setup>
import { Button } from 'flowbite-vue'

</script>
<template>
    <div class="container mx-auto my-10 ">
    <div class="flex justify-center">
      <img
        src="https://media.licdn.com/dms/image/D560BAQGKkWYOs6Go8w/company-logo_200_200/0/1666355901011?e=2147483647&v=beta&t=oC-DU5h-4iNIFLS047sNodqDN835HSTslw9bXschFlA">
      <div class="shadow-xl rounded-lg w-1/2">
        <h1 class=" text-center text-lg font-medium my-4">PetHealth</h1>
        <p class="px-4"> At Thai Union, we believe pets are important family members too. Like all our products, we create
          pet foods
          with exceptional attention so our furry friends receive the tastiest, highest quality ingredients.</p>

        <p class="px-4"> We mix fresh tuna loin with other natural ingredients to enrich the nutrition and flavor of our
          PetCare
          products, including surimi-based fish snacks, canned cod liver, and wet seafood-based cat and dog foods.</p>
      </div>
      <Button class="bg-primary-300 hover:bg-primary-200"><a href="/appointment">ไปนัดกันเลยย</a></Button>
    </div>
  </div>
</template>