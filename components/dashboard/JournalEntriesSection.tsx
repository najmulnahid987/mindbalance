import { Text, View } from "react-native";

export function JournalEntriesSection() {
  return (
    <View className="flex-col gap-4">
      {/* Entry Card */}
      <View className="p-5 rounded-xl bg-surface-container-low border border-surface-variant flex-col gap-3">
        <View className="flex-row justify-between items-center mb-1">
          <View className="px-2.5 py-0.5 rounded-full bg-secondary-container">
            <Text className="text-on-secondary-container font-label-sm text-xs uppercase tracking-wider" style={{ fontFamily: "Poppins-SemiBold" }}>
              BETTER
            </Text>
          </View>
          <Text className="text-on-surface-variant text-xs font-medium" style={{ fontFamily: "Poppins-Medium" }}>
            Today, 8:15 AM
          </Text>
        </View>

        <View className="flex-col gap-1">
          <Text className="font-headline-md text-on-surface" style={{ fontFamily: "Poppins-SemiBold" }}>Morning Reflections</Text>
          <Text className="font-body-md text-on-surface-variant leading-relaxed" style={{ fontFamily: "Poppins-Regular" }}>
            The air was particularly crisp this morning. I'm thankful for the
            quiet...
          </Text>
        </View>
      </View>
    </View>
  );
}
