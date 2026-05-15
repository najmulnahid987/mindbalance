import React from 'react'
import { Text, View } from 'react-native'
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg'

const MoodTrendChart: React.FC = () => {
  // Mock mood data for the 7 days
  const moodPoints = [65, 55, 70, 50, 75, 60, 80]
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  // SVG dimensions
  const svgWidth = 340
  const svgHeight = 160
  const padding = 20
  const chartWidth = svgWidth - padding * 2
  const chartHeight = svgHeight - padding * 2

  // Calculate points for the curve
  const pointSpacing = chartWidth / (moodPoints.length - 1)
  const minMood = Math.min(...moodPoints)
  const maxMood = Math.max(...moodPoints)
  const moodRange = maxMood - minMood || 1

  // Convert mood values to SVG coordinates
  const points = moodPoints.map((mood, idx) => ({
    x: padding + idx * pointSpacing,
    y:
      padding +
      chartHeight -
      ((mood - minMood) / moodRange) * chartHeight * 0.8,
    mood,
  }))

  // Generate smooth curve path using quadratic bezier curves
  let pathData = `M ${points[0].x} ${points[0].y}`

  for (let i = 1; i < points.length; i++) {
    const current = points[i]
    const prev = points[i - 1]

    // Control point for smooth curve
    const cpX = (prev.x + current.x) / 2
    const cpY = prev.y

    pathData += ` Q ${cpX} ${cpY} ${current.x} ${current.y}`
  }

  // Create fill path (curve + bottom edge)
  const fillPathData =
    pathData +
    ` L ${points[points.length - 1].x} ${svgHeight - 10} L ${points[0].x} ${svgHeight - 10} Z`

  return (
    <View className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10 shadow-sm">
      <View className="flex flex-row justify-between items-center mb-6">
        <Text
          className="text-on-surface text-lg"
          style={{ fontFamily: 'Poppins-SemiBold' }}
        >
          Mood Trend
        </Text>
        <Text
          className="text-on-surface-variant text-xs"
          style={{ fontFamily: 'Poppins-Regular' }}
        >
          Last 7 Days
        </Text>
      </View>

      {/* SVG Chart */}
      <View className="mb-4">
        <Svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
          <Defs>
            <LinearGradient id="moodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <Stop offset="0%" stopColor="#245cb4" stopOpacity="0.1" />
              <Stop offset="100%" stopColor="#245cb4" stopOpacity="0" />
            </LinearGradient>
          </Defs>

          {/* Gradient fill under curve */}
          <Path d={fillPathData} fill="url(#moodGradient)" />

          {/* Smooth curve line */}
          <Path
            d={pathData}
            stroke="#245cb4"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data point circles */}
          {points.map((point, idx) => (
            <Circle
              key={idx}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#245cb4"
            />
          ))}
        </Svg>
      </View>

      {/* Day Labels */}
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

export default MoodTrendChart
