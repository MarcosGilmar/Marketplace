import { Text, TouchableOpacity, View } from "react-native"
import { useUserStore } from "../../../shared/store/user-store"
import { useEffect } from "react"
import { marketPlaceApiClient } from "../../../shared/api/market-place"

export default function Home() {
    const { logout } = useUserStore();
    
    useEffect(() => {
        (async() => {
            const { data } = await marketPlaceApiClient.get("/products/categories");

            console.log(data);
        })()
    }, [])

    return (
        <View className="flex-1 justify-center items-center" >
            <TouchableOpacity
                onPress={logout}
            >
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}