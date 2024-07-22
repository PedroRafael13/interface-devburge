import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = (userInfor) => {
    setUserData(userInfor)
  }

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