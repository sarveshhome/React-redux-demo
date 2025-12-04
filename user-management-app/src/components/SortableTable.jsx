import React, { useState } from 'react';

const SortableTable = ({ users, sortConfig, onSort, onUpdate, onDelete }) => {
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleEdit = (user) => {
    setEditingId(user.id);
    setEditName(user.name);
  };

  const handleSave = (id) => {
    onUpdate(id, { name: editName });
    setEditingId(null);
    setEditName('');
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditName('');
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return '';
    return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
  };

  return (
    <table className="sortable-table">
      <thead>
        <tr>
          <th onClick={() => onSort('id')} className="sortable">
            ID{getSortIcon('id')}
          </th>
          <th onClick={() => onSort('name')} className="sortable">
            Name{getSortIcon('name')}
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>
              {editingId === user.id ? (
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSave(user.id)}
                />
              ) : (
                user.name
              )}
            </td>
            <td>
              {editingId === user.id ? (
                <>
                  <button onClick={() => handleSave(user.id)}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button onClick={() => onDelete(user.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SortableTable;