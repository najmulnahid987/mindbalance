import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

interface PersonalInsightCardProps {
  insight?: string
  pattern?: string
}

const PersonalInsightCard: React.FC<PersonalInsightCardProps> = ({
  insight = 'Your stress was higher on days with poor sleep.',
  pattern = 'Consistent pattern detected',
}) => {
  return (
    <View className="bg-primary-container/10 rounded-2xl p-6 border border-primary/10 flex flex-col justify-center relative overflow-hidden shadow-sm">
      {/* Background lightbulb icon (decorative) */}
      <View className="absolute -right-4 -top-4 opacity-10">
        <MaterialIcons name="lightbulb" size={80} color="#245cb4" />
      </View>

      {/* Content */}
      <View className="flex flex-col justify-center">
        <Text
          className="text-primary text-xs uppercase tracking-wider mb-2"
          style={{ fontFamily: 'Poppins-SemiBold', letterSpacing: 0.05 }}
        >
          Personal Insight
        </Text>

        <Text
          className="text-on-primary-container text-base leading-6 mb-4"
          style={{ fontFamily: 'Poppins-Regular' }}
        >
          "{insight}"
        </Text>

        <View className="flex flex-row items-center gap-2">
          <MaterialIcons name="insights" size={16} color="#245cb4" />
          <Text
            className="text-primary text-xs"
            style={{ fontFamily: 'Poppins-Medium' }}
          >
            {pattern}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default PersonalInsightCard
