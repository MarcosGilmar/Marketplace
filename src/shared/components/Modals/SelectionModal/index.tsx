import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import clsx from "clsx"

import { SelectionOptions, SelectionVariant } from "../../../hooks/useAppModal";
import { colors } from "../../../../styles/colors";

export interface SelectionModalProps {
    title: string;
    message?: string;
    options: SelectionOptions[];
}

export function SelectionModal({
    options,
    title,
    message
}: SelectionModalProps) {

    function getButtonClass(variant: SelectionVariant) {
        return clsx(
            "w-full px-4 py-3 rounded-lg items-center justify-center flex-row mb-2", 
            {
                "bg-danger": variant === "danger",
                "bg-blue-dark": variant === "secondary",
                "bg-purple-base": variant === "primary"
            }
        )
    }

    return (
        <View className="bg-white rounded-xl shadow-2xl w-[85%] p-6">
            <View className="items-center">
                <Text className="text-lg font-bold text-gray-900 mb-3">{title}</Text>

                {message && <Text className="text-base text-gray-600 mb-6 leading-6">{message}</Text>}
            </View>

            <View className="gap-3">
                {options.map((option, index) => (
                    <TouchableOpacity 
                        key={`selection-item-${index}`}
                        className={getButtonClass(option.variant ?? "primary")}
                        onPress={option.onPress}
                    >
                        {option.icon && (
                            <Ionicons 
                                name={option.icon} 
                                size={20}
                                color={colors.white}
                                className="mr-2"
                            />
                        )}
                        <Text className="font-semibold text-white">{option.text}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}