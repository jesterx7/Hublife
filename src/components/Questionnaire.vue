<template>
    <form class="px-2 py-2" @submit.prevent="continueJourneyThread()">
        <div class="flex justify-center">
            <fwb-img class="w-11/12 md:w-3/6 py-2 mt-10 mb-10" alt="flowbite-vue" :src="questionTitle" />
        </div>
        <div class="flex justify-center items-center my-6" v-for="(questionObj, questionIndex) in questionList"
            :key="questionIndex">
            <div class="p-6 my-4 w-11/12 lg:w-3/5 md:w-4/5 bg-gray-300 border bg-opacity-25"
                style="border-radius: 40px;">
                <p class="quesiton text-center text-white mb-4 text-2xl font-bold tracking-tight dark:text-white"
                    style="font-family: 'BrandonBlkReg';">{{
                questionObj.question
            }}</p>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:place-items-center">
                    <div class="flex items-center me-4" v-for="(answerObj, answerIndex) in questionObj.answers"
                        :key="answerIndex">
                        <input type="radio" :value="answerObj.seq" :name="'question-' + questionIndex"
                            class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            required>
                        <label for="inline-2-radio" class="text-white ms-2 text-xl font-medium dark:text-gray-300"
                            style="font-family: 'BrandonBlkReg';">{{
                answerObj.answer }}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center my-8">
            <button type="submit">
                <fwb-img alt="flowbite-vue" class="w-4/12 md:w-36 text-center items-center cursor-pointer"
                    :src="nextBtn" />
            </button>
        </div>
    </form>
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>

<script>
import { mapActions } from "vuex";
import nextBtn from "@/assets/images/buttons/next.png"
import questionTitle from "@/assets/images/titles/question.png"

export default {
    components: {},
    props: ['modifyJourneyThread', 'modifySeqAnswer'],
    data() {
        return {
            questionList: [],
            isLoading: false,
            stored_answer: {},
            nextBtn,
            answerCounters: [0, 0, 0, 0],
            questionChecker: [],
            questionTitle
        }
    },
    mounted() {
        this.prosesRequestQuestions("get")
            .then(response => {
                this.questionList = response.data;
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => this.isLoading = false)
    },
    methods: {
        ...mapActions({
            prosesRequestQuestions: "prosesRequestQuestions",
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
            let maxIndexAnswer = -1;
            let maxCount = -1;

            for (let i = 0; i < this.questionList.length; i++) {
                let radioValue = document.querySelector('input[name="question-' + i + '"]:checked').value;
                this.answerCounters[radioValue] = (this.answerCounters[radioValue] || 0) + 1;

                if (this.answerCounters[radioValue] > maxCount || (this.answerCounters[radioValue] === maxCount && radioValue < maxIndexAnswer)) {
                    maxCount = this.answerCounters[radioValue];
                    maxIndexAnswer = radioValue;
                }
            }
            this.modifySeqAnswer(maxIndexAnswer);
            this.modifyJourneyThread(2);
        }
    }
}
</script>

<style></style>