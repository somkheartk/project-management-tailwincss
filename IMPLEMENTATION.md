# Full-Stack Implementation Guide

## Overview

This document describes the complete implementation of the full-stack Project Management System with NestJS backend and MongoDB database.

## Architecture

### Frontend (Next.js 15)
- **Framework**: Next.js 15 with App Router
- **UI**: React 19 + Tailwind CSS 4
- **Data Fetching**: Client-side fetching with native fetch API
- **State Management**: React hooks (useState, useEffect)

### Backend (NestJS 11)
- **Framework**: NestJS 11
- **Database**: MongoDB 8 with Mongoose ODM
- **Validation**: class-validator & class-transformer
- **API Style**: RESTful API
- **Port**: 3001 (configurable via .env)

### Database (MongoDB)
- **Collections**: projects, tasks, teammembers
- **Indexes**: Default MongoDB indexes
- **Connection**: Mongoose with connection pooling

## API Endpoints

### Projects API
```
GET    /projects      - Get all projects
GET    /projects/:id  - Get single project
POST   /projects      - Create project
PATCH  /projects/:id  - Update project
DELETE /projects/:id  - Delete project
```

### Tasks API
```
GET    /tasks         - Get all tasks
GET    /tasks/:id     - Get single task
POST   /tasks         - Create task
PATCH  /tasks/:id     - Update task
DELETE /tasks/:id     - Delete task
```

### Team Members API
```
GET    /team-members      - Get all members
GET    /team-members/:id  - Get single member
POST   /team-members      - Create member
PATCH  /team-members/:id  - Update member
DELETE /team-members/:id  - Delete member
```

## Data Models

### Project Schema
```typescript
{
  name: string (required)
  description: string (required)
  status: 'active' | 'planning' | 'completed' | 'on-hold' (required)
  progress: number (0-100, required)
  dueDate: string (required)
  teamMembers: string[] (array of member IDs)
  color: string (required)
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

### Task Schema
```typescript
{
  title: string (required)
  description: string (required)
  status: 'todo' | 'in-progress' | 'review' | 'done' (required)
  priority: 'low' | 'medium' | 'high' | 'urgent' (required)
  assignee: string (member ID, required)
  projectId: string (project ID, required)
  dueDate: string (required)
  tags: string[] (array of tags)
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

### Team Member Schema
```typescript
{
  name: string (required)
  role: string (required)
  avatar: string (emoji, required)
  email: string (unique, required)
  tasksAssigned: number (default: 0)
  tasksCompleted: number (default: 0)
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

## Setup Instructions

### 1. Database Setup

#### Option A: Docker (Recommended)
```bash
docker run --name mongodb -d -p 27017:27017 mongo:8.0
```

#### Option B: Local MongoDB
Install MongoDB and ensure it's running on `localhost:27017`

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment (optional)
# Create .env file with:
# MONGODB_URI=mongodb://localhost:27017/project-management
# PORT=3001

# Seed the database with initial data
npm run seed

# Start development server
npm run start:dev
```

The backend will be available at `http://localhost:3001`

### 3. Frontend Setup

```bash
# From project root
npm install

# Configure environment (optional)
# Create .env.local file with:
# NEXT_PUBLIC_API_URL=http://localhost:3001

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Development Workflow

### Adding a New Feature

1. **Backend**:
   - Update schema in `backend/src/{module}/{module}.schema.ts`
   - Update DTOs in `backend/src/{module}/dto/`
   - Update service in `backend/src/{module}/{module}.service.ts`
   - Update controller if needed

2. **Frontend**:
   - Update types in `lib/api.ts`
   - Update API calls if new endpoints
   - Update UI components to use new data

### Database Seeding

The seed script populates the database with:
- 6 team members with different roles
- 5 projects with various statuses
- 13 tasks across different stages

To re-seed (clears and repopulates):
```bash
cd backend
npm run seed
```

## Testing

### Manual Testing

1. **Backend API**:
```bash
# Test projects endpoint
curl http://localhost:3001/projects

# Test tasks endpoint
curl http://localhost:3001/tasks

# Test team members endpoint
curl http://localhost:3001/team-members
```

2. **Frontend**:
- Navigate to http://localhost:3000
- Check Dashboard loads statistics
- Check Projects page shows all projects
- Check Tasks page displays Kanban board
- Check Team page shows team members

## Production Deployment

### Backend

```bash
cd backend
npm run build
npm run start:prod
```

### Frontend

```bash
npm run build
npm start
```

### Environment Variables

**Backend (.env)**:
```
MONGODB_URI=mongodb://your-production-mongodb-url
PORT=3001
```

**Frontend (.env.local)**:
```
NEXT_PUBLIC_API_URL=https://your-backend-api-url
```

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check connection string in backend/.env
- Verify port 27017 is accessible

### CORS Issues
- Backend CORS is configured for localhost:3000 and localhost:3001
- Update `src/main.ts` for production URLs

### Frontend Not Loading Data
- Check backend is running on port 3001
- Verify API_URL in .env.local
- Check browser console for errors
- Ensure MongoDB has data (run seed script)

## Performance Considerations

- **Database**: Indexes on frequently queried fields
- **API**: Pagination ready (can be implemented)
- **Frontend**: Client-side caching possible with React Query
- **Images**: Using emoji for avatars (no image storage needed)

## Security Notes

- Input validation on backend using class-validator
- MongoDB injection protection via Mongoose
- CORS properly configured
- Environment variables for sensitive data
- Production deployment should add:
  - Authentication/Authorization
  - Rate limiting
  - HTTPS/SSL
  - Environment-specific CORS

## Future Enhancements

Potential additions:
- [ ] User authentication (JWT/Passport)
- [ ] Real-time updates (WebSockets)
- [ ] Drag-and-drop task management
- [ ] File upload for attachments
- [ ] Email notifications
- [ ] Advanced filtering and search
- [ ] Activity logs and audit trail
- [ ] Role-based access control
- [ ] API documentation (Swagger)
- [ ] Unit and E2E tests

## Support

For issues or questions:
1. Check this documentation
2. Review README.md files
3. Check backend/README.md for API details
4. Review code comments in source files
