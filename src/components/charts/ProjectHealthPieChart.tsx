'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

interface ProjectHealthPieChartProps {
  green: number
  yellow: number
  red: number
}

export function ProjectHealthPieChart({ green, yellow, red }: ProjectHealthPieChartProps) {
  const data = [
    { name: 'Green', value: green, color: '#10b981' },
    { name: 'Yellow', value: yellow, color: '#f59e0b' },
    { name: 'Red', value: red, color: '#ef4444' },
  ]

  const COLORS = ['#10b981', '#f59e0b', '#ef4444']

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

