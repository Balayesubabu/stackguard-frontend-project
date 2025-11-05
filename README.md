# StackGuard Frontend - Vercel-ready

This is a lightweight Vite + React frontend implementing the requested user flow:
1. Sign-In / Sign-Up (Public)
2. Configuration (Protected; key length 100–1000 chars)
3. Dashboard (Protected)

## Run locally
1. Install Node 18+.
2. npm install
3. npm run dev
4. Open http://localhost:5173

## Deploy to Vercel
1. Push to GitHub.
2. In Vercel, import the repository.
3. Vercel will detect Vite. If prompted:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

Notes:
- This demo uses localStorage for authentication and the configuration key. For production, use a backend and secure storage.
