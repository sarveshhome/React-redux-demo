import useFilter from '../hooks/useFilter';

const TeacherDetails = ({ teachers }) => {
  const { filter, setFilter, filteredData } = useFilter(teachers);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Teacher Details</h2>
      <input
        type="text"
        placeholder="Search teachers..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Subject</th>
            <th className="p-2">Experience</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((teacher) => (
            <tr key={teacher.id} className="border-t">
              <td className="p-2">{teacher.id}</td>
              <td className="p-2">{teacher.name}</td>
              <td className="p-2">{teacher.subject}</td>
              <td className="p-2">{teacher.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherDetails;