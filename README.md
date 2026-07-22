# SynTx

SynTx is a coding platform built with Bun, React, Prisma, PostgreSQL, and Redis.

## Project Structure

- `frontend/` - React app with the compiler UI, auth screens, and Monaco editor.
- `backend/` - Bun + Express API for authentication and submission data.
- `worker/` - Background worker that processes submission results.

## Tech Stack

- Bun
- React 19
- Tailwind CSS v4
- Prisma
- PostgreSQL
- Redis
- Express

## Prerequisites

Make sure these are available before starting the app:

- Bun
- PostgreSQL
- Redis

## Install

Install dependencies for each package:

```bash
cd frontend && bun install
cd ../backend && bun install
cd ../worker && bun install
```

## Environment

- `backend` expects `DATABASE_URL` in its environment.
- `worker` also needs `DATABASE_URL` for Prisma.
- Add any Redis connection values required by your local setup in the relevant package.

## Run

Start each service in a separate terminal:

### Frontend

```bash
cd frontend
bun dev
```

### Backend

```bash
cd backend
bun run dev
```

### Worker

```bash
cd worker
bun run index.ts
```

## Prisma

Useful Prisma commands for the backend and worker:

```bash
cd backend
bunx prisma generate
bunx prisma migrate dev

cd ../worker
bunx prisma generate
```

## Notes

- The frontend uses a custom dark compiler layout with scrollable input and output panes.
- The backend stores users and submissions in PostgreSQL through Prisma.
- The worker updates submission records after execution completes.
