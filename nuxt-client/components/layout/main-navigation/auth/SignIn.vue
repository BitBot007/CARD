<template>
    <UiPopover>
        <UiPopoverTrigger as-child>
            <UiButton class="my-2">Sign in</UiButton>
        </UiPopoverTrigger>
        <UiPopoverContent align="end">
            <UiTabs default-value="sign-in">
                <UiTabsList class="grid w-full grid-cols-2">
                    <UiTabsTrigger value="sign-in">
                        Sign in
                    </UiTabsTrigger>
                    <UiTabsTrigger value="sign-up">
                        Sign up
                    </UiTabsTrigger>
                </UiTabsList>
                <UiTabsContent value="sign-in">
                    <SignInForm />
                </UiTabsContent>
                <UiTabsContent value="sign-up">
                    <SignUpForm/>
                </UiTabsContent>
            </UiTabs>
        </UiPopoverContent>
    </UiPopover>
</template>

<script setup lang="ts">
    import SignInForm from './SignInForm.vue'
    import SignUpForm from './SignUpForm.vue'
</script>

<style scoped>
    
</style>