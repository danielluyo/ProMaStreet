'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Skeleton } from '@/components/ui/skeleton'
import {
  InputFormField,
  TextareaFormField,
  SelectFormField,
} from '@/components/shared/FormField'
import { useToast } from '@/hooks/use-toast'
import {
  updateProjectSchema,
  UpdateProjectInput,
} from '@/lib/validations/project'

interface Client {
  id: string
  name: string
  company: string | null
}

interface Team {
  id: string
  name: string
}

interface Project {
  id: string
  name: string
  description: string | null
  status: string
  startDate: string
  endDate: string | null
  clientId: string
  teamId: string | null
  budgets: { amount: number }[]
}

export default function EditProjectPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [clients, setClients] = useState<Client[]>([])
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)

  const form = useForm<UpdateProjectInput>({
    resolver: zodResolver(updateProjectSchema),
  })

  useEffect(() => {
    fetchData()
  }, [params.id])

  const fetchData = async () => {
    setFetching(true)
    try {
      const [projectRes, clientsRes, teamsRes] = await Promise.all([
        fetch(`/api/projects/${params.id}`),
        fetch('/api/clients'),
        fetch('/api/teams'),
      ])

      const projectData = await projectRes.json()
      const clientsData = await clientsRes.json()
      const teamsData = await teamsRes.json()

      if (projectData.success) {
        const project: Project = projectData.data
        form.reset({
          name: project.name,
          description: project.description || '',
          status: project.status as any,
          clientId: project.clientId,
          teamId: project.teamId || '',
          startDate: new Date(project.startDate).toISOString().split('T')[0],
          endDate: project.endDate
            ? new Date(project.endDate).toISOString().split('T')[0]
            : '',
          budget:
            project.budgets.length > 0
              ? project.budgets.reduce((sum, b) => sum + b.amount, 0)
              : 0,
        })
      }

      if (clientsData.success) {
        setClients(clientsData.data)
      }
      if (teamsData.success) {
        setTeams(teamsData.data)
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load project data',
        variant: 'destructive',
      })
    } finally {
      setFetching(false)
    }
  }

  const onSubmit = async (data: UpdateProjectInput) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/projects/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: 'Success',
          description: 'Project updated successfully',
        })
        router.push(`/projects/${params.id}`)
      } else {
        toast({
          title: 'Error',
          description: result.error?.message || 'Failed to update project',
          variant: 'destructive',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update project',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const statusOptions = [
    { value: 'PLANNING', label: 'Planning' },
    { value: 'ACTIVE', label: 'Active' },
    { value: 'ON_HOLD', label: 'On Hold' },
    { value: 'COMPLETED', label: 'Completed' },
    { value: 'CANCELLED', label: 'Cancelled' },
  ]

  const clientOptions = clients.map((client) => ({
    value: client.id,
    label: client.company
      ? `${client.name} (${client.company})`
      : client.name,
  }))

  const teamOptions = [
    { value: '', label: 'No team assigned' },
    ...teams.map((team) => ({
      value: team.id,
      label: team.name,
    })),
  ]

  if (fetching) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-96" />
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push(`/projects/${params.id}`)}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Project</h1>
          <p className="text-muted-foreground">Update project information</p>
        </div>
      </div>

      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle>Project Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <InputFormField
                  control={form.control}
                  name="name"
                  label="Project Name"
                  placeholder="Enter project name"
                />

                <TextareaFormField
                  control={form.control}
                  name="description"
                  label="Description"
                  placeholder="Enter project description"
                  rows={4}
                />

                <SelectFormField
                  control={form.control}
                  name="status"
                  label="Status"
                  options={statusOptions}
                />
              </div>

              {/* Client & Team */}
              <div className="space-y-4">
                <SelectFormField
                  control={form.control}
                  name="clientId"
                  label="Client"
                  options={clientOptions}
                  placeholder="Select a client"
                />

                <SelectFormField
                  control={form.control}
                  name="teamId"
                  label="Team"
                  options={teamOptions}
                  placeholder="Select a team (optional)"
                />
              </div>

              {/* Dates */}
              <div className="grid gap-4 md:grid-cols-2">
                <InputFormField
                  control={form.control}
                  name="startDate"
                  label="Start Date"
                  type="date"
                />

                <InputFormField
                  control={form.control}
                  name="endDate"
                  label="End Date"
                  type="date"
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push(`/projects/${params.id}`)}
                  disabled={loading}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Update Project
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

