<template>
    <div class="mx-auto my-8 max-w-screen-xl pb-8 px-10 bg-contain">
        <div class="flex justify-center">
            <fwb-img class="w-3/4 md:w-3/6 py-2" alt="flowbite-vue" :src="careerTitle" />
        </div>
        <div class="flex justify-center mt-24">
            <div class="grid grid-cols-3 md:grid-cols-5 mt-12 w-4/4 place-items-center" style="gap: 31px;">
                <div v-for="(item, index) in careerList" :key="index"
                    class="text-white flex items-center justify-center text-center w-24 h-24 md:w-40 md:h-40 rounded-lg p-4 bg-contain bg-no-repeat"
                    :style="{ 'background-image': getBackgroundImage(item.icon_path) }" @click="openCareerModal(item)">
                </div>
            </div>
        </div>

        <div v-if="selectedCareer && !selectedCareerDetail"
            class="flex fixed justify-center items-center w-full inset-0 ml-4">
            <div :style="{ backgroundImage: 'url(' + bgModalImage + ')' }"
                class="h-3/4 w-3/4 flex justify-center items-center p-4 bg-no-repeat bg-center bg-contain pr-7">
                <div class="max-w-2xl pt-10">
                    <div class="relative rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-center items-center text-center">
                            <div class="font-medium">
                                <ul
                                    class="career-detail max-w-md space-y-3 md:space-y-5 text-white list-none list-inside mb-4">
                                    <li v-for="(item, index) in selectedCareer.careers" :key="index"
                                        @click="addCareer(item)"
                                        class="w-11/12 list-career cursor-pointer text-xs md:text-md">
                                        {{ item.career.toUpperCase() }}
                                    </li>
                                </ul>
                                <div class="flex justify-center">
                                    <fwb-img @click="closeCareerModal()" class="w-1/4 md:w-2/8 py-2 mr-4 md:mr-8" alt="flowbite-vue" :src="backBtn" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="selectedCareerDetail"
            class="flex pb-20 overflow-y-auto overflow-x-hidden fixed my-14 justify-center items-center w-full inset-0 max-h-full">
            <div :style="{ backgroundImage: 'url(' + bgModalCareer + ')' }"
                class="h-2/4 flex justify-center items-center max-12 p-4 w-full m-auto relative bg-no-repeat bg-center bg-contain ml-8">
                <div class="m-auto max-w-2xl pr-12 pt-8 flex justify-center item-center">
                    <div class="relative rounded-lg shadow dark:bg-gray-700 text-center">
                        <div class="px-4 pt-1 md:pt-12 pb-4 md:pb-8">
                            <p class="text-xs md:text-2xl font-semibold text-white dark:text-white"
                                style="font-family: 'BrandonBlk';">
                                {{ selectedCareerDetail.career.toUpperCase() }}
                            </p>
                        </div>
                        <div class="flex justify-center items-center text-center text-white">
                            <p class="text-xs md:text-md md:w-3/4 lg:text-xl" style="font-family: 'BrandonBlkReg';">{{
                selectedCareerDetail.description }}</p>
                        </div>
                        <div class="md:mt-8 flex justify-center">
                            <fwb-img @click="closeCareerModal()" class="w-1/4 md:w-1/6 py-2 mr-4 md:mr-8" alt="flowbite-vue" :src="backBtn" />
                            <fwb-img @click="continueJourneyThread()" class="w-1/4 md:w-1/6 py-2 mr-4 md:mr-8" alt="flowbite-vue" :src="submitBtn" />
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
import nextBtn from "@/assets/images/buttons/next.png"
import backBtn from "@/assets/images/buttons/back.png"

export default {
    components: {},
    props: ['modifyJourneyThread', 'modifyCareerPath', 'modifyCareerDetail', 'modifyBgPath'],
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
            this.modifyCareerDetail(this.selectedCareerDetail);
            this.modifyCareerPath(this.selectedCareer);
            this.modifyJourneyThread();
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

    .list-career {
        font-size: 10px !important;
    }
}
</style>