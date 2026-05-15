import '@/global.css'
import { useBreathingAnimation } from '@/hooks/useBreathingAnimation'
import { useBreathingExercise } from '@/hooks/useBreathingExercise'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'

const BreathingScreen = () => {
  const router = useRouter()
  const [isCountingDown, setIsCountingDown] = useState(true)
  const [countdown, setCountdown] = useState(3)
  const { phase, timeRemaining, isActive, pause, resume, restart, end } = useBreathingExercise()
  const { animatedStyle } = useBreathingAnimation(phase, isActive)

  // Pause breathing during countdown
  useEffect(() => {
    if (isCountingDown) {
      pause()
    }
  }, [isCountingDown, pause])

  // Countdown effect
  useEffect(() => {
    if (!isCountingDown) return

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setIsCountingDown(false)
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isCountingDown])

  // Resume breathing when countdown finishes
  useEffect(() => {
    if (!isCountingDown && countdown === 0) {
      restart()
    }
  }, [isCountingDown, countdown, restart])

  const formatTime = (ms: number) => {
    const totalSeconds = Math.ceil(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale':
        return 'Breathe In'
      case 'hold':
        return 'Hold'
      case 'exhale':
        return 'Breathe Out'
      default:
        return 'Complete'
    }
  }

  const handleEnd = () => {
    end()
  }

  const handleBack = () => {
    router.back()
  }

  // Countdown screen
  if (isCountingDown) {
    return (
      <SafeAreaView className="flex-1 bg-surface">
        <View className="flex-1 items-center justify-center px-6 gap-8">
          <Text
            className="text-center text-on-surface text-4xl"
            style={{
              fontFamily: 'Poppins-SemiBold',
              letterSpacing: -0.5,
            }}
          >
            Get Ready
          </Text>
          <Text
            className="text-primary text-9xl text-center"
            style={{
              fontFamily: 'Poppins-Bold',
              letterSpacing: 2,
            }}
          >
            {countdown}
          </Text>
          <Text
            className="text-on-surface-variant text-center text-lg"
            style={{
              fontFamily: 'Poppins-Regular',
              lineHeight: 28,
            }}
          >
            Prepare your breathing space
          </Text>
        </View>
      </SafeAreaView>
    )
  }

  if (phase === 'complete') {
    return (
      <SafeAreaView className="flex-1 bg-surface">
        <View className="flex-1 items-center justify-center px-6 gap-8">
          {/* Success Icon */}
          <View className="items-center gap-6">
            <View className="items-center justify-center w-24 h-24 rounded-full bg-secondary-container">
              <MaterialIcons name="check-circle" size={64} color="#0e6b51" />
            </View>
            <Text
              className="text-center text-on-surface text-3xl"
              style={{
                fontFamily: 'Poppins-SemiBold',
              }}
            >
              Session Complete
            </Text>
            <Text
              className="text-center text-on-surface-variant text-base"
              style={{
                fontFamily: 'Poppins-Regular',
                lineHeight: 24,
              }}
            >
              You took a moment for yourself.
            </Text>
          </View>

          {/* Return Button */}
          <Pressable
            onPress={handleBack}
            className="w-full py-4 rounded-xl bg-primary items-center justify-center active:opacity-70 mt-4"
          >
            <Text
              className="text-on-primary text-base font-semibold"
              style={{
                fontFamily: 'Poppins-SemiBold',
              }}
            >
              Return to Tools
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView
        className="flex-1 bg-surface"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 32, paddingBottom: 128, flexGrow: 1 }}
      >
        <View className="items-center justify-center px-6 gap-12 py-8">
          {/* Header */}
          <View className="items-center gap-3 w-full">
            <Text
              className="text-on-surface text-center text-4xl"
              style={{
                fontFamily: 'Poppins-SemiBold',
                letterSpacing: -0.5,
              }}
            >
              3-Minute Breathing
            </Text>
            <Text
              className="text-on-surface-variant text-center text-base"
              style={{
                fontFamily: 'Poppins-Regular',
                lineHeight: 24,
              }}
            >
              Follow the circle and breathe slowly.
            </Text>
          </View>

          {/* Animated Breathing Circle */}
          <View className="items-center justify-center gap-8 py-8">
            <View className="items-center justify-center relative">
              {/* Outer glow rings */}
              <View
                className="absolute rounded-full opacity-40"
                style={{
                  width: 340,
                  height: 340,
                  backgroundColor: 'rgba(115, 162, 255, 0.15)',
                  borderRadius: 170,
                }}
              />
              <View
                className="absolute rounded-full opacity-60"
                style={{
                  width: 280,
                  height: 280,
                  backgroundColor: 'rgba(115, 162, 255, 0.1)',
                  borderRadius: 140,
                }}
              />

              {/* Main animated circle */}
              <Animated.View
                style={[
                  {
                    width: 256,
                    height: 256,
                    borderRadius: 128,
                    backgroundColor: '#73a2ff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    shadowColor: '#245cb4',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.2,
                    shadowRadius: 40,
                    elevation: 8,
                  },
                  animatedStyle,
                ]}
              >
                <Text
                  className="text-white text-2xl text-center"
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    letterSpacing: 0.5,
                  }}
                >
                  {getPhaseText()}
                </Text>
              </Animated.View>
            </View>

            {/* Timer Display */}
            <Text
              className="text-primary text-7xl text-center"
              style={{
                fontFamily: 'Poppins-Bold',
                letterSpacing: 1,
              }}
            >
              {formatTime(timeRemaining)}
            </Text>
          </View>

          {/* Controls Section */}
          <View className="w-full gap-6">
            {/* Control Buttons */}
            <View className="flex-row items-center justify-center gap-12">
              <Pressable
                onPress={isActive ? pause : resume}
                className="items-center gap-2 active:opacity-50"
              >
                <View className="items-center justify-center w-14 h-14">
                  <MaterialIcons
                    name={isActive ? 'pause-circle' : 'play-circle'}
                    size={40}
                    color="#424752"
                  />
                </View>
                <Text
                  className="text-on-surface-variant text-xs text-center"
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                  }}
                >
                  {isActive ? 'Pause' : 'Resume'}
                </Text>
              </Pressable>

              <Pressable onPress={restart} className="items-center gap-2 active:opacity-50">
                <View className="items-center justify-center w-14 h-14">
                  <MaterialIcons name="refresh" size={40} color="#424752" />
                </View>
                <Text
                  className="text-on-surface-variant text-xs text-center"
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                  }}
                >
                  Restart
                </Text>
              </Pressable>

              <Pressable onPress={handleEnd} className="items-center gap-2 active:opacity-50">
                <View className="items-center justify-center w-14 h-14">
                  <MaterialIcons name="close" size={40} color="#ba1a1a" />
                </View>
                <Text
                  className="text-error text-xs text-center"
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                  }}
                >
                  End
                </Text>
              </Pressable>
            </View>

            {/* Tip Card */}
            <View
              className="rounded-2xl p-6 border border-surface-variant"
              style={{
                backgroundColor: '#f0f3ff',
              }}
            >
              <Text
                className="text-center text-on-surface-variant italic text-base"
                style={{
                  fontFamily: 'Poppins-Regular',
                  lineHeight: 24,
                }}
              >
                "Find a comfortable position. Breathe gently."
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default BreathingScreen