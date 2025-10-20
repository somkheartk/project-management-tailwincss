import { mockProjects, mockTeamMembers } from '@/lib/mockData';

export default function ProjectsPage() {
  const getStatusBadge = (status: string) => {
    const badges = {
      active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      planning: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      completed: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400',
      'on-hold': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    };
    return badges[status as keyof typeof badges] || badges.active;
  };



  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage and track all your projects in one place
        </p>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {['active', 'planning', 'completed', 'on-hold'].map((status) => {
          const count = mockProjects.filter(p => p.status === status).length;
          const statusLabels = {
            active: 'Active',
            planning: 'Planning',
            completed: 'Completed',
            'on-hold': 'On Hold'
          };
          return (
            <div
              key={status}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {statusLabels[status as keyof typeof statusLabels]}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {count}
                  </p>
                </div>
                <div className={`${getStatusBadge(status)} px-3 py-1 rounded-full text-xs font-medium`}>
                  {statusLabels[status as keyof typeof statusLabels]}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            {/* Project Header */}
            <div className={`${project.color} h-2`} />
            
            <div className="p-6">
              {/* Title and Status */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.description}
                  </p>
                </div>
                <span className={`${getStatusBadge(project.status)} px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-4`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Progress
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`${project.color} h-3 rounded-full transition-all duration-500 ease-out`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Due Date</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {new Date(project.dueDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Team Size</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {project.teamMembers.length} members
                  </p>
                </div>
              </div>

              {/* Team Members */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex -space-x-2">
                  {project.teamMembers.slice(0, 4).map((memberId) => {
                    const member = mockTeamMembers.find(m => m.id === memberId);
                    return (
                      <div
                        key={memberId}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white dark:border-gray-800 flex items-center justify-center text-white text-xs font-medium"
                        title={member?.name}
                      >
                        {member?.avatar}
                      </div>
                    );
                  })}
                  {project.teamMembers.length > 4 && (
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 text-xs font-medium">
                      +{project.teamMembers.length - 4}
                    </div>
                  )}
                </div>
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Project Button */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2">
          <span className="text-xl">+</span>
          <span>Create New Project</span>
        </button>
      </div>
    </div>
  );
}
