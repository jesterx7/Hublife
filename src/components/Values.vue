<template>
    <div class="mx-auto max-w-screen-xl pb-8 px-10">
        <div class="flex justify-center">
            <fwb-img class="w-2/4 lg:w-1/4 md:w-1/4 py-2" alt="flowbite-vue" :src="valueTitle" />
        </div>
        <div class="text-white my-12 text-2xl">
            Pick Three For....
        </div>
        <div class="grid grid-cols-3 gap-4 md:gap-8 content-center">
            <div v-for="(item, index) in valueList" :key="index"
                class="text-white flex items-center bg-center justify-center text-center w-24 h-24 md:w-40 md:h-40 rounded-lg p-4 bg-contain bg-no-repeat"
                :style="{ 'background-image': getBackgroundImage(item.img_path) }" @click="toggleClass(item)">
            </div>
        </div>
        <div class="flex justify-center mt-20">
            <fwb-img alt="flowbite-vue" class="w-4/12 md:w-2/12 text-center items-center cursor-pointer" :src="submitBtn" @click="continueJourneyThread()"/>
        </div>
    </div>
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>

<script>
import { mapActions } from "vuex";
import valueTitle from "@/assets/images/valueTitle.png"
import submitBtn from "@/assets/images/buttons/submit.png"

export default {
    components: {},
    props: ['modifyJourneyThread', 'modifyValues'],
    data() {
        return {
            ...mapActions({
                prosesRequestValues: "prosesRequestValues",
            }),
            valueList: [],
            classNames: ['bg-gray-300', 'bg-opacity-25'],
            selectedValue: [],
            valueTitle,
            submitBtn
        }
    },
    mounted() {
        this.prosesRequestValues()
            .then(response => {
                this.valueList = response.data;
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => this.isLoading = false)
    },
    methods: {
        toggleClass(value) {
            let index = this.selectedValue.indexOf(value);

            if (this.selectedValue.length <= 2 || index !== -1) {
                const cardElement = event.currentTarget;
                this.classNames.forEach(className => {
                    cardElement.classList.toggle(className);
                });

                if (index !== -1) {
                    this.selectedValue.splice(index, 1);
                } else {
                    this.selectedValue.push(value);
                }
            }
        },
        continueJourneyThread() {
            this.modifyValues(this.selectedValue);
            this.modifyJourneyThread(4);
        },
        getBackgroundImage(path) {
            let img_path = '/src/assets/images/values/' + path;
            return 'url(' + require(img_path) + ')';
        },
    }
}
</script>

<style>
#cancel {
    display: none;
}

#submit::after {
    content: url("data:image/svg+xml,%3Csvg class='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 14 10'%3E%3Cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' /%3E%3C/svg%3E");
    display: inline-block;
    margin-left: 8px;
    width: 12px;
}
</style>