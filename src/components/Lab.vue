<script setup>
import Slide from './Slide.vue';
import Timeline from './Timeline.vue';

const sample_timeline = ['Personal Info', 'Account Info', 'Confirm'];

</script>

<template>
  <div class="w-full">
    <!-- <Slide /> -->
    <Timeline :timeline="sample_timeline" step="1" />
  </div>
</template>
