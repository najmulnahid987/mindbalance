import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

const tools = [
  { name: "Breathing", icon: "leaf", color: "#0e6b51" },
  { name: "Grounding", icon: "anchor", color: "#0e6b51" },
  { name: "CBT Reframe", icon: "sync-alt", color: "#245cb4" },
  { name: "Burnout Check", icon: "alert-circle", color: "#ba1a1a" },
];

function ToolCard({
  name,
  icon,
  color,
}: {
  name: string;
  icon: string;
  color: string;
}) {
  const iconColor = color;
  const bgColorClass =
    color === "#0e6b51"
      ? "bg-secondary-container"
      : color === "#245cb4"
        ? "bg-primary-container"
        : "bg-error-container";

  return (
    <View className="flex-shrink-0 w-32 p-4 rounded-xl bg-surface-container-low flex flex-col items-center gap-2 border border-surface-variant mr-2">
      <View
        className={`w-12 h-12 rounded-full ${bgColorClass} flex items-center justify-center`}
      >
        {icon === "leaf" ? (
          <MaterialCommunityIcons name="leaf" size={24} color={iconColor} />
        ) : icon === "anchor" ? (
          <MaterialCommunityIcons name="anchor" size={24} color={iconColor} />
        ) : icon === "sync-alt" ? (
          <MaterialCommunityIcons name="sync" size={24} color={iconColor} />
        ) : (
          <MaterialIcons name="error" size={24} color={iconColor} />
        )}
      </View>
      <Text className="font-label-md text-on-surface text-center" style={{ fontFamily: "Poppins-Medium" }}>{name}</Text>
    </View>
  );
}

export function ToolsSection() {
  return (
    <View>
      <Text className="font-headline-md text-on-surface mb-4" style={{ fontFamily: "Poppins-SemiBold" }}>Tools</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        className="flex-row gap-6"
      >
        {tools.map((tool, idx) => (
          <ToolCard
            key={idx}
            name={tool.name}
            icon={tool.icon}
            color={tool.color}
          />
        ))}
      </ScrollView>
    </View>
  );
}
