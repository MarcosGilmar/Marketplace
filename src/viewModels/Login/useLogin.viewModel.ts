import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { LoginFormData, loginScheme } from "./login.scheme"
import { useLoginMutation } from "../../shared/queries/auth/use-login-mutation"
import { useUserStore } from "../../shared/store/user-store"

export function useLoginViewModel() {
    const loginMutation = useLoginMutation()
    const { user } = useUserStore()

    const {
        control,
        handleSubmit
    } = useForm<LoginFormData>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(loginScheme)
    })

    const onSubmit = handleSubmit(async (userData) => {
        const mutationResponse = await loginMutation.mutateAsync(userData)
    })
    return {
        control,
        onSubmit
    }
}