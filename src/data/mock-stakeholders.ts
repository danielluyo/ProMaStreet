export type StakeholderLevel = 'EXECUTIVE' | 'TACTICAL' | 'OPERATIONAL'
export type EngagementFrequency = 'DAILY' | 'WEEKLY' | 'BI_WEEKLY' | 'MONTHLY' | 'QUARTERLY'
export type CommunicationPreference = 'EMAIL' | 'PHONE' | 'VIDEO' | 'IN_PERSON' | 'SLACK'

export interface ProjectStakeholder {
  id: string
  name: string
  title: string
  company: string
  level: StakeholderLevel
  influence: number // 1-5 scale (5 = highest influence)
  interest: number // 1-5 scale (5 = highest interest)
  sentiment: number // 1-10 scale (10 = most positive)
  engagementFrequency: EngagementFrequency
  communicationPreference: CommunicationPreference
  lastContact: string
  email: string
  phone: string
  role: string // Their role in the project
  concerns: string[]
  notes: string
}

// Stakeholders for Customer 360 Platform (TechCorp Enterprise)
export const customer360Stakeholders: ProjectStakeholder[] = [
  {
    id: 'sh-1',
    name: 'Sarah Johnson',
    title: 'VP of Product',
    company: 'TechCorp Enterprise',
    level: 'EXECUTIVE',
    influence: 5,
    interest: 5,
    sentiment: 9,
    engagementFrequency: 'BI_WEEKLY',
    communicationPreference: 'VIDEO',
    lastContact: '2024-11-18',
    email: 'sarah.johnson@techcorp.com',
    phone: '+1 (555) 123-4567',
    role: 'Executive Sponsor & Final Decision Maker',
    concerns: ['Budget alignment', 'Q1 launch date', 'Integration with legacy systems'],
    notes: 'Very engaged and supportive. Wants weekly status emails. Prefers data-driven presentations.',
  },
  {
    id: 'sh-2',
    name: 'Michael Rodriguez',
    title: 'CTO',
    company: 'TechCorp Enterprise',
    level: 'EXECUTIVE',
    influence: 5,
    interest: 4,
    sentiment: 8,
    engagementFrequency: 'MONTHLY',
    communicationPreference: 'VIDEO',
    lastContact: '2024-10-30',
    email: 'michael.r@techcorp.com',
    phone: '+1 (555) 123-4570',
    role: 'Technical Authority & Architecture Review',
    concerns: ['Security compliance', 'Scalability', 'Technical debt'],
    notes: 'Hands-off but expects high technical standards. Focus on architecture and security in communications.',
  },
  {
    id: 'sh-3',
    name: 'Emily Chen',
    title: 'Director of Customer Success',
    company: 'TechCorp Enterprise',
    level: 'TACTICAL',
    influence: 4,
    interest: 5,
    sentiment: 9,
    engagementFrequency: 'WEEKLY',
    communicationPreference: 'SLACK',
    lastContact: '2024-11-19',
    email: 'emily.chen@techcorp.com',
    phone: '+1 (555) 123-4580',
    role: 'Primary Business Owner & Requirements Lead',
    concerns: ['User adoption', 'Training materials', 'Feature completeness'],
    notes: 'Daily Slack contact. Very detail-oriented. Champion for the project internally.',
  },
  {
    id: 'sh-4',
    name: 'David Patel',
    title: 'Lead Software Engineer',
    company: 'TechCorp Enterprise',
    level: 'OPERATIONAL',
    influence: 3,
    interest: 4,
    sentiment: 7,
    engagementFrequency: 'WEEKLY',
    communicationPreference: 'SLACK',
    lastContact: '2024-11-20',
    email: 'david.patel@techcorp.com',
    phone: '+1 (555) 123-4590',
    role: 'Technical Integration Lead',
    concerns: ['API documentation', 'Integration timelines', 'Testing environments'],
    notes: 'Pragmatic and helpful. Concerned about integration complexity. Key ally for technical issues.',
  },
  {
    id: 'sh-5',
    name: 'Jennifer Martinez',
    title: 'Product Manager',
    company: 'TechCorp Enterprise',
    level: 'TACTICAL',
    influence: 4,
    interest: 5,
    sentiment: 8,
    engagementFrequency: 'BI_WEEKLY',
    communicationPreference: 'VIDEO',
    lastContact: '2024-11-15',
    email: 'jennifer.m@techcorp.com',
    phone: '+1 (555) 123-4595',
    role: 'Product Requirements & UAT Coordinator',
    concerns: ['Feature prioritization', 'User stories clarity', 'Sprint velocity'],
    notes: 'Organized and responsive. Appreciates early visibility into potential delays.',
  },
]

// Stakeholders for Legacy System Migration (FinServ Global)
export const legacyMigrationStakeholders: ProjectStakeholder[] = [
  {
    id: 'sh-6',
    name: 'David Lee',
    title: 'CFO',
    company: 'FinServ Global',
    level: 'EXECUTIVE',
    influence: 5,
    interest: 5,
    sentiment: 5,
    engagementFrequency: 'QUARTERLY',
    communicationPreference: 'IN_PERSON',
    lastContact: '2024-10-20',
    email: 'david.lee@finserv.com',
    phone: '+1 (555) 987-6543',
    role: 'Executive Sponsor (Concerned)',
    concerns: ['Budget overruns', 'Timeline delays', 'Business continuity risk'],
    notes: 'Currently skeptical due to recent setbacks. Needs frequent reassurance and mitigation plans.',
  },
  {
    id: 'sh-7',
    name: 'Patricia Wong',
    title: 'VP of Operations',
    company: 'FinServ Global',
    level: 'EXECUTIVE',
    influence: 4,
    interest: 5,
    sentiment: 6,
    engagementFrequency: 'MONTHLY',
    communicationPreference: 'EMAIL',
    lastContact: '2024-11-10',
    email: 'patricia.wong@finserv.com',
    phone: '+1 (555) 987-6550',
    role: 'Business Continuity Owner',
    concerns: ['Operational disruption', 'Data integrity', 'Rollback plans'],
    notes: 'Risk-averse. Requires detailed documentation and contingency plans.',
  },
  {
    id: 'sh-8',
    name: 'James Thompson',
    title: 'Head of IT Infrastructure',
    company: 'FinServ Global',
    level: 'TACTICAL',
    influence: 4,
    interest: 4,
    sentiment: 7,
    engagementFrequency: 'WEEKLY',
    communicationPreference: 'EMAIL',
    lastContact: '2024-11-18',
    email: 'james.t@finserv.com',
    phone: '+1 (555) 987-6560',
    role: 'Infrastructure & Deployment Lead',
    concerns: ['Server capacity', 'Network latency', 'Backup procedures'],
    notes: 'Cooperative but resource-constrained. Needs 2-week advance notice for infrastructure changes.',
  },
]

// Stakeholders for AI Recommendation Engine (RetailMax Corp)
export const aiRecommendationStakeholders: ProjectStakeholder[] = [
  {
    id: 'sh-9',
    name: 'Maria Garcia',
    title: 'CMO',
    company: 'RetailMax Corp',
    level: 'EXECUTIVE',
    influence: 5,
    interest: 5,
    sentiment: 9,
    engagementFrequency: 'WEEKLY',
    communicationPreference: 'PHONE',
    lastContact: '2024-11-19',
    email: 'maria.garcia@retailmax.com',
    phone: '+1 (555) 234-5678',
    role: 'Executive Champion & Vision Setter',
    concerns: ['Customer experience impact', 'Conversion rates', 'Personalization accuracy'],
    notes: 'Visionary and enthusiastic. Prefers quick phone updates. Key advocate for budget increases.',
  },
  {
    id: 'sh-10',
    name: 'Robert Kim',
    title: 'VP of E-Commerce',
    company: 'RetailMax Corp',
    level: 'TACTICAL',
    influence: 4,
    interest: 5,
    sentiment: 9,
    engagementFrequency: 'BI_WEEKLY',
    communicationPreference: 'VIDEO',
    lastContact: '2024-11-12',
    email: 'robert.kim@retailmax.com',
    phone: '+1 (555) 234-5680',
    role: 'Business Owner & Success Metrics Owner',
    concerns: ['ROI measurement', 'A/B testing strategy', 'Integration with existing platform'],
    notes: 'Data-driven and results-focused. Expects clear KPIs and measurement plans.',
  },
]

// Stakeholders for Patient Portal (HealthTech Solutions)
export const patientPortalStakeholders: ProjectStakeholder[] = [
  {
    id: 'sh-11',
    name: 'Dr. Alex Kim',
    title: 'Chief Medical Officer',
    company: 'HealthTech Innovations',
    level: 'EXECUTIVE',
    influence: 5,
    interest: 4,
    sentiment: 7,
    engagementFrequency: 'MONTHLY',
    communicationPreference: 'EMAIL',
    lastContact: '2024-10-15',
    email: 'alex.kim@healthtech.com',
    phone: '+1 (555) 345-6789',
    role: 'Clinical Authority & HIPAA Compliance',
    concerns: ['Patient safety', 'Data privacy', 'Clinical workflow impact'],
    notes: 'Medical perspective critical. Requires clinical validation for all patient-facing features.',
  },
  {
    id: 'sh-12',
    name: 'Linda Zhao',
    title: 'VP of Product',
    company: 'HealthTech Innovations',
    level: 'TACTICAL',
    influence: 4,
    interest: 5,
    sentiment: 8,
    engagementFrequency: 'WEEKLY',
    communicationPreference: 'VIDEO',
    lastContact: '2024-11-17',
    email: 'linda.zhao@healthtech.com',
    phone: '+1 (555) 345-6795',
    role: 'Product Vision & User Experience Lead',
    concerns: ['User accessibility', 'Mobile responsiveness', 'Patient satisfaction scores'],
    notes: 'User-centric mindset. Values design reviews and usability testing feedback.',
  },
  {
    id: 'sh-13',
    name: 'Marcus Johnson',
    title: 'CISO',
    company: 'HealthTech Innovations',
    level: 'EXECUTIVE',
    influence: 5,
    interest: 3,
    sentiment: 6,
    engagementFrequency: 'QUARTERLY',
    communicationPreference: 'EMAIL',
    lastContact: '2024-09-30',
    email: 'marcus.j@healthtech.com',
    phone: '+1 (555) 345-6800',
    role: 'Security & Compliance Gatekeeper',
    concerns: ['Security vulnerabilities', 'Penetration testing', 'Audit readiness'],
    notes: 'Strict security standards. All security issues must be escalated immediately.',
  },
]

// Map project IDs to their stakeholders
export const projectStakeholdersMap: Record<string, ProjectStakeholder[]> = {
  'proj-1': customer360Stakeholders,
  'proj-4': legacyMigrationStakeholders,
  'proj-5': legacyMigrationStakeholders, // Mobile Banking MVP also at FinServ
  'proj-6': aiRecommendationStakeholders,
  'proj-7': patientPortalStakeholders,
}

// Helper function to get stakeholders for a project
export function getStakeholdersForProject(projectId: string): ProjectStakeholder[] {
  return projectStakeholdersMap[projectId] || []
}

// Helper function to get stakeholder influence color
export function getInfluenceColor(influence: number): string {
  if (influence >= 5) return 'bg-red-100 text-red-800 border-red-300'
  if (influence >= 4) return 'bg-orange-100 text-orange-800 border-orange-300'
  if (influence >= 3) return 'bg-yellow-100 text-yellow-800 border-yellow-300'
  return 'bg-blue-100 text-blue-800 border-blue-300'
}

// Helper function to get sentiment color
export function getSentimentColor(sentiment: number): string {
  if (sentiment >= 8) return 'text-green-600'
  if (sentiment >= 6) return 'text-blue-600'
  if (sentiment >= 4) return 'text-yellow-600'
  return 'text-red-600'
}

// Helper function to format engagement frequency
export function formatEngagement(frequency: EngagementFrequency): string {
  return frequency.replace('_', ' ')
}

