<script setup>

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navber from './views/Navbar.vue';

const route = useRoute();
watch(route, () => {
  pathname.value = route.path.toLowerCase();
});

const pathname = ref();
const noNeedNavBar = ['/login', '/register'];
</script>
<template>
  <Navber/>
  <router-view></router-view>
</template>
