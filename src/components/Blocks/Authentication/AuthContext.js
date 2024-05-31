import React, { createContext, useState, useEffect } from 'react';
import { loginUser, registerUser, registeVendor, loginVendor } from 'Api/services';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
    role: localStorage.getItem('role')
  });

  useEffect(() => {
    if (authState.token && authState.user) {
      localStorage.setItem('token', authState.token);
      localStorage.setItem('user', JSON.stringify(authState.user));
      localStorage.setItem('role', JSON.stringify(authState.role));
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('role');
    }
  }, [authState]);

  // For user login
  const login = async (email, password) => {
    try {
      const response = await loginUser(email, password)
      if (response.ok) {
        setAuthState({ token: password, user: email, role: "User" });
      } else {
        console.error('Login failed:', response?.msg);
      }
      return response;
    } catch (error) {
      console.error('Login error:', error);
      return error;
    }
  };

  // For user registration
  const register = async (email, password) => {
    try {
      const response = await registerUser(email, password)
      if (response.ok) {
        setAuthState({ token: password, user: email, role: "User" });
      } else {
        console.error('Login failed:', response?.msg);
      }
      return response;
    } catch (error) {
      console.error('Login error:', error);
      return error;
    }
  };

  // For vendor login
const vendorLogin = async (data) => {
  try {
    const response = await loginVendor(data.email, data.password);
    if (response.ok) {
      setAuthState({ token: data.password, user: data.email, role: "Vendor" });
    } else {
      const responseData = await response.json();
      console.error('Login failed:', responseData?.message);
    }
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return error;
  }
};

// For vendor registration
const vendorRegister = async ({email, password, brandName, city, vendorType, phoneNumber}) => {
  try {
    const response = await registeVendor(email, password, brandName, city, vendorType, phoneNumber);
    if (response.ok) {
      setAuthState({ token: password, user: email, role: "Vendor" });
    } else {
      const responseData = await response.json();
      console.error('Registration failed:', responseData?.message);
    }
    return response;
  } catch (error) {
    console.error('Registration error:', error);
    return error;
  }
};

// For logout
  const logout = () => {
    setAuthState({ token: null, user: null, role: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout, register, vendorLogin, vendorRegister }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
