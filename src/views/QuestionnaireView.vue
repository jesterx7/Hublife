<template>
    <div class="max-w-screen bg-cover">
        <transition name="fade">
            <Career v-if="journeyThread == 1" :modifyJourneyThread="modifyJourneyThread"
                :modifyCareerPath="modifyCareerPath" :modifyCareerDetail="modifyCareerDetail"
                :modifyBgPath="modifyBgPath" />
        </transition>

        <transition name="fade">
            <Questionnaire v-if="journeyThread == 3" :modifyJourneyThread="modifyJourneyThread"
                :modifySeqAnswer="modifySeqAnswer" />
        </transition>

        <transition name="fade">
            <ElementQuestion v-if="journeyThread == 4" :modifyJourneyThread="modifyJourneyThread"
                :modifyElement="modifyElement" :seqAnswer="seqAnswer" />
        </transition>

        <transition name="fade">
            <Values v-if="journeyThread == 6" :modifyJourneyThread="modifyJourneyThread" :modifyValues="modifyValues" />
        </transition>

        <transition name="fade">
            <ActionPlan v-if="journeyThread == 8" :modifyJourneyThread="modifyJourneyThread"
                :modifyActionPlan="modifyActionPlan" />
        </transition>

        <transition name="fade">
            <QuestionnaireResult v-if="journeyThread == 9" :element="element" :careerPath="careerPath"
                :careerDetail="careerDetail" :values="values" :actionPlan="actionPlan" :profile="profile" />
        </transition>

        <transition name="fade">
            <PhaseWindow v-if="phaseWindows.includes(journeyThread)" :modifyJourneyThread="modifyJourneyThread"
                :journeyThread="journeyThread" />
        </transition>
    </div>
</template>
<script>

import Questionnaire from '@/components/Questionnaire.vue';
import ElementQuestion from '@/components/ElementQuestions.vue';
import QuestionnaireResult from '@/components/QuestionnaireResult.vue';
import Career from '@/components/Career.vue';
import ActionPlan from '@/components/ActionPlan.vue';
import Values from '@/components/Values.vue';
import PhaseWindow from '@/components/PhaseWindow.vue';
import { mapMutations } from 'vuex';
import { mapActions } from "vuex";
import { mapState } from 'vuex';

export default {
    components: {
        Questionnaire,
        ElementQuestion,
        QuestionnaireResult,
        Career,
        ActionPlan,
        Values,
        PhaseWindow
    },
    computed: {
        ...mapState(['profile'])
    },
    mounted() {
        if (!this.profile) {
            this.$router.push('/');
        }
        this.updateBackground('careerBg.png');
    },
    data() {
        return {
            ...mapActions({
                prosesRequestFormHeader: "prosesRequestFormHeader",
            }),
            journeyThread: 0,
            seqAnswer: null,
            element: null,
            careerPath: null,
            careerDetail: null,
            values: [],
            actionPlan: [],
            bgPath: 'career.png',
            phaseWindows: [0, 2, 5, 7]
        }
    },
    methods: {
        ...mapMutations(['updateBackground']),
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                window.scrollTo({
                    behavior: 'smooth',
                    top: section.offsetTop
                });
            }
        },
        modifyJourneyThread() {
            this.journeyThread = this.journeyThread + 1;
            if (this.journeyThread == 9) {
                var payload = {
                    name: this.profile.name,
                    email: this.profile.email,
                    phone: this.profile.phone,
                    gender: this.profile.gender,
                    age: this.profile.age,
                    values: this.values.map(obj => obj.value).join(","),
                    element: this.element.element,
                    career_path: this.careerPath.career_path,
                    career: this.careerDetail.career,
                    actionPlan: []
                };

                this.prosesRequestFormHeader(payload)
                    .then(response => {
                    })
                    .catch(error => {
                        console.log(error);
                    })
                    .finally(() => this.isLoading = false)

                Object.entries(this.actionPlan).forEach((item) => {
                    payload.actionPlan.push({ action: item[0], answer: item[1] });
                });
                console.log("TEST123", payload);
            }
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        },
        modifyElement(_element) {
            this.element = _element;
        },
        modifyCareerPath(_careerPath) {
            this.careerPath = _careerPath;
        },
        modifyCareerDetail(_careerDetail) {
            this.careerDetail = _careerDetail;
        },
        modifyValues(_values) {
            this.values = _values;
        },
        modifyActionPlan(_actionPlan) {
            this.actionPlan = _actionPlan;
        },
        modifySeqAnswer(_seqAnswer) {
            this.seqAnswer = _seqAnswer;
        },
        modifyBgPath(_path) {
            this.bgPath = _path;
        },
        getBackgroundByComponent() {
            let img_path = '/src/assets/images/background/careerBg.png';
            return 'url(' + require(img_path) + ')';
        }
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>