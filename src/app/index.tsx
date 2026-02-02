import { Redirect } from "expo-router";
import { View } from "react-native";
import { useUserStore } from "../shared/store/user-store";

export default function App() {
    const { user, token } = useUserStore();

    if(user && token) {
        return <Redirect href={"/(private)/home"}/>
    }

    return (
        <Redirect href={"/(public)/login"}/>
    )
}