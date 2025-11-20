'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ProjectHealthTrendChartProps {
  data: Array<{ month: string; green: number; yellow: number; red: number }>
}

export function ProjectHealthTrendChart({ data }: ProjectHealthTrendChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area 
          type="monotone" 
          dataKey="green" 
          stackId="1" 
          stroke="#10b981" 
          fill="#10b981" 
          name="Green Projects"
        />
        <Area 
          type="monotone" 
          dataKey="yellow" 
          stackId="1" 
          stroke="#f59e0b" 
          fill="#f59e0b" 
          name="Yellow Projects"
        />
        <Area 
          type="monotone" 
          dataKey="red" 
          stackId="1" 
          stroke="#ef4444" 
          fill="#ef4444" 
          name="Red Projects"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

