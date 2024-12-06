import React from "react";
import { Outlet } from "react-router";
import { Header, Footer } from "../../components"

export function UserLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )

}