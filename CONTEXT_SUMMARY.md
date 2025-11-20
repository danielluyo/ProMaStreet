# ProMaStreet - Quick Context Summary

> **Use this file to quickly restore context in a new conversation**

## 🎯 Current Status (November 20, 2025)

**Project:** ProMaStreet - Project Management System for Software Consulting Firms  
**Tech Stack:** Next.js 15 + React 19 + TypeScript + PostgreSQL + Prisma + NextAuth  
**Phase Complete:** Phase 3 of 8 (37.5%)  
**Context Used:** ~8% (plenty of room)

## ✅ What's Been Built

### Phase 1: Authentication & RBAC ✅ 
**Files:** `PHASE1_COMPLETE.md`, `RBAC_IMPLEMENTATION.md`

- ✅ NextAuth.js with JWT sessions
- ✅ Login/Register pages with validation
- ✅ 4 roles: ADMIN, PROJECT_MANAGER, TEAM_MEMBER, CLIENT
- ✅ RBAC at 3 levels: routes (middleware), components (RoleGate), API (requireRole)
- ✅ Protected dashboard with role-filtered navigation
- ✅ Admin-only settings page

**Key Files:**
- `src/lib/auth.ts` - NextAuth config
- `src/lib/rbac.ts` - RBAC logic
- `src/middleware.ts` - Route protection
- `src/hooks/useRBAC.ts` - RBAC React hook

### Phase 2: Core UI Components ✅
**Files:** `PHASE2_COMPLETE.md`

- ✅ 17 shadcn/ui components installed
- ✅ Custom DataTable (sorting, filtering, pagination)
- ✅ Form field wrappers (4 types)
- ✅ ConfirmDialog & Toast system
- ✅ Demo page at `/components-demo`

**Key Files:**
- `src/components/ui/*` - shadcn/ui components
- `src/components/shared/DataTable.tsx` - Reusable table
- `src/components/shared/FormField.tsx` - Form wrappers
- `src/app/components-demo/page.tsx` - Examples

### Phase 3: Project Management ✅
**Files:** `PHASE3_COMPLETE.md`

- ✅ Full CRUD operations for projects
- ✅ Projects API with RBAC (7 endpoints)
- ✅ Projects list with DataTable & filtering
- ✅ Project detail page with stats cards
- ✅ Create/edit forms with validation
- ✅ Budget tracking display
- ✅ Client & Team APIs

**Key Files:**
- `src/lib/validations/project.ts` - Zod schemas
- `src/app/api/projects/route.ts` - List & Create
- `src/app/api/projects/[id]/route.ts` - Get, Update, Delete
- `src/app/api/clients/route.ts` - Clients API
- `src/app/api/teams/route.ts` - Teams API
- `src/app/projects/page.tsx` - Projects list
- `src/app/projects/[id]/page.tsx` - Project detail
- `src/app/projects/new/page.tsx` - Create project
- `src/app/projects/[id]/edit/page.tsx` - Edit project

## 📊 Project Facts

- **Database:** 11 Prisma models (User, Project, Task, Client, Team, etc.)
- **Seed Data:** 5 users with roles + 1 sample project with tasks
- **Routes:** `/auth/*`, `/dashboard`, `/settings`, `/projects/*`, `/components-demo`
- **API Routes:** 7 total (health, auth, register, projects, clients, teams)
- **Lines of Code:** ~12,000+
- **Files:** 61+

## 🔑 Key Patterns Established

### Authentication
```typescript
// In pages: Check session
const { data: session } = useSession()

// In API: Require auth/role
const user = await requireRole(['ADMIN', 'PROJECT_MANAGER'])
if (isErrorResponse(user)) return user
```

### RBAC
```typescript
// In components: Check permissions
const { isAdmin, hasPermission } = useRBAC()

// Conditional rendering
<AdminOnly><AdminPanel /></AdminOnly>
<RoleGate allowedRoles={['ADMIN', 'PROJECT_MANAGER']}>
  <CreateButton />
</RoleGate>
```

### Forms
```typescript
// With validation
const form = useForm({
  resolver: zodResolver(schema),
})

<Form {...form}>
  <InputFormField control={form.control} name="email" label="Email" />
  <SelectFormField control={form.control} name="role" options={...} />
</Form>
```

### Data Tables
```typescript
<DataTable
  columns={columns}
  data={data}
  searchKey="name"
  searchPlaceholder="Search..."
/>
```

## 🚧 Known Issues & Fixes

1. **Route Groups:** Don't use `(auth)` folders - use `auth/` instead
2. **Import Paths:** Use `@/` for src imports (configured in tsconfig)
3. **PostCSS:** Must be `.cjs` for Next.js 15
4. **Next Config:** Must be `.mjs` with ESM syntax
5. **Schema Mismatch:** Always verify API responses match Prisma schema structure
   - Use `owner` not `projectManager`
   - Use `teams` (array) not `team` (single)
   - Client has `user` relation for contact info

## 🎯 What's Next: Phase 4

**Goal:** Task Management & Kanban Board

**To Implement:**
- Tasks list with DataTable
- Task detail page
- Create/edit task forms
- Kanban board with drag-and-drop
- Task assignment
- Status & priority management
- Task comments

**Files to Create:**
- `src/app/tasks/page.tsx`
- `src/app/tasks/[id]/page.tsx`
- `src/app/tasks/new/page.tsx`
- `src/app/tasks/kanban/page.tsx`
- `src/app/api/tasks/route.ts`
- `src/lib/validations/task.ts`

## 📚 Essential Files to Read

**For Context Restoration (in order):**
1. `AI_INSTRUCTIONS.md` - ✨ Updated - Complete project reference
2. `NEXT_STEPS.md` - ✨ Updated - Current status
3. `PHASE1_COMPLETE.md` - Auth implementation
4. `RBAC_IMPLEMENTATION.md` - RBAC details
5. `PHASE2_COMPLETE.md` - UI components
6. `prisma/schema.prisma` - Database structure

**For Development:**
- Existing pages in `src/app/` for patterns
- `src/components/shared/` for reusable components
- `src/lib/rbac.ts` for permission checks
- `src/app/components-demo/page.tsx` for UI examples

## 🧪 Test Credentials

```
Admin:     admin@promastreet.com / admin123
PM:        pm@promastreet.com / pm123
Developer: dev1@promastreet.com / dev123
Client:    client@example.com / client123
```

## ⚡ Quick Commands

```bash
npm run dev              # Start server
npm run db:studio        # Open database GUI
npm run db:seed          # Reseed database
npm install              # Install dependencies
```

## 🎨 Design System

- **Colors:** Primary (blue), Secondary (gray), Destructive (red)
- **Spacing:** 4px base unit, p-6 for cards
- **Typography:** Inter font, text-sm to text-4xl
- **Components:** All use Tailwind + CSS variables for theming

## 🔒 Security Implemented

- ✅ Password hashing (bcrypt)
- ✅ JWT sessions with 30-day expiry
- ✅ Route protection (middleware)
- ✅ API protection (requireRole)
- ✅ Input validation (Zod)
- ✅ SQL injection protection (Prisma)
- ✅ XSS protection (React)

## 💡 Tips for New Conversation

If starting a new conversation:

1. Share this file first for quick context
2. Reference specific phase documentation as needed
3. Mention: "We're on Phase 3 - Project Management"
4. All auth, RBAC, and UI components are done
5. Database schema is complete (11 models)
6. 17 shadcn/ui components + 4 custom components ready

---

**Generated:** November 20, 2025  
**Status:** Phase 3 Complete + Architecture Refactored → Ready for Phase 4  
**Architecture:** ✅ Route Groups with Best Practices
**Next:** Task Management & Kanban Board with Drag-and-Drop

