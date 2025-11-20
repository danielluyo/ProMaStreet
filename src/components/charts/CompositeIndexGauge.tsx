'use client'

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts'

interface CompositeIndexGaugeProps {
  value: number
  title: string
  color?: string
}

export function CompositeIndexGauge({ value, title, color = '#f97316' }: CompositeIndexGaugeProps) {
  const data = [
    {
      name: title,
      value: value,
      fill: color,
    },
  ]

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={200}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="90%"
          barSize={20}
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold" style={{ color }}>{value}</div>
          <div className="text-xs text-gray-600">/ 100</div>
        </div>
      </div>
    </div>
  )
}

