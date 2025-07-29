import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [currentDate] = useState(() => {
    return new Date().toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  });

  const [animatedValues, setAnimatedValues] = useState({
    revenue: 0,
    users: 0,
    subscriptions: 0,
    conversionRate: 0
  });

  const targetValues = {
    revenue: 45231,
    users: 12847,
    subscriptions: 1429,
    conversionRate: 3.24
  };

  // Animation for counting up numbers
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues({
        revenue: Math.floor(targetValues.revenue * easeOut),
        users: Math.floor(targetValues.users * easeOut),
        subscriptions: Math.floor(targetValues.subscriptions * easeOut),
        conversionRate: Number((targetValues.conversionRate * easeOut).toFixed(2))
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Sample data for charts
  const recentActivities = [
    {
      title: "New subscription",
      description: "Pro plan activated",
      time: "2 minutes ago",
      color: "bg-emerald-500"
    },
    {
      title: "Payment received",
      description: "$129.00 from client",
      time: "15 minutes ago",
      color: "bg-blue-500"
    },
    {
      title: "Trial ending soon",
      description: "3 users trial expires",
      time: "1 hour ago",
      color: "bg-amber-500"
    },
    {
      title: "Feature released",
      description: "API v2.1 deployed",
      time: "3 hours ago",
      color: "bg-purple-500"
    }
  ];

  const quickActions = [
    { name: "Create Report", icon: "📊", color: "bg-blue-500" },
    { name: "Manage Users", icon: "👥", color: "bg-green-500" },
    { name: "Bug Reports", icon: "🐛", color: "bg-red-500" },
    { name: "Deployment", icon: "🚀", color: "bg-purple-500" }
  ];

  // Simple progress bar component
  const ProgressBar = ({ value, className = "" }) => (
    <div className={`w-full bg-slate-700 rounded-full h-2 ${className}`}>
      <div 
        className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );

  // Simple badge component
  const Badge = ({ children, variant = "default" }) => {
    const variants = {
      default: "bg-blue-500/10 text-blue-500",
      success: "bg-emerald-500/10 text-emerald-500",
      warning: "bg-amber-500/10 text-amber-500",
      purple: "bg-purple-500/10 text-purple-500"
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
        {children}
      </span>
    );
  };

  // Simple card component
  const Card = ({ children, className = "" }) => (
    <div className={`bg-slate-800 border border-slate-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`}>
      {children}
    </div>
  );

  // Simple button component
  const Button = ({ children, variant = "default", size = "default", className = "" }) => {
    const variants = {
      default: "bg-blue-500 hover:bg-blue-600 text-white",
      outline: "border border-slate-600 text-slate-300 hover:bg-slate-700",
      ghost: "text-slate-300 hover:bg-slate-700"
    };
    
    const sizes = {
      default: "px-4 py-2 text-sm",
      sm: "px-3 py-1 text-xs"
    };
    
    return (
      <button className={`rounded-md font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}>
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-slate-50">Analytics Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-400">
                <span className="text-sm">📅</span>
                <span>{currentDate}</span>
              </div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-400">Live</span>
            </div>
          </div>
          <p className="text-slate-400">Monitor your SaaS performance in real-time</p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {/* Revenue Card */}
          <Card className="animate-slide-up">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <span className="text-xl">💰</span>
                  </div>
                  <h3 className="text-slate-300 text-sm font-medium">Monthly Revenue</h3>
                </div>
                <Badge variant="success">+12.5%</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-slate-50 transition-all duration-1000">
                  ${animatedValues.revenue.toLocaleString()}
                </p>
                <p className="text-slate-400 text-sm">vs $40,205 last month</p>
              </div>
              <div className="mt-4">
                <ProgressBar value={75} />
              </div>
            </div>
          </Card>

          {/* Active Users Card */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <span className="text-xl">👥</span>
                  </div>
                  <h3 className="text-slate-300 text-sm font-medium">Active Users</h3>
                </div>
                <Badge variant="default">+8.1%</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-slate-50 transition-all duration-1000">
                  {animatedValues.users.toLocaleString()}
                </p>
                <p className="text-slate-400 text-sm">vs 11,890 last month</p>
              </div>
              <div className="mt-4 flex space-x-1">
                {[120, 150, 90, 180, 140, 170, 190].map((height, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 rounded-sm flex-1 transition-all duration-1000"
                    style={{ 
                      height: `${height / 4}px`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </Card>

          {/* Subscriptions Card */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <span className="text-xl">👑</span>
                  </div>
                  <h3 className="text-slate-300 text-sm font-medium">Subscriptions</h3>
                </div>
                <Badge variant="purple">+24.3%</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-slate-50 transition-all duration-1000">
                  {animatedValues.subscriptions.toLocaleString()}
                </p>
                <p className="text-slate-400 text-sm">vs 1,150 last month</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Pro Plan</span>
                  <span className="text-xs text-slate-300">847</span>
                </div>
                <ProgressBar value={60} className="h-1.5" />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Basic Plan</span>
                  <span className="text-xs text-slate-300">582</span>
                </div>
                <ProgressBar value={40} className="h-1.5" />
              </div>
            </div>
          </Card>

          {/* Conversion Rate Card */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <span className="text-xl">📈</span>
                  </div>
                  <h3 className="text-slate-300 text-sm font-medium">Conversion Rate</h3>
                </div>
                <Badge variant="warning">+3.2%</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-slate-50 transition-all duration-1000">
                  {animatedValues.conversionRate}%
                </p>
                <p className="text-slate-400 text-sm">vs 3.14% last month</p>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-700"/>
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      stroke="currentColor" 
                      strokeWidth="8" 
                      fill="transparent"
                      strokeDasharray="251.2" 
                      strokeDashoffset="200" 
                      className="text-amber-500 transition-all duration-2000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-medium text-slate-300">Good</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Revenue Growth Chart */}
          <Card className="md:col-span-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-50">Revenue Growth</h3>
                <div className="flex space-x-2">
                  <Button size="sm">6M</Button>
                  <Button size="sm" variant="outline">1Y</Button>
                </div>
              </div>
              <div className="h-48 relative">
                {/* Simple area chart representation */}
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path
                    d="M 20 180 L 50 160 L 80 170 L 110 140 L 140 150 L 170 130 L 200 145 L 230 120 L 260 135 L 290 125 L 320 115 L 350 100"
                    stroke="#10b981"
                    strokeWidth="3"
                    fill="none"
                    className="animate-pulse"
                  />
                  <path
                    d="M 20 180 L 50 160 L 80 170 L 110 140 L 140 150 L 170 130 L 200 145 L 230 120 L 260 135 L 290 125 L 320 115 L 350 100 L 350 200 L 20 200 Z"
                    fill="url(#areaGradient)"
                  />
                  {/* Grid lines */}
                  {[60, 120, 180].map((y, i) => (
                    <line key={i} x1="20" y1={y} x2="380" y2={y} stroke="#374151" strokeDasharray="3,3" opacity="0.5"/>
                  ))}
                </svg>
                <div className="absolute bottom-2 left-4 text-xs text-slate-400 flex space-x-8">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Nov</span>
                </div>
              </div>
            </div>
          </Card>

          {/* User Engagement Card */}
          <Card className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-50 mb-6">User Engagement</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Session Duration</span>
                    <span className="text-blue-500 text-sm font-medium">+15%</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-50 mb-3">4m 32s</p>
                  <ProgressBar value={80} />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Bounce Rate</span>
                    <span className="text-emerald-500 text-sm font-medium">-5%</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-50 mb-3">28.5%</p>
                  <ProgressBar value={33} />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-xs text-slate-400 mb-1">Page Views</div>
                  <div className="text-lg font-semibold text-slate-50">127K</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-400 mb-1">Avg. Session</div>
                  <div className="text-lg font-semibold text-slate-50">5.2</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-400 mb-1">Return Rate</div>
                  <div className="text-lg font-semibold text-slate-50">71%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-400 mb-1">CTR</div>
                  <div className="text-lg font-semibold text-slate-50">2.8%</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Activities Card */}
          <Card className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-50 mb-6">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                    <div className={`w-3 h-3 rounded-full ${activity.color}`}></div>
                    <div className="flex-1">
                      <p className="text-slate-50 text-sm font-medium">{activity.title}</p>
                      <p className="text-slate-400 text-xs">{activity.description}</p>
                    </div>
                    <span className="text-slate-400 text-xs">{activity.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between items-center">
                <Button variant="outline" size="sm">
                  📊 View All
                </Button>
                <Button size="sm" variant="ghost">
                  📥 Export
                </Button>
              </div>
            </div>
          </Card>

          {/* System Status Card */}
          <Card className="md:col-span-2 animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-50 mb-6">System Status</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-300 text-sm">API Status</span>
                    </div>
                    <span className="text-emerald-500 text-sm font-medium">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-300 text-sm">Database</span>
                    </div>
                    <span className="text-emerald-500 text-sm font-medium">Healthy</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                      <span className="text-slate-300 text-sm">CDN</span>
                    </div>
                    <span className="text-amber-500 text-sm font-medium">Degraded</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-400 text-sm">CPU Usage</span>
                      <span className="text-slate-300 text-sm">42%</span>
                    </div>
                    <ProgressBar value={42} />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-400 text-sm">Memory</span>
                      <span className="text-slate-300 text-sm">68%</span>
                    </div>
                    <ProgressBar value={68} />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-400 text-sm">Storage</span>
                      <span className="text-slate-300 text-sm">35%</span>
                    </div>
                    <ProgressBar value={35} />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Actions Card */}
          <Card className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-50 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="h-16 flex flex-col items-center justify-center space-y-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors border border-slate-600"
                  >
                    <span className="text-xl">{action.icon}</span>
                    <span className="text-sm text-slate-300">{action.name}</span>
                  </button>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-lg">💡</span>
                  <div>
                    <p className="text-slate-50 text-sm font-medium">Tip</p>
                    <p className="text-slate-400 text-xs">Use keyboard shortcuts to navigate faster. Press '?' for help.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out both;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideUp {
          0% { 
            transform: translateY(20px); 
            opacity: 0; 
          }
          100% { 
            transform: translateY(0); 
            opacity: 1; 
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;