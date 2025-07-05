import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('Q3 Financial Overview');
  
  const tabs = [
    { name: 'Q3 Financial Overview', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { name: 'Answer a question', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    { name: 'Extract', color: 'bg-orange-50 text-orange-700 border-orange-200' }
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-6">
      <div className="flex items-center gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.name
                ? `${tab.color} border-current`
                : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
            }`}
          >
            {tab.name}
          </button>
        ))}
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;