import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export function CheckInHeader() {
  return (
    <View className="flex-row justify-between items-center bg-surface-container-lowest p-4 rounded-lg shadow-sm">
      <View className="flex-row items-center gap-3">
        <View className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Text className="text-on-primary font-bold text-lg" style={{ fontFamily: "Poppins-SemiBold" }}>N</Text>
        </View>
        <Text className="font-headline-md text-on-surface" style={{ fontFamily: "Poppins-SemiBold" }}>Check-In</Text>
      </View>
      <TouchableOpacity className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
        <MaterialIcons name="add" size={24} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
}
