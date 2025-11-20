// Demo data types for Board presentation

export type ProjectType = 
  | 'DISCOVERY' 
  | 'POC' 
  | 'MVP' 
  | 'IMPLEMENTATION' 
  | 'STAFF_AUGMENTATION' 
  | 'MANAGED_SERVICES' 
  | 'INNOVATION_LAB'

export type HealthStatus = 'GREEN' | 'YELLOW' | 'RED'

export type RelationshipStatus = 'ACTIVE' | 'RENEWAL' | 'AT_RISK' | 'GROWTH' | 'LOST'

export type PricingModel = 'TIME_AND_MATERIALS' | 'FIXED_PRICE' | 'HYBRID'

export type StakeholderLevel = 'OPERATIONAL' | 'TACTICAL' | 'EXECUTIVE'

export interface Client {
  id: string
  name: string
  company: string
  industry: string
  relationshipStatus: RelationshipStatus
  sentimentScore: number // 1-10
  annualValue: number
  renewalDate: string
  accountExecutive: string
  projects: string[] // project IDs
  opportunities: Opportunity[]
  decisionLogs: DecisionLog[]
  contactInfo: {
    email: string
    phone: string
    address: string
  }
}

export interface Opportunity {
  id: string
  title: string
  value: number
  probability: number // 0-100
  expectedDate: string
  status: 'IDENTIFIED' | 'QUALIFIED' | 'PROPOSAL' | 'NEGOTIATION' | 'WON' | 'LOST'
}

export interface DecisionLog {
  id: string
  date: string
  decision: string
  context: string
  impact: string
  participants: string[]
}

export interface Project {
  id: string
  name: string
  clientId: string
  type: ProjectType
  status: HealthStatus
  pricingModel: PricingModel
  budget: number
  spent: number
  startDate: string
  endDate: string | null
  teamSize: number
  projectManager: string
  description: string
  governance: {
    hasSOW: boolean
    hasCharter: boolean
    hasRACI: boolean
    hasCommunicationPlan: boolean
  }
  kpis: {
    timelineAdherence: number // percentage
    budgetUtilization: number // percentage
    clientSatisfaction: number // 1-10
    teamSatisfaction: number // 1-10
  }
  risks: Risk[]
  stakeholders: string[] // stakeholder IDs
}

export interface Risk {
  id: string
  title: string
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  probability: number // 0-100
  impact: string
  mitigation: string
  owner: string
  status: 'OPEN' | 'MITIGATING' | 'CLOSED'
}

export interface Stakeholder {
  id: string
  projectId: string
  name: string
  role: string
  level: StakeholderLevel
  influence: number // 1-5
  engagement: 'WEEKLY' | 'BI_WEEKLY' | 'MONTHLY' | 'QUARTERLY'
  communicationPreference: string
  lastContact: string | null
  sentiment: number // 1-10
}

export interface TeamMember {
  id: string
  name: string
  role: string
  skills: string[]
  utilization: number // percentage
  currentProjects: string[] // project IDs
  availability: number // hours per week
}

export interface Event {
  id: string
  title: string
  type: 'MILESTONE' | 'CLIENT_MEETING' | 'DEMO' | 'STEERING' | 'INTERNAL'
  startDate: string
  endDate: string | null
  projectId: string | null
  clientId: string | null
  attendees: string[]
  location: string
}

export interface PortfolioMetrics {
  totalProjects: number
  activeProjects: number
  greenProjects: number
  yellowProjects: number
  redProjects: number
  totalARR: number
  pipelineValue: number
  averageSentiment: number
  teamUtilization: number
  onTimeDeliveryRate: number
}

// Financial KPIs
export interface FinancialKPIs {
  revenueToDate: number
  revenueForecasted: number
  revenueForecastVariance: number
  grossMarginActual: number
  grossMarginProjected: number
  budgetBurnRate: number
  budgetVariance: number
  nonBillableHoursPercentage: number
  utilizationTM: number
  utilizationFP: number
  revenueLeakage: number
  changeRequestCaptureRate: number
}

// Project KPIs
export interface ProjectKPIs {
  overallRAGBreakdown: {
    green: number
    yellow: number
    red: number
  }
  averageTimelineAdherence: number
  scopeChangeFrequency: number
  averageVelocityStability: number
  throughputVsPlan: number
  reworkRate: number
  openRisksCritical: number
  openRisksHigh: number
  openRisksMedium: number
  openRisksLow: number
  openIssues: number
  escalationCount: number
  defectDensity: number
  uatPassRate: number
  releaseStability: number
}

// Team KPIs
export interface TeamKPIs {
  teamSize: number
  utilizationRate: number
  capacityVsDemand: number
  roleCoverage: number
  turnoverRate: number
  averageBackfillTime: number
  teamMoraleScore: number
  productivityIndex: number
  skillMixAlignment: number
  avgClientResponseTime: number
  internalSLAAdherence: number
}

// Client KPIs
export interface ClientKPIs {
  averageCSAT: number
  averageNPS: number
  averageSentiment: number
  clientResponsiveness: number
  requirementClarityScore: number
  steeringActionClosureRate: number
  avgDecisionTurnaroundTime: number
  dependencyBlockerCount: number
  upsellOpportunities: number
  crossSellOpportunities: number
  renewalLikelihood: number
  relationshipCoverageScore: number
}

// Composite KPIs
export interface CompositeKPIs {
  deliveryPredictabilityIndex: number
  deliveryComponents: {
    timelineAdherence: number
    velocityStability: number
    defectTrends: number
    riskExposure: number
  }
  accountHealthScore: number
  accountComponents: {
    financialHealth: number
    deliveryPerformance: number
    clientSentiment: number
    governanceCoverage: number
  }
  teamHealth360: number
  teamComponents: {
    utilization: number
    morale: number
    attritionRisk: number
    skillAlignment: number
  }
}

// Alert
export interface Alert {
  id: string
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  category: string
  title: string
  description: string
  impact: string
  action: string
  kpiAffected: string
  currentValue: string
  thresholdValue: string
}

// Trending data types
export interface TrendingMetrics {
  revenue: Array<{ month: string; value: number }>
  projectHealth: Array<{ month: string; green: number; yellow: number; red: number }>
  clientSatisfaction: Array<{ month: string; score: number }>
  teamUtilization: Array<{ month: string; utilization: number }>
}

// Growth opportunity with KPI impact
export interface GrowthOpportunity {
  id: string
  client: string
  title: string
  value: number
  probability: number
  expectedCloseDate: string
  stage: string
  kpiImpact: {
    revenueIncrease: number
    marginImprovement: number
    utilizationBoost: number
  }
}

