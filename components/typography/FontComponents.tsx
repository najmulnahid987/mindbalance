import { Text, View } from "react-native";

interface CardProps {
  title: string;
  description: string;
}

export function WellnessCard({ title, description }: CardProps) {
  return (
    <View className="bg-primary-container rounded-lg p-4 mb-4">
      {/* Using Inter for Title (modern, bold) */}
      <Text 
        style={{ fontFamily: "Inter-Bold", fontSize: 20 }}
        className="text-on-primary-container mb-2"
      >
        {title}
      </Text>

      {/* Using Poppins for Description (friendly, readable) */}
      <Text 
        style={{ fontFamily: "Poppins-Regular", fontSize: 14 }}
        className="text-on-primary-container/80"
      >
        {description}
      </Text>
    </View>
  );
}

export function CheckInPrompt() {
  return (
    <View>
      <Text 
        style={{ fontFamily: "Inter-SemiBold", fontSize: 18 }}
        className="text-on-surface mb-2"
      >
        How are you feeling today?
      </Text>
      <Text 
        style={{ fontFamily: "Poppins-Regular", fontSize: 14 }}
        className="text-on-surface/60"
      >
        Take a moment to check in with yourself
      </Text>
    </View>
  );
}
