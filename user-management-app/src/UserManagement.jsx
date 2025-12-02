import React, { useState, useMemo } from 'react';
import './UserManagement.css';

const initialUsers = [
  { id: 1, name: "John" },
  { id: 2, name: "Sarah" },
  { id: 3, name: "David" },
  { id: 4, name: "Emma" },
  { id: 5, name: "Sophia" },
  { id: 6, name: "Michael" },
  { id: 7, name: "Daniel" },
  { id: 8, name: "Olivia" },
  { id: 9, name: "Ethan" },
  { id: 10, name: "Mia" },
  { id: 11, name: "Ava" },
  { id: 12, name: "Liam" },
  { id: 13, name: "Isabella" },
  { id: 14, name: "Noah" },
  { id: 15, name: "Aiden" },
  { id: 16, name: "Ella" },
  { id: 17, name: "Lucas" },
  { id: 18, name: "Aria" },
  { id: 19, name: "Mason" },
  { id: 20, name: "Amelia" },
  { id: 21, name: "Carter" },
  { id: 22, name: "Scarlett" },
  { id: 23, name: "Logan" },
  { id: 24, name: "Grace" },
  { id: 25, name: "Jackson" },
  { id: 26, name: "Chloe" },
  { id: 27, name: "Sebastian" },
  { id: 28, name: "Lily" },
  { id: 29, name: "William" },
  { id: 30, name: "Zoe" },
  { id: 31, name: "James" },
  { id: 32, name: "Penelope" },
  { id: 33, name: "Benjamin" },
  { id: 34, name: "Avery" },
  { id: 35, name: "Henry" },
  { id: 36, name: "Riley" },
  { id: 37, name: "Mila" },
  { id: 38, name: "Alexander" },
  { id: 39, name: "Luna" },
  { id: 40, name: "Elijah" },
  { id: 41, name: "Hannah" },
  { id: 42, name: "Matthew" },
  { id: 43, name: "Addison" },
  { id: 44, name: "Gabriel" },
  { id: 45, name: "Emily" },
  { id: 46, name: "Daniel" },
  { id: 47, name: "Madison" },
  { id: 48, name: "Aubrey" },
  { id: 49, name: "Andrew" },
  { id: 50, name: "Aaliyah" },
];

function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [newUserName, setNewUserName] = useState('');

  // Filter and sort users
  const filteredAndSortedUsers = useMemo(() => {
    let filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }, [users, searchTerm, sortOrder]);

  // Pagination
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredAndSortedUsers.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredAndSortedUsers.length / recordsPerPage);

  // Add new user
  const addUser = () => {
    if (newUserName.trim()) {
      const newId = Math.max(...users.map(u => u.id)) + 1;
      setUsers([...users, { id: newId, name: newUserName.trim() }]);
      setNewUserName('');
    }
  };

  // Delete user
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Start editing
  const startEdit = (user) => {
    setEditingId(user.id);
    setEditName(user.name);
  };

  // Save edit
  const saveEdit = () => {
    if (editName.trim()) {
      setUsers(users.map(user =>
        user.id === editingId ? { ...user, name: editName.trim() } : user
      ));
    }
    setEditingId(null);
    setEditName('');
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditName('');
  };

  return (
    <div className="user-management">
      <h1>User Management</h1>
      
      {/* Add User */}
      <div className="add-user">
        <input
          type="text"
          placeholder="Enter new user name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addUser()}
        />
        <button onClick={addUser}>Add User</button>
      </div>

      {/* Search */}
      <div className="search">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Sort */}
      <div className="sort">
        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          Sort {sortOrder === 'asc' ? '↑' : '↓'}
        </button>
      </div>

      {/* Records per page */}
      <div className="records-per-page">
        <label>
          Records per page:
          <select
            value={recordsPerPage}
            onChange={(e) => {
              setRecordsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </label>
      </div>

      {/* User Table */}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editingId === user.id ? (
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingId === user.id ? (
                  <>
                    <button onClick={saveEdit}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEdit(user)}>Edit</button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          First
        </button>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </div>

      <div className="info">
        Showing {currentRecords.length} of {filteredAndSortedUsers.length} users
      </div>
    </div>
  );
}

export default UserManagement;