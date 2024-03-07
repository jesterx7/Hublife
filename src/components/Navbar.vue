<template>
    <fwb-navbar>
        <template #logo>
            <fwb-navbar-logo alt="Flowbite logo" image-url="src/assets/images/dummy-logo.png" link="#">
                Hublife
            </fwb-navbar-logo>
        </template>
        <template #default="{ isShowMenu }">
            <fwb-navbar-collapse :is-show-menu="isShowMenu">
                <router-link to="/">
                    <fwb-navbar-link is-active link="#" @click="handleLinkClick('landing')">
                        Home
                    </fwb-navbar-link>
                </router-link>
                <router-link to="/">
                    <fwb-navbar-link link="#" @click="handleLinkClick('bio')">
                        Fill Forms
                    </fwb-navbar-link>
                </router-link>
            </fwb-navbar-collapse>
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