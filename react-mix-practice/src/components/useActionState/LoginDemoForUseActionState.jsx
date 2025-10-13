import React from 'react';
import { useActionState } from "react";
import { Form } from 'react-router-dom';
import './LoginDemoForUseActionState.css';

async function submitForData(prevState, formData) {
  try {
    const response = await fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: formData.get('username'),
        password: formData.get('password'),
        email: formData.get('email')
      }),
    });

    if (!response.ok) {
      return { success: false, error: 'Login failed' };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: 'An error occurred during login' };
  }
}

function LoginDemoForUseActionState() {
  // ✅ useActionState returns [state, formAction, isPending]
  const [state, formAction, isPending] = useActionState(submitForData, {
    success: false,
    data: null,
    error: null,
  });

  return (
    <div className="login-container">
      <h1>Login</h1>
      {/* pass formAction into Form’s action */}
      <Form action={formAction} method="post">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required minLength="6" />
        </div>

        <button type="submit" disabled={isPending}>
          {isPending ? 'Logging in...' : 'Login'}
        </button>
      </Form>

      {isPending && <p>Processing login request...</p>}

      {state.error && <div className="error">{state.error}</div>}
      {state.success && <div className="success">Login successful!</div>}
    </div>
  );
}

export default LoginDemoForUseActionState;
