<template>
    <fwb-navbar id="hublife-navbar" class="bg-hublife-primary bg-opacity-25" solid>
        <template #logo>
            <fwb-navbar-logo class="text-white" alt="Flowbite logo" image-url="src/assets/images/icon.png" link="#">
            </fwb-navbar-logo>
        </template>
    </fwb-navbar>
</template>

<script setup>
import {
    FwbButton,
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
    FwbNavbarLogo,
} from 'flowbite-vue'
</script>

<script>
import iconImg from "@/assets/images/icon.png"

export default {
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
        handleLinkClick(el) {
            this.$router.push('/').then(() => {
                this.$nextTick(() => {
                    document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
                });
            });
        }
    }
}
</script>

<style>
#nvb-collapse ul {
    background-color: var(--hublife-primary);
}

#nvb-collapse ul a:hover {
    background-color: var(--hublife-secondary);
}

#hublife-navbar button {
    display: none;
}
</style>