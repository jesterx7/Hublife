<template>
    <div class="mx-auto max-w-screen-xl pb-8 px-10">
        <div class="flex justify-center items-center">
            <div>
                <div class="w-full flex justify-center">
                    <fwb-img alt="flowbite-vue" class="w-3/4 md:w-2/4 lg:w-2/4 pt-12" :src="imgTitle" />
                </div>
                <div class="flex justify-center mt-8">
                    <div>
                        <div class="grid grid-cols-2 gap-4 mt-8 mb-4">
                            <div class="w-36 h-36 rounded-lg bg-green-300 border-4 border-black">

                            </div>
                            <div class="w-36 h-36 rounded-lg bg-blue-900 flex justify-center items-center border-4 border-black">
                                <div class="w-3/4 h-72 md:h-96 bg-contain bg-no-repeat bg-center py-12 inline-block"
                                    alt="flowbite-vue" :style="{ 'background-image': getElementImg() }"></div>
                            </div>
                            <div class="w-36 h-36 rounded-3xl flex justify-center items-center bg-contain bg-no-repeat bg-center border-4 border-black"
                                :style="{ 'background-image': getCareerPathImg() }">
                            </div>
                            <div
                                class="w-36 h-36 text-gray-700 rounded-full bg-orange-400 flex items-center justify-center border-4 border-black">
                                <ul class="list-disc">
                                    <li v-for="(item, index) in values" :key="index">{{ item.value }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-full h-24 rounded-lg bg-red-500 flex justify-center items-center mb-8 border-4 border-black"
                            style="border-bottom-left-radius: 70px; border-bottom-right-radius: 70px;">
                            {{ actionPlan[0] }}
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center my-8">
                    <fwb-img alt="flowbite-vue" class="w-4/12 md:w-2/12 text-center items-center cursor-pointer"
                        :src="printBtn" @click="continueJourneyThread()" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>

<script>
import bgResult from "@/assets/images/resultJar.png"
import imgTitle from "@/assets/images/resultTitle.png"
import printBtn from "@/assets/images/buttons/print.png"

export default {
    components: {},
    props: {
        element: Object,
        careerPath: Object,
        values: Array,
        actionPlan: Array
    },
    data() {
        return {
            onConfirm: false,
            imgTitle,
            bgResult,
            printBtn
        }
    },
    methods: {
        toggleClass(classNames) {
            const cardElement = event.currentTarget;
            classNames.forEach(className => {
                cardElement.classList.toggle(className);
            });
        },
        submitQuestionnaireValues() {
            if (this.onConfirm) {
                this.continueJourneyThread();
            } else {
                $("#cancel").fadeIn();
                $("#submit").text("Confirm");
                $(".card-view").not(".card-selected").fadeOut();
                this.onConfirm = true;
            }
        },
        cancelQuestionnaireValues() {
            $("#cancel").fadeOut();
            $("#submit").text("Submit");
            $(".card-view").not(".card-selected").fadeIn();
            this.onConfirm = false;
        },
        continueJourneyThread() {
            this.modifyJourneyThread(3);
        },
        getElementImg() {
            let img_path = '/src/assets/images/elements/' + this.element.img_path;
            return 'url(' + require(img_path) + ')';
        },
        getCareerPathImg() {
            let img_path = '/src/assets/images/careers/' + this.careerPath.icon_path;
            return 'url(' + require(img_path) + ')';
        },
    },
}
</script>

<style>
#cancel {
    display: none;
}

#submit::after {
    content: url("data:image/svg+xml,%3Csvg class='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 14 10'%3E%3Cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' /%3E%3C/svg%3E");
    display: inline-block;
    margin-left: 8px;
    width: 12px;
}
</style>