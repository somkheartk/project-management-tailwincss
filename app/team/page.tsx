import { mockTeamMembers, mockTasks } from '@/lib/mockData';

export default function TeamPage() {
  const getTotalTasks = (memberId: string) => {
    return mockTasks.filter(task => task.assignee === memberId).length;
  };

  const getCompletedTasks = (memberId: string) => {
    return mockTasks.filter(task => task.assignee === memberId && task.status === 'done').length;
  };

  const getCompletionRate = (memberId: string) => {
    const total = getTotalTasks(memberId);
    if (total === 0) return 0;
    const completed = getCompletedTasks(memberId);
    return Math.round((completed / total) * 100);
  };

  const teamStats = {
    totalMembers: mockTeamMembers.length,
    totalTasks: mockTasks.length,
    completedTasks: mockTasks.filter(t => t.status === 'done').length,
    activeMembers: mockTeamMembers.filter(m => getTotalTasks(m.id) > 0).length,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Team Members
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your team and track their performance
        </p>
      </div>

      {/* Team Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <span className="text-2xl">👥</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Total Members</p>
          <p className="text-3xl font-bold text-blue-600">{teamStats.totalMembers}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <span className="text-2xl">✅</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Active Members</p>
          <p className="text-3xl font-bold text-green-600">{teamStats.activeMembers}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
              <span className="text-2xl">📋</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Total Tasks</p>
          <p className="text-3xl font-bold text-purple-600">{teamStats.totalTasks}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
              <span className="text-2xl">🎯</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Completed</p>
          <p className="text-3xl font-bold text-orange-600">{teamStats.completedTasks}</p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {mockTeamMembers.map((member) => {
          const totalTasks = getTotalTasks(member.id);
          const completedTasks = getCompletedTasks(member.id);
          const completionRate = getCompletionRate(member.id);
          const inProgressTasks = mockTasks.filter(
            t => t.assignee === member.id && t.status === 'in-progress'
          ).length;

          return (
            <div
              key={member.id}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Member Header with Gradient */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl border-2 border-white/40">
                    {member.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-blue-100 text-sm">{member.role}</p>
                  </div>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-6">
                {/* Email */}
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{member.email}</span>
                </div>

                {/* Task Statistics */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Tasks Assigned</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{totalTasks}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Completed</span>
                    <span className="font-semibold text-green-600">{completedTasks}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">In Progress</span>
                    <span className="font-semibold text-blue-600">{inProgressTasks}</span>
                  </div>
                </div>

                {/* Completion Rate */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Completion Rate
                    </span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {completionRate}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        completionRate >= 75
                          ? 'bg-green-500'
                          : completionRate >= 50
                          ? 'bg-blue-500'
                          : completionRate >= 25
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${completionRate}%` }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    View Profile
                  </button>
                  <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Message
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Leaderboard Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="text-2xl mr-2">🏆</span>
          Top Performers
        </h2>
        <div className="space-y-4">
          {[...mockTeamMembers]
            .sort((a, b) => {
              const rateA = getCompletionRate(a.id);
              const rateB = getCompletionRate(b.id);
              return rateB - rateA;
            })
            .slice(0, 5)
            .map((member, index) => {
              const completionRate = getCompletionRate(member.id);
              const totalTasks = getTotalTasks(member.id);
              const medals = ['🥇', '🥈', '🥉'];
              
              return (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <span className="text-2xl w-8 text-center">
                      {medals[index] || `#${index + 1}`}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-lg">
                      {member.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white">{member.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tasks</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{totalTasks}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Rate</p>
                      <p className="font-semibold text-green-600">{completionRate}%</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Add New Member Button */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2">
          <span className="text-xl">+</span>
          <span>Add New Member</span>
        </button>
      </div>
    </div>
  );
}
