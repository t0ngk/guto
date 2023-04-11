<script setup>

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navber from './views/Navbar.vue';

const route = useRoute();

const themeOverrides = {
  common: {
    "primaryColor": "#de7d24FF",
    "primaryColorHover": "#c45d1bFF",
    "primaryColorPressed": "#e69c39FF",
    "primaryColorSuppl": "#de7d24FF",
    "baseColor": "#FFF",
    "cardColor": "#F8F1F1FF",
    "dividerColor": "rgba(200, 200, 200, 1)",
    "bodyColor": "#F8F1F1FF"
  },
  "Carousel": {
    "dotColor": "#f2d195FF",
    "dotColorFocus": "#ebb55eFF",
    "dotColorActive": "#e69c39FF"
  },
  Button: {
    "textColor": "rgba(0, 0, 0, 0.65)",
    "color": "#000"
  }
}

watch(route, () => {
  pathname.value = route.path.toLowerCase();
});

const pathname = ref();
const noNeedNavBar = ['/login', '/register'];
</script>
<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <Navber v-if="!(noNeedNavBar.includes(pathname))" />
    <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </n-config-provider>
</template>
