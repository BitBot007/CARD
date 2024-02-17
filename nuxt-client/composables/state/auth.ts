interface IUser {
    username: string,
    email: string,
}

export const useAuthUser = () => useState<IUser|null>('authUser', () => {
    return (useCookie<IUser | null | undefined>('authUser').value) ?? null
})

export const useLoggedIn = () => computed(() => useAuthUser().value !== null)