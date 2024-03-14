<template>
    <section id="#landing" class="py-8 px-4 mx-auto sm:py-16 lg:px-6 content-center">
        <div>
            <div class="flex justify-center">
                <form class="bg-hublife-secondary w-full lg:w-2/4 md:w-2/4 mx-auto mt-4 py-8 px-8 rounded-lg">
                    <div v-for="(actionPlanObj, actionPlanIndex) in actionPlanList" :key="actionPlanIndex" class="mb-8">
                        <label for="message"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">{{
                        actionPlanObj.action }}</label>
                        <textarea rows="4" v-model="actionPlanInput[actionPlanIndex]"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-500"
                            placeholder="Write your thoughts here..."></textarea>
                    </div>
                </form>
            </div>

            <div class="flex justify-center mt-12">
                <fwb-img alt="flowbite-vue" class="w-4/12 md:w-2/12 text-center items-center cursor-pointer"
                    :src="submitBtn" @click="continueJourneyThread()" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>

<script>
import { mapActions } from "vuex";
import submitBtn from "@/assets/images/buttons/submit.png"

export default {
    components: {},
    props: ['modifyJourneyThread', 'modifyActionPlan'],
    mounted() {
        this.prosesRequestActions()
            .then(response => {
                this.actionPlanList = response.data;
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => this.isLoading = false)
    },
    data() {
        return {
            ...mapActions({
                prosesRequestActions: "prosesRequestActions",
            }),
            actionPlanList: [],
            selectedCareer: null,
            submitBtn,
            actionPlanInput: []
        }
    },
    methods: {
        openCareerModal(item) {
            this.selectedCareer = item;
        },
        closeCareerModal() {
            this.selectedCareer = null
        },
        continueJourneyThread() {
            this.modifyActionPlan(this.actionPlanInput);
            this.modifyJourneyThread(5);
        }
    }
}
</script>

<style lang="scss" scoped></style>