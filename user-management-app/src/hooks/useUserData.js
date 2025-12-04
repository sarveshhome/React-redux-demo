import { useState } from 'react';

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

export const useUserData = () => {
  const [users, setUsers] = useState(initialUsers);

  const updateUser = (id, updates) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, ...updates } : user
    ));
  };

  const deleteUser = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const addUser = (user) => {
    const newId = Math.max(...users.map(u => u.id)) + 1;
    setUsers(prev => [...prev, { ...user, id: newId }]);
  };

  return {
    users,
    updateUser,
    deleteUser,
    addUser
  };
};