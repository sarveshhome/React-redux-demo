const SchoolInfo = ({ data }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">School Information</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Address:</strong> {data.address}</p>
      <p><strong>Established:</strong> {data.established}</p>
      <p><strong>Principal:</strong> {data.principal}</p>
    </div>
  );
  
  export default SchoolInfo;