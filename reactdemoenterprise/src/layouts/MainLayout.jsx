import React from 'react';

export const MainLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
        <h2>Enterprise React Redux App</h2>
      </header>
      <main>{children}</main>
    </div>
  );
};
