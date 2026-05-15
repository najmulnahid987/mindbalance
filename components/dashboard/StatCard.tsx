import React from 'react'
import { Text, View } from 'react-native'

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value }) => {
  return (
    <View className="bg-surface-container-low p-4 rounded-xl flex flex-col items-center justify-center text-center border border-outline-variant/10 shadow-sm min-h-[140px] w-full">
      <View className="mb-2">{icon}</View>
      <Text
        className="text-on-surface text-sm font-semibold leading-snug text-center"
        style={{ fontFamily: 'Poppins-SemiBold', textAlign: 'center' }}
      >
        {label}
      </Text>
      <Text
        className="text-on-surface-variant text-xs mt-2 text-center"
        style={{ fontFamily: 'Poppins-Regular', textAlign: 'center' }}
      >
        {value}
      </Text>
    </View>
  )
}

export default StatCard
