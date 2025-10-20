# 🚀 ProjectFlow - Modern Project Management System

A beautiful and modern full-stack project management system built with Next.js 15, NestJS, and MongoDB. Features a complete TaskFlow Kanban board, project tracking, and team management with a fully functional REST API backend.

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black)
![NestJS](https://img.shields.io/badge/NestJS-11-e0234e)
![MongoDB](https://img.shields.io/badge/MongoDB-8-47A248)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)
![React](https://img.shields.io/badge/React-19-61dafb)

## ✨ Features

### 📊 Dashboard
- Real-time project statistics overview
- Active projects with progress tracking
- Task completion metrics
- Visual progress bars and status indicators

### 📁 Projects Management
- Comprehensive project cards with status badges
- Progress tracking with visual indicators
- Team member assignments
- Due date tracking
- Color-coded project categories

### 📋 TaskFlow Board (Kanban)
- 4-column workflow: To Do → In Progress → Review → Done
- Priority-based task organization (Low, Medium, High, Urgent)
- Assignee tracking with avatars
- Project-linked tasks
- Tag-based categorization
- Due date management

### 👥 Team Management
- Individual team member profiles
- Performance metrics and completion rates
- Task assignment tracking
- Top performers leaderboard
- Interactive team statistics

## 🎨 Design Highlights

- **Modern UI/UX**: Clean, intuitive interface with Tailwind CSS
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Dark Mode Support**: Automatic theme switching
- **Smooth Animations**: Polished transitions and hover effects
- **Color-Coded Elements**: Visual hierarchy for better UX
- **Card-Based Layouts**: Organized information display

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Library**: React 19
- **Build Tool**: Turbopack
- **Linting**: ESLint with Next.js config

### Backend
- **Framework**: NestJS 11
- **Database**: MongoDB with Mongoose
- **Validation**: class-validator & class-transformer
- **API**: RESTful API with CORS enabled
- **Language**: TypeScript

## 📦 Database & Data

The application includes a fully functional backend with MongoDB:
- **5 Projects** with varying statuses and progress levels
- **13 Tasks** distributed across the Kanban board
- **6 Team Members** with roles and performance metrics
- All data is stored in MongoDB and accessible via REST API
- Seed script available to populate initial data

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB installed and running locally (or connection string to MongoDB Atlas)
- npm or yarn package manager

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/somkheartk/project-management-tailwincss.git
cd project-management-tailwincss
```

#### 2. Setup Backend
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (or use the existing one)
# MONGODB_URI=mongodb://localhost:27017/project-management
# PORT=3001

# Seed the database with initial data
npm run seed

# Start backend development server
npm run start:dev
```

The backend will run on [http://localhost:3001](http://localhost:3001)

#### 3. Setup Frontend
```bash
# Navigate back to root directory
cd ..

# Install frontend dependencies
npm install

# Create .env.local file (or use the existing one)
# NEXT_PUBLIC_API_URL=http://localhost:3001

# Run frontend development server
npm run dev
```

The frontend will run on [http://localhost:3000](http://localhost:3000)

### Build for Production

#### Frontend
```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

#### Backend
```bash
cd backend

# Build backend
npm run build

# Start production server
npm run start:prod
```

### Linting

```bash
# Run ESLint (Frontend)
npm run lint

# Run ESLint (Backend)
cd backend
npm run lint
```

## 📁 Project Structure

```
project-management-tailwincss/
├── app/                    # Frontend Next.js app
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Dashboard page
│   ├── projects/
│   │   └── page.tsx        # Projects listing
│   ├── tasks/
│   │   └── page.tsx        # TaskFlow Kanban board
│   └── team/
│       └── page.tsx        # Team management
├── components/
│   └── Navigation.tsx      # Main navigation component
├── lib/
│   ├── api.ts              # API service layer
│   └── mockData.ts         # Type definitions (legacy)
├── backend/                # NestJS backend
│   ├── src/
│   │   ├── projects/       # Projects module
│   │   ├── tasks/          # Tasks module
│   │   ├── team-members/   # Team members module
│   │   ├── app.module.ts   # Root module
│   │   ├── main.ts         # Application entry
│   │   └── seed.ts         # Database seeding script
│   └── package.json
└── public/                 # Static assets
```

## 🎯 Pages

### Dashboard (`/`)
Central hub showing:
- Project statistics (5 total, 2 active)
- Task metrics (13 total, 4 completed, 3 in progress)
- Team overview (6 members)
- Active project progress

### Projects (`/projects`)
- Grid view of all projects
- Status filters (Active, Planning, Completed, On Hold)
- Detailed project cards with team assignments
- Progress tracking

### TaskFlow (`/tasks`)
- Kanban-style board with 4 columns
- Drag-and-drop ready design
- Task cards with full details
- Priority and status management

### Team (`/team`)
- Team member profiles
- Performance dashboards
- Completion rate tracking
- Top performers leaderboard

## 🎨 Color Scheme

The application uses a carefully selected color palette:
- **Blue**: Primary actions and active states
- **Purple**: Secondary elements and highlights
- **Green**: Success states and completions
- **Orange**: Warnings and medium priority
- **Red**: Urgent items and critical states
- **Gray**: Neutral elements and backgrounds

## 📱 Responsive Design

- **Mobile**: < 768px - Stacked layouts, simplified navigation
- **Tablet**: 768px - 1024px - Grid layouts with 2 columns
- **Desktop**: > 1024px - Full grid layouts with 3-4 columns

## 🌙 Dark Mode

Automatic dark mode support based on system preferences with smooth transitions between themes.

## ✅ Completed Features

- ✅ **Full REST API Backend** with NestJS
- ✅ **MongoDB Integration** for data persistence
- ✅ **CRUD Operations** for Projects, Tasks, and Team Members
- ✅ **API Validation** with DTOs
- ✅ **Database Seeding** for initial data
- ✅ **Frontend-Backend Integration**

## 🔮 Future Enhancements

Potential features for future development:
- Real-time collaboration with WebSockets
- Drag-and-drop task management
- Advanced filtering and search
- User authentication & authorization
- Real-time notifications system
- File attachments
- Comments and activity logs
- Task assignment notifications

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**somkheartk**
- GitHub: [@somkheartk](https://github.com/somkheartk)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons using emoji for cross-platform compatibility