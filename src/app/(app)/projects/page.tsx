'use client'

import Link from 'next/link'
import { Briefcase, TrendingUp, DollarSign, Users, AlertTriangle, CheckCircle, Clock, Filter } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { mockProjects } from '@/data/mock-projects'
import { mockClients } from '@/data/mock-clients'
import { useState } from 'react'

export default function ProjectsPage() {
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'GREEN' | 'YELLOW' | 'RED'>('ALL')
  const [filterType, setFilterType] = useState<string>('ALL')

  // Calculate portfolio metrics
  const totalBudget = mockProjects.reduce((sum, p) => sum + p.budget, 0)
  const totalSpent = mockProjects.reduce((sum, p) => sum + p.spent, 0)
  const avgTimeline = Math.round(mockProjects.reduce((sum, p) => sum + p.kpis.timelineAdherence, 0) / mockProjects.length)
  const totalRisks = mockProjects.reduce((sum, p) => sum + p.risks.length, 0)

  // Filter projects
  const filteredProjects = mockProjects.filter(p => {
    const statusMatch = filterStatus === 'ALL' || p.status === filterStatus
    const typeMatch = filterType === 'ALL' || p.type === filterType
    return statusMatch && typeMatch
  })

  // Get unique project types
  const projectTypes = Array.from(new Set(mockProjects.map(p => p.type)))

  // Get status styling
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'GREEN':
        return 'bg-green-100 text-green-800 border-green-300'
      case 'YELLOW':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'RED':
        return 'bg-red-100 text-red-800 border-red-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  // Get project type badge color
  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'IMPLEMENTATION': 'bg-blue-100 text-blue-800 border-blue-300',
      'STAFF_AUGMENTATION': 'bg-purple-100 text-purple-800 border-purple-300',
      'MANAGED_SERVICES': 'bg-green-100 text-green-800 border-green-300',
      'DISCOVERY': 'bg-yellow-100 text-yellow-800 border-yellow-300',
      'MVP': 'bg-pink-100 text-pink-800 border-pink-300',
      'POC': 'bg-indigo-100 text-indigo-800 border-indigo-300',
      'INNOVATION_LAB': 'bg-orange-100 text-orange-800 border-orange-300',
    }
    return colors[type] || 'bg-gray-100 text-gray-800 border-gray-300'
  }

  // Format type for display
  const formatType = (type: string) => {
    return type.split('_').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Project Portfolio</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage all projects with comprehensive KPIs and governance
          </p>
        </div>
        <Link href="/projects/new">
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Briefcase className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </Link>
      </div>

      {/* Portfolio Metrics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{mockProjects.length}</div>
            <div className="flex gap-2 mt-2 text-xs">
              <span className="text-green-600 font-semibold">{mockProjects.filter(p => p.status === 'GREEN').length} Green</span>
              <span className="text-yellow-600 font-semibold">{mockProjects.filter(p => p.status === 'YELLOW').length} Yellow</span>
              <span className="text-red-600 font-semibold">{mockProjects.filter(p => p.status === 'RED').length} Red</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Budget Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${(totalSpent / 1000000).toFixed(1)}M</div>
            <div className="text-xs text-gray-600 mt-2">
              of ${(totalBudget / 1000000).toFixed(1)}M total ({Math.round((totalSpent / totalBudget) * 100)}%)
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{avgTimeline}%</div>
            <div className="text-xs text-gray-600 mt-2">On-time delivery rate</div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Risks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">{totalRisks}</div>
            <div className="text-xs text-gray-600 mt-2">Across all projects</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Filter className="h-5 w-5 text-orange-500" />
              Filter Projects
            </CardTitle>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                setFilterStatus('ALL')
                setFilterType('ALL')
              }}
            >
              Clear Filters
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {/* Status Filter */}
            <div className="flex gap-2">
              <Button
                variant={filterStatus === 'ALL' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('ALL')}
              >
                All Status
              </Button>
              <Button
                variant={filterStatus === 'GREEN' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('GREEN')}
                className={filterStatus === 'GREEN' ? 'bg-green-600 hover:bg-green-700' : ''}
              >
                Green
              </Button>
              <Button
                variant={filterStatus === 'YELLOW' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('YELLOW')}
                className={filterStatus === 'YELLOW' ? 'bg-yellow-600 hover:bg-yellow-700' : ''}
              >
                Yellow
              </Button>
              <Button
                variant={filterStatus === 'RED' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('RED')}
                className={filterStatus === 'RED' ? 'bg-red-600 hover:bg-red-700' : ''}
              >
                Red
              </Button>
            </div>

            {/* Type Filter */}
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={filterType === 'ALL' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterType('ALL')}
              >
                All Types
              </Button>
              {projectTypes.map(type => (
                <Button
                  key={type}
                  variant={filterType === type ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterType(type)}
                >
                  {formatType(type)}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => {
          const client = mockClients.find(c => c.id === project.clientId)
          const budgetUtilization = (project.spent / project.budget) * 100

          return (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {client?.company || 'Unknown Client'}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className={getStatusStyle(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <Badge variant="outline" className={getTypeColor(project.type)}>
                  {formatType(project.type)}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* KPI Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Timeline</div>
                    <div className="text-lg font-bold text-blue-700">{project.kpis.timelineAdherence}%</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Budget Used</div>
                    <div className="text-lg font-bold text-green-700">{Math.round(budgetUtilization)}%</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Client Sat</div>
                    <div className="text-lg font-bold text-purple-700">{project.kpis.clientSatisfaction}/10</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Team Sat</div>
                    <div className="text-lg font-bold text-orange-700">{project.kpis.teamSatisfaction}/10</div>
                  </div>
                </div>

                {/* Budget Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Budget</span>
                    <span className="font-semibold">
                      ${(project.spent / 1000).toFixed(0)}K / ${(project.budget / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        budgetUtilization > 90 ? 'bg-red-600' : 
                        budgetUtilization > 75 ? 'bg-yellow-600' : 
                        'bg-green-600'
                      }`}
                      style={{ width: `${Math.min(budgetUtilization, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-3 gap-2 text-sm pt-2 border-t border-gray-100">
                  <div>
                    <div className="text-xs text-gray-600">Team</div>
                    <div className="font-semibold">{project.teamSize}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Risks</div>
                    <div className="font-semibold text-red-600">{project.risks.length}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Pricing</div>
                    <div className="font-semibold text-xs">{formatType(project.pricingModel)}</div>
                  </div>
                </div>

                {/* Governance Indicators */}
                <div className="flex gap-2 pt-2 border-t border-gray-100">
                  {project.governance.hasSOW && (
                    <Badge variant="outline" className="text-xs bg-green-50 border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      SOW
                    </Badge>
                  )}
                  {project.governance.hasCharter && (
                    <Badge variant="outline" className="text-xs bg-green-50 border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Charter
                    </Badge>
                  )}
                  {project.governance.hasRACI && (
                    <Badge variant="outline" className="text-xs bg-green-50 border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      RACI
                    </Badge>
                  )}
                </div>

                {/* Action Button */}
                <Link href={`/projects/${project.id}`} className="block">
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No projects match the selected filters</p>
            <Button 
              variant="ghost" 
              className="mt-4"
              onClick={() => {
                setFilterStatus('ALL')
                setFilterType('ALL')
              }}
            >
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
