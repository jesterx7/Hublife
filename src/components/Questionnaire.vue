<template>
    <form class="mx-auto max-w-screen-xl pb-8 px-10">
        <div v-for="(questionObj, questionIndex) in questionList" :key="questionIndex">
            <p class="my-5 text-gray-500 dark:text-gray-400">{{ questionObj.question }}</p>
            <div class="md:grid md:grid-cols-2 gap-2">
                <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700"
                    v-for="(answer, answerIndex) in questionObj.answers" :key="answerIndex">
                    <input type="radio" value="" name="bordered-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="bordered-radio-2"
                        class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ answer
                        }}</label>
                </div>
            </div>
        </div>
        <div class="flex justify-end">
            <a type="button" @click="continueJourneyThread()"
                class="mt-12 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium inline-flex items-center rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                Submit
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
    </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
    components: {},
    props: ['modifyJourneyThread'],
    data() {
        return {
            questionList: [
                {
                    question: "Question 1",
                    answers: ["answer 1", "answer 2", "answer 3", "answer 4"]
                },
                {
                    question: "Question 2",
                    answers: ["answer 1", "answer 2", "answer 3", "answer 4"]
                },
                {
                    question: "Question 3",
                    answers: ["answer 1", "answer 2", "answer 3", "answer 4"]
                },
                {
                    question: "Question 4",
                    answers: ["answer 1", "answer 2", "answer 3", "answer 4"]
                }
            ],
            isLoading: false,
        }
    },
    mounted() {
        this.prosesRequestQuestions("get")
            .then(response => {
                console.log("cek123", response);
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
            this.modifyJourneyThread(1);
        }
    }
}
</script>

<style lang="scss" scoped></style>