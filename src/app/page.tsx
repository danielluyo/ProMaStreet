import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ArrowRight, 
  BarChart3, 
  Users, 
  Briefcase, 
  TrendingUp,
  Shield,
  Zap,
  Target
} from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Demo Mode Indicator */}
      <div className="fixed top-0 right-0 z-50 m-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
        DEMO MODE
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">
              ProMaStreet
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              Next-Generation Delivery Management Platform
            </p>
          </div>

          {/* Tagline */}
          <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
            Strategic visibility and proactive management for software consulting firms.
            <br />
            <span className="text-gray-500">Beyond project management. Beyond task tracking.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all">
                View Executive Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/value-proposition">
              <Button variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                Value Proposition
                <Target className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Fully functional demo with realistic data
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-6xl mx-auto">
          <Card className="border-t-4 border-t-blue-500 hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">46 Strategic KPIs</h3>
              <p className="text-gray-600">
                Track Financial, Project, Team, and Client metrics. Composite indices provide holistic health scores.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-orange-500 hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proactive Risk Management</h3>
              <p className="text-gray-600">
                Catch issues before they escalate. Probability-based alerts with mitigation tracking.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-purple-500 hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Client-Centric View</h3>
              <p className="text-gray-600">
                Connect projects, opportunities, decisions, and sentiment. Full relationship visibility.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-green-500 hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Governance Framework</h3>
              <p className="text-gray-600">
                SOWs, Charters, RACI matrices, and communication plans. Professional project governance built in.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-indigo-500 hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data Visualization</h3>
              <p className="text-gray-600">
                Interactive charts and trends. See patterns, not just numbers. Executive-ready analytics.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-pink-500 hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Insights</h3>
              <p className="text-gray-600">
                Instant portfolio health. Filter projects by status or type. Drill down from executive to tactical view.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-t-orange-500">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Demo Portfolio Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">15</div>
                <div className="text-sm text-gray-600 mt-1">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">$7.25M</div>
                <div className="text-sm text-gray-600 mt-1">Total ARR</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">$5.8M</div>
                <div className="text-sm text-gray-600 mt-1">Pipeline Value</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">86</div>
                <div className="text-sm text-gray-600 mt-1">Delivery Index</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
            Explore the Demo
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/clients">
              <Button variant="outline" className="w-full py-6 text-lg hover:bg-blue-50 hover:border-blue-300">
                <Users className="mr-2 h-5 w-5" />
                Client Portfolio
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="w-full py-6 text-lg hover:bg-orange-50 hover:border-orange-300">
                <Briefcase className="mr-2 h-5 w-5" />
                Projects
              </Button>
            </Link>
            <Link href="/reports">
              <Button variant="outline" className="w-full py-6 text-lg hover:bg-green-50 hover:border-green-300">
                <BarChart3 className="mr-2 h-5 w-5" />
                Executive Reports
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="w-full py-6 text-lg hover:bg-purple-50 hover:border-purple-300">
                <Target className="mr-2 h-5 w-5" />
                Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center text-gray-500 text-sm max-w-2xl mx-auto">
          <p className="mb-2">
            <strong>Note:</strong> This is a fully functional frontend demo with realistic, hardcoded data.
          </p>
          <p>
            Built to demonstrate capabilities for Board approval and budgeting.
            Ready for full-stack development upon approval.
          </p>
        </div>
      </div>
    </div>
  )
}
