# Project Management Backend

NestJS backend API for the Project Management application with MongoDB.

## Features

- **RESTful API** for Projects, Tasks, and Team Members
- **MongoDB** integration with Mongoose
- **Validation** using class-validator
- **CORS** enabled for frontend integration
- **TypeScript** for type safety

## Prerequisites

- Node.js 18+
- MongoDB installed and running locally, or a MongoDB connection string

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/project-management
PORT=3001
```

## Running the Application

### Development Mode
```bash
npm run start:dev
```

### Production Mode
```bash
npm run build
npm run start:prod
```

## Seeding the Database

To populate the database with initial data:

```bash
npm run seed
```

This will create:
- 6 team members
- 5 projects
- 13 tasks

## API Endpoints

### Projects
- `GET /projects` - Get all projects
- `GET /projects/:id` - Get a single project
- `POST /projects` - Create a new project
- `PATCH /projects/:id` - Update a project
- `DELETE /projects/:id` - Delete a project

### Tasks
- `GET /tasks` - Get all tasks
- `GET /tasks/:id` - Get a single task
- `POST /tasks` - Create a new task
- `PATCH /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

### Team Members
- `GET /team-members` - Get all team members
- `GET /team-members/:id` - Get a single team member
- `POST /team-members` - Create a new team member
- `PATCH /team-members/:id` - Update a team member
- `DELETE /team-members/:id` - Delete a team member

## Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Linting

```bash
npm run lint
```

## Project Structure

```
backend/
├── src/
│   ├── projects/
│   │   ├── dto/
│   │   │   ├── create-project.dto.ts
│   │   │   └── update-project.dto.ts
│   │   ├── project.schema.ts
│   │   ├── projects.controller.ts
│   │   ├── projects.module.ts
│   │   └── projects.service.ts
│   ├── tasks/
│   │   ├── dto/
│   │   │   ├── create-task.dto.ts
│   │   │   └── update-task.dto.ts
│   │   ├── task.schema.ts
│   │   ├── tasks.controller.ts
│   │   ├── tasks.module.ts
│   │   └── tasks.service.ts
│   ├── team-members/
│   │   ├── dto/
│   │   │   ├── create-team-member.dto.ts
│   │   │   └── update-team-member.dto.ts
│   │   ├── team-member.schema.ts
│   │   ├── team-members.controller.ts
│   │   ├── team-members.module.ts
│   │   └── team-members.service.ts
│   ├── app.module.ts
│   ├── main.ts
│   └── seed.ts
└── test/
```
