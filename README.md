# Flutter Learning Platform

Next.js (App Router) + React + Tailwind CSS + ESLint. JavaScript only.

## Run locally
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start

## Structure (src/)
- app/                Routes, layouts, global styles (App Router)
- components/ui/      Reusable presentational building blocks
- components/layout/  Header, footer, shells shared across pages
- features/           Feature modules (one folder per feature)
- hooks/              Reusable React hooks
- lib/                Helpers and service clients
- constants/          App-wide constants
- config/             App configuration (site.js)

## Import aliases
@/*, @/components/*, @/features/*, @/hooks/*, @/lib/*, @/constants/*, @/config/*
