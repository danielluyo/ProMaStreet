'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Calendar as CalendarIcon,
  ChevronLeft, 
  ChevronRight,
  Filter,
  Plus,
  AlertTriangle,
  Clock,
  Video,
  FileText,
  RefreshCw
} from 'lucide-react'
import { mockEvents, CalendarEvent } from '@/data/mock-events'
import { mockProjects } from '@/data/mock-projects'

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState<'week' | 'month'>('week')
  const [selectedProject, setSelectedProject] = useState<string>('ALL')
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)

  // Get unique projects from events
  const projectsWithEvents = useMemo(() => {
    const projectIds = Array.from(new Set(mockEvents.map(e => e.projectId)))
    return mockProjects.filter(p => projectIds.includes(p.id))
  }, [])

  // Filter events
  const filteredEvents = useMemo(() => {
    if (selectedProject === 'ALL') return mockEvents
    return mockEvents.filter(e => e.projectId === selectedProject)
  }, [selectedProject])

  // Get week dates
  const getWeekDates = (date: Date) => {
    const dates = []
    const start = new Date(date)
    start.setDate(start.getDate() - start.getDay() + 1) // Start from Monday
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(start)
      day.setDate(start.getDate() + i)
      dates.push(day)
    }
    return dates
  }

  const weekDates = getWeekDates(currentDate)

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.startDate)
      return eventDate.toDateString() === date.toDateString()
    })
  }

  // Navigation
  const goToPreviousWeek = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() - 7)
    setCurrentDate(newDate)
  }

  const goToNextWeek = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + 7)
    setCurrentDate(newDate)
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  // Event type styling
  const getEventTypeStyle = (type: string) => {
    const styles: Record<string, string> = {
      'MILESTONE': 'bg-purple-100 text-purple-800 border-purple-300',
      'CLIENT_MEETING': 'bg-blue-100 text-blue-800 border-blue-300',
      'DEMO': 'bg-green-100 text-green-800 border-green-300',
      'STEERING': 'bg-orange-100 text-orange-800 border-orange-300',
      'INTERNAL': 'bg-gray-100 text-gray-800 border-gray-300',
      'DEADLINE': 'bg-red-100 text-red-800 border-red-300',
      'REVIEW': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    }
    return styles[type] || 'bg-gray-100 text-gray-800 border-gray-300'
  }

  const conflictingEventsCount = filteredEvents.filter(e => e.isConflict).length

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
          <p className="mt-2 text-gray-600">
            Project milestones, client meetings, and team events
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={goToToday}>
            <CalendarIcon className="h-4 w-4 mr-2" />
            Today
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Plus className="h-4 w-4 mr-2" />
            Schedule Meeting
          </Button>
        </div>
      </div>

      {/* Alerts for Conflicts */}
      {conflictingEventsCount > 0 && (
        <Card className="border-l-4 border-l-red-500 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-semibold text-red-900">
                  {conflictingEventsCount} Scheduling Conflict{conflictingEventsCount > 1 ? 's' : ''} Detected
                </p>
                <p className="text-sm text-red-700">
                  Review conflicting events and reschedule as needed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Navigation */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={goToPreviousWeek}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-lg font-semibold min-w-[200px] text-center">
              {weekDates[0].toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - {weekDates[6].toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <Button variant="outline" size="sm" onClick={goToNextWeek}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-600" />
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="ALL">All Projects</option>
            {projectsWithEvents.map(project => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Week View */}
      <div className="grid grid-cols-7 gap-2">
        {weekDates.map((date, index) => {
          const events = getEventsForDate(date)
          const isToday = date.toDateString() === new Date().toDateString()
          const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })

          return (
            <Card key={index} className={`${isToday ? 'border-2 border-orange-500' : ''}`}>
              <CardHeader className="pb-3">
                <div className="text-center">
                  <div className="text-xs text-gray-600">{dayName}</div>
                  <div className={`text-2xl font-bold ${isToday ? 'text-orange-600' : 'text-gray-900'}`}>
                    {date.getDate()}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 min-h-[300px]">
                {events.length === 0 ? (
                  <div className="text-center text-xs text-gray-400 py-8">
                    No events
                  </div>
                ) : (
                  events.map(event => (
                    <div
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className={`p-2 rounded-lg border cursor-pointer hover:shadow-md transition-shadow ${getEventTypeStyle(event.type)} ${
                        event.isConflict ? 'ring-2 ring-red-500' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <div className="text-xs font-semibold leading-tight flex-1">
                          {event.title}
                        </div>
                        {event.isConflict && (
                          <AlertTriangle className="h-3 w-3 text-red-600 flex-shrink-0" />
                        )}
                      </div>
                      <div className="text-xs opacity-75 mt-1">
                        {event.startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
                      </div>
                      <div className="text-xs opacity-75 mt-1 truncate">
                        {event.clientName}
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6" onClick={() => setSelectedEvent(null)}>
          <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getEventTypeStyle(selectedEvent.type)}>
                      {selectedEvent.type.replace('_', ' ')}
                    </Badge>
                    {selectedEvent.isConflict && (
                      <Badge variant="destructive" className="flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        CONFLICT
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl">{selectedEvent.title}</CardTitle>
                  <p className="text-sm text-gray-600 mt-2">
                    {selectedEvent.startDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
                <Button variant="ghost" onClick={() => setSelectedEvent(null)}>
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Time & Location */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Time</div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-500" />
                    {selectedEvent.startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} - {selectedEvent.endDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Location</div>
                  <div className="text-sm">{selectedEvent.location}</div>
                </div>
              </div>

              {/* Project & Client */}
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-2">Project</div>
                <div className="text-sm">
                  <div className="font-medium">{selectedEvent.projectName}</div>
                  <div className="text-gray-600">{selectedEvent.clientName}</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-2">Description</div>
                <div className="text-sm text-gray-700">{selectedEvent.description}</div>
              </div>

              {/* Attendees */}
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-2">Attendees</div>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.attendees.map((attendee, index) => (
                    <Badge key={index} variant="outline">{attendee}</Badge>
                  ))}
                </div>
              </div>

              {/* Conflict Info */}
              {selectedEvent.isConflict && selectedEvent.conflictsWith && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <div className="text-sm font-semibold text-red-900">Scheduling Conflict</div>
                  </div>
                  <div className="text-sm text-red-700">
                    This event conflicts with {selectedEvent.conflictsWith.length} other event(s).
                    Consider rescheduling to avoid conflicts.
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t">
                <Button variant="outline" className="w-full">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reschedule
                </Button>
                <Button variant="outline" className="w-full">
                  <Video className="h-4 w-4 mr-2" />
                  Join Meeting
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Agenda
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Meeting Notes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Legend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Event Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Badge className={getEventTypeStyle('MILESTONE')}>Milestone</Badge>
            <Badge className={getEventTypeStyle('CLIENT_MEETING')}>Client Meeting</Badge>
            <Badge className={getEventTypeStyle('DEMO')}>Demo</Badge>
            <Badge className={getEventTypeStyle('STEERING')}>Steering Committee</Badge>
            <Badge className={getEventTypeStyle('INTERNAL')}>Internal</Badge>
            <Badge className={getEventTypeStyle('DEADLINE')}>Deadline</Badge>
            <Badge className={getEventTypeStyle('REVIEW')}>Review</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

