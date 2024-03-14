<template>
  <div class="bg-hublife-primary flex flex-col min-h-screen">
    <Navbar/>
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>