export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'planning' | 'completed' | 'on-hold';
  progress: number;
  dueDate: string;
  teamMembers: string[];
  color: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignee: string;
  projectId: string;
  dueDate: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  tasksAssigned: number;
  tasksCompleted: number;
}

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Complete overhaul of company website with modern design',
    status: 'active',
    progress: 65,
    dueDate: '2025-11-15',
    teamMembers: ['1', '2', '3'],
    color: 'bg-blue-500',
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Build native mobile apps for iOS and Android',
    status: 'active',
    progress: 40,
    dueDate: '2025-12-30',
    teamMembers: ['2', '4', '5'],
    color: 'bg-purple-500',
  },
  {
    id: '3',
    name: 'Marketing Campaign Q4',
    description: 'Launch comprehensive marketing campaign for Q4',
    status: 'planning',
    progress: 15,
    dueDate: '2025-11-01',
    teamMembers: ['3', '6'],
    color: 'bg-green-500',
  },
  {
    id: '4',
    name: 'API Integration',
    description: 'Integrate third-party APIs for enhanced functionality',
    status: 'completed',
    progress: 100,
    dueDate: '2025-10-10',
    teamMembers: ['1', '5'],
    color: 'bg-gray-500',
  },
  {
    id: '5',
    name: 'Database Migration',
    description: 'Migrate from MySQL to PostgreSQL',
    status: 'on-hold',
    progress: 25,
    dueDate: '2025-12-15',
    teamMembers: ['4'],
    color: 'bg-yellow-500',
  },
];

export const mockTasks: Task[] = [
  // Website Redesign tasks
  {
    id: '1',
    title: 'Design homepage mockup',
    description: 'Create initial design mockup for the new homepage',
    status: 'done',
    priority: 'high',
    assignee: '1',
    projectId: '1',
    dueDate: '2025-10-25',
    tags: ['design', 'ui/ux'],
  },
  {
    id: '2',
    title: 'Implement responsive navigation',
    description: 'Build responsive navigation bar with mobile menu',
    status: 'in-progress',
    priority: 'high',
    assignee: '2',
    projectId: '1',
    dueDate: '2025-10-28',
    tags: ['frontend', 'responsive'],
  },
  {
    id: '3',
    title: 'Optimize page load speed',
    description: 'Improve website performance and reduce load times',
    status: 'review',
    priority: 'medium',
    assignee: '3',
    projectId: '1',
    dueDate: '2025-11-05',
    tags: ['performance', 'optimization'],
  },
  {
    id: '4',
    title: 'Set up analytics tracking',
    description: 'Implement Google Analytics and heat mapping',
    status: 'todo',
    priority: 'low',
    assignee: '2',
    projectId: '1',
    dueDate: '2025-11-10',
    tags: ['analytics', 'tracking'],
  },
  // Mobile App tasks
  {
    id: '5',
    title: 'User authentication flow',
    description: 'Implement login and registration screens',
    status: 'in-progress',
    priority: 'urgent',
    assignee: '4',
    projectId: '2',
    dueDate: '2025-10-30',
    tags: ['mobile', 'auth'],
  },
  {
    id: '6',
    title: 'Design app icon and splash screen',
    description: 'Create app icons for both iOS and Android',
    status: 'done',
    priority: 'medium',
    assignee: '2',
    projectId: '2',
    dueDate: '2025-10-20',
    tags: ['design', 'branding'],
  },
  {
    id: '7',
    title: 'Build push notification system',
    description: 'Integrate FCM for push notifications',
    status: 'todo',
    priority: 'high',
    assignee: '5',
    projectId: '2',
    dueDate: '2025-11-15',
    tags: ['backend', 'notifications'],
  },
  {
    id: '8',
    title: 'Implement offline mode',
    description: 'Add offline functionality with local storage',
    status: 'todo',
    priority: 'medium',
    assignee: '4',
    projectId: '2',
    dueDate: '2025-11-20',
    tags: ['mobile', 'storage'],
  },
  // Marketing Campaign tasks
  {
    id: '9',
    title: 'Create social media content calendar',
    description: 'Plan and schedule posts for Q4',
    status: 'in-progress',
    priority: 'high',
    assignee: '3',
    projectId: '3',
    dueDate: '2025-10-28',
    tags: ['marketing', 'social-media'],
  },
  {
    id: '10',
    title: 'Design email templates',
    description: 'Create responsive email templates for campaigns',
    status: 'todo',
    priority: 'medium',
    assignee: '6',
    projectId: '3',
    dueDate: '2025-11-05',
    tags: ['design', 'email'],
  },
  {
    id: '11',
    title: 'Set up A/B testing',
    description: 'Configure A/B testing for landing pages',
    status: 'todo',
    priority: 'low',
    assignee: '3',
    projectId: '3',
    dueDate: '2025-11-10',
    tags: ['marketing', 'testing'],
  },
  // API Integration tasks
  {
    id: '12',
    title: 'Payment gateway integration',
    description: 'Integrate Stripe payment processing',
    status: 'done',
    priority: 'urgent',
    assignee: '1',
    projectId: '4',
    dueDate: '2025-10-05',
    tags: ['backend', 'payment'],
  },
  {
    id: '13',
    title: 'Email service API',
    description: 'Connect SendGrid for transactional emails',
    status: 'done',
    priority: 'high',
    assignee: '5',
    projectId: '4',
    dueDate: '2025-10-08',
    tags: ['backend', 'email'],
  },
];

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Senior Full-Stack Developer',
    avatar: '👩‍💻',
    email: 'sarah.chen@example.com',
    tasksAssigned: 8,
    tasksCompleted: 6,
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'UI/UX Designer',
    avatar: '👨‍🎨',
    email: 'michael.r@example.com',
    tasksAssigned: 10,
    tasksCompleted: 7,
  },
  {
    id: '3',
    name: 'Emily Watson',
    role: 'Marketing Manager',
    avatar: '👩‍💼',
    email: 'emily.watson@example.com',
    tasksAssigned: 6,
    tasksCompleted: 4,
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Mobile Developer',
    avatar: '👨‍💻',
    email: 'david.kim@example.com',
    tasksAssigned: 7,
    tasksCompleted: 5,
  },
  {
    id: '5',
    name: 'Jessica Taylor',
    role: 'Backend Developer',
    avatar: '👩‍🔧',
    email: 'jessica.t@example.com',
    tasksAssigned: 5,
    tasksCompleted: 4,
  },
  {
    id: '6',
    name: 'Alex Morgan',
    role: 'Content Strategist',
    avatar: '👨‍📝',
    email: 'alex.morgan@example.com',
    tasksAssigned: 4,
    tasksCompleted: 2,
  },
];
