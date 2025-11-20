'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

interface ClientSatisfactionChartProps {
  data: Array<{ name: string; score: number }>
}

export function ClientSatisfactionChart({ data }: ClientSatisfactionChartProps) {
  // Color based on score
  const getColor = (score: number) => {
    if (score >= 8) return '#10b981' // Green
    if (score >= 6) return '#f59e0b' // Yellow
    return '#ef4444' // Red
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
        <YAxis domain={[0, 10]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="score" name="Satisfaction Score" radius={[8, 8, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.score)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

