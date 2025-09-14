import useFilter from '../hooks/useFilter';

const StaffDetails = ({ staff }) => {
  const { filter, setFilter, filteredData } = useFilter(staff);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Staff Details</h2>
      <input
        type="text"
        placeholder="Search staff..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
            <th className="p-2">Department</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((member) => (
            <tr key={member.id} className="border-t">
              <td className="p-2">{member.id}</td>
              <td className="p-2">{member.name}</td>
              <td className="p-2">{member.role}</td>
              <td className="p-2">{member.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffDetails;