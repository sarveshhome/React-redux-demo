import React from 'react';

function StudentList({ students }) {
  if (students.length === 0) return <div>No students found.</div>;
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}

export default StudentList;
