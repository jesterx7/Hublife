<template>
    <div class="px-2 py-2">
        <div class="flex justify-center items-center" v-for="(questionObj, questionIndex) in questionList"
            :key="questionIndex">
            <div
                class="p-6 my-4 w-4/5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ questionObj.question
                    }}</h5>
                <div class="flex">
                    <div class="flex items-center me-4" v-for="(answerObj, answerIndex) in questionObj.answers"
                        :key="answerIndex">
                        <input id="inline-2-radio" type="radio" value="" :name="'question-' + questionIndex"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="inline-2-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{
            answerObj.answer }}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center">
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
</template>

<script>
import { mapActions } from "vuex";

export default {
    components: {},
    props: ['modifyJourneyThread'],
    data() {
        return {
            questionList: [],
            isLoading: false,
        }
    },
    mounted() {
        this.prosesRequestQuestions("get")
            .then(response => {
                this.questionList = response.data;
                console.log(this.questionList);
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
            this.modifyJourneyThread(2);
        }
    }
}
</script>

<style lang="scss" scoped></style>