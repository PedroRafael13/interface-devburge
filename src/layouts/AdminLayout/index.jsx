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
        <section>
          <main>
            <SideMenuAdmin />
            <Outlet />
          </main>
        </section>
      </Container>
    )
    : (
      <Navigate to='/login' />
    )
}