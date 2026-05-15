import { useEffect, useRef, useState } from 'react'
import { AppState, AppStateStatus } from 'react-native'

type BreathingPhase = 'inhale' | 'hold' | 'exhale' | 'complete'

interface BreathingState {
  phase: BreathingPhase
  timeRemaining: number
  isActive: boolean
  cycleNumber: number
}

const CYCLE_PHASES = {
  inhale: 4000, // 4 seconds
  hold: 4000, // 4 seconds
  exhale: 6000, // 6 seconds
}

const TOTAL_DURATION = 180000 // 3 minutes in milliseconds
const PHASE_ORDER: BreathingPhase[] = ['inhale', 'hold', 'exhale']

export const useBreathingExercise = () => {
  const [state, setState] = useState<BreathingState>({
    phase: 'inhale',
    timeRemaining: TOTAL_DURATION,
    isActive: true,
    cycleNumber: 1,
  })

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const accumulatedTimeRef = useRef(0)
  const appStateRef = useRef(AppState.currentState)

  // Calculate total cycle time (4 + 4 + 6 = 14 seconds)
  const totalCycleTime = CYCLE_PHASES.inhale + CYCLE_PHASES.hold + CYCLE_PHASES.exhale

  const getPhaseForTime = (elapsed: number): { phase: BreathingPhase; inCycle: number } => {
    const cycleTime = elapsed % totalCycleTime
    if (cycleTime < CYCLE_PHASES.inhale) {
      return { phase: 'inhale', inCycle: cycleTime }
    } else if (cycleTime < CYCLE_PHASES.inhale + CYCLE_PHASES.hold) {
      return { phase: 'hold', inCycle: cycleTime - CYCLE_PHASES.inhale }
    } else {
      return { phase: 'exhale', inCycle: cycleTime - CYCLE_PHASES.inhale - CYCLE_PHASES.hold }
    }
  }

  const getCycleNumber = (elapsed: number): number => {
    return Math.floor(elapsed / totalCycleTime) + 1
  }

  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (appStateRef.current.match(/inactive|background/) && nextAppState === 'active') {
      // App has come to foreground - resume
      setState((prev) => ({ ...prev, isActive: true }))
    } else if (nextAppState.match(/inactive|background/)) {
      // App is going to background - pause
      setState((prev) => ({ ...prev, isActive: false }))
    }
    appStateRef.current = nextAppState
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange)
    return () => {
      subscription.remove()
    }
  }, [])

  useEffect(() => {
    if (!state.isActive || state.phase === 'complete') {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    intervalRef.current = setInterval(() => {
      setState((prev) => {
        if (prev.phase === 'complete') {
          return prev
        }

        const newTimeRemaining = prev.timeRemaining - 100 // Update every 100ms
        const elapsedTime = TOTAL_DURATION - newTimeRemaining

        if (newTimeRemaining <= 0) {
          // Exercise complete
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
          }
          return {
            ...prev,
            timeRemaining: 0,
            phase: 'complete',
            isActive: false,
          }
        }

        const { phase } = getPhaseForTime(elapsedTime)
        const cycleNumber = getCycleNumber(elapsedTime)

        return {
          ...prev,
          timeRemaining: newTimeRemaining,
          phase,
          cycleNumber,
        }
      })
    }, 100)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [state.isActive, state.phase])

  const pause = () => {
    setState((prev) => ({ ...prev, isActive: false }))
  }

  const resume = () => {
    setState((prev) => ({ ...prev, isActive: true }))
  }

  const restart = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setState({
      phase: 'inhale',
      timeRemaining: TOTAL_DURATION,
      isActive: true,
      cycleNumber: 1,
    })
  }

  const end = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setState({
      phase: 'complete',
      timeRemaining: 0,
      isActive: false,
      cycleNumber: 0,
    })
  }

  return {
    phase: state.phase,
    timeRemaining: state.timeRemaining,
    isActive: state.isActive,
    cycleNumber: state.cycleNumber,
    pause,
    resume,
    restart,
    end,
  }
}
