import React from 'react';
import SpreadsheetHeader from '../src/components/SpreadsheetHeader';
import Toolbar from '../src/components/Toolbar';
import TabNavigation from '../src/components/TabNavigation';
import SpreadsheetTable from '../src/components/SpreadsheetTable';
import BottomTabs from '../src/components/BottomTabs';
import { spreadsheetData } from '../src/data/spreadsheetData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SpreadsheetHeader />
      <Toolbar />
      <TabNavigation />
      
      <div className="bg-white">
        <SpreadsheetTable data={spreadsheetData} />
      </div>
      
      <BottomTabs />
    </div>
  );
}

export default App;