import { useRef, useState } from "react"
import { BlurEvent, FocusEvent, TextInput } from "react-native"
import { colors } from "../../../styles/colors";

interface AppInputViewModelProps {
    isError?: boolean;
    isDisabled?: boolean;
    secureTextEntry?: boolean;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: BlurEvent) => void;
    mask?: (text: string) => string | void;
    onChangeText?: (text: string) => string | void;
    value?: string;
}

export function useAppInputViewModel({
    isError,
    isDisabled,
    secureTextEntry,
    onFocus,
    onBlur,
    mask,
    onChangeText,
    value
}: AppInputViewModelProps) {
    const [showPassword, setShowPassword] = useState(secureTextEntry);
    const [isFocused, setIsFocused] = useState(false);

    const inputRef = useRef<TextInput>(null);

    function handlePasswordToggle() {
        setShowPassword((prev) => !prev);
    }

    function handleWrapperPress() {
        inputRef.current?.focus()   ;
    }

    function handleFocus(event: FocusEvent) {
        setIsFocused(true);
        onFocus?.(event);
    }

    function handleBlur(event: BlurEvent) {
        setIsFocused(false);
        onBlur?.(event);
    }

    function getIconColor() {
        if(isFocused) return colors["purple-base"];
        if(isError) return colors.danger;
        if(value) return colors["purple-base"]

        return colors.grays[200]
    }

    function handleTextChange(text: string) {
        if(mask) {
            onChangeText?.(mask(text) || "")
        } else {
            onChangeText?.(text)
        }
    }

    return {
        showPassword,
        handlePasswordToggle,
        handleWrapperPress,
        handleFocus,
        handleBlur,
        getIconColor,
        handleTextChange,
        isFocused
    }
}