<template>
    <div id="hublife-container" :style="{ 'background-image': getBackgroundByComponent() }" class="max-w-screen bg-cover">
        <transition name="fade">
            <Career v-if="jounreyThread == 0" :modifyJourneyThread="modifyJourneyThread" :modifyCareerPath="modifyCareerPath" :modifyBgPath="modifyBgPath"/>
        </transition>

        <transition name="fade">
            <Questionnaire v-if="jounreyThread == 1" :modifyJourneyThread="modifyJourneyThread" :modifySeqAnswer="modifySeqAnswer"/>
        </transition>

        <transition name="fade">
            <ElementQuestion v-if="jounreyThread == 2" :modifyJourneyThread="modifyJourneyThread" :modifyElement="modifyElement" :seqAnswer="seqAnswer"/>
        </transition>

        <transition name="fade">
            <Values v-if="jounreyThread == 3" :modifyJourneyThread="modifyJourneyThread" :modifyValues="modifyValues"/>
        </transition>

        <transition name="fade">
            <ActionPlan v-if="jounreyThread == 4" :modifyJourneyThread="modifyJourneyThread" :modifyActionPlan="modifyActionPlan"/>
        </transition>

        <transition name="fade">
            <QuestionnaireResult v-if="jounreyThread == 5" :element="element" :careerPath="careerPath" :values="values" :actionPlan="actionPlan" />
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

export default {
    components: {
        Questionnaire,
        ElementQuestion,
        QuestionnaireResult,
        Career,
        ActionPlan,
        Values
    },
    data() {
        return {
            jounreyThread: 0,
            seqAnswer: null,
            element: null,
            careerPath: null,
            values: [],
            actionPlan: [],
            bgPath: 'career.png'
        }
    },
    methods: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                window.scrollTo({
                    behavior: 'smooth',
                    top: section.offsetTop
                });
            }
        },
        modifyJourneyThread(_journeyThread) {
            this.jounreyThread = _journeyThread;
        },
        modifyElement(_element) {
            this.element = _element;
        },
        modifyCareerPath(_careerPath) {
            this.careerPath = _careerPath;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>