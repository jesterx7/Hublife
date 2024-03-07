<template>
    <div class="mx-auto my-8 max-w-screen-xl pb-8 px-10">
        <div class="md:grid md:grid-cols-5 gap-2">
            <fwb-img v-for="(item, index) in careerList" :key="index" alt="flowbite-vue"
                img-class="rounded-lg transition-all duration-300 cursor-pointer filter" size="20"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                @click="openCareerModal(item)" />
        </div>
        <div v-if="selectedCareer"
            class="flex pb-20 overflow-y-auto overflow-x-hidden fixed my-14 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-700/50">
            <div class="m-auto relative p-4 w-full max-w-2xl">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <fwb-img alt="flowbite-vue"
                        img-class="career-img rounded-t-lg transition-all duration-300 cursor-pointer filter" size="20"
                        :src="selectedCareer.img_path" />
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            {{ this.selectedCareer.name }}
                        </h3>
                        <button type="button" @click="closeCareerModal()"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="default-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="p-4 md:p-5 space-y-4">
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {{ selectedCareer.description }}
                        </p>
                    </div>
                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="default-modal" type="button" @click="chooseCareer()"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
                            Choose as Career</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>

<script>
export default {
    components: {},
    props: ['modifyJourneyThread'],
    data() {
        return {
            careerList: [
                {
                    "name": "Programmer",
                    "img_path": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    "name": "Accountant",
                    "img_path": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    "name": "Musician",
                    "img_path": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    "name": "Business Analyst",
                    "img_path": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    "name": "Technician",
                    "img_path": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
            ],
            selectedCareer: null
        }
    },
    methods: {
        openCareerModal(item) {
            this.selectedCareer = item;
        },
        closeCareerModal() {
            this.selectedCareer = null
        },
        chooseCareer() {
            this.continueJourneyThread();
        },
        continueJourneyThread() {
            this.modifyJourneyThread(3);
        }
    }
}
</script>

<style>
.career-img {
    width: -webkit-fill-available;
}
</style>