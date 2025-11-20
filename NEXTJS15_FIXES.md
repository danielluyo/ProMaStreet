# Next.js 15 ESM Fix

## Issue You Encountered

**Error:** `ReferenceError: require is not defined`

**Cause:** Next.js 15 uses ES Modules (ESM) by default, but the config files were using CommonJS syntax.

## What I Fixed ✅

### 1. Converted `next.config.js` → `next.config.mjs`
**Changes:**
- ✅ Changed `module.exports` to `export default`
- ✅ Removed `swcMinify: true` (default in Next.js 15)
- ✅ Removed `experimental.serverActions` (stable in Next.js 15)
- ✅ Added `serverExternalPackages` for Prisma compatibility
- ✅ Renamed to `.mjs` for explicit ESM support

### 2. Converted `postcss.config.js` → `postcss.config.mjs`
**Changes:**
- ✅ Changed `module.exports` to `export default`
- ✅ Renamed to `.mjs` for explicit ESM support

## What You Need to Do

### Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

Now navigate to http://localhost:3000 and it should work!

## What to Expect

### Home Page (/)
You should see:
- ✅ "Welcome to ProMaStreet" heading
- ✅ Project description
- ✅ Two buttons: "Login" and "Register"
- ✅ Clean styling with Tailwind CSS

### API Health (/api/health)
Should continue to work:
```json
{
  "success": true,
  "message": "API is healthy",
  "database": "connected"
}
```

## Why This Happened

Next.js 15 made the following changes:
1. **Default to ESM** - Better for modern JavaScript
2. **Stricter module resolution** - More predictable builds
3. **Better tree-shaking** - Smaller bundles

The old CommonJS syntax (`module.exports`, `require()`) no longer works by default in config files.

## File Changes Summary

| Old File | New File | Syntax |
|----------|----------|--------|
| `next.config.js` | `next.config.mjs` | ESM (`export default`) |
| `postcss.config.js` | `postcss.config.mjs` | ESM (`export default`) |

## Other Files That Are ESM-Ready

These files already use ESM syntax (no changes needed):
- ✅ All files in `src/` directory
- ✅ All `.tsx` and `.ts` files
- ✅ `prisma/seed.ts` (uses `import` statements)
- ✅ `tailwind.config.ts` (TypeScript module)

## Troubleshooting

### If you still see the error:
1. **Stop the dev server completely** (Ctrl+C)
2. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   ```
3. **Restart:**
   ```bash
   npm run dev
   ```

### If build fails:
```bash
npm run build
```
Check the error output and ensure no other files are using `require()`.

### If Prisma errors occur:
```bash
npm run db:generate
```

## Next.js 15 Config Best Practices

### ✅ Use `.mjs` for config files
```javascript
// next.config.mjs
export default {
  // config here
}
```

### ✅ Use `import` instead of `require`
```javascript
// Old (CommonJS)
const plugin = require('some-plugin')

// New (ESM)
import plugin from 'some-plugin'
```

### ✅ Use `serverExternalPackages` for native modules
```javascript
// next.config.mjs
export default {
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
}
```

This prevents bundling issues with packages that use native bindings.

## Additional Next.js 15 Changes

### React 19 Updates
- `ref` is now a prop (no `forwardRef` needed in most cases)
- Better async component support
- Improved error handling

### Performance Improvements
- ✅ Faster build times with Turbopack
- ✅ Better caching
- ✅ Improved tree-shaking
- ✅ Smaller bundle sizes

### Removed Features
- ❌ No more `swcMinify` option (always enabled)
- ❌ `experimental.serverActions` moved to stable
- ❌ Some deprecated APIs removed

## References

- [Next.js 15 Release](https://nextjs.org/blog/next-15)
- [ES Modules Guide](https://nodejs.org/api/esm.html)
- [Next.js Config Docs](https://nextjs.org/docs/app/api-reference/next-config-js)

---

**Status:** Fixed! Restart your dev server and navigate to http://localhost:3000 ✅

