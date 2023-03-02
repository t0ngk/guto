<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/footer.vue'
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(route, () => {
  pathname.value = route.path.toLowerCase();
});

const pathname = ref();
const noNeedNavBar = ['/login', '/register'];
</script>

<template>
  <Navbar v-if="!(noNeedNavBar.includes(pathname))" />
  <router-view></router-view>
</template>
