import React from 'react';
import StatusBadge from './StatusBadge';
import PriorityBadge from './PriorityBadge';

const DataRow = ({ data }) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="border border-gray-200 p-4 text-sm text-gray-900">
        {data.jobRequest}
      </td>
      <td className="border border-gray-200 p-4 text-sm text-gray-600">
        {data.submitted}
      </td>
      <td className="border border-gray-200 p-4 text-sm">
        <StatusBadge status={data.status} />
      </td>
      <td className="border border-gray-200 p-4 text-sm text-gray-900">
        {data.submitter}
      </td>
      <td className="border border-gray-200 p-4 text-sm text-blue-600 hover:text-blue-800 cursor-pointer transition-colors">
        {data.url}
      </td>
      <td className="border border-gray-200 p-4 text-sm text-gray-900">
        {data.assigned}
      </td>
      <td className="border border-gray-200 p-4 text-sm">
        <PriorityBadge priority={data.priority} />
      </td>
      <td className="border border-gray-200 p-4 text-sm text-gray-600">
        {data.dueDate}
      </td>
      <td className="border border-gray-200 p-4 text-sm font-medium text-gray-900">
        {data.estValue} ₹
      </td>
    </tr>
  );
};

export default DataRow;