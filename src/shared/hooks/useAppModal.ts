import { Ionicons } from "@expo/vector-icons";
import { useModalStore } from "../store/modal-store"
import { createElement } from "react";

import { SelectionModalProps, SelectionModal } from "../components/Modals/SelectionModal";

export type SelectionVariant= "primary" | "secondary" | "danger"

export interface SelectionOptions {
    text: string;
    onPress: () => void;
    icon?: keyof typeof Ionicons.glyphMap;
    variant?: SelectionVariant
}

export function useAppModal() {
    const {open, close} = useModalStore()
    
    function showSelection({
        options,
        title,
        message
    }: {
        title: string;
        message?: string;
        options: SelectionOptions[];
    }) {
        open(createElement(SelectionModal, {
            options,
            title,
            message
        } as SelectionModalProps));
    }

    return {
        showSelection
    }
}