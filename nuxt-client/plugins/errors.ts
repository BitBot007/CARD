export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            error: {
                handleForm: (error: any, form: any, formMessage: Ref<string>) => {
                    console.log(error.status)
                    console.log(error.data)
                    console.log(error.message)
                    switch(error.status) {
                        case 400:
                            //Invalid params
                            form.setErrors(error.data.errors.reduce((acc: any, cur: any) => {
                                if (acc.hasOwnProperty(cur.field)) {
                                    acc[cur.field].push(cur.message)
                                }
                                else {
                                    acc[cur.field] = [cur.message]
                                }
                                return acc
                            }, {}))
                            formMessage.value = "Correct the above errors and try again"
                            break;
                        case 500:
                            //Server error
                            formMessage.value = "Something wrong happened on our end, try again in a bit"
                    }
                }
            }
        }
    }
});