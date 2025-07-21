// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;

// Usage in route configuration
<Route
  path="/dashboard"
  element={
    <ProtectedRoute isAuthenticated={userLoggedIn}>
      <Dashboard />
    </ProtectedRoute>
  }
/>