import React, { useState } from 'react';
import './App.css';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import useStudentStats from './hooks/useStudentStats';
import withLoading from './components/withLoading.jsx';

const StudentListWithLoading = withLoading(StudentList);

function App() {
  const [loading, setLoading] = useState(false);
  const { count, sorted } = useStudentStats();

  // Optional: Simulate loading (demo only)
  const handleReload = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="App">
      <h1>School Dashboard (Redux Toolkit + Hooks + HOC + useMemo)</h1>
      <AddStudent />
      <button onClick={handleReload} style={{marginTop:10}}>Simulate Loading</button>
      <p>Total Students: {count}</p>
      <StudentListWithLoading students={sorted} loading={loading} />
    </div>
  );
}

export default App;
