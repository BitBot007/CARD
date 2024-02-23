<template>
    <div class="bg-muted">
        <div v-if="format === 'standard'" class="container h-full">
            <slot></slot>
        </div>
        <div v-else-if="format === 'centered'" class="flex items-center justify-center h-full">
            <slot></slot>
        </div>
    </div>
    
</template>

<script setup lang="ts">
    import type {PropType} from 'vue'

    const props = defineProps({
        format: {
            type: String as PropType<'standard' | 'centered'>,
            validator: (value: string) => ['standard', 'centered'].includes(value),
            default: 'standard'
        },
    })
</script>

<style>
    
</style>