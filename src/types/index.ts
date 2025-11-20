import type { User, Project, Task, Client, Team, TimeEntry } from '@prisma/client'

// API Response Types
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

// Extended Types with Relations
export type UserWithRelations = User & {
  projectsOwned?: Project[]
  tasksAssigned?: Task[]
  clientProfile?: Client | null
}

export type ProjectWithRelations = Project & {
  client: Client
  owner: User
  _count?: {
    tasks: number
    members: number
  }
}

export type TaskWithRelations = Task & {
  project: Project
  assignee?: User | null
  creator: User
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

