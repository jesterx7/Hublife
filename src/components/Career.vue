<template>
    <div class="mx-auto my-8 max-w-screen-xl pb-8 px-10">
        <div class="md:grid md:grid-cols-5 gap-2">
            <fwb-img v-for="(item, index) in careerList" :key="index" alt="flowbite-vue"
                img-class="rounded-lg transition-all duration-300 cursor-pointer filter" size="20"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                @click="openCareerModal(item)" />
        </div>
        <a type="button" @click="continueJourneyThread()" v-if="selectedCareerDetail.length == 3"
            class="mt-12 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium inline-flex items-center rounded-lg text-sm px-5 py-2.5 text-center mb-2">
            Submit
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </a>
        <div v-if="selectedCareer"
            class="flex pb-20 overflow-y-auto overflow-x-hidden fixed my-14 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-700/50">
            <div class="m-auto relative p-4 w-full max-w-2xl">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <fwb-img alt="flowbite-vue"
                        img-class="career-img rounded-t-lg transition-all duration-300 cursor-pointer filter" size="20"
                        :src="selectedCareer.img_path" />
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            {{ selectedCareer.name }}
                        </h3>
                        <button type="button" @click="closeCareerModal()"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="p-4 md:p-5 space-y-4">
                        <div
                            class="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <label v-for="(item, index) in selectedCareer.career_list_detail" :key="index"
                                @click="addCareer(item, $event)"
                                :class="'block w-full px-4 py-2 border-b cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white'">
                                {{ item }}
                            </label>
                        </div>
                    </div>
                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="default-modal" type="button" @click="closeCareerModal()"
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
                    "name": "Health and Medicine",
                    "img_path": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
                    "career_list_detail": ["Medical Doctor", "Nurse", "Midwife", "Dentist", "Pharmacist", "Radiographer", "Physical Therapist"]
                },
                {
                    "name": "Sports, Leisure, and Tourism",
                    "img_path": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
                    "career_list_detail": ["Professional athlete", "Personal trainer", "Cosmetologist", "Hotel manager", "Travel agent"]
                },
                {
                    "name": "Finance, Law, and Politics",
                    "img_path": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
                    "career_list_detail": ["Bank manager", "Trader", "Investment analyst", "Accountant", "Actuary", "Financial Advisor"]
                },
                {
                    "name": "Information Technology and Computing",
                    "img_path": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
                    "career_list_detail": ["Software engineer", "Systems analyst", "Database administrator", "Network engineer", "IT Support executive"]
                },
                {
                    "name": "Constuction",
                    "img_path": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
                    "career_list_detail": ["Architect", "Structural engineer", "Cost engineer", "Town planner", "Builder", "Consturction manager"]
                },
            ],
            selectedCareer: null,
            selectedCareerDetail: [],
            selectedClassNames: ['border-blue-500', 'border-2']
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
            this.modifyJourneyThread(1);
        },
        addCareer(item, event) {
            const el = event.currentTarget;

            this.selectedClassNames.forEach(className => {
                el.classList.toggle(className);
            });

            if (this.selectedCareerDetail.includes(item)) {
                this.selectedCareerDetail = this.selectedCareerDetail.filter(item => item !== item);
            } else {
                this.selectedCareerDetail.push(item);
            }
        },
    }
}
</script>

<style>
.career-img {
    width: -webkit-fill-available;
}
</style>