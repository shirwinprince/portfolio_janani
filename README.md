# Janani R – Portfolio (React + Vite + Tailwind)
## Before running
1. Put your photo at `public/images/profile.png` (initials "JR" show if missing).
2. Put your resume at `public/resume.pdf` (Download Resume button uses it).
## Run (VS Code terminal)
    npm install
    npm run dev      # http://localhost:5173
    npm run build    # production build
## GitHub
    git init && git add . && git commit -m "Portfolio"
    git branch -M main
    git remote add origin https://github.com/<user>/<repo>.git
    git push -u origin main
## Vercel
Import the repo at vercel.com → Framework: Vite (auto) → Build `npm run build`, Output `dist` → Deploy.
