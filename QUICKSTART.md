# Quick Start Guide

Get EvolveX up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Environment Variables

1. Copy the example env file:
   ```bash
   cp env.local.example .env.local
   ```

2. Fill in your credentials:
   - **Clerk**: Get keys from [clerk.com](https://clerk.com)
   - **Supabase**: Get URL and key from [supabase.com](https://supabase.com)

## Step 3: Set Up Clerk

1. Create account at [clerk.com](https://clerk.com)
2. Create new application
3. Copy publishable key and secret key to `.env.local`
4. Set redirect URLs:
   - After sign-in: `http://localhost:3000/dashboard`
   - After sign-up: `http://localhost:3000/dashboard`

## Step 4: Set Up Supabase

1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Copy project URL and anon key to `.env.local`
4. Go to SQL Editor
5. Copy and run the SQL from `lib/supabase/schema.sql`
6. (Optional) Run the trading pairs seed data from DEPLOYMENT.md

## Step 5: Run the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## You're Ready! 🎉

- Sign up a new account
- Explore the dashboard
- Try the trading interface
- View your portfolio

## Need Help?

- Check `README.md` for detailed documentation
- Check `DEPLOYMENT.md` for production deployment
- Review environment variables in `.env.local`

---

**Note:** Make sure all environment variables are set before running the app!

