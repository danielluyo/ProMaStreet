'use client'

import Link from 'next/link'
import { Building2, TrendingUp, TrendingDown, AlertCircle, CheckCircle2, DollarSign, Briefcase } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { mockClients } from '@/data/mock-clients'
import { mockProjects } from '@/data/mock-projects'

export default function ClientsPage() {
  // Calculate portfolio metrics
  const totalARR = mockClients.reduce((sum, client) => sum + client.annualValue, 0)
  const averageSentiment = mockClients.reduce((sum, client) => sum + client.sentimentScore, 0) / mockClients.length
  const atRiskClients = mockClients.filter(c => c.relationshipStatus === 'AT_RISK').length

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
    if (score >= 8) return { color: 'text-green-600', icon: TrendingUp, label: 'Excellent' }
    if (score >= 6) return { color: 'text-blue-600', icon: CheckCircle2, label: 'Good' }
    if (score >= 4) return { color: 'text-yellow-600', icon: AlertCircle, label: 'Fair' }
    return { color: 'text-red-600', icon: TrendingDown, label: 'At Risk' }
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Client Portfolio</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Manage relationships, track satisfaction, and identify growth opportunities
        </p>
      </div>

      {/* Portfolio Overview */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{mockClients.length}</div>
            <p className="text-xs text-gray-600 mt-1">Active relationships</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total ARR</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${(totalARR / 1000000).toFixed(2)}M</div>
            <p className="text-xs text-gray-600 mt-1">Annual recurring revenue</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Sentiment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{averageSentiment.toFixed(1)}<span className="text-xl text-gray-500">/10</span></div>
            <p className="text-xs text-gray-600 mt-1">Client satisfaction</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">At Risk</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">{atRiskClients}</div>
            <p className="text-xs text-gray-600 mt-1">Require attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Client Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {mockClients.map((client) => {
          const sentiment = getSentimentIndicator(client.sentimentScore)
          const SentimentIcon = sentiment.icon
          const clientProjects = mockProjects.filter(p => p.clientId === client.id)
          
          return (
            <Card key={client.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      {client.company.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{client.company}</CardTitle>
                      <CardDescription>{client.industry}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className={getStatusStyle(client.relationshipStatus)}>
                    {client.relationshipStatus.replace('_', ' ')}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 py-3 border-y border-gray-100">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">ARR</div>
                    <div className="font-semibold text-green-700">
                      ${(client.annualValue / 1000).toFixed(0)}K
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Projects</div>
                    <div className="font-semibold">
                      {client.projects.length}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Sentiment</div>
                    <div className={`font-semibold flex items-center gap-1 ${sentiment.color}`}>
                      <SentimentIcon className="h-4 w-4" />
                      {client.sentimentScore}/10
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <div className="text-xs text-gray-600 mb-2">Primary Contact</div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-semibold">
                      {client.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="font-medium">{client.name}</span>
                  </div>
                </div>

                {/* Opportunities */}
                {client.opportunities && client.opportunities.length > 0 && (
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-900">
                        {client.opportunities.length} Active {client.opportunities.length === 1 ? 'Opportunity' : 'Opportunities'}
                      </span>
                    </div>
                    <div className="text-xs text-blue-700">
                      Total Value: ${(client.opportunities.reduce((sum, opp) => sum + opp.value, 0) / 1000000).toFixed(2)}M
                    </div>
                  </div>
                )}

                {/* Recent Decision */}
                {client.decisionLogs && client.decisionLogs.length > 0 && (
                  <div className="text-xs text-gray-600">
                    <span className="font-medium">Latest Decision:</span>{' '}
                    {client.decisionLogs[0].decision.substring(0, 80)}
                    {client.decisionLogs[0].decision.length > 80 ? '...' : ''}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Link href={`/clients/${client.id}`} className="flex-1">
                    <Button className="w-full" variant="default" size="sm">
                      View Details
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    <Briefcase className="h-4 w-4 mr-1" />
                    Projects ({clientProjects.length})
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Client Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700">
                {mockClients.filter(c => c.relationshipStatus === 'ACTIVE' || c.relationshipStatus === 'GROWTH').length}
              </div>
              <div className="text-sm text-green-600 mt-1">Healthy Relationships</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-700">
                {mockClients.filter(c => c.opportunities && c.opportunities.length > 0).length}
              </div>
              <div className="text-sm text-blue-600 mt-1">With Opportunities</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-700">
                {mockClients.filter(c => c.relationshipStatus === 'RENEWAL').length}
              </div>
              <div className="text-sm text-orange-600 mt-1">In Renewal</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-700">{atRiskClients}</div>
              <div className="text-sm text-red-600 mt-1">Need Attention</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

