'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import {
  InputFormField,
  TextareaFormField,
  SelectFormField,
} from '@/components/shared/FormField'
import { useToast } from '@/hooks/use-toast'
import {
  createProjectSchema,
  CreateProjectInput,
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

export default function NewProjectPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [clients, setClients] = useState<Client[]>([])
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(false)

  const form = useForm<CreateProjectInput>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      name: '',
      description: '',
      status: 'PLANNING',
      clientId: '',
      startDate: new Date().toISOString().split('T')[0],
      endDate: '',
      budget: 0,
      teamId: '',
    },
  })

  useEffect(() => {
    fetchClientsAndTeams()
  }, [])

  const fetchClientsAndTeams = async () => {
    try {
      const [clientsRes, teamsRes] = await Promise.all([
        fetch('/api/clients'),
        fetch('/api/teams'),
      ])

      const clientsData = await clientsRes.json()
      const teamsData = await teamsRes.json()

      if (clientsData.success) {
        setClients(clientsData.data)
      }
      if (teamsData.success) {
        setTeams(teamsData.data)
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load clients and teams',
        variant: 'destructive',
      })
    }
  }

  const onSubmit = async (data: CreateProjectInput) => {
    setLoading(true)
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: 'Success',
          description: 'Project created successfully',
        })
        router.push(`/projects/${result.data.id}`)
      } else {
        toast({
          title: 'Error',
          description: result.error?.message || 'Failed to create project',
          variant: 'destructive',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create project',
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

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push('/projects')}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Project</h1>
          <p className="text-muted-foreground">Create a new project</p>
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

              {/* Dates & Budget */}
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

              <InputFormField
                control={form.control}
                name="budget"
                label="Budget"
                type="number"
                placeholder="0"
                min={0}
                step={0.01}
              />

              {/* Actions */}
              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/projects')}
                  disabled={loading}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Create Project
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

