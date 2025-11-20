'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface RevenueTrendChartProps {
  data: Array<{ month: string; value: number }>
}

export function RevenueTrendChart({ data }: RevenueTrendChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
        <Tooltip 
          formatter={(value: number) => [`$${(value / 1000).toFixed(0)}K`, 'Revenue']}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#f97316" 
          strokeWidth={3}
          name="Monthly Revenue"
          dot={{ fill: '#f97316', r: 6 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

