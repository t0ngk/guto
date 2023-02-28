<script setup>
import Flicking from "@egjs/vue3-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import { Pagination } from "@egjs/flicking-plugins";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/vue3-flicking/dist/flicking.css";
import { ref } from "vue";

const plugins = ref([
  new Arrow(),
  new Pagination({ type: "bullet" }),
  new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
]);

</script>
<template>
  <Flicking :options="{ align: 'prev', circular: true }" :plugins="plugins">
    <div
      class="panel w-full h-56 flex justify-center items-center bg-gray-200 md:h-96"
    >
      1
    </div>
    <div
      class="panel w-full h-56 flex justify-center items-center bg-gray-200 md:h-96"
    >
      2
    </div>
    <div
      class="panel w-full h-56 flex justify-center items-center bg-gray-200 md:h-96"
    >
      3
    </div>
    <template #viewport>
      <span class="flicking-arrow-prev"></span>
      <span class="flicking-arrow-next"></span>
      <div class="flicking-pagination"></div>
    </template>
  </Flicking>
</template>
