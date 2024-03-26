<template>
    <div class="h-screen flex justify-center items-center text-center p-2">
        <div>
            <div class="text-3xl text-white" style="font-family: 'BrandonBlk';">
                {{ getJourneySentence() }}
            </div>
            <div class="flex justify-center mt-12">
                <fwb-img alt="flowbite-vue" class="w-4/12 md:w-36 text-center items-center cursor-pointer"
                    :src="nextBtn" @click="continueJourneyThread()" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
import nextBtn from "@/assets/images/buttons/next.png"
</script>

<script>
export default {
    components: {},
    props: ['modifyJourneyThread', 'journeyThread'],
    data() {
        return {
            journeySentences: {
                0: "Proceed to the mirror room!",
                2: "Proceed to the personality room!",
                5: "Proceed to the value room!",
                7: "Please head into the reflection pool!",
            }
        }
    },
    methods: {
        continueJourneyThread() {
            this.modifyJourneyThread();
        },
        getJourneySentence() {
            if (this.journeyThread in this.journeySentences) {
                return this.journeySentences[this.journeyThread];
            } else {
                return "Invalid journey thread value";
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>