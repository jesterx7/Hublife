<template>
  <div class="flex flex-col min-h-screen bg-cover" :style="{ 'background-image': getBackgroundByComponent() }">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<script>
export default {
  data() {
    return {
      bgPath: 'career.png'
    };
  },
  methods: {
    updateBgPath(_bgPath) {
      this.bgPath = _bgPath;
    },
    getBackgroundByComponent() {
      let img_path = '/src/assets/images/background/careerBg.png';
      return 'url(' + require(img_path) + ')';
    }
  }
};
</script>