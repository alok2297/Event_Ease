import React, { createContext, useState, useEffect } from 'react';
import { loginUser, registerUser } from 'Api/services';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
  });

  useEffect(() => {
    if (authState.token && authState.user) {
      localStorage.setItem('token', authState.token);
      localStorage.setItem('user', JSON.stringify(authState.user));
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }, [authState]);

  const login = async (email, password) => {
    try {
      const response = await loginUser(email, password)
      if (response.ok) {
        setAuthState({ token: password, user: email });
      } else {
        console.error('Login failed:', response?.msg);
      }
      return response;
    } catch (error) {
      console.error('Login error:', error);
      return error;
    }
  };

  const register = async (email, password) => {
    try {
      const response = await registerUser(email, password)
      if (response.ok) {
        setAuthState({ token: password, user: email });
      } else {
        console.error('Login failed:', response?.msg);
      }
      return response;
    } catch (error) {
      console.error('Login error:', error);
      return error;
    }
  };

  const logout = () => {
    setAuthState({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
