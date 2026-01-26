import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterFormData, registerScheme } from "./register.scheme"
import { useRegisterMutation } from "../../shared/queries/auth/use-register-mutation"
import { useUserStore } from "../../shared/store/user-store"

export function useRegisterViewModel() {
    const userRegisterMutation = useRegisterMutation()
    const { setSession, user } = useUserStore()
    
    const { 
        control,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<RegisterFormData>({
        resolver: yupResolver(registerScheme),
        defaultValues: {
            name: "teste123",
            email: "teste1234@gmail.com",
            password: "123123123",
            confirmPassword: "123123123",
            phone: "11111111111"
        }
    })

    const onSubmit = handleSubmit( async (userData) => {
        const {confirmPassword, ...registerData} = userData
        const mutationResponse = await userRegisterMutation.mutateAsync(
            registerData
        )
        setSession({
            refreshToken: mutationResponse.refreshToken,
            token: mutationResponse.token,
            user: mutationResponse.user
        })
    })

    console.log(user)

    return {
        control,
        errors,
        onSubmit
    }
}