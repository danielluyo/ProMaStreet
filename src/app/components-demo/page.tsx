'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Form } from '@/components/ui/form'
import { InputFormField, SelectFormField, TextareaFormField, CheckboxFormField } from '@/components/shared/FormField'
import { DataTable } from '@/components/shared/DataTable'
import { ConfirmDialog } from '@/components/shared/ConfirmDialog'
import { useToast } from '@/hooks/use-toast'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { AlertCircle, CheckCircle2, Plus, Trash2 } from 'lucide-react'
import { ColumnDef } from '@tanstack/react-table'

// Sample form schema
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.string().min(1, 'Please select a role'),
  bio: z.string().optional(),
  notifications: z.boolean().default(false),
})

type FormData = z.infer<typeof formSchema>

// Sample data for table
interface User {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
}

const sampleData: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Project Manager', status: 'active' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Team Member', status: 'inactive' },
]

export default function ComponentsDemoPage() {
  const { toast } = useToast()
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      role: '',
      bio: '',
      notifications: false,
    },
  })

  const onSubmit = (data: FormData) => {
    toast({
      title: 'Form submitted!',
      description: `Welcome, ${data.name}!`,
    })
    console.log(data)
  }

  // Table columns
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'role',
      header: 'Role',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const status = row.getValue('status') as string
        return (
          <Badge variant={status === 'active' ? 'default' : 'secondary'}>
            {status}
          </Badge>
        )
      },
    },
    {
      id: 'actions',
      cell: () => {
        return (
          <Button variant="ghost" size="sm" onClick={() => setConfirmOpen(true)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        )
      },
    },
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">UI Components Demo</h1>
        <p className="text-muted-foreground">
          Showcase of all available UI components and patterns
        </p>
      </div>

      <Separator />

      {/* Alerts Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Alerts</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational alert message.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              This is an error alert message.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <Separator />

      {/* Buttons & Badges */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons & Badges</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      <Separator />

      {/* Form Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Components</h2>
        <Card>
          <CardHeader>
            <CardTitle>User Registration</CardTitle>
            <CardDescription>Fill out the form below to create a new user</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputFormField
                    control={form.control}
                    name="name"
                    label="Full Name"
                    placeholder="John Doe"
                  />
                  <InputFormField
                    control={form.control}
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <SelectFormField
                  control={form.control}
                  name="role"
                  label="Role"
                  placeholder="Select a role"
                  options={[
                    { value: 'admin', label: 'Administrator' },
                    { value: 'pm', label: 'Project Manager' },
                    { value: 'member', label: 'Team Member' },
                  ]}
                />

                <TextareaFormField
                  control={form.control}
                  name="bio"
                  label="Bio"
                  placeholder="Tell us about yourself..."
                  rows={3}
                />

                <CheckboxFormField
                  control={form.control}
                  name="notifications"
                  checkboxLabel="Send me email notifications"
                  description="Receive updates about your account via email"
                />

                <div className="flex gap-2">
                  <Button type="submit">Submit</Button>
                  <Button type="button" variant="outline" onClick={() => form.reset()}>
                    Reset
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Data Table Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Data Table</h2>
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>Manage your team members</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={columns}
              data={sampleData}
              searchKey="name"
              searchPlaceholder="Search users..."
            />
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Dialogs Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dialogs & Modals</h2>
        <div className="flex gap-4">
          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Open Modal
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Item</DialogTitle>
                <DialogDescription>
                  This is a modal dialog for creating new items.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <p className="text-sm text-muted-foreground">
                  Modal content goes here. You can add forms, tables, or any other components.
                </p>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => {
                    toast({
                      title: 'Success!',
                      description: 'Item created successfully',
                    })
                    setModalOpen(false)
                  }}>
                    Create
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="destructive" onClick={() => setConfirmOpen(true)}>
            Delete Item
          </Button>
        </div>

        <ConfirmDialog
          open={confirmOpen}
          onOpenChange={setConfirmOpen}
          title="Are you sure?"
          description="This action cannot be undone. This will permanently delete the item."
          confirmText="Delete"
          cancelText="Cancel"
          variant="destructive"
          onConfirm={() => {
            toast({
              title: 'Deleted!',
              description: 'Item has been deleted successfully',
            })
          }}
        />
      </section>

      <Separator />

      {/* Toast Demo */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Toast Notifications</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() => {
              toast({
                title: 'Success!',
                description: 'Your action was completed successfully',
              })
            }}
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Show Success Toast
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              toast({
                variant: 'destructive',
                title: 'Error!',
                description: 'Something went wrong',
              })
            }}
          >
            <AlertCircle className="mr-2 h-4 w-4" />
            Show Error Toast
          </Button>
        </div>
      </section>
    </div>
  )
}

