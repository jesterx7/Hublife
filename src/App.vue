<template>
  <div id="hublife-container" class="flex flex-col min-h-screen bg-cover bg-center max-w-screen overflow-x-hidden" :style="{ 'background-image': getBackgroundByComponent() }">
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
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['backgroundValue'])
  },
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
      let img_path = '/src/assets/images/background/' + this.backgroundValue;
      return 'url(' + require(img_path) + ')';
    }
  }
};
</script>