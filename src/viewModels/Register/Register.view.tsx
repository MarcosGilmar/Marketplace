import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { Controller } from "react-hook-form";

import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { AppButton } from "../../shared/components/AppButton";
import { Ionicons } from "@expo/vector-icons";

export function RegisterView(props: ReturnType<typeof useRegisterViewModel>) {

    const {onSubmit, control, handleSelectAvatar, avatarUri} = props

    const [email, setEmail] = useState("")

    return (
        <KeyboardContainer>
            <ScrollView className="flex-1 px-[40px]">
                <AuthFormHeader 
                    title="Crie sua conta"
                    subtitle="Informe os seus dados pessoais e de acesso"
                />

                <TouchableOpacity 
                    className="w-[120px] h-[120px] rounded-[12px] justify-center items-center bg-shape self-center mb-8" 
                    onPress={handleSelectAvatar}
                >   
                    {
                        avatarUri ? (
                            <Image  
                                className="w-full h-full rounded-[12px]" 
                                source={{uri: avatarUri}}
                                resizeMode="cover"
                            />
                        ) : (
                            <Ionicons name="cloud-upload-outline" size={32}/>
                        )
                        
                    }
                    
                </TouchableOpacity>
                
                <AppInputController 
                    control={control} 
                    name="name"
                    label="NOME"
                    leftIcon="person-outline"
                    placeholder="Seu nome completo"
                />
                 <AppInputController 
                    control={control} 
                    name="phone"
                    label="TELEFONE"
                    leftIcon="call-outline"
                    placeholder="(00) 00000-0000"
                />

                <Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>
                
                <AppInputController 
                    control={control} 
                    name="email"
                    label="E-MAIL"
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
                <AppInputController 
                    control={control} 
                    name="confirmPassword"
                    label="CONFIRMAR SENHA"
                    leftIcon="lock-closed-outline"
                    placeholder="Confirme sua senha"
                    secureTextEntry
                />
                
                <AppButton 
                    className="mt-6"
                    onPress={onSubmit}
                    rightIcon="arrow-forward"
                >
                    Cadastrar
                </AppButton>
                <View className="mt-16">
                    <Text className="text-base text-gray-400 mb-6">Já tem uma conta?</Text>
                    <AppButton 
                        onPress={() => router.push("/(public)/login")}
                        rightIcon="arrow-forward"
                        variant="outlined"
                    >
                        Acessar
                    </AppButton>
                </View>
            </ScrollView>
        </KeyboardContainer>
    )
}