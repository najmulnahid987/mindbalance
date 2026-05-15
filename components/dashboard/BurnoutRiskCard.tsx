import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function BurnoutRiskCard() {
  return (
    <View className="p-5 rounded-xl bg-error-container/20 border border-error/10 flex-row justify-between gap-4">
      <View className="flex-col gap-4 flex-1">
        <View className="flex-col gap-3">
          <View className="px-3 py-1 rounded-full bg-error-container/40 w-fit">
            <Text className="text-error font-label-sm" style={{ fontFamily: "Poppins-Medium" }}>Risk Assessment</Text>
          </View>
          <View className="flex-col">
            <Text className="font-headline-lg text-on-surface" style={{ fontFamily: "Poppins-SemiBold" }}>Burnout risk:</Text>
            <Text className="text-4xl font-bold text-error leading-tight" style={{ fontFamily: "Poppins-SemiBold" }}>High</Text>
          </View>
        </View>
      </View>

      <View className="flex-row gap-2 justify-end">
        <View className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center">
          <MaterialIcons name="warning" size={24} color="#ba1a1a" />
        </View>
        <View className="justify-center">
          <MaterialIcons name="chevron-right" size={24} color="#ba1a1a" />
        </View>
      </View>
    </View>
  );
}
