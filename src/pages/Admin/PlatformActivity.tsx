import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  CheckCircle,
  User,
  Shield,
  Calendar,
  RefreshCw,
  Download,
  Grid,
} from "lucide-react";
import mockData from "../../data/mockData.json";

const PlatformActivity = () => {
  const { dailyLogins, appointmentTrends, newUsersByRole, recentActivities } =
    mockData.platformStats;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          Platform Activity Monitoring
        </h1>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Logins Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Daily Logins
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyLogins}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Appointment Trends Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Appointment Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={appointmentTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Appointment Trends Chart 2 */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Appointment Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={appointmentTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* New Users by Role Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            New Users by Role
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={newUsersByRole}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="role" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Activities
          </h3>
          <span className="text-sm text-gray-500">Actions</span>
        </div>

        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {activity.type === "appointment" && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {activity.type === "verification" && (
                    <Shield className="w-5 h-5 text-blue-500" />
                  )}
                  {activity.type === "record_access" && (
                    <User className="w-5 h-5 text-purple-500" />
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-900">
                    {activity.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    activity.userType === "Admin"
                      ? "bg-blue-100 text-blue-800"
                      : activity.userType === "Doctor"
                      ? "bg-green-100 text-green-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {activity.action}
                </span>
                <span className="text-sm text-gray-500">
                  {activity.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-gray-500" />
          <span className="text-sm text-gray-600">Medical Today</span>
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Admit Patient
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Schedule
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Last 7 Days</span>
          </button>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <RefreshCw className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Download className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Grid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformActivity;
