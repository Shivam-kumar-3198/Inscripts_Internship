import React from 'react';
import { Search, Bell, FileText } from 'lucide-react';
import ProfilePic from '../assets/Ellipse 1.png'; // adjust path as needed

const SpreadsheetHeader = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Breadcrumb details*/}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FileText className="w-4 h-4 text-green-600" />
          <span>Workspace</span>
          <span className="text-gray-400">›</span>
          <span>Folder 2</span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-medium">Spreadsheet 3</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search within sheet"
              className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Notifications */}
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
            <span
              className="absolute -top-2 -right-2 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium"
              style={{ backgroundColor: '#4B6A4F' }}
            >
              2
            </span>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-sm">
              <div className="font-medium text-gray-900">John Doe</div>
              <div className="text-gray-500">john.doe@...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetHeader;
