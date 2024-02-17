<template>
    <div>
        <Profile v-if="loggedIn"/>
        <SignIn v-else/>
    </div>
</template>

<script setup lang="ts">
    import SignIn from './SignIn.vue'
    import Profile from './Profile.vue'

    const loggedIn = useLoggedIn()
</script>

<style scoped>
    
</style>