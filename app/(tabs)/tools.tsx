import { BackNavigation } from "@/components/navigation/BackNavigation";
import { ToolCard } from "@/components/tools/ToolCard";
import { calmTools } from "@/constant/data";
import "@/global.css";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tools() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        className="flex-1 bg-surface"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 32, paddingBottom: 80 }}
      >
        <BackNavigation />
        <View className="px-5 pb-20 flex flex-col gap-6">
        {/* Header */}
        <View>
          <Text className="font-headline-lg text-on-surface text-2xl font-bold" style={{ fontFamily: "Poppins-SemiBold" }}>
            Tools
          </Text>
          <Text className="font-body-md text-on-surface-variant mt-2" style={{ fontFamily: "Poppins-Regular" }}>
            Quick exercises to support your mind.
          </Text>
        </View>

        {/* Tools Grid */}
        <View className="flex-col gap-4">
          {/* First Row */}
          <View className="flex-row gap-4">
            <ToolCard
              id={calmTools[0].id}
              name={calmTools[0].name}
              icon={calmTools[0].icon}
              color={calmTools[0].color}
              description={calmTools[0].description}
            />
            <ToolCard
              id={calmTools[1].id}
              name={calmTools[1].name}
              icon={calmTools[1].icon}
              color={calmTools[1].color}
              description={calmTools[1].description}
            />
          </View>

          {/* Second Row */}
          <View className="flex-row gap-4">
            <ToolCard
              id={calmTools[2].id}
              name={calmTools[2].name}
              icon={calmTools[2].icon}
              color={calmTools[2].color}
              description={calmTools[2].description}
            />
            <ToolCard
              id={calmTools[3].id}
              name={calmTools[3].name}
              icon={calmTools[3].icon}
              color={calmTools[3].color}
              description={calmTools[3].description}
            />
          </View>

          {/* Third Row */}
          <View className="flex-row gap-4">
            <ToolCard
              id={calmTools[4].id}
              name={calmTools[4].name}
              icon={calmTools[4].icon}
              color={calmTools[4].color}
              description={calmTools[4].description}
            />
            <ToolCard
              id={calmTools[5].id}
              name={calmTools[5].name}
              icon={calmTools[5].icon}
              color={calmTools[5].color}
              description={calmTools[5].description}
            />
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}