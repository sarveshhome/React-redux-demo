import { useState } from 'react';
import Sidebar from './Sidebar';
import SchoolInfo from './SchoolInfo';
import StudentDetails from './StudentDetails';
import TeacherDetails from './TeacherDetails';
import StaffDetails from './StaffDetails';
import TimeDetails from './TimeDetails';
import LibraryDetails from './LibraryDetails';
import OfficeDashboard from './OfficeDashboard';
import useDashboardData from '../hooks/useDashboardData';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('School Info');
  const { data, loading, error } = useDashboardData();

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">Error: {error}</div>;

  const renderSection = () => {
    switch (activeSection) {
      case 'School Info':
        return <SchoolInfo data={data.schoolInfo} />;
      case 'Student Details':
        return <StudentDetails students={data.students} />;
      case 'Teacher Details':
        return <TeacherDetails teachers={data.teachers} />;
      case 'Staff Details':
        return <StaffDetails staff={data.staff} />;
      case 'Time Details':
        return <TimeDetails timeDetails={data.timeDetails} />;
      case 'Library Details':
        return <LibraryDetails library={data.library} />;
      case 'Office Dashboard':
        return <OfficeDashboard office={data.office} />;
      default:
        return <SchoolInfo data={data.schoolInfo} />;
    }
  };

  return (
    <div className="flex">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">School Dashboard</h1>
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;