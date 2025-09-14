const TimeDetails = ({ timeDetails }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Time Details</h2>
      <p><strong>School Hours:</strong> {timeDetails.schoolHours}</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Periods</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Period</th>
            <th className="p-2">Subject</th>
            <th className="p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {timeDetails.periods.map((period) => (
            <tr key={period.period} className="border-t">
              <td className="p-2">{period.period}</td>
              <td className="p-2">{period.subject}</td>
              <td className="p-2">{period.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default TimeDetails;