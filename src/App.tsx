import { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  FileText, 
  Sparkles, 
  Database,
  Settings,
  HelpCircle,
  Menu,
  X,
  TrendingUp,
  Users,
  DollarSign,
  Activity
} from 'lucide-react';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', badge: null },
    { id: 'analytics', icon: BarChart3, label: 'Analytics', badge: null },
    { id: 'reports', icon: FileText, label: 'Reports', badge: '3' },
    { id: 'ai-insights', icon: Sparkles, label: 'AI Insights', badge: 'New' },
    { id: 'data-sources', icon: Database, label: 'Data Sources', badge: null },
    { id: 'settings', icon: Settings, label: 'Settings', badge: null },
    { id: 'help', icon: HelpCircle, label: 'Help & Tutorial', badge: null },
  ];

  const stats = [
    { label: 'Total Revenue', value: '$124,563', change: '+12.5%', icon: DollarSign, trend: 'up' },
    { label: 'Active Users', value: '8,549', change: '+8.2%', icon: Users, trend: 'up' },
    { label: 'Conversion Rate', value: '3.24%', change: '+0.4%', icon: TrendingUp, trend: 'up' },
    { label: 'Avg. Session', value: '4m 32s', change: '-2.1%', icon: Activity, trend: 'down' },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-blue-600 to-purple-700 text-white transition-all duration-300 flex flex-col`}>
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          {sidebarOpen && (
            <div>
              <h1 className="tracking-tight">OASIS BI PRO</h1>
              <p className="text-xs text-blue-100 mt-1">Business Intelligence</p>
            </div>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                  currentPage === item.id 
                    ? 'bg-white text-blue-600 shadow-lg' 
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {sidebarOpen && (
                  <>
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        currentPage === item.id 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-white/20 text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        {sidebarOpen && (
          <div className="p-4 border-t border-white/10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <p className="text-xs text-blue-100">Version 2.1.0</p>
              <p className="text-xs text-blue-200 mt-1">Production Ready</p>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-white border-b border-slate-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-slate-900 capitalize">{currentPage.replace('-', ' ')}</h2>
              <p className="text-sm text-slate-500 mt-1">Welcome back! Here's your overview</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                Export Data
              </button>
              <button className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                New Report
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      stat.trend === 'up' 
                        ? 'bg-green-50 text-green-600' 
                        : 'bg-red-50 text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
                  <p className="text-slate-900">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-slate-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { title: 'New report generated', time: '2 minutes ago', type: 'success' },
                  { title: 'Data source connected', time: '1 hour ago', type: 'info' },
                  { title: 'Dashboard shared', time: '3 hours ago', type: 'warning' },
                  { title: 'Export completed', time: '5 hours ago', type: 'success' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'info' ? 'bg-blue-500' : 'bg-amber-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm text-slate-700">{activity.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-slate-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Create Report', icon: FileText, color: 'blue' },
                  { label: 'AI Analysis', icon: Sparkles, color: 'purple' },
                  { label: 'View Analytics', icon: BarChart3, color: 'green' },
                  { label: 'Settings', icon: Settings, color: 'slate' },
                ].map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={index}
                      className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group text-left"
                    >
                      <Icon className={`w-5 h-5 text-${action.color}-600 mb-2 group-hover:scale-110 transition-transform`} />
                      <p className="text-sm text-slate-700">{action.label}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* AI Insights Section */}
          <div className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2">AI-Powered Insights</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Based on your data, we've detected a 15% increase in user engagement this week. 
                  Consider allocating more resources to high-performing channels.
                </p>
                <button className="px-4 py-2 bg-white text-blue-600 rounded-lg text-sm hover:shadow-lg transition-all">
                  View Full Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
