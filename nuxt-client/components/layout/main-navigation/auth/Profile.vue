<template>
    <UiDropdownMenu>
        <UiDropdownMenuTrigger>
            <UiAvatar class="my-2">
                <UiAvatarImage src="https://github.com/radix-vue.png" />
                <UiAvatarFallback>BB</UiAvatarFallback>
            </UiAvatar>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent align="end" class="w-56">
            <UiDropdownMenuLabel>
                {{ authUser?.username ?? "Profile"}}
            </UiDropdownMenuLabel>
            <UiDropdownMenuSeparator/>
            <UiDropdownMenuItem @click="onLogout">
                <Icon name="uil:left-arrow-from-left" size="24" class="pr-1"/>
                Sign Out
            </UiDropdownMenuItem>
        </UiDropdownMenuContent>
    </UiDropdownMenu>
</template>

<script setup lang="ts">
    const authUser = useAuthUser()

    const onLogout = async () => {
        try {
            await $appFetch('auth/logout', {
                method: 'POST'
            })
            useAuthUser().value = null
            useCookie('authUser').value = null
        } catch (e) {
            console.log(e)
        }
    }
</script>

<style scoped>
    
</style>