# ProMaStreet - AI Development Instructions

## Project Overview
ProMaStreet is a web-based Project Management system designed for software consulting firms. It enables Project Managers to efficiently manage multiple projects, clients, and teams simultaneously.

## Technology Stack

### Frontend
- **Framework**: Next.js 15.0.3 (App Router, React 19)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + CSS Variables
- **UI Components**: shadcn/ui (17 components installed)
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod
- **Tables**: TanStack Table (React Table)
- **Real-time**: Socket.io-client (ready, not yet implemented)

### Backend
- **Runtime**: Node.js
- **Framework**: Next.js API Routes (ESM)
- **Language**: TypeScript (Strict Mode)
- **ORM**: Prisma 5.22.0
- **Authentication**: NextAuth.js 4.24.10
- **Validation**: Zod
- **Password**: bcryptjs
- **Real-time**: Socket.io (ready, not yet implemented)

### Database
- **Primary Database**: PostgreSQL 16
- **ORM**: Prisma with 11 models
- **Caching**: Redis (ready, not yet implemented)
- **Seed Data**: 5 sample users, 1 project, 3 tasks

### Deployment
- **Hosting**: Vercel (recommended) or Railway
- **Database**: Local (Docker) → Supabase/Neon (production)
- **File Storage**: AWS S3 or Supabase Storage

## Project Structure

```
ProMaStreet/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── auth/              # Authentication pages
│   │   │   ├── login/         # Login page
│   │   │   └── register/      # Registration page
│   │   ├── dashboard/         # Dashboard (protected)
│   │   ├── settings/          # Settings (admin only)
│   │   ├── components-demo/   # UI components showcase
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # Auth API routes
│   │   │   └── health/        # Health check
│   │   ├── layout.tsx         # Root layout with Providers
│   │   ├── page.tsx           # Home page
│   │   └── providers.tsx      # Client providers (Session, Query)
│   ├── components/
│   │   ├── ui/               # shadcn/ui components (17 installed)
│   │   └── shared/           # Custom reusable components
│   │       ├── DataTable.tsx # Reusable data table
│   │       ├── FormField.tsx # Form field wrappers
│   │       ├── ConfirmDialog.tsx # Confirmation dialog
│   │       └── RoleGate.tsx  # RBAC component gates
│   ├── lib/                   # Utility functions
│   │   ├── prisma.ts         # Prisma client singleton
│   │   ├── auth.ts           # NextAuth configuration
│   │   ├── rbac.ts           # Role-based access control
│   │   ├── api-auth.ts       # API authentication helpers
│   │   ├── utils.ts          # Helper functions
│   │   └── validations/      # Zod schemas
│   │       └── auth.ts       # Auth validation schemas
│   ├── hooks/                 # Custom React hooks
│   │   ├── use-toast.ts      # Toast notifications
│   │   └── useRBAC.ts        # RBAC hook
│   ├── types/                 # TypeScript types
│   │   ├── index.ts          # Common types
│   │   └── next-auth.d.ts    # NextAuth type extensions
│   └── middleware.ts          # Route protection middleware
├── prisma/
│   ├── schema.prisma         # Database schema (11 models)
│   ├── migrations/           # Database migrations
│   └── seed.ts               # Seed data (5 sample users)
├── public/                    # Static assets
└── config files...
```

## Implementation Status

### ✅ Phase 1: Authentication & User Management (COMPLETE)
**Documentation:** `PHASE1_COMPLETE.md`, `RBAC_IMPLEMENTATION.md`

1. ✅ **NextAuth.js Setup**
   - Credentials provider configured
   - JWT-based sessions (30-day expiry)
   - Password hashing with bcrypt
   - File: `src/lib/auth.ts`

2. ✅ **Authentication Pages**
   - Login page: `/auth/login`
   - Registration page: `/auth/register`
   - Form validation with Zod
   - Error handling and feedback

3. ✅ **Role-Based Access Control (RBAC)**
   - 4 roles: ADMIN, PROJECT_MANAGER, TEAM_MEMBER, CLIENT
   - Permission system per role
   - Route-level protection (middleware)
   - Component-level gates (RoleGate, AdminOnly, ManagerOnly)
   - API-level protection (requireAuth, requireRole, requirePermission)
   - Files: `src/lib/rbac.ts`, `src/hooks/useRBAC.ts`, `src/middleware.ts`

4. ✅ **Protected Dashboard**
   - Responsive sidebar navigation
   - Role-based menu filtering
   - Mobile hamburger menu
   - User profile display
   - File: `src/app/dashboard/layout.tsx`

5. ✅ **Sample Data**
   - 5 users with different roles
   - Demo credentials in seed file
   - Activity logging

### ✅ Phase 2: Core UI Components (COMPLETE)
**Documentation:** `PHASE2_COMPLETE.md`

1. ✅ **shadcn/ui Installation**
   - 17 components installed
   - Button, Input, Textarea, Select, Checkbox
   - Card, Table, Dialog, Alert Dialog
   - Dropdown Menu, Badge, Alert, Toast
   - Form, Separator, Skeleton, Label

2. ✅ **Custom Components**
   - DataTable with sorting, filtering, pagination
   - Form field wrappers (Input, Textarea, Select, Checkbox)
   - ConfirmDialog for confirmations
   - Toast notification system
   - Files: `src/components/shared/`

3. ✅ **Components Demo Page**
   - Route: `/components-demo`
   - Interactive showcase of all components
   - Copy-paste ready examples

### 🔄 Phase 3: Project Management (NEXT)
1. ⏳ Projects list page with DataTable
2. ⏳ Project detail view
3. ⏳ Create/edit project forms
4. ⏳ Project status management
5. ⏳ Budget tracking interface

### 📋 Future Phases
- **Phase 4:** Task Management & Kanban Board
- **Phase 5:** Team & Client Management
- **Phase 6:** Time Tracking
- **Phase 7:** Reporting & Analytics
- **Phase 8:** Advanced Features (Real-time, Files, Search)

## Database Schema Design

### Core Entities
- `User` - System users (PMs, team members, clients)
- `Organization` - Company/organization
- `Project` - Client projects
- `Task` - Project tasks
- `Client` - Client information
- `Team` - Team groupings
- `TimeEntry` - Time tracking records
- `Comment` - Comments on tasks/projects
- `Attachment` - File attachments
- `Notification` - User notifications
- `ActivityLog` - Audit trail

### Key Relationships
- User → Projects (many-to-many via assignments)
- Project → Client (many-to-one)
- Project → Tasks (one-to-many)
- Task → User (assigned to)
- Task → TimeEntries (one-to-many)
- User → Teams (many-to-many)
- Team → Projects (many-to-many)

## Development Guidelines

### Code Style
- Use TypeScript strict mode
- Follow ESLint configuration
- Use Prettier for formatting
- Prefer functional components
- Use async/await over promises
- Implement proper error handling

### Component Guidelines
- Keep components small and focused
- Use composition over inheritance
- Implement proper TypeScript types
- Use custom hooks for logic reuse
- Implement loading and error states

### API Route Guidelines
- Use proper HTTP methods (GET, POST, PUT, DELETE)
- Implement authentication middleware
- Validate input with Zod schemas
- Return consistent response formats
- Handle errors gracefully

### Database Guidelines
- Use Prisma migrations for schema changes
- Implement proper indexes
- Use transactions for related operations
- Implement soft deletes where appropriate
- Maintain referential integrity

### Security Best Practices
- Implement CSRF protection
- Sanitize user inputs
- Use parameterized queries (Prisma handles this)
- Implement rate limiting
- Use secure session management
- Validate all API inputs
- Implement proper CORS policies

## File Naming Conventions
- Components: PascalCase (e.g., `ProjectCard.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Hooks: camelCase with 'use' prefix (e.g., `useProjects.ts`)
- API Routes: kebab-case (e.g., `get-projects.ts`)
- Types: PascalCase with .types.ts suffix (e.g., `Project.types.ts`)

## Git Workflow
- Main branch: `main` (production-ready)
- Development branch: `dev`
- Feature branches: `feature/feature-name`
- Bug fixes: `fix/bug-description`
- Commit message format: `type(scope): description`
  - Types: feat, fix, docs, style, refactor, test, chore

## Testing Strategy
- Unit tests: Vitest
- Integration tests: Playwright
- E2E tests: Playwright
- API tests: Supertest
- Coverage target: 80%+

## Performance Considerations
- Implement proper caching strategies
- Use React.memo for expensive components
- Lazy load routes and components
- Optimize images with Next.js Image
- Use database indexes
- Implement pagination for large datasets
- Use React Query for API caching

## Accessibility
- Follow WCAG 2.1 AA standards
- Implement keyboard navigation
- Use semantic HTML
- Provide ARIA labels
- Test with screen readers
- Ensure proper color contrast

## Environment Variables
```env
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..." # For migrations

# NextAuth
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"

# Redis (optional)
REDIS_URL="..."

# File Storage (optional)
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_REGION="..."
AWS_S3_BUCKET="..."

# Application
NODE_ENV="development"
```

## Common Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### Database
```bash
npx prisma generate      # Generate Prisma client
npx prisma migrate dev   # Run migrations (dev)
npx prisma migrate deploy # Run migrations (prod)
npx prisma studio        # Open Prisma Studio
npx prisma db seed       # Seed database
npx prisma db push       # Push schema changes (dev only)
```

### Testing
```bash
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run E2E tests
npm run test:coverage # Generate coverage report
```

## API Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": { ... }
  }
}
```

## When Working with AI (Cursor)

### Best Practices
1. Always provide context about the feature you're building
2. Reference existing patterns in the codebase
3. Ask for TypeScript types to be generated
4. Request proper error handling
5. Ask for loading states in UI components
6. Request validation schemas with Zod
7. Ask for responsive designs with Tailwind
8. Request accessibility features
9. Ask for proper TypeScript documentation

### Example Prompts
- "Create a new API route for managing projects with proper validation"
- "Build a Kanban board component with drag-and-drop functionality"
- "Implement authentication middleware for API routes"
- "Create a Prisma schema for the time tracking feature"
- "Build a dashboard with project statistics and charts"

## Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Query](https://tanstack.com/query/latest)
- [NextAuth.js](https://next-auth.js.org/)

## Troubleshooting

### Common Issues
1. **Prisma Client not found**: Run `npx prisma generate`
2. **Migration errors**: Check database connection and schema
3. **Module not found**: Run `npm install`
4. **Type errors**: Ensure all imports are correct and run `npm run type-check`
5. **Environment variables**: Ensure `.env` file exists and is properly formatted

## Key Files Reference

### Authentication & RBAC
- `src/lib/auth.ts` - NextAuth configuration
- `src/lib/rbac.ts` - Role-based access control logic
- `src/lib/api-auth.ts` - API authentication helpers
- `src/hooks/useRBAC.ts` - React hook for RBAC
- `src/middleware.ts` - Route protection middleware
- `src/types/next-auth.d.ts` - NextAuth type extensions

### UI Components
- `src/components/ui/*` - shadcn/ui components (17 total)
- `src/components/shared/DataTable.tsx` - Reusable data table
- `src/components/shared/FormField.tsx` - Form field wrappers
- `src/components/shared/ConfirmDialog.tsx` - Confirmation dialogs
- `src/components/shared/RoleGate.tsx` - RBAC component gates

### Configuration
- `next.config.mjs` - Next.js config (ESM)
- `postcss.config.cjs` - PostCSS config (CommonJS)
- `tailwind.config.ts` - Tailwind with CSS variables
- `components.json` - shadcn/ui configuration

### Documentation
- `PHASE1_COMPLETE.md` - Authentication implementation details
- `RBAC_IMPLEMENTATION.md` - RBAC complete guide
- `PHASE2_COMPLETE.md` - UI components documentation
- `DATABASE_SETUP.md` - Database setup for Mac
- `TROUBLESHOOTING.md` - Common issues and solutions

## Demo Credentials

After seeding (`npm run db:seed`):
- **Admin:** admin@promastreet.com / admin123
- **Project Manager:** pm@promastreet.com / pm123
- **Developer:** dev1@promastreet.com / dev123
- **Designer:** dev2@promastreet.com / dev123
- **Client:** client@example.com / client123

---

**Last Updated**: November 20, 2025
**Current Status**: Phase 2 Complete (Auth + UI Components)
**Next Phase**: Phase 3 - Project Management
**Version**: 0.2.0

