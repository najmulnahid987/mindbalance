import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

interface Trigger {
  id: string
  name: string
  count: number
  icon: keyof typeof MaterialIcons.glyphMap
  color: string
}

interface CommonTriggersSectionProps {
  triggers?: Trigger[]
}

const defaultTriggers: Trigger[] = [
  { id: 'work', name: 'Work', count: 3, icon: 'work', color: '#245cb4' },
  { id: 'sleep', name: 'Sleep', count: 2, icon: 'bedtime', color: '#0e6b51' },
  { id: 'study', name: 'Study', count: 2, icon: 'school', color: '#6051a9' },
]

const CommonTriggersSection: React.FC<CommonTriggersSectionProps> = ({
  triggers = defaultTriggers,
}) => {
  return (
    <View className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10 shadow-sm">
      <Text
        className="text-on-surface text-lg mb-4"
        style={{ fontFamily: 'Poppins-SemiBold' }}
      >
        Common Triggers
      </Text>

      <View className="space-y-2">
        {triggers.map((trigger) => (
          <Pressable
            key={trigger.id}
            className="flex flex-row items-center justify-between p-3 bg-surface-container-low rounded-lg active:opacity-75 transition-opacity"
          >
            <View className="flex flex-row items-center gap-3">
              <MaterialIcons
                name={trigger.icon}
                size={20}
                color={trigger.color}
              />
              <Text
                className="text-on-surface text-sm"
                style={{ fontFamily: 'Poppins-Medium' }}
              >
                {trigger.name}
              </Text>
            </View>
            <Text
              className="text-on-surface-variant text-xs"
              style={{ fontFamily: 'Poppins-Regular' }}
            >
              {trigger.count} times
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

export default CommonTriggersSection
