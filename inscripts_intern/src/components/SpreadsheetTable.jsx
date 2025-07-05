import React from 'react';
import ColumnHeaders from './ColumnHeaders';
import DataRow from './DataRow';

const SpreadsheetTable = ({ data }) => {
  // Generate empty rows to fill the table
  const emptyRows = Array.from({ length: 20 }, (_, i) => i + data.length + 1);

  return (
    <div className="flex">
      {/* Row Numbers */}
      <div className="bg-gray-50 border-r border-gray-200 w-12 flex flex-col flex-shrink-0">
        <div className="h-14 border-b border-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 bg-gray-50">
          #
        </div>
        {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
          <div 
            key={num} 
            className="h-14 border-b border-gray-200 flex items-center justify-center text-sm text-gray-600"
          >
            {num}
          </div>
        ))}
      </div>

      {/* Table Content */}
      <div className="flex-1 overflow-x-auto">
        <table className="w-full border-collapse">
          <ColumnHeaders />
          <tbody>
            {data.map((row) => (
              <DataRow key={row.id} data={row} />
            ))}
            {/* Empty rows */}
            {emptyRows.map((rowNum) => (
              <tr key={rowNum} className="hover:bg-gray-50 transition-colors">
                <td className="border border-gray-200 p-4 h-14"></td>
                <td className="border border-gray-200 p-4 h-14"></td>
                <td className="border border-gray-200 p-4 h-14"></td>
                <td className="border border-gray-200 p-4 h-14"></td>
                <td className="border border-gray-200 p-4 h-14"></td>
                <td className="border border-gray-200 p-4 h-14"></td>
                <td className="border border-gray-200 p-4 h-14"></td>
                <td className="border border-gray-200 p-4 h-14"></td>
                <td className="border border-gray-200 p-4 h-14"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpreadsheetTable;