<template>
    <div class="mx-auto my-8 max-w-screen-xl pb-8 px-10 bg-contain">
        <div class="flex justify-center">
            <fwb-img class="w-3/4 md:w-3/6 py-2" alt="flowbite-vue" :src="careerTitle" />
        </div>
        <div class="flex justify-center mt-24">
            <div class="grid grid-cols-3 md:grid-cols-5 mt-12 w-4/4" style="gap: 31px;">
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
                        <button type="button" @click="closeCareerModal()"
                            class="close-btn text-white bg-transparent text-sm w-8 h-8 ms-auto absolute" style="top: -25px; right: -100px;">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="flex justify-center items-center text-center">
                            <div class="font-medium">
                                <ul class="career-detail max-w-md space-y-1 md:space-y-2 text-white list-none list-inside">
                                    <li v-for="(item, index) in selectedCareer.careers" :key="index"
                                        @click="addCareer(item)" class="cursor-pointer text-xs md:text-xl">
                                        {{ item.career.toUpperCase() }}
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
                            class="text-white bg-transparent text-sm w-8 h-8 ms-auto absolute top-2 md:top-8 right-0">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="px-4 pt-4 md:pt-12 pb-8">
                            <p class="text-xs md:text-2xl font-semibold text-white dark:text-white"
                                style="font-family: 'BrandonBlk';">
                                {{ selectedCareerDetail.career.toUpperCase() }}
                            </p>
                        </div>
                        <div class="flex justify-center items-center text-center text-white">
                            <p class="text-xs md:text-md md:w-3/4 lg:text-xl" style="font-family: 'BrandonBlkReg';">{{
                selectedCareerDetail.description }}</p>
                        </div>
                        <div class="flex justify-center mt-4 md:mt-8">
                            <fwb-img alt="flowbite-vue" class="w-3/12 md:w-2/12 text-center items-center cursor-pointer"
                                :src="submitBtn" @click="continueJourneyThread()" />
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
import careerTitle from "@/assets/images/titles/career.png"
import submitBtn from "@/assets/images/buttons/submit.png"

export default {
    components: {},
    props: ['modifyJourneyThread', 'modifyCareerPath', 'modifyBgPath'],
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
            careerTitle,
            submitBtn
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

.career-detail {
    font-family: 'BrandonBlk';
}

@media only screen and (max-width: 600px) {
  .close-btn {
    top: 0px !important;
    right: -50px !important;
  }
}
</style>