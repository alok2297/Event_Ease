import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './state/store';
import { AuthProvider } from 'components/Blocks/Authentication/AuthContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store = {store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>
);
