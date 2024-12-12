import React from "react";
import { Outlet } from "react-router";
import { Header } from "../../components/Header/index"
import { Footer } from "../../components/Footer/index"

export function UserLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )

}