<template>
    <div>
        <transition name="fade">
            <Questionnaire v-if="jounreyThread == 0" :modifyJourneyThread="modifyJourneyThread"/>
        </transition>

        <transition name="fade">
            <QuestionnaireResult v-if="jounreyThread == 1" :modifyJourneyThread="modifyJourneyThread"/>
        </transition>

        <transition name="fade">
            <Career v-if="jounreyThread == 2" :modifyJourneyThread="modifyJourneyThread"/>
        </transition>

        <transition name="fade">
            <ActionPlan v-if="jounreyThread == 3" :modifyJourneyThread="modifyJourneyThread"/>
        </transition>

        <transition name="fade">
            <Values v-if="jounreyThread == 4" :modifyJourneyThread="modifyJourneyThread"/>
        </transition>
    </div>
</template>
<script>

import Questionnaire from '@/components/Questionnaire.vue';
import QuestionnaireResult from '@/components/QuestionnaireResult.vue';
import Career from '@/components/Career.vue';
import ActionPlan from '@/components/ActionPlan.vue';
import Values from '@/components/Values.vue';

export default {
    components: {
        Questionnaire,
        QuestionnaireResult,
        Career,
        ActionPlan,
        Values
    },
    data() {
        return {
            jounreyThread: 0
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