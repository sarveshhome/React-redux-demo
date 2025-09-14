const OfficeDashboard = ({ office }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Office Dashboard</h2>
      <p><strong>Staff Count:</strong> {office.staffCount}</p>
      <p><strong>Contact:</strong> {office.contact}</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Departments</h3>
      <ul className="list-disc pl-5">
        {office.departments.map((dept, index) => (
          <li key={index}>{dept}</li>
        ))}
      </ul>
    </div>
  );
  
  export default OfficeDashboard;