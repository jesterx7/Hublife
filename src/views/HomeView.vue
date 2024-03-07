<script>
import { Vue3Lottie } from 'vue3-lottie'
import LandingAnimation from "@/assets/images/animation-images/img-home.json"
import FormsAnimation from "@/assets/images/animation-images/fill-forms.json"

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      LandingAnimation,
      FormsAnimation
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          behavior: 'smooth',
          top: section.offsetTop
        });
      }
    }
  }
}
</script>
<template>
  <section id="#landing" class="bg-white py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
    <h2 :class="'mb-4 text-8xl tracking-tight font-extrabold text-hublife-primary dark:text-white'">YOUNIVERSE</h2>
    <div class="text-hublife-secondary text-center py-4">
      <p>Hello, welcome to HUBLIFE YOUNIVERSE.</p>
      <p>Reflect on your inner self and be your best self</p>
      <p>in this journey of dream.</p>
    </div>
    <div class="bg-gray-200 py-8 rounded-lg border">
      <form class="max-w-sm mx-auto mt-4">
        <div class="mb-5">
          <label for="nama" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Nama</label>
          <input type="text" id="nama" name="nama"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Nama Lengkap" required />
        </div>
        <div class="mb-5">
          <label for="telepon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Nomor
            Telepon</label>
          <input type="text" id="telepon" name="telepon"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Nomor Telepon" required />
        </div>
        <div class="mb-5">
          <label for="gender"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Gender</label>
          <div class="flex items-center mb-4">
            <input id="male" type="radio" value="m" name="gender"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="male" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
          </div>
          <div class="flex items-center">
            <input id="female" type="radio" value="f" name="gender"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="female" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
          </div>
        </div>
        <div class="mb-5">
          <label for="umur" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Umur</label>
          <input type="number" id="umur" name="umur"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Umur" required />
        </div>
        <div class="mb-10">
          <label for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Email</label>
          <input type="email" id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="email@gmail.com" required />
        </div>
      </form>
    </div>
    <div class="mt-5">
        <router-link to="/questionnaire"
          class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Start
          Journey</router-link>
      </div>
  </section>
</template>
