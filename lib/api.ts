const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface Project {
  _id?: string;
  id?: string;
  name: string;
  description: string;
  status: 'active' | 'planning' | 'completed' | 'on-hold';
  progress: number;
  dueDate: string;
  teamMembers: string[];
  color: string;
}

export interface Task {
  _id?: string;
  id?: string;
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
  _id?: string;
  id?: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  tasksAssigned: number;
  tasksCompleted: number;
}

// Helper function to normalize IDs (MongoDB uses _id, frontend uses id)
function normalizeItem<T extends { _id?: string; id?: string }>(item: T): T {
  if (item._id && !item.id) {
    return { ...item, id: item._id };
  }
  return item;
}

// Projects API
export const projectsApi = {
  async getAll(): Promise<Project[]> {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    const data = await response.json();
    return data.map(normalizeItem);
  },

  async getOne(id: string): Promise<Project> {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`);
    if (!response.ok) throw new Error('Failed to fetch project');
    const data = await response.json();
    return normalizeItem(data);
  },

  async create(project: Omit<Project, '_id' | 'id'>): Promise<Project> {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project),
    });
    if (!response.ok) throw new Error('Failed to create project');
    const data = await response.json();
    return normalizeItem(data);
  },

  async update(id: string, project: Partial<Project>): Promise<Project> {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project),
    });
    if (!response.ok) throw new Error('Failed to update project');
    const data = await response.json();
    return normalizeItem(data);
  },

  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete project');
  },
};

// Tasks API
export const tasksApi = {
  async getAll(): Promise<Task[]> {
    const response = await fetch(`${API_BASE_URL}/tasks`);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    const data = await response.json();
    return data.map(normalizeItem);
  },

  async getOne(id: string): Promise<Task> {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`);
    if (!response.ok) throw new Error('Failed to fetch task');
    const data = await response.json();
    return normalizeItem(data);
  },

  async create(task: Omit<Task, '_id' | 'id'>): Promise<Task> {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error('Failed to create task');
    const data = await response.json();
    return normalizeItem(data);
  },

  async update(id: string, task: Partial<Task>): Promise<Task> {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error('Failed to update task');
    const data = await response.json();
    return normalizeItem(data);
  },

  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete task');
  },
};

// Team Members API
export const teamMembersApi = {
  async getAll(): Promise<TeamMember[]> {
    const response = await fetch(`${API_BASE_URL}/team-members`);
    if (!response.ok) throw new Error('Failed to fetch team members');
    const data = await response.json();
    return data.map(normalizeItem);
  },

  async getOne(id: string): Promise<TeamMember> {
    const response = await fetch(`${API_BASE_URL}/team-members/${id}`);
    if (!response.ok) throw new Error('Failed to fetch team member');
    const data = await response.json();
    return normalizeItem(data);
  },

  async create(member: Omit<TeamMember, '_id' | 'id'>): Promise<TeamMember> {
    const response = await fetch(`${API_BASE_URL}/team-members`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(member),
    });
    if (!response.ok) throw new Error('Failed to create team member');
    const data = await response.json();
    return normalizeItem(data);
  },

  async update(id: string, member: Partial<TeamMember>): Promise<TeamMember> {
    const response = await fetch(`${API_BASE_URL}/team-members/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(member),
    });
    if (!response.ok) throw new Error('Failed to update team member');
    const data = await response.json();
    return normalizeItem(data);
  },

  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/team-members/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete team member');
  },
};
