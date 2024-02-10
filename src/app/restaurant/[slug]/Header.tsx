import { Text } from "@mantine/core"

const Header = () => {
    return (
        <div className="h-96 overflow-hidden">
            <div
                className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center"
            >
                <Text className="text-white text-shadow text-center text-6xl">Milestones Grill (Toronto)</Text>
            </div>
        </div>
    )
}

export default Header