import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function TodaysCBTReframe() {
  return (
    <View className="p-5 rounded-xl bg-surface-container-low border border-surface-variant flex-col gap-3">
      {/* Header */}
      <View className="flex-row items-center gap-2 text-primary">
        <MaterialCommunityIcons name="sync" size={16} color="#245cb4" />
        <Text className="font-label-sm uppercase tracking-wide text-primary" style={{ fontFamily: "Poppins-SemiBold" }}>
          Today's CBT Reframe
        </Text>
      </View>

      {/* Content */}
      <View className="flex-col gap-3 mt-1">
        {/* Old Thought */}
        <View className="p-3 rounded-lg bg-error-container flex-row gap-3 border border-error">
          <MaterialIcons name="priority-high" size={20} color="#ba1a1a" />
          <View className="flex-1">
            <Text className="text-xs uppercase font-bold text-error mb-0.5" style={{ fontFamily: "Poppins-SemiBold" }}>
              Old Thought
            </Text>
            <Text className="font-body-md text-on-surface leading-snug" style={{ fontFamily: "Poppins-Regular" }}>
              "I am not good enough."
            </Text>
          </View>
        </View>

        {/* Balanced Thought */}
        <View className="p-3 rounded-lg bg-primary-container/20 flex-row gap-3 border border-primary/20">
          <MaterialCommunityIcons name="scale-balance" size={20} color="#245cb4" />
          <View className="flex-1">
            <Text className="text-xs uppercase font-bold text-primary mb-0.5" style={{ fontFamily: "Poppins-SemiBold" }}>
              Balanced Thought
            </Text>
            <Text className="font-body-md text-on-surface leading-snug" style={{ fontFamily: "Poppins-Regular" }}>
              One mistake does not define me. I can learn and improve.
            </Text>
          </View>
        </View>

        {/* Small Action */}
        <View className="p-3 rounded-lg bg-secondary-container/30 flex-row gap-3 border border-secondary/20">
          <MaterialCommunityIcons name="lightning-bolt" size={20} color="#0e6b51" />
          <View className="flex-1">
            <Text className="text-xs uppercase font-bold text-secondary mb-0.5" style={{ fontFamily: "Poppins-SemiBold" }}>
              Small Action
            </Text>
            <Text className="font-body-md text-on-surface leading-snug" style={{ fontFamily: "Poppins-Regular" }}>
              Ask for clearer feedback tomorrow.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
