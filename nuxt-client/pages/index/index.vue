<template>
    <Page format="centered">
        <div class="flex flex-col md:flex-row gap-8 h-[32rem] min-w-[50rem] w-3/4 max-w-[60rem]">
            <div>
                <Card>Welcome to CARD, ya filthy animal!</Card>
            </div>
            <div class="h-full w-full">
                <div class="flex flex-col gap-8 h-full">
                    <LargeButton class="text-3xl font-semibold h-1/2">
                        <Icon name="tabler:cards-filled" size="48" class="mr-3"/>
                        Create Game
                    </LargeButton>
                    <LargeButton class="text-3xl font-semibold h-1/2">
                        <Icon name="tabler:users-plus" size="48" class="mr-3"/>
                        Join Game
                    </LargeButton>
                </div>
            </div>
        </div>
    </Page>
</template>

<script setup lang="ts">

import Page from '../../components/layout/general/Page.vue';
import LargeButton from '../../components/card-ui/LargeButton.vue';
import Card from '../../components/card-ui/Card.vue';

</script>

<style scoped>
    
</style>