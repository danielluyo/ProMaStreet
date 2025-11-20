export interface CalendarEvent {
  id: string
  title: string
  type: 'MILESTONE' | 'CLIENT_MEETING' | 'DEMO' | 'STEERING' | 'INTERNAL' | 'DEADLINE' | 'REVIEW'
  startDate: Date
  endDate: Date
  projectId: string
  projectName: string
  clientName: string
  description: string
  attendees: string[]
  location: string
  status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED' | 'RESCHEDULED'
  isConflict?: boolean
  conflictsWith?: string[]
}

// Helper to create dates relative to today
const today = new Date()
const getDate = (daysFromToday: number, hour: number, minute: number = 0) => {
  const date = new Date(today)
  date.setDate(date.getDate() + daysFromToday)
  date.setHours(hour, minute, 0, 0)
  return date
}

export const mockEvents: CalendarEvent[] = [
  // This week - Monday
  {
    id: 'evt-1',
    title: 'Customer 360 Sprint Planning',
    type: 'INTERNAL',
    startDate: getDate(-3, 9, 0),
    endDate: getDate(-3, 10, 30),
    projectId: 'proj-1',
    projectName: 'Customer 360 Platform',
    clientName: 'TechCorp Enterprise',
    description: 'Sprint planning for Phase 2 implementation',
    attendees: ['Alex Morgan', 'Tech Lead', 'Dev Team'],
    location: 'Conference Room A',
    status: 'COMPLETED',
  },
  {
    id: 'evt-2',
    title: 'FinServ Steering Committee',
    type: 'STEERING',
    startDate: getDate(-3, 14, 0),
    endDate: getDate(-3, 15, 30),
    projectId: 'proj-4',
    projectName: 'Legacy System Migration',
    clientName: 'FinServ Global',
    description: 'Quarterly steering committee - address scope concerns',
    attendees: ['Alex Morgan', 'Jennifer Park', 'CFO', 'CTO'],
    location: 'FinServ HQ',
    status: 'COMPLETED',
  },

  // Tuesday
  {
    id: 'evt-3',
    title: 'RetailMax PoC Demo',
    type: 'DEMO',
    startDate: getDate(-2, 10, 0),
    endDate: getDate(-2, 11, 30),
    projectId: 'proj-6',
    projectName: 'AI Recommendation Engine',
    clientName: 'RetailMax Corp',
    description: 'Final PoC demonstration to executive team',
    attendees: ['Lisa Anderson', 'Alex Morgan', 'CMO', 'VP Engineering'],
    location: 'RetailMax Boardroom',
    status: 'COMPLETED',
  },
  {
    id: 'evt-4',
    title: 'Mobile Banking UAT Review',
    type: 'REVIEW',
    startDate: getDate(-2, 13, 0),
    endDate: getDate(-2, 14, 30),
    projectId: 'proj-5',
    projectName: 'Mobile Banking MVP',
    clientName: 'FinServ Global',
    description: 'Review UAT results and plan fixes',
    attendees: ['David Kim', 'QA Team', 'Business Analyst'],
    location: 'Virtual - Zoom',
    status: 'COMPLETED',
  },

  // Wednesday (CONFLICTS!)
  {
    id: 'evt-5',
    title: 'EnergyTech Emergency Meeting',
    type: 'CLIENT_MEETING',
    startDate: getDate(-1, 9, 0),
    endDate: getDate(-1, 10, 30),
    projectId: 'proj-15',
    projectName: '24/7 Operations',
    clientName: 'EnergyTech Systems',
    description: 'URGENT: Address staffing shortage and SLA concerns',
    attendees: ['Alex Morgan', 'Michelle Tran', 'VP Operations', 'HR Partner'],
    location: 'Virtual - Teams',
    status: 'COMPLETED',
    isConflict: true,
    conflictsWith: ['evt-6'],
  },
  {
    id: 'evt-6',
    title: 'HealthTech Sprint Review',
    type: 'REVIEW',
    startDate: getDate(-1, 9, 30),
    endDate: getDate(-1, 11, 0),
    projectId: 'proj-7',
    projectName: 'Patient Portal',
    clientName: 'HealthTech Solutions',
    description: 'Sprint 3 review and demo',
    attendees: ['Robert Jackson', 'Dev Team', 'Product Owner'],
    location: 'Conference Room B',
    status: 'RESCHEDULED',
    isConflict: true,
    conflictsWith: ['evt-5'],
  },

  // Thursday
  {
    id: 'evt-7',
    title: 'Q4 Portfolio Review',
    type: 'INTERNAL',
    startDate: getDate(0, 10, 0),
    endDate: getDate(0, 12, 0),
    projectId: 'proj-1',
    projectName: 'Executive Review',
    clientName: 'Internal',
    description: 'Quarterly portfolio health review with leadership',
    attendees: ['Alex Morgan', 'All PMs', 'Executive Team'],
    location: 'Main Conference Room',
    status: 'SCHEDULED',
  },
  {
    id: 'evt-8',
    title: 'Phase 2 Milestone Delivery',
    type: 'MILESTONE',
    startDate: getDate(0, 17, 0),
    endDate: getDate(0, 17, 0),
    projectId: 'proj-1',
    projectName: 'Customer 360 Platform',
    clientName: 'TechCorp Enterprise',
    description: 'Deliver Phase 2 functionality',
    attendees: ['Tech Lead'],
    location: 'N/A',
    status: 'SCHEDULED',
  },

  // Friday
  {
    id: 'evt-9',
    title: 'Smart Grid Weekly Sync',
    type: 'CLIENT_MEETING',
    startDate: getDate(1, 11, 0),
    endDate: getDate(1, 12, 0),
    projectId: 'proj-13',
    projectName: 'Smart Grid Analytics',
    clientName: 'EnergyTech Systems',
    description: 'Weekly status update and blockers',
    attendees: ['Rachel Kim', 'Tech Lead', 'Product Manager'],
    location: 'Virtual - Zoom',
    status: 'SCHEDULED',
  },
  {
    id: 'evt-10',
    title: 'Team Retrospective',
    type: 'INTERNAL',
    startDate: getDate(1, 15, 0),
    endDate: getDate(1, 16, 30),
    projectId: 'proj-1',
    projectName: 'Team Building',
    clientName: 'Internal',
    description: 'Sprint retrospective and team feedback',
    attendees: ['All Team Members'],
    location: 'Offsite',
    status: 'SCHEDULED',
  },

  // Next week - Monday (MORE CONFLICTS!)
  {
    id: 'evt-11',
    title: 'FinServ Escalation Meeting',
    type: 'CLIENT_MEETING',
    startDate: getDate(4, 9, 0),
    endDate: getDate(4, 10, 30),
    projectId: 'proj-4',
    projectName: 'Legacy System Migration',
    clientName: 'FinServ Global',
    description: 'Address timeline concerns and scope changes',
    attendees: ['Alex Morgan', 'Jennifer Park', 'CTO', 'Project Sponsor'],
    location: 'FinServ HQ',
    status: 'SCHEDULED',
    isConflict: true,
    conflictsWith: ['evt-12'],
  },
  {
    id: 'evt-12',
    title: 'RetailMax Implementation Kickoff',
    type: 'CLIENT_MEETING',
    startDate: getDate(4, 9, 0),
    endDate: getDate(4, 11, 0),
    projectId: 'proj-6',
    projectName: 'Full E-Commerce Platform',
    clientName: 'RetailMax Corp',
    description: 'Kickoff meeting for $1.5M implementation',
    attendees: ['Lisa Anderson', 'Alex Morgan', 'Client Team'],
    location: 'RetailMax Office',
    status: 'SCHEDULED',
    isConflict: true,
    conflictsWith: ['evt-11'],
  },

  // Tuesday
  {
    id: 'evt-13',
    title: 'Security Audit Review',
    type: 'REVIEW',
    startDate: getDate(5, 14, 0),
    endDate: getDate(5, 16, 0),
    projectId: 'proj-7',
    projectName: 'Patient Portal',
    clientName: 'HealthTech Solutions',
    description: 'HIPAA compliance and security review',
    attendees: ['Robert Jackson', 'Security Team', 'Compliance Officer'],
    location: 'Conference Room A',
    status: 'SCHEDULED',
  },

  // Wednesday
  {
    id: 'evt-14',
    title: 'Innovation Lab Demo Day',
    type: 'DEMO',
    startDate: getDate(6, 10, 0),
    endDate: getDate(6, 12, 0),
    projectId: 'proj-9',
    projectName: 'AI Learning Platform',
    clientName: 'EduTech Solutions',
    description: 'Showcase AI-driven learning prototypes',
    attendees: ['Thomas Lee', 'Research Team', 'Client Stakeholders'],
    location: 'Innovation Lab',
    status: 'SCHEDULED',
  },
  {
    id: 'evt-15',
    title: 'Supply Chain Go-Live',
    type: 'MILESTONE',
    startDate: getDate(6, 8, 0),
    endDate: getDate(6, 8, 0),
    projectId: 'proj-10',
    projectName: 'Supply Chain Optimization',
    clientName: 'Manufacturing Pro',
    description: 'Production deployment',
    attendees: ['Amanda White', 'DevOps Team'],
    location: 'N/A',
    status: 'SCHEDULED',
  },

  // Thursday
  {
    id: 'evt-16',
    title: 'Board Presentation Prep',
    type: 'INTERNAL',
    startDate: getDate(7, 13, 0),
    endDate: getDate(7, 15, 0),
    projectId: 'proj-1',
    projectName: 'Executive Presentation',
    clientName: 'Internal',
    description: 'Final preparation for Board demo',
    attendees: ['Alex Morgan', 'Leadership Team'],
    location: 'Executive Boardroom',
    status: 'SCHEDULED',
  },

  // Friday - Sprint Deadline (TRIPLE CONFLICT!)
  {
    id: 'evt-17',
    title: 'Sprint 4 Deadline - Mobile Banking',
    type: 'DEADLINE',
    startDate: getDate(8, 17, 0),
    endDate: getDate(8, 17, 0),
    projectId: 'proj-5',
    projectName: 'Mobile Banking MVP',
    clientName: 'FinServ Global',
    description: 'Sprint 4 code freeze',
    attendees: ['David Kim', 'Dev Team'],
    location: 'N/A',
    status: 'SCHEDULED',
    isConflict: true,
    conflictsWith: ['evt-18', 'evt-19'],
  },
  {
    id: 'evt-18',
    title: 'Sprint 5 Deadline - Patient Portal',
    type: 'DEADLINE',
    startDate: getDate(8, 17, 0),
    endDate: getDate(8, 17, 0),
    projectId: 'proj-7',
    projectName: 'Patient Portal',
    clientName: 'HealthTech Solutions',
    description: 'Sprint 5 code freeze',
    attendees: ['Robert Jackson', 'Dev Team'],
    location: 'N/A',
    status: 'SCHEDULED',
    isConflict: true,
    conflictsWith: ['evt-17', 'evt-19'],
  },
  {
    id: 'evt-19',
    title: 'Sprint 3 Deadline - Customer 360',
    type: 'DEADLINE',
    startDate: getDate(8, 17, 0),
    endDate: getDate(8, 17, 0),
    projectId: 'proj-1',
    projectName: 'Customer 360 Platform',
    clientName: 'TechCorp Enterprise',
    description: 'Sprint 3 deliverables due',
    attendees: ['Tech Lead'],
    location: 'N/A',
    status: 'SCHEDULED',
    isConflict: true,
    conflictsWith: ['evt-17', 'evt-18'],
  },
]

// Helper function to get events for a date range
export function getEventsForDateRange(startDate: Date, endDate: Date): CalendarEvent[] {
  return mockEvents.filter(event => {
    return event.startDate >= startDate && event.startDate <= endDate
  })
}

// Helper to get events by project
export function getEventsByProject(projectId: string): CalendarEvent[] {
  return mockEvents.filter(event => event.projectId === projectId)
}

// Helper to get conflicting events
export function getConflictingEvents(): CalendarEvent[] {
  return mockEvents.filter(event => event.isConflict)
}

// Get all unique project IDs from events
export function getProjectsWithEvents(): string[] {
  return Array.from(new Set(mockEvents.map(event => event.projectId)))
}

