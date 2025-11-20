# Troubleshooting Guide - ProMaStreet

## Common Warnings & Errors with Next.js 15 + React 19

### ✅ Fixed: `require is not defined` in tailwind.config.ts

**Error:**
```
Module build failed: UnhandledSchemeError: Reading from "node:..." is not handled by plugins
```
or
```
require is not defined in ES module scope
```

**Cause:** Using `require()` in Tailwind config with Next.js 15 ESM mode.

**Fix Applied:** Changed from:
```typescript
plugins: [require('tailwindcss-animate')]
```
to:
```typescript
import tailwindcssAnimate from 'tailwindcss-animate'
// ...
plugins: [tailwindcssAnimate]
```

---

## Common React 19 Warnings (Can Be Ignored)

### 1. ⚠️ Async Component Warnings
```
Warning: async/await is not yet supported in Client Components
```

**Cause:** React 19 has better async support but still shows warnings during development.

**Solution:** This is informational only. Your app works fine. These warnings will be reduced in future React 19 updates.

---

### 2. ⚠️ Font Optimization Warnings
```
Warning: Google Fonts optimization may cause layout shift
```

**Cause:** Next.js font optimization with React 19.

**Solution:** Already handled correctly in the code. This is just a development warning.

---

### 3. ⚠️ Hydration Warnings (If You See Them)
```
Warning: Text content did not match. Server: "..." Client: "..."
```

**Common Causes:**
- Using Date objects that differ between server and client
- Browser extensions modifying the DOM
- Conditional rendering based on `window` or `document`

**Solution:** 
```typescript
'use client' // Add to components that use browser APIs

const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])
if (!mounted) return null
```

---

## ESLint Warnings (Safe to Ignore During Development)

### ⚠️ ESLint Cache Warnings
```
Warning: ESLint configuration changed
```

**Solution:**
```bash
rm -rf .next
npm run dev
```

---

## Prisma Warnings (Normal)

### ⚠️ Prisma Client Generation
```
warn(prisma-client) Already required somewhere else
```

**Cause:** Prisma client is imported multiple times in development due to Hot Module Replacement.

**Solution:** This is normal in development. Use the singleton pattern (already implemented in `src/lib/prisma.ts`).

---

## Next.js Development Warnings (Can Be Ignored)

### ⚠️ Fast Refresh
```
[Fast Refresh] rebuilding
```

**Cause:** Next.js hot reloading your changes.

**Solution:** This is normal. It means your changes are being applied.

---

### ⚠️ Experimental Features
```
Experimental features enabled
```

**Cause:** Using newer Next.js features.

**Solution:** These are stable in Next.js 15. Safe to ignore.

---

## Build Warnings

### ⚠️ Bundle Size Warnings
```
Warning: Large page bundles detected
```

**When:** Production builds.

**Solution:**
1. Use dynamic imports for large components:
```typescript
const HeavyComponent = dynamic(() => import('./HeavyComponent'))
```

2. Check bundle analyzer:
```bash
npm install --save-dev @next/bundle-analyzer
```

---

## Database Connection Warnings

### ⚠️ Multiple Prisma Clients
```
warn(prisma-client) There are already 10 instances of Prisma Client
```

**Cause:** Hot reloading in development creates multiple instances.

**Solution:** Already handled with singleton pattern. Safe in production.

---

### ❌ Database Connection Failed
```
PrismaClientInitializationError: Can't reach database server
```

**Solution:**
```bash
# Check if database is running
docker ps | grep promastreet-db

# If not running, start it
docker start promastreet-db

# Or with docker-compose
docker-compose up -d
```

---

## CSS/Tailwind Warnings

### ⚠️ Unknown at-rule @tailwind
```
Unknown at rule @tailwind
```

**Cause:** IDE doesn't recognize Tailwind directives.

**Solution:** Install recommended VSCode extensions:
- Tailwind CSS IntelliSense
- PostCSS Language Support

---

### ⚠️ CSS Variable Not Defined
```
Property '--variable' is not defined
```

**Cause:** CSS variables defined in globals.css.

**Solution:** Variables are in `src/app/globals.css` - already configured correctly.

---

## TypeScript Warnings

### ⚠️ Implicit Any Types
```
Parameter 'x' implicitly has an 'any' type
```

**Solution:** Add type annotations:
```typescript
// Before
function handler(req, res) { }

// After
function handler(req: NextRequest, res: NextResponse) { }
```

---

### ⚠️ Unused Variables
```
'x' is declared but its value is never read
```

**Solution:** Prefix with underscore if intentionally unused:
```typescript
const handleClick = (_event: MouseEvent) => { }
```

---

## Performance Warnings (Production Only)

### ⚠️ Large Bundle Size
```
Compiled with warnings. Bundle size exceeds 250 KB
```

**Solutions:**
1. Use dynamic imports
2. Remove unused dependencies
3. Enable tree-shaking
4. Use Next.js Image optimization

---

## How to Clear All Warnings

### 1. Clear Next.js Cache
```bash
rm -rf .next
```

### 2. Clear Node Modules
```bash
rm -rf node_modules package-lock.json
npm install
```

### 3. Restart Dev Server
```bash
npm run dev
```

### 4. Clear Browser Cache
- Chrome/Edge: Ctrl+Shift+Delete
- Firefox: Ctrl+Shift+Delete
- Safari: Cmd+Option+E

---

## Expected Warnings (Completely Normal)

These warnings are **expected during development** with Next.js 15 + React 19:

✅ **Fast Refresh rebuilding** - Normal hot reloading  
✅ **Compiled in XXXms** - Build time info  
✅ **Using experimental features** - Next.js 15 features are stable  
✅ **Prisma client already exists** - Hot reload creates multiple instances  
✅ **Font optimization** - Next.js optimizing fonts  

---

## Debugging Steps

### Step 1: Identify the Warning Type
- **Error** (red) - Must fix
- **Warning** (yellow) - Can often ignore
- **Info** (blue/gray) - Just informational

### Step 2: Check if App Still Works
If the app works despite warnings, most are safe to ignore during development.

### Step 3: Production Build Test
```bash
npm run build
```
This shows only critical issues that affect production.

### Step 4: Check Console
Open browser DevTools (F12) and check Console tab for client-side errors.

---

## When to Worry

❌ **Red Errors** - App won't work, must fix  
⚠️ **Build Failures** - Can't deploy, must fix  
⚠️ **Runtime Errors** - App crashes, must fix  

## When NOT to Worry

✅ **Yellow Warnings** - Often informational  
✅ **Development-only Warnings** - Won't appear in production  
✅ **Deprecation Warnings** - Code still works  

---

## Quick Fixes Reference

| Issue | Command |
|-------|---------|
| Clear cache | `rm -rf .next` |
| Reinstall deps | `rm -rf node_modules && npm install` |
| Regenerate Prisma | `npm run db:generate` |
| Restart server | Stop (Ctrl+C) then `npm run dev` |
| Check types | `npm run type-check` |
| Check lint | `npm run lint` |

---

## Still Having Issues?

### 1. Check Terminal Output
Look for the actual error message (usually at the top or bottom).

### 2. Check Browser Console
Press F12 and look in the Console tab.

### 3. Check Network Tab
F12 → Network tab to see if API calls are failing.

### 4. Verify Database
```bash
npm run db:studio
```
Opens Prisma Studio to check database connection.

### 5. Test API Endpoint
```bash
curl http://localhost:3000/api/health
```
Should return success with database connected.

---

## Need More Help?

1. **Copy the exact error message**
2. **Note what you were doing when it occurred**
3. **Check if it happens on a fresh page load**
4. **Try in incognito mode** (rules out browser extensions)

Most warnings in Next.js 15 + React 19 development are informational and don't affect functionality. Focus on red errors, not yellow warnings! ✅

