<template>
    <div class="px-2 py-2">
        <div class="text-center text-white my-8">
            <h2>PHASE 2</h2>
            <p>Please tick one of the circle that describe you the most!</p>
        </div>
        <div class="flex justify-center items-center" v-for="(questionObj, questionIndex) in questionList"
            :key="questionIndex">
            <div class="rounded-lg p-6 my-4 w-11/12 lg:w-3/5 md:w-4/5 bg-gray-300 border bg-opacity-25">
                <p class="text-center text-white mb-4 text-xl font-bold tracking-tight dark:text-white">{{
            questionObj.question
        }}</p>
                <div class="grid grid-cols-4 gap-4">
                    <div class="flex items-center me-4" v-for="(answerObj, answerIndex) in questionObj.answers"
                        :key="answerIndex">
                        <input type="radio" :value="answerObj.seq" :name="'question-' + questionIndex"
                            class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="inline-2-radio" class="text-white ms-2 text-sm font-medium dark:text-gray-300">{{
            answerObj.answer }}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center my-8">
            <fwb-img alt="flowbite-vue" class="w-4/12 md:w-2/12 text-center items-center cursor-pointer" :src="nextBtn"
                @click="continueJourneyThread()" />
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
    props: ['modifyJourneyThread', 'modifySeqAnswer'],
    data() {
        return {
            questionList: [],
            isLoading: false,
            stored_answer: {},
            nextBtn,
            answerCounters: [0, 0, 0, 0],
            questionChecker: []
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
            for (let i=0; i < this.questionList.length; i++) {
                let radioValue = document.querySelector('input[name="question-' + i + '"]:checked').value;
                this.answerCounters[radioValue] += 1;
            }
            let maxIndexAnswer = this.answerCounters.indexOf(Math.max(...this.answerCounters));
            this.modifySeqAnswer(maxIndexAnswer);
            this.modifyJourneyThread(2);
        }
    }
}
</script>

<style lang="scss" scoped></style>