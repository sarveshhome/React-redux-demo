import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../features/student/studentSlice';

function AddStudent() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    dispatch(addStudent({ id: Date.now(), name }));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Enter student name"
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;
