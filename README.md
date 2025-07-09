# BB Institute Dashboard

A comprehensive student management dashboard built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Dashboard Overview**: Real-time statistics and analytics
- **Student Management**: Full CRUD operations for student records
- **Data Persistence**: Uses localStorage for data storage
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean and professional interface matching the provided design
- **Real-time Updates**: Dashboard statistics update automatically when student data changes

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd bb-institute-dashboard
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── app-sidebar.tsx     # Main navigation sidebar
│   ├── dashboard-header.tsx # Top header with search and user info
│   ├── stats-cards.tsx     # Statistics cards
│   ├── charts-section.tsx  # Revenue and placement charts
│   ├── student-details-table.tsx # Student management table
│   ├── student-dialog.tsx  # Add/Edit student modal
│   └── right-sidebar.tsx   # Trainers and courses sidebar
├── types/
│   └── student.ts          # TypeScript interfaces
└── README.md
\`\`\`

## Features Implementation

### Student Management
- **Add Students**: Click "Add Student" button to create new student records
- **Edit Students**: Use the action menu (⋯) to edit existing students
- **Delete Students**: Remove students via the action menu
- **Filter Students**: Filter by status (All, Enrolled, Active, Unenrolled)
- **Bulk Selection**: Select multiple students using checkboxes

### Data Persistence
- All student data is stored in localStorage
- Data persists across browser sessions
- Real-time updates to dashboard statistics

### Dashboard Analytics
- **Total Users**: Static count (2201)
- **Total Students**: Dynamic count based on student records
- **New Students**: Students enrolled in the last month
- **Trained Students**: Students with progress ≥ 80%

### Responsive Design
- Mobile-first approach
- Collapsible sidebar on mobile devices
- Responsive tables and cards
- Optimized for all screen sizes

## Deployment

The application can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings


