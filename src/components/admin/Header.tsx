/**
 * Purpose: The top bar that's consistent across all pages.
 * Elements: "Care Connect" logo, notification bell icon, user profile avatar. The avatar could be a dropdown menu for "Profile" and "Logout".
 */

import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo on the left */}
        <div className="flex items-center gap-2">
          {/* You can replace this with your actual logo component or SVG */}
          <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-xl font-bold text-slate-800">Care Connect</h1>
        </div>
        
        {/* Icons and User Avatar on the right */}
        <div className="flex items-center gap-5">
          <button className="text-slate-500 hover:text-slate-700 relative">
            <Bell size={22} />
            {/* Notification dot */}
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </button>

          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
             {/* Replace with actual user image if available */}
             <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Admin Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;