import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ isAuth }) => {
  const user = localStorage.getItem('devBurger:data')

  if (user) {
    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
  }

  return user
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default PrivateRoute;
