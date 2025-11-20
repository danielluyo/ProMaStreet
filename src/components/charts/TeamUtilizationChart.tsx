'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface TeamUtilizationChartProps {
  data: Array<{ month: string; utilization: number }>
}

export function TeamUtilizationChart({ data }: TeamUtilizationChartProps) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUtilization" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
        <Tooltip formatter={(value: number) => [`${value}%`, 'Utilization']} />
        <Area 
          type="monotone" 
          dataKey="utilization" 
          stroke="#3b82f6" 
          fillOpacity={1} 
          fill="url(#colorUtilization)"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

