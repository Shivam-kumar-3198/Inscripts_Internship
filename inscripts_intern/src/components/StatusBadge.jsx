import React from 'react';
import { Clock, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const StatusBadge = ({ status }) => {
  const statusConfig = {
    'In-process': { 
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200', 
      icon: Clock 
    },
    'Need to start': { 
      color: 'bg-blue-100 text-blue-800 border-blue-200', 
      icon: AlertCircle 
    },
    'Complete': { 
      color: 'bg-green-100 text-green-800 border-green-200', 
      icon: CheckCircle 
    },
    'Blocked': { 
      color: 'bg-red-100 text-red-800 border-red-200', 
      icon: XCircle 
    }
  };

  const config = statusConfig[status] || statusConfig['In-process'];
  const IconComponent = config.icon;
  
  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${config.color}`}>
      <IconComponent className="w-3 h-3" />
      {status}
    </div>
  );
};

export default StatusBadge;