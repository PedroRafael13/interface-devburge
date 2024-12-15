import { Navigate, Outlet } from "react-router";
import React from 'react'
import { SideMenuAdmin } from "../../components/SideMenuAdmin";
import { Container } from "./style"

export function AdminLayout() {
  const { admin: isAdmin } = JSON.parse(
    localStorage.getItem('DevBurger:data')
  )

  return isAdmin ?
    (
      <Container>
        <SideMenuAdmin />
        <main>
          <secton>
            <Outlet />
          </secton>
        </main>
      </Container>
    )
    : (
      <Navigate to='/login' />
    )
}