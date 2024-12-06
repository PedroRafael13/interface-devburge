import { Navigate, Outlet } from "react-router";
import React from 'react'

export function AdminLayout() {
  const { admin: isAdmin } = JSON.parse(
    localStorage.getItem('DevBurger:data')
  )

  return isAdmin ? <Outlet /> : <Navigate to='/login' />
}