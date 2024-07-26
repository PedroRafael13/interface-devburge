import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async (userInfor) => {
    setUserData(userInfor)

    await localStorage.setItem('devBurger:data', JSON.stringify(userInfor))
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfor = await localStorage.getItem('devBurger:data')

      if (clientInfor) {
        setUserData(JSON.parse(clientInfor))
      }
    }

    loadUserData()
  }, [])

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  )
}

export const userUser = () => {
  const context = useContext(UserContext)

  if (context) {
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}