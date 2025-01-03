import { useContext, useState, createContext, useEffect } from "react";
import React from "react";

const UseContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({})

  const putUserData = (userInfo) => {
    setUserInfo(userInfo)

    localStorage.setItem("DevBurger:data", JSON.stringify(userInfo))
  }

  const logout = () => {
    setUserInfo({})
    localStorage.removeItem('DevBurger:data')
  }

  useEffect(() => {
    const userInfoLocalStorage = localStorage.getItem('DevBurger:data')

    if (userInfoLocalStorage) {
      setUserInfo(JSON.parse(userInfoLocalStorage))
    }
  }, [])

  return (
    <UseContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UseContext.Provider>
  )
}

export const UserUser = () => {
  const context = useContext(UseContext)


  return context
}