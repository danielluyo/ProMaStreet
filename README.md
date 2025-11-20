# ProMaStreet - Project Management System

A modern, web-based project management system designed for software consulting firms. Manage multiple projects, clients, and teams efficiently from a single platform.

## 🚀 Features

- **Multi-Project Management** - Handle multiple projects simultaneously
- **Client Management** - Organize and track client information
- **Team Collaboration** - Assign tasks and manage team resources
- **Time Tracking** - Track billable and non-billable hours
- **Budget Management** - Monitor project budgets and expenses
- **Real-time Updates** - Get instant notifications and updates
- **Reporting & Analytics** - Generate comprehensive reports

## 🛠️ Tech Stack

- **Frontend**: React 18, Next.js 14 (App Router), TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes, Node.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **State Management**: Zustand, TanStack Query
- **Real-time**: Socket.io

## 📋 Prerequisites

- Node.js 18+ and npm 9+
- PostgreSQL 14+
- Git

## 🏁 Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd ProMaStreet

# Install dependencies
npm install
```

### 2. Database Setup

See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for detailed instructions on setting up PostgreSQL.

Quick start with Docker:
```bash
docker run --name promastreet-db \
  -e POSTGRES_PASSWORD=yourpassword \
  -e POSTGRES_DB=promastreet \
  -p 5432:5432 \
  -d postgres:16-alpine
```

### 3. Environment Configuration

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your database credentials
# At minimum, update DATABASE_URL and NEXTAUTH_SECRET
```

Generate a secure NextAuth secret:
```bash
openssl rand -base64 32
```

### 4. Database Migration

```bash
# Generate Prisma client
npm run db:generate

# Run migrations
npm run db:migrate

# (Optional) Seed the database
npm run db:seed
```

### 5. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
ProMaStreet/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/         # Authentication pages
│   │   ├── (dashboard)/    # Dashboard pages
│   │   ├── api/            # API routes
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   │   ├── ui/            # UI components (shadcn)
│   │   ├── layout/        # Layout components
│   │   ├── features/      # Feature components
│   │   └── shared/        # Shared components
│   ├── lib/               # Utilities and configs
│   ├── hooks/             # Custom React hooks
│   ├── store/             # Zustand stores
│   └── types/             # TypeScript types
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── migrations/        # Database migrations
└── public/                # Static files
```

## 🧪 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
npm run format       # Format code with Prettier

# Database commands
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
npm run db:push      # Push schema changes (dev only)
npm run db:studio    # Open Prisma Studio
npm run db:seed      # Seed database

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## 🔐 Authentication

The application uses NextAuth.js for authentication. Default roles:
- **Admin** - Full system access
- **Project Manager** - Manage projects and teams
- **Team Member** - View assigned tasks and projects
- **Client** - View project progress

## 📚 Documentation

- [AI Instructions](./AI_INSTRUCTIONS.md) - Development guidelines for AI assistance
- [Database Setup](./DATABASE_SETUP.md) - Detailed database configuration
- [API Documentation](./docs/API.md) - API endpoints (coming soon)

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'feat: add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For questions or issues, please contact the development team.

---

Built with ❤️ for software consulting teams

