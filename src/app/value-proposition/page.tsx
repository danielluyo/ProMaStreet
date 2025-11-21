import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  Users, 
  Calendar, 
  Target,
  TrendingUp,
  Shield,
  MessageSquare,
  Briefcase
} from 'lucide-react'

export default function ValuePropositionPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-orange-500 hover:bg-orange-600">
                View Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Project & Client Delivery Management Platform
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Empowering delivery managers with centralized client engagement, governance, and team coordination
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Overview</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              A comprehensive platform designed for <strong>Delivery Managers</strong> and <strong>Project Managers</strong> to 
              streamline client management, project governance, team coordination, and communication across diverse consulting 
              engagement types. The software focuses on aligning business objectives, improving stakeholder transparency, and 
              enabling predictable delivery outcomes.
            </p>
          </CardContent>
        </Card>

        {/* Core Value Proposition */}
        <Card className="mb-8 border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="h-6 w-6 text-orange-500" />
              Core Value Proposition
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              The platform empowers consulting and delivery leaders by <strong>centralizing the full lifecycle of client engagements</strong>. 
              It consolidates client relationship oversight, structured project governance, staffing visibility, and communication workflows 
              into one place, enhancing decision-making and client satisfaction.
            </p>
          </CardContent>
        </Card>

        {/* Key Functional Areas */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Functional Areas</h2>

          {/* 1. Client & Account Management */}
          <Card className="mb-6">
            <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                1. Client & Account Management
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Unified client profiles capturing organization details, points of contact, engagement history, and relationship status.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Overview of all active and past projects associated with the client.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Visibility into sentiment indicators, renewal opportunities, and strategic opportunities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Structured logs for decisions, issues, escalations, and client communications.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 2. Project Handling */}
          <Card className="mb-6">
            <CardHeader className="bg-orange-50 dark:bg-orange-900/20">
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-orange-600" />
                2. Project Handling Across Consulting Engagement Types
              </CardTitle>
              <CardDescription className="mt-2">
                Supports multiple categories: discovery projects, PoCs, MVPs, full-scope implementations, 
                staff augmentation, managed services, and innovation labs.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-4 md:grid-cols-2">
                
                {/* SOW */}
                <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-600" />
                    Statement of Work (SOW)
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Clear definition of scope, objectives, timelines</li>
                    <li>• Acceptance criteria</li>
                    <li>• Assumptions, constraints, and boundaries</li>
                  </ul>
                </div>

                {/* Estimates */}
                <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    Estimates
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Story points, T-shirt sizing</li>
                    <li>• High-level estimation models</li>
                    <li>• Original vs. actual comparison</li>
                  </ul>
                </div>

                {/* Pricing Model */}
                <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-purple-600" />
                    Pricing Model
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Time & Materials, Fixed Price, Hybrid</li>
                    <li>• Financial exposure visibility</li>
                    <li>• Margin expectations and contract terms</li>
                  </ul>
                </div>

                {/* Project Charter */}
                <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-orange-600" />
                    Project Charter
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Project purpose and success criteria</li>
                    <li>• Strategic alignment</li>
                    <li>• Roles, responsibilities, stakeholder mapping</li>
                  </ul>
                </div>

                {/* RACI Matrix */}
                <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    RACI Matrix
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Responsible, Accountable, Consulted, Informed</li>
                    <li>• Clear governance for each activity</li>
                    <li>• Reduces ambiguity</li>
                  </ul>
                </div>

                {/* Communication Plan */}
                <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-green-600" />
                    Communication Plan
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Status reports, risk logs, steering updates</li>
                    <li>• Predefined communication cadences</li>
                    <li>• Document templates</li>
                  </ul>
                </div>

                {/* Project Status KPIs */}
                <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-purple-600" />
                    Project Status KPIs
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Health (Red/Yellow/Green)</li>
                    <li>• Timeline adherence, budget utilization</li>
                    <li>• Executive-friendly summaries</li>
                  </ul>
                </div>

                {/* Stakeholder Management */}
                <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-orange-600" />
                    Stakeholder Management
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Operational, tactical, executive levels</li>
                    <li>• Engagement frequency and influence</li>
                    <li>• Communication expectations</li>
                  </ul>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* 3. Sourcing & Team Management */}
          <Card className="mb-6">
            <CardHeader className="bg-green-50 dark:bg-green-900/20">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                3. Sourcing & Team Management
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Overview of staffing needs tied to the project lifecycle.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Allocation of team members based on role, availability, and skill match.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Visibility into current and forecasted capacity constraints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Tools for managing onboarding, role adjustments, and team rotations.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 4. Consolidated Calendar */}
          <Card className="mb-6">
            <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                4. Consolidated Calendar
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Unified calendar for milestones, client meetings, demos, and steering committees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Clear visualization of delivery-critical dates across all engagements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Helps Delivery Managers avoid conflicts across multiple parallel initiatives.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

        </div>

        {/* Business-Oriented Positioning */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-900/20 dark:to-orange-900/20 border-2 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="text-2xl">Business-Oriented Positioning</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="mb-4">
              This platform is tailored to the needs of <strong>delivery leaders in consulting environments</strong> who balance 
              multiple clients, diverse project types, and cross-functional teams. It focuses not on low-level task management, 
              but on enabling <strong>predictable delivery</strong>, <strong>strengthening client relationships</strong>, and 
              supporting <strong>strategic decision-making</strong>.
            </p>
            <p>
              By consolidating governance, staffing, communication, and client insights, the software reduces administrative 
              overhead and ensures that delivery leaders operate with clarity, confidence, and executive-level visibility.
            </p>
          </CardContent>
        </Card>

        {/* Intended Outcomes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="h-6 w-6 text-green-600" />
              Intended Outcomes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Stronger client relationships and higher satisfaction</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Improved predictability of delivery outcomes</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Faster project initiation through standardized documentation</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Reduced overhead through centralized tooling</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Better staffing decisions with resource visibility</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Executive-ready insights for steering committees</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Platform?</h2>
          <p className="text-lg mb-6 opacity-90">Explore our interactive demo with real project data</p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3">
              Launch Live Demo
            </Button>
          </Link>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} ProMaStreet. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-orange-400">Home</Link>
            <Link href="/dashboard" className="hover:text-orange-400">Demo</Link>
            <Link href="/value-proposition" className="hover:text-orange-400">Value Proposition</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

