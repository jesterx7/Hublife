<script>
import { Vue3Lottie } from 'vue3-lottie'
import LandingAnimation from "@/assets/images/animation-images/img-home.json"
import logoImg from "@/assets/images/logo.png"

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      LandingAnimation,
      logoImg
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
    },
    submitForm() {
      this.$router.push('/questionnaire');
    }
  }
}
</script>
<template>
  <div :style="{ backgroundImage: 'url(' + bgImg + ')' }" class="max-w-screen bg-cover">
    <section id="#landing"
      class="h-screen py-8 px-4 mx-auto sm:py-16 lg:px-6 content-center flex justify-center mt-36 md:mt-0 md:items-center">
      <div>
        <fwb-img alt="flowbite-vue" class="w-2xl" :src="logoImg" />
        <div class="text-white text-center py-4 text-xl md:text-2xl">
          <p>Hello, welcome to HUBLIFE YOUNIVERSE.</p>
          <p>Reflect on your inner self and be your best self</p>
          <p>in this journey of dream.</p>
        </div>
      </div>
    </section>
    <section id="#form" class="mb-8">
      <div>
        <form id="user-form" class="bg-hublife-secondary max-w-sm mx-auto mt-4 py-8 px-8" style="border-radius: 40px;"
          @submit.prevent="submitForm">
          <div class="mb-5">
            <label for="nama"
              class="block mb-2 text-xl font-medium text-gray-900 dark:text-white text-left">NAME</label>
            <input type="text" id="nama" name="nama"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Full Name" required />
          </div>
          <div class="mb-5">
            <label for="telepon" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white text-left">PHONE
              NUMBER</label>
            <input type="text" id="telepon" name="telepon"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Phone Number" required />
          </div>
          <div class="mb-2">
            <label for="gender"
              class="block mb-2 text-xl font-medium text-gray-900 dark:text-white text-left">GENDER</label>
            <div class="inline-flex items-center mb-4">
              <input id="male" type="radio" value="m" name="gender"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <div class="bg-white pl-1 pr-2 rounded-lg ml-2">
                <label for="female" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Male</label>
              </div>
            </div>
            <div class="inline-flex items-center ml-4">
              <input id="female" type="radio" value="f" name="gender"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <div class="bg-white pl-1 pr-2 rounded-lg ml-2">
                <label for="female" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Female</label>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <label for="umur" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white text-left">AGE</label>
            <input type="number" id="umur" name="umur"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Age" required />
          </div>
          <div class="mb-10">
            <label for="email"
              class="block mb-2 text-xl font-medium text-gray-900 dark:text-white text-left">EMAIL</label>
            <input type="email" id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="email@gmail.com" required />
          </div>
          <div class="mt-5 flex justify-center">
            <button class="w-3/6" type="submit">
              <fwb-img alt="flowbite-vue" class="cursor-pointer" :src="journeyImg" />
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script setup>
import { FwbImg } from 'flowbite-vue'
import bgImg from "@/assets/images/home-bg.png"
import journeyImg from "@/assets/images/buttons/startJourney.png"
</script>

<style>
#user-form {
  font-family: 'BrandonBlk';
}

#user-form input {
  font-family: 'BrandonBlkReg';
}
</style>