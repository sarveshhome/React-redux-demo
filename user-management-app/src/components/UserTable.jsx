import React, { useState, useMemo } from 'react';
import SearchBar from './SearchBar';
import SortableTable from './SortableTable';
import Pagination from './Pagination';
import { useUserData } from '../hooks/useUserData';

const UserTable = () => {
  const { users, updateUser, deleteUser } = useUserData();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  const filteredAndSortedUsers = useMemo(() => {
    let filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      const modifier = sortConfig.direction === 'asc' ? 1 : -1;
      
      if (typeof aVal === 'string') {
        return aVal.localeCompare(bVal) * modifier;
      }
      return (aVal - bVal) * modifier;
    });
  }, [users, searchTerm, sortConfig]);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredAndSortedUsers.slice(start, start + pageSize);
  }, [filteredAndSortedUsers, currentPage, pageSize]);

  const totalPages = Math.ceil(filteredAndSortedUsers.length / pageSize);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <div className="user-table-container">
      <h2>User Management</h2>
      
      <SearchBar onSearch={handleSearch} />
      
      <SortableTable
        users={paginatedUsers}
        sortConfig={sortConfig}
        onSort={handleSort}
        onUpdate={updateUser}
        onDelete={deleteUser}
      />
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      
      <div className="info">
        Showing {paginatedUsers.length} of {filteredAndSortedUsers.length} users
      </div>
    </div>
  );
};

export default UserTable;