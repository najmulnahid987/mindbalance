import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function PreviousCheckInCard() {
  return (
    <View className="flex-col gap-3">
      {/* Header */}
      <View className="flex-row justify-between items-center">
        <Text className="font-label-sm text-primary uppercase tracking-wide" style={{ fontFamily: "Poppins-SemiBold" }}>
          Previous Check-In
        </Text>
        <View className="bg-primary-container px-2 py-1 rounded-full">
          <Text className="text-on-primary-container font-bold text-xs" style={{ fontFamily: "Poppins-SemiBold" }}>TODAY</Text>
        </View>
      </View>

      {/* Grid: Mood & Intensity */}
      <View className="flex-row gap-3">
        {/* Mood Card */}
        <View className="flex-1 bg-surface-container-low p-4 rounded-xl flex-col gap-3">
          <Text className="text-on-surface-variant font-label-md opacity-80" style={{ fontFamily: "Poppins-Medium" }}>Mood</Text>
          <View className="flex-row items-center gap-2">
            <MaterialIcons name="cloud" size={24} color="#73A2FF" />
            <Text className="font-headline-md text-on-surface" style={{ fontFamily: "Poppins-SemiBold" }}>Stressed</Text>
          </View>
        </View>

        {/* Intensity Card */}
        <View className="flex-1 bg-surface-container-low p-4 rounded-xl flex-col gap-3">
          <Text className="text-on-surface-variant font-label-md opacity-80" style={{ fontFamily: "Poppins-Medium" }}>Intensity</Text>
          <View className="flex-row items-center gap-2">
            <MaterialCommunityIcons name="gauge" size={24} color="#0e6b51" />
            <Text className="font-headline-md text-on-surface" style={{ fontFamily: "Poppins-SemiBold" }}>7/10</Text>
          </View>
        </View>
      </View>

      {/* Triggers & Note */}
      <View className="bg-surface-container-lowest border border-surface-variant p-4 rounded-xl flex-col gap-4">
        {/* Triggers */}
        <View>
          <Text className="text-xs uppercase text-on-surface-variant font-bold mb-2" style={{ fontFamily: "Poppins-SemiBold" }}>Trigger</Text>
          <View className="flex-row flex-wrap gap-2">
            {["Work", "Family", "Sleep"].map((trigger, idx) => (
              <View
                key={idx}
                className="px-4 py-1 rounded-full bg-surface-container-low"
              >
                <Text className="text-primary font-label-md" style={{ fontFamily: "Poppins-Medium" }}>{trigger}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Note */}
        <View className="pl-3 border-l-4 border-primary/40">
          <Text className="text-xs uppercase text-on-surface-variant font-bold" style={{ fontFamily: "Poppins-SemiBold" }}>Note</Text>
          <Text className="font-body-md text-on-surface mt-1 italic" style={{ fontFamily: "Poppins-Regular" }}>
            "Feeling a bit overwhelmed but prioritizing rest tonight."
          </Text>
        </View>
      </View>
    </View>
  );
}
