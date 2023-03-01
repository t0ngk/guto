<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/footer.vue'
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(route, () => {
  pathname.value = route.path;
});

const pathname = ref();
const noNeedNavBar = ['/Login', '/Register'];

</script>

<template>
  <Navbar v-if="!(noNeedNavBar.includes(pathname))" />
  <router-view></router-view>
  <Footer v-if="!(noNeedNavBar.includes(pathname))" />
</template>
