
import { BurnoutRiskCard } from "@/components/dashboard/BurnoutRiskCard";
import { CheckInHeader } from "@/components/dashboard/CheckInHeader";
import { JournalEntriesSection } from "@/components/dashboard/JournalEntriesSection";
import { PreviousCheckInCard } from "@/components/dashboard/PreviousCheckInCard";
import { TodaysCBTReframe } from "@/components/dashboard/TodaysCBTReframe";
import { ToolsSection } from "@/components/dashboard/ToolsSection";
import "@/global.css";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        className="flex-1 bg-surface"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 32, paddingBottom: 128 }}
      >
        <View className="px-5 pb-32 flex flex-col gap-8">
          {/* Check-In Header */}
          <CheckInHeader />

          {/* Previous Check-In Section */}
          <PreviousCheckInCard />

          {/* Tools Section */}
          <ToolsSection />

          {/* Today's Activity Section */}
          <View className="flex-col gap-4">
            <Text 
              className="font-headline-md text-on-surface"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Today's Activity
            </Text>
            <View className="flex-col gap-4">
              {/* Today's CBT Reframe */}
              <TodaysCBTReframe />

              {/* Burnout Risk Card */}
              <BurnoutRiskCard />

              {/* Journal Entries Section */}
              <JournalEntriesSection />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}