# SynTx Project

A full-stack LeetCode-style practice app built with Bun, React, Prisma, PostgreSQL, and Redis.

## Project Structure

- `frontend/` - React app with Tailwind UI for signup, auth, and the code editor experience.
- `backend/` - Bun + Express API with Prisma and PostgreSQL.
- `worker/` - Background worker for handling submission-related jobs.

## Tech Stack

- Bun
- React 19
- Tailwind CSS v4
- Prisma
- PostgreSQL
- Redis
- Express

## Prerequisites

Before running the project, make sure you have:

- Bun installed
- PostgreSQL running and configured
- Redis running

## Setup

Install dependencies in each app:

```bash
cd frontend && bun install
cd ../backend && bun install
cd ../worker && bun install
```

## Environment

The backend expects a `DATABASE_URL` value in its environment. Check `backend/.env` for the connection string format.

If you are using Redis with custom settings, configure those in the relevant app before starting it.

## Running the Apps

Run each service in its own terminal:

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

## Backend Database

The backend uses Prisma with the schema in `backend/prisma/schema.prisma`.

Useful Prisma commands:

```bash
cd backend
bunx prisma generate
bunx prisma migrate dev
```

## Notes

- The frontend uses a custom dark auth UI inspired by modern deployment dashboards.
- The backend exposes authentication and submission-related endpoints.
- The worker is intended for asynchronous submission handling.
