import { BackNavigation } from "@/components/navigation/BackNavigation";
import { calmTools } from "@/constant/data";
import "@/global.css";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ToolDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const tool = calmTools.find((t) => t.id === id);

  if (!tool) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 bg-surface items-center justify-center">
          <Text className="text-on-surface" style={{ fontFamily: "Poppins-Regular" }}>Tool not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const bgColorClass =
    tool.color === "#0e6b51"
      ? "bg-secondary-container"
      : tool.color === "#245cb4"
        ? "bg-primary-container"
        : tool.color === "#6750a4"
          ? "bg-tertiary-container"
          : tool.color === "#ed7014"
            ? "bg-orange-100"
            : "bg-error-container";

  const renderIcon = () => {
    switch (tool.icon) {
      case "leaf":
        return <MaterialCommunityIcons name="leaf" size={48} color={tool.color} />;
      case "anchor":
        return <MaterialCommunityIcons name="anchor" size={48} color={tool.color} />;
      case "sync-alt":
        return <MaterialCommunityIcons name="sync" size={48} color={tool.color} />;
      case "alert-circle":
        return <MaterialIcons name="error" size={48} color={tool.color} />;
      case "book-outline":
        return <MaterialCommunityIcons name="book-outline" size={48} color={tool.color} />;
      case "clipboard-text":
        return <MaterialCommunityIcons name="clipboard-text" size={48} color={tool.color} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        className="flex-1 bg-surface"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 32, paddingBottom: 80 }}
      >
        <BackNavigation title={tool.name} />
        <View className="px-5 pb-20 flex flex-col gap-6">
        {/* Icon */}
        <View
          className={`w-20 h-20 rounded-full ${bgColorClass} flex items-center justify-center self-center`}
        >
          {renderIcon()}
        </View>

        {/* Title and Duration */}
        <View className="flex-col gap-2 items-center">
          <Text className="font-headline-md text-on-surface text-2xl font-bold" style={{ fontFamily: "Poppins-SemiBold" }}>
            {tool.name}
          </Text>
          <View className="bg-secondary-container px-3 py-1 rounded-full">
            <Text className="text-on-secondary-container text-sm font-semibold" style={{ fontFamily: "Poppins-SemiBold" }}>
              {tool.duration}
            </Text>
          </View>
        </View>

        {/* Description */}
        <View className="bg-surface-container-low rounded-2xl border border-surface-variant p-4">
          <Text className="text-on-surface leading-6" style={{ fontFamily: "Poppins-Regular" }}>
            {tool.fullDescription}
          </Text>
        </View>

        {/* Start Button */}
        <Pressable
          onPress={() => {
            // Handle practice navigation based on tool type
            if (tool.id === "breathing") {
              router.push("/cbt/breathing");
            } else {
              // Other tools to be implemented
              console.log(`Tool ${tool.id} not yet implemented`);
            }
          }}
          className="bg-primary py-3 rounded-lg items-center mt-4"
        >
          {({ pressed }: { pressed: boolean }) => (
            <Text
              className={`text-on-primary font-semibold text-base ${
                pressed ? "opacity-70" : ""
              }`}
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Start Practice
            </Text>
          )}
        </Pressable>

        {/* Benefits Section */}
        <View className="flex-col gap-3">
          <Text className="font-headline-sm text-on-surface font-bold" style={{ fontFamily: "Poppins-SemiBold" }}>
            Benefits
          </Text>
          <View className="bg-surface-container-low rounded-xl border border-surface-variant p-4 flex-col gap-2">
            <View className="flex-row gap-2">
              <Text className="text-primary text-lg">•</Text>
              <Text className="text-on-surface flex-1" style={{ fontFamily: "Poppins-Regular" }}>
                {tool.category === "calm" && "Reduces anxiety and stress"}
                {tool.category === "reframe" && "Improves thought patterns"}
                {tool.category === "assessment" && "Identifies burnout signs"}
                {tool.category === "reflection" && "Clarifies your emotions"}
              </Text>
            </View>
            <View className="flex-row gap-2">
              <Text className="text-primary text-lg">•</Text>
              <Text className="text-on-surface flex-1" style={{ fontFamily: "Poppins-Regular" }}>
                {tool.category === "calm" && "Improves focus and clarity"}
                {tool.category === "reframe" && "Builds resilience"}
                {tool.category === "assessment" && "Guides recovery planning"}
                {tool.category === "reflection" && "Promotes self-discovery"}
              </Text>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
