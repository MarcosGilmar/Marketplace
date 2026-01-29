import { Redirect } from "expo-router";
import { View } from "react-native";

export default function App() {
    const userData = null

    if(userData) {
        return <Redirect href={"/(private)/home"}/>
    }

    return (
        <Redirect href={"/login"}/>
    )
}