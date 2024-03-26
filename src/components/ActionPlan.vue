<template>
    <section id="#landing" class="py-8 px-4 mx-auto sm:py-16 lg:px-6 content-center">
        <form @submit.prevent="continueJourneyThread()">
            <div>
                <div class="flex justify-center">
                    <fwb-img class="w-11/12 md:w-3/5 py-2 ml-4 md:ml-8" alt="flowbite-vue" :src="valueTitle" />
                </div>
            </div>
            <div class="flex justify-center relative">
                <fwb-img id="rainbowStar" alt="flowbite-vue" class="w-0 md:w-4/12 xl:w-4/12 2xl:w-3/12 absolute bottom-0 left-20 xl:left-20 2xl:left-60 z-0 opacity-90" :src="rainbowStar" />
                <fwb-img id="redStar" alt="flowbite-vue" class="w-0 md:w-2/12 absolute lg:top-60 right-48 2xl:right-80 z-0 opacity-90" :src="redStar" />
                <div class="w-full bg-hublife-secondary lg:w-2/4 md:w-2/4 mx-auto mt-24 py-8 px-8 bg-cover z-10"
                    style="border-radius: 40px;">
                    <div v-for="(actionPlanObj, actionPlanIndex) in actionPlanList" :key="actionPlanIndex" class="mb-8">
                        <label for="message"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">{{
            actionPlanObj.action }}</label>
                        <textarea rows="4" v-model="actionPlanInput[actionPlanObj.action]"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-500"
                            placeholder="Write your thoughts here..." required></textarea>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-12">
                <button type="submit" class="w-4/12 md:w-36 flex justify-center items-center">
                    <fwb-img alt="flowbite-vue" class="text-center items-center cursor-pointer" :src="submitBtn" />
                </button>
            </div>
        </form>

    </section>
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>

<script>
import { mapActions } from "vuex";
import submitBtn from "@/assets/images/buttons/submit.png"
import valueTitle from "@/assets/images/titles/action.png"
import redStar from "@/assets/images/redStar.png"
import rainbowStar from "@/assets/images/rainbowStar.png"

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
            valueTitle,
            redStar,
            rainbowStar,
            actionPlanInput: [],
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
            this.modifyJourneyThread();
        },
    }
}
</script>

<style>
textarea {
  font-size: inherit; /* Ensure font size remains consistent */
  resize: none; /* Prevent manual resizing of the textarea */
  overflow: auto; /* Ensure scrollbars appear if content exceeds textarea dimensions */
  -webkit-appearance: none; /* Remove default styles on iOS */
}
</style>