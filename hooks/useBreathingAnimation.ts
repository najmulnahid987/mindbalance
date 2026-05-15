import { useEffect } from 'react'
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

type BreathingPhase = 'inhale' | 'hold' | 'exhale' | 'complete'

const CYCLE_PHASES = {
  inhale: 4000, // 4 seconds
  hold: 4000, // 4 seconds
  exhale: 6000, // 6 seconds
}

export const useBreathingAnimation = (phase: BreathingPhase, isActive: boolean) => {
  const scaleValue = useSharedValue(1)
  const opacityValue = useSharedValue(0.1)

  useEffect(() => {
    if (!isActive) {
      return
    }

    switch (phase) {
      case 'inhale':
        // Scale from 1 to 1.3 over 4 seconds
        scaleValue.value = withTiming(1.3, {
          duration: CYCLE_PHASES.inhale,
          easing: Easing.inOut(Easing.quad),
        })
        break

      case 'hold':
        // Stay at 1.3 for 4 seconds
        scaleValue.value = withTiming(1.3, {
          duration: CYCLE_PHASES.hold,
          easing: Easing.linear,
        })
        break

      case 'exhale':
        // Scale from 1.3 back to 1 over 6 seconds
        scaleValue.value = withTiming(1, {
          duration: CYCLE_PHASES.exhale,
          easing: Easing.inOut(Easing.quad),
        })
        break

      case 'complete':
        // Return to resting state
        scaleValue.value = withTiming(1, {
          duration: 500,
          easing: Easing.inOut(Easing.quad),
        })
        break
    }
  }, [phase, isActive, scaleValue])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
    }
  })

  return { scaleValue, animatedStyle }
}
