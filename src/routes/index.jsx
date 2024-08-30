import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { UserProvider } from '../hooks/UserContext';
import { Home } from '../containers/Home';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <UserProvider>
        <Login />
      </UserProvider>
    ),
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/',
    element: <Home />
  },
]);
