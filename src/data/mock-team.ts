export type SeniorityLevel = 'JUNIOR' | 'MID' | 'SENIOR' | 'LEAD' | 'PRINCIPAL' | 'ARCHITECT'
export type AvailabilityStatus = 'FULL_TIME' | 'PART_TIME' | 'CONSULTANT' | 'ROTATING'

export interface TeamMember {
  id: string
  name: string
  projectRole: string
  generalRole: string
  seniorityLevel: SeniorityLevel
  skills: string[]
  primarySkill: string
  yearsInCompany: number
  monthsInProject: number
  timezone: string
  location: string
  email: string
  phone: string
  availabilityStatus: AvailabilityStatus
  utilizationPercentage: number // % of time on this project
  hoursPerWeek: number
  performanceRating: number // 1-5
  certifications: string[]
  languages: string[]
  notes: string
}

// Team for Customer 360 Platform (TechCorp Enterprise)
export const customer360Team: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Alex Morgan',
    projectRole: 'Project Manager',
    generalRole: 'Senior Project Manager',
    seniorityLevel: 'SENIOR',
    skills: ['Project Management', 'Agile/Scrum', 'Stakeholder Management', 'Risk Management', 'Budget Planning'],
    primarySkill: 'Project Management',
    yearsInCompany: 8,
    monthsInProject: 14,
    timezone: 'EST (UTC-5)',
    location: 'New York, NY',
    email: 'alex.morgan@promastreet.com',
    phone: '+1 (555) 100-0001',
    availabilityStatus: 'FULL_TIME',
    utilizationPercentage: 100,
    hoursPerWeek: 40,
    performanceRating: 5,
    certifications: ['PMP', 'Certified ScrumMaster', 'SAFe Agilist'],
    languages: ['English', 'Spanish'],
    notes: 'Lead PM for enterprise accounts. Strong client relationship skills.',
  },
  {
    id: 'tm-2',
    name: 'Jessica Wang',
    projectRole: 'Tech Lead',
    generalRole: 'Principal Engineer',
    seniorityLevel: 'PRINCIPAL',
    skills: ['System Architecture', 'React', 'Node.js', 'AWS', 'Microservices', 'API Design', 'Code Review'],
    primarySkill: 'System Architecture',
    yearsInCompany: 6,
    monthsInProject: 14,
    timezone: 'PST (UTC-8)',
    location: 'San Francisco, CA',
    email: 'jessica.wang@promastreet.com',
    phone: '+1 (555) 100-0002',
    availabilityStatus: 'FULL_TIME',
    utilizationPercentage: 90,
    hoursPerWeek: 36,
    performanceRating: 5,
    certifications: ['AWS Solutions Architect', 'Google Cloud Professional'],
    languages: ['English', 'Mandarin'],
    notes: 'Excellent technical vision. Mentors junior developers effectively.',
  },
  {
    id: 'tm-3',
    name: 'Marcus Thompson',
    projectRole: 'Senior Full-Stack Developer',
    generalRole: 'Senior Software Engineer',
    seniorityLevel: 'SENIOR',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs', 'GraphQL', 'Docker'],
    primarySkill: 'Full-Stack Development',
    yearsInCompany: 4,
    monthsInProject: 10,
    timezone: 'EST (UTC-5)',
    location: 'Boston, MA',
    email: 'marcus.thompson@promastreet.com',
    phone: '+1 (555) 100-0003',
    availabilityStatus: 'FULL_TIME',
    utilizationPercentage: 100,
    hoursPerWeek: 40,
    performanceRating: 4,
    certifications: ['AWS Developer Associate'],
    languages: ['English'],
    notes: 'Reliable and consistent. Strong technical execution.',
  },
  {
    id: 'tm-4',
    name: 'Priya Sharma',
    projectRole: 'Frontend Developer',
    generalRole: 'Mid-Level Software Engineer',
    seniorityLevel: 'MID',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX', 'Responsive Design', 'Accessibility'],
    primarySkill: 'Frontend Development',
    yearsInCompany: 2.5,
    monthsInProject: 8,
    timezone: 'IST (UTC+5:30)',
    location: 'Bangalore, India',
    email: 'priya.sharma@promastreet.com',
    phone: '+91 98765 43210',
    availabilityStatus: 'FULL_TIME',
    utilizationPercentage: 100,
    hoursPerWeek: 40,
    performanceRating: 4,
    certifications: ['React Certified Developer'],
    languages: ['English', 'Hindi', 'Tamil'],
    notes: 'Fast learner. Excellent UI implementation skills. Timezone overlap works well.',
  },
  {
    id: 'tm-5',
    name: 'Carlos Rodriguez',
    projectRole: 'Backend Developer',
    generalRole: 'Senior Software Engineer',
    seniorityLevel: 'SENIOR',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Microservices', 'API Development', 'Performance Optimization'],
    primarySkill: 'Backend Development',
    yearsInCompany: 5,
    monthsInProject: 12,
    timezone: 'CST (UTC-6)',
    location: 'Austin, TX',
    email: 'carlos.rodriguez@promastreet.com',
    phone: '+1 (555) 100-0005',
    availabilityStatus: 'FULL_TIME',
    utilizationPercentage: 100,
    hoursPerWeek: 40,
    performanceRating: 5,
    certifications: ['AWS Solutions Architect'],
    languages: ['English', 'Spanish', 'Portuguese'],
    notes: 'Database optimization expert. Strong problem-solving skills.',
  },
  {
    id: 'tm-6',
    name: 'Sarah Kim',
    projectRole: 'QA Engineer',
    generalRole: 'Senior QA Engineer',
    seniorityLevel: 'SENIOR',
    skills: ['Test Automation', 'Selenium', 'Jest', 'Cypress', 'API Testing', 'Performance Testing', 'CI/CD'],
    primarySkill: 'Quality Assurance',
    yearsInCompany: 6,
    monthsInProject: 14,
    timezone: 'EST (UTC-5)',
    location: 'New York, NY',
    email: 'sarah.kim@promastreet.com',
    phone: '+1 (555) 100-0006',
    availabilityStatus: 'FULL_TIME',
    utilizationPercentage: 80,
    hoursPerWeek: 32,
    performanceRating: 5,
    certifications: ['ISTQB Advanced', 'AWS DevOps Professional'],
    languages: ['English', 'Korean'],
    notes: 'Exceptional attention to detail. Catches edge cases early.',
  },
  {
    id: 'tm-7',
    name: 'Ahmed Hassan',
    projectRole: 'DevOps Engineer',
    generalRole: 'DevOps Engineer',
    seniorityLevel: 'MID',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Monitoring', 'CI/CD Pipelines'],
    primarySkill: 'DevOps',
    yearsInCompany: 3,
    monthsInProject: 6,
    timezone: 'CET (UTC+1)',
    location: 'Berlin, Germany',
    email: 'ahmed.hassan@promastreet.com',
    phone: '+49 30 12345678',
    availabilityStatus: 'PART_TIME',
    utilizationPercentage: 50,
    hoursPerWeek: 20,
    performanceRating: 4,
    certifications: ['AWS DevOps Professional', 'Kubernetes Administrator'],
    languages: ['English', 'German', 'Arabic'],
    notes: 'Split between two projects. Deployment expert. Available afternoons EST.',
  },
  {
    id: 'tm-8',
    name: 'Jennifer Lee',
    projectRole: 'Business Analyst',
    generalRole: 'Senior Business Analyst',
    seniorityLevel: 'SENIOR',
    skills: ['Requirements Gathering', 'User Stories', 'Process Mapping', 'Data Analysis', 'Stakeholder Management', 'JIRA'],
    primarySkill: 'Business Analysis',
    yearsInCompany: 7,
    monthsInProject: 14,
    timezone: 'PST (UTC-8)',
    location: 'Seattle, WA',
    email: 'jennifer.lee@promastreet.com',
    phone: '+1 (555) 100-0008',
    availabilityStatus: 'FULL_TIME',
    utilizationPercentage: 100,
    hoursPerWeek: 40,
    performanceRating: 5,
    certifications: ['CBAP', 'PMI-PBA'],
    languages: ['English'],
    notes: 'Bridge between tech and business. Excellent documentation.',
  },
  {
    id: 'tm-9',
    name: 'Raj Patel',
    projectRole: 'Junior Developer',
    generalRole: 'Junior Software Engineer',
    seniorityLevel: 'JUNIOR',
    skills: ['JavaScript', 'React', 'HTML/CSS', 'Git', 'REST APIs'],
    primarySkill: 'Frontend Development',
    yearsInCompany: 0.5,
    monthsInProject: 4,
    timezone: 'IST (UTC+5:30)',
    location: 'Mumbai, India',
    email: 'raj.patel@promastreet.com',
    phone: '+91 98765 43220',
    availabilityStatus: 'FULL_TIME',
    utilizationPercentage: 100,
    hoursPerWeek: 40,
    performanceRating: 3,
    certifications: [],
    languages: ['English', 'Hindi', 'Gujarati'],
    notes: 'New grad hire. Eager to learn. Paired with Priya for mentoring.',
  },
]

// Team for Legacy System Migration (FinServ Global)
export const legacyMigrationTeam: TeamMember[] = [
  {
    id: 'tm-10',
    name: 'Jennifer Park',
    projectRole: 'Project Manager',
    generalRole: 'Senior Project Manager',
    seniorityLevel: 'SENIOR',
    skills: ['Project Management', 'Change Management', 'Risk Management', 'Financial Services Domain'],
    primarySkill: 'Project Management',
    yearsInCompany: 5,
    monthsInProject: 8,
    timezone: 'EST (UTC-5)',
    location: 'New York, NY',
    email: 'jennifer.park@promastreet.com',
    phone: '+1 (555) 100-0010',
    availabilityStatus: 'FULL_TIME',
    utilizationPercentage: 100,
    hoursPerWeek: 40,
    performanceRating: 4,
    certifications: ['PMP', 'Change Management Professional'],
    languages: ['English', 'Korean'],
    notes: 'Handling challenging client situation. Strong under pressure.',
  },
  {
    id: 'tm-11',
    name: 'Thomas Chen',
    projectRole: 'Legacy Systems Architect',
    generalRole: 'Principal Architect',
    seniorityLevel: 'ARCHITECT',
    skills: ['COBOL', 'Mainframe', 'System Migration', 'Data Mapping', 'Java', 'Integration Patterns'],
    primarySkill: 'Legacy Systems',
    yearsInCompany: 12,
    monthsInProject: 8,
    timezone: 'EST (UTC-5)',
    location: 'New York, NY',
    email: 'thomas.chen@promastreet.com',
    phone: '+1 (555) 100-0011',
    availabilityStatus: 'CONSULTANT',
    utilizationPercentage: 60,
    hoursPerWeek: 24,
    performanceRating: 5,
    certifications: ['IBM Certified Specialist'],
    languages: ['English', 'Mandarin'],
    notes: 'Rare skillset. High billing rate. Critical for migration strategy.',
  },
  {
    id: 'tm-12',
    name: 'Michael O\'Brien',
    projectRole: 'Data Migration Lead',
    generalRole: 'Senior Data Engineer',
    seniorityLevel: 'LEAD',
    skills: ['ETL', 'SQL', 'Data Migration', 'Python', 'Data Quality', 'Talend', 'Informatica'],
    primarySkill: 'Data Engineering',
    yearsInCompany: 9,
    monthsInProject: 6,
    timezone: 'GMT (UTC+0)',
    location: 'London, UK',
    email: 'michael.obrien@promastreet.com',
    phone: '+44 20 1234 5678',
    availabilityStatus: 'FULL_TIME',
    utilizationPercentage: 100,
    hoursPerWeek: 40,
    performanceRating: 4,
    certifications: ['Google Cloud Data Engineer', 'Informatica Certified'],
    languages: ['English'],
    notes: 'Timezone challenge with NY team. Overlap 8am-12pm EST.',
  },
]

// Team for AI Recommendation Engine (RetailMax Corp)
export const aiRecommendationTeam: TeamMember[] = [
  {
    id: 'tm-13',
    name: 'Lisa Anderson',
    projectRole: 'Project Manager / Product Owner',
    generalRole: 'Senior Project Manager',
    seniorityLevel: 'SENIOR',
    skills: ['Project Management', 'Product Management', 'Agile', 'Data Science Liaison', 'Retail Domain'],
    primarySkill: 'Project Management',
    yearsInCompany: 6,
    monthsInProject: 3,
    timezone: 'PST (UTC-8)',
    location: 'Los Angeles, CA',
    email: 'lisa.anderson@promastreet.com',
    phone: '+1 (555) 100-0013',
    availabilityStatus: 'FULL_TIME',
    utilizationPercentage: 100,
    hoursPerWeek: 40,
    performanceRating: 5,
    certifications: ['PMP', 'CSPO'],
    languages: ['English'],
    notes: 'Successfully led PoC phase. Strong AI/ML product background.',
  },
  {
    id: 'tm-14',
    name: 'Dr. Kevin Zhang',
    projectRole: 'ML Engineer / Data Scientist',
    generalRole: 'Senior ML Engineer',
    seniorityLevel: 'LEAD',
    skills: ['Machine Learning', 'Python', 'TensorFlow', 'PyTorch', 'Recommendation Systems', 'NLP', 'Data Science'],
    primarySkill: 'Machine Learning',
    yearsInCompany: 4,
    monthsInProject: 3,
    timezone: 'PST (UTC-8)',
    location: 'San Francisco, CA',
    email: 'kevin.zhang@promastreet.com',
    phone: '+1 (555) 100-0014',
    availabilityStatus: 'FULL_TIME',
    utilizationPercentage: 100,
    hoursPerWeek: 40,
    performanceRating: 5,
    certifications: ['PhD in Computer Science', 'Google ML Engineer'],
    languages: ['English', 'Mandarin'],
    notes: 'AI expert. Published researcher. Drives technical innovation.',
  },
]

// Team for Patient Portal (HealthTech Solutions)
export const patientPortalTeam: TeamMember[] = [
  {
    id: 'tm-15',
    name: 'Robert Jackson',
    projectRole: 'Project Manager',
    generalRole: 'Senior Project Manager',
    seniorityLevel: 'SENIOR',
    skills: ['Project Management', 'Healthcare Domain', 'HIPAA Compliance', 'Agile', 'Risk Management'],
    primarySkill: 'Project Management',
    yearsInCompany: 7,
    monthsInProject: 9,
    timezone: 'EST (UTC-5)',
    location: 'Boston, MA',
    email: 'robert.jackson@promastreet.com',
    phone: '+1 (555) 100-0015',
    availabilityStatus: 'FULL_TIME',
    utilizationPercentage: 100,
    hoursPerWeek: 40,
    performanceRating: 5,
    certifications: ['PMP', 'HIPAA Certification'],
    languages: ['English'],
    notes: 'Healthcare PM specialist. Strong compliance knowledge.',
  },
  {
    id: 'tm-16',
    name: 'Emily Nguyen',
    projectRole: 'Security Engineer',
    generalRole: 'Senior Security Engineer',
    seniorityLevel: 'SENIOR',
    skills: ['Application Security', 'HIPAA', 'Penetration Testing', 'Encryption', 'Security Audits', 'OAuth/SAML'],
    primarySkill: 'Security Engineering',
    yearsInCompany: 5,
    monthsInProject: 9,
    timezone: 'PST (UTC-8)',
    location: 'Seattle, WA',
    email: 'emily.nguyen@promastreet.com',
    phone: '+1 (555) 100-0016',
    availabilityStatus: 'FULL_TIME',
    utilizationPercentage: 80,
    hoursPerWeek: 32,
    performanceRating: 5,
    certifications: ['CISSP', 'Certified Ethical Hacker', 'HIPAA Security'],
    languages: ['English', 'Vietnamese'],
    notes: 'Critical for healthcare compliance. Works closely with CISO.',
  },
]

// Map project IDs to their teams
export const projectTeamsMap: Record<string, TeamMember[]> = {
  'proj-1': customer360Team,
  'proj-4': legacyMigrationTeam,
  'proj-5': legacyMigrationTeam, // Mobile Banking also FinServ
  'proj-6': aiRecommendationTeam,
  'proj-7': patientPortalTeam,
}

// Helper function to get team for a project
export function getTeamForProject(projectId: string): TeamMember[] {
  return projectTeamsMap[projectId] || []
}

// Helper function to get seniority badge color
export function getSeniorityColor(level: SeniorityLevel): string {
  switch (level) {
    case 'ARCHITECT':
    case 'PRINCIPAL':
      return 'bg-purple-100 text-purple-800 border-purple-300'
    case 'LEAD':
      return 'bg-blue-100 text-blue-800 border-blue-300'
    case 'SENIOR':
      return 'bg-green-100 text-green-800 border-green-300'
    case 'MID':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300'
    case 'JUNIOR':
      return 'bg-gray-100 text-gray-800 border-gray-300'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300'
  }
}

// Helper function to get performance stars
export function getPerformanceStars(rating: number): string {
  return '⭐'.repeat(rating)
}

// Helper function to format tenure
export function formatTenure(months: number): string {
  if (months < 12) return `${months} ${months === 1 ? 'month' : 'months'}`
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  if (remainingMonths === 0) return `${years} ${years === 1 ? 'year' : 'years'}`
  return `${years}y ${remainingMonths}m`
}

