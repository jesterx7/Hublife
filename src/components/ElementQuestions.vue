<template>
    <div class="px-2 py-2">
        <div v-if="selectedElement && isSubmit" class="flex justify-center items-center mt-4 text-center">
            <div class="text-center">
                <h2 class="text-white">
                    YOUR ELEMENT IS
                </h2>
                <div class="w-3/4 h-72 md:h-96 bg-contain bg-no-repeat bg-center py-12 inline-block" alt="flowbite-vue"
                    :style="{ 'background-image': getBackgroundImage() }"></div>
                <h2 class="text-4xl text-white my-8">{{ selectedElement.element }}</h2>
                <div class="w-auto flex justify-center items-center my-4">
                    <p class="text-white font-sm w-2/5">
                        {{ selectedElement.description }}
                    </p>
                </div>
                <a type="button" @click="continueJourneyThread()"
                    class="mt-8 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium inline-flex items-center rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                    Submit
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
        <div v-if="!isSubmit" class="h-screen flex justify-center items-center">
            <div>
                <div class="flex justify-center">
                    <div class="rounded-lg p-6 my-4 w-5/6 md:w-3/5 bg-gray-300 border bg-opacity-25">
                        <p class="text-center text-white mb-8 text-2xl font-bold tracking-tight dark:text-white">{{
            elementQuestion.question }}</p>
                        <div class="flex items-center me-4 my-4"
                            v-for="(answerObj, answerIndex) in elementQuestion.element_answers" :key="answerIndex">
                            <input id="inline-2-radio" type="radio" :value="answerObj.element" v-model="selectedElement"
                                name="elementQuestions"
                                class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="inline-2-radio"
                                class="text-white ms-2 text-sm font-medium dark:text-gray-300">{{
            answerObj.answer }}</label>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center mt-8">
                    <fwb-img alt="flowbite-vue" class="w-4/12 md:w-2/12 text-center items-center cursor-pointer"
                        :src="nextBtn" @click="submitElement()" />
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
import nextBtn from "@/assets/images/buttons/next.png"

export default {
    components: {},
    props: ['modifyJourneyThread', 'modifyElement', 'seqAnswer'],
    data() {
        return {
            elementQuestion: [],
            isLoading: false,
            selectedElement: null,
            isSubmit: false,
            nextBtn
        }
    },
    mounted() {
        this.prosesRequestElementQuestions(this.seqAnswer)
            .then(response => {
                this.elementQuestion = response.data;
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => this.isLoading = false)
    },
    methods: {
        ...mapActions({
            prosesRequestElementQuestions: "prosesRequestElementQuestions",
        }),
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                window.scrollTo({
                    behavior: 'smooth',
                    top: section.offsetTop
                });
            }
        },
        continueJourneyThread() {
            this.modifyJourneyThread(3);
        },
        submitElement() {
            this.isSubmit = true
            this.modifyElement(this.selectedElement);
        },
        getBackgroundImage() {
            let img_path = '/src/assets/images/elements/' + this.selectedElement.img_path;
            return 'url(' + require(img_path) + ')';
        },
    }
}
</script>

<style lang="scss" scoped></style>