import React from 'react';

const PriorityBadge = ({ priority }) => {
  const priorityConfig = {
    'High': { color: 'bg-red-100 text-red-700 border-red-200' },
    'Medium': { color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
    'Low': { color: 'bg-blue-100 text-blue-700 border-blue-200' }
  };

  const config = priorityConfig[priority] || priorityConfig['Medium'];
  
  return (
    <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${config.color}`}>
      {priority}
    </div>
  );
};

export default PriorityBadge;