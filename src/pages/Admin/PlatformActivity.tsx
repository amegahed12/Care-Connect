/**
 * Dashboard page
 * Contains overview stats and activity feed
 */

import StatChart from "../../components/admin/StatChart";
import ActivityFeed from "../../components/admin/ActivityFeed";

const PlatformActivity = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      {/* Example grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatChart />
        <ActivityFeed />
      </div>
    </div>
  );
};

export default PlatformActivity;
