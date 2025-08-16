import React, { useState } from "react";
import "./Paginationwithmultioption.css"

function Paginationwithmultioption() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(3);


  const users = [
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
  

  // Calculate start and end indexes
  const indexOfLastRecord = currentPage * recordsPerPage; // 10
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage; //10-10 =0

  // Slice data for current page
  const currentRecords = users.slice(indexOfFirstRecord, indexOfLastRecord); //0,10

  // Total pages
  const totalPages = Math.ceil(users.length / recordsPerPage);

  // Handle records per page change
  const handleRecordsPerPageChange = (event) => {
    const newRecordsPerPage = parseInt(event.target.value);
    setRecordsPerPage(newRecordsPerPage);
    setCurrentPage(1); // Reset to first page when changing records per page
  };

  return (
    <div className="pagination-container">
      <h2 className="pagination-header">User List</h2>
      <ul className="user-list">
        {currentRecords.map((user) => (
          <li key={user.id} className="user-list-item">
            {user.name}
          </li>
        ))}
      </ul>
      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button onClick={() => setCurrentPage(1)}>First</button>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          {/* Page {currentPage} of {totalPages} */}
          
          <div style={{ marginBottom: "10px" }}>
        <label htmlFor="recordsPerPage">Records per page: </label>
        <select
          id="recordsPerPage"
          value={recordsPerPage}
          onChange={handleRecordsPerPageChange}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
          
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <button onClick={
            () => setCurrentPage(totalPages)
        }>
            Last
        </button>
      </div>
    </div>
  );
}

export default Paginationwithmultioption;
