// API Response Types (for future backend integration)
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: unknown
  }
  message?: string
}

// Form Types
export interface LoginFormData {
  email: string
  password: string
}

export interface RegisterFormData {
  email: string
  password: string
  firstName: string
  lastName: string
}

export interface ProjectFormData {
  name: string
  description?: string
  status: string
  priority: string
  startDate?: Date
  endDate?: Date
  budget?: number
  clientId: string
}

export interface TaskFormData {
  title: string
  description?: string
  status: string
  priority: string
  projectId: string
  assigneeId?: string
  dueDate?: Date
  estimatedHours?: number
}

// Dashboard Types
export interface DashboardStats {
  totalProjects: number
  activeProjects: number
  totalTasks: number
  completedTasks: number
  totalHours: number
  teamMembers: number
}
