# ProMaStreet - Project Structure

Complete overview of the project structure created for your Project Management system.

## 📁 Directory Structure

```
ProMaStreet/
│
├── .vscode/                          # VSCode settings
│   ├── settings.json                 # Editor configuration
│   └── extensions.json               # Recommended extensions
│
├── prisma/                           # Database ORM
│   ├── schema.prisma                 # Database schema definition
│   ├── seed.ts                       # Sample data seeding
│   └── migrations/                   # Database migrations (generated)
│
├── public/                           # Static assets
│   └── .gitkeep
│
├── src/                              # Source code
│   ├── app/                          # Next.js App Router
│   │   ├── (auth)/                   # Auth route group (login, register)
│   │   │   └── .gitkeep
│   │   ├── (dashboard)/              # Dashboard route group
│   │   │   └── .gitkeep
│   │   ├── api/                      # API routes
│   │   │   └── health/               # Health check endpoint
│   │   │       └── route.ts
│   │   ├── globals.css               # Global styles + Tailwind
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Home page
│   │
│   ├── components/                   # React components
│   │   ├── ui/                       # shadcn/ui components
│   │   │   └── .gitkeep
│   │   ├── layout/                   # Layout components (Header, Sidebar)
│   │   │   └── .gitkeep
│   │   ├── features/                 # Feature-specific components
│   │   │   └── .gitkeep
│   │   └── shared/                   # Reusable components
│   │       └── .gitkeep
│   │
│   ├── hooks/                        # Custom React hooks
│   │   └── .gitkeep
│   │
│   ├── lib/                          # Utilities and configurations
│   │   ├── prisma.ts                 # Prisma client instance
│   │   ├── utils.ts                  # Helper functions
│   │   └── validations/              # Zod validation schemas
│   │       └── .gitkeep
│   │
│   ├── store/                        # Zustand state stores
│   │   └── .gitkeep
│   │
│   └── types/                        # TypeScript type definitions
│       └── index.ts                  # Common types
│
├── .eslintrc.json                    # ESLint configuration
├── .gitignore                        # Git ignore rules
├── .prettierrc                       # Prettier formatting rules
├── components.json                   # shadcn/ui configuration
├── docker-compose.yml                # Docker services (PostgreSQL + Redis)
├── next.config.js                    # Next.js configuration
├── package.json                      # Dependencies and scripts
├── postcss.config.js                 # PostCSS configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
│
├── AI_INSTRUCTIONS.md                # 📘 AI development guidelines
├── DATABASE_SETUP.md                 # 📘 Database setup instructions
├── NEXT_STEPS.md                     # 📘 Implementation roadmap
├── PROJECT_STRUCTURE.md              # 📘 This file
└── README.md                         # 📘 Project overview

```

## 🗄️ Database Schema

The Prisma schema includes the following models:

### Core Models
- **User** - System users with roles (Admin, PM, Team Member, Client)
- **Client** - Client company information
- **Project** - Client projects with status, budget, dates
- **Task** - Project tasks with status, priority, assignments
- **TimeEntry** - Time tracking records

### Team Management
- **Team** - Team groupings
- **TeamMember** - Team membership (User ↔ Team)
- **ProjectMember** - Project assignments (User ↔ Project)
- **ProjectTeam** - Team assignments to projects

### Collaboration
- **Comment** - Comments on projects/tasks
- **Attachment** - File attachments
- **Notification** - User notifications
- **ActivityLog** - Audit trail of all actions

### Enums
- `UserRole`: ADMIN, PROJECT_MANAGER, TEAM_MEMBER, CLIENT
- `ProjectStatus`: PLANNING, IN_PROGRESS, ON_HOLD, COMPLETED, CANCELLED
- `ProjectPriority`: LOW, MEDIUM, HIGH, URGENT
- `TaskStatus`: TODO, IN_PROGRESS, IN_REVIEW, COMPLETED, CANCELLED
- `TaskPriority`: LOW, MEDIUM, HIGH, URGENT

## 📦 Key Dependencies

### Frontend
- `next@14.2.15` - React framework
- `react@18.3.1` - UI library
- `tailwindcss@3.4.14` - Styling
- `zustand@4.5.5` - State management
- `@tanstack/react-query@5.59.0` - Data fetching
- `react-hook-form@7.53.0` - Form handling
- `zod@3.23.8` - Validation
- `lucide-react@0.454.0` - Icons

### Backend
- `@prisma/client@5.22.0` - Database ORM
- `next-auth@4.24.10` - Authentication
- `bcryptjs@2.4.3` - Password hashing
- `socket.io@4.8.0` - Real-time features

### Development
- `typescript@5.6.3` - Type safety
- `eslint@8.57.1` - Code linting
- `prettier@3.3.3` - Code formatting
- `vitest@2.1.4` - Testing

## 🎨 UI Component System

The project is configured to use **shadcn/ui** components:

```bash
# Add components as needed:
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add table
npx shadcn@latest add form
npx shadcn@latest add select
npx shadcn@latest add tabs
npx shadcn@latest add avatar
```

Components will be added to `src/components/ui/`

## 🔧 Configuration Files

### TypeScript Configuration (`tsconfig.json`)
- Strict mode enabled
- Path aliases: `@/*` → `./src/*`
- Next.js plugin enabled

### Tailwind Configuration (`tailwind.config.ts`)
- CSS variables for theming
- Dark mode support with class strategy
- Custom color system (primary, secondary, accent, etc.)
- Border radius variables

### ESLint Configuration (`.eslintrc.json`)
- Next.js recommended rules
- TypeScript strict rules
- Custom rules for unused vars and console logs

### Prettier Configuration (`.prettierrc`)
- No semicolons
- Single quotes
- 2-space indentation
- 100 character line width

## 🚀 Available Scripts

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
npm run format       # Format code with Prettier
```

### Database
```bash
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
npm run db:push      # Push schema changes (dev only)
npm run db:studio    # Open Prisma Studio GUI
npm run db:seed      # Seed database with sample data
```

### Testing
```bash
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

## 🗃️ Database Options

Three setup options are provided:

### 1. Docker (Recommended)
```bash
docker-compose up -d
```
Includes PostgreSQL + Redis

### 2. Docker CLI
```bash
docker run --name promastreet-db \
  -e POSTGRES_USER=promastreet \
  -e POSTGRES_PASSWORD=dev_password_123 \
  -e POSTGRES_DB=promastreet \
  -p 5432:5432 \
  -d postgres:16-alpine
```

### 3. Multipass (VM)
See `DATABASE_SETUP.md` for detailed instructions

## 📋 Sample Data

The seed file creates:
- 1 Admin user (`admin@promastreet.com`)
- 1 Project Manager (`pm@promastreet.com`)
- 2 Team Members (`dev1@promastreet.com`, `dev2@promastreet.com`)
- 1 Client user (`client@example.com`)
- 1 Client company (TechCorp Inc.)
- 1 Team (Frontend Team)
- 1 Sample Project (E-Commerce Platform Redesign)
- 3 Sample Tasks
- Time entries
- Comments
- Notifications

**Default password for all users**: `[role]123` (e.g., `admin123`, `pm123`, `dev123`)

## 🎯 Next Implementation Steps

Refer to `NEXT_STEPS.md` for the complete development roadmap.

### Immediate Tasks:
1. ✅ Install dependencies: `npm install`
2. ✅ Set up PostgreSQL (Docker/Multipass)
3. ✅ Configure `.env` file
4. ✅ Run migrations: `npm run db:migrate`
5. ✅ Seed database: `npm run db:seed`
6. ✅ Start dev server: `npm run dev`

### Phase 1 Development:
1. Set up NextAuth.js for authentication
2. Create login/register pages
3. Build dashboard layout
4. Implement projects CRUD
5. Create task Kanban board

## 📚 Documentation Files

- **README.md** - Project overview and quick start
- **AI_INSTRUCTIONS.md** - Comprehensive development guidelines for AI assistance
- **DATABASE_SETUP.md** - Detailed database setup for all platforms
- **NEXT_STEPS.md** - Development roadmap and next actions
- **PROJECT_STRUCTURE.md** - This file!

## 🔐 Environment Variables Required

```env
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Authentication
NEXTAUTH_SECRET="..."          # Generate with: openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"

# Optional
REDIS_URL="redis://localhost:6379"
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_REGION="..."
AWS_S3_BUCKET="..."
```

## 🎨 Color System

The project uses CSS variables for easy theming:

### Light Mode
- Primary: Blue (#3B82F6)
- Secondary: Gray
- Accent: Blue-gray
- Destructive: Red

### Dark Mode
Automatically switches when system dark mode is enabled.

## 🛠️ VSCode Integration

Recommended extensions are configured in `.vscode/extensions.json`:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Prisma
- TypeScript

Settings are pre-configured for:
- Format on save
- ESLint auto-fix
- Tailwind CSS class completion

## 📊 Project Statistics

- **Total Files Created**: 30+
- **Database Models**: 11
- **API Routes**: 1 (health check)
- **TypeScript**: 100%
- **Dependencies**: 30+
- **Lines of Schema**: ~300

---

**Ready to start developing! Follow NEXT_STEPS.md to begin building features. 🚀**

