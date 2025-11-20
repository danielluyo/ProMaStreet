'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Download, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Briefcase,
  Activity,
  Target,
  AlertTriangle 
} from 'lucide-react'
import { mockProjects } from '@/data/mock-projects'
import { mockClients } from '@/data/mock-clients'
import { 
  portfolioMetrics, 
  financialKPIs, 
  projectKPIs, 
  teamKPIs, 
  clientKPIs, 
  compositeKPIs,
  trendingMetrics 
} from '@/data/mock-metrics'
import { ProjectHealthPieChart } from '@/components/charts/ProjectHealthPieChart'
import { RevenueTrendChart } from '@/components/charts/RevenueTrendChart'
import { ClientSatisfactionChart } from '@/components/charts/ClientSatisfactionChart'
import { TeamUtilizationChart } from '@/components/charts/TeamUtilizationChart'
import { ProjectHealthTrendChart } from '@/components/charts/ProjectHealthTrendChart'
import { CompositeIndexGauge } from '@/components/charts/CompositeIndexGauge'

export default function ReportsPage() {
  const greenProjects = mockProjects.filter(p => p.status === 'GREEN').length
  const yellowProjects = mockProjects.filter(p => p.status === 'YELLOW').length
  const redProjects = mockProjects.filter(p => p.status === 'RED').length

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Executive Reports</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Comprehensive analytics and insights across all dimensions
          </p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Executive Summary Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Portfolio Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{Math.round((greenProjects / mockProjects.length) * 100)}%</div>
            <div className="text-xs text-gray-600 mt-1">Projects on track</div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Revenue Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${(financialKPIs.revenueToDate / 1000000).toFixed(1)}M</div>
            <div className="text-xs text-gray-600 mt-1">YTD revenue</div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Client Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{clientKPIs.averageCSAT.toFixed(1)}<span className="text-xl text-gray-500">/10</span></div>
            <div className="text-xs text-gray-600 mt-1">Average CSAT</div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Team Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{teamKPIs.utilizationRate}%</div>
            <div className="text-xs text-gray-600 mt-1">Current rate</div>
          </CardContent>
        </Card>
      </div>

      {/* Composite Indices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-orange-500" />
            Composite Performance Indices
          </CardTitle>
          <CardDescription>
            Aggregated scores across multiple dimensions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-4 text-center">Delivery Predictability</h4>
              <CompositeIndexGauge 
                value={compositeKPIs.deliveryPredictabilityIndex} 
                title="Delivery Index"
                color="#f97316"
              />
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Timeline Adherence</span>
                  <span className="font-semibold">{compositeKPIs.deliveryComponents.timelineAdherence}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Velocity Stability</span>
                  <span className="font-semibold">{compositeKPIs.deliveryComponents.velocityStability}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Defect Trends</span>
                  <span className="font-semibold">{compositeKPIs.deliveryComponents.defectTrends}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Risk Exposure</span>
                  <span className="font-semibold">{compositeKPIs.deliveryComponents.riskExposure}%</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-4 text-center">Account Health</h4>
              <CompositeIndexGauge 
                value={compositeKPIs.accountHealthScore} 
                title="Account Health"
                color="#3b82f6"
              />
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Financial Health</span>
                  <span className="font-semibold">85</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Performance</span>
                  <span className="font-semibold">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Client Sentiment</span>
                  <span className="font-semibold">74</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Governance Coverage</span>
                  <span className="font-semibold">78</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-4 text-center">Team Health 360</h4>
              <CompositeIndexGauge 
                value={compositeKPIs.teamHealth360} 
                title="Team Health"
                color="#10b981"
              />
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Utilization</span>
                  <span className="font-semibold">{teamKPIs.utilizationRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Morale</span>
                  <span className="font-semibold">{teamKPIs.teamMoraleScore}/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Attrition Risk</span>
                  <span className="font-semibold text-green-600">Low</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Skill Alignment</span>
                  <span className="font-semibold">{teamKPIs.skillMixAlignment}%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Project Health Distribution</CardTitle>
            <CardDescription>Current status across all projects</CardDescription>
          </CardHeader>
          <CardContent>
            <ProjectHealthPieChart 
              green={greenProjects} 
              yellow={yellowProjects} 
              red={redProjects} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Growth Trend</CardTitle>
            <CardDescription>Monthly revenue for the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <RevenueTrendChart data={trendingMetrics.revenue} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Client Satisfaction Scores</CardTitle>
            <CardDescription>Sentiment by client</CardDescription>
          </CardHeader>
          <CardContent>
            <ClientSatisfactionChart 
              data={mockClients.map(c => ({
                name: c.company.length > 15 ? c.company.substring(0, 12) + '...' : c.company,
                score: c.sentimentScore
              }))}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Utilization Trend</CardTitle>
            <CardDescription>Utilization rate over time</CardDescription>
          </CardHeader>
          <CardContent>
            <TeamUtilizationChart data={trendingMetrics.teamUtilization} />
          </CardContent>
        </Card>
      </div>

      {/* Project Health Over Time */}
      <Card>
        <CardHeader>
          <CardTitle>Project Health Trends</CardTitle>
          <CardDescription>Portfolio health evolution over the last 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <ProjectHealthTrendChart data={trendingMetrics.projectHealth} />
        </CardContent>
      </Card>

      {/* Key Metrics Summary */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Financial Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              Financial Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Revenue vs Forecast</span>
              <span className="font-semibold text-red-600">{financialKPIs.revenueForecastVariance}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Gross Margin</span>
              <span className="font-semibold text-green-600">{financialKPIs.grossMarginActual}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Budget Variance</span>
              <span className="font-semibold text-green-600">{financialKPIs.budgetVariance}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">T&M Utilization</span>
              <span className="font-semibold">{financialKPIs.utilizationTM}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Revenue Leakage</span>
              <span className="font-semibold text-yellow-600">{financialKPIs.revenueLeakage}%</span>
            </div>
          </CardContent>
        </Card>

        {/* Project Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-500" />
              Project Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Timeline Adherence</span>
              <span className="font-semibold">{projectKPIs.averageTimelineAdherence}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Velocity Stability</span>
              <span className="font-semibold">{projectKPIs.averageVelocityStability}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">UAT Pass Rate</span>
              <span className="font-semibold text-green-600">{projectKPIs.uatPassRate}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Release Stability</span>
              <span className="font-semibold text-green-600">{projectKPIs.releaseStability}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Active Escalations</span>
              <span className="font-semibold text-red-600">{projectKPIs.escalationCount}</span>
            </div>
          </CardContent>
        </Card>

        {/* Team Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-500" />
              Team Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Team Size</span>
              <span className="font-semibold">{teamKPIs.teamSize} members</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Utilization Rate</span>
              <span className="font-semibold">{teamKPIs.utilizationRate}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Team Morale</span>
              <span className="font-semibold">{teamKPIs.teamMoraleScore}/10</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Turnover Rate</span>
              <span className="font-semibold text-green-600">{teamKPIs.turnoverRate}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Capacity vs Demand</span>
              <span className="font-semibold">{teamKPIs.capacityVsDemand}%</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

