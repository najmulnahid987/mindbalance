import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";

interface BackNavigationProps {
  title?: string;
}

export function BackNavigation({ title }: BackNavigationProps) {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-5 py-3 bg-surface">
      <Pressable
        onPress={() => router.back()}
        className="flex-row items-center gap-2 active:opacity-70"
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="#0e6b51" />
      </Pressable>
      {title && (
        <View className="flex-1">
          {/* Title can be added here if needed */}
        </View>
      )}
      <View className="w-6" />
    </View>
  );
}
