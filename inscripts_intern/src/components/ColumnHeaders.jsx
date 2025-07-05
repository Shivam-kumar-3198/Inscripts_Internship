import React from 'react';
import { FileText, Calendar, Clock, Users, Link, DollarSign } from 'lucide-react';

const ColumnHeaders = () => {
  const headers = [
    { name: 'Job Request', icon: FileText, width: 'min-w-80' },
    { name: 'Submitted', icon: Calendar, width: 'min-w-32' },
    { name: 'Status', icon: Clock, width: 'min-w-36' },
    { name: 'Submitter', icon: Users, width: 'min-w-36' },
    { name: 'URL', icon: Link, width: 'min-w-48' },
    { name: 'Assigned', icon: Users, width: 'min-w-36' },
    { name: 'Priority', icon: null, width: 'min-w-28' },
    { name: 'Due Date', icon: Calendar, width: 'min-w-32' },
    { name: 'Est. Value', icon: DollarSign, width: 'min-w-36' }
  ];

  return (
    <thead className="bg-gray-50">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            className={`border border-gray-200 p-4 text-left text-sm font-medium text-gray-700 ${header.width}`}
          >
            <div className="flex items-center gap-2">
              {header.icon && <header.icon className="w-4 h-4 text-gray-500" />}
              {header.name}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default ColumnHeaders;