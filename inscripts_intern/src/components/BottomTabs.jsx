import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState('All Orders');
  const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-6 py-3">
      <div className="flex items-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              activeTab === tab
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
        <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BottomTabs;
