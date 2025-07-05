# Excel-Style Spreadsheet Interface

A modern, responsive spreadsheet interface built with React and Tailwind CSS that mimics the look and feel of popular spreadsheet applications like Excel or Google Sheets.

## Features

- **Excel-like Interface**: Clean, professional spreadsheet layout with familiar UI elements
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Interactive Components**: Hover effects, status badges, and priority indicators
- **Data Management**: Organized display of job requests, assignments, and project tracking
- **Modern Styling**: Built with Tailwind CSS for consistent, beautiful design
- **Component Architecture**: Modular React components for easy maintenance and extension

## Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **JavaScript (JSX)** - No TypeScript for simplicity

## Project Structure

```
src/
├── components/
│   ├── SpreadsheetHeader.jsx    # Top navigation with search and user profile
│   ├── Toolbar.jsx              # Action buttons and controls
│   ├── TabNavigation.jsx        # Sheet tabs navigation
│   ├── SpreadsheetTable.jsx     # Main table container with row numbers
│   ├── ColumnHeaders.jsx        # Table column headers with icons
│   ├── DataRow.jsx              # Individual data row component
│   ├── StatusBadge.jsx          # Status indicator badges
│   ├── PriorityBadge.jsx        # Priority level badges
│   └── BottomTabs.jsx           # Bottom filter tabs
├── data/
│   └── spreadsheetData.js       # Sample data for the spreadsheet
├── App.jsx                      # Main application component
├── main.jsx                     # Application entry point
└── index.css                    # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd excel-spreadsheet-interface
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```