<template>
    <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="usernameEmail">
            <UiFormItem class="mb-2">
                <UiFormLabel>Username or Email</UiFormLabel>
                <UiFormControl>
                    <UiInput type="text" placeholder="Username or Email" v-bind="componentField"/>
                </UiFormControl>
                <UiFormDescription />
                <UiFormMessage class="text-xs" />
            </UiFormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
            <UiFormItem class="mb-2">
                <UiFormLabel>Password</UiFormLabel>
                <UiFormControl>
                    <UiInput type="password" placeholder="Password" v-bind="componentField"/>
                </UiFormControl>
                <UiFormDescription />
                <UiFormMessage class="text-xs" />
            </UiFormItem>
        </FormField>
        <UiButton :disabled="!(form.meta.value.valid ?? true) || pending" type="submit" class="w-full mt-3">
            <Icon v-if="pending" name="svg-spinners:ring-resize" size="24" class="pr-1"/>
            Sign in
        </UiButton>
        <div class="text-xs font-medium text-destructive">{{ formMessage }}</div>
    </form>
</template>

<script setup lang="ts">
    import { Form, FormField } from '@/components/ui/form'
    import { toTypedSchema } from '@vee-validate/zod'
    import { useForm } from 'vee-validate'
    import * as z from 'zod'

    const { $error } = useNuxtApp()

    const formSchema = toTypedSchema(z.object({
        usernameEmail: z.string().min(2).max(50),
        password: z.string().min(2).max(50),
    }))

    const form = useForm({
        validationSchema: formSchema,
    })

    const formMessage = ref("")

    const pending = ref(false)

    const onSubmit = form.handleSubmit(async (values) => {
        pending.value = true
        try {
            const response = await $appFetch('auth/sign-in', {
                body: values,
                method: 'POST',
            })
            
            useAuthUser().value = response
            useCookie('authUser').value = response
        } catch (e: any) {
            $error.handleForm(e, form, formMessage)
        }
        pending.value = false
    })
</script>

<style>
    
</style>