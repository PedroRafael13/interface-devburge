import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';  // Importando o Framer Motion
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { Home } from '../containers/Home';
import { Menu } from '../containers/Menu';

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <AnimatedPage>
        <Login />
      </AnimatedPage>
    ),
  },
  {
    path: '/cadastro',
    element: (
      <AnimatedPage>
        <Register />
      </AnimatedPage>
    ),
  },
  {
    path: '/',
    element: (
      <AnimatedPage>
        <Home />
      </AnimatedPage>
    ),
  },
  {
    path: '/cardapio',
    element: (
      <AnimatedPage>
        <Menu />
      </AnimatedPage>
    ),
  },
]);
