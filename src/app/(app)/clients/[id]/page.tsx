'use client'

import { use } from 'react'
import Link from 'next/link'
import { ArrowLeft, Building2, Mail, Phone, Globe, MapPin, TrendingUp, TrendingDown, AlertCircle, CheckCircle2, DollarSign, Briefcase, Clock, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { mockClients } from '@/data/mock-clients'
import { mockProjects } from '@/data/mock-projects'

export default function ClientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const client = mockClients.find(c => c.id === id)
  
  if (!client) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Client not found</h2>
        <Link href="/clients">
          <Button className="mt-4">Back to Clients</Button>
        </Link>
      </div>
    )
  }

  const clientProjects = mockProjects.filter(p => p.clientId === client.id)
  const activeProjects = clientProjects.filter(p => p.status !== 'RED')
  const totalRevenue = client.annualValue * 2 // Approximate lifetime value
  const opportunityValue = client.opportunities.reduce((sum, opp) => sum + opp.value, 0)

  // Get relationship status styling
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'GROWTH':
        return 'bg-green-100 text-green-800 border-green-300'
      case 'AT_RISK':
        return 'bg-red-100 text-red-800 border-red-300'
      case 'ACTIVE':
      case 'RENEWAL':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'LOST':
        return 'bg-gray-100 text-gray-800 border-gray-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  // Get sentiment indicator
  const getSentimentIndicator = (score: number) => {
    if (score >= 8) return { color: 'text-green-600', icon: TrendingUp, label: 'Excellent', bg: 'bg-green-50' }
    if (score >= 6) return { color: 'text-blue-600', icon: CheckCircle2, label: 'Good', bg: 'bg-blue-50' }
    if (score >= 4) return { color: 'text-yellow-600', icon: AlertCircle, label: 'Fair', bg: 'bg-yellow-50' }
    return { color: 'text-red-600', icon: TrendingDown, label: 'At Risk', bg: 'bg-red-50' }
  }

  const sentiment = getSentimentIndicator(client.sentimentScore)
  const SentimentIcon = sentiment.icon

  // Get opportunity stage styling
  const getOpportunityStageStyle = (stage: string) => {
    switch (stage) {
      case 'WON':
        return 'bg-green-100 text-green-800 border-green-300'
      case 'NEGOTIATION':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'PROPOSAL':
        return 'bg-purple-100 text-purple-800 border-purple-300'
      case 'QUALIFIED':
      case 'IDENTIFIED':
        return 'bg-gray-100 text-gray-800 border-gray-300'
      case 'LOST':
        return 'bg-red-100 text-red-800 border-red-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link href="/clients">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Clients
        </Button>
      </Link>

      {/* Client Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
            {client.company.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{client.company}</h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-gray-600">{client.industry}</span>
              <Badge variant="outline" className={getStatusStyle(client.relationshipStatus)}>
                {client.relationshipStatus.replace('_', ' ')}
              </Badge>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Annual Value</div>
          <div className="text-3xl font-bold text-green-700">
            ${(client.annualValue / 1000).toFixed(0)}K
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Sentiment Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`flex items-center gap-2 ${sentiment.color}`}>
              <SentimentIcon className="h-6 w-6" />
              <span className="text-3xl font-bold">{client.sentimentScore}</span>
              <span className="text-xl text-gray-500">/10</span>
            </div>
            <p className={`text-xs mt-1 ${sentiment.color}`}>{sentiment.label}</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${(totalRevenue / 1000000).toFixed(2)}M</div>
            <p className="text-xs text-gray-600 mt-1">Lifetime value</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{activeProjects.length}</div>
            <p className="text-xs text-gray-600 mt-1">of {clientProjects.length} total</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pipeline Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${(opportunityValue / 1000000).toFixed(2)}M</div>
            <p className="text-xs text-gray-600 mt-1">{client.opportunities.length} opportunities</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects ({clientProjects.length})</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities ({client.opportunities.length})</TabsTrigger>
          <TabsTrigger value="decisions">Decision Logs ({client.decisionLogs.length})</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-orange-500" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Primary Contact</div>
                  <div className="font-semibold">{client.name}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <a href={`mailto:${client.contactInfo.email}`} className="text-blue-600 hover:underline">
                    {client.contactInfo.email}
                  </a>
                </div>
                {client.contactInfo.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <a href={`tel:${client.contactInfo.phone}`} className="text-blue-600 hover:underline">
                      {client.contactInfo.phone}
                    </a>
                  </div>
                )}
                {client.contactInfo.address && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{client.contactInfo.address}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Relationship Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Relationship Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Sentiment Score</span>
                    <span className="font-semibold">{client.sentimentScore}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${client.sentimentScore >= 7 ? 'bg-green-600' : client.sentimentScore >= 5 ? 'bg-yellow-600' : 'bg-red-600'}`}
                      style={{ width: `${client.sentimentScore * 10}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Renewal Date</div>
                  <div className="font-semibold">
                    {new Date(client.renewalDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Account Executive</div>
                  <div className="font-semibold">{client.accountExecutive}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-4">
          {clientProjects.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No projects found for this client</p>
              </CardContent>
            </Card>
          ) : (
            clientProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <CardDescription className="mt-1">{project.description}</CardDescription>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={
                        project.status === 'GREEN' 
                          ? 'bg-green-100 text-green-800 border-green-300' 
                          : project.status === 'YELLOW'
                          ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
                          : 'bg-red-100 text-red-800 border-red-300'
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Budget</div>
                      <div className="font-semibold">${(project.budget / 1000).toFixed(0)}K</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Spent</div>
                      <div className="font-semibold text-blue-600">${(project.spent / 1000).toFixed(0)}K</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Team Size</div>
                      <div className="font-semibold">{project.teamSize}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">PM</div>
                      <div className="font-semibold text-sm">{project.projectManager}</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href={`/projects/${project.id}`}>
                      <Button size="sm" variant="outline" className="w-full">
                        View Project Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        {/* Opportunities Tab */}
        <TabsContent value="opportunities" className="space-y-4">
          {client.opportunities.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No opportunities found for this client</p>
              </CardContent>
            </Card>
          ) : (
            client.opportunities.map((opp) => (
              <Card key={opp.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{opp.title}</CardTitle>
                      <CardDescription className="mt-1">
                        Expected Close: {new Date(opp.expectedDate).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className={getOpportunityStageStyle(opp.status)}>
                      {opp.status.replace('_', ' ')}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Opportunity Value</div>
                      <div className="text-2xl font-bold text-green-700">
                        ${(opp.value / 1000000).toFixed(2)}M
                      </div>
                      <div className="text-sm text-gray-600 mt-2">
                        Probability: <span className="font-semibold">{opp.probability}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        {/* Decision Logs Tab */}
        <TabsContent value="decisions" className="space-y-4">
          {client.decisionLogs.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No decision logs found for this client</p>
              </CardContent>
            </Card>
          ) : (
            client.decisionLogs.map((log) => (
              <Card key={log.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base font-semibold">{log.decision}</CardTitle>
                      <CardDescription className="mt-1">
                        {new Date(log.date).toLocaleDateString()} • {log.participants.join(', ')}
                      </CardDescription>
                    </div>
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm font-medium text-gray-700">Context:</div>
                      <p className="text-sm text-gray-600">{log.context}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700">Impact:</div>
                      <p className="text-sm text-gray-600">{log.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

