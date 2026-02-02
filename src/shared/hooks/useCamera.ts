import { ImagePickerOptions } from "expo-image-picker";
import * as ImagePicker from "expo-image-picker"
import { useCallback, useState } from "react";
import { Toast } from 'toastify-react-native'

export function useCamera(pickerOptions: ImagePickerOptions) {

    const[isLoading, setIsLoading] = useState(false);

    const requestCameraPermission = useCallback( async (): Promise<boolean> => {
        try {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();

            const currentStatus = status === "granted"

            if(!currentStatus) {
                Toast.error("Precisamos da permissão para acessar sua câmera", "top")
            }
            return currentStatus;
        } catch (error) {
            Toast.error("Erro ao solicitar permissões da câmera", "top")
            return false;
        }
    }, [])

    const openCamera = useCallback( async(): Promise<string | null> => {
        setIsLoading(true);

        try {
            const hasPermission = await requestCameraPermission();

            if(!hasPermission) return null;

            const result = await ImagePicker.launchCameraAsync(pickerOptions)

            if(!result.canceled && result.assets && result.assets.length > 0) {
                Toast.success("Foto capturada com sucesso", "top")
                return result.assets[0].uri;
            }

            return null;
        } catch (error) {
            Toast.error("Erro ao abrir a câmera", "top")
            return null;
        } finally {
            setIsLoading(false);
        }
    }, [])

    return {
        isLoading,
        requestCameraPermission,
        openCamera
    }
}