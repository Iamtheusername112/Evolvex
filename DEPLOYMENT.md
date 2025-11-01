# Deployment Guide for EvolveX

This guide will help you deploy EvolveX to production.

## Pre-Deployment Checklist

### 1. Environment Variables

Create a `.env.local` file (or set in your hosting platform) with the following:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_your_production_key
CLERK_SECRET_KEY=sk_live_your_production_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key

# Next.js
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

**Important:** Use production keys for Clerk and Supabase, not test keys!

### 2. Clerk Setup

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a production application
3. Copy your publishable key and secret key
4. Configure sign-in/sign-up methods
5. Set up redirect URLs:
   - Sign-in redirect: `https://your-domain.com/dashboard`
   - Sign-up redirect: `https://your-domain.com/dashboard`
   - Sign-out redirect: `https://your-domain.com`

### 3. Supabase Setup

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Create a new project or use existing
3. Go to SQL Editor and run the schema from `lib/supabase/schema.sql`
4. Copy your project URL and anon key
5. Enable Row Level Security (RLS) policies are already in the schema
6. Set up database backups

### 4. Database Schema

Run the SQL schema in your Supabase SQL Editor:

```bash
# Copy contents of lib/supabase/schema.sql and execute in Supabase SQL Editor
```

This creates:
- User profiles table
- Trading pairs table
- Wallets table
- Orders table
- Transactions table
- Market data table
- Proper indexes and RLS policies

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

3. **Configure Custom Domain** (optional):
   - Add your domain in Vercel project settings
   - Update Clerk redirect URLs with your custom domain

### Option 2: Other Platforms

#### Netlify
- Connect your GitHub repo
- Build command: `npm run build`
- Publish directory: `.next`
- Add environment variables in Netlify dashboard

#### Railway
- Connect your GitHub repo
- Railway auto-detects Next.js
- Add environment variables in Railway dashboard

#### Self-Hosted (Docker)

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

## Post-Deployment

### 1. Verify Environment Variables
- Check that all environment variables are set correctly
- Test authentication flow
- Verify database connections

### 2. Test Critical Features
- [ ] User sign-up/sign-in works
- [ ] Dashboard loads correctly
- [ ] Trading interface displays
- [ ] Portfolio shows data
- [ ] All routes are accessible

### 3. Set Up Monitoring
- Enable error tracking (e.g., Sentry)
- Set up uptime monitoring
- Configure logging

### 4. Security Checklist
- [ ] All API keys are production keys
- [ ] RLS policies are enabled in Supabase
- [ ] HTTPS is enabled
- [ ] Environment variables are not exposed
- [ ] CORS is configured correctly

### 5. Performance Optimization
- Enable caching where appropriate
- Set up CDN for static assets
- Configure image optimization
- Monitor bundle size

## Database Initialization

After deploying, initialize your database with sample trading pairs:

```sql
-- Insert some trading pairs
INSERT INTO trading_pairs (symbol, base_asset, quote_asset, category, is_active)
VALUES
  ('BTC/USD', 'BTC', 'USD', 'crypto', true),
  ('ETH/USD', 'ETH', 'USD', 'crypto', true),
  ('EUR/USD', 'EUR', 'USD', 'forex', true),
  ('GBP/USD', 'GBP', 'USD', 'forex', true),
  ('USD/JPY', 'USD', 'JPY', 'forex', true),
  ('XRP/USD', 'XRP', 'USD', 'crypto', true),
  ('SOL/USD', 'SOL', 'USD', 'crypto', true),
  ('ADA/USD', 'ADA', 'USD', 'crypto', true);
```

## Troubleshooting

### Build Errors
- Check Node.js version (18+ required)
- Clear `.next` folder and rebuild
- Verify all dependencies are installed

### Authentication Issues
- Verify Clerk keys are correct
- Check redirect URLs match in Clerk dashboard
- Ensure middleware is working correctly

### Database Connection Issues
- Verify Supabase URL and keys
- Check RLS policies are not blocking queries
- Ensure database schema is created

### Performance Issues
- Enable Next.js production optimizations
- Check bundle size
- Optimize images and assets

## Support

For issues during deployment, check:
1. Application logs
2. Clerk dashboard logs
3. Supabase logs
4. Hosting platform logs

---

**Ready to go live!** 🚀

