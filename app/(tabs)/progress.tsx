import CommonTriggersSection from '@/components/dashboard/CommonTriggersSection'
import MoodTrendChart from '@/components/dashboard/MoodTrendChart'
import PersonalInsightCard from '@/components/dashboard/PersonalInsightCard'
import StatCard from '@/components/dashboard/StatCard'
import StressLevelChart from '@/components/dashboard/StressLevelChart'
import { BackNavigation } from '@/components/navigation/BackNavigation'
import '@/global.css'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Progress = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        className="bg-surface"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 32, paddingBottom: 80 }}
      >
      
          <BackNavigation />
        <View className="px-6 pb-20">
          {/* Header Section */}  
          <View className="py-8 pt-0">
            <Text
              className="text-on-surface text-2xl"
              style={{ fontFamily: 'Poppins-SemiBold' }}
            >
              Your Progress
            </Text>
            <Text
              className="text-on-surface-variant text-sm"
              style={{ fontFamily: 'Poppins-Regular' }}
            >
              Small steps count.
            </Text>
          </View>

          {/* Summary Stats Section - 3 Column Grid */}
          <View className="flex flex-row gap-3 mb-12">
            <View className="flex-1">
              <StatCard
                icon={
                  <MaterialIcons
                    name="event-available"
                    size={24}
                    color="#245cb4"
                  />
                }
                label="Check-ins: 5"
                value="this week"
              />
            </View>
            <View className="flex-1">
              <StatCard
                icon={
                  <MaterialIcons name="auto-stories" size={24} color="#0e6b51" />
                }
                label="Journals: 3"
                value="entries"
              />
            </View>
            <View className="flex-1">
              <StatCard
                icon={
                  <MaterialIcons
                    name="architecture"
                    size={24}
                    color="#6051a9"
                  />
                }
                label="Tools used: 4"
                value="times"
              />
            </View>
          </View>

          {/* Mood Trend Chart */}
          <View className="mb-12">
            <MoodTrendChart />
          </View>

          {/* Stress Level Chart */}
          <View className="mb-12">
            <StressLevelChart />
          </View>

          {/* Triggers and Insights Grid */}
          <View className="flex flex-col gap-6">
            <View>
              <CommonTriggersSection />
            </View>
            <View>
              <PersonalInsightCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Progress