
import type { UiCardContent } from '#build/components';
<template>
    <UiCard class="w-96 aspect-[3/4]">
        <UiCardContent class="p-10">
            <div v-if="!faceDown" class="font-bold text-3xl">
                <slot></slot>
            </div>
            <div v-else class="font-bold text-5xl">
                Cards Against Humanity
            </div>
        </UiCardContent>
    </UiCard>
</template>

<script setup lang="ts">
    import type {PropType} from 'vue'

    const props = defineProps({
        color: {
            type: String as PropType<'black' | 'white'>,
            validator: (value: string) => ['black' | 'white'].includes(value),
            default: 'white'
        },
        faceDown: Boolean,
    })
</script>

<style>
    
</style>