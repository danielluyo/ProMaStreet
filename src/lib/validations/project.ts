import { z } from 'zod'

export const projectStatusEnum = z.enum([
  'PLANNING',
  'ACTIVE',
  'ON_HOLD',
  'COMPLETED',
  'CANCELLED',
])

export const createProjectSchema = z.object({
  name: z
    .string()
    .min(3, 'Project name must be at least 3 characters')
    .max(100, 'Project name must not exceed 100 characters'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(2000, 'Description must not exceed 2000 characters')
    .optional()
    .or(z.literal('')),
  status: projectStatusEnum,
  clientId: z.string().min(1, 'Client is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional().or(z.literal('')),
  budget: z
    .number()
    .min(0, 'Budget must be a positive number')
    .optional()
    .or(z.literal(0)),
  teamId: z.string().optional().or(z.literal('')),
})

export const updateProjectSchema = z.object({
  name: z
    .string()
    .min(3, 'Project name must be at least 3 characters')
    .max(100, 'Project name must not exceed 100 characters')
    .optional(),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(2000, 'Description must not exceed 2000 characters')
    .optional()
    .or(z.literal('')),
  status: projectStatusEnum.optional(),
  clientId: z.string().min(1, 'Client is required').optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional().or(z.literal('')),
  budget: z.number().min(0, 'Budget must be a positive number').optional(),
  teamId: z.string().optional().or(z.literal('')),
})

export type CreateProjectInput = z.infer<typeof createProjectSchema>
export type UpdateProjectInput = z.infer<typeof updateProjectSchema>

// Helper to get status badge color
export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    PLANNING: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    ACTIVE: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    ON_HOLD: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    COMPLETED: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    CANCELLED: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  }
  return colors[status] || 'bg-gray-100 text-gray-800'
}

// Helper to format status for display
export function formatStatus(status: string): string {
  return status.replace('_', ' ')
}

