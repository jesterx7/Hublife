<template>
    <div class="mx-auto max-w-screen-xl pb-8 px-10">
        <div class="md:grid md:grid-cols-4 gap-2">
            <div v-for="(valueObj, valueIndex) in valueList" :key="valueIndex">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card-view"
                    @click="toggleClass(['border-green-500', 'border-2', 'card-selected'])">
                    <img class="rounded-t-lg" :src="valueObj.img" alt="" />
                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{
                valueObj.value
            }}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                            technology
                            acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-end">
            <a id="cancel" type="button" @click="cancelQuestionnaireValues"
                class="mt-12 mr-2 text-white bg-gradient-to-br from-green-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium inline-flex items-center rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                hidden>
                Cancel
            </a>
            <a id="submit" type="button" @click="submitQuestionnaireValues"
                class="mt-12 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium inline-flex items-center rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                Submit
            </a>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: ['modifyJourneyThread'],
    data() {
        return {
            valueList: [
                {
                    value: "Value 1",
                    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                },
                {
                    value: "Value 2",
                    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                },
                {
                    value: "Value 3",
                    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                },
                {
                    value: "Value 4",
                    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                },
                {
                    value: "Value 5",
                    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                },
                {
                    value: "Value 6",
                    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                },
                {
                    value: "Value 7",
                    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                },
                {
                    value: "Value 8",
                    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                }
            ],
            onConfirm: false
        }
    },
    methods: {
        toggleClass(classNames) {
            const cardElement = event.currentTarget;
            classNames.forEach(className => {
                cardElement.classList.toggle(className);
            });
        },
        submitQuestionnaireValues() {
            if (this.onConfirm) {
                this.continueJourneyThread();
            } else {
                $("#cancel").fadeIn();
                $("#submit").text("Confirm");
                $(".card-view").not(".card-selected").fadeOut();
                this.onConfirm = true;
            }
        },
        cancelQuestionnaireValues() {

            $("#cancel").fadeOut();
            $("#submit").text("Submit");
            $(".card-view").not(".card-selected").fadeIn();
            this.onConfirm = false;
        },
        continueJourneyThread() {
            this.modifyJourneyThread(3);
        }
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