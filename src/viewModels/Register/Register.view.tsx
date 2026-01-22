import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";

export function RegisterView(props: ReturnType<typeof useRegisterViewModel>) {

    const {onSubmit} = props

    return (
            <TouchableOpacity 
                className="flex-1 justify-center items-center"
                onPress={onSubmit}
            >
                <Text>Register</Text>
            </TouchableOpacity>
    )
}