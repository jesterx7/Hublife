<template>
    <section>
        <div class="mx-auto max-w-screen-xl pb-8 px-10">
            <div class="flex justify-center items-center" style="border-radius: 40px;">
                <div>
                    <div id="jar-result" class="w-full flex justify-center">
                        <fwb-img alt="flowbite-vue" class="w-3/4 md:w-2/4 lg:w-2/4 pt-12" :src="imgTitle" />
                    </div>
                    <div id="youniverse-container-1">
                        <fwb-img alt="flowbite-vue" class="youniverse-logo w-xl" :src="logoImg" hidden />
                        <div id="youniverse-result-1" class="youniverse-result">
                            <div class="flex justify-center mt-8 bg-contain md:bg-contain bg-no-repeat bg-center md:pl-20 md:pr-20 pt-10 pb-8 md:pt-24 md:pb-20"
                                :style="{ backgroundImage: 'url(' + bgResult + ')' }">
                                <div>
                                    <div class="grid grid-cols-2 gap-2 md:gap-4 mt-10 mb-2">
                                        <div
                                            class="img-result w-20 h-20 md:w-36 md:h-36 rounded-2xl md:rounded-3xl bg-green-300 flex justify-center items-center border-2 border-black">
                                            <fwb-img alt="flowbite-vue" class="p-2 rounded-2xl max-h-20 max-w-20"
                                                :src="profileImageURL()" />
                                        </div>
                                        <div
                                            class="img-result w-20 h-20 md:w-36 md:h-36 rounded-2xl md:rounded-3xl bg-blue-900 flex justify-center items-center">
                                            <fwb-img alt="flowbite-vue" class="p-2 rounded-2xl border-2 border-black"
                                                :src="getElementImg()" />
                                        </div>
                                        <div
                                            class="img-result w-20 h-20 md:w-36 md:h-36 rounded-2xl md:rounded-3xl flex justify-center items-center">
                                            <fwb-img alt="flowbite-vue" class="rounded-2xl border-2 border-black"
                                                :src="getCareerPathImg()" />
                                        </div>
                                        <div id="value-result"
                                            class="img-result w-20 h-20 md:w-36 md:h-36 text-gray-700 rounded-2xl md:rounded-3xl flex items-center justify-center border-2 border-black"
                                            style="background-color: #f4b444;">
                                            <ul>
                                                <li class="value-list text-xs md:text-sm"
                                                    v-for="(item, index) in values" :key="index">
                                                    {{ item.value }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="profile-result"
                                        class="w-48 md:w-80 h-20 rounded-2xl md:rounded-3xl bg-red-500 flex justify-center items-center mb-8 border-2 border-black"
                                        style="font-family: 'BrandonBlkReg'; font-size: 10px; line-height: 1;">
                                        <div class="p-4">
                                            <p class="career-result text-center text-white font-bold"
                                                style="line-height: 1.5;">{{ profile.name + "," }}</p>
                                            <p class="career-result text-center text-white">{{ element.description }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="youniverse-container-2" class="mt-12">
                        <fwb-img alt="flowbite-vue" class="youniverse-logo w-xl" :src="logoImg" hidden />
                        <div class="youniverse-result">
                            <div
                                class="w-full flex justify-center pl-6 pr-6 md:pl-20 md:pr-20 pt-10 pb-8 md:pt-24 md:pb-20 text-white">
                                <div class="w-62 md:w-96" style="font-family: 'BrandonBlkReg';">
                                    <p>Hi</p>
                                    <p>{{ profile.name }},</p>
                                    <br>
                                    <p class="inline">You are </p>
                                    <p class="inline" style="font-family: 'BrandonBlk';">{{ elementProfile() }}</p>
                                    <p>{{ element.description }}</p>
                                    <br>
                                    <p>Hope you can achieve your dream to become the greatest</p>
                                    <p style="font-family: 'BrandonBlk';">{{ careerDetail.career.toUpperCase() }}</p>
                                    <br>
                                    <p>Always remember whats important to you..</p>
                                    <p>your</p>
                                    <p style="font-family: 'BrandonBlk';">
                                        {{ values.map(function (el) { return el.value.toUpperCase(); }).join(', ') }}
                                    </p>
                                    <br>
                                    <p>Be the best version of yourself.</p>
                                    <p>Always one step forward in all aspects.</p>
                                    <br>
                                    <div v-for="(item, index) in Object.entries(actionPlan)" :key="index">
                                        <p>{{ item[0] }}: {{ item[1] }}</p>
                                        <br>
                                    </div>
                                    <br>
                                    <p>God bless.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="print-btn__result" class="flex justify-center items-center my-8">
                        <div class="w-4/12 md:w-2/12">
                            <fwb-img alt="flowbite-vue" class="text-center cursor-pointer" :src="printBtn"
                                @click="generatePDF()" />
                            <div class="text-white bg-red-600 rounded-3xl p-5 text-center cursor-pointer mt-10"
                                @click="shareImage()">
                                Share to Story
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>

<script>
import bgResult from "@/assets/images/jar.png"
import imgTitle from "@/assets/images/titles/result.png"
import printBtn from "@/assets/images/buttons/share.png"
import logoImg from "@/assets/images/logo.png"
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import { mapMutations } from 'vuex';

export default {
    components: {
    },
    props: {
        element: Object,
        careerPath: Object,
        careerDetail: Object,
        profile: Object,
        values: Array,
        actionPlan: Array,
    },
    data() {
        return {
            onConfirm: false,
            imgTitle,
            bgResult,
            printBtn,
            logoImg,
        }
    },
    methods: {
        ...mapMutations(['updateBackground']),
        toggleClass(classNames) {
            const cardElement = event.currentTarget;
            classNames.forEach(className => {
                cardElement.classList.toggle(className);
            });
        },
        getElementImg() {
            let img_path = 'src/assets/images/elements/' + this.element.img_path;
            return img_path;
        },
        getCareerPathImg() {
            let img_path = 'src/assets/images/careers/' + this.careerPath.icon_path;
            return img_path
        },
        shareImage() {
            return new Promise(async (resolve, reject) => {
                try {
                    await this.updateContainerStyle(true);

                    const divElement = document.getElementById('hublife-container');
                    const canvas = await html2canvas(divElement);

                    const blob = await new Promise((resolveBlob) => {
                        canvas.toBlob((blob) => {
                            resolveBlob(blob);
                        }, 'image/png', 1);
                    });

                    const file = new File([blob], `youniverse.png`, {
                        type: 'image/png',
                        lastModified: new Date().getTime(),
                    });

                    const shareData = {
                        files: [file],
                    };

                    if (navigator.canShare && navigator.canShare(shareData)) {
                        await navigator.share(shareData);
                        this.resetContainerStyle();
                        resolve(true);
                    } else {
                        this.resetContainerStyle();
                        resolve(false);
                    }
                } catch (error) {
                    this.resetContainerStyle();
                    reject(error);
                }
            });
        },
        generatePDF() {
            this.updateContainerStyle(false);
            html2pdf().from(document.getElementById('hublife-container')).set({
                filename: 'result.pdf',
                jsPDF: { format: [200, 360] }
            }).save().then(() => {
                this.resetContainerStyle();
            });
        },
        profileImageURL() {
            if (this.profile.photo) {
                return URL.createObjectURL(this.profile.photo);
            }
        },
        elementProfile() {
            var element = this.element.element.toLowerCase();
            const vowels = ['a', 'e', 'i', 'o', 'u'];

            if (vowels.includes(element.charAt(0))) {
                return 'an ' + element.toUpperCase();
            } else {
                return 'a ' + element.toUpperCase();
            }
        },
        updateContainerStyle(isShare) {
            var backgroundPath = 'homeBgMobile.png';
            this.updateBackground(backgroundPath);
            $('.youniverse-logo').show();
            $('#jar-result').hide();
            $('#print-btn__result').hide();
            $('.youniverse-result').addClass('bg-gray-900 bg-opacity-90');
            $('#value-result').css({
                'padding-bottom': '12px'
            });
            $('#profile-result').css({
                'padding-bottom': '12px'
            });

            if (!isShare) {
                $('#youniverse-result-1').addClass('pb-48 pt-24');
                $('#youniverse-container-1').css({
                    'height': '1200px',
                    'padding-top': '200px'
                });
            }

            if (isShare) {
                $('#youniverse-container-2').hide();
                $('#hublife-container').removeClass("min-h-screen");
            }

            var currentHeight = $('#youniverse-container-2').height();
            if (currentHeight < 1000) {
                $('#youniverse-container-2').css({
                    'height': '1000px',
                    'padding-top': '100px'
                });
            } else {
                $('#youniverse-container-2').css({
                    'height': 'auto',
                    'padding-top': '100px'
                });
            }
        },
        resetContainerStyle() {
            var backgroundPath = 'careerBg.png';
            this.updateBackground(backgroundPath);

            $('.youniverse-logo').hide();
            $('#jar-result').show();
            $('.youniverse-result').removeClass('bg-gray-900 bg-opacity-90');
            $('#print-btn__result').show();
            $('#value-result').css({
                'padding-bottom': ''
            });
            $('#profile-result').css({
                'padding-bottom': ''
            });

            $('#youniverse-result-1').removeClass('pb-48 pt-24');
            $('#youniverse-container-1').css({
                'height': '',
                'padding-top': ''
            });

            $('#youniverse-container-2').show().css({
                'height': '',
                'padding-top': ''
            });
            $('#hublife-container').addClass("min-h-screen");
        },
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

@media only screen and (max-width: 410px) {
    .img-result {
        width: 4rem !important;
        height: 4rem !important;
    }

    #profile-result {
        width: 9rem;
    }

    .value-list {
        font-size: 0.65rem !important;
        line-height: 0.75rem !important;
    }

    .career-result {
        font-size: 8px !important;
    }

    .youniverse-result {
        border-radius: 60px;
    }
}
</style>