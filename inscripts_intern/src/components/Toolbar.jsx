import React from 'react';
import {
  EyeOff,
  ArrowUpDown,
  Filter,
  Grid3x3,
  Download,
  Upload,
  Share2,
  Plus,
} from 'lucide-react';

const Toolbar = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 mr-4">
            Toolbar ››
          </span>

          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <EyeOff className="w-4 h-4" />
            Hide fields
          </button>

          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <ArrowUpDown className="w-4 h-4" />
            Sort
          </button>

          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>

          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Grid3x3 className="w-4 h-4" />
            Cell view
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Import
          </button>

          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Upload className="w-4 h-4" />
            Export
          </button>

          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>

          {/* Custom Green Button */}
          <button
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-white rounded-md transition-colors"
            style={{ backgroundColor: '#4B6A4F' }}
          >
            <Plus className="w-4 h-4" />
            New Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
