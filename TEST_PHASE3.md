# Phase 3 Testing Checklist

## Quick Start

```bash
# 1. Ensure database is running
docker ps | grep promastreet-db

# 2. If not running, start it
docker start promastreet-db

# 3. Apply latest migrations (if needed)
npm run db:generate
npm run db:migrate

# 4. Start dev server
npm run dev
```

## Test URLs

- Login: http://localhost:3000/auth/login
- Projects List: http://localhost:3000/projects
- Create Project: http://localhost:3000/projects/new
- Dashboard: http://localhost:3000/dashboard

## Quick Test Flow (5 minutes)

### ✅ Step 1: Login as Project Manager
```
Email: pm@promastreet.com
Password: pm123
```

### ✅ Step 2: View Projects
- Click "Projects" in sidebar
- ✅ Should see existing project(s)
- ✅ Status filter dropdown works
- ✅ Search box filters in real-time

### ✅ Step 3: View Project Detail
- Click on "E-Commerce Platform Redesign" (or any project)
- ✅ See 4 stat cards (Tasks, Progress, Budget, Time)
- ✅ See project description and timeline
- ✅ See client information
- ✅ See team members
- ✅ See recent tasks

### ✅ Step 4: Create New Project
- Click "New Project" button
- Fill in form:
  - Name: "Mobile App Development"
  - Description: "iOS and Android app for client"
  - Status: "Planning"
  - Client: Select "TechCorp Inc."
  - Team: Select "Frontend Team"
  - Start Date: Today
  - End Date: 3 months from now
  - Budget: 75000
- Click "Create Project"
- ✅ Should redirect to new project detail page
- ✅ All data displayed correctly

### ✅ Step 5: Edit Project
- From project detail, click "Edit Project"
- Change status to "Active"
- Update budget to 80000
- Click "Update Project"
- ✅ Should redirect back to detail page
- ✅ Changes should be visible

### ✅ Step 6: Test RBAC as Client
- Logout (bottom of sidebar)
- Login as client:
  ```
  Email: client@example.com
  Password: client123
  ```
- Go to Projects
- ✅ Should only see projects for TechCorp Inc.
- ✅ No "New Project" button visible
- ✅ Can view project details
- ✅ No edit button on detail page

### ✅ Step 7: Test Delete (Admin Only)
- Logout and login as admin:
  ```
  Email: admin@promastreet.com
  Password: admin123
  ```
- Go to Projects
- Click actions menu (⋮) on "Mobile App Development"
- Click "Delete Project"
- ✅ Confirmation dialog appears
- Click "Confirm"
- ✅ Project removed from list

## API Testing (Optional)

Test the API endpoints directly:

```bash
# 1. Login and get session cookie (use browser DevTools → Application → Cookies)
# Copy the next-auth.session-token value

# 2. Test API endpoints
curl http://localhost:3000/api/projects \
  -H "Cookie: next-auth.session-token=YOUR_TOKEN"

curl http://localhost:3000/api/clients \
  -H "Cookie: next-auth.session-token=YOUR_TOKEN"

curl http://localhost:3000/api/teams \
  -H "Cookie: next-auth.session-token=YOUR_TOKEN"
```

## Expected Results Summary

- ✅ All users can view projects (filtered by role)
- ✅ Only PM and Admin can create projects
- ✅ Only PM and Admin can edit projects
- ✅ Only Admin can delete projects
- ✅ Clients only see their own projects
- ✅ Forms validate input with clear error messages
- ✅ DataTable supports sorting, filtering, and search
- ✅ Budget tracking displays correctly
- ✅ Toast notifications for success/error
- ✅ Responsive design works on mobile

## Troubleshooting

### "Cannot connect to database"
```bash
docker start promastreet-db
# Wait 5 seconds
npm run dev
```

### "Project not found"
```bash
# Reseed database
npm run db:seed
```

### "401 Unauthorized"
- Clear cookies in browser
- Login again

### Module errors
```bash
npm install
npm run dev
```

## Success Criteria

✅ All 7 test steps completed without errors
✅ RBAC working correctly for all roles
✅ No console errors in browser
✅ No API errors (check Network tab)
✅ Data persists after page refresh

---

**If all tests pass, Phase 3 is complete! 🎉**

**Next:** Proceed to Phase 4 - Task Management

