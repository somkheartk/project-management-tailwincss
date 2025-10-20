import { mockProjects, mockTasks, mockTeamMembers } from '@/lib/mockData';

export default function Home() {
  const activeProjects = mockProjects.filter(p => p.status === 'active');
  const totalTasks = mockTasks.length;
  const completedTasks = mockTasks.filter(t => t.status === 'done').length;
  const inProgressTasks = mockTasks.filter(t => t.status === 'in-progress').length;

  const stats = [
    { 
      label: 'Total Projects', 
      value: mockProjects.length, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      icon: '📊'
    },
    { 
      label: 'Active Projects', 
      value: activeProjects.length, 
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      icon: '🚀'
    },
    { 
      label: 'Total Tasks', 
      value: totalTasks, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      icon: '✅'
    },
    { 
      label: 'Team Members', 
      value: mockTeamMembers.length, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      icon: '👥'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here&apos;s what&apos;s happening with your projects today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Active Projects Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Active Projects
        </h2>
        <div className="space-y-4">
          {activeProjects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200"
            >
              <div className="flex items-center space-x-4 flex-1">
                <div className={`${project.color} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold`}>
                  {project.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Progress</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{project.progress}%</p>
                </div>
                <div className="w-24">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`${project.color} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Completed</h3>
            <span className="text-2xl">✅</span>
          </div>
          <p className="text-3xl font-bold text-green-600">{completedTasks}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {Math.round((completedTasks / totalTasks) * 100)}% of total tasks
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">In Progress</h3>
            <span className="text-2xl">⚡</span>
          </div>
          <p className="text-3xl font-bold text-blue-600">{inProgressTasks}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Currently active tasks
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Pending</h3>
            <span className="text-2xl">📋</span>
          </div>
          <p className="text-3xl font-bold text-gray-600 dark:text-gray-400">
            {totalTasks - completedTasks - inProgressTasks}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Awaiting action
          </p>
        </div>
      </div>
    </div>
  );
}
