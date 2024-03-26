<template>
    <div class="px-2 py-2">
        <div v-if="!isSubmit" class="flex justify-center">
            <fwb-img class="w-11/12 md:w-3/6 py-2 mt-10 mb-12" alt="flowbite-vue" :src="questionTitle" />
        </div>
        <div v-if="selectedElement && isSubmit" class="flex justify-center mt-16 text-center">
            <div class="text-center">
                <p class="text-white mb-10" style="font-family: 'BrandonBlk';">
                    YOUR ELEMENT IS
                </p>
                <div class="w-3/4 h-72 md:h-96 bg-contain bg-no-repeat bg-center py-12 inline-block" alt="flowbite-vue"
                    :style="{ 'background-image': getBackgroundImage() }"></div>
                <h2 class="text-6xl md:text-8xl text-white my-8" style="font-family: 'Lozange';">{{
            selectedElement.element }}</h2>
                <div class="w-auto flex justify-center items-center my-4">
                    <p class="text-white text-xl w-3/5 md:w-2/5" style="font-family: 'BrandonBlkReg';">
                        {{ selectedElement.description }}
                    </p>
                </div>
                <div class="flex justify-center mt-20 mb-10">
                    <fwb-img alt="flowbite-vue" class="w-4/12 md:w-2/12 text-center items-center cursor-pointer"
                        :src="submitBtn" @click="continueJourneyThread()" />
                </div>
            </div>
        </div>
        <form v-if="!isSubmit" class="h-screen flex justify-center" @submit.prevent="submitElement()">
            <div>
                <div class="flex justify-center">
                    <div class="p-6 my-4 w-5/6 md:w-3/5 bg-gray-300 border bg-opacity-25" style="border-radius: 40px;">
                        <p class="text-center text-white mb-8 text-2xl md:text-3xl font-bold tracking-tight dark:text-white"
                            style="font-family: 'BrandonBlkReg';">{{
            elementQuestion.question }}</p>
                        <div class="flex items-center me-4 my-8"
                            v-for="(answerObj, answerIndex) in elementQuestion.element_answers" :key="answerIndex">
                            <input id="inline-2-radio" type="radio" :value="answerObj.element" v-model="selectedElement"
                                name="elementQuestions"
                                class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                style="transform: scale(1.5);" required>
                            <label for="inline-2-radio"
                                class="text-white ms-8 text-sm md:text-xl font-medium dark:text-gray-300"
                                style="font-family: 'BrandonBlkReg';">{{
            answerObj.answer }}</label>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center mt-8">
                    <button type="submit" class="flex justify-center items-center">
                        <fwb-img alt="flowbite-vue" class="w-4/12 md:w-36 text-center items-center cursor-pointer"
                            :src="nextBtn" />
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>

<script>
import { mapActions } from "vuex";
import nextBtn from "@/assets/images/buttons/next.png"
import questionTitle from "@/assets/images/titles/question.png"
import submitBtn from "@/assets/images/buttons/submit.png"

export default {
    components: {},
    props: ['modifyJourneyThread', 'modifyElement', 'seqAnswer'],
    data() {
        return {
            elementQuestion: [],
            isLoading: false,
            selectedElement: null,
            isSubmit: false,
            nextBtn,
            questionTitle,
            submitBtn
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
            this.modifyJourneyThread();
        },
        submitElement() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
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