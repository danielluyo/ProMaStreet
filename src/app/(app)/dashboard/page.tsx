'use client'

import Link from 'next/link'
import { 
  Briefcase, 
  DollarSign, 
  TrendingUp, 
  Users, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Target,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { portfolioMetrics, financialKPIs, projectKPIs, teamKPIs, clientKPIs, compositeKPIs, criticalAlerts, topOpportunities, trendingMetrics } from '@/data/mock-metrics'
import { mockProjects } from '@/data/mock-projects'
import { mockClients } from '@/data/mock-clients'
import { ProjectHealthPieChart } from '@/components/charts/ProjectHealthPieChart'
import { RevenueTrendChart } from '@/components/charts/RevenueTrendChart'
import { ClientSatisfactionChart } from '@/components/charts/ClientSatisfactionChart'
import { TeamUtilizationChart } from '@/components/charts/TeamUtilizationChart'
import { ProjectHealthTrendChart } from '@/components/charts/ProjectHealthTrendChart'

export default function DashboardPage() {
  // Get projects by status
  const greenProjects = mockProjects.filter(p => p.status === 'GREEN').length
  const yellowProjects = mockProjects.filter(p => p.status === 'YELLOW').length
  const redProjects = mockProjects.filter(p => p.status === 'RED').length

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Executive Dashboard</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Portfolio health, KPIs, and strategic insights at a glance
        </p>
      </div>

      {/* Portfolio Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Projects */}
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Active Projects
            </CardTitle>
            <Briefcase className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{portfolioMetrics.activeProjects}</div>
            <div className="mt-2 flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                {greenProjects} Green
              </Badge>
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                {yellowProjects} Yellow
              </Badge>
              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                {redProjects} Red
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Total ARR */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Annual Recurring Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              ${(portfolioMetrics.totalARR / 1000000).toFixed(2)}M
            </div>
            <div className="mt-2 flex items-center text-sm">
              <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">+17.9%</span>
              <span className="text-gray-600 ml-1">vs last quarter</span>
            </div>
          </CardContent>
        </Card>

        {/* Pipeline Value */}
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Pipeline Value
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              ${(portfolioMetrics.pipelineValue / 1000000).toFixed(1)}M
            </div>
            <div className="mt-2 text-sm text-gray-600">
              {topOpportunities.length} active opportunities
            </div>
          </CardContent>
        </Card>

        {/* Client Satisfaction */}
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Avg Client Satisfaction
            </CardTitle>
            <Activity className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {clientKPIs.averageCSAT.toFixed(1)}<span className="text-xl text-gray-500">/10</span>
            </div>
            <div className="mt-2 text-sm">
              <span className="text-gray-600">NPS:</span>{' '}
              <span className="font-semibold text-green-600">{clientKPIs.averageNPS}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Composite KPIs - Key Indices */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Delivery Predictability Index */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5 text-orange-500" />
              Delivery Predictability Index
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-4xl font-bold text-orange-600">
                {compositeKPIs.deliveryPredictabilityIndex}
              </div>
              <div className="text-xl text-gray-500">/100</div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Timeline Adherence</span>
                <span className="font-semibold">{compositeKPIs.deliveryComponents.timelineAdherence}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Velocity Stability</span>
                <span className="font-semibold">{compositeKPIs.deliveryComponents.velocityStability}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Defect Trends</span>
                <span className="font-semibold">{compositeKPIs.deliveryComponents.defectTrends}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Risk Exposure</span>
                <span className="font-semibold">{compositeKPIs.deliveryComponents.riskExposure}%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Health Score */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              Account Health Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-4xl font-bold text-blue-600">
                {compositeKPIs.accountHealthScore}
              </div>
              <div className="text-xl text-gray-500">/100</div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-24 text-gray-600">Financial</div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${compositeKPIs.accountHealthScore}%` }}
                  />
                </div>
                <div className="w-8 text-right font-semibold">{compositeKPIs.accountHealthScore}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-24 text-gray-600">Delivery</div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: '89%' }}
                  />
                </div>
                <div className="w-8 text-right font-semibold">89</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-24 text-gray-600">Sentiment</div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-600 h-2 rounded-full" 
                    style={{ width: '74%' }}
                  />
                </div>
                <div className="w-8 text-right font-semibold">74</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-24 text-gray-600">Governance</div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full" 
                    style={{ width: '78%' }}
                  />
                </div>
                <div className="w-8 text-right font-semibold">78</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Health 360 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-500" />
              Team Health 360
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-4xl font-bold text-green-600">
                {compositeKPIs.teamHealth360}
              </div>
              <div className="text-xl text-gray-500">/100</div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Utilization</span>
                <span className="font-semibold">{teamKPIs.utilizationRate}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Morale</span>
                <span className="font-semibold">{teamKPIs.teamMoraleScore}/10</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Attrition Risk</span>
                <span className="font-semibold text-green-600">Low</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Skill Alignment</span>
                <span className="font-semibold">{teamKPIs.skillMixAlignment}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Critical Alerts */}
      <Card className="border-t-4 border-t-red-500">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Critical Alerts
              </CardTitle>
              <CardDescription className="mt-1">
                Issues requiring immediate attention
              </CardDescription>
            </div>
            <Badge variant="destructive" className="text-lg px-3 py-1">
              {criticalAlerts.filter(a => a.severity === 'CRITICAL' || a.severity === 'HIGH').length} High Priority
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {criticalAlerts.slice(0, 3).map((alert) => (
              <div 
                key={alert.id}
                className={`p-4 rounded-lg border-l-4 ${
                  alert.severity === 'CRITICAL' 
                    ? 'bg-red-50 border-l-red-600' 
                    : alert.severity === 'HIGH'
                    ? 'bg-orange-50 border-l-orange-600'
                    : 'bg-yellow-50 border-l-yellow-600'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge 
                        variant={alert.severity === 'CRITICAL' ? 'destructive' : 'outline'}
                        className={alert.severity === 'HIGH' ? 'bg-orange-100 text-orange-800 border-orange-300' : ''}
                      >
                        {alert.severity}
                      </Badge>
                      <span className="text-xs text-gray-600 uppercase">{alert.category}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{alert.title}</h4>
                    <p className="text-sm text-gray-700 mb-2">{alert.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="font-medium text-gray-600">Impact:</span>{' '}
                        <span className="text-gray-900">{alert.impact}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">KPI:</span>{' '}
                        <span className="text-gray-900">{alert.kpiAffected}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Take Action
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button variant="ghost" className="text-orange-600 hover:text-orange-700">
              View All Alerts ({criticalAlerts.length})
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Two Column Section: Key Metrics & Top Opportunities */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Key Financial & Project Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-orange-500" />
              Key Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Financial */}
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-3">Financial</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Revenue vs Forecast</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">
                      ${(financialKPIs.revenueToDate / 1000000).toFixed(1)}M / ${(financialKPIs.revenueForecasted / 1000000).toFixed(2)}M
                    </span>
                    <ArrowDownRight className="h-4 w-4 text-red-600" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Gross Margin</span>
                  <span className="text-sm font-semibold text-green-600">{financialKPIs.grossMarginActual}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Budget Variance</span>
                  <span className="text-sm font-semibold text-green-600">{financialKPIs.budgetVariance}%</span>
                </div>
              </div>
            </div>

            {/* Project Delivery */}
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-3">Project Delivery</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Timeline Adherence</span>
                  <span className="text-sm font-semibold">{projectKPIs.averageTimelineAdherence}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">UAT Pass Rate</span>
                  <span className="text-sm font-semibold text-green-600">{projectKPIs.uatPassRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Active Risks</span>
                  <div className="flex gap-2">
                    <Badge variant="destructive" className="text-xs">
                      {projectKPIs.openRisksCritical} Critical
                    </Badge>
                    <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">
                      {projectKPIs.openRisksHigh} High
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Team */}
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-3">Team</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Team Size</span>
                  <span className="text-sm font-semibold">{teamKPIs.teamSize} members</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Utilization</span>
                  <span className="text-sm font-semibold">{teamKPIs.utilizationRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Capacity vs Demand</span>
                  <span className="text-sm font-semibold text-green-600">{teamKPIs.capacityVsDemand}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Opportunities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Top Growth Opportunities
            </CardTitle>
            <CardDescription>
              ${(topOpportunities.reduce((sum, opp) => sum + opp.value, 0) / 1000000).toFixed(1)}M total pipeline value
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topOpportunities.map((opp) => (
                <div key={opp.id} className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{opp.title}</h4>
                      <p className="text-sm text-gray-600">{opp.client}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-300">
                      {opp.probability}% prob
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-2xl font-bold text-green-700">
                      ${(opp.value / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-600">Expected Close</div>
                      <div className="text-sm font-medium">{new Date(opp.expectedCloseDate).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-green-200 grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <div className="text-gray-600">Revenue Impact</div>
                      <div className="font-semibold text-green-700">+{opp.kpiImpact.revenueIncrease}%</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Margin</div>
                      <div className="font-semibold text-green-700">+{opp.kpiImpact.marginImprovement}%</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Utilization</div>
                      <div className="font-semibold text-green-700">+{opp.kpiImpact.utilizationBoost}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts & Analytics Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Analytics & Trends</h2>
          <Link href="/reports">
            <Button variant="outline" size="sm">
              View Full Reports
            </Button>
          </Link>
        </div>

        {/* Row 1: Project Health & Revenue */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Project Health Distribution</CardTitle>
              <CardDescription>Current portfolio status breakdown</CardDescription>
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
              <CardTitle>Revenue Trend</CardTitle>
              <CardDescription>Monthly revenue over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <RevenueTrendChart data={trendingMetrics.revenue} />
            </CardContent>
          </Card>
        </div>

        {/* Row 2: Client Satisfaction & Team Utilization */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Client Satisfaction by Client</CardTitle>
              <CardDescription>Current satisfaction scores</CardDescription>
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
              <CardDescription>Utilization rate over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <TeamUtilizationChart data={trendingMetrics.teamUtilization} />
            </CardContent>
          </Card>
        </div>

        {/* Row 3: Project Health Over Time */}
        <Card>
          <CardHeader>
            <CardTitle>Project Health Over Time</CardTitle>
            <CardDescription>Portfolio health trends for the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ProjectHealthTrendChart data={trendingMetrics.projectHealth} />
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Link href="/clients">
              <Button className="w-full" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                View All Clients
              </Button>
            </Link>
            <Link href="/projects">
              <Button className="w-full" variant="outline">
                <Briefcase className="h-4 w-4 mr-2" />
                View All Projects
              </Button>
            </Link>
            <Link href="/reports">
              <Button className="w-full" variant="outline">
                <Activity className="h-4 w-4 mr-2" />
                Generate Reports
              </Button>
            </Link>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              <Clock className="h-4 w-4 mr-2" />
              Log Time
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
