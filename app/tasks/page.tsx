'use client';

import { useEffect, useState } from 'react';
import { tasksApi, teamMembersApi, projectsApi, Task, TeamMember, Project } from '@/lib/api';

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [tasksData, teamMembersData, projectsData] = await Promise.all([
          tasksApi.getAll(),
          teamMembersApi.getAll(),
          projectsApi.getAll(),
        ]);
        setTasks(tasksData);
        setTeamMembers(teamMembersData);
        setProjects(projectsData);
      } catch (err) {
        setError('Failed to load data. Make sure the backend is running.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-red-800 dark:text-red-200">{error}</p>
          </div>
        </div>
      </div>
    );
  }
  const columns = [
    { id: 'todo', title: 'To Do', color: 'bg-gray-500' },
    { id: 'in-progress', title: 'In Progress', color: 'bg-blue-500' },
    { id: 'review', title: 'Review', color: 'bg-purple-500' },
    { id: 'done', title: 'Done', color: 'bg-green-500' },
  ];

  const getPriorityBadge = (priority: string) => {
    const badges = {
      low: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
      medium: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      high: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      urgent: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    };
    return badges[priority as keyof typeof badges] || badges.medium;
  };

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            TaskFlow Board
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage tasks with Kanban-style workflow
          </p>
        </div>

        {/* Task Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {columns.map((column) => {
            const tasks = getTasksByStatus(column.id);
            return (
              <div
                key={column.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`${column.color} w-3 h-3 rounded-full`} />
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {column.title}
                  </p>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {tasks.length}
                </p>
              </div>
            );
          })}
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((column) => {
            const tasks = getTasksByStatus(column.id);
            return (
              <div key={column.id} className="flex flex-col">
                {/* Column Header */}
                <div className="bg-white dark:bg-gray-800 rounded-t-xl border border-gray-200 dark:border-gray-700 p-4 border-b-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`${column.color} w-3 h-3 rounded-full`} />
                      <h2 className="font-semibold text-gray-900 dark:text-white">
                        {column.title}
                      </h2>
                    </div>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded-full">
                      {tasks.length}
                    </span>
                  </div>
                </div>

                {/* Tasks Container */}
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-b-xl border border-gray-200 dark:border-gray-700 border-t-0 p-4 min-h-[600px] space-y-3">
                  {tasks.map((task) => {
                    const assignee = teamMembers.find(m => m.id === task.assignee || m._id === task.assignee);
                    const project = projects.find(p => p.id === task.projectId || p._id === task.projectId);
                    
                    return (
                      <div
                        key={task.id}
                        className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 cursor-pointer group"
                      >
                        {/* Task Header */}
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-medium text-gray-900 dark:text-white flex-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {task.title}
                          </h3>
                        </div>

                        {/* Task Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                          {task.description}
                        </p>

                        {/* Priority Badge */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`${getPriorityBadge(task.priority)} px-2 py-1 rounded text-xs font-medium`}>
                            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                          </span>
                          {project && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {project.name}
                            </span>
                          )}
                        </div>

                        {/* Tags */}
                        {task.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {task.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded text-xs"
                              >
                                #{tag}
                              </span>
                            ))}
                            {task.tags.length > 2 && (
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                +{task.tags.length - 2}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Task Footer */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex items-center space-x-2">
                            {assignee && (
                              <>
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs">
                                  {assignee.avatar}
                                </div>
                                <span className="text-xs text-gray-600 dark:text-gray-400">
                                  {assignee.name.split(' ')[0]}
                                </span>
                              </>
                            )}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            📅 {new Date(task.dueDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Add Task Button */}
                  <button className="w-full border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 text-gray-500 dark:text-gray-400 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span className="text-xl">+</span>
                    <span className="text-sm font-medium">Add Task</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
