<script setup>
import navber from './components/navber.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <navber />
  <router-view></router-view>
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');

body {
  font-family: 'Prompt', sans-serif;
}

#nav {
  background-color: #DE7D24;
}
</style>
