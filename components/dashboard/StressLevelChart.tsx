import React from 'react'
import { Text, View } from 'react-native'

const StressLevelChart: React.FC = () => {
  const stressLevels = [60, 80, 40, 90, 50, 30, 45]
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const maxHeight = 128

  return (
    <View className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10 shadow-sm">
      <Text
        className="text-on-surface text-lg mb-6"
        style={{ fontFamily: 'Poppins-SemiBold' }}
      >
        Stress Level
      </Text>

      <View className="flex flex-row items-end justify-between h-32 gap-1 mb-4">
        {stressLevels.map((level, idx) => (
          <View key={idx} className="flex-1 flex items-end">
            <View
              className="w-full bg-secondary-container/40 rounded-t-full"
              style={{
                height: (level / 100) * maxHeight,
                opacity: level > 85 ? 0.6 : 0.4,
              }}
            />
          </View>
        ))}
      </View>

      <View className="flex flex-row justify-between px-2">
        {days.map((day, idx) => (
          <Text
            key={idx}
            className="text-outline text-xs"
            style={{ fontFamily: 'Poppins-Regular' }}
          >
            {day}
          </Text>
        ))}
      </View>
    </View>
  )
}

export default StressLevelChart
