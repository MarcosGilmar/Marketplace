import { Text, TouchableOpacity, View } from "react-native";

import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { AppInputController } from "../../shared/components/AppInputController";

export function RegisterView(props: ReturnType<typeof useRegisterViewModel>) {

    const {onSubmit, control} = props

    const [email, setEmail] = useState("")

    return (
        <View className="flex-1 items-center justify-center">
            <AppInputController 
                control={control} 
                name="email"
                label="E-MAIL"
                leftIcon="mail-outline"
            />
            
            <TouchableOpacity onPress={onSubmit}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    )
}