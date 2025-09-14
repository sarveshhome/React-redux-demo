import { useState } from 'react';
import useToggle from '../hooks/useToggle';

const Sidebar = ({ setActiveSection }) => {
  const [isOpen, toggleSidebar] = useToggle(true);
  const sections = [
    'School Info',
    'Student Details',
    'Teacher Details',
    'Staff Details',
    'Time Details',
    'Library Details',
    'Office Dashboard'
  ];

  return (
    <div className={`bg-gray-800 text-white h-screen ${isOpen ? 'w-64' : 'w-20'} transition-all`}>
      <button className="p-4" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && (
        <ul className="mt-4">
          {sections.map((section) => (
            <li
              key={section}
              className="p-4 hover:bg-gray-700 cursor-pointer"
              onClick={() => setActiveSection(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;