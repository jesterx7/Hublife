<template>
    <div class="mx-auto my-8 max-w-screen-xl pb-8 px-10">
        <div class="flex justify-center">
            <fwb-img class="w-3/4 md:w-1/4 lg:w-1/4 py-2" alt="flowbite-vue" :src="careerTitle" />
        </div>
        <div class="flex justify-center">
            <div class="grid grid-cols-3 md:grid-cols-5 gap-2 mt-12 w-4/4">
                <div v-for="(item, index) in careerList" :key="index"
                    class="text-white flex items-center justify-center text-center w-24 h-24 md:w-40 md:h-40 rounded-lg p-4 bg-contain bg-no-repeat"
                    :style="{ 'background-image': getBackgroundImage(item.icon_path) }" @click="openCareerModal(item)">
                </div>
            </div>
        </div>

        <div v-if="selectedCareer && !selectedCareerDetail"
            class="flex pb-20 overflow-y-auto overflow-x-hidden fixed my-14 justify-center items-center w-full inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-700/50">
            <div :style="{ backgroundImage: 'url(' + bgModalImage + ')' }"
                class="h-3/4 w-3/4 flex justify-center items-center p-4 bg-no-repeat bg-center bg-contain">
                <div class="max-w-2xl">
                    <div class="relative rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-center items-center text-center">
                            <div class="text-sm font-medium">
                                <ul class="max-w-md space-y-1 text-white list-none list-inside">
                                    <li v-for="(item, index) in selectedCareer.careers" :key="index"
                                        @click="addCareer(item)" class="cursor-pointer text-2xl">
                                        {{ item.career }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="selectedCareerDetail"
            class="flex pb-20 overflow-y-auto overflow-x-hidden fixed my-14 justify-center items-center w-full inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-700/50">
            <div :style="{ backgroundImage: 'url(' + bgModalCareer + ')' }"
                class="h-2/4 flex justify-center items-center max-12 p-4 w-full m-auto relative bg-no-repeat bg-center bg-contain">
                <div class="m-auto max-w-2xl pr-12 pt-8 flex justify-center item-center">
                    <div class="relative rounded-lg shadow dark:bg-gray-700 text-center">
                        <button type="button" @click="closeCareerModal()"
                            class="text-white bg-transparent text-sm w-8 h-8 ms-auto absolute top-2 right-0">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-4 md:p-5">
                            <p class="text-xs md:text-2xl font-semibold text-white dark:text-white">
                                {{ selectedCareerDetail.career }}
                            </p>
                        </div>
                        <div class="flex justify-center items-center text-center text-white">
                            <p class="text-xs md:text-xl">{{ selectedCareerDetail.description }}</p>
                        </div>
                        <div class="mt-2 md:mt-12 mb-2 float-end">
                            <a type="button" @click="continueJourneyThread()"
                                class="cursor-pointer text-white text-center inline-flex items-center bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xs md:text-sm px-5 py-1 md:py-2.5">
                                Next
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
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
import { mapActions } from "vuex";
import bgModalImage from "@/assets/images/bgModal.png"
import bgModalCareer from "@/assets/images/bgModal2.png"
import careerTitle from "@/assets/images/careerTitle.png"

export default {
    components: {},
    props: ['modifyJourneyThread', 'modifyCareerPath'],
    mounted() {
        this.prosesRequestCareers("get")
            .then(response => {
                this.careerList = response.data;
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => this.isLoading = false)
    },
    data() {
        return {
            ...mapActions({
                prosesRequestCareers: "prosesRequestCareers",
            }),
            careerList: [],
            selectedCareer: null,
            selectedCareerDetail: null,
            bgModalImage,
            bgModalCareer,
            careerTitle
        }
    },
    methods: {
        openCareerModal(item) {
            this.selectedCareer = item;
        },
        closeCareerModal() {
            this.selectedCareer = null;
            this.selectedCareerDetail = null;
        },
        continueJourneyThread() {
            this.modifyCareerPath(this.selectedCareer);
            this.modifyJourneyThread(1);
        },
        addCareer(item) {
            this.selectedCareerDetail = item;
        },
        getBackgroundImage(path) {
            let img_path = '/src/assets/images/careers/' + path;
            return 'url(' + require(img_path) + ')';
        },
    }
}
</script>

<style>
.career-img {
    width: -webkit-fill-available;
}
</style>