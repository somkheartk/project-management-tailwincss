import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProjectsService } from './projects/projects.service';
import { TasksService } from './tasks/tasks.service';
import { TeamMembersService } from './team-members/team-members.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const projectsService = app.get(ProjectsService);
  const tasksService = app.get(TasksService);
  const teamMembersService = app.get(TeamMembersService);

  try {
    console.log('Seeding database...');

    // Seed Team Members
    const teamMembers = [
      {
        name: 'Sarah Chen',
        role: 'Senior Full-Stack Developer',
        avatar: '👩‍💻',
        email: 'sarah.chen@example.com',
        tasksAssigned: 8,
        tasksCompleted: 6,
      },
      {
        name: 'Michael Rodriguez',
        role: 'UI/UX Designer',
        avatar: '👨‍🎨',
        email: 'michael.r@example.com',
        tasksAssigned: 10,
        tasksCompleted: 7,
      },
      {
        name: 'Emily Watson',
        role: 'Marketing Manager',
        avatar: '👩‍💼',
        email: 'emily.watson@example.com',
        tasksAssigned: 6,
        tasksCompleted: 4,
      },
      {
        name: 'David Kim',
        role: 'Mobile Developer',
        avatar: '👨‍💻',
        email: 'david.kim@example.com',
        tasksAssigned: 7,
        tasksCompleted: 5,
      },
      {
        name: 'Jessica Taylor',
        role: 'Backend Developer',
        avatar: '👩‍🔧',
        email: 'jessica.t@example.com',
        tasksAssigned: 5,
        tasksCompleted: 4,
      },
      {
        name: 'Alex Morgan',
        role: 'Content Strategist',
        avatar: '👨‍📝',
        email: 'alex.morgan@example.com',
        tasksAssigned: 4,
        tasksCompleted: 2,
      },
    ];

    const createdTeamMembers: any[] = [];
    for (const member of teamMembers) {
      const created = await teamMembersService.create(member);
      createdTeamMembers.push(created);
      console.log(`Created team member: ${created.name}`);
    }

    // Seed Projects
    const projects = [
      {
        name: 'Website Redesign',
        description: 'Complete overhaul of company website with modern design',
        status: 'active',
        progress: 65,
        dueDate: '2025-11-15',
        teamMembers: [createdTeamMembers[0]._id.toString(), createdTeamMembers[1]._id.toString(), createdTeamMembers[2]._id.toString()],
        color: 'bg-blue-500',
      },
      {
        name: 'Mobile App Development',
        description: 'Build native mobile apps for iOS and Android',
        status: 'active',
        progress: 40,
        dueDate: '2025-12-30',
        teamMembers: [createdTeamMembers[1]._id.toString(), createdTeamMembers[3]._id.toString(), createdTeamMembers[4]._id.toString()],
        color: 'bg-purple-500',
      },
      {
        name: 'Marketing Campaign Q4',
        description: 'Launch comprehensive marketing campaign for Q4',
        status: 'planning',
        progress: 15,
        dueDate: '2025-11-01',
        teamMembers: [createdTeamMembers[2]._id.toString(), createdTeamMembers[5]._id.toString()],
        color: 'bg-green-500',
      },
      {
        name: 'API Integration',
        description: 'Integrate third-party APIs for enhanced functionality',
        status: 'completed',
        progress: 100,
        dueDate: '2025-10-10',
        teamMembers: [createdTeamMembers[0]._id.toString(), createdTeamMembers[4]._id.toString()],
        color: 'bg-gray-500',
      },
      {
        name: 'Database Migration',
        description: 'Migrate from MySQL to PostgreSQL',
        status: 'on-hold',
        progress: 25,
        dueDate: '2025-12-15',
        teamMembers: [createdTeamMembers[3]._id.toString()],
        color: 'bg-yellow-500',
      },
    ];

    const createdProjects: any[] = [];
    for (const project of projects) {
      const created = await projectsService.create(project);
      createdProjects.push(created);
      console.log(`Created project: ${created.name}`);
    }

    // Seed Tasks
    const tasks = [
      // Website Redesign tasks
      {
        title: 'Design homepage mockup',
        description: 'Create initial design mockup for the new homepage',
        status: 'done',
        priority: 'high',
        assignee: createdTeamMembers[0]._id.toString(),
        projectId: createdProjects[0]._id.toString(),
        dueDate: '2025-10-25',
        tags: ['design', 'ui/ux'],
      },
      {
        title: 'Implement responsive navigation',
        description: 'Build responsive navigation bar with mobile menu',
        status: 'in-progress',
        priority: 'high',
        assignee: createdTeamMembers[1]._id.toString(),
        projectId: createdProjects[0]._id.toString(),
        dueDate: '2025-10-28',
        tags: ['frontend', 'responsive'],
      },
      {
        title: 'Optimize page load speed',
        description: 'Improve website performance and reduce load times',
        status: 'review',
        priority: 'medium',
        assignee: createdTeamMembers[2]._id.toString(),
        projectId: createdProjects[0]._id.toString(),
        dueDate: '2025-11-05',
        tags: ['performance', 'optimization'],
      },
      {
        title: 'Set up analytics tracking',
        description: 'Implement Google Analytics and heat mapping',
        status: 'todo',
        priority: 'low',
        assignee: createdTeamMembers[1]._id.toString(),
        projectId: createdProjects[0]._id.toString(),
        dueDate: '2025-11-10',
        tags: ['analytics', 'tracking'],
      },
      // Mobile App tasks
      {
        title: 'User authentication flow',
        description: 'Implement login and registration screens',
        status: 'in-progress',
        priority: 'urgent',
        assignee: createdTeamMembers[3]._id.toString(),
        projectId: createdProjects[1]._id.toString(),
        dueDate: '2025-10-30',
        tags: ['mobile', 'auth'],
      },
      {
        title: 'Design app icon and splash screen',
        description: 'Create app icons for both iOS and Android',
        status: 'done',
        priority: 'medium',
        assignee: createdTeamMembers[1]._id.toString(),
        projectId: createdProjects[1]._id.toString(),
        dueDate: '2025-10-20',
        tags: ['design', 'branding'],
      },
      {
        title: 'Build push notification system',
        description: 'Integrate FCM for push notifications',
        status: 'todo',
        priority: 'high',
        assignee: createdTeamMembers[4]._id.toString(),
        projectId: createdProjects[1]._id.toString(),
        dueDate: '2025-11-15',
        tags: ['backend', 'notifications'],
      },
      {
        title: 'Implement offline mode',
        description: 'Add offline functionality with local storage',
        status: 'todo',
        priority: 'medium',
        assignee: createdTeamMembers[3]._id.toString(),
        projectId: createdProjects[1]._id.toString(),
        dueDate: '2025-11-20',
        tags: ['mobile', 'storage'],
      },
      // Marketing Campaign tasks
      {
        title: 'Create social media content calendar',
        description: 'Plan and schedule posts for Q4',
        status: 'in-progress',
        priority: 'high',
        assignee: createdTeamMembers[2]._id.toString(),
        projectId: createdProjects[2]._id.toString(),
        dueDate: '2025-10-28',
        tags: ['marketing', 'social-media'],
      },
      {
        title: 'Design email templates',
        description: 'Create responsive email templates for campaigns',
        status: 'todo',
        priority: 'medium',
        assignee: createdTeamMembers[5]._id.toString(),
        projectId: createdProjects[2]._id.toString(),
        dueDate: '2025-11-05',
        tags: ['design', 'email'],
      },
      {
        title: 'Set up A/B testing',
        description: 'Configure A/B testing for landing pages',
        status: 'todo',
        priority: 'low',
        assignee: createdTeamMembers[2]._id.toString(),
        projectId: createdProjects[2]._id.toString(),
        dueDate: '2025-11-10',
        tags: ['marketing', 'testing'],
      },
      // API Integration tasks
      {
        title: 'Payment gateway integration',
        description: 'Integrate Stripe payment processing',
        status: 'done',
        priority: 'urgent',
        assignee: createdTeamMembers[0]._id.toString(),
        projectId: createdProjects[3]._id.toString(),
        dueDate: '2025-10-05',
        tags: ['backend', 'payment'],
      },
      {
        title: 'Email service API',
        description: 'Connect SendGrid for transactional emails',
        status: 'done',
        priority: 'high',
        assignee: createdTeamMembers[4]._id.toString(),
        projectId: createdProjects[3]._id.toString(),
        dueDate: '2025-10-08',
        tags: ['backend', 'email'],
      },
    ];

    for (const task of tasks) {
      const created = await tasksService.create(task);
      console.log(`Created task: ${created.title}`);
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await app.close();
  }
}

bootstrap();
