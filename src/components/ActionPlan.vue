<template>
    <form class="mx-auto max-w-screen-xl pb-8 px-10">
        <div v-for="(actionPlanObj, actionPlanIndex) in actionPlanList" :key="actionPlanIndex" class="mb-8">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">{{ actionPlanObj.action }}</label>
            <p class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">{{ actionPlanObj.question }}</p>
            <textarea id="message" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-500"
                placeholder="Write your thoughts here..."></textarea>
        </div>
        <div class="flex justify-end">
            <a type="button" @click="submitActionPlan()"
                class="mt-2 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium inline-flex items-center rounded-lg text-sm px-5 py-2.5 text-center mb-2">
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
export default {
    components: {},
    props: ['modifyJourneyThread'],
    data() {
        return {
            actionPlanList: [
                {
                    "action": "Spiritual",
                    "question": "Lorem Ipsum is simply dummy text of the printing and typesetting industry ?"
                },
                {
                    "action": "Family",
                    "question": "Lorem Ipsum is simply dummy text of the printing and typesetting industry ?"
                },
                {
                    "action": "Spouse",
                    "question": "Lorem Ipsum is simply dummy text of the printing and typesetting industry ?"
                },
                {
                    "action": "Friends",
                    "question": "Lorem Ipsum is simply dummy text of the printing and typesetting industry ?"
                },
                {
                    "action": "Mental Health",
                    "question": "Lorem Ipsum is simply dummy text of the printing and typesetting industry ?"
                },
                {
                    "action": "Physical Health",
                    "question": "Lorem Ipsum is simply dummy text of the printing and typesetting industry ?"
                },
                {
                    "action": "Financial",
                    "question": "Lorem Ipsum is simply dummy text of the printing and typesetting industry ?"
                },
                {
                    "action": "Study",
                    "question": "Lorem Ipsum is simply dummy text of the printing and typesetting industry ?"
                },
            ],
            selectedCareer: null
        }
    },
    methods: {
        openCareerModal(item) {
            this.selectedCareer = item;
        },
        closeCareerModal() {
            this.selectedCareer = null
        },
        submitActionPlan() {
            this.continueJourneyThread();
        },
        continueJourneyThread() {
            this.modifyJourneyThread(4);
        }
    }
}
</script>

<style lang="scss" scoped></style>