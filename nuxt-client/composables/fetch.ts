const getDefaultFetchConfig = () => ({
    baseURL: useRuntimeConfig().public.apiBase,
    headers: useRequestHeaders(['cookie']),
    credentials: 'include',
})

export const useAppFetch = (request: any, opts?: any) => useFetch(request, {
    ...getDefaultFetchConfig(),
    ...opts
})

export const $appFetch = (request: any, opts?: any) => $fetch(request, {
    ...getDefaultFetchConfig(),
    ...opts
})