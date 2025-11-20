import { PortfolioMetrics } from '@/types/demo'

// Portfolio-level KPIs based on Metrics_Indicators_Spec.md
export const portfolioMetrics: PortfolioMetrics = {
  totalProjects: 15,
  activeProjects: 15,
  greenProjects: 12,
  yellowProjects: 2,
  redProjects: 1,
  totalARR: 7250000,
  pipelineValue: 5800000,
  averageSentiment: 7.4,
  teamUtilization: 87,
  onTimeDeliveryRate: 80,
}

// Financial KPIs
export const financialKPIs = {
  // Revenue & Profitability
  revenueToDate: 5800000,
  revenueForecasted: 7250000,
  revenueForecastVariance: -20, // 20% below forecast
  grossMarginActual: 32, // 32%
  grossMarginProjected: 35, // 35% projected
  
  // Cost Control
  budgetBurnRate: 65, // 65% of budget consumed
  budgetVariance: -5, // 5% under budget (good)
  nonBillableHoursPercentage: 12, // 12% non-billable
  
  // Contract Performance
  utilizationTM: 92, // Time & Materials utilization
  utilizationFP: 88, // Fixed Price utilization
  revenueLeakage: 3, // 3% revenue leakage
  changeRequestCaptureRate: 78, // 78% of scope changes converted to revenue
}

// Project KPIs (Aggregated across portfolio)
export const projectKPIs = {
  // Delivery Health
  overallRAGBreakdown: {
    green: 80, // 12 of 15
    yellow: 13, // 2 of 15
    red: 7, // 1 of 15
  },
  averageTimelineAdherence: 89, // 89% average
  scopeChangeFrequency: 2.3, // 2.3 changes per project average
  
  // Execution Predictability
  averageVelocityStability: 85, // 85% stability
  throughputVsPlan: 92, // 92% of planned work completed
  reworkRate: 8, // 8% rework rate
  
  // Risk & Issue Management
  openRisksCritical: 1,
  openRisksHigh: 3,
  openRisksMedium: 4,
  openRisksLow: 2,
  openIssues: 5,
  escalationCount: 2, // 2 active escalations
  
  // Quality Indicators
  defectDensity: 1.2, // 1.2 defects per 100 story points
  uatPassRate: 94, // 94% UAT pass rate
  releaseStability: 96, // 96% stable releases
}

// Team KPIs
export const teamKPIs = {
  // Staffing & Capacity
  teamSize: 35,
  utilizationRate: 87, // 87% productive time
  capacityVsDemand: 95, // 95% of demand covered
  roleCoverage: 92, // 92% of critical roles filled
  
  // Team Health & Stability
  turnoverRate: 8, // 8% annual turnover (good)
  averageBackfillTime: 21, // 21 days to replace team member
  teamMoraleScore: 7.6, // 7.6 out of 10
  
  // Performance & Output
  productivityIndex: 88, // 88% of expected output
  skillMixAlignment: 85, // 85% alignment between skills and needs
  
  // Engagement & Collaboration
  avgClientResponseTime: 4, // 4 hours average response time
  internalSLAAdherence: 91, // 91% adherence to internal SLAs
}

// Client KPIs (Aggregated across all clients)
export const clientKPIs = {
  // Relationship Health
  averageCSAT: 7.4, // 7.4 out of 10
  averageNPS: 45, // 45 (good)
  averageSentiment: 7.4, // 7.4 out of 10
  
  // Engagement Behavior
  clientResponsiveness: 82, // 82% timely responses
  requirementClarityScore: 75, // 75% clear requirements
  
  // Governance & Alignment
  steeringActionClosureRate: 88, // 88% of actions completed
  avgDecisionTurnaroundTime: 5, // 5 days average
  dependencyBlockerCount: 3, // 3 active blockers
  
  // Account Value Indicators
  upsellOpportunities: 6,
  crossSellOpportunities: 4,
  renewalLikelihood: 85, // 85% likely to renew
  relationshipCoverageScore: 78, // 78% coverage across stakeholder levels
}

// Composite KPIs
export const compositeKPIs = {
  // Delivery Predictability Index (0-100)
  deliveryPredictabilityIndex: 86,
  deliveryComponents: {
    timelineAdherence: 89,
    velocityStability: 85,
    defectTrends: 88,
    riskExposure: 82,
  },
  
  // Account Health Score (0-100)
  accountHealthScore: 82,
  accountComponents: {
    financialHealth: 85,
    deliveryPerformance: 89,
    clientSentiment: 74,
    governanceCoverage: 78,
  },
  
  // Team Health 360 (0-100)
  teamHealth360: 83,
  teamComponents: {
    utilization: 87,
    morale: 76,
    attritionRisk: 92, // Low risk = high score
    skillAlignment: 85,
  },
}

// Trending data for charts (last 6 months)
export const trendingMetrics = {
  revenue: [
    { month: 'Jun', value: 950000 },
    { month: 'Jul', value: 980000 },
    { month: 'Aug', value: 1020000 },
    { month: 'Sep', value: 1050000 },
    { month: 'Oct', value: 1080000 },
    { month: 'Nov', value: 1120000 },
  ],
  
  projectHealth: [
    { month: 'Jun', green: 11, yellow: 3, red: 1 },
    { month: 'Jul', green: 11, yellow: 3, red: 1 },
    { month: 'Aug', green: 12, yellow: 2, red: 1 },
    { month: 'Sep', green: 12, yellow: 2, red: 1 },
    { month: 'Oct', green: 12, yellow: 2, red: 1 },
    { month: 'Nov', green: 12, yellow: 2, red: 1 },
  ],
  
  clientSatisfaction: [
    { month: 'Jun', score: 7.2 },
    { month: 'Jul', score: 7.3 },
    { month: 'Aug', score: 7.4 },
    { month: 'Sep', score: 7.5 },
    { month: 'Oct', score: 7.4 },
    { month: 'Nov', score: 7.4 },
  ],
  
  teamUtilization: [
    { month: 'Jun', utilization: 85 },
    { month: 'Jul', utilization: 86 },
    { month: 'Aug', utilization: 87 },
    { month: 'Sep', utilization: 88 },
    { month: 'Oct', utilization: 87 },
    { month: 'Nov', utilization: 87 },
  ],
}

// Critical alerts based on KPI thresholds
export const criticalAlerts = [
  {
    id: 'alert-1',
    severity: 'HIGH',
    category: 'Client Relationship',
    title: 'FinServ Global - Client Satisfaction Below Threshold',
    description: 'CSAT dropped to 5/10, below 6/10 threshold. Recent escalation logged.',
    impact: 'Renewal at risk ($800K ARR)',
    action: 'Schedule executive alignment meeting',
    kpiAffected: 'Client Satisfaction Score',
    currentValue: '5.0',
    thresholdValue: '6.0',
  },
  {
    id: 'alert-2',
    severity: 'CRITICAL',
    category: 'Team Health',
    title: 'EnergyTech 24/7 Ops - Team Burnout Risk',
    description: 'Team morale at 5/10 with 85% critical risk probability on staffing shortage.',
    impact: 'SLA breaches, quality issues, potential attrition',
    action: 'Emergency staffing and workload rebalancing',
    kpiAffected: 'Team Morale Score',
    currentValue: '5.0',
    thresholdValue: '7.0',
  },
  {
    id: 'alert-3',
    severity: 'MEDIUM',
    category: 'Project Delivery',
    title: 'Legacy Migration Discovery - Timeline Slip',
    description: 'Timeline adherence at 75%, below 80% threshold. Scope expansion risk.',
    impact: 'Potential 2-week delay, budget increase needed',
    action: 'Scope freeze and change control process',
    kpiAffected: 'Timeline Adherence',
    currentValue: '75%',
    thresholdValue: '80%',
  },
  {
    id: 'alert-4',
    severity: 'MEDIUM',
    category: 'Financial',
    title: 'Revenue Forecast Gap',
    description: 'Revenue 20% below forecast, need to accelerate opportunity closure.',
    impact: 'Q4 revenue target at risk',
    action: 'Fast-track RetailMax and EnergyTech opportunities',
    kpiAffected: 'Revenue vs Forecast',
    currentValue: '$5.8M',
    thresholdValue: '$7.25M',
  },
  {
    id: 'alert-5',
    severity: 'LOW',
    category: 'Contract',
    title: 'Manufacturing Pro - Renewal Discussion Due',
    description: 'Contract expires in 70 days, renewal discussion not yet scheduled.',
    impact: '$450K ARR at risk',
    action: 'Schedule renewal meeting this week',
    kpiAffected: 'Renewal Likelihood',
    currentValue: 'Not assessed',
    thresholdValue: 'Assessment due',
  },
]

// Top opportunities for growth
export const topOpportunities = [
  {
    id: 'opp-1',
    client: 'RetailMax Corp',
    title: 'Full E-Commerce Platform Implementation',
    value: 1500000,
    probability: 85,
    expectedCloseDate: '2025-01-15',
    stage: 'Negotiation',
    kpiImpact: {
      revenueIncrease: 20,
      marginImprovement: 5,
      utilizationBoost: 8,
    },
  },
  {
    id: 'opp-2',
    client: 'EnergyTech Systems',
    title: 'Smart Grid Analytics Platform',
    value: 1200000,
    probability: 80,
    expectedCloseDate: '2025-02-15',
    stage: 'Negotiation',
    kpiImpact: {
      revenueIncrease: 16,
      marginImprovement: 4,
      utilizationBoost: 6,
    },
  },
  {
    id: 'opp-3',
    client: 'HealthTech Solutions',
    title: 'AI Diagnostics Module',
    value: 950000,
    probability: 70,
    expectedCloseDate: '2025-04-01',
    stage: 'Proposal',
    kpiImpact: {
      revenueIncrease: 13,
      marginImprovement: 6,
      utilizationBoost: 5,
    },
  },
]

