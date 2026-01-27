import { Pressable, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native"
import { AppInputVariantProps, appInputVariants } from "./input.variants"
import { Ionicons } from "@expo/vector-icons"
import { useAppInputViewModel } from "./useAppInputViewModel";

export interface AppInputProps extends TextInputProps, AppInputVariantProps {
    label?: string;
    leftIcon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    containerClassName?: string;
    mask?: (value: string) => void | string;
    error?: string;
}

export function AppInput({
    label,
    leftIcon,
    rightIcon,
    containerClassName,
    mask,
    error,
    value,
    secureTextEntry = false,
    isError,
    isDisabled,
    onBlur,
    onFocus,
    onChangeText,
    className,
    ...textInputProps
}: AppInputProps) {

    const {
        getIconColor,
        handleBlur,
        handleFocus,
        handlePasswordToggle,
        handleWrapperPress,
        showPassword,
        handleTextChange,
        isFocused,
    } = useAppInputViewModel({
        isError: !!error,
        isDisabled,
        secureTextEntry,
        onFocus,
        onBlur,
        mask,
        onChangeText,
        value
    })

    const styles = appInputVariants({
        isFocused,
        isDisabled,
        isError: !!error
    })
    
    return (
        <View className={styles.container({ className: containerClassName})}>
            <Text className={styles.label()}>{label}</Text>
            <Pressable className={styles.wrapper()}>
                {leftIcon && (
                    <Ionicons 
                        color={getIconColor()} 
                        className="mr-3" 
                        size={22} 
                        name={leftIcon}
                    />
                )}
                <TextInput 
                    onBlur={handleBlur} 
                    onFocus={handleFocus}
                    className={styles.input()} {...textInputProps}
                    onChangeText={handleTextChange}
                    value={value}
                    secureTextEntry={showPassword}
                />
                {secureTextEntry && (
                        <TouchableOpacity 
                            onPress={handlePasswordToggle}
                            activeOpacity={0.7}
                        >
                            <Ionicons size={22} name={showPassword ? "eye-off-outline": "eye-outline"}/>
                        </TouchableOpacity>
                )}
            </Pressable>
            {
                error && (
                    <Text className={styles.error()}>
                        <Ionicons name="alert-circle-outline"/> {error}
                    </Text>
                )
            }
        </View>
    )
}