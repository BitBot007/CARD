<template>
    <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="username">
            <UiFormItem class="mb-2">
                <UiFormLabel>Username</UiFormLabel>
                <UiFormControl>
                    <UiInput type="text" placeholder="Username" v-bind="componentField"/>
                </UiFormControl>
                <UiFormDescription />
                <UiFormMessage class="text-xs"/>
            </UiFormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="email">
            <UiFormItem class="mb-2">
                <UiFormLabel>Email</UiFormLabel>
                <UiFormControl>
                    <UiInput type="email" placeholder="Email" v-bind="componentField"/>
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
        <FormField v-slot="{ componentField }" name="password_confirmation">
            <UiFormItem class="mb-2">
                <UiFormLabel>Confirm Password</UiFormLabel>
                <UiFormControl>
                    <UiInput type="password" placeholder="Password" v-bind="componentField"/>
                </UiFormControl>
                <UiFormDescription />
                <UiFormMessage class="text-xs" />
            </UiFormItem>
        </FormField>
        <UiButton :disabled="!(form.meta.value.valid ?? true) || pending" type="submit" class="w-full mt-3">
            <Icon v-if="pending" name="svg-spinners:ring-resize" size="24" class="pr-1"/>
            Sign up
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
        email: z.string().email().max(320),
        username: z.string().min(2).max(50),
        password: z.string().min(2).max(50),
        password_confirmation: z.string().min(2).max(50),
        submit: z.any()
    }).refine(data => data.password === data.password_confirmation, {
        message: "Passwords don't match",
        path: ['password_confirmation'],
    }))

    const form = useForm({
        validationSchema: formSchema,
    })

    const formMessage = ref("")

    const pending = ref(false)

    const onSubmit = form.handleSubmit(async (values) => { 
        pending.value = true
        try {
            const response = await $appFetch('auth/sign-up', {
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