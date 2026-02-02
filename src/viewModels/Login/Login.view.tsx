import { Text, TouchableOpacity, View } from "react-native";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { AppInput } from "../../shared/components/AppInput";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { useLoginViewModel } from "./useLogin.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AppButton } from "../../shared/components/AppButton";

export function LoginView(props: ReturnType<typeof useLoginViewModel>) {

    const { control, onSubmit} = props

    return (
        <KeyboardContainer>
            <View className="flex-1 items-center justify-center px-[40px]">
                <View className="flex-1 w-full items-center justify-center">
                    <AuthFormHeader 
                        title="Acesse sua conta"
                        subtitle="Informe seu e-mail e senha para entrar"
                    />
                    <AppInputController 
                        control={control}
                        name="email"
                        label="EMAIL"
                        leftIcon="mail-outline"
                        placeholder="mail@example.com.br"
                    />
                    <AppInputController 
                        control={control}
                        name="password"
                        label="SENHA"
                        leftIcon="lock-closed-outline"
                        placeholder="Sua senha"
                        secureTextEntry
                    />

                    <AppButton
                        className="mt-6"
                        rightIcon="arrow-forward"
                        onPress={onSubmit}
                    >
                        Acessar
                    </AppButton>
                </View>
                <View className="flex-2 pb-16">
                    <Text className="text-base mb-6 text-gray-400">Ainda não tem uma conta?</Text>
                    <AppButton
                        variant="outlined"
                        rightIcon="arrow-forward"
                        onPress={() => router.push("/(public)/register")}
                    >
                        Registro
                    </AppButton>
                </View>
            </View>
        </KeyboardContainer>
)
}