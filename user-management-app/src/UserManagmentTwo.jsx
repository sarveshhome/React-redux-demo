import React, { useState, useMemo } from "react";

const PAGE_SIZE = 10;

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

function UserTableTwo() {
  const [users, setUsers] = useState(initialUsers);

  // search
  const [searchTerm, setSearchTerm] = useState("");

  // sorting
  const [sortConfig, setSortConfig] = useState({
    key: "id", // "id" | "name"
    direction: "asc", // "asc" | "desc"
  });

  // pagination
  const [currentPage, setCurrentPage] = useState(1);

  // editing
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");

  // --- handlers ---

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // reset to first page when searching
  };

  const handleSort = (key) => {
    setSortConfig((prev) => {
      // toggle direction if same column
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      // new column -> default asc
      return { key, direction: "asc" };
    });
    setCurrentPage(1);
  };

  const handleEditClick = (user) => {
    setEditingId(user.id);
    setEditName(user.name);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditName("");
  };

  const handleSaveEdit = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, name: editName } : u))
    );
    setEditingId(null);
    setEditName("");
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // --- derived data: filter + sort + paginate ---

  const filteredAndSortedUsers = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    let list = users;

    if (term) {
      list = list.filter((u) => u.name.toLowerCase().includes(term));
    }

    if (sortConfig.key) {
      list = [...list].sort((a, b) => {
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];

        if (typeof aVal === "string") aVal = aVal.toLowerCase();
        if (typeof bVal === "string") bVal = bVal.toLowerCase();

        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return list;
  }, [users, searchTerm, sortConfig]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredAndSortedUsers.length / PAGE_SIZE)
  );

  const currentPageUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return filteredAndSortedUsers.slice(startIndex, endIndex);
  }, [filteredAndSortedUsers, currentPage]);

  const getSortSymbol = (key) => {
    if (sortConfig.key !== key) return "";
    return sortConfig.direction === "asc" ? " ▲" : " ▼";
  };

  // --- render ---

  return (
    <div style={{ padding: "16px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>User List (Pagination + Search + Sort + CRUD)</h2>

      {/* Search */}
      <div style={{ marginBottom: "12px" }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ padding: "6px 8px", width: "100%" }}
        />
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "12px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{ borderBottom: "1px solid #ccc", cursor: "pointer" }}
              onClick={() => handleSort("id")}
            >
              ID{getSortSymbol("id")}
            </th>
            <th
              style={{ borderBottom: "1px solid #ccc", cursor: "pointer" }}
              onClick={() => handleSort("name")}
            >
              Name{getSortSymbol("name")}
            </th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPageUsers.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center", padding: "8px" }}>
                No users found
              </td>
            </tr>
          ) : (
            currentPageUsers.map((user) => (
              <tr key={user.id}>
                <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>
                  {user.id}
                </td>
                <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>
                  {editingId === user.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>
                  {editingId === user.id ? (
                    <>
                      <button onClick={() => handleSaveEdit(user.id)}>
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        style={{ marginLeft: "4px" }}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditClick(user)}>Edit</button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        style={{ marginLeft: "4px" }}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserTableTwo;
