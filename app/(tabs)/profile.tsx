import '@/global.css'
import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Pressable, ScrollView, Switch, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// SettingItem Component
interface SettingItemProps {
  icon: string
  label: string
  value?: string
  hasToggle?: boolean
  toggleValue?: boolean
  onToggleChange?: (value: boolean) => void
  hasChevron?: boolean
  onPress?: () => void
  isError?: boolean
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  label,
  value,
  hasToggle,
  toggleValue,
  onToggleChange,
  hasChevron,
  onPress,
  isError,
}) => {
  return (
    <Pressable
      onPress={onPress}
      className="w-full flex-row items-center justify-between p-4 border-t border-surface-variant/30"
    >
      <View className="flex-row items-center gap-4 flex-1">
        <MaterialIcons
          name={icon as any}
          size={24}
          color={isError ? '#ba1a1a' : '#737783'}
        />
        <Text
          className={`font-poppins text-body-md ${
            isError ? 'text-error' : 'text-on-surface'
          }`}
        >
          {label}
        </Text>
      </View>

      {hasToggle && onToggleChange && (
        <Switch
          value={toggleValue || false}
          onValueChange={onToggleChange}
          trackColor={{ false: '#e7eeff', true: '#0e6b51' }}
          thumbColor={toggleValue ? '#ffffff' : '#ffffff'}
        />
      )}

      {value && !hasToggle && (
        <Text className="font-poppins text-body-md text-outline">{value}</Text>
      )}

      {hasChevron && (
        <MaterialIcons
          name="arrow-forward-ios"
          size={20}
          color="#c3c6d4"
        />
      )}
    </Pressable>
  )
}

// SettingSection Component
interface SettingSectionItem {
  id: string
  icon: string
  label: string
  value?: string
  hasToggle?: boolean
  toggleValue?: boolean
  onToggleChange?: (id: string, value: boolean) => void
  hasChevron?: boolean
  isError?: boolean
}

interface SettingSectionProps {
  title: string
  titleColor: string
  items: SettingSectionItem[]
}

const SettingSection: React.FC<SettingSectionProps> = ({ title, titleColor, items }) => {
  return (
    <View className="mb-12">
      <Text
        className="font-label-md text-label-md px-2 mb-3"
        style={{ color: titleColor, fontFamily: 'Poppins-Medium' }}
      >
        {title}
      </Text>
      <View className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-surface-variant/10">
        {items.map((item, index) => (
          <View key={item.id} className={index === 0 ? 'border-t-0' : ''}>
            <SettingItem
              icon={item.icon}
              label={item.label}
              value={item.value}
              hasToggle={item.hasToggle}
              toggleValue={item.toggleValue}
              onToggleChange={
                item.onToggleChange
                  ? (value) => item.onToggleChange?.(item.id, value)
                  : undefined
              }
              hasChevron={item.hasChevron}
              isError={item.isError}
            />
          </View>
        ))}
      </View>
    </View>
  )
}

const profile = () => {
  // Toggle states
  const [reminders, setReminders] = useState({
    dailyCheckIn: true,
    breathing: false,
    journal: true,
  })

  const [appSettings, setAppSettings] = useState({
    darkMode: false,
  })

  const handleReminderToggle = (id: string, value: boolean) => {
    setReminders((prev) => ({ ...prev, [id]: value }))
  }

  const handleAppSettingToggle = (id: string, value: boolean) => {
    setAppSettings((prev) => ({ ...prev, [id]: value }))
  }

  // Settings Data
  const personalItems: SettingSectionItem[] = [
    {
      id: 'edit-profile',
      icon: 'person',
      label: 'Edit profile',
      hasChevron: true,
    },
    {
      id: 'user-type',
      icon: 'badge',
      label: 'User type',
      hasChevron: true,
    },
    {
      id: 'goals',
      icon: 'ads_click',
      label: 'Goals',
      hasChevron: true,
    },
    {
      id: 'language',
      icon: 'language',
      label: 'Language',
      value: 'English',
    },
  ]

  const reminderItems: SettingSectionItem[] = [
    {
      id: 'dailyCheckIn',
      icon: 'event_available',
      label: 'Daily check-in reminder',
      hasToggle: true,
      toggleValue: reminders.dailyCheckIn,
      onToggleChange: handleReminderToggle,
    },
    {
      id: 'breathing',
      icon: 'air',
      label: 'Breathing reminder',
      hasToggle: true,
      toggleValue: reminders.breathing,
      onToggleChange: handleReminderToggle,
    },
    {
      id: 'journal',
      icon: 'edit_note',
      label: 'Journal reminder',
      hasToggle: true,
      toggleValue: reminders.journal,
      onToggleChange: handleReminderToggle,
    },
  ]

  const privacyItems: SettingSectionItem[] = [
    {
      id: 'app-lock',
      icon: 'lock',
      label: 'App lock PIN',
      hasChevron: true,
    },
    {
      id: 'export-data',
      icon: 'download',
      label: 'Export my data',
      hasChevron: true,
    },
    {
      id: 'delete-data',
      icon: 'delete_outline',
      label: 'Delete my data',
      hasChevron: true,
      isError: true,
    },
    {
      id: 'privacy-policy',
      icon: 'policy',
      label: 'Privacy policy',
      hasChevron: true,
    },
  ]

  const appItems: SettingSectionItem[] = [
    {
      id: 'darkMode',
      icon: 'dark_mode',
      label: 'Dark mode',
      hasToggle: true,
      toggleValue: appSettings.darkMode,
      onToggleChange: handleAppSettingToggle,
    },
    {
      id: 'sound',
      icon: 'volume_up',
      label: 'Sound',
      value: 'Enabled',
    },
    {
      id: 'notifications',
      icon: 'notifications',
      label: 'Notifications',
      value: 'All',
    },
  ]

  const supportItems: SettingSectionItem[] = [
    {
      id: 'help-center',
      icon: 'help',
      label: 'Help center',
      hasChevron: true,
    },
    {
      id: 'health-disclaimer',
      icon: 'info',
      label: 'Mental health disclaimer',
      hasChevron: true,
    },
  ]

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        className="flex-1 bg-surface"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 32, paddingBottom: 128 }}
      >
        {/* Profile Header Section */}
        <View className="flex items-center justify-center py-8 gap-2">
          <View className="relative">
            {/* Avatar with First Letter */}
            <View className="w-24 h-24 rounded-full bg-primary items-center justify-center shadow-lg mb-4">
              <Text
                className="text-on-primary"
                style={{
                  fontSize: 40,
                  fontWeight: '700',
                  fontFamily: 'Poppins-Bold',
                }}
              >
                N
              </Text>
            </View>
            {/* Edit Button */}
            <Pressable className="absolute bottom-4 right-0 bg-primary p-2 rounded-full shadow-lg">
              <MaterialIcons name="edit" size={18} color="#ffffff" />
            </Pressable>
          </View>
          
          {/* Name */}
          <Text
            className="font-poppins text-on-surface"
            style={{
              fontSize: 24,
              fontWeight: '600',
              fontFamily: 'Poppins-SemiBold',
            }}
          >
            Nazmul
          </Text>
          
          {/* Subtitle */}
          <Text
            className="font-poppins text-on-surface-variant"
            style={{
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}
          >
            Student & Worker
          </Text>
        </View>

        <View className="px-6">
          {/* Personal Section */}
          <SettingSection
            title="Personal"
            titleColor="#245cb4"
            items={personalItems}
          />

          {/* Reminders Section */}
          <SettingSection
            title="Reminders"
            titleColor="#0e6b51"
            items={reminderItems}
          />

          {/* Privacy Section */}
          <SettingSection
            title="Privacy"
            titleColor="#737783"
            items={privacyItems}
          />

          {/* App Section */}
          <SettingSection
            title="App"
            titleColor="#6051a9"
            items={appItems}
          />

          {/* Support Section */}
          <SettingSection
            title="Support"
            titleColor="#737783"
            items={supportItems}
          />

          {/* Logout Button */}
          <View className="mt-8">
            <Pressable className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-surface-variant/10">
              <View className="w-full flex items-center justify-center p-4 border-t border-surface-variant/30 bg-surface-container-low">
                <View className="flex-row items-center gap-2">
                  <MaterialIcons name="logout" size={20} color="#ba1a1a" />
                  <Text
                    className="font-label-md text-label-md text-error uppercase tracking-wider"
                    style={{ fontFamily: 'Poppins-SemiBold' }}
                  >
                    Log out
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile