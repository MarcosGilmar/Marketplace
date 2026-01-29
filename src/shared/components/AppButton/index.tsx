import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ButtonVariants, buttonVariants } from "./button.variants";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";

interface AppButtonProps extends TouchableOpacityProps, ButtonVariants {
    leftIcon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    children: string;
}

export function AppButton({
    leftIcon,
    rightIcon,  
    children, 
    variant = "filled",
    isLoading,
    isDisabled,
    className,
    ...rest
}: AppButtonProps) {

    const contentColor = variant === "filled" ? colors.white : colors["purple-base"]

    const styles = buttonVariants({
        hasIcon: !!leftIcon || !!rightIcon,
        isDisabled,
        isLoading,
        variant
    });

    function renderContent() {
        if(isLoading) {
            return (
                <ActivityIndicator 
                    size={"small"} 
                    color={contentColor}
                />
            )
        }

        return (
            <>
                {leftIcon && <Ionicons name={leftIcon} size={20} color={contentColor}/>}

                <Text className={styles.text()}>{children}</Text>

                {rightIcon && <Ionicons name={rightIcon} size={20} color={contentColor}/>}
            </>
        )
    }

    return (
        <TouchableOpacity className={styles.base({ className })} {...rest}>
            {renderContent()}
        </TouchableOpacity>
    )
}