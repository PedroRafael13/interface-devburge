import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { UserProvider, userUser } from '../hooks/UserContext';
import { Home } from '../containers/Home';

const PrivateRoute = () => {
  const { isAuth } = userUser();
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

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
    element: (
      <UserProvider>
        <PrivateRoute />
      </UserProvider>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
