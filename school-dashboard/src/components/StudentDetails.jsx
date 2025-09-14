import useFilter from '../hooks/useFilter';

const StudentDetails = ({ students }) => {
  const { filter, setFilter, filteredData } = useFilter(students);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Student Details</h2>
      <input
        type="text"
        placeholder="Search students..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Grade</th>
            <th className="p-2">Roll No</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((student) => (
            <tr key={student.id} className="border-t">
              <td className="p-2">{student.id}</td>
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.grade}</td>
              <td className="p-2">{student.rollNo}</td>
              <td className="p-2">{student.email}</td>
              <td className="p-2">{student.phone}</td>
              <td className="p-2">{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;