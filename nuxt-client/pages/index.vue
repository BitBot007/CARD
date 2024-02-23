<template>
    <div class="h-full flex flex-col">
        <MainNavigation class="flex-none"/>
        <UiSeparator class="flex-none" decorative/>
        <NuxtPage class="grow"/>
    </div>
</template>

<script setup lang="ts">

import { MainNavigation } from '@/components/layout/main-navigation'

</script>

<style global>
    html,
    body,
    div#__nuxt {
        height: 100%;
    }
</style>