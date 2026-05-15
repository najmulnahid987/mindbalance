import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

interface ToolCardProps {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export function ToolCard({ id, name, icon, color, description }: ToolCardProps) {
  const router = useRouter();

  const bgColorClass =
    color === "#0e6b51"
      ? "bg-secondary-container"
      : color === "#245cb4"
        ? "bg-primary-container"
        : color === "#6750a4"
          ? "bg-tertiary-container"
          : color === "#ed7014"
            ? "bg-orange-100"
            : "bg-error-container";

  const handlePress = () => {
    router.push(`/tools/${id}`);
  };

  const renderIcon = () => {
    switch (icon) {
      case "leaf":
        return <MaterialCommunityIcons name="leaf" size={28} color={color} />;
      case "anchor":
        return <MaterialCommunityIcons name="anchor" size={28} color={color} />;
      case "sync-alt":
        return <MaterialCommunityIcons name="sync" size={28} color={color} />;
      case "alert-circle":
        return <MaterialIcons name="error" size={28} color={color} />;
      case "book-outline":
        return <MaterialCommunityIcons name="book-outline" size={28} color={color} />;
      case "clipboard-text":
        return <MaterialCommunityIcons name="clipboard-text" size={28} color={color} />;
      default:
        return null;
    }
  };

  return (
    <Pressable onPress={handlePress} className="flex-1">
      {({ pressed }) => (
        <View
          className={`p-4 rounded-2xl bg-surface-container-low border border-surface-variant flex flex-col items-start gap-3 ${
            pressed ? "opacity-70" : ""
          }`}
        >
          <View
            className={`w-14 h-14 rounded-full ${bgColorClass} flex items-center justify-center`}
          >
            {renderIcon()}
          </View>
          <View className="flex-1">
            <Text className="font-bold text-on-surface text-base leading-tight" style={{ fontFamily: "Poppins-SemiBold" }}>
              {name}
            </Text>
            <Text className="font-label-sm text-on-surface-variant mt-1" style={{ fontFamily: "Poppins-Regular" }}>
              {description}
            </Text>
          </View>
        </View>
      )}
    </Pressable>
  );
}
