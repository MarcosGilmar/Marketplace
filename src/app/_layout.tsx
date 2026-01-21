import { Stack } from "expo-router"
import "../styles/global.css"
import { QueryClient, QueryClientProvider} from "@tanstack/react-query"

const queryClient = new QueryClient

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack />
        </QueryClientProvider>
    )
}