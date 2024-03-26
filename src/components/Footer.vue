<template>
    <footer id="hublife-footer" class="bg-hublife-primary bg-opacity-10 rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full p-4 text-white" style="font-family: 'BrandonBlkReg';">
            <div class="flex justify-center">
                <div>
                    <div class="grid grid-cols-3 gap-4 place-items-center">
                        <fwb-img class="h-10 sm:h-10 md:h-12" alt="flowbite-vue" :src="dreamellaLogo" />
                        <fwb-img class="h-10 sm:h-10 md:h-12" alt="flowbite-vue" :src="hublifeLoogo" />
                        <fwb-img class="h-10 sm:h-10 md:h-12" alt="flowbite-vue" :src="bzpazelLogo" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import hublifeLoogo from "@/assets/images/hublifeLogo.png"
import dreamellaLogo from "@/assets/images/dreamellaLogo.png"
import bzpazelLogo from "@/assets/images/bypazelLogo.png"
import { FwbImg } from 'flowbite-vue'
</script>

<style lang="scss" scoped></style>