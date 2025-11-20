'use client'

import { use } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Briefcase, 
  DollarSign, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  TrendingUp,
  FileText,
  Shield,
  Calendar,
  Edit,
  Target,
  Mail,
  Phone,
  MessageSquare,
  Star,
  TrendingDown,
  Globe,
  Award,
  Gauge,
  Languages
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { mockProjects } from '@/data/mock-projects'
import { mockClients } from '@/data/mock-clients'
import { 
  getStakeholdersForProject, 
  getInfluenceColor, 
  getSentimentColor, 
  formatEngagement 
} from '@/data/mock-stakeholders'
import { 
  getTeamForProject, 
  getSeniorityColor, 
  getPerformanceStars, 
  formatTenure 
} from '@/data/mock-team'

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = mockProjects.find(p => p.id === id)
  
  if (!project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Project not found</h2>
        <Link href="/projects">
          <Button className="mt-4">Back to Projects</Button>
        </Link>
      </div>
    )
  }

  const client = mockClients.find(c => c.id === project.clientId)
  const stakeholders = getStakeholdersForProject(project.id)
  const teamMembers = getTeamForProject(project.id)
  const budgetUtilization = (project.spent / project.budget) * 100
  const daysElapsed = Math.floor((new Date().getTime() - new Date(project.startDate).getTime()) / (1000 * 60 * 60 * 24))
  const totalDays = project.endDate ? Math.floor((new Date(project.endDate).getTime() - new Date(project.startDate).getTime()) / (1000 * 60 * 60 * 24)) : 365
  const timeElapsed = Math.round((daysElapsed / totalDays) * 100)

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

  // Get risk severity styling
  const getRiskStyle = (severity: string) => {
    switch (severity) {
      case 'CRITICAL':
        return 'bg-red-100 text-red-800 border-red-300'
      case 'HIGH':
        return 'bg-orange-100 text-orange-800 border-orange-300'
      case 'MEDIUM':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'LOW':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  // Format type for display
  const formatType = (type: string) => {
    return type.split('_').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')
  }

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link href="/projects">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Button>
      </Link>

      {/* Project Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>
            <Badge variant="outline" className={getStatusStyle(project.status)}>
              {project.status}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{client?.company || 'Unknown Client'}</span>
            <span>•</span>
            <span>{formatType(project.type)}</span>
            <span>•</span>
            <span>{formatType(project.pricingModel)}</span>
          </div>
          <p className="mt-2 text-gray-600 max-w-3xl">{project.description}</p>
        </div>
        <Link href={`/projects/${project.id}/edit`}>
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Edit Project
          </Button>
        </Link>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-5">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-700">{project.kpis.timelineAdherence}%</div>
            <div className="text-xs text-gray-600 mt-1">Adherence</div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-700">{Math.round(budgetUtilization)}%</div>
            <div className="text-xs text-gray-600 mt-1">Utilized</div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Client Sat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-700">{project.kpis.clientSatisfaction}<span className="text-xl text-gray-500">/10</span></div>
            <div className="text-xs text-gray-600 mt-1">Score</div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Team Sat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-700">{project.kpis.teamSatisfaction}<span className="text-xl text-gray-500">/10</span></div>
            <div className="text-xs text-gray-600 mt-1">Score</div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Risks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-700">{project.risks.length}</div>
            <div className="text-xs text-gray-600 mt-1">Active</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="risks">Risks ({project.risks.length})</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Project Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-orange-500" />
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Project Manager</div>
                    <div className="font-semibold">{project.projectManager}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Team Size</div>
                    <div className="font-semibold">{project.teamSize} members</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Start Date</div>
                    <div className="font-semibold">{new Date(project.startDate).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">End Date</div>
                    <div className="font-semibold">{project.endDate ? new Date(project.endDate).toLocaleDateString() : 'Ongoing'}</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Client</div>
                  <Link href={`/clients/${client?.id}`}>
                    <div className="font-semibold text-blue-600 hover:underline">{client?.company}</div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Financial */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  Financial Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Budget</span>
                    <span className="font-semibold">${(project.budget / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Spent</span>
                    <span className="font-semibold text-blue-600">${(project.spent / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${
                        budgetUtilization > 90 ? 'bg-red-600' : 
                        budgetUtilization > 75 ? 'bg-yellow-600' : 
                        'bg-green-600'
                      }`}
                      style={{ width: `${Math.min(budgetUtilization, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>{Math.round(budgetUtilization)}% utilized</span>
                    <span>${((project.budget - project.spent) / 1000).toFixed(0)}K remaining</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pricing Model</span>
                    <Badge variant="outline">{formatType(project.pricingModel)}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Timeline Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Time Elapsed</span>
                    <span className="font-semibold">{timeElapsed}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${timeElapsed}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>{daysElapsed} days</span>
                    <span>{totalDays} days total</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Timeline Adherence</span>
                    <span className={`font-semibold ${
                      project.kpis.timelineAdherence >= 90 ? 'text-green-600' :
                      project.kpis.timelineAdherence >= 75 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {project.kpis.timelineAdherence}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Satisfaction Scores */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                  Satisfaction Scores
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Client Satisfaction</span>
                    <span className="font-semibold">{project.kpis.clientSatisfaction}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        project.kpis.clientSatisfaction >= 8 ? 'bg-green-600' :
                        project.kpis.clientSatisfaction >= 6 ? 'bg-yellow-600' :
                        'bg-red-600'
                      }`}
                      style={{ width: `${project.kpis.clientSatisfaction * 10}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Team Satisfaction</span>
                    <span className="font-semibold">{project.kpis.teamSatisfaction}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        project.kpis.teamSatisfaction >= 8 ? 'bg-green-600' :
                        project.kpis.teamSatisfaction >= 6 ? 'bg-yellow-600' :
                        'bg-red-600'
                      }`}
                      style={{ width: `${project.kpis.teamSatisfaction * 10}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Risks Tab */}
        <TabsContent value="risks" className="space-y-4">
          {project.risks.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <p className="text-gray-600">No active risks for this project</p>
              </CardContent>
            </Card>
          ) : (
            project.risks.map((risk) => (
              <Card key={risk.id} className="border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className={getRiskStyle(risk.severity)}>
                          {risk.severity}
                        </Badge>
                        <Badge variant="outline" className={
                          risk.status === 'OPEN' ? 'bg-red-50 text-red-700 border-red-200' :
                          risk.status === 'MITIGATING' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                          'bg-green-50 text-green-700 border-green-200'
                        }>
                          {risk.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{risk.title}</CardTitle>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-600">Probability</div>
                      <div className="text-2xl font-bold text-red-600">{risk.probability}%</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">Impact:</div>
                    <p className="text-sm text-gray-600">{risk.impact}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">Mitigation:</div>
                    <p className="text-sm text-gray-600">{risk.mitigation}</p>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Owner:</span>
                    <span className="text-sm font-semibold">{risk.owner}</span>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        {/* Governance Tab */}
        <TabsContent value="governance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                Governance Documents
              </CardTitle>
              <CardDescription>
                Project governance framework and documentation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {/* SOW */}
                <div className={`p-4 rounded-lg border-2 ${
                  project.governance.hasSOW 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    {project.governance.hasSOW ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-gray-400" />
                    )}
                    <h4 className="font-semibold">Statement of Work (SOW)</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Defines project scope, deliverables, and acceptance criteria
                  </p>
                  {project.governance.hasSOW && (
                    <Button size="sm" variant="outline">View Document</Button>
                  )}
                </div>

                {/* Charter */}
                <div className={`p-4 rounded-lg border-2 ${
                  project.governance.hasCharter 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    {project.governance.hasCharter ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-gray-400" />
                    )}
                    <h4 className="font-semibold">Project Charter</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Formal authorization and strategic alignment
                  </p>
                  {project.governance.hasCharter && (
                    <Button size="sm" variant="outline">View Document</Button>
                  )}
                </div>

                {/* RACI */}
                <div className={`p-4 rounded-lg border-2 ${
                  project.governance.hasRACI 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    {project.governance.hasRACI ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-gray-400" />
                    )}
                    <h4 className="font-semibold">RACI Matrix</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Roles and responsibilities matrix
                  </p>
                  {project.governance.hasRACI && (
                    <Button size="sm" variant="outline">View Matrix</Button>
                  )}
                </div>

                {/* Communication Plan */}
                <div className={`p-4 rounded-lg border-2 ${
                  project.governance.hasCommunicationPlan 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    {project.governance.hasCommunicationPlan ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-gray-400" />
                    )}
                    <h4 className="font-semibold">Communication Plan</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Stakeholder communication cadence and channels
                  </p>
                  {project.governance.hasCommunicationPlan && (
                    <Button size="sm" variant="outline">View Plan</Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stakeholders */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-500" />
                Project Stakeholders
              </CardTitle>
              <CardDescription>
                {stakeholders.length > 0 ? `${stakeholders.length} stakeholders identified` : 'No stakeholders assigned yet'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {stakeholders.length === 0 ? (
                <div className="text-center py-8 text-gray-600">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p>No stakeholders assigned to this project</p>
                  <Button className="mt-4" variant="outline">
                    Add Stakeholders
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {stakeholders.map((stakeholder) => (
                    <div key={stakeholder.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      {/* Header Row */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {stakeholder.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{stakeholder.name}</h4>
                            <p className="text-sm text-gray-600">{stakeholder.title}</p>
                            <p className="text-xs text-gray-500">{stakeholder.company}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <Badge variant="outline" className={getInfluenceColor(stakeholder.influence)}>
                            Influence: {stakeholder.influence}/5
                          </Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {stakeholder.level}
                          </Badge>
                        </div>
                      </div>

                      {/* Role */}
                      <div className="mb-3 p-2 bg-purple-50 rounded border border-purple-100">
                        <p className="text-sm font-medium text-purple-900">{stakeholder.role}</p>
                      </div>

                      {/* Key Metrics Row */}
                      <div className="grid grid-cols-4 gap-3 mb-3 pb-3 border-b border-gray-100">
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1">Interest</div>
                          <div className="flex items-center justify-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span className="font-semibold text-sm">{stakeholder.interest}/5</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1">Sentiment</div>
                          <div className={`font-semibold text-sm ${getSentimentColor(stakeholder.sentiment)}`}>
                            {stakeholder.sentiment}/10
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1">Engagement</div>
                          <div className="font-semibold text-xs">{formatEngagement(stakeholder.engagementFrequency)}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1">Last Contact</div>
                          <div className="font-semibold text-xs">
                            {new Date(stakeholder.lastContact).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="h-3 w-3" />
                          <span>{stakeholder.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="h-3 w-3" />
                          <span>{stakeholder.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 col-span-2">
                          <MessageSquare className="h-3 w-3" />
                          <span>Prefers: {stakeholder.communicationPreference}</span>
                        </div>
                      </div>

                      {/* Concerns */}
                      {stakeholder.concerns.length > 0 && (
                        <div className="mb-3">
                          <div className="text-xs font-semibold text-gray-700 mb-1">Key Concerns:</div>
                          <div className="flex flex-wrap gap-1">
                            {stakeholder.concerns.map((concern, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs bg-yellow-50 text-yellow-800 border-yellow-200">
                                {concern}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Notes */}
                      <div className="pt-3 border-t border-gray-100">
                        <div className="text-xs font-semibold text-gray-700 mb-1">Notes:</div>
                        <p className="text-xs text-gray-600 italic">{stakeholder.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team" className="space-y-6">
          {/* Team Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-orange-500" />
                Team Composition
              </CardTitle>
              <CardDescription>
                {teamMembers.length > 0 ? `${teamMembers.length} team members` : `Team size: ${project.teamSize} members`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {teamMembers.length === 0 ? (
                <div className="text-center py-8 text-gray-600">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p>Team roster not yet available</p>
                  <p className="text-sm text-gray-500 mt-2">Team Size: {project.teamSize} members</p>
                  <Button className="mt-4" variant="outline">
                    Add Team Members
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      {/* Header Row */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{member.name}</h4>
                            <p className="text-sm font-medium text-orange-600">{member.projectRole}</p>
                            <p className="text-xs text-gray-500">{member.generalRole}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <Badge variant="outline" className={getSeniorityColor(member.seniorityLevel)}>
                            {member.seniorityLevel}
                          </Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {member.availabilityStatus.replace('_', ' ')}
                          </Badge>
                        </div>
                      </div>

                      {/* Tenure & Performance Row */}
                      <div className="grid grid-cols-4 gap-3 mb-3 pb-3 border-b border-gray-100">
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1">In Company</div>
                          <div className="font-semibold text-sm">{member.yearsInCompany}y</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1">In Project</div>
                          <div className="font-semibold text-sm">{formatTenure(member.monthsInProject)}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1">Utilization</div>
                          <div className="font-semibold text-sm">{member.utilizationPercentage}%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1">Performance</div>
                          <div className="text-sm" title={`${member.performanceRating}/5`}>
                            {getPerformanceStars(member.performanceRating)}
                          </div>
                        </div>
                      </div>

                      {/* Contact & Location Row */}
                      <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="h-3 w-3 flex-shrink-0" />
                          <span className="truncate">{member.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="h-3 w-3 flex-shrink-0" />
                          <span>{member.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Globe className="h-3 w-3 flex-shrink-0" />
                          <span>{member.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-3 w-3 flex-shrink-0" />
                          <span>{member.timezone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Gauge className="h-3 w-3 flex-shrink-0" />
                          <span>{member.hoursPerWeek}h/week</span>
                        </div>
                        {member.languages.length > 0 && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <Languages className="h-3 w-3 flex-shrink-0" />
                            <span>{member.languages.join(', ')}</span>
                          </div>
                        )}
                      </div>

                      {/* Skills */}
                      <div className="mb-3">
                        <div className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          Primary: {member.primarySkill}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {member.skills.slice(0, 6).map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                              {skill}
                            </Badge>
                          ))}
                          {member.skills.length > 6 && (
                            <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600 border-gray-200">
                              +{member.skills.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Certifications */}
                      {member.certifications.length > 0 && (
                        <div className="mb-3">
                          <div className="text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                            <Award className="h-3 w-3 text-orange-500" />
                            Certifications:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {member.certifications.map((cert, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Notes */}
                      <div className="pt-3 border-t border-gray-100">
                        <div className="text-xs font-semibold text-gray-700 mb-1">Notes:</div>
                        <p className="text-xs text-gray-600 italic">{member.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
