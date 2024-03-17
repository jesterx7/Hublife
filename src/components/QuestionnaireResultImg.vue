<template>
    <div class="w-full flex justify-center">
        <fwb-img alt="flowbite-vue" class="w-3/4 md:w-2/4 lg:w-2/4 pt-12" :src="imgTitle" />
    </div>
    <div class="flex justify-center mt-8 bg-cover md:bg-contain bg-no-repeat bg-center md:pl-20 md:pr-20 pt-10 pb-8 md:pt-24 md:pb-20"
        :style="{ backgroundImage: 'url(' + bgResult + ')' }">
        <div>
            <div class="grid grid-cols-2 gap-2 md:gap-4 mt-8 mb-4">
                <div class="w-20 h-20 md:w-36 md:h-36 rounded-3xl bg-green-300 border-4 border-black">

                </div>
                <div
                    class="w-20 h-20 md:w-36 md:h-36 rounded-3xl bg-blue-900 flex justify-center items-center border-4 border-black">
                    <div class="w-3/4 h-72 md:h-96 bg-contain bg-no-repeat bg-center py-12 inline-block"
                        alt="flowbite-vue" :style="{ 'background-image': elementImg }"></div>
                </div>
                <div class="w-20 h-20 md:w-36 md:h-36 rounded-3xl flex justify-center items-center bg-contain bg-no-repeat bg-center border-4 border-black"
                    :style="{ 'background-image': careerImg }">
                </div>
                <div
                    class="w-20 h-20 md:w-36 md:h-36 text-gray-700 rounded-full bg-orange-400 flex items-center justify-center border-4 border-black">
                    <ul class="list-disc">
                        <li class="text-xs md:text-sm" v-for="(item, index) in values" :key="index">{{
            item.value }}</li>
                    </ul>
                </div>
            </div>
            <div class="w-full h-20 md:h-24 rounded-lg bg-red-500 flex justify-center items-center mb-8 border-4 border-black"
                style="border-bottom-left-radius: 70px; border-bottom-right-radius: 70px;">
                {{ actionPlan[0] }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>

<script>
import bgResult from "@/assets/images/jar.png"
import imgTitle from "@/assets/images/resultTitle.png"

export default {
    components: {
        QuestionnaireResultImg
    },
    props: {
        elementImg: String,
        careerImg: String,
        values: Array,
        actionPlan: Array
    },
    data() {
        return {
            onConfirm: false,
            reportView: false,
            imgTitle,
            bgResult,
        }
    },
    methods: {
    },
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